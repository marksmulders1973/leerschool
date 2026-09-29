// 🚩 "Klopt er iets niet?" onder elke leerpadvraag (Mark 28 sep 2026: "bouw ook het klopt-niet
// knopje, moet dat ook in de gewone app?" → ja: LearnPath draait zowel de gewone leerpaden als de
// nieuwkomerpaden). Anders dan "Fout melden" in de quiz (die naar /tips springt) blijft dit op de
// plek: kort openklappen, reden kiezen, optioneel een zin, versturen. Gaat als 'pending' naar het
// wensenbord (alleen Mark ziet het, dagelijkse meldingen-check). Geen persoonsgegevens.
import { useState } from "react";
import { submitWish } from "../../data/repos/wishesRepo.js";
import { track } from "../../utils.js";
import { SteunTekst } from "./SteunTik.jsx";

// 29 sep 2026 (Mark: "zet dit rode vlaggetje op zoveel als redelijk mogelijk"): ook voor vragen buiten een
// leerpad. `bron` = waar de vraag stond (bv. "vandaag", "vraag-van-de-dag"); stepIdx mag ontbreken; de
// vraag mag ook als {vraag, opties, juist} of {question, options, correct} binnenkomen.
export default function MeldFout({ pathId = null, stepIdx = null, check: ruw, vertaling = false, taal = null, bron = null, licht = false }) {
  const check = ruw ? { q: ruw.q ?? ruw.vraag ?? ruw.question ?? ruw.text ?? "", options: ruw.options ?? ruw.opties ?? ruw.antwoorden ?? [], answer: ruw.answer ?? ruw.juist ?? ruw.correct ?? ruw.correctIndex } : null;
  const [open, setOpen] = useState(false);
  const [reden, setReden] = useState(null);
  const [tekst, setTekst] = useState("");
  const [stand, setStand] = useState(null); // null | "bezig" | "klaar" | "fout"
  if (!check) return null;
  const redenen = ["De vraag klopt niet", "Het goede antwoord klopt niet", ...(vertaling ? ["De vertaling klopt niet"] : []), "Iets anders"];
  const stuur = async () => {
    if (!reden || stand === "bezig") return;
    setStand("bezig");
    const juist = Array.isArray(check.options) && typeof check.answer === "number" ? check.options[check.answer] : (typeof check.answer === "string" ? check.answer : "");
    const waar = [bron, pathId, stepIdx != null && !Number.isNaN(Number(stepIdx)) ? `stap ${Number(stepIdx) + 1}` : null].filter(Boolean).join(" · ") || "onbekend";
    const bericht = `🚩 Melding [${waar}] ${reden}\nVraag: ${String(check.q || "").slice(0, 300)}\nJuiste antwoord volgens de app: ${String(juist).slice(0, 120)}${tekst.trim() ? `\nToelichting: ${tekst.trim()}` : ""}${taal && taal !== "nl" ? `\n(steuntaal: ${taal})` : ""}`;
    const { ok } = await submitWish({ message: bericht, displayName: "Melding leerpad" });
    setStand(ok ? "klaar" : "fout");
    try { track("leerpad_melding", { pad: pathId, stap: stepIdx, bron, reden, ok, vraag: String(check.q || "").slice(0, 120) }); } catch { /* */ }
  };
  const K = licht
    ? { zacht: "#4a5a6a", tekst: "#0f2a44", rand: "rgba(0,0,0,0.25)", vlak: "rgba(0,0,0,0.03)", veld: "#fff" }
    : { zacht: "var(--color-text-muted)", tekst: "var(--color-text)", rand: "rgba(255,255,255,0.25)", vlak: "rgba(255,255,255,0.04)", veld: "rgba(0,0,0,0.2)" };
  const klein = { background: "transparent", border: "none", color: K.zacht, fontSize: 12.5, cursor: "pointer", padding: "4px 0", textDecoration: "underline", fontFamily: "inherit" };
  if (!open) {
    return (
      <div style={{ marginTop: 10, textAlign: "right" }}>
        <SteunTekst nl="Klopt er iets niet?" knop>
          <button type="button" onClick={() => { setOpen(true); try { track("leerpad_melding_open", { pad: pathId, bron }); } catch { /* */ } }} style={klein}>🚩 Klopt er iets niet?</button>
        </SteunTekst>
      </div>
    );
  }
  if (stand === "klaar") {
    return (
      <SteunTekst nl="Dank je! Mark kijkt ernaar.">
        <div style={{ marginTop: 10, fontSize: 13.5, color: K.zacht }}>✅ Dank je! Mark kijkt ernaar.</div>
      </SteunTekst>
    );
  }
  return (
    <div style={{ marginTop: 12, padding: "10px 12px", borderRadius: 10, border: `1px dashed ${K.rand}`, background: K.vlak, color: K.tekst }}>
      <SteunTekst nl="Wat klopt er niet?"><div style={{ fontSize: 13.5, fontWeight: 700, marginBottom: 6 }}>🚩 Wat klopt er niet?</div></SteunTekst>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {redenen.map((r) => (
          <SteunTekst key={r} nl={r} knop>
            <button type="button" onClick={() => setReden(r)} aria-pressed={reden === r}
              style={{ borderRadius: 999, padding: "6px 11px", fontSize: 12.5, fontWeight: 700, cursor: "pointer", border: `1px solid ${K.rand}`, background: reden === r ? "#ffd166" : "transparent", color: reden === r ? "#3a2600" : K.tekst, fontFamily: "inherit" }}>
              {r}
            </button>
          </SteunTekst>
        ))}
      </div>
      <textarea value={tekst} onChange={(e) => setTekst(e.target.value)} rows={2} maxLength={600} placeholder="Wil je iets uitleggen? (mag, hoeft niet)"
        style={{ width: "100%", boxSizing: "border-box", marginTop: 8, borderRadius: 8, border: `1px solid ${K.rand}`, padding: "8px 10px", fontSize: 13.5, fontFamily: "inherit", background: K.veld, color: K.tekst }} />
      <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 8 }}>
        <SteunTekst nl="Verstuur" knop>
          <button type="button" onClick={stuur} disabled={!reden || stand === "bezig"}
            style={{ borderRadius: 999, padding: "7px 14px", fontSize: 13, fontWeight: 800, cursor: reden ? "pointer" : "default", border: "none", background: "#ffd166", color: "#3a2600", opacity: reden ? 1 : 0.5, fontFamily: "inherit" }}>
            {stand === "bezig" ? "…" : "Verstuur"}
          </button>
        </SteunTekst>
        <button type="button" onClick={() => setOpen(false)} style={klein}>annuleren</button>
      </div>
      {stand === "fout" && <div style={{ marginTop: 6, fontSize: 12.5 }}>Versturen lukte niet. Probeer het nog eens.</div>}
    </div>
  );
}
