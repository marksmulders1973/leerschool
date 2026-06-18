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

// ── Fotosynthese (proces: in- en uitgangen klikbaar) ─────────────────────────
const fotosynthese = {
  id: "fotosynthese",
  titel: "Fotosynthese",
  ondertitel: "Tik op een onderdeel van het proces 👆",
  viewBox: "0 0 420 360",
  onderdelen: [
    {
      id: "wortels",
      label: "Wortels",
      kleur: "#8d6e63",
      uitleg: "De wortels zuigen water (en mineralen) uit de grond op en sturen het via de stengel omhoog naar de bladeren.",
      el: (
        <g>
          <rect x="0" y="300" width="420" height="60" fill="#6d4c41" />
          <rect x="0" y="300" width="420" height="9" fill="#8d6e63" />
          <rect x="208" y="212" width="10" height="92" fill="#558b2f" />
          <g stroke="#5d4037" strokeWidth="5" strokeLinecap="round" fill="none">
            <path d="M213 308 q-26 16 -40 44" /><path d="M213 310 q4 26 0 46" /><path d="M213 308 q26 16 38 42" />
          </g>
        </g>
      ),
    },
    {
      id: "water",
      label: "Water (H₂O)",
      kleur: "#29b6f6",
      uitleg: "Water is een grondstof voor de plant. Het komt via de wortels binnen en gaat omhoog naar het blad, waar het wordt gebruikt.",
      el: (
        <g>
          <g fill="#29b6f6"><path d="M120 298 q-8 12 0 18 q8 -6 0 -18 Z" /><path d="M138 306 q-7 10 0 15 q7 -5 0 -15 Z" /></g>
          <path d="M150 318 L186 248" stroke="#29b6f6" strokeWidth="4" strokeLinecap="round" />
          <polygon points="186,248 178,259 190,258" fill="#29b6f6" />
        </g>
      ),
    },
    {
      id: "zonlicht",
      label: "Zonlicht",
      kleur: "#ffb300",
      uitleg: "De energie voor het proces. De plant vangt zonlicht op om er suiker mee te maken — zonder licht geen fotosynthese.",
      el: (
        <g>
          <circle cx="58" cy="56" r="26" fill="#ffd54f" />
          <g stroke="#ffd54f" strokeWidth="5" strokeLinecap="round">
            <line x1="58" y1="16" x2="58" y2="6" /><line x1="20" y1="56" x2="10" y2="56" />
            <line x1="30" y1="28" x2="23" y2="21" /><line x1="30" y1="84" x2="23" y2="91" /><line x1="86" y1="28" x2="93" y2="21" />
          </g>
          <path d="M82 78 L150 138" stroke="#ffca28" strokeWidth="4" strokeDasharray="2 7" strokeLinecap="round" />
        </g>
      ),
    },
    {
      id: "co2",
      label: "Koolstofdioxide (CO₂)",
      kleur: "#90a4ae",
      uitleg: "Het gas CO₂ uit de lucht. Komt via kleine gaatjes in het blad (huidmondjes) naar binnen. Dit is óók een grondstof.",
      el: (
        <g>
          <g fill="#b0bec5"><ellipse cx="362" cy="118" rx="34" ry="19" /><circle cx="344" cy="110" r="13" /><circle cx="374" cy="108" r="15" /></g>
          <text x="362" y="124" fill="#37474f" fontSize="15" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">CO₂</text>
          <path d="M330 128 L288 150" stroke="#90a4ae" strokeWidth="4" strokeLinecap="round" />
          <polygon points="288,150 299,144 297,154" fill="#90a4ae" />
        </g>
      ),
    },
    {
      id: "zuurstof",
      label: "Zuurstof (O₂)",
      kleur: "#4fc3f7",
      uitleg: "Zuurstof komt vrij als 'restproduct' en gaat de lucht in — handig, want dít ademen mens en dier juist in!",
      el: (
        <g>
          <g fill="#81d4fa"><ellipse cx="300" cy="56" rx="29" ry="17" /><circle cx="286" cy="50" r="12" /></g>
          <text x="300" y="62" fill="#01579b" fontSize="15" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">O₂</text>
          <path d="M286 118 L296 80" stroke="#4fc3f7" strokeWidth="4" strokeLinecap="round" />
          <polygon points="296,80 289,91 301,90" fill="#4fc3f7" />
        </g>
      ),
    },
    {
      id: "bladgroen",
      label: "Bladgroen",
      kleur: "#2e7d32",
      uitleg: "Bladgroen (chlorofyl) zit in de bladgroenkorrels en is groen. Het vangt het zonlicht op — dít is de plek waar de fotosynthese gebeurt.",
      el: (
        <g>
          <path d="M150 210 C150 112 252 110 286 150 C300 214 210 246 150 210 Z" fill="#43a047" stroke="#2e7d32" strokeWidth="3" />
          <path d="M156 207 C202 184 246 160 282 150" stroke="#2e7d32" strokeWidth="3" fill="none" />
          <g fill="#1b5e20"><circle cx="196" cy="174" r="6" /><circle cx="226" cy="164" r="6" /><circle cx="210" cy="194" r="6" /><circle cx="246" cy="180" r="6" /></g>
        </g>
      ),
    },
    {
      id: "glucose",
      label: "Glucose (suiker)",
      kleur: "#fb8c00",
      uitleg: "Glucose (suiker) is wat de plant zélf maakt — z'n eigen voedsel om van te groeien. Dit is het belangrijkste product van de fotosynthese.",
      el: (
        <g>
          <circle cx="226" cy="232" r="21" fill="#fff3e0" stroke="#fb8c00" strokeWidth="3" />
          <text x="226" y="237" fill="#e65100" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">suiker</text>
        </g>
      ),
    },
  ],
  vragen: [
    { vraag: "Wat heeft een plant nodig om fotosynthese te doen?", opties: ["Alleen water", "Zonlicht, CO₂ en water", "Alleen zuurstof", "Suiker en zuurstof"], antwoord: 1, uitleg: "De grondstoffen zijn zonlicht (energie), CO₂ en water." },
    { vraag: "Wat MAAKT de plant bij fotosynthese?", opties: ["Zonlicht", "Glucose (suiker) en zuurstof", "Alleen CO₂", "Alleen water"], antwoord: 1, uitleg: "De producten zijn glucose (voedsel) + zuurstof." },
    { vraag: "Waar gebeurt de fotosynthese?", opties: ["In de wortels", "In het bladgroen", "In de bloem", "In de stengel"], antwoord: 1, uitleg: "In de bladgroenkorrels (chlorofyl) in het blad." },
    { vraag: "Welk gas komt vrij dat mens en dier inademen?", opties: ["Koolstofdioxide", "Zuurstof", "Waterstof", "Stikstof"], antwoord: 1, uitleg: "Zuurstof (O₂) komt vrij — dat ademen wij in." },
    { vraag: "Hoe komt het water in de plant?", opties: ["Via de bladeren", "Via de wortels", "Via de bloemen", "Via de lucht"], antwoord: 1, uitleg: "De wortels zuigen water uit de grond op." },
  ],
};

// ── Het hart (schematische vooraanzicht-doorsnede) ───────────────────────────
// Kleur = bloedsoort: blauw = zuurstofarm (rechterkant), rood = zuurstofrijk
// (linkerkant). NB: "rechts/links" is vanuit de persoon zelf gezien.
const hart = {
  id: "hart",
  titel: "Het hart",
  ondertitel: "Tik op een onderdeel — blauw = zuurstofarm, rood = zuurstofrijk 👆",
  viewBox: "0 0 420 380",
  onderdelen: [
    {
      id: "rechterboezem",
      label: "Rechterboezem",
      kleur: "#1e88e5",
      uitleg: "Vangt het zuurstofarme bloed op dat uit het hele lichaam terugkomt (via de holle aders). Geeft het door aan de rechterkamer.",
      el: <ellipse cx="168" cy="150" rx="44" ry="36" fill="#90caf9" stroke="#1565c0" strokeWidth="2" />,
    },
    {
      id: "linkerboezem",
      label: "Linkerboezem",
      kleur: "#e53935",
      uitleg: "Vangt het zuurstofrijke bloed op dat net uit de longen komt. Geeft het door aan de linkerkamer.",
      el: <ellipse cx="258" cy="150" rx="44" ry="36" fill="#ef9a9a" stroke="#c62828" strokeWidth="2" />,
    },
    {
      id: "rechterkamer",
      label: "Rechterkamer",
      kleur: "#1565c0",
      uitleg: "Pompt het zuurstofarme bloed naar de longen (via de longslagader) om daar nieuwe zuurstof op te halen.",
      el: <path d="M124 195 Q116 290 190 330 L206 205 Q166 182 124 195 Z" fill="#42a5f5" stroke="#1565c0" strokeWidth="3" />,
    },
    {
      id: "linkerkamer",
      label: "Linkerkamer",
      kleur: "#b71c1c",
      uitleg: "Pompt het zuurstofrijke bloed met krácht het hele lichaam in (via de aorta). Daarom heeft hij de dikste spierwand.",
      el: <path d="M206 205 L190 330 Q262 292 286 198 Q248 180 206 205 Z" fill="#ef5350" stroke="#b71c1c" strokeWidth="5" />,
    },
    {
      id: "aorta",
      label: "Aorta (lichaamsslagader)",
      kleur: "#e53935",
      uitleg: "De grootste slagader van het lichaam. Voert het zuurstofrijke bloed vanuit de linkerkamer naar je hele lijf.",
      el: <path d="M232 128 C234 76 288 74 298 112" fill="none" stroke="#e53935" strokeWidth="13" strokeLinecap="round" />,
    },
    {
      id: "longslagader",
      label: "Longslagader",
      kleur: "#1e88e5",
      uitleg: "Brengt zuurstofarm bloed van de rechterkamer naar de longen. (De enige slagader met zuurstofarm bloed!)",
      el: <path d="M186 128 C180 78 146 78 136 110" fill="none" stroke="#1e88e5" strokeWidth="12" strokeLinecap="round" />,
    },
    {
      id: "hartkleppen",
      label: "Hartkleppen",
      kleur: "#cfd8dc",
      uitleg: "Deurtjes die maar één kant op opengaan, zodat het bloed niet terugstroomt. Het 'tik-tak' van je hartslag is het dichtklappen van de kleppen.",
      el: (
        <g fill="#ffffff" stroke="#78909c" strokeWidth="2" strokeLinejoin="round">
          <path d="M150 188 l18 11 l18 -11 l-4 -6 l-14 8 l-14 -8 Z" />
          <path d="M240 188 l18 11 l18 -11 l-4 -6 l-14 8 l-14 -8 Z" />
        </g>
      ),
    },
  ],
  vragen: [
    { vraag: "Welk hartdeel pompt het bloed het hele lichaam in?", opties: ["Rechterboezem", "Linkerkamer", "Rechterkamer", "Linkerboezem"], antwoord: 1, uitleg: "De linkerkamer pompt met kracht het hele lichaam in (dikste wand)." },
    { vraag: "Waar gaat het bloed heen vanuit de rechterkamer?", opties: ["Naar het lichaam", "Naar de longen", "Naar de hersenen", "Naar de maag"], antwoord: 1, uitleg: "Naar de longen, via de longslagader, om zuurstof op te halen." },
    { vraag: "Wat doen de hartkleppen?", opties: ["Bloed maken", "Voorkomen dat het bloed terugstroomt", "Zuurstof toevoegen", "Het hart laten kloppen"], antwoord: 1, uitleg: "Kleppen laten het bloed maar één kant op stromen." },
    { vraag: "Welke slagader voert bloed naar het hele lichaam?", opties: ["De longslagader", "De aorta", "De holle ader", "De longader"], antwoord: 1, uitleg: "De aorta is de grote lichaamsslagader." },
    { vraag: "Welk bloed zit er in de rechterkant van het hart?", opties: ["Zuurstofrijk (rood)", "Zuurstofarm (blauw)", "Geen bloed", "Alleen water"], antwoord: 1, uitleg: "Rechts = zuurstofarm bloed (op weg naar de longen)." },
  ],
};

export const BIO_PLATEN = { cel, oog, fotosynthese, hart };
export default BIO_PLATEN;
