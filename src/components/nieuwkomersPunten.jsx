// ⭐ Punten voor de nieuwkomer-oefeningen (Mark 2 okt 2026: "punten scoren … jij hebt 1480 punten verdiend,
// goed bezig" — eerst bij het plaatjesdictee, daarna "dat kan ook voor luister en kies"). Geen minpunten:
// fout = 0, hulp = 0. Record per oefening + onderwerp in localStorage (alleen op dit apparaat).
import { useEffect, useState } from "react";
import { zeg } from "../shared/voorleesModus.js";

export const PUNT = 10;

export const PUNTEN_TEKST = {
  nl: { pt: "punten", uit: "Je hebt {a} van de {b} punten verdiend!", rec: "Je record: {r} punten", nieuw: "Nieuw record!", lof: ["Super gedaan!", "Goed bezig!", "Goed geoefend! Probeer het nog eens."] },
  en: { pt: "points", uit: "You earned {a} of {b} points!", rec: "Your record: {r} points", nieuw: "New record!", lof: ["Great job!", "Well done!", "Good practice! Try again."] },
  ar: { pt: "نقاط", uit: "لقد ربحت {a} من {b} نقطة!", rec: "رقمك القياسي: {r} نقطة", nieuw: "رقم قياسي جديد!", lof: ["عمل رائع!", "أحسنت!", "تدريب جيد! حاول مرة أخرى."] },
  uk: { pt: "балів", uit: "Ти заробив {a} з {b} балів!", rec: "Твій рекорд: {r} балів", nieuw: "Новий рекорд!", lof: ["Чудово!", "Молодець!", "Гарне тренування! Спробуй ще раз."] },
  tr: { pt: "puan", uit: "{b} puanın {a} tanesini kazandın!", rec: "Rekorun: {r} puan", nieuw: "Yeni rekor!", lof: ["Harika!", "Aferin!", "İyi çalıştın! Bir daha dene."] },
  ro: { pt: "puncte", uit: "Ai câștigat {a} din {b} puncte!", rec: "Recordul tău: {r} puncte", nieuw: "Record nou!", lof: ["Super!", "Bravo!", "Ai exersat bine! Mai încearcă o dată."] },
  bg: { pt: "точки", uit: "Спечели {a} от {b} точки!", rec: "Твоят рекорд: {r} точки", nieuw: "Нов рекорд!", lof: ["Супер!", "Браво!", "Добре се упражни! Опитай пак."] },
};

/** Getekende ster (geen emoji als icoon, Mark 11 sep 2026). */
export function Ster({ maat = 18, kleur = "#f5b800" }) {
  return (
    <svg width={maat} height={maat} viewBox="0 0 24 24" aria-hidden="true" style={{ verticalAlign: "-0.15em" }}>
      <path d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" fill={kleur} />
    </svg>
  );
}

const lofNr = (punten, max) => (max && punten / max >= 0.9 ? 0 : max && punten / max >= 0.6 ? 1 : 2);

/** Kleine teller die tijdens de oefening meeloopt. */
export function PuntenTeller({ punten, taal = "nl" }) {
  const t = PUNTEN_TEKST[taal] || PUNTEN_TEKST.nl;
  return (
    <span aria-label={`${punten} ${t.pt}`}
      style={{ fontSize: 16, fontWeight: 900, color: "#b07d00", background: "#fff7d6", border: "1.5px solid #e0a800", borderRadius: 999, padding: "4px 12px" }}>
      <Ster maat={16} /> {punten}
    </span>
  );
}

/** Eindscore met record; zegt de uitslag één keer hardop in het Nederlands. */
export function PuntenUitslag({ punten, max, taal = "nl", recordKey }) {
  const t = PUNTEN_TEKST[taal] || PUNTEN_TEKST.nl;
  const [rec, setRec] = useState(null);
  useEffect(() => {
    let oud = 0; try { oud = Number(localStorage.getItem(recordKey)) || 0; } catch { /* */ }
    if (punten > oud) { try { localStorage.setItem(recordKey, String(punten)); } catch { /* */ } }
    // totaal voor "Mijn punten" op de nieuwkomers-pagina
    try { localStorage.setItem("lk_nk_punten_totaal", String((Number(localStorage.getItem("lk_nk_punten_totaal")) || 0) + punten)); window.dispatchEvent(new Event("lk-nk-punten")); } catch { /* */ }
    setRec({ record: Math.max(oud, punten), nieuw: punten > oud && oud > 0 });
    zeg(`Je hebt ${punten} van de ${max} punten verdiend. ${PUNTEN_TEKST.nl.lof[lofNr(punten, max)].replace(" Probeer het nog eens.", "")}`);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <div style={{ fontSize: 40, fontWeight: 900, color: "#e0a800", marginTop: 6 }}>{punten} <span style={{ fontSize: 18, color: "#0f2a44" }}>/ {max}</span></div>
      <div style={{ fontSize: 17, fontWeight: 800, marginTop: 2 }} dir="auto">{t.uit.replace("{a}", punten).replace("{b}", max)}</div>
      <div style={{ fontSize: 16, marginTop: 4 }} dir="auto">{t.lof[lofNr(punten, max)]}</div>
      {rec && <div style={{ fontSize: 14, marginTop: 6, color: rec.nieuw ? "#2e9d57" : "#5a6a86", fontWeight: rec.nieuw ? 800 : 600 }} dir="auto">{rec.nieuw ? t.nieuw + " " : ""}{t.rec.replace("{r}", rec.record)}</div>}
    </div>
  );
}
