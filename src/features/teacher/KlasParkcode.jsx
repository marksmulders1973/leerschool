// 🏫 Parkcode voor mijn klas (Mark 9 sep 2026: "leerkracht-knop parkcode voor mijn
// klas"). De leerkracht maakt met één tik een gedeeld park (samen bouwen, zie
// features/zoo/parkRoom.js) dat begint als het standaard begin-park, krijgt een
// code van 6 tekens + link, en kan die op het bord zetten, delen of printen.
// Eerder gemaakte parkcodes staan eronder (eigenaar = deze leerkracht).
import { useEffect, useState } from "react";
import { maakParkRoom, mijnParkRooms } from "../zoo/parkRoom.js";
import { STARTER_LAYOUT } from "../zoo/zooState.js";

const KAART = { background: "#fff", borderRadius: 16, padding: "16px 18px", boxShadow: "0 2px 10px rgba(0,0,0,.08)", margin: "14px 0", color: "#1c2840", font: "500 14.5px/1.5 system-ui" };
const KNOP = { border: "none", borderRadius: 999, padding: "11px 16px", font: "800 14px system-ui", color: "#fff", background: "linear-gradient(135deg,#6a3fd6,#4a2aa8)", cursor: "pointer" };
const KNOP_LICHT = { ...KNOP, color: "#4a2aa8", background: "#f3efff", border: "1.5px solid #cbbcf5" };

export default function KlasParkcode({ authUser }) {
  const [rooms, setRooms] = useState([]);
  const [naam, setNaam] = useState("");
  const [bezig, setBezig] = useState(false);
  const [nieuw, setNieuw] = useState(null);  // net aangemaakte code
  const [gekopieerd, setGekopieerd] = useState(false);
  const ingelogd = !!authUser && !authUser.is_anonymous;

  useEffect(() => {
    if (!ingelogd) return;
    let stop = false;
    mijnParkRooms(authUser.id).then((r) => { if (!stop) setRooms(r); }).catch(() => {});
    return () => { stop = true; };
  }, [ingelogd, authUser?.id, nieuw]);

  const maak = async () => {
    if (!ingelogd || bezig) return;
    setBezig(true);
    try {
      const code = await maakParkRoom({ naam: naam.trim() || "Park van de klas", layout: STARTER_LAYOUT, terrain: null, owned: {} });
      setNieuw(code); setNaam("");
    } catch { alert("Parkcode maken lukte niet. Probeer het nog eens."); }
    setBezig(false);
  };
  const link = (code) => `${window.location.origin}/dierentuin?samen=${code}`;
  const kopieer = async (code) => { try { await navigator.clipboard.writeText(link(code)); setGekopieerd(code); setTimeout(() => setGekopieerd(false), 2000); } catch { /* */ } };
  const print = (code, titel) => {
    const w = window.open("", "_blank", "width=720,height=900");
    if (!w) return;
    w.document.write(`<!doctype html><html lang="nl"><head><meta charset="utf-8"><title>Parkcode ${code}</title></head>
      <body style="font-family:Segoe UI,Arial,sans-serif;text-align:center;padding:40px;color:#1c2840">
      <div style="font-size:22px;font-weight:800;color:#0f5132">Leerkwartier · samen bouwen</div>
      <div style="font-size:18px;margin:10px 0 30px">${titel.replace(/</g, "&lt;")}</div>
      <div style="font-size:14px;letter-spacing:2px;color:#666">PARKCODE</div>
      <div style="font-size:96px;font-weight:900;letter-spacing:12px;font-family:ui-monospace,Consolas,monospace;margin:10px 0 30px">${code}</div>
      <div style="font-size:18px;line-height:1.6">Ga naar <b>leerkwartier.app/dierentuin</b><br>☰-menu → <b>Delen &amp; samen bouwen</b> → vul de parkcode in → <b>Meedoen</b><br><span style="color:#666;font-size:14px">of open direct: ${link(code)}</span></div>
      <div style="margin-top:40px;font-size:13px;color:#888">Iedereen met de code bouwt in hetzelfde park. Je kunt alleen je eigen bouwsels weghalen; de leerkracht mag alles.</div>
      <script>setTimeout(function(){window.print()},300)</script></body></html>`);
    w.document.close();
  };

  return (
    <div style={KAART}>
      <div style={{ font: "800 17px system-ui", color: "#4a2aa8", marginBottom: 4 }}>🏫 Samen bouwen met de klas</div>
      <p style={{ margin: "0 0 10px", color: "#445" }}>Maak een <b>parkcode</b>: iedereen die 'm invult komt in hetzelfde 3D-park en bouwt mee, tot 100 leerlingen tegelijk. Leerlingen kunnen alleen hun eigen bouwsels weghalen; jij mag alles. Geen chat, geen achternamen.</p>
      <p style={{ margin: "0 0 10px", color: "#445", background: "#f3efff", borderRadius: 10, padding: "8px 12px" }}>🎮 <b>Klas-game "Wie is de imposter?"</b>: open het park met de parkcode, tik op ☰ → 🎮. Jij bent de spelleider en kiest het vak en de groep van de taken (rekenen, taal, lezen, wereld of VMBO-examens) en het aantal imposters. Leerlingen krijgen een uitnodiging in beeld. Elke taak = 3 vragen; het klassement per parkcode blijft 60 dagen staan.</p>
      {!ingelogd ? (
        <p style={{ margin: 0, color: "#7a5a00", background: "#fff6d6", borderRadius: 10, padding: "8px 12px" }}>Log in als leerkracht om een parkcode voor je klas te maken.</p>
      ) : (
        <>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            <input value={naam} onChange={(e) => setNaam(e.target.value.slice(0, 40))} placeholder="Naam van het park, bv. Park van groep 7" style={{ flex: "1 1 220px", border: "1.5px solid #cbbcf5", borderRadius: 10, padding: "10px 12px", font: "600 14px system-ui", color: "#1c2840", minWidth: 0 }} />
            <button onClick={maak} disabled={bezig} style={{ ...KNOP, opacity: bezig ? .6 : 1 }}>{bezig ? "Bezig…" : "🏫 Maak een parkcode"}</button>
          </div>
          {nieuw && (
            <div style={{ background: "#f3efff", border: "1.5px solid #cbbcf5", borderRadius: 12, padding: "14px 16px", marginTop: 12, textAlign: "center" }}>
              <div style={{ font: "700 12px system-ui", letterSpacing: 2, color: "#6a3fd6" }}>NIEUWE PARKCODE</div>
              <div style={{ font: "900 44px/1 ui-monospace, monospace", letterSpacing: 8, color: "#2a1a60", margin: "6px 0 10px" }}>{nieuw}</div>
              <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
                <a href={link(nieuw)} target="_blank" rel="noopener noreferrer" style={{ ...KNOP, textDecoration: "none" }}>🚀 Open het park</a>
                <button onClick={() => kopieer(nieuw)} style={KNOP_LICHT}>{gekopieerd === nieuw ? "Gekopieerd ✓" : "🔗 Kopieer link"}</button>
                <button onClick={() => print(nieuw, rooms.find((r) => r.code === nieuw)?.naam || "Park van de klas")} style={KNOP_LICHT}>🖨️ Print voor op het bord</button>
              </div>
            </div>
          )}
          {rooms.length > 0 && (
            <div style={{ marginTop: 14 }}>
              <div style={{ font: "800 13px system-ui", color: "#556", marginBottom: 6 }}>Jouw parkcodes</div>
              {rooms.map((r) => (
                <div key={r.code} style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", padding: "8px 0", borderTop: "1px solid #eee" }}>
                  <span style={{ font: "900 20px ui-monospace, monospace", letterSpacing: 3, color: "#2a1a60" }}>{r.code}</span>
                  <span style={{ flex: "1 1 120px", color: "#445" }}>{r.naam}</span>
                  <a href={link(r.code)} target="_blank" rel="noopener noreferrer" style={{ ...KNOP_LICHT, padding: "7px 12px", font: "800 12.5px system-ui", textDecoration: "none" }}>Open</a>
                  <button onClick={() => kopieer(r.code)} style={{ ...KNOP_LICHT, padding: "7px 12px", font: "800 12.5px system-ui" }}>{gekopieerd === r.code ? "✓" : "Kopieer"}</button>
                  <button onClick={() => print(r.code, r.naam)} style={{ ...KNOP_LICHT, padding: "7px 12px", font: "800 12.5px system-ui" }}>Print</button>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
