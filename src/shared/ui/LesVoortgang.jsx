// 📚 Voortgangsregel onder een klaargezette les — gedeeld door de ouder-kant
// (OuderInzicht) en de leerkracht-kant (LeraarKlaarzet).
//
// Mark 4 sep 2026: hij koppelde met Brian, Brian rondde een heel leerpad af, en
// het overzicht bleef "nog te doen" tonen. Oorzaak: het veld `gedaan` op
// ouder_klaargezet/leraar_klaargezet is een handmatig vinkje dat het kind zelf
// moet aantikken — en dat doet een kind vrijwel nooit. De échte voortgang staat
// in learn_progress. Die tellen we hier, zodat een les vanzelf meegroeit van
// "nog te doen" naar "bezig — 1 van de 5 delen" naar "afgerond".
//
// Het handmatige vinkje blijft gelden als extra signaal: staat dat aan, dan is
// de les hoe dan ook klaar.

import pathManifest from "../../learnPaths/pathManifest.generated.json";

// Manifest-only (~155 kB) in plaats van alle leerpaden (5,8 MB) — zelfde truc
// als Curriculum.jsx. We hebben alleen stepCount, title en emoji nodig.
export const PATHS_BY_ID = Object.fromEntries(pathManifest.map((p) => [p.id, p]));

/**
 * @param {object} item       rij uit ouder_klaargezet/leraar_klaargezet ({ path_id, gedaan })
 * @param {object} voortgang  { gedaan:aantal stappen, laatste:Date } uit learn_progress
 * @param {string} watNu      woord voor de leerling ("je kind" / "je leerling")
 */
export default function LesVoortgang({ item, voortgang, watNu = "je kind" }) {
  const totaal = PATHS_BY_ID[item?.path_id]?.stepCount || 0;
  const gedaan = voortgang?.gedaan || 0;
  const af = item?.gedaan || (totaal > 0 && gedaan >= totaal);
  const kleur = af ? "#69f0ae" : gedaan > 0 ? "#ffd54f" : "rgba(255,255,255,0.45)";

  let tekst;
  if (af && totaal > 0) tekst = "✓ afgerond — alle " + totaal + " delen gedaan";
  else if (af) tekst = "✓ " + watNu + " heeft dit gedaan";
  else if (gedaan > 0 && totaal > 0) tekst = "bezig — " + gedaan + " van de " + totaal + " delen";
  else if (gedaan > 0) tekst = "bezig — " + gedaan + (gedaan === 1 ? " deel" : " delen") + " gedaan";
  else tekst = totaal > 0 ? "nog te doen — " + totaal + " delen" : "nog te doen";

  const wanneer = voortgang?.laatste
    ? voortgang.laatste.toLocaleDateString("nl-NL", { day: "numeric", month: "short" }) +
      " om " + voortgang.laatste.toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" })
    : null;

  return (
    <div>
      <div style={{ fontSize: 11, color: kleur, fontWeight: 700 }}>{tekst}</div>
      {totaal > 0 && (
        <div style={{ height: 4, borderRadius: 3, background: "rgba(255,255,255,0.10)", marginTop: 4, overflow: "hidden" }}>
          <div
            style={{
              width: Math.min(100, Math.round((gedaan / totaal) * 100)) + "%",
              height: "100%",
              background: kleur,
              borderRadius: 3,
              transition: "width .3s",
            }}
          />
        </div>
      )}
      {wanneer && (
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginTop: 3 }}>
          laatst gewerkt: {wanneer}
        </div>
      )}
    </div>
  );
}
