// 🔗 Koppel-lijntjes in de profielkiezer "Wie oefent er?" (Mark 14 okt 2026,
// schermafbeelding: "als ze gekoppeld zijn wordt het oranje met een lijntje,
// bv. ouder 1 is gekoppeld met kind 1 en kind 2").
//
// Bron = wat dit toestel weet (lk_koppelingen per kindnaam: ouder {van_wie},
// leraar {van_wie}) plus, voor een ingelogde ouder, de bevestigde kinderen van
// het account (parent_child_links). Pure functie, los testbaar.

const laag = (s) => String(s || "").trim().toLowerCase();

function opsom(namen) {
  const l = [...new Set(namen.map((n) => String(n || "").trim()).filter(Boolean))];
  if (l.length <= 1) return l.join("");
  return l.slice(0, -1).join(", ") + " en " + l[l.length - 1];
}

/**
 * @param {Array<{naam:string, role:string}>} profielen  profielen op dit toestel
 * @param {(naam:string)=>({ouder?:{van_wie?:string}, leraar?:{van_wie?:string}}|null)} koppelingVoor
 * @param {string[]} accountKinderen  bevestigde kinderen van het ingelogde ouder-account ([] als geen)
 * @returns {Map<string,string>} naam (lower) → "gekoppeld met …"
 */
export function koppelLijntjes(profielen, koppelingVoor, accountKinderen = []) {
  const uit = new Map();
  const kinderen = profielen.filter((p) => p.role !== "ouder" && p.role !== "teacher");
  const perKind = new Map(kinderen.map((p) => [laag(p.naam), koppelingVoor(p.naam) || null]));

  for (const p of profielen) {
    const k = laag(p.naam);
    if (!k) continue;
    if (p.role === "ouder") {
      const eigen = kinderen.filter((c) => laag(perKind.get(laag(c.naam))?.ouder?.van_wie) === k).map((c) => c.naam);
      const alle = opsom([...eigen, ...(accountKinderen || [])]);
      if (alle) uit.set(k, `gekoppeld met ${alle}`);
    } else if (p.role === "teacher") {
      const eigen = kinderen.filter((c) => laag(perKind.get(laag(c.naam))?.leraar?.van_wie) === k).map((c) => c.naam);
      const alle = opsom(eigen);
      if (alle) uit.set(k, `gekoppeld met ${alle}`);
    } else {
      const kop = perKind.get(k);
      const delen = [];
      if (kop?.ouder) delen.push(String(kop.ouder.van_wie || "").trim() || "thuis");
      if (kop?.leraar) delen.push(String(kop.leraar.van_wie || "").trim() || "school");
      if (delen.length) uit.set(k, `gekoppeld met ${opsom(delen)}`);
    }
  }
  return uit;
}

/**
 * Wie kan hier met één tik gekoppeld worden? (Mark 14 okt 2026, 2e schermafbeelding:
 * "nu zie ik mijn naam en die van Brian, maar niet dat ik kan koppelen".)
 * Elk kind op dit toestel zónder ouder-koppeling × elke ouder op dit toestel.
 * @returns {Array<{kind:string, ouder:string}>}
 */
export function koppelKandidaten(profielen, lijntjes) {
  const ouders = profielen.filter((p) => p.role === "ouder");
  const kinderen = profielen.filter((p) => p.role !== "ouder" && p.role !== "teacher" && !lijntjes?.has(laag(p.naam)));
  const uit = [];
  for (const k of kinderen) for (const o of ouders) uit.push({ kind: k.naam, ouder: o.naam });
  return uit.slice(0, 6);
}

/** Groep-waarde voor de server ("8", "brugklas") uit een app-niveau ("groep8", "klas1|havo"). */
export function groepUitNiveau(level) {
  const l = String(level || "");
  if (/^groep12$/.test(l)) return "2";
  const m = l.match(/^groep(\d)$/);
  if (m) return m[1];
  if (/^klas1(\||$)/.test(l)) return "brugklas";
  return null;
}
