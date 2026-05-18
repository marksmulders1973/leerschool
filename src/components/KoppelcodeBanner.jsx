import { useState } from "react";
import supabase from "../supabase.js";

// P0-3 (4-agent-audit 2026-05-18): kind-zijde van de WhatsApp-koppelcode-flow.
//
// Ouder genereert 6-letter-code in OuderDashboard + stuurt via WhatsApp.
// Kind voert 'm hier in → claim_link_code-RPC valideert + maakt parent_child_links
// met verified=true. Klaar, ouder ziet voortgang.
//
// Banner is default ingeklapt (geen UI-bloat als kind geen code heeft) en
// klapt uit naar invoerveld bij klik.

export default function KoppelcodeBanner({ userName }) {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState(null); // { ok: bool, text: string }

  if (!userName) return null;

  const submit = async (e) => {
    e?.preventDefault?.();
    setBusy(true);
    setMsg(null);
    const trimmed = code.trim().toUpperCase();
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
        setMsg({ ok: true, text: "✓ Gekoppeld! Je ouder kan nu je voortgang zien." });
        setCode("");
      } else if (data?.error === "code_invalid_or_expired") {
        setMsg({ ok: false, text: "Deze code klopt niet of is verlopen. Vraag je ouder een nieuwe." });
      } else {
        setMsg({ ok: false, text: "Iets ging mis. Probeer later opnieuw." });
      }
    } catch (err) {
      setMsg({ ok: false, text: "Geen verbinding met de koppel-server. Probeer later opnieuw." });
    }
    setBusy(false);
  };

  if (msg?.ok) {
    return (
      <div style={{
        marginBottom: 10,
        padding: "12px 14px",
        background: "rgba(0,200,83,0.14)",
        border: "1px solid rgba(0,200,83,0.4)",
        borderRadius: 12,
        fontFamily: "var(--font-body)",
        fontSize: 13,
        color: "var(--color-brand-primary-100)",
      }}>
        {msg.text}
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
        <span style={{ fontSize: 18 }}>🔐</span>
        <span style={{ flex: 1 }}>Heb je een koppelcode van je ouder?</span>
        <span aria-hidden="true">▼</span>
      </button>
    );
  }

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
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
        <span style={{ fontSize: 22 }}>🔐</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#a78bfa", lineHeight: 1.3 }}>
            Koppel met je ouder
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>
            Voer de 6-letter-code in die je via WhatsApp kreeg.
          </div>
        </div>
        <button
          type="button"
          onClick={() => { setOpen(false); setCode(""); setMsg(null); }}
          style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", fontSize: 18, cursor: "pointer" }}
          aria-label="Sluiten"
        >×</button>
      </div>
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
          disabled={busy || code.trim().length < 4}
          style={{
            padding: "10px 18px",
            background: busy || code.trim().length < 4 ? "rgba(124,58,237,0.30)" : "linear-gradient(135deg, #7c3aed, #a78bfa)",
            border: "none",
            borderRadius: 10,
            color: "#fff",
            fontFamily: "var(--font-display)",
            fontSize: 14,
            fontWeight: 700,
            cursor: busy || code.trim().length < 4 ? "not-allowed" : "pointer",
          }}
        >
          {busy ? "..." : "✓ Koppel"}
        </button>
      </div>
      {msg && !msg.ok && (
        <div style={{
          marginTop: 8,
          padding: "8px 10px",
          background: "rgba(255,82,82,0.10)",
          border: "1px solid rgba(255,82,82,0.30)",
          borderRadius: 8,
          fontSize: 12,
          color: "#ff7676",
        }}>
          {msg.text}
        </div>
      )}
    </form>
  );
}
