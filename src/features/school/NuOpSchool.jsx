// 🏫 Kaart "Nu op school" op Mijn pagina (Mark 26 okt 2026). Per vak één tik: waar is de klas nu mee
// bezig? Overslaan mag; na een schoolperiode (~6 weken) vraagt de kaart het één keer opnieuw.
import { useState } from "react";
import Card from "../../shared/ui/Card.jsx";
import { track } from "../../utils.js";
import { onderwerpenVoorVak, isVerlopen } from "./nuOpSchool.js";

const knop = (aan) => ({
  padding: "8px 12px", borderRadius: 999, cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 13.5, fontWeight: 700,
  border: aan ? "2px solid #69f0ae" : "1px solid rgba(255,255,255,0.2)", background: aan ? "rgba(105,240,174,0.14)" : "rgba(255,255,255,0.05)",
  color: aan ? "#69f0ae" : "var(--color-text, #e8edf5)",
});

/**
 * vakken: [{ subj, titel }] (dezelfde lijst als de vaktegels) · keuzes: uit leesNuOpSchool(player)
 * onKies(vak, keuze|null) bewaart en ververst.
 */
export default function NuOpSchool({ vakken, vakMeta, groep, keuzes = {}, onKies, eyebrowStijl }) {
  const [open, setOpen] = useState(null); // vak waarvan de kaartjes openstaan
  if (!groep || !vakken?.length) return null;
  const gekozen = vakken.filter((v) => keuzes[v.subj]?.pathId);
  const verlopen = gekozen.filter((v) => isVerlopen(keuzes[v.subj]));
  return (
    <Card padding="md" style={{ marginBottom: "var(--space-4)", border: "1px solid rgba(105,240,174,0.25)" }}>
      <div style={eyebrowStijl}>🏫 Nu op school</div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "var(--color-text-strong, #fff)", margin: "2px 0 4px" }}>
        {gekozen.length ? "Waar zijn jullie nu mee bezig?" : "Waar zijn jullie in de klas nu mee bezig?"}
      </div>
      <div style={{ fontSize: 13, color: "var(--color-text-muted, #8899aa)", marginBottom: 10, lineHeight: 1.5 }}>
        {gekozen.length
          ? (verlopen.length ? "Al een paar weken geleden ingevuld — klopt het nog? Tik om te veranderen." : "Je kwartier begint hiermee. Tik op een vak om het te veranderen.")
          : "Tik per vak aan wat de juf of meester nu doet. Dan begint je kwartier daarmee. Weet je het niet? Dan sla je het over."}
      </div>
      <div style={{ display: "grid", gap: 6 }}>
        {vakken.map((v) => {
          const meta = vakMeta(v.subj);
          const k = keuzes[v.subj];
          const isOpen = open === v.subj;
          const oud = k?.pathId && isVerlopen(k);
          return (
            <div key={v.subj}>
              <button type="button" onClick={() => { setOpen(isOpen ? null : v.subj); try { track("nu_op_school_open", { vak: v.subj }); } catch { /* */ } }}
                aria-expanded={isOpen}
                style={{ display: "flex", alignItems: "center", gap: 8, width: "100%", textAlign: "left", padding: "8px 10px", borderRadius: 12, cursor: "pointer", fontFamily: "var(--font-body)",
                  border: "1px solid rgba(255,255,255,0.1)", background: isOpen ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)", color: "var(--color-text)" }}>
                <span aria-hidden="true" style={{ fontSize: 18 }}>{meta.emoji}</span>
                <span style={{ fontWeight: 700, fontSize: 14, minWidth: 92 }}>{v.titel}</span>
                <span style={{ flex: 1, fontSize: 13.5, color: k?.pathId ? (oud ? "#ffb74d" : "#69f0ae") : "var(--color-text-subtle, #828FAC)", fontWeight: 600 }}>
                  {k?.pathId ? `${k.emoji || ""} ${k.label}${oud ? " · nog steeds?" : ""}` : "tik om te kiezen"}
                </span>
                <span aria-hidden="true" style={{ color: "var(--color-text-subtle, #828FAC)" }}>{isOpen ? "▴" : "▾"}</span>
              </button>
              {isOpen && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, padding: "8px 4px 4px" }}>
                  {onderwerpenVoorVak(v.subj, groep).map((o) => {
                    const aan = k?.id === o.id;
                    return (
                      // 27 okt 2026 (kliktest): nog eens tikken op je keuze haalde die stil weg. Nu: de keuze
                      // blijft, het lijstje klapt dicht; weghalen kan alleen via "weet ik niet / overslaan".
                      <button key={o.id} type="button" style={knop(aan)}
                        onClick={() => { if (!aan) onKies(v.subj, o); setOpen(null); try { track("nu_op_school_gekozen", { vak: v.subj, pad: o.pathId, groep, weg: false, zelfde: aan }); } catch { /* */ } }}>
                        {o.emoji} {o.label}
                      </button>
                    );
                  })}
                  <button type="button" style={{ ...knop(false), opacity: 0.8 }}
                    onClick={() => { onKies(v.subj, null); setOpen(null); try { track("nu_op_school_gekozen", { vak: v.subj, pad: null, groep, weg: true }); } catch { /* */ } }}>
                    🤷 weet ik niet / overslaan
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
