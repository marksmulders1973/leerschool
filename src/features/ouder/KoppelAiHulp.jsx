// 🤖 AI-Koppelhulp (Mark 23 okt 2026: "kan het programma de AI-versie starten als iemand drukt op
// 'het lukt me niet', als backup?"). Gesprek via api/charley-hulp (modus "koppelhulp"): de AI krijgt
// alleen de status van de app (geen code, geen namen) en koppelt nooit zelf. Knoppen die de AI
// aanbiedt ([KNOP:naam]) worden hier echte knoppen; "Laat een mens helpen" stuurt het gesprek als
// melding naar ons (feedback-tabel, dagelijkse meldingen-check).
import { useEffect, useRef, useState } from "react";
import { track } from "../../utils.js";

const KNOP_TEKST = {
  "nieuwe-code": "Vraag thuis om een nieuwe code (WhatsApp)",
  "code-opnieuw": "Code opnieuw typen",
  "ouder-overzicht": "Naar het ouder-overzicht",
  "kind-hier": "Kind op deze telefoon toevoegen",
  mens: "Laat een mens helpen",
};

/** "tekst\n[KNOP:mens]" → { tekst, knoppen: ["mens"] }. Onbekende knoppen vallen weg. */
export function leesAntwoord(ruw) {
  const knoppen = [];
  const tekst = String(ruw || "")
    .replace(/\[KNOP:([a-z-]+)\]/gi, (_, k) => { const n = k.toLowerCase(); if (KNOP_TEKST[n] && !knoppen.includes(n)) knoppen.push(n); return ""; })
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  return { tekst, knoppen };
}

const F = {
  doos: { marginTop: 12, borderRadius: 14, border: "1.5px solid rgba(0,176,255,0.45)", background: "rgba(0,176,255,0.06)", padding: 12, textAlign: "left" },
  ai: { alignSelf: "flex-start", maxWidth: "88%", padding: "8px 11px", borderRadius: "12px 12px 12px 4px", background: "rgba(255,255,255,0.08)", color: "#fff", fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.45, whiteSpace: "pre-wrap" },
  ik: { alignSelf: "flex-end", maxWidth: "80%", padding: "8px 11px", borderRadius: "12px 12px 4px 12px", background: "#00b0ff", color: "#08121f", fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.45, whiteSpace: "pre-wrap" },
  knop: { padding: "9px 12px", borderRadius: 10, border: "none", background: "#69f0ae", color: "#08121f", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13.5, cursor: "pointer" },
};

export default function KoppelAiHulp({ rol = "kind", context = {}, onKnop, onMens }) {
  const [berichten, setBerichten] = useState([]); // { role, content, knoppen? }
  const [invoer, setInvoer] = useState("");
  const [bezig, setBezig] = useState(false);
  const [fout, setFout] = useState("");
  const [mensStaat, setMensStaat] = useState(null); // null | "bezig" | "klaar" | "mis"
  const lijst = useRef(null);

  const vraagAi = async (geschiedenis) => {
    setBezig(true); setFout("");
    try {
      const r = await fetch("/api/charley-hulp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ modus: "koppelhulp", context: { ...context, rol }, messages: geschiedenis.map(({ role, content }) => ({ role, content })) }),
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok || !d.reply) throw new Error(d.error || "geen antwoord");
      const { tekst, knoppen } = leesAntwoord(d.reply);
      setBerichten((b) => [...b, { role: "assistant", content: tekst, knoppen }]);
    } catch {
      setFout("De Koppelhulp is even niet bereikbaar. Tik op 'Laat een mens helpen', dan helpen wij je.");
    }
    setBezig(false);
  };

  useEffect(() => {
    try { track("koppel_ai_open", { rol, fout: context.fout || "" }); } catch { /* */ }
    vraagAi([]);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { try { lijst.current?.scrollTo?.({ top: 1e6, behavior: "smooth" }); } catch { /* */ } }, [berichten, bezig]);

  const stuur = () => {
    const t = invoer.trim().slice(0, 300);
    if (!t || bezig) return;
    const nieuw = [...berichten, { role: "user", content: t }];
    setBerichten(nieuw); setInvoer("");
    try { track("koppel_ai_bericht", { rol, beurt: nieuw.filter((m) => m.role === "user").length }); } catch { /* */ }
    vraagAi(nieuw);
  };

  const mens = async () => {
    setMensStaat("bezig");
    try { track("koppel_ai_mens", { rol, beurten: berichten.length }); } catch { /* */ }
    const gesprek = berichten.map((m) => `${m.role === "user" ? "Persoon" : "AI"}: ${m.content}`).join("\n").slice(0, 3500);
    const ok = await Promise.resolve(onMens?.(gesprek)).catch(() => false);
    setMensStaat(ok === false ? "mis" : "klaar");
  };

  const kies = (k) => {
    try { track("koppel_ai_knop", { rol, knop: k }); } catch { /* */ }
    if (k === "mens") mens(); else onKnop?.(k);
  };

  const aiBeurten = berichten.filter((m) => m.role === "assistant").length;
  return (
    <div style={F.doos} data-koppel-ai>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 800, color: "#fff", marginBottom: 8 }}>Koppelhulp</div>
      <div ref={lijst} style={{ display: "flex", flexDirection: "column", gap: 8, maxHeight: 340, overflowY: "auto", paddingRight: 2 }}>
        {berichten.map((m, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={m.role === "user" ? F.ik : F.ai} data-koppel-ai-bericht={m.role}>{m.content}</div>
            {m.role === "assistant" && (m.knoppen || []).length > 0 && i === berichten.length - 1 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {m.knoppen.map((k) => <button key={k} type="button" onClick={() => kies(k)} style={F.knop} data-koppel-ai-knop={k}>{KNOP_TEKST[k]}</button>)}
              </div>
            )}
          </div>
        ))}
        {bezig && <div style={{ ...F.ai, opacity: 0.7 }}>Even denken…</div>}
      </div>
      {fout && <div role="alert" style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#ffab91", marginTop: 8 }}>{fout}</div>}
      {mensStaat === "klaar" ? (
        <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "#69f0ae", marginTop: 10 }} data-koppel-ai-mens-klaar>Je vraag is bij ons binnen, met dit gesprek erbij. We kijken er vandaag naar en zorgen dat het lukt.</div>
      ) : (
        <>
          <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
            <input value={invoer} onChange={(e) => setInvoer(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") stuur(); }}
              maxLength={300} placeholder={rol === "ouder" ? "Typ waar je vastloopt…" : "Typ wat er gebeurt…"} aria-label="Bericht aan de Koppelhulp" data-koppel-ai-invoer
              style={{ flex: 1, minWidth: 0, padding: "10px 12px", borderRadius: 10, border: "1.5px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.06)", color: "#fff", fontFamily: "var(--font-body)", fontSize: 15, outline: "none" }} />
            <button type="button" onClick={stuur} disabled={bezig || !invoer.trim()} data-koppel-ai-stuur
              style={{ ...F.knop, background: bezig || !invoer.trim() ? "rgba(0,176,255,0.3)" : "#00b0ff", cursor: bezig || !invoer.trim() ? "default" : "pointer" }}>Stuur</button>
          </div>
          {(aiBeurten >= 2 || fout) && (
            <button type="button" onClick={mens} disabled={mensStaat === "bezig"} data-koppel-ai-mens
              style={{ marginTop: 8, background: "none", border: "none", padding: 0, color: "#00b0ff", fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 700, textDecoration: "underline", cursor: "pointer" }}>
              {mensStaat === "bezig" ? "Even…" : mensStaat === "mis" ? "Lukte niet. Mail hallo@leerkwartier.app" : "Laat een mens helpen"}
            </button>
          )}
          <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "rgba(255,255,255,0.45)", marginTop: 6 }}>Typ hier nooit je code of wachtwoord: de code hoort in het code-vak.</div>
        </>
      )}
    </div>
  );
}
