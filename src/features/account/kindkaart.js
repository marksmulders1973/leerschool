// 📋 Kindkaart — rekenwerk (Mark 23 okt 2026: "ik ben ouder, ik zie het lijntje naar Olivia, dan wil
// ik op haar klikken en direct zien hoe ze ervoor staat en wat ze nog moet doen"). Plan:
// docs/PLAN-KOPPELING-WERKEND.md. Pure functies, los getest; het scherm staat in KoppelKaarten.jsx.
//
// Bronnen (allemaal op link_id, dus ook als het kind op een eigen toestel oefent):
//  scores   leaderboard-rijen  { subject, percentage, completed_at, time_taken (sec), title }
//  perPad   uit haalLeerpadVoortgangVoorKind: { [pathId]: { perStap: { [i]: { wanneer: Date, fouten } } } }

import { SUBJECTS } from "../../shared/subjects.js";

const DAG = 86400000;
const dagSleutel = (d) => { const x = new Date(d); return `${x.getFullYear()}-${x.getMonth()}-${x.getDate()}`; };
export const DAGNAMEN = ["zo", "ma", "di", "wo", "do", "vr", "za"];

/** Vaknaam in gewone woorden. */
export function vakNaam(subject) {
  const s = String(subject || "").trim();
  if (!s) return "oefenen";
  if (SUBJECTS[s]?.title) return SUBJECTS[s].title;
  if (s === "cito") return "Doorstroomtoets";
  if (s === "rekenen") return "Rekenen";
  if (s === "begrijpend-lezen") return "Begrijpend lezen";
  return s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, " ");
}

/**
 * De laatste 7 dagen (vandaag als laatste): per dag geoefend ja/nee, plus totalen.
 * → { dagen: [{ naam, actief, vandaag }], actieveDagen, stappen, toetsjes, toetsMinuten, laatste: Date|null }
 */
export function weekSamenvatting(scores = [], perPad = {}, nu = new Date()) {
  const vandaag = new Date(nu); vandaag.setHours(0, 0, 0, 0);
  const begin = vandaag.getTime() - 6 * DAG;
  const actief = new Set();
  let stappen = 0, toetsjes = 0, sec = 0, laatste = null;
  const zie = (t) => { if (t && !Number.isNaN(t.getTime()) && (!laatste || t > laatste)) laatste = t; };
  for (const r of scores || []) {
    const t = r?.completed_at ? new Date(r.completed_at) : null;
    zie(t);
    if (!t || t.getTime() < begin) continue;
    actief.add(dagSleutel(t)); toetsjes += 1;
    const s = Number(r.time_taken);
    if (Number.isFinite(s) && s > 0 && s < 4 * 3600) sec += s;
  }
  for (const p of Object.values(perPad || {})) {
    for (const st of Object.values(p?.perStap || {})) {
      const t = st?.wanneer ? new Date(st.wanneer) : null;
      zie(t);
      if (!t || t.getTime() < begin) continue;
      actief.add(dagSleutel(t)); stappen += 1;
    }
  }
  const dagen = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(vandaag.getTime() - i * DAG);
    dagen.push({ naam: DAGNAMEN[d.getDay()], actief: actief.has(dagSleutel(d)), vandaag: i === 0 });
  }
  return { dagen, actieveDagen: dagen.filter((d) => d.actief).length, stappen, toetsjes, toetsMinuten: Math.round(sec / 60), laatste };
}

/** "vandaag 19:20", "gisteren 19:20", "dinsdag", "12 okt". */
export function wanneerTekst(t, nu = new Date()) {
  if (!t) return "";
  const d = new Date(t);
  const tijd = `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  const a = new Date(nu); a.setHours(0, 0, 0, 0);
  const b = new Date(d); b.setHours(0, 0, 0, 0);
  const verschil = Math.round((a - b) / DAG);
  if (verschil <= 0) return `vandaag ${tijd}`;
  if (verschil === 1) return `gisteren ${tijd}`;
  if (verschil < 7) return ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"][d.getDay()];
  return `${d.getDate()} ${["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"][d.getMonth()]}`;
}

/**
 * Gaat goed / nog oefenen per vak, uit de toetsjes. Minstens 2 toetsjes voor "nog oefenen",
 * zodat één slechte dag geen oordeel wordt. Max 3 per kant, beste/zwakste eerst.
 */
export function sterkEnZwak(scores = []) {
  const per = {};
  for (const r of scores || []) {
    const p = Number(r?.percentage);
    if (!Number.isFinite(p) || !r?.subject) continue;
    (per[r.subject] ||= []).push(p);
  }
  const rij = Object.entries(per).map(([vak, l]) => ({ vak, naam: vakNaam(vak), gem: Math.round(l.reduce((s, x) => s + x, 0) / l.length), aantal: l.length }));
  const sterk = rij.filter((x) => x.gem >= 75).sort((a, b) => b.gem - a.gem).slice(0, 3);
  const zwak = rij.filter((x) => x.gem < 60 && x.aantal >= 2).sort((a, b) => a.gem - b.gem).slice(0, 3);
  return { sterk, zwak };
}

// Eén zin die een ouder vanavond kan doen, zonder zelf de stof te kennen.
const TIPS = {
  rekenen: "Laat {kind} bij het boodschappen doen uitrekenen wat iets samen kost. Rekenen in het echt blijft beter hangen.",
  wiskunde: "Laat {kind} bij het boodschappen doen uitrekenen wat iets samen kost. Rekenen in het echt blijft beter hangen.",
  taal: "Vraag {kind} om in drie zinnen te vertellen waar een tekst over ging. Samenvatten is de kern van begrijpend lezen.",
  "begrijpend-lezen": "Vraag {kind} om in drie zinnen te vertellen waar een tekst over ging. Samenvatten is de kern van begrijpend lezen.",
  cito: "Vraag {kind} om één vraag van vandaag aan jou uit te leggen. Wie het kan uitleggen, snapt het echt.",
};
export function tipVoorVanavond(kind, zwak = [], week = null) {
  const naam = kind || "je kind";
  if (week && week.actieveDagen === 0) return `Spreek samen een vast moment af, bijvoorbeeld na het eten: één kwartier, elke dag hetzelfde. Een vaste gewoonte werkt beter dan af en toe lang.`;
  const eerste = zwak[0]?.vak;
  const t = (eerste && TIPS[eerste]) || "Vraag {kind} om één ding van vandaag aan jou uit te leggen. Wie het kan uitleggen, snapt het echt.";
  return t.replace(/\{kind\}/g, naam);
}
