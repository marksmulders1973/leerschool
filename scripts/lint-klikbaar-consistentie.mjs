#!/usr/bin/env node
// scripts/lint-klikbaar-consistentie.mjs
//
// Vangt "klikbaar-inconsistentie": als in één component meerdere varianten van
// hetzelfde lijst-item worden gerenderd en de éné variant is klikbaar (onClick /
// role="button" / knop / link) maar een broertje-variant NIET, dan is dat vaak
// een vergeten klik-handler — precies de bug die de "Nog niet geoefend"-vakken
// op /mijn stil maakte (v503→504): de gemeten balken waren klikbaar, de
// nog-niet-geoefende kaartjes niet.
//
// Zo'n gat is onzichtbaar voor `vite build` en gewone code-review: de code is
// geldig, hij dóét alleen niks als je erop tikt. Deze check maakt het zichtbaar.
//
// Heuristiek (met echte JSX-parser, geen regex):
//   - Kaart-achtig lijst-item = container-tag (div/li/article/section) MÉT een
//     `key=`-prop (React vereist keys op lijst-items → sterk signaal).
//   - "Klikbaar" = heeft onClick OF role="button", of is zelf een <button>/<a>.
//   - Per component groeperen (dichtstbijzijnde met-hoofdletter-functie).
//   - FLAG een niet-klikbaar item alleen als:
//       (a) een broertje-item van dezelfde tag in hetzelfde component WÉL
//           klikbaar is (er is dus een "norm"), EN
//       (b) het item zélf GEEN klikbaar kind bevat — want een kaart met een
//           eigen knop/link erin is bewust niet-heel-de-kaart-klikbaar
//           (zoals de "houd me op de hoogte"-knop). Die flaggen we niet.
//
// Advies-tool: standaard exit 0 (net als de andere lint-scripts). Met --strict
// exit 1 bij vondsten, zodat je 'm desgewenst in een gate kunt hangen.
//
// Run: node scripts/lint-klikbaar-consistentie.mjs [--strict]

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, extname } from "node:path";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
const traverse = _traverse.default || _traverse;

const ROOT = process.cwd();
const SRC = join(ROOT, "src");
const STRICT = process.argv.includes("--strict");

const CARD_TAGS = new Set(["div", "li", "article", "section"]);
const NATIVE_INTERACTIVE = new Set(["button", "a", "input", "select", "textarea"]);

// ── JSX-helpers ──────────────────────────────────────────────────────────────
function tagName(openingEl) {
  const n = openingEl?.name;
  return n && n.type === "JSXIdentifier" ? n.name : null;
}
function getAttr(openingEl, name) {
  return (openingEl?.attributes || []).find(
    (a) => a.type === "JSXAttribute" && a.name?.name === name,
  );
}
function attrStringValue(attr) {
  if (!attr) return null;
  if (attr.value?.type === "StringLiteral") return attr.value.value;
  return null; // expressie-waarde → onbekend
}
// Is dit element zélf een klik-doel?
function isClickable(openingEl) {
  const tag = tagName(openingEl);
  if (NATIVE_INTERACTIVE.has(tag)) return true;
  if (getAttr(openingEl, "onClick")) return true;
  if (attrStringValue(getAttr(openingEl, "role")) === "button") return true;
  return false;
}

// Loop generiek door élke geneste AST-node (ook door {cond && <btn/>}).
function* iterNodes(node) {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) {
    for (const n of node) yield* iterNodes(n);
    return;
  }
  if (typeof node.type === "string") yield node;
  for (const k in node) {
    if (k === "loc" || k === "start" || k === "end" || k === "range") continue;
    if (k === "leadingComments" || k === "trailingComments" || k === "comments") continue;
    const v = node[k];
    if (v && typeof v === "object") yield* iterNodes(v);
  }
}
// Bevat de subtree (excl. root) een eigen klik-doel? → dan bewust niet
// heel-de-kaart-klikbaar.
function hasInteractiveDescendant(elementNode) {
  let first = true;
  for (const n of iterNodes(elementNode)) {
    if (n.type !== "JSXOpeningElement") continue;
    if (first && n === elementNode.openingElement) {
      first = false;
      continue; // sla de root-opening over
    }
    if (isClickable(n)) return true;
  }
  return false;
}

// Groepeer op de dichtstbijzijnde `.map()`-lijst — NIET op de hele component.
// Zo worden losse lijsten (grafiek-staafjes, stat-regels) niet met elkaar
// vergeleken. Retourneert een sleutel per map-aanroep, of null (geen lijst).
function nearestMapGroup(path) {
  let fp = path.getFunctionParent();
  while (fp) {
    const pp = fp.parentPath;
    if (
      pp?.isCallExpression() &&
      pp.node.callee?.type === "MemberExpression" &&
      pp.node.callee.property?.name === "map" &&
      pp.node.arguments[0] === fp.node
    ) {
      return `map@${pp.node.loc.start.line}`;
    }
    fp = fp.getFunctionParent();
  }
  return null;
}

// De klikbare variant staat vaak in een aparte helper (zoals `balkGemeten`),
// die de map-callback aanroept met `return helper(...)`. Die helper resolven we,
// zodat z'n root-kaart als broertje in dezelfde lijst-groep meetelt.
function unwrapJSX(node) {
  if (!node) return null;
  if (node.type === "JSXElement") return node;
  if (node.type === "JSXFragment") return node.children.find((c) => c.type === "JSXElement") || null;
  if (node.type === "ConditionalExpression")
    return unwrapJSX(node.consequent) || unwrapJSX(node.alternate);
  if (node.type === "ParenthesizedExpression") return unwrapJSX(node.expression);
  return null;
}
function firstReturnedCard(fnNode) {
  if (fnNode.type === "ArrowFunctionExpression" && fnNode.body.type !== "BlockStatement") {
    return unwrapJSX(fnNode.body);
  }
  let found = null;
  (function search(node) {
    if (found || !node || typeof node !== "object") return;
    if (Array.isArray(node)) {
      for (const n of node) search(n);
      return;
    }
    // niet in geneste functies duiken
    if (
      node !== fnNode &&
      (node.type === "FunctionDeclaration" ||
        node.type === "FunctionExpression" ||
        node.type === "ArrowFunctionExpression")
    )
      return;
    if (node.type === "ReturnStatement" && node.argument) {
      const j = unwrapJSX(node.argument);
      if (j) {
        found = j;
        return;
      }
    }
    for (const k in node) {
      if (k === "loc" || k === "start" || k === "end") continue;
      const v = node[k];
      if (v && typeof v === "object") search(v);
    }
  })(fnNode.body || fnNode);
  return found;
}
function collectLocalFns(ast) {
  const fns = new Map();
  traverse(ast, {
    FunctionDeclaration(p) {
      if (p.node.id) fns.set(p.node.id.name, p.node);
    },
    VariableDeclarator(p) {
      const init = p.node.init;
      if (
        p.node.id?.type === "Identifier" &&
        (init?.type === "ArrowFunctionExpression" || init?.type === "FunctionExpression")
      )
        fns.set(p.node.id.name, init);
    },
  });
  return fns;
}

// ── Bestanden verzamelen ─────────────────────────────────────────────────────
function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      if (entry === "node_modules" || entry === "dist" || entry === "__tests__") continue;
      walk(full, out);
    } else {
      const ext = extname(entry);
      if ((ext === ".jsx" || ext === ".tsx") && !entry.endsWith(".test.jsx") && !entry.endsWith(".test.tsx")) {
        out.push(full);
      }
    }
  }
  return out;
}

// ── Analyse per bestand ──────────────────────────────────────────────────────
function analyze(file) {
  const code = readFileSync(file, "utf8");
  let ast;
  try {
    ast = parse(code, {
      sourceType: "module",
      plugins: ["jsx", file.endsWith(".tsx") ? "typescript" : "flow"],
    });
  } catch {
    return []; // niet-parsebaar → overslaan (advies-tool, niet blokkerend)
  }

  const localFns = collectLocalFns(ast);
  const groups = new Map(); // mapKey -> [{tag, line, clickable, hasChildClick}]
  const seen = new Set(); // dedup op groep+regel
  const add = (key, m) => {
    if (!key) return;
    const id = key + "#" + m.line;
    if (seen.has(id)) return;
    seen.add(id);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(m);
  };

  // 1) Directe kaart-items (met key) in een .map()-lijst.
  traverse(ast, {
    JSXElement(path) {
      const opening = path.node.openingElement;
      const tag = tagName(opening);
      if (!CARD_TAGS.has(tag)) return;
      if (!getAttr(opening, "key")) return; // alleen echte lijst-items
      add(nearestMapGroup(path), {
        tag,
        line: opening.loc.start.line,
        clickable: isClickable(opening),
        hasChildClick: hasInteractiveDescendant(path.node),
      });
    },
    // 2) `return helper(...)` binnen een map-callback → resolve de helper-kaart
    //    en tel 'm mee als broertje in diezelfde lijst (vangt balkGemeten).
    CallExpression(path) {
      const callee = path.node.callee;
      if (callee?.type !== "Identifier") return;
      const fn = localFns.get(callee.name);
      if (!fn) return;
      const grp = nearestMapGroup(path);
      if (!grp) return;
      const card = firstReturnedCard(fn);
      if (!card) return;
      const tag = tagName(card.openingElement);
      if (!CARD_TAGS.has(tag)) return;
      add(grp, {
        tag,
        line: card.openingElement.loc.start.line,
        clickable: isClickable(card.openingElement),
        hasChildClick: hasInteractiveDescendant(card),
      });
    },
  });

  // Per lijst per tag: is er een klikbare norm + een niet-klikbare outlier?
  const findings = [];
  for (const [, items] of groups) {
    const byTag = new Map();
    for (const it of items) {
      if (!byTag.has(it.tag)) byTag.set(it.tag, []);
      byTag.get(it.tag).push(it);
    }
    for (const [tag, list] of byTag) {
      const clickable = list.filter((i) => i.clickable);
      if (clickable.length === 0) continue; // geen norm om tegen te vergelijken
      const outliers = list.filter((i) => !i.clickable && !i.hasChildClick);
      if (outliers.length === 0) continue;
      for (const o of outliers) {
        findings.push({
          file: relative(ROOT, file),
          tag,
          line: o.line,
          clickableLines: clickable.map((c) => c.line),
        });
      }
    }
  }
  return findings;
}

// ── Uitvoeren ────────────────────────────────────────────────────────────────
const files = walk(SRC);
let all = [];
for (const f of files) all = all.concat(analyze(f));

if (all.length === 0) {
  console.log("✅ Geen klikbaar-inconsistenties gevonden in " + files.length + " bestanden.");
  process.exit(0);
}

console.log(
  `⚠️  ${all.length} mogelijke klikbaar-inconsistentie(s) — controleer handmatig:\n`,
);
for (const f of all) {
  console.log(`  ${f.file}:${f.line}`);
  console.log(
    `     <${f.tag} key=...> is NIET klikbaar, terwijl broertje-<${f.tag}> in ` +
      `dezelfde lijst (regel ${f.clickableLines.join(", ")}) dat wél is.`,
  );
  console.log(
    `     → Bedoeling? Voeg onClick/role="button" toe. Niet klikbaar bedoeld? Negeer.\n`,
  );
}
console.log(
  "Let op: heuristiek — een kaart met een eigen knop/link erin wordt bewust NIET geflagd.",
);
process.exit(STRICT ? 1 : 0);
