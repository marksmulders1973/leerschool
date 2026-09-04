// 🔍 "Wat heeft mijn kind precies gemaakt?" — uitklapbaar detail onder een les.
//
// Mark 4 sep 2026: hij klikte vanuit het ouder-overzicht door naar de les en
// kreeg de gewone kind-weergave te zien, met overal "0/1 delen" — want die
// pagina leest de voortgang van het toestel waarop je kijkt, en op Marks
// telefoon staat Brians werk niet. Zijn wens: "per vraag, bv. erachter of
// eronder, iets als goed/fout/overgeslagen ... mijn doel: als je als ouder
// opgeeft wat je kind gaat maken, inzien wat er exact gemaakt is en wat niet".
//
// Wat we kunnen laten zien, en waarom:
//  • per DEEL (stap): gemaakt of nog open, wanneer, en hoe het ging.
//  • per VRAAG: in één keer goed, of na hoeveel pogingen. Dat wordt sinds
//    4 sep 2026 bewaard in learn_progress.check_fouten. Voor werk van vóór die
//    datum weten we het niet — dan tonen we het deel als gemaakt zonder de
//    vraag-details, en zeggen dat er eerlijk bij.
//  • "overgeslagen" bestaat in een leerpad niet: het kind gaat pas verder als
//    het antwoord goed is. Een vraag is dus gemaakt of nog niet aan toe
//    gekomen. Bij toetsen ligt dat anders — daar kan wél overgeslagen worden.
//
// Het leerpad zelf wordt lazy geladen (alleen dit ene pad, ~50 kB) zodat we de
// echte vraagteksten kunnen tonen in plaats van "vraag 3".

import { useState, useEffect } from "react";
import { getLearnPath } from "../../learnPaths/pathLoaders.js";

const KLEUR = {
  goed: "#69f0ae",
  moeite: "#ffd54f",
  open: "rgba(255,255,255,0.32)",
};

// Vraagtekst opschonen: de leerpaden gebruiken **vet** en *cursief*, en soms
// staat er html in. Voor een compact regeltje willen we platte tekst.
function plat(tekst, max = 90) {
  const t = String(tekst || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return t.length > max ? t.slice(0, max - 1).trimEnd() + "…" : t;
}

function VraagRegel({ nummer, tekst, fouten, gedaan }) {
  let icoon;
  let kleur;
  let bijschrift;
  if (!gedaan) {
    icoon = "○";
    kleur = KLEUR.open;
    bijschrift = "nog niet gemaakt";
  } else if (fouten == null) {
    icoon = "•";
    kleur = KLEUR.open;
    bijschrift = "gemaakt";
  } else if (fouten === 0) {
    icoon = "✓";
    kleur = KLEUR.goed;
    bijschrift = "in één keer goed";
  } else {
    icoon = "!";
    kleur = KLEUR.moeite;
    bijschrift = fouten === 1 ? "na 1 keer fout goed" : `na ${fouten} keer fout goed`;
  }
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "flex-start", padding: "3px 0" }}>
      <span style={{ color: kleur, fontWeight: 700, fontSize: 12, width: 12, flexShrink: 0, textAlign: "center" }} aria-hidden="true">
        {icoon}
      </span>
      <span style={{ fontSize: 11.5, color: "rgba(255,255,255,0.62)", flex: 1, minWidth: 0, lineHeight: 1.45 }}>
        {nummer}. {tekst}
      </span>
      <span style={{ fontSize: 10.5, color: kleur, flexShrink: 0, fontWeight: 700 }}>{bijschrift}</span>
    </div>
  );
}

/**
 * @param {string} pathId    het leerpad
 * @param {object} voortgang { stappen:Set, perStap:{ [idx]: {wanneer, pogingen, fouten} } }
 * @param {string} naam      naam van het kind/de leerling, voor de lege tekst
 */
export default function LesDetail({ pathId, voortgang, naam = "je kind" }) {
  const [pad, setPad] = useState(null);
  const [fout, setFout] = useState(false);

  useEffect(() => {
    let weg = false;
    getLearnPath(pathId)
      .then((p) => { if (!weg) setPad(p); })
      .catch(() => { if (!weg) setFout(true); });
    return () => { weg = true; };
  }, [pathId]);

  if (fout) {
    return <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.4)", padding: "8px 0" }}>Deze les kon niet geladen worden.</div>;
  }
  if (!pad) {
    return <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.4)", padding: "8px 0" }}>Even ophalen…</div>;
  }

  const stappen = pad.steps || [];
  const gedaanSet = voortgang?.stappen || new Set();
  const perStap = voortgang?.perStap || {};
  // Weten we van geen enkel gemaakt deel hoe het per vraag ging? Dan is dit
  // werk van vóór 4 sep 2026 en zeggen we dat, in plaats van te suggereren
  // dat alle vragen zomaar "gemaakt" waren.
  const heeftVraagDetail = Object.values(perStap).some((d) => Array.isArray(d?.fouten));
  const iets = gedaanSet.size > 0;

  return (
    <div style={{ marginTop: 8, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 8 }}>
      {!iets && (
        <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.45)", marginBottom: 6 }}>
          {naam} is hier nog niet aan begonnen. Hieronder staat wat er klaarstaat.
        </div>
      )}
      {iets && !heeftVraagDetail && (
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 8, lineHeight: 1.5 }}>
          Van dit werk weten we per deel wat er gemaakt is, maar niet per vraag —
          dat bewaren we pas sinds 4 september. Bij nieuw werk zie je hier per
          vraag hoe het ging.
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {stappen.map((stap, i) => {
          const isGedaan = gedaanSet.has(i);
          const d = perStap[i];
          const checks = stap.checks || [];
          const kleur = isGedaan ? KLEUR.goed : KLEUR.open;
          const wanneer = d?.wanneer
            ? d.wanneer.toLocaleDateString("nl-NL", { day: "numeric", month: "short" }) +
              " om " + d.wanneer.toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" })
            : null;
          return (
            <div key={i}>
              <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <span style={{ color: kleur, fontSize: 13, fontWeight: 700 }} aria-hidden="true">
                  {isGedaan ? "●" : "○"}
                </span>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: isGedaan ? "var(--color-text-strong)" : "rgba(255,255,255,0.5)", flex: 1, minWidth: 0 }}>
                  {stap.title || `Deel ${i + 1}`}
                </span>
                <span style={{ fontSize: 10.5, color: kleur, fontWeight: 700, flexShrink: 0 }}>
                  {isGedaan ? "gemaakt" : "staat nog open"}
                </span>
              </div>
              {wanneer && (
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginLeft: 20, marginTop: 1 }}>{wanneer}</div>
              )}
              {checks.length > 0 && (
                <div style={{ marginLeft: 20, marginTop: 4 }}>
                  {checks.map((c, ci) => (
                    <VraagRegel
                      key={ci}
                      nummer={ci + 1}
                      tekst={plat(c.q)}
                      gedaan={isGedaan}
                      fouten={Array.isArray(d?.fouten) ? (d.fouten[ci] ?? null) : null}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
