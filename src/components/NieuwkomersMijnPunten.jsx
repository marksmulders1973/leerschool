// ⭐ Mijn punten (Mark 2 okt 2026: "eigen pagina en profiel … kinderen willen hun puntscore aan de leraar
// laten zien"). Bewust licht en apart van de gewone app: alleen een voornaam op dit apparaat, geen account,
// geen ranglijst met andere kinderen (privacy, jonge nieuwkomers). "Laat zien aan de juf" = groot scherm
// dat het kind omhoog houdt. Klasoverzicht voor de juf komt later in Nieuwkomers-plus.
import { useEffect, useState } from "react";
import { WOORDKAARTEN } from "../learnPaths/nieuwkomersPicto.js";
import { ZIN_THEMAS } from "../learnPaths/nieuwkomersZinnen.js";
import { track } from "../utils.js";
import { Ster } from "./nieuwkomersPunten.jsx";

export const TOTAAL_KEY = "lk_nk_punten_totaal";
const NAAM_KEY = "lk_nk_naam";

const L = {
  nl: { kop: "Mijn punten", pt: "punten", naam: "Hoe heet je?", ok: "Klaar", laat: "Laat zien aan de juf", rec: "Mijn records", dip: "Diploma's", trede: "Trede", terug: "Terug", leeg: "Nog geen punten. Doe het plaatjesdictee of luister en kies!", wijzig: "naam wijzigen", dictee: "Dictee", luister: "Luister en kies" },
  en: { kop: "My points", pt: "points", naam: "What is your name?", ok: "Done", laat: "Show the teacher", rec: "My records", dip: "Certificates", trede: "Step", terug: "Back", leeg: "No points yet. Do the picture dictation or listen and choose!", wijzig: "change name", dictee: "Dictation", luister: "Listen and choose" },
  ar: { kop: "نقاطي", pt: "نقاط", naam: "ما اسمك؟", ok: "تمّ", laat: "أرِ المعلمة", rec: "أرقامي القياسية", dip: "الشهادات", trede: "الدرجة", terug: "رجوع", leeg: "لا توجد نقاط بعد. قم بإملاء الصور أو استمع واختر!", wijzig: "تغيير الاسم", dictee: "إملاء", luister: "استمع واختر" },
  uk: { kop: "Мої бали", pt: "балів", naam: "Як тебе звати?", ok: "Готово", laat: "Покажи вчительці", rec: "Мої рекорди", dip: "Дипломи", trede: "Сходинка", terug: "Назад", leeg: "Ще немає балів. Зроби диктант з картинками або «Слухай і вибирай»!", wijzig: "змінити ім'я", dictee: "Диктант", luister: "Слухай і вибирай" },
  tr: { kop: "Puanlarım", pt: "puan", naam: "Adın ne?", ok: "Tamam", laat: "Öğretmene göster", rec: "Rekorlarım", dip: "Diplomalar", trede: "Basamak", terug: "Geri", leeg: "Henüz puan yok. Resimli dikteyi ya da dinle ve seç'i yap!", wijzig: "adı değiştir", dictee: "Dikte", luister: "Dinle ve seç" },
  ro: { kop: "Punctele mele", pt: "puncte", naam: "Cum te cheamă?", ok: "Gata", laat: "Arată-i doamnei", rec: "Recordurile mele", dip: "Diplome", trede: "Treapta", terug: "Înapoi", leeg: "Încă nu ai puncte. Fă dictarea cu imagini sau ascultă și alege!", wijzig: "schimbă numele", dictee: "Dictare", luister: "Ascultă și alege" },
  bg: { kop: "Моите точки", pt: "точки", naam: "Как се казваш?", ok: "Готово", laat: "Покажи на учителката", rec: "Моите рекорди", dip: "Дипломи", trede: "Стъпало", terug: "Назад", leeg: "Още нямаш точки. Направи диктовката с картинки или „Слушай и избери“!", wijzig: "промени името", dictee: "Диктовка", luister: "Слушай и избери" },
};

const themaNaam = (id) => {
  if (id.startsWith("zin-")) return ZIN_THEMAS.find((t) => `zin-${t.id}` === id)?.thema || id;
  return WOORDKAARTEN.find((t) => t.id === id)?.thema || id;
};

function leesStand() {
  const uit = { totaal: 0, records: [], tredes: [], naam: "" };
  try {
    uit.totaal = Number(localStorage.getItem(TOTAAL_KEY)) || 0;
    uit.naam = localStorage.getItem(NAAM_KEY) || "";
    uit.tredes = JSON.parse(localStorage.getItem("lk_nk_tredes") || "[]");
    for (let n = 0; n < localStorage.length; n++) {
      const k = localStorage.key(n);
      const m = k && k.match(/^lk_nk(d|l)_record_(.+)$/);
      if (m) uit.records.push({ soort: m[1], thema: themaNaam(m[2]), punten: Number(localStorage.getItem(k)) || 0 });
    }
    uit.records.sort((a, b) => b.punten - a.punten);
  } catch { /* */ }
  return uit;
}

export default function NieuwkomersMijnPunten({ taal = "nl" }) {
  const t = L[taal] || L.nl;
  const [stand, setStand] = useState(leesStand);
  const [naamInvoer, setNaamInvoer] = useState("");
  const [naamBewerken, setNaamBewerken] = useState(false);
  const [toon, setToon] = useState(false);
  // vernieuwen als het kind terugkomt van een oefening
  useEffect(() => {
    const f = () => setStand(leesStand());
    window.addEventListener("focus", f); window.addEventListener("lk-nk-punten", f);
    return () => { window.removeEventListener("focus", f); window.removeEventListener("lk-nk-punten", f); };
  }, []);

  const bewaarNaam = () => {
    const n = naamInvoer.trim().slice(0, 20);
    if (!n) return;
    try { localStorage.setItem(NAAM_KEY, n); } catch { /* */ }
    setNaamBewerken(false); setStand(leesStand());
  };

  const kaart = { background: "#ffffff", color: "#0f2a44", borderRadius: 18, padding: 14, boxShadow: "0 4px 16px rgba(0,0,0,0.18)", marginBottom: 14 };
  const knop = { border: "none", borderRadius: 999, padding: "10px 16px", fontWeight: 800, fontSize: 15, cursor: "pointer", fontFamily: "inherit" };

  if (toon) {
    return (
      <div role="dialog" aria-modal="true" style={{ position: "fixed", inset: 0, zIndex: 9999, background: "linear-gradient(160deg,#ffd54f,#ffb300)", color: "#2a1d00", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20, textAlign: "center", overflowY: "auto" }}>
        <div style={{ fontSize: 22, fontWeight: 800 }} dir="auto">{t.kop}</div>
        {stand.naam && <div style={{ fontSize: 46, fontWeight: 900, lineHeight: 1.1, margin: "8px 0" }} dir="auto">{stand.naam}</div>}
        <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1 }}><Ster maat={60} kleur="#fff" /> {stand.totaal}</div>
        <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 14 }} dir="auto">{t.pt}</div>
        {stand.tredes.length > 0 && (
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", marginBottom: 12 }}>
            {stand.tredes.map((n) => <span key={n} style={{ background: "#fff", borderRadius: 14, padding: "8px 14px", fontWeight: 900, fontSize: 18 }} dir="auto"><Ster maat={18} /> {t.trede} {n}</span>)}
          </div>
        )}
        {stand.records.slice(0, 6).map((r) => (
          <div key={r.soort + r.thema} style={{ fontSize: 17, fontWeight: 700 }} dir="auto">{r.soort === "d" ? t.dictee : t.luister} · {r.thema}: {r.punten}</div>
        ))}
        <div style={{ fontSize: 14, marginTop: 12, opacity: 0.8 }}>{new Date().toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" })}</div>
        <button type="button" onClick={() => setToon(false)} style={{ ...knop, marginTop: 18, background: "#2a1d00", color: "#fff", fontSize: 18, padding: "12px 26px" }}>{t.terug}</button>
      </div>
    );
  }

  return (
    <div style={kaart}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 800 }} dir="auto">{t.kop}{stand.naam && !naamBewerken ? ` · ${stand.naam}` : ""}</div>
          <div style={{ fontSize: 32, fontWeight: 900, color: "#e0a800", lineHeight: 1.1 }}><Ster maat={26} /> {stand.totaal} <span style={{ fontSize: 15, color: "#0f2a44" }}>{t.pt}</span></div>
        </div>
        <button type="button" onClick={() => { setStand(leesStand()); setToon(true); try { track("nk_punten_laat_zien", { totaal: stand.totaal }); } catch { /* */ } }}
          style={{ ...knop, background: "#ffd54f", color: "#2a1d00" }} dir="auto">{t.laat}</button>
      </div>
      {(!stand.naam || naamBewerken) ? (
        <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
          <input value={naamInvoer} onChange={(e) => setNaamInvoer(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") bewaarNaam(); }}
            placeholder={t.naam} aria-label={t.naam} maxLength={20} autoComplete="off"
            style={{ flex: 1, minWidth: 0, fontSize: 18, fontWeight: 700, padding: "8px 12px", borderRadius: 12, border: "2px solid #c9d3e0", color: "#0f2a44", background: "#f7f9fc" }} dir="auto" />
          <button type="button" onClick={bewaarNaam} style={{ ...knop, background: "#2e9d57", color: "#fff" }}>{t.ok}</button>
        </div>
      ) : (
        <button type="button" onClick={() => { setNaamInvoer(stand.naam); setNaamBewerken(true); }} style={{ background: "none", border: "none", padding: 0, marginTop: 4, fontSize: 12.5, color: "#5a6a86", textDecoration: "underline", cursor: "pointer" }} dir="auto">{t.wijzig}</button>
      )}
      {stand.totaal === 0 && <div style={{ fontSize: 13.5, marginTop: 8, color: "#5a6a86" }} dir="auto">{t.leeg}</div>}
    </div>
  );
}
