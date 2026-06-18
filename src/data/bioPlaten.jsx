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

export const BIO_PLATEN = { cel };
export default BIO_PLATEN;
