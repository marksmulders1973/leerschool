import { useState, useEffect } from "react";
import { BRAND } from "../../brand.js";
import {
  haalGekoppeldeLeerlingen, koppelLeerlingCode,
  haalOpenLeerlingCodes, trekLeerlingCodeIn,
  haalKlaargezetVoorLink, haalWeg, haalLeerlingOverzicht, KLAARGEZET_EVENT,
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
  // Openstaande codes uit link_codes (30 aug, spiegel van de ouder-kant):
  // de "wacht op je leerling"-kaarten. Persistent — een verse code overleeft
  // nu ook een pagina-herlaad (stond eerst alleen in lokale state).
  const [openInvites, setOpenInvites] = useState([]);
  const [busy, setBusy] = useState(false);
  const [copiedCode, setCopiedCode] = useState("");
  const [overzichtCopied, setOverzichtCopied] = useState(false);
  const [overzicht, setOverzicht] = useState([]);
  const [open, setOpen] = useState(false);
  // 🔗 Koppeling-herstel (1 sep 2026, spiegel van de ouder-kant v528): nieuw
  // toestel of leerling op een verkeerd account → één verse code her-koppelt
  // automatisch (claim_link_code verhangt student_user_id). Inline tonen, want
  // een openstaande code voor een al-gekoppelde naam wordt in de wacht-kaarten
  // juist onderdrukt. { studentName, code }.
  const [herstel, setHerstel] = useState(null);

  const laadStudents = () => {
    if (!authUser) return;
    haalGekoppeldeLeerlingen(authUser.id).then((rows) => {
      setStudents(rows);
      setSelected((prev) => rows.find((r) => r.id === prev?.id) || rows.find((r) => r.verified) || null);
    });
    haalOpenLeerlingCodes(authUser.id).then(setOpenInvites);
  };
  useEffect(() => { laadStudents(); /* eslint-disable-next-line */ }, [authUser?.id]);

  // Openstaande code na een herlaad? Klap het blok open zodat de wacht-kaart
  // zichtbaar is (het blok start standaard dicht).
  useEffect(() => {
    if (openInvites.length > 0) setOpen(true);
  }, [openInvites.length]);

  // 🔄 Live "wacht op je leerling": zolang er een openstaande code is, elke 6s
  // herladen. Claimt de leerling de code, dan verdwijnt de wacht-kaart vanzelf
  // en verschijnt hij/zij in de leerlingen-rij — zonder verversen.
  useEffect(() => {
    if (!authUser || openInvites.length === 0) return;
    const t = setInterval(() => { laadStudents(); }, 6000);
    return () => clearInterval(t);
    // eslint-disable-next-line
  }, [authUser?.id, openInvites.length]);

  // 📊 Overzicht van álle gekoppelde leerlingen + hun klaargezet-voortgang
  // (Mark 15 aug: "een leerkracht heeft 25 kinderen; overzicht + doorsturen").
  useEffect(() => {
    if (!authUser) return;
    let cancel = false;
    const laad = () => haalLeerlingOverzicht(authUser.id).then((r) => { if (!cancel) setOverzicht(r); });
    laad();
    window.addEventListener(KLAARGEZET_EVENT, laad);
    return () => { cancel = true; window.removeEventListener(KLAARGEZET_EVENT, laad); };
  }, [authUser?.id, students.length]);

  // Deelbaar rapportje voor bv. de directie — platte tekst, privacy-arm
  // (alleen naam + hoeveel klaargezette lessen gedaan; geen scores).
  const overzichtTekst = () => {
    const datum = new Date().toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });
    const regels = overzicht.map((o) => `• ${o.student_name}: ${o.gedaan} van ${o.totaal} klaargezette ${o.totaal === 1 ? "les" : "lessen"} gedaan`);
    return `${BRAND.name} — overzicht klaargezette lessen (${datum})\n\n${regels.join("\n") || "(nog geen gekoppelde leerlingen)"}\n\nGemaakt via ${BRAND.domain}`;
  };
  const kopieerOverzicht = () => {
    navigator.clipboard?.writeText(overzichtTekst());
    setOverzichtCopied(true);
    setTimeout(() => setOverzichtCopied(false), 2000);
  };
  const mailOverzicht = () => {
    const subject = encodeURIComponent(`${BRAND.name} — voortgang klaargezette lessen`);
    window.open(`mailto:?subject=${subject}&body=${encodeURIComponent(overzichtTekst())}`, "_blank");
  };

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
    if (r.ok) { setInviteName(""); laadStudents(); }
    else alert("Kon de koppelcode niet maken. Probeer later opnieuw.");
  };

  const deelWhatsApp = (code, naam) => {
    const text = `Hoi ${naam}! Ik heb lessen voor je klaargezet op ${BRAND.name}. Open ${BRAND.domain}, ga naar "Mijn pagina" en vul deze koppelcode in: ${code}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  const stuurHerinnering = (code, naam) => {
    const text = `Hoi ${naam}! Je koppelcode voor ${BRAND.name} staat nog klaar: ${code}. Vul 'm in op "Mijn pagina" op ${BRAND.domain} 😊`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  const kopieerCode = (code) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  const trekIn = async (id) => {
    setOpenInvites((prev) => prev.filter((iv) => iv.id !== id));
    await trekLeerlingCodeIn(id);
  };

  // Verse herstel-code voor een AL gekoppelde leerling — zelfde insert als
  // koppelen; de RPC vindt de bestaande koppeling (leraar + naam) en verhangt
  // die naar het account dat de code invoert. Niets hoeft verwijderd.
  const maakHerstel = async (studentName) => {
    if (!authUser || busy) return;
    setBusy(true);
    const r = await koppelLeerlingCode(authUser.id, studentName);
    setBusy(false);
    if (r.ok) setHerstel({ studentName, code: r.code });
    else alert("Kon de code niet maken. Probeer later opnieuw.");
  };

  // Geen "nog 0 uur geldig" (afrond-artefact) — zelfde tekst als de ouder-kant.
  const geldigheidsTekst = (iso) => {
    if (!iso) return null;
    const ms = new Date(iso).getTime() - Date.now();
    if (!Number.isFinite(ms) || ms <= 0) return null;
    const uren = Math.floor(ms / 3600000);
    return uren >= 1 ? `nog ${uren} uur geldig` : "nog minder dan een uur geldig";
  };

  const verwijderKlaar = async (pathId) => {
    if (!selected?.id) return;
    await haalWeg(selected.id, pathId, "leraar");
    setKlaarLijst((prev) => prev.filter((x) => x.path_id !== pathId));
  };

  const verified = students.filter((s) => s.verified);

  // Wacht-kaarten: openstaande codes mínus leerlingen die al gekoppeld zijn;
  // per leerling-naam alleen de nieuwste code (2× genereren = laatste wint).
  const bekendeNamen = new Set(students.map((s) => (s.student_name || "").trim().toLowerCase()));
  const wachtPerNaam = new Map();
  for (const iv of openInvites) {
    const naam = (iv.child_name || "").trim().toLowerCase();
    if (!bekendeNamen.has(naam)) wachtPerNaam.set(naam, iv);
  }
  const wachtInvites = [...wachtPerNaam.values()];

  return (
    <div style={{ ...box, background: "rgba(255,105,135,0.06)", borderColor: "rgba(255,105,135,0.3)" }}>
      <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open}
        style={{ background: "none", border: "none", color: "#ff9fb2", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, cursor: "pointer", padding: 0, width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
        <span>💛 Leerpaden klaarzetten per leerling</span>
        <span style={{ fontSize: 12, opacity: 0.7 }}>{open ? "▲ Klap in" : "▼ Open"}</span>
      </button>

      {open && (
        <div style={{ marginTop: 12 }}>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.6)", lineHeight: 1.5, marginBottom: 12 }}>
            Koppel één of meer leerlingen (elk één keer met een eigen code), en zet per leerling gericht lessen klaar — die verschijnen op hun eigen pagina. Hieronder zie je in één oogopslag wat elke leerling deed, en je kunt dat overzicht doorsturen (bv. naar de directie). <em>Voor de hele klas in één keer gebruik je de <strong>Takenlijst</strong> of een <strong>Toets</strong> via een deelcode — geen losse koppelingen nodig.</em>
          </div>

          {/* 📊 Overzicht van álle gekoppelde leerlingen + deelbaar rapportje */}
          {overzicht.length > 0 && (
            <div style={{ borderRadius: 10, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.03)", padding: "10px 12px", marginBottom: 12 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 12.5, fontWeight: 700, color: "rgba(255,255,255,0.85)", marginBottom: 8 }}>
                📊 Je leerlingen ({overzicht.length})
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 10 }}>
                {overzicht.map((o) => {
                  const klaar = o.totaal > 0 && o.gedaan === o.totaal;
                  return (
                    <div key={o.id} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5 }}>
                      <span style={{ flex: 1, minWidth: 0, color: "var(--color-text-strong)", fontWeight: 600 }}>👤 {o.student_name}</span>
                      <span style={{ color: o.totaal === 0 ? "rgba(255,255,255,0.4)" : klaar ? "#69f0ae" : "#ffd54f", fontWeight: 700 }}>
                        {o.totaal === 0 ? "nog niets klaargezet" : `${o.gedaan}/${o.totaal} gedaan${klaar ? " ✓" : ""}`}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <button onClick={kopieerOverzicht} style={miniBtn}>{overzichtCopied ? "✓ Gekopieerd" : "📋 Kopieer overzicht"}</button>
                <button onClick={mailOverzicht} style={miniBtn}>📧 Mail (bv. naar de directie)</button>
              </div>
            </div>
          )}

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
              <button
                onClick={() => (herstel?.studentName === selected.student_name ? setHerstel(null) : maakHerstel(selected.student_name))}
                title={`Nieuw toestel of ziet ${selected.student_name} de lessen niet? Maak een verse koppelcode`}
                style={{ marginTop: 6, background: "none", border: "none", padding: 0, color: "#00b0ff", fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, cursor: "pointer", textDecoration: "underline" }}>
                🔗 Koppeling werkt niet (nieuw toestel)?
              </button>
              {herstel?.studentName === selected.student_name && (
                <div style={{ marginTop: 8, padding: "10px 12px", borderRadius: 10, border: "1px solid rgba(0,176,255,0.35)", background: "rgba(0,176,255,0.07)" }}>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.75)", lineHeight: 1.5, marginBottom: 8 }}>
                    Laat {selected.student_name} deze verse code invoeren op het apparaat dat hij/zij <strong>nu</strong> gebruikt — de koppeling schuift dan vanzelf mee naar dat account, je hoeft niets te verwijderen.
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800, letterSpacing: 4, color: "#fff", background: "rgba(255,255,255,0.08)", borderRadius: 8, padding: "5px 12px" }}>{herstel.code}</span>
                    <button onClick={() => deelWhatsApp(herstel.code, selected.student_name)} style={{ ...miniBtn, background: "#25D366", color: "#04310f", border: "none" }}>💬 WhatsApp</button>
                    <button onClick={() => kopieerCode(herstel.code)} style={miniBtn}>{copiedCode === herstel.code ? "✓ Gekopieerd" : "📋 Kopieer"}</button>
                  </div>
                  <div style={{ marginTop: 6, fontSize: 11, color: "rgba(255,255,255,0.4)" }}>48 uur geldig · 💡 tip: met een Google-login werkt de koppeling op elk apparaat vanzelf</div>
                </div>
              )}
            </div>
          )}

          {/* ⏳ Wacht op je leerling — per openstaande code een kaart met het
              stappenplan (30 aug, spiegel van de ouder-kant). Springt vanzelf
              om via de 6s-poll zodra de leerling de code invult. */}
          {wachtInvites.map((iv) => {
            const geldig = geldigheidsTekst(iv.expires_at);
            const isCopied = copiedCode === iv.code;
            return (
              <div key={iv.id} style={{ borderRadius: 10, border: "1px solid rgba(255,105,135,0.4)", background: "rgba(255,105,135,0.08)", padding: "12px 14px", marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 13.5, fontWeight: 700, color: "#ff9fb2" }}>👤 {iv.child_name} — koppelen loopt…</span>
                  <button onClick={() => trekIn(iv.id)} title="Code intrekken" aria-label="Code intrekken" style={{ background: "none", border: "none", color: "rgba(255,255,255,0.25)", cursor: "pointer", fontSize: 16, padding: 2 }}>×</button>
                </div>
                <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--font-body)", fontSize: 12.5 }}>
                  <div style={{ color: "#69f0ae", fontWeight: 700 }}>✓ Stap 1 — code gemaakt</div>
                  <div style={{ color: "var(--color-text-strong)", fontWeight: 700 }}>➤ Stap 2 — geef de code aan {iv.child_name}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", margin: "2px 0" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, letterSpacing: 4, color: "#fff", background: "rgba(255,255,255,0.08)", borderRadius: 8, padding: "6px 14px" }}>{iv.code}</span>
                    <button onClick={() => deelWhatsApp(iv.code, iv.child_name)} style={{ ...miniBtn, background: "#25D366", color: "#04310f", border: "none" }}>💬 WhatsApp</button>
                    <button onClick={() => kopieerCode(iv.code)} style={miniBtn}>{isCopied ? "✓ Gekopieerd" : "📋 Kopieer"}</button>
                  </div>
                  {geldig && <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{geldig}</div>}
                  <div style={{ color: "rgba(255,255,255,0.5)" }}>○ Stap 3 — {iv.child_name} vult 'm in op "Mijn pagina"</div>
                  <div style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>
                    ⏳ Deze kaart springt <strong>vanzelf</strong> om zodra het gelukt is.{" "}
                    <button onClick={() => stuurHerinnering(iv.code, iv.child_name)} style={{ background: "none", border: "none", padding: 0, color: "#ff9fb2", fontFamily: "var(--font-body)", fontSize: 12.5, fontWeight: 700, cursor: "pointer", textDecoration: "underline" }}>
                      🔔 Stuur de code nog eens
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Nieuwe leerling koppelen */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <input value={inviteName} onChange={(e) => setInviteName(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && inviteName.trim()) genereer(); }} placeholder="Naam van de leerling"
              style={{ flex: "1 1 160px", padding: "10px 12px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)", color: "var(--color-text-strong)", fontFamily: "var(--font-body)", fontSize: 14 }} />
            <button onClick={genereer} disabled={busy || !inviteName.trim()}
              style={{ padding: "10px 16px", borderRadius: 10, border: "none", cursor: busy || !inviteName.trim() ? "not-allowed" : "pointer", background: busy || !inviteName.trim() ? "rgba(255,105,135,0.3)" : "linear-gradient(135deg,#ff6987,#ff9fb2)", color: "#3a0d18", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13 }}>
              {busy ? "..." : "🔗 Koppel een leerling"}
            </button>
          </div>
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
