import { useState, useEffect } from "react";
import { BRAND } from "../../brand.js";
import {
  haalGekoppeldeLeerlingen, koppelLeerlingCode,
  haalKlaargezetVoorLink, haalWeg, KLAARGEZET_EVENT,
} from "../../shared/ouderKlaargezet.js";

// 👩‍🏫 Leerkracht zet lessen klaar voor één leerling (Mark 15 aug 2026) — de
// leerkracht-variant van de ouder→kind-"klaarzet". Op naam, cross-device:
// koppel een leerling via een 48u-code, kies leerpaden, en die verschijnen bij
// de leerling onder "💛 Speciaal voor jou klaargezet · van je juf of meester".
// Voor een zorgleerling die je gericht wil helpen — niet klassikaal (dat doen
// de Takenlijst en de Toets al).

export default function LeraarKlaarzet({ authUser, onKlaarzetten, onOpenLes }) {
  const [students, setStudents] = useState([]);
  const [selected, setSelected] = useState(null);
  const [klaarLijst, setKlaarLijst] = useState([]);
  const [inviteName, setInviteName] = useState("");
  const [invite, setInvite] = useState(null); // { code, naam }
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const laadStudents = () => {
    if (!authUser) return;
    haalGekoppeldeLeerlingen(authUser.id).then((rows) => {
      setStudents(rows);
      setSelected((prev) => rows.find((r) => r.id === prev?.id) || rows.find((r) => r.verified) || null);
    });
  };
  useEffect(() => { laadStudents(); /* eslint-disable-next-line */ }, [authUser?.id]);

  useEffect(() => {
    if (!selected?.verified) { setKlaarLijst([]); return; }
    let cancel = false;
    const laad = () => haalKlaargezetVoorLink(selected.id, "leraar").then((r) => { if (!cancel) setKlaarLijst(r); });
    laad();
    window.addEventListener(KLAARGEZET_EVENT, laad);
    return () => { cancel = true; window.removeEventListener(KLAARGEZET_EVENT, laad); };
  }, [selected?.id, selected?.verified]);

  if (!authUser) {
    return (
      <div style={{ ...box, borderStyle: "dashed", color: "rgba(255,255,255,0.5)", fontSize: 12.5 }}>
        🔐 Log in als leerkracht om een leerpad voor één leerling klaar te zetten.
      </div>
    );
  }

  const genereer = async () => {
    const naam = inviteName.trim();
    if (!naam) return;
    setBusy(true);
    const r = await koppelLeerlingCode(authUser.id, naam);
    setBusy(false);
    if (r.ok) { setInvite({ code: r.code, naam }); setInviteName(""); setCopied(false); }
    else alert("Kon de koppelcode niet maken. Probeer later opnieuw.");
  };

  const deelWhatsApp = () => {
    if (!invite) return;
    const text = `Hoi ${invite.naam}! Ik heb lessen voor je klaargezet op ${BRAND.name}. Open ${BRAND.domain}, ga naar "Mijn pagina" en vul deze koppelcode in: ${invite.code}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  const verwijderKlaar = async (pathId) => {
    if (!selected?.id) return;
    await haalWeg(selected.id, pathId, "leraar");
    setKlaarLijst((prev) => prev.filter((x) => x.path_id !== pathId));
  };

  const verified = students.filter((s) => s.verified);

  return (
    <div style={{ ...box, background: "rgba(255,105,135,0.06)", borderColor: "rgba(255,105,135,0.3)" }}>
      <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open}
        style={{ background: "none", border: "none", color: "#ff9fb2", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, cursor: "pointer", padding: 0, width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
        <span>💛 Zet een leerpad klaar voor één leerling</span>
        <span style={{ fontSize: 12, opacity: 0.7 }}>{open ? "▲ Klap in" : "▼ Open"}</span>
      </button>

      {open && (
        <div style={{ marginTop: 12 }}>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.6)", lineHeight: 1.5, marginBottom: 12 }}>
            Voor een leerling die je gericht wil helpen: koppel de leerling één keer met een code, en de lessen die je kiest verschijnen op zijn of haar eigen pagina. (Voor de hele klas gebruik je de <strong>Takenlijst</strong> of een <strong>Toets</strong>.)
          </div>

          {/* Gekoppelde leerlingen */}
          {verified.length > 0 && (
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
              {verified.map((s) => (
                <button key={s.id} onClick={() => setSelected(s)}
                  style={{ padding: "6px 12px", borderRadius: 999, cursor: "pointer", fontFamily: "var(--font-display)", fontSize: 12.5, fontWeight: 700,
                    border: selected?.id === s.id ? "1px solid rgba(255,105,135,0.6)" : "1px solid rgba(255,255,255,0.15)",
                    background: selected?.id === s.id ? "rgba(255,105,135,0.16)" : "rgba(255,255,255,0.05)",
                    color: selected?.id === s.id ? "#ff9fb2" : "rgba(255,255,255,0.7)" }}>
                  👤 {s.student_name}
                </button>
              ))}
            </div>
          )}

          {/* Klaargezet voor de gekozen leerling */}
          {selected?.verified && (
            <div style={{ marginBottom: 12 }}>
              {klaarLijst.length > 0 ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 8 }}>
                  {klaarLijst.map((it) => (
                    <div key={it.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 9px", borderRadius: 9, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <span style={{ fontSize: 18, flexShrink: 0 }} aria-hidden="true">{it.emoji || "📘"}</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-strong)" }}>{it.titel || "Een les"}</div>
                        <div style={{ fontSize: 11, color: it.gedaan ? "#69f0ae" : "rgba(255,255,255,0.45)", fontWeight: 700 }}>
                          {it.gedaan ? "✓ gemaakt" : "nog te doen"}
                        </div>
                      </div>
                      {onOpenLes && (
                        <button onClick={() => onOpenLes(it.path_id)} title="Bekijk de les"
                          style={{ flexShrink: 0, padding: "6px 12px", borderRadius: 8, border: "1px solid rgba(255,105,135,0.5)", background: "rgba(255,105,135,0.14)", color: "#ff9fb2", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                          Bekijk
                        </button>
                      )}
                      <button onClick={() => verwijderKlaar(it.path_id)} aria-label="Haal weg" title="Haal deze les weg"
                        style={{ flexShrink: 0, background: "none", border: "none", color: "rgba(255,255,255,0.25)", cursor: "pointer", fontSize: 16, padding: 2 }}>×</button>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginBottom: 8 }}>
                  Nog niets klaargezet voor {selected.student_name}.
                </div>
              )}
              {onKlaarzetten && (
                <button onClick={() => onKlaarzetten(selected.id, selected.student_name)}
                  style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "none", cursor: "pointer", background: "linear-gradient(135deg,#ff6987,#ff9fb2)", color: "#3a0d18", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13.5 }}>
                  💛 Blader en zet lessen klaar voor {selected.student_name}
                </button>
              )}
            </div>
          )}

          {/* Nieuwe leerling koppelen */}
          {invite ? (
            <div style={{ borderRadius: 10, border: "1px solid rgba(255,105,135,0.4)", background: "rgba(255,105,135,0.08)", padding: "12px 14px" }}>
              <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.7)", marginBottom: 6 }}>
                Geef deze code aan <strong style={{ color: "#ff9fb2" }}>{invite.naam}</strong>. Hij of zij vult 'm in op "Mijn pagina" (48 uur geldig). Daarna verschijnt {invite.naam} hierboven.
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, letterSpacing: 4, color: "#fff", background: "rgba(255,255,255,0.08)", borderRadius: 8, padding: "6px 14px" }}>{invite.code}</span>
                <button onClick={() => { navigator.clipboard?.writeText(invite.code); setCopied(true); }} style={miniBtn}>{copied ? "✓ Gekopieerd" : "📋 Kopieer"}</button>
                <button onClick={deelWhatsApp} style={{ ...miniBtn, background: "#25D366", color: "#04310f", border: "none" }}>💬 WhatsApp</button>
                <button onClick={() => { setInvite(null); laadStudents(); }} style={miniBtn}>Klaar</button>
              </div>
            </div>
          ) : (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <input value={inviteName} onChange={(e) => setInviteName(e.target.value)} placeholder="Naam van de leerling"
                style={{ flex: "1 1 160px", padding: "10px 12px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)", color: "var(--color-text-strong)", fontFamily: "var(--font-body)", fontSize: 14 }} />
              <button onClick={genereer} disabled={busy || !inviteName.trim()}
                style={{ padding: "10px 16px", borderRadius: 10, border: "none", cursor: busy || !inviteName.trim() ? "not-allowed" : "pointer", background: busy || !inviteName.trim() ? "rgba(255,105,135,0.3)" : "linear-gradient(135deg,#ff6987,#ff9fb2)", color: "#3a0d18", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13 }}>
                {busy ? "..." : "🔗 Koppel een leerling"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const box = {
  marginBottom: 12, padding: "12px 14px", borderRadius: 14,
  border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)",
};
const miniBtn = {
  padding: "7px 12px", borderRadius: 8, cursor: "pointer",
  border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.06)",
  color: "var(--color-text-strong)", fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700,
};
