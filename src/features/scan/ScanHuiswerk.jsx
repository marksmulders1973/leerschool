// 📷 Scan je huiswerk (Mark 11 nov 2026): foto van een blad van school → de app leest welke doelen
// erop staan → het kind tikt een doel aan en krijgt de les erbij (uitleg + overhoring).
//
// De AI kiest alleen uit onze eigen, nagekeken lessen (api/scan-huiswerk.js); hij legt zelf niets uit
// en maakt geen sommen. De foto wordt verkleind in de browser, één keer verstuurd en nergens bewaard.
// Ontwerpregel "vraag eerst, tekst waar nodig": na de foto komt eerst de vraag "Wat wil je oefenen?".
import { useEffect, useRef, useState } from "react";
import { track } from "../../utils.js";
import { partnerHeader } from "../referral/partnerCode.js";
import supabase from "../../supabase.js";
import { useCanUseFeature } from "../../subscription/useSubscription.js";
import ProefweekKnop from "../../subscription/ProefweekKnop.jsx";
import ScanIcoon from "./ScanIcoon.jsx";

// 🎟️ Mark 11 nov 2026: "4 gratis proefscans, dan betalen." De server telt (api/scan-huiswerk.js);
// hier onthouden we alleen de laatste stand die de server meldde, om het vooraf te kunnen tonen.
const GRATIS_PROEFSCANS = 4;
const PROEF = "lk_scan_proef";
function leesProef() {
  try { const n = Number(JSON.parse(localStorage.getItem(PROEF) || "null")?.gebruikt); return Number.isFinite(n) && n > 0 ? n : 0; } catch { return 0; }
}
function bewaarProef(n) { try { localStorage.setItem(PROEF, JSON.stringify({ gebruikt: n })); } catch { /* */ } }
async function inlogKop() {
  try {
    const { data } = (await supabase.auth?.getSession?.()) || {};
    const token = data?.session?.access_token;
    return token ? { Authorization: `Bearer ${token}` } : {};
  } catch { return {}; }
}

const LANGSTE_ZIJDE = 1568; // groter leest de AI niet beter, het kost alleen meer
const BEWAAR = "lk_scan_laatste"; // alleen de uitkomst (doelen), nooit de foto; weg als het tabblad sluit

function apparaatId() {
  try {
    let u = localStorage.getItem("lk_uid");
    if (!u) { u = "u_" + Math.random().toString(36).slice(2) + Date.now().toString(36); localStorage.setItem("lk_uid", u); }
    return u;
  } catch { return "u_zonderopslag"; }
}

// Foto verkleinen tot een JPEG van hooguit LANGSTE_ZIJDE pixels. Geeft een data-URL terug.
async function verkleinFoto(bestand) {
  const url = URL.createObjectURL(bestand);
  try {
    const img = await new Promise((ok, fout) => {
      const el = new Image();
      el.onload = () => ok(el);
      el.onerror = () => fout(new Error("foto-niet-leesbaar"));
      el.src = url;
    });
    const schaal = Math.min(1, LANGSTE_ZIJDE / Math.max(img.naturalWidth, img.naturalHeight));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(img.naturalWidth * schaal));
    canvas.height = Math.max(1, Math.round(img.naturalHeight * schaal));
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg", 0.82);
  } finally {
    URL.revokeObjectURL(url);
  }
}

const FOUT_TEKST = {
  "op-voor-vandaag": { kop: "Dat waren er genoeg voor vandaag", tekst: "Je hebt vandaag al veel bladen gescand. Morgen kan het weer." },
  "geen-schoolwerk": { kop: "Ik zie geen blad van school", tekst: "Maak een foto van je werkblad of van de bladzijde uit je boek. Zorg dat de tekst goed te lezen is." },
  "geen-doelen": { kop: "Ik kan je blad niet goed lezen", tekst: "Probeer het nog een keer: leg het blad plat, met genoeg licht, en zet het hele blad op de foto." },
  "foto-niet-leesbaar": { kop: "Deze foto kan ik niet openen", tekst: "Kies een andere foto, of maak een nieuwe met de camera." },
  druk: { kop: "Het is nu even te druk", tekst: "Probeer het over een poosje nog een keer." },
  anders: { kop: "Dat lukte niet", tekst: "Er ging iets mis bij het lezen van je blad. Probeer het nog een keer." },
};

export default function ScanHuiswerk({ onOpenLes, onTerug, authUser = null, kind = false }) {
  const [stand, setStand] = useState("start"); // start | bezig | klaar | fout
  const [proefGebruikt, setProefGebruikt] = useState(leesProef);
  // Heeft dit gezin het Familie-pakket (betaald, proefweek of partnercode)? Dan geen teller en geen poort.
  const { allowed: familie, paywallActive, loading: rechtLaden } = useCanUseFeature("scan-huiswerk", authUser);
  const telt = paywallActive && !familie && !rechtLaden;
  const proefOver = Math.max(0, GRATIS_PROEFSCANS - proefGebruikt);
  const [poortVanServer, setPoortVanServer] = useState(false); // de server zei: proefscans op (gaat voor op wat de browser denkt)
  const proefOp = poortVanServer || (telt && proefOver === 0);
  const zetProef = (n) => { if (Number.isFinite(n)) { setProefGebruikt(n); bewaarProef(n); } };
  const [uitkomst, setUitkomst] = useState(null);
  const [fout, setFout] = useState("anders");
  const cameraRef = useRef(null);
  const kiesRef = useRef(null);

  useEffect(() => {
    try { track("scan_open"); } catch { /* */ }
    // Terug uit een les? Dan staat de lijst met doelen er nog, zodat het kind het volgende doel kan kiezen.
    try {
      const vorige = JSON.parse(sessionStorage.getItem(BEWAAR) || "null");
      if (vorige?.doelen?.length) { setUitkomst(vorige); setStand("klaar"); }
    } catch { /* */ }
  }, []);

  const toonFout = (soort) => {
    setFout(FOUT_TEKST[soort] ? soort : "anders");
    setStand("fout");
    try { track("scan_fout", { soort }); } catch { /* */ }
  };

  async function verwerk(bestand) {
    if (!bestand) return;
    setStand("bezig");
    let beeld;
    try { beeld = await verkleinFoto(bestand); } catch { toonFout("foto-niet-leesbaar"); return; }
    try {
      const resp = await fetch("/api/scan-huiswerk", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...partnerHeader(), ...(await inlogKop()) },
        body: JSON.stringify({ beeld, uid: apparaatId() }),
      });
      const data = await resp.json().catch(() => ({}));
      if (data?.proef) zetProef(Number(data.proef.gebruikt));
      if (resp.status === 402) {
        // De vier proefscans zijn op: terug naar het beginscherm, daar staat nu de kaart van het Familie-pakket.
        zetProef(Math.max(GRATIS_PROEFSCANS, Number(data?.proef?.gebruikt) || 0));
        try { track("scan_poort", { waar: "na-foto" }); } catch { /* */ }
        setPoortVanServer(true);
        setStand("start");
        return;
      }
      if (!resp.ok) { toonFout(data?.error === "op-voor-vandaag" || data?.error === "druk" ? data.error : "anders"); return; }
      if (!data.schoolwerk) { toonFout("geen-schoolwerk"); return; }
      if (!data.doelen?.length) { toonFout("geen-doelen"); return; }
      const metLes = data.doelen.filter((d) => d.les).length;
      try { track("scan_klaar", { doelen: data.doelen.length, met_les: metLes, vak: data.vak || "", groep: data.groep || "" }); } catch { /* */ }
      // 📚 Leren van wat er gescand wordt (Mark 11 nov 2026): per doel één regel met het onderwerp in onze
      // eigen woorden en de les die erbij gekozen is. Geen foto, geen tekst van het blad, geen namen.
      // Zo zien we welke stof kinderen van school meekrijgen en waar een eigen les met eigen sommen bij moet.
      data.doelen.forEach((d) => { try { track("scan_doel", { doel: d.doel, les: d.les || "", onderdeel: d.onderdeel || "", vak: data.vak || "", groep: data.groep || "" }); } catch { /* */ } });
      // Vraag naar lessen die we nog niet hebben: zo zien we wat kinderen van school meekrijgen.
      data.doelen.filter((d) => !d.les).forEach((d) => { try { track("scan_geen_les", { doel: d.doel, vak: data.vak || "", groep: data.groep || "" }); } catch { /* */ } });
      setUitkomst(data);
      try { sessionStorage.setItem(BEWAAR, JSON.stringify(data)); } catch { /* */ }
      setStand("klaar");
    } catch {
      toonFout("anders");
    }
  }

  const opnieuw = () => {
    try { sessionStorage.removeItem(BEWAAR); } catch { /* */ }
    setUitkomst(null);
    setStand("start");
  };
  const kiesBestand = (e) => { const f = e.target.files?.[0]; e.target.value = ""; verwerk(f); };

  const pagina = {
    minHeight: "100dvh", padding: "28px 16px calc(var(--bottom-nav-height, 64px) + 40px)", boxSizing: "border-box",
    background: "linear-gradient(180deg,#0f172a,#1e293b)", color: "var(--color-text, #E6EBF5)", fontFamily: "system-ui",
    display: "flex", flexDirection: "column", alignItems: "center",
  };
  const kolom = { width: "100%", maxWidth: 520, display: "flex", flexDirection: "column", gap: 16 };
  const groot = {
    display: "flex", alignItems: "center", justifyContent: "center", gap: 12, width: "100%", minHeight: 64,
    borderRadius: 18, border: "none", cursor: "pointer", fontFamily: "system-ui", fontWeight: 800, fontSize: 19,
    background: "linear-gradient(135deg,#22c55e,#15803d)", color: "#fff", boxShadow: "0 8px 24px rgba(0,0,0,.25)", padding: "12px 18px",
  };
  const rustig = { ...groot, minHeight: 52, fontSize: 16, fontWeight: 700, background: "transparent", border: "2px solid rgba(255,255,255,.35)", boxShadow: "none" };
  const klein = { fontSize: 14, color: "var(--color-text-muted, #9AA8C0)", lineHeight: 1.5, textAlign: "center", margin: 0 };

  return (
    <div style={pagina}>
      <div style={kolom}>
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <ScanIcoon size={44} kleur="#69f0ae" />
          <h1 style={{ fontSize: "clamp(24px, 6vw, 32px)", fontWeight: 900, margin: 0, color: "#fff" }}>Scan je huiswerk</h1>
        </div>

        {stand === "start" && proefOp && (
          <div role="region" aria-label="Scan je huiswerk hoort bij het Familie-pakket" style={{ background: "linear-gradient(135deg, #1e2a45, #1a2540)", border: "1px solid rgba(255, 213, 79, 0.4)", borderRadius: 16, padding: "20px 18px", display: "flex", flexDirection: "column", gap: 12, textAlign: "center", alignItems: "center" }}>
            <h2 style={{ fontSize: 20, fontWeight: 900, margin: 0, color: "#ffd54f" }}>Je vier gratis scans zijn op</h2>
            {kind ? (
              <p style={{ ...klein, fontSize: 16, color: "var(--color-text, #E6EBF5)" }}>
                Meer bladen scannen kan met het Familie-pakket. Vraag je ouder of verzorger of jullie dat erbij nemen.
              </p>
            ) : (
              <>
                <p style={{ ...klein, fontSize: 16, color: "var(--color-text, #E6EBF5)" }}>
                  Meer bladen scannen hoort bij het Familie-pakket: € 39 voor 12 maanden, voor het hele gezin (tot 3 kinderen). Eén keer betalen, het stopt vanzelf.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start" }}>
                  <ProefweekKnop plek="poort:scan-huiswerk" />
                  <a href="/abonnement.html#familie" onClick={() => { try { track("scan_poort_klik", { doel: "abonnement" }); } catch { /* */ } }} style={{ display: "inline-block", padding: "10px 18px", background: "linear-gradient(135deg, #ff6b35, #ff8c42)", color: "#fff", fontWeight: 700, fontSize: 14, borderRadius: 10, textDecoration: "none" }}>
                    Bekijk het Familie-pakket — € 39 per jaar
                  </a>
                </div>
              </>
            )}
            <p style={klein}>Oefenen zelf blijft gratis, gegarandeerd t/m 2031. De lessen van je eerdere scans kun je gewoon blijven doen.</p>
          </div>
        )}

        {stand === "start" && !proefOp && (
          <>
            <p style={{ ...klein, fontSize: 17, color: "var(--color-text, #E6EBF5)" }}>
              Snap je een blad van school niet? Maak er een foto van. Dan leggen we het uit en overhoren we je.
            </p>
            <button type="button" style={groot} onClick={() => cameraRef.current?.click()}>
              <ScanIcoon size={26} kleur="#fff" /> Maak een foto
            </button>
            <button type="button" style={rustig} onClick={() => kiesRef.current?.click()}>Kies een foto die je al hebt</button>
            <input ref={cameraRef} type="file" accept="image/*" capture="environment" onChange={kiesBestand} style={{ display: "none" }} data-testid="scan-camera" />
            <input ref={kiesRef} type="file" accept="image/*" onChange={kiesBestand} style={{ display: "none" }} data-testid="scan-kies" />
            {telt && (
              <p style={{ ...klein, color: "#ffd54f", fontWeight: 700 }}>
                {proefOver === GRATIS_PROEFSCANS ? "Je mag vier bladen gratis proberen." : proefOver === 1 ? "Nog 1 gratis scan over." : `Nog ${proefOver} gratis scans over.`}
                {!kind && " Daarna hoort scannen bij het Familie-pakket."}
              </p>
            )}
            <p style={klein}>Leg het blad plat neer en zet het hele blad op de foto.</p>
            <p style={klein}>We bewaren je foto niet. Zet liever geen namen of gezichten op de foto.</p>
          </>
        )}

        {stand === "bezig" && (
          <div role="status" aria-live="polite" style={{ textAlign: "center", padding: "32px 0", display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
            <div className="lk-scan-draai" style={{ width: 44, height: 44, borderRadius: "50%", border: "4px solid rgba(255,255,255,.2)", borderTopColor: "#69f0ae", animation: "lkScanDraai 1s linear infinite" }} />
            <style>{"@keyframes lkScanDraai{to{transform:rotate(360deg)}} @media (prefers-reduced-motion: reduce){.lk-scan-draai{animation:none!important}}"}</style>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>Ik lees je blad…</div>
            <p style={klein}>Dit duurt een paar tellen.</p>
          </div>
        )}

        {stand === "klaar" && uitkomst && (
          <>
            <div style={{ textAlign: "center" }}>
              {uitkomst.titel && <p style={{ ...klein, marginBottom: 6 }}>Op je blad: {uitkomst.titel}</p>}
              <h2 style={{ fontSize: 22, fontWeight: 900, margin: 0, color: "#fff" }}>Wat wil je oefenen?</h2>
            </div>
            {uitkomst.doelen.map((d, i) =>
              d.les ? (
                <button
                  key={i}
                  type="button"
                  onClick={() => { try { track("scan_kies_doel", { les: d.les, onderdeel: d.onderdeel }); } catch { /* */ } onOpenLes(d.les, d.onderdeel - 1); }}
                  style={{ ...groot, justifyContent: "flex-start", textAlign: "left", background: "var(--color-bg-elevated, #1A2541)", border: "2px solid #22c55e", fontSize: 17 }}
                >
                  <span style={{ flex: "0 0 34px", height: 34, borderRadius: "50%", background: "#22c55e", color: "#06211a", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900 }}>{i + 1}</span>
                  <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <span>{d.doel}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text-muted, #9AA8C0)" }}>Uitleg en oefenen</span>
                  </span>
                </button>
              ) : (
                <div key={i} style={{ ...groot, cursor: "default", justifyContent: "flex-start", textAlign: "left", background: "transparent", border: "2px dashed rgba(255,255,255,.25)", boxShadow: "none", fontSize: 17, fontWeight: 700, color: "var(--color-text-muted, #9AA8C0)" }}>
                  <span style={{ flex: "0 0 34px", height: 34, borderRadius: "50%", border: "2px solid rgba(255,255,255,.3)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900 }}>{i + 1}</span>
                  <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <span>{d.doel}</span>
                    <span style={{ fontSize: 13, fontWeight: 600 }}>Hier hebben we nog geen les voor. We hebben het genoteerd.</span>
                  </span>
                </div>
              ),
            )}
            <button type="button" style={rustig} onClick={opnieuw}>Scan nog een blad</button>
          </>
        )}

        {stand === "fout" && (
          <div role="alert" style={{ display: "flex", flexDirection: "column", gap: 14, textAlign: "center" }}>
            <h2 style={{ fontSize: 21, fontWeight: 900, margin: 0, color: "#fff" }}>{FOUT_TEKST[fout].kop}</h2>
            <p style={{ ...klein, fontSize: 16, color: "var(--color-text, #E6EBF5)" }}>{FOUT_TEKST[fout].tekst}</p>
            {fout !== "op-voor-vandaag" && <button type="button" style={groot} onClick={opnieuw}>Probeer het nog een keer</button>}
          </div>
        )}

        {onTerug && stand !== "bezig" && (
          <button type="button" onClick={onTerug} style={{ ...rustig, width: "auto", alignSelf: "center", minHeight: 40, borderRadius: 999, fontSize: 14, padding: "8px 18px" }}>← Terug</button>
        )}
      </div>
    </div>
  );
}
