import { useState, useEffect, useRef, useCallback } from "react";
import supabase from "../supabase.js";
import { bewaarKoppeling, koppelingVoor } from "../shared/koppeling.js";

// P0-3 (4-agent-audit 2026-05-18): kind-zijde van de WhatsApp-koppelcode-flow.
//
// Ouder genereert 6-letter-code in OuderDashboard + stuurt via WhatsApp.
// Kind voert 'm hier in → claim_link_code-RPC valideert + maakt parent_child_links
// met verified=true. Klaar, ouder ziet voortgang.
//
// Banner is default ingeklapt (geen UI-bloat als kind geen code heeft) en
// klapt uit naar een klein DRIESTAPS-schermpje (Mark 29 aug — koppelen als
// ruggengraat, kind-kant): ① je kreeg een code → ② typ 'm in → ③ klaar. Met
// een feestelijke eindstaat. Framing = cadeau, geen controle ("iemand thuis",
// niet "je voortgang wordt gevolgd"); voogd/pleeg-veilig.

// Kleine stap-rij: een gekleurde bol met nummer + tekst ernaast. Bewust op
// module-niveau: binnen de render gedefinieerd zou React 'm elke re-render als
// nieuw component-type zien en de subtree hermounten — het invoerveld in stap 2
// verloor daardoor bij élke toetsaanslag de focus (Fable-review 30 aug).
function Stap({ nr, kleur, children }) {
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
      <span aria-hidden="true" style={{ flexShrink: 0, width: 22, height: 22, borderRadius: "50%", background: kleur, color: "#0b1224", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>{nr}</span>
      <div style={{ flex: 1, fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.8)", lineHeight: 1.45 }}>{children}</div>
    </div>
  );
}

export default function KoppelcodeBanner({ userName }) {
  // Voorstel uit de code-balk op home (27 aug): typte iemand dáár een
  // koppelcode, dan staat hij hier alvast ingevuld — niet opnieuw typen.
  const [open, setOpen] = useState(() => {
    try { return !!sessionStorage.getItem("lk_koppelcode_voorstel"); } catch { return false; }
  });
  // Kwam deze code uit de balk op home? Alleen dán koppelen we automatisch —
  // een code die iemand hier zit te typen mag nooit halverwege ingestuurd worden.
  const uitVoordeur = useRef(null);
  const [code, setCode] = useState(() => {
    try {
      const c = sessionStorage.getItem("lk_koppelcode_voorstel") || "";
      sessionStorage.removeItem("lk_koppelcode_voorstel");
      uitVoordeur.current = c || null;
      return c;
    } catch { return ""; }
  });
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState(null); // { ok: bool, text: string, rol?: string }

  // Eén plek voor het koppelen zelf, zodat zowel de knop als de automatische
  // afhandeling hem kan gebruiken. Staat bewust vóór de early return: hooks
  // mogen niet achter een conditionele return staan.
  const doeClaim = useCallback(async (ruweCode) => {
    setBusy(true);
    setMsg(null);
    const trimmed = String(ruweCode || "").trim().toUpperCase();
    if (trimmed.length < 4) {
      setMsg({ ok: false, text: "Vul de hele code in (6 letters)." });
      setBusy(false);
      return;
    }
    try {
      const { data, error } = await supabase.rpc("claim_link_code", {
        p_code: trimmed,
        p_child_name: userName,
      });
      if (error) throw error;
      if (data?.ok) {
        // Koppeling-identiteit (2 sep 2026): link_id op dit toestel bewaren,
        // zodat elke score/stap voortaan aan déze koppeling hangt (niet aan de naam).
        bewaarKoppeling({ naam: userName, linkId: data.link_id, rol: data.rol || "ouder", vanWie: data.van_wie });
        setMsg({ ok: true, rol: data.rol || "ouder", vanWie: (data.van_wie || "").trim() });
        setCode("");
      } else if (data?.error === "code_invalid_or_expired") {
        setMsg({ ok: false, text: "Deze code werkt niet meer. Vraag thuis (of je juf/meester) om een nieuwe — die maak je zo weer aan." });
      } else {
        setMsg({ ok: false, text: "Er ging iets mis. Probeer het zo nog eens." });
      }
    } catch (err) {
      setMsg({ ok: false, text: "Geen verbinding met de koppel-server. Probeer het zo nog eens." });
    }
    setBusy(false);
  }, [userName]);

  // 🔗 Automatisch koppelen (Mark 4 sep 2026). Het kind typte de koppelcode al
  // in bij de voordeur en koos daarna zijn naam — dat is de bevestiging. Nog
  // een keer op "Koppelen" moeten tikken is een lege stap, en de oude tekst
  // stuurde mensen zelfs terug om de code opnieuw te typen.
  const autoGedaan = useRef(false);
  useEffect(() => {
    if (autoGedaan.current || !userName || !uitVoordeur.current) return;
    autoGedaan.current = true;
    doeClaim(uitVoordeur.current);
  }, [userName, doeClaim]);

  if (!userName) return null;

  const submit = (e) => {
    e?.preventDefault?.();
    doeClaim(code);
  };

  // 🎉 Feestelijke eindstaat (stap 3 = klaar). Cadeau-framing; verwijst naar de
  // plek waar het klaargezette werk straks verschijnt op de eigen pagina.
  if (msg?.ok) {
    // "van wie" = optioneel label dat de ouder invulde (bv. "mama"). Leeg →
    // val terug op "thuis" (voogd/pleeg-veilig). Leraar-koppeling = school.
    const metWie = msg.rol === "leraar" ? "school" : (msg.vanWie || "thuis");
    const actor = msg.rol === "leraar" ? "Je juf of meester" : (msg.vanWie || "Iemand thuis");
    return (
      <div style={{
        marginBottom: 10,
        padding: "16px 16px",
        background: "linear-gradient(135deg, rgba(0,200,83,0.16), rgba(124,58,237,0.10))",
        border: "1px solid rgba(0,200,83,0.45)",
        borderRadius: 14,
        textAlign: "center",
      }}>
        <div style={{ fontSize: 34, lineHeight: 1 }} aria-hidden="true">🎉</div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 800, color: "var(--color-brand-primary-100)", marginTop: 6 }}>
          Gelukt! Je bent gekoppeld met {metWie}.
        </div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.75)", marginTop: 6, lineHeight: 1.5 }}>
          {actor} kan nu leuke lessen voor je klaarzetten 🎁 Kijk straks op je eigen pagina — daar verschijnt <strong style={{ color: "#ff9fb2" }}>💛 speciaal voor jou klaargezet</strong>.
        </div>
      </div>
    );
  }

  // Stap 2 (2 sep 2026): het toestel wéét nu dat het gekoppeld is — toon dat,
  // i.p.v. na elke herlaad weer "Koppelcode?" te vragen. Nieuw toestel of
  // andere code blijft mogelijk via de kleine knop.
  const gekoppeld = koppelingVoor(userName);
  if (!open && gekoppeld) {
    const o = gekoppeld.ouder;
    const l = gekoppeld.leraar;
    const delen = [];
    if (o) delen.push(o.van_wie ? `${o.van_wie}` : "thuis");
    if (l) delen.push("school");
    return (
      <div style={{ marginBottom: 10, padding: "9px 14px", background: "rgba(0,200,83,0.08)", border: "1px solid rgba(0,200,83,0.35)", borderRadius: 12, display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-body)", fontSize: 13 }}>
        <span aria-hidden="true">✅</span>
        <span style={{ flex: 1, color: "rgba(255,255,255,0.85)" }}>Gekoppeld met <strong>{delen.join(" en ")}</strong> — jouw oefenwerk komt daar aan.</span>
        <button type="button" onClick={() => setOpen(true)} style={{ background: "none", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 8, color: "rgba(255,255,255,0.7)", fontSize: 11, padding: "4px 8px", cursor: "pointer" }}>
          Andere code
        </button>
      </div>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        style={{
          width: "100%",
          marginBottom: 10,
          padding: "10px 14px",
          background: "rgba(124,58,237,0.10)",
          border: "1px dashed rgba(124,58,237,0.35)",
          borderRadius: 12,
          color: "#a78bfa",
          fontFamily: "var(--font-body)",
          fontSize: 13,
          textAlign: "left",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span style={{ fontSize: 18 }}>🎁</span>
        <span style={{ flex: 1 }}>Koppelcode van thuis of school? Ook bij een <strong>nieuw toestel</strong> of als je niks van thuis ziet — vul 'm hier in.</span>
        <span aria-hidden="true">▼</span>
      </button>
    );
  }

  const kanKoppelen = !busy && code.trim().length >= 4;

  return (
    <form
      onSubmit={submit}
      style={{
        marginBottom: 10,
        padding: "14px 16px",
        background: "linear-gradient(135deg, rgba(124,58,237,0.14), rgba(124,58,237,0.04))",
        border: "1px solid rgba(124,58,237,0.45)",
        borderRadius: 14,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <span style={{ fontSize: 22 }}>🎁</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#a78bfa", lineHeight: 1.3 }}>
            Koppel met thuis of school
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>
            In 3 kleine stapjes — het duurt een halve minuut. Nieuw toestel? Een verse code herstelt je koppeling vanzelf.
          </div>
        </div>
        <button
          type="button"
          onClick={() => { setOpen(false); setCode(""); setMsg(null); }}
          style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", fontSize: 18, cursor: "pointer" }}
          aria-label="Sluiten"
        >×</button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {/* ① Je kreeg een code */}
        <Stap nr={1} kleur="#a78bfa">
          Je kreeg een <strong>code</strong> via WhatsApp of mail — 6 tekens (letters en cijfers).
        </Stap>

        {/* ② Typ 'm in — het invoerveld */}
        <Stap nr={2} kleur="#a78bfa">
          <div style={{ marginBottom: 8 }}>Typ 'm hier in:</div>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="ABC123"
              maxLength={8}
              autoComplete="off"
              spellCheck={false}
              style={{
                flex: 1,
                minWidth: 0,
                padding: "10px 14px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.08)",
                color: "var(--color-text-strong)",
                fontFamily: "var(--font-display)",
                fontSize: 18,
                letterSpacing: 4,
                textAlign: "center",
                outline: "none",
                textTransform: "uppercase",
              }}
            />
            <button
              type="submit"
              disabled={!kanKoppelen}
              style={{
                padding: "10px 18px",
                background: !kanKoppelen ? "rgba(124,58,237,0.30)" : "linear-gradient(135deg, #7c3aed, #a78bfa)",
                border: "none",
                borderRadius: 10,
                color: "#fff",
                fontFamily: "var(--font-display)",
                fontSize: 14,
                fontWeight: 700,
                cursor: !kanKoppelen ? "not-allowed" : "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {busy ? "..." : "✓ Koppel"}
            </button>
          </div>
        </Stap>

        {/* ③ Klaar — wat je krijgt */}
        <Stap nr={3} kleur="rgba(255,255,255,0.25)">
          Klaar! Dan kan iemand thuis (of je juf/meester) leuke lessen voor je klaarzetten 🎁
        </Stap>
      </div>

      {msg && !msg.ok && (
        <div style={{
          marginTop: 12,
          padding: "8px 10px",
          background: "rgba(255,82,82,0.10)",
          border: "1px solid rgba(255,82,82,0.30)",
          borderRadius: 8,
          fontSize: 12,
          color: "#ff7676",
          lineHeight: 1.5,
        }}>
          {msg.text}
        </div>
      )}
    </form>
  );
}
