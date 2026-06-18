// Interactieve biologie-platen (klikbare onderdelen + uitleg). Idee van gebruiker
// "bob" op het wensenbord (11 jun 2026). v1 = de dierlijke cel; generiek opgezet
// zodat oog/hart/fotosynthese/zenuw er later in hetzelfde formaat bij kunnen.
//
// Formaat: { id, titel, ondertitel, viewBox, onderdelen: [{ id, label, kleur,
//   uitleg, el }], vragen: [{ vraag, opties, antwoord, uitleg }] }
// `el` = de SVG-vorm(en) van dat onderdeel (klikbaar gemaakt door KlikbarePlaat).
import React from "react";

// ── De dierlijke cel ─────────────────────────────────────────────────────────
const cel = {
  id: "cel",
  titel: "De cel",
  ondertitel: "Tik op een onderdeel om te zien wat het doet 👆",
  viewBox: "0 0 400 340",
  onderdelen: [
    {
      id: "cytoplasma",
      label: "Cytoplasma",
      kleur: "#2b7cc0",
      uitleg: "De gelei-achtige vloeistof die de hele cel vult. Alle onderdelen (organellen) drijven hierin en kunnen zo hun werk doen.",
      el: <ellipse cx="200" cy="170" rx="185" ry="150" fill="#cdeafe" />,
    },
    {
      id: "celkern",
      label: "Celkern",
      kleur: "#7e57c2",
      uitleg: "De baas van de cel. Hierin ligt het DNA (erfelijk materiaal) — de gebruiksaanwijzing die bepaalt wat de cel doet en maakt.",
      el: (
        <g>
          <circle cx="150" cy="155" r="56" fill="#7e57c2" />
          <circle cx="150" cy="155" r="20" fill="#4a2d80" />
        </g>
      ),
    },
    {
      id: "mitochondrion",
      label: "Mitochondrium",
      kleur: "#ff7043",
      uitleg: "De energiecentrale. Maakt energie uit voedsel (suiker) + zuurstof, zodat de cel kan werken. Hoe actiever een cel, hoe meer mitochondriën.",
      el: (
        <g transform="rotate(-20 295 115)">
          <ellipse cx="295" cy="115" rx="46" ry="24" fill="#ff7043" />
          <path d="M258 115 q12 -14 24 0 q12 14 24 0 q12 -14 24 0" fill="none" stroke="#fff" strokeWidth="3" opacity="0.8" />
        </g>
      ),
    },
    {
      id: "er",
      label: "Endoplasmatisch reticulum",
      kleur: "#26a69a",
      uitleg: "Een gangenstelsel door de cel dat stoffen vervoert en helpt bij het maken van eiwitten. Een soort wegennet binnenin de cel.",
      el: (
        <path d="M205 150 q30 -10 25 25 q-5 30 30 25 q35 -5 25 30" fill="none" stroke="#26a69a" strokeWidth="7" strokeLinecap="round" />
      ),
    },
    {
      id: "ribosoom",
      label: "Ribosomen",
      kleur: "#1c2840",
      uitleg: "Hele kleine 'fabriekjes' die eiwitten maken — de bouwstenen waar je lijf van groeit en zich herstelt.",
      el: (
        <g fill="#37474f">
          <circle cx="218" cy="150" r="5" /><circle cx="235" cy="172" r="5" /><circle cx="255" cy="200" r="5" />
          <circle cx="248" cy="158" r="5" /><circle cx="270" cy="185" r="5" />
        </g>
      ),
    },
    {
      id: "golgi",
      label: "Golgi-systeem",
      kleur: "#f9a825",
      uitleg: "Het 'postkantoor' van de cel: het verpakt stoffen netjes in en stuurt ze naar de juiste plek.",
      el: (
        <g fill="none" stroke="#f9a825" strokeWidth="7" strokeLinecap="round">
          <path d="M120 250 q40 -22 80 0" /><path d="M125 263 q35 -18 70 0" /><path d="M130 276 q30 -14 60 0" />
        </g>
      ),
    },
    {
      id: "blaasje",
      label: "Blaasje (vacuole)",
      kleur: "#00acc1",
      uitleg: "Een opslagruimte. Bewaart water, voedsel of afval — als kleine bewaarbakjes in de cel.",
      el: (
        <g>
          <circle cx="300" cy="245" r="28" fill="#80deea" stroke="#00acc1" strokeWidth="4" />
          <circle cx="255" cy="265" r="14" fill="#80deea" stroke="#00acc1" strokeWidth="3" />
        </g>
      ),
    },
    {
      id: "celmembraan",
      label: "Celmembraan",
      kleur: "#1565c0",
      uitleg: "De buitenste laag — de 'huid' van de cel. Het is de grens en bepaalt wat er naar binnen en naar buiten mag. Een soort poortwachter.",
      // Ring bovenop de rand: alleen de lijn vangt kliks (fill none), zodat kliks
      // binnenin doorgaan naar de organellen.
      el: <ellipse cx="200" cy="170" rx="185" ry="150" fill="none" stroke="#1565c0" strokeWidth="9" />,
    },
  ],
  vragen: [
    { vraag: "Welk onderdeel is de energiecentrale van de cel?", opties: ["Celkern", "Mitochondrium", "Ribosoom", "Blaasje"], antwoord: 1, uitleg: "Het mitochondrium maakt energie uit voedsel + zuurstof." },
    { vraag: "Waar ligt het DNA (erfelijk materiaal)?", opties: ["In het celmembraan", "In de celkern", "In het cytoplasma", "In een blaasje"], antwoord: 1, uitleg: "De celkern bevat het DNA — de gebruiksaanwijzing van de cel." },
    { vraag: "Wat doet het celmembraan?", opties: ["Het maakt energie", "Het vormt de grens en regelt wat erin/eruit gaat", "Het slaat afval op", "Het maakt eiwitten"], antwoord: 1, uitleg: "Het celmembraan is de huid/poortwachter van de cel." },
    { vraag: "Wat maken ribosomen?", opties: ["Energie", "Water", "Eiwitten", "DNA"], antwoord: 2, uitleg: "Ribosomen zijn de fabriekjes die eiwitten maken." },
    { vraag: "Wat is het cytoplasma?", opties: ["De kern van de cel", "De gelei-vloeistof waarin de onderdelen drijven", "Het postkantoor", "De energiecentrale"], antwoord: 1, uitleg: "Het cytoplasma vult de cel; alle organellen drijven erin." },
  ],
};

// ── Het oog (dwarsdoorsnede, kijkt naar links) ───────────────────────────────
const oog = {
  id: "oog",
  titel: "Het oog",
  ondertitel: "Tik op een onderdeel om te zien wat het doet 👆",
  viewBox: "0 0 420 330",
  onderdelen: [
    {
      id: "oogwit",
      label: "Oogwit (harde oogvlies)",
      kleur: "#90a4b8",
      uitleg: "De stevige, witte buitenkant. Beschermt het oog en houdt het in z'n ronde vorm.",
      el: <circle cx="235" cy="165" r="130" fill="#fbfcff" stroke="#b8c4d6" strokeWidth="3" />,
    },
    {
      id: "glasvocht",
      label: "Glasvocht",
      kleur: "#29b6f6",
      uitleg: "De heldere gelei die het oog vult. Geeft het oog z'n bolvorm en laat het licht door naar achteren.",
      el: <ellipse cx="255" cy="165" rx="104" ry="112" fill="#dbf2ff" />,
    },
    {
      id: "netvlies",
      label: "Netvlies",
      kleur: "#ff7043",
      uitleg: "De 'film' aan de achterkant met miljoenen kleine lichtsensoren (staafjes en kegeltjes). Hier ontstaat het beeld.",
      el: <path d="M255 50 A115 115 0 0 1 255 280" fill="none" stroke="#ff7043" strokeWidth="11" strokeLinecap="round" />,
    },
    {
      id: "gelevlek",
      label: "Gele vlek",
      kleur: "#fdd835",
      uitleg: "Het plekje op het netvlies waar je het állerscherpst ziet. Hier kijk je mee als je iets goed bekijkt.",
      el: <circle cx="360" cy="165" r="11" fill="#fdd835" stroke="#f9a825" strokeWidth="2" />,
    },
    {
      id: "oogzenuw",
      label: "Oogzenuw",
      kleur: "#ef9a9a",
      uitleg: "De 'kabel' achter het oog die het beeld van het netvlies naar de hersenen stuurt. Pas daar 'zie' je het echt.",
      el: <path d="M350 150 q48 -20 62 15 q-14 35 -62 15 q14 -15 0 -30 Z" fill="#ef9a9a" stroke="#e57373" strokeWidth="2" />,
    },
    {
      id: "ooglens",
      label: "Ooglens",
      kleur: "#42a5f5",
      uitleg: "Een doorzichtig lensje dat het licht scherpstelt op het netvlies — net als het scherpstellen van een fototoestel. Hij kan boller en platter worden.",
      el: <ellipse cx="158" cy="165" rx="15" ry="42" fill="#bbdefb" stroke="#42a5f5" strokeWidth="3" />,
    },
    {
      id: "iris",
      label: "Iris (regenboogvlies)",
      kleur: "#3f8fd6",
      uitleg: "Het gekleurde deel (blauw, bruin of groen). Maakt de pupil groter of kleiner om te regelen hoeveel licht er binnenkomt.",
      el: (
        <g fill="#3f8fd6">
          <ellipse cx="125" cy="135" rx="10" ry="24" />
          <ellipse cx="125" cy="195" rx="10" ry="24" />
        </g>
      ),
    },
    {
      id: "pupil",
      label: "Pupil",
      kleur: "#10141c",
      uitleg: "Het zwarte rondje — eigenlijk een gaatje waar het licht doorheen gaat. Wordt klein bij fel licht en groot in het donker.",
      el: <ellipse cx="125" cy="165" rx="9" ry="20" fill="#0a0e16" />,
    },
    {
      id: "hoornvlies",
      label: "Hoornvlies",
      kleur: "#4fc3f7",
      uitleg: "Het doorzichtige 'venster' helemaal vooraan. Laat licht naar binnen en buigt het alvast een beetje de goede kant op.",
      el: <path d="M128 105 Q66 165 128 225" fill="rgba(79,195,247,0.18)" stroke="#4fc3f7" strokeWidth="6" strokeLinecap="round" />,
    },
  ],
  vragen: [
    { vraag: "Waardoor gaat het licht het oog binnen?", opties: ["De oogzenuw", "De pupil", "Het netvlies", "De gele vlek"], antwoord: 1, uitleg: "De pupil is het gaatje waar het licht doorheen gaat." },
    { vraag: "Wat regelt hoeveel licht er binnenkomt?", opties: ["De lens", "De iris", "Het netvlies", "De oogzenuw"], antwoord: 1, uitleg: "De iris maakt de pupil groter of kleiner." },
    { vraag: "Waar ontstaat het beeld (met de lichtsensoren)?", opties: ["Op het netvlies", "In de pupil", "In de lens", "In het hoornvlies"], antwoord: 0, uitleg: "Op het netvlies achterin zitten de lichtsensoren." },
    { vraag: "Wat stuurt het beeld naar de hersenen?", opties: ["De iris", "De oogzenuw", "De lens", "Het glasvocht"], antwoord: 1, uitleg: "De oogzenuw is de kabel naar de hersenen." },
    { vraag: "Wat doet de ooglens?", opties: ["Hij beschermt het oog", "Hij stelt het licht scherp", "Hij geeft kleur aan het oog", "Hij maakt traanvocht"], antwoord: 1, uitleg: "De lens stelt scherp op het netvlies." },
  ],
};

export const BIO_PLATEN = { cel, oog };
export default BIO_PLATEN;
