// Leerpad: Dieren en seizoenen — PO Wereld & Natuur (groep 4-7)
// 11 stappen in 5 hoofdstukken.

const COLORS = {
  text: "#e0e6f0", muted: "#8899aa", warm: "#ffd54f", alt: "#ff7043",
  paper: "rgba(255,255,255,0.04)",
  zoog: "#ff7043", vogel: "#42a5f5", vis: "#26a69a",
  reptiel: "#66bb6a", insect: "#ffb300",
  lente: "#a5d6a7", zomer: "#ffd54f", herfst: "#ff8a65", winter: "#90caf9",
  good: "#00c853",
};

const stepEmojis = ["🌿", "🐶", "🐦", "🐠", "🦗", "🥚", "🌷", "❄️", "🌲", "🦊", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is leven?", emoji: "🌿", from: 0, to: 0 },
  { letter: "B", title: "Diergroepen", emoji: "🐶", from: 1, to: 4 },
  { letter: "C", title: "Levensstadia", emoji: "🥚", from: 5, to: 5 },
  { letter: "D", title: "Seizoenen + planten", emoji: "🌷", from: 6, to: 9 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 10, to: 10 },
];

const steps = [
  {
    title: "Wat is leven?",
    explanation: "Sommige dingen **leven**, andere niet. Levende dingen zijn anders dan stenen of water.\n\n**Wat alle levende wezens doen** (zes kenmerken):\n1. **Eten** — voedsel opnemen.\n2. **Ademen** — zuurstof gebruiken.\n3. **Groeien** — groter worden.\n4. **Bewegen** — al is het maar inwendig (planten ook!).\n5. **Reageren** — op licht, warmte, gevaar.\n6. **Voortplanten** — nieuwe wezens maken.\n\n**Groepen levende wezens**:\n• **Dieren** — hond, vogel, vis, mier. Ook wij **mensen** horen bij de dieren!\n• **Planten** — bomen, gras, bloemen.\n• **Schimmels** — paddenstoelen, gist.\n• **Bacteriën** — piepklein, alleen te zien met een microscoop.\n\n**Niet levend**: stenen, water, wolken, plastic, metalen. Die ademen niet, eten niet, groeien niet zelf.\n\n**Leuk weetje**: een ei waar een kuiken in groeit, is wel levend.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">leven = 6 kenmerken</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">1. eten 🍴</text>
<text x="160" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">2. ademen 💨</text>
<text x="20" y="75" fill="${COLORS.text}" font-size="11" font-family="Arial">3. groeien 📈</text>
<text x="160" y="75" fill="${COLORS.text}" font-size="11" font-family="Arial">4. bewegen 🏃</text>
<text x="20" y="95" fill="${COLORS.text}" font-size="11" font-family="Arial">5. reageren 👀</text>
<text x="160" y="95" fill="${COLORS.text}" font-size="11" font-family="Arial">6. voortplanten 👶</text>
<text x="150" y="135" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial">dieren (ook mensen) · planten · schimmels</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">niet levend: steen, water, plastic</text>
</svg>`,
    checks: [
      {
        q: "Welke is **niet** een levend wezen?",
        options: ["een steen", "een mier", "een boom", "een paddenstoel"],
        answer: 0,
        wrongHints: [null, "Mier = dier = levend.", "Boom = plant = levend.", "Paddenstoel = schimmel = levend."],
        uitlegPad: {
          stappen: [{ titel: "Steen = niet levend", tekst: "Steen ademt niet, eet niet, groeit niet. Niet levend." }],
          woorden: [{ woord: "levend", uitleg: "Voldoet aan 6 kenmerken: eten, ademen, groeien, bewegen, reageren, voortplanten." }],
          theorie: "Levend = dier/plant/schimmel/bacterie. Niet levend = steen/water/lucht/plastic.",
          voorbeelden: [{ type: "tabel", tekst: "Levend: mier, boom, paddenstoel. Niet: steen, wolk, plastic." }],
          basiskennis: [{ onderwerp: "Schimmel = levend", uitleg: "Paddenstoel is schimmel — wel levend (groeit, plant zich voort met sporen)." }],
          niveaus: { basis: "Steen.", simpeler: "Steen leeft niet (geen ademen/groeien). Mier/boom/paddenstoel zijn wel levend.", nogSimpeler: "Steen" },
        },
      },
      {
        q: "Wat doen alle levende wezens?",
        options: ["Ze ademen", "Ze praten", "Ze lopen", "Ze zingen"],
        answer: 0,
        wrongHints: [null, "Niet alle dieren praten.", "Vissen lopen niet, planten ook niet.", "Niet alle dieren zingen."],
        uitlegPad: {
          stappen: [{ titel: "Ademen = universeel", tekst: "Dieren en planten hebben allemaal zuurstof nodig — ook een plant ademt." }],
          woorden: [{ woord: "ademen", uitleg: "Zuurstof opnemen, kooldioxide afgeven." }],
          theorie: "6 levenskenmerken die ALLE wezens delen: eten, ademen, groeien, bewegen, reageren, voortplanten.",
          voorbeelden: [{ type: "lijst", tekst: "Mens ademt met longen. Vis met kieuwen. Plant via blaadjes." }],
          basiskennis: [{ onderwerp: "Niet praten/lopen/zingen", uitleg: "Praten/lopen/zingen geldt niet voor planten of vissen." }],
          niveaus: { basis: "Ademen.", simpeler: "ALLE levende wezens ademen (zuurstof). Praten/lopen/zingen niet voor planten/vissen.", nogSimpeler: "Ademen" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Tot welke groep hoort een **paddenstoel**?",
        options: ["schimmels", "planten", "dieren", "bacteriën"],
        answer: 0,
        wrongHints: [
          null,
          "Een paddenstoel lijkt op een plant. Maar hoort hij echt bij de planten?",
          null,
          "Bacteriën zijn zo klein dat je ze alleen met een microscoop ziet.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Paddenstoel = schimmel",
              tekst: "Een paddenstoel is geen plant en geen dier. Hij hoort bij de schimmels, net als gist.",
            },
          ],
          woorden: [
            {
              woord: "schimmel",
              uitleg: "Een groep levende wezens. Paddenstoelen en gist horen erbij.",
            },
          ],
          theorie: "Groepen levende wezens: dieren, planten, schimmels en bacteriën.",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "Schimmels: paddenstoel, gist.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Wel levend",
              uitleg: "Een paddenstoel leeft: hij groeit en maakt nieuwe paddenstoelen.",
            },
          ],
          niveaus: {
            basis: "schimmels.",
            simpeler: "Een paddenstoel hoort bij de schimmels, niet bij de planten.",
            nogSimpeler: "schimmels",
          },
        },
      },
      {
        q: "Bij welke groep levende wezens horen **mensen**?",
        options: ["dieren", "planten", "schimmels", "bacteriën"],
        answer: 0,
        wrongHints: [
          null,
          "Planten maken hun eigen voedsel. Doen wij dat ook?",
          null,
          "Bacteriën zijn piepklein. Zijn wij dat ook?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Mensen = dieren",
              tekst: "Wij eten, ademen, groeien en bewegen. Wij horen bij de dieren.",
            },
          ],
          woorden: [
            {
              woord: "dieren",
              uitleg: "Een groep levende wezens, zoals hond, vogel, vis en mier. Ook mensen.",
            },
          ],
          theorie: "Mensen horen bij de dieren, net als honden en vogels.",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "Dieren: hond, vogel, vis, mier, mens.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Vier groepen",
              uitleg: "Levende wezens zijn dieren, planten, schimmels of bacteriën.",
            },
          ],
          niveaus: {
            basis: "dieren.",
            simpeler: "Mensen horen bij de dieren.",
            nogSimpeler: "dieren",
          },
        },
      },
      {
        q: "Wat betekent **voortplanten**?",
        options: ["Nieuwe wezens maken", "Groter worden", "Voedsel opnemen", "Zuurstof gebruiken"],
        answer: 0,
        wrongHints: [
          null,
          "Groter worden heeft een ander woord: groeien.",
          null,
          "Zuurstof gebruiken heet ademen.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Voortplanten = nieuwe wezens maken",
              tekst: "Een kat krijgt kittens. Een plant maakt zaadjes. Dat is voortplanten.",
            },
          ],
          woorden: [
            {
              woord: "voortplanten",
              uitleg: "Nieuwe wezens maken, zoals jongen of zaadjes.",
            },
          ],
          theorie: "Eten = voedsel opnemen. Ademen = zuurstof gebruiken. Groeien = groter worden. Voortplanten = nieuwe wezens maken.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Een kip legt eieren waar kuikens uit komen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Zes kenmerken",
              uitleg: "Voortplanten is een van de zes kenmerken van leven.",
            },
          ],
          niveaus: {
            basis: "Nieuwe wezens maken.",
            simpeler: "Voortplanten betekent: nieuwe wezens maken, zoals jongen.",
            nogSimpeler: "nieuwe wezens",
          },
        },
      },
      {
        q: "Een kleine poes wordt een grote kat. Welk kenmerk van leven zie je?",
        options: ["Groeien", "Ademen", "Voortplanten", "Reageren"],
        answer: 0,
        wrongHints: [
          null,
          null,
          "Bij voortplanten komen er nieuwe dieren bij. Is dat hier zo?",
          "Reageren is iets doen op licht, warmte of gevaar.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Groter worden = groeien",
              tekst: "De poes wordt groter. Groter worden heet groeien.",
            },
          ],
          woorden: [
            {
              woord: "groeien",
              uitleg: "Groter worden.",
            },
          ],
          theorie: "De zes kenmerken: eten, ademen, groeien, bewegen, reageren, voortplanten.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Een boompje wordt een grote boom: ook groeien.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Alle levende wezens groeien",
              uitleg: "Dieren, planten en schimmels worden groter.",
            },
          ],
          niveaus: {
            basis: "Groeien.",
            simpeler: "De poes wordt groter, dus je ziet groeien.",
            nogSimpeler: "groeien",
          },
        },
      },
      {
        q: "Hoe kun je **bacteriën** zien?",
        options: ["Met een microscoop", "Met een verrekijker", "Met een spiegel", "Met een zaklamp"],
        answer: 0,
        wrongHints: [
          null,
          "Een verrekijker gebruik je om ver weg te kijken. Zijn bacteriën ver weg of piepklein?",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Bacteriën zijn piepklein",
              tekst: "Bacteriën zijn zo klein dat je ze met je ogen niet ziet. Met een microscoop wel.",
            },
          ],
          woorden: [
            {
              woord: "microscoop",
              uitleg: "Een apparaat waarmee je heel kleine dingen groot ziet.",
            },
          ],
          theorie: "Bacteriën zijn levende wezens. Ze zijn piepklein.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Onder een microscoop zie je bacteriën als kleine stipjes of staafjes.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Wel levend",
              uitleg: "Bacteriën zijn klein, maar ze leven wel.",
            },
          ],
          niveaus: {
            basis: "Met een microscoop.",
            simpeler: "Bacteriën zijn piepklein. Je ziet ze alleen met een microscoop.",
            nogSimpeler: "microscoop",
          },
        },
      },
      {
        q: "Waarom is **water** niet levend?",
        options: ["Het groeit niet zelf", "Het is nat", "Het is doorzichtig", "Het kan stromen"],
        answer: 0,
        wrongHints: [
          null,
          "Een vis is ook nat. Leeft een vis?",
          null,
          "Een rivier stroomt, maar is stromen hetzelfde als leven?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Water doet de kenmerken niet",
              tekst: "Water eet niet, ademt niet en groeit niet zelf. Daarom leeft het niet.",
            },
          ],
          woorden: [
            {
              woord: "niet levend",
              uitleg: "Iets wat niet eet, niet ademt en niet zelf groeit.",
            },
          ],
          theorie: "Niet levend: stenen, water, wolken, plastic, metalen.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Water, steen en plastic leven niet. Een vis in het water wel.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Kenmerken van leven",
              uitleg: "Eten, ademen, groeien, bewegen, reageren, voortplanten.",
            },
          ],
          niveaus: {
            basis: "Het groeit niet zelf.",
            simpeler: "Water eet en groeit niet. Daarom leeft het niet.",
            nogSimpeler: "eet niet",
          },
        },
      },
    ],
  },

  // B
  {
    title: "Zoogdieren — wat zijn dat?",
    explanation: "**Zoogdieren** (of: zogenden) zijn de groep waar **wij ook bij horen**. Kenmerken:\n\n• **Vacht of haren** op het lichaam.\n• **Warm bloed** — hun lichaam blijft vanzelf warm, ook als het buiten koud is (bij ons ongeveer 37 °C).\n• **Levend baren** — geen eieren leggen.\n• **Zogen**: moeder geeft melk aan haar baby.\n• **Ademen met longen** (ook bij walvissen!).\n• **Zorgen voor jongen** — vaak lang.\n\n**Voorbeelden**:\n• Op land: hond, kat, koe, paard, leeuw, mens, olifant, beer, muis.\n• In water: walvis, dolfijn, zeehond, zeekoe.\n• In de lucht: vleermuis (enige zoogdier dat kan vliegen!).\n\n**Niet alle zoogdieren zien er hetzelfde uit**, maar deze kenmerken delen ze bijna allemaal (het vogelbekdier legt bijvoorbeeld wél eieren).\n\n**Leuk weetje**: het kleinste zoogdier is de hommelvleermuis (~2 g). Het grootste is de blauwe vinvis (~150.000 kg).",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="40" width="260" height="50" rx="8" fill="${COLORS.zoog}" opacity="0.18" stroke="${COLORS.zoog}" stroke-width="2"/>
<text x="150" y="68" text-anchor="middle" fill="${COLORS.zoog}" font-size="14" font-family="Arial" font-weight="bold">ZOOGDIEREN 🐶</text>
<text x="150" y="84" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">vacht · warm · zoogt · longen</text>
<text x="20" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">land: hond, kat, koe, mens</text>
<text x="20" y="133" fill="${COLORS.text}" font-size="11" font-family="Arial">water: walvis, dolfijn</text>
<text x="20" y="151" fill="${COLORS.text}" font-size="11" font-family="Arial">lucht: vleermuis (enige!)</text>
</svg>`,
    checks: [
      {
        q: "Welke is een zoogdier?",
        options: ["walvis", "haai", "krokodil", "kikker"],
        answer: 0,
        wrongHints: [null, "Haai is een vis.", "Krokodil is een reptiel.", "Kikker is een amfibie."],
        uitlegPad: {
          stappen: [{ titel: "Walvis = zoogt", tekst: "Walvis lijkt op vis maar zoogt zijn jongen + ademt met longen → zoogdier." }],
          woorden: [{ woord: "walvis", uitleg: "Grootste zoogdier ooit (blauwe vinvis ~150.000 kg). Leeft in zee, zoogt." }],
          theorie: "Zoogdier-test: vacht/haren + warmbloedig + zoogt + longen.",
          voorbeelden: [{ type: "feit", tekst: "Walvis komt boven om te ademen — heeft longen, geen kieuwen." }],
          basiskennis: [{ onderwerp: "Strikvraag", uitleg: "Niet 'leeft in water' = vis. Walvis = zee + zoogdier." }],
          niveaus: { basis: "walvis.", simpeler: "Walvis lijkt vis maar zoogt + ademt met longen → zoogdier. Haai=vis, krokodil=reptiel, kikker=amfibie.", nogSimpeler: "Walvis" },
        },
      },
      {
        q: "Wat is **uniek** aan zoogdieren?",
        options: [
          "Moeder geeft melk aan baby",
          "Ze leggen eieren",
          "Ze hebben koud bloed",
          "Ze leven alleen in zee",
        ],
        answer: 0,
        wrongHints: [null, "Eieren = vogels, vissen, reptielen.", "Koud bloed = vissen, reptielen.", "Zoogdieren leven overal."],
        uitlegPad: {
          stappen: [{ titel: "Zogen = melk geven", tekst: "Alleen zoogdieren geven melk aan jongen. Andere dieren niet." }],
          woorden: [{ woord: "zogen", uitleg: "Moeder geeft melk uit tepels aan baby. Daarom 'zoogdier'." }],
          theorie: "Zoogdier-uniek = melk geven. Andere kenmerken (warm bloed, longen) delen ze met vogels.",
          voorbeelden: [{ type: "feit", tekst: "Mens, koe, hond, walvis — allemaal melkgevende moeders." }],
          basiskennis: [{ onderwerp: "Eieren", uitleg: "Vogels/vissen/reptielen leggen eieren — zoogdieren bijna nooit." }],
          niveaus: { basis: "Melk geven.", simpeler: "Zoogdieren = enige groep die melk geeft aan baby. Daarom ZOOG-dier.", nogSimpeler: "Melk" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Hoe ademt een **walvis**?",
        options: ["Met longen", "Met kieuwen", "Via zijn huid", "Via zijn vinnen"],
        answer: 0,
        wrongHints: [null, "Vissen hebben kieuwen. Is een walvis een vis?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Walvis = zoogdier",
              tekst: "Een walvis is een zoogdier. Zoogdieren ademen met longen, ook als ze in zee leven.",
            },
          ],
          woorden: [
            {
              woord: "longen",
              uitleg: "Organen in je borst waarmee je lucht inademt.",
            },
          ],
          theorie: "Alle zoogdieren ademen met longen, ook walvissen en dolfijnen.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Een walvis komt naar boven om lucht te halen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Vissen ademen anders",
              uitleg: "Vissen halen zuurstof uit het water met kieuwen.",
            },
          ],
          niveaus: {
            basis: "Met longen.",
            simpeler: "Een walvis is een zoogdier en ademt met longen.",
            nogSimpeler: "longen",
          },
        },
      },
      {
        q: "Wat hebben zoogdieren op hun lichaam?",
        options: ["Vacht of haren", "Veren", "Schubben", "Een hard pantser"],
        answer: 0,
        wrongHints: [null, "Veren horen bij een andere diergroep. Welke?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Vacht of haren",
              tekst: "Een hond, kat en koe hebben een vacht. Wij mensen hebben haren.",
            },
          ],
          woorden: [
            {
              woord: "vacht",
              uitleg: "Dikke laag haren op het lichaam van een dier.",
            },
          ],
          theorie: "Kenmerken van zoogdieren: vacht of haren, warm bloed, levend baren, zogen, longen.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Hond: vacht. Mens: haren. Mus: veren (vogel).",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Veren = vogel",
              uitleg: "Alleen vogels hebben veren.",
            },
          ],
          niveaus: {
            basis: "Vacht of haren.",
            simpeler: "Zoogdieren hebben vacht of haren.",
            nogSimpeler: "vacht",
          },
        },
      },
      {
        q: "Wat betekent **warm bloed**?",
        options: [
          "Het lichaam blijft vanzelf warm",
          "Het lichaam wordt warm in de zon",
          "Het dier woont in warme landen",
          "Het bloed is heet als je het voelt",
        ],
        answer: 0,
        wrongHints: [null, null, "Ook een ijsbeer heeft warm bloed. Woont die in een warm land?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Warm bloed",
              tekst: "Bij warm bloed blijft het lichaam vanzelf warm, ook als het buiten koud is. Bij ons ongeveer 37 °C.",
            },
          ],
          woorden: [
            {
              woord: "warm bloed",
              uitleg: "Het lichaam houdt zichzelf vanzelf warm.",
            },
          ],
          theorie: "Zoogdieren en vogels hebben warm bloed.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "In de winter is het buiten koud, maar jouw lichaam blijft ongeveer 37 °C.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Bij ons",
              uitleg: "Jouw lichaam is ongeveer 37 °C, zomer en winter.",
            },
          ],
          niveaus: {
            basis: "Het lichaam blijft vanzelf warm.",
            simpeler: "Warm bloed: het lichaam blijft vanzelf warm, ook als het koud is.",
            nogSimpeler: "vanzelf warm",
          },
        },
      },
      {
        q: "Hoe komen de jongen van de meeste zoogdieren ter wereld?",
        options: [
          "Ze worden levend geboren",
          "Ze komen uit een ei in een nest",
          "Ze komen uit een ei in het water",
          "Ze komen uit een pop",
        ],
        answer: 0,
        wrongHints: [null, null, "Eieren in een nest horen bij vogels.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Levend baren",
              tekst: "Bij de meeste zoogdieren groeit het jong in de buik van de moeder. Dan wordt het levend geboren.",
            },
          ],
          woorden: [
            {
              woord: "levend baren",
              uitleg: "Een jong ter wereld brengen zonder ei.",
            },
          ],
          theorie: "Bijna alle zoogdieren baren levend. Het vogelbekdier is een uitzondering: dat legt eieren.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Een koe krijgt een kalf, een kat krijgt kittens.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Eieren",
              uitleg: "Vogels, vissen en reptielen leggen eieren.",
            },
          ],
          niveaus: {
            basis: "Ze worden levend geboren.",
            simpeler: "De meeste zoogdieren leggen geen eieren: de jongen worden levend geboren.",
            nogSimpeler: "levend geboren",
          },
        },
      },
      {
        q: "Een baby drinkt melk bij zijn moeder. Tot welke diergroep hoort de **mens**?",
        options: ["zoogdieren", "vogels", "reptielen", "vissen"],
        answer: 0,
        wrongHints: [null, "Hebben wij veren?", null, "Hebben wij kieuwen?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Mens = zoogdier",
              tekst: "Wij hebben haren, warm bloed, ademen met longen en een baby drinkt melk. Dus wij zijn zoogdieren.",
            },
          ],
          woorden: [
            {
              woord: "zoogdier",
              uitleg: "Dier met haren of vacht, warm bloed, en een moeder die melk geeft.",
            },
          ],
          theorie: "Zoogdieren is de groep waar wij ook bij horen.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Mens, hond, kat en koe zijn allemaal zoogdieren.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Zogen",
              uitleg: "Een moeder geeft haar baby melk: dat heet zogen.",
            },
          ],
          niveaus: {
            basis: "zoogdieren.",
            simpeler: "Wij mensen zijn zoogdieren.",
            nogSimpeler: "zoogdieren",
          },
        },
      },
      {
        q: "Een moederkoe geeft haar kalf melk. Hoe heet dat?",
        options: ["zogen", "broeden", "bestuiven", "jagen"],
        answer: 0,
        wrongHints: [null, "Broeden doet een vogel op haar ei.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Zogen",
              tekst: "Melk geven aan een jong heet zogen. Daar komt het woord zoogdier vandaan.",
            },
          ],
          woorden: [
            {
              woord: "zogen",
              uitleg: "Een moeder geeft melk aan haar jong.",
            },
          ],
          theorie: "Alle zoogdieren zogen hun jongen.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Koe met kalf, kat met kittens, walvis met jong.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Zoogdier",
              uitleg: "Zoog-dier: een dier dat zijn jongen zoogt.",
            },
          ],
          niveaus: {
            basis: "zogen.",
            simpeler: "Melk geven aan een jong heet zogen.",
            nogSimpeler: "zogen",
          },
        },
      },
    ],
  },
  {
    title: "Vogels",
    explanation: "**Vogels** kun je makkelijk herkennen:\n\n• **Veren** — alleen vogels hebben veren!\n• **Twee vleugels** (wel of niet kunnen vliegen).\n• **Snavel** in plaats van bek met tanden.\n• **Twee poten** met klauwen.\n• **Eieren leggen**.\n• **Warm bloed** (zoals zoogdieren).\n• **Ademen met longen**.\n\n**Voorbeelden**:\n• Klein: mus, mees, roodborstje, koolmees.\n• Groot: roofvogel (havik, buizerd), uil, kraai.\n• Watervogel: eend, gans, zwaan, reiger.\n• Vliegen niet: pinguïn, struisvogel, kiwi.\n\n**Wat eten vogels?**\nVerschilt per soort:\n• Zaadeters (mus): zaden uit planten.\n• Insecteters (mees): kleine insecten.\n• Vleeseters (havik): kleine dieren.\n• Aaseters (kraai): dode dieren.\n\n**Trekvogels**: vliegen 's winters naar warme landen (zwaluw, ooievaar). **Standvogels** blijven (mus, kraai).",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="40" width="260" height="50" rx="8" fill="${COLORS.vogel}" opacity="0.18" stroke="${COLORS.vogel}" stroke-width="2"/>
<text x="150" y="68" text-anchor="middle" fill="${COLORS.vogel}" font-size="14" font-family="Arial" font-weight="bold">VOGELS 🐦</text>
<text x="150" y="84" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">veren · 2 vleugels · snavel · eieren</text>
<text x="20" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">klein: mus, mees</text>
<text x="20" y="133" fill="${COLORS.text}" font-size="11" font-family="Arial">groot: havik, uil</text>
<text x="20" y="151" fill="${COLORS.text}" font-size="11" font-family="Arial">vliegt niet: pinguïn, struisvogel</text>
</svg>`,
    checks: [
      {
        q: "Wat hebben **alleen vogels**?",
        options: ["Veren", "Vleugels", "Eieren", "Snavel"],
        answer: 0,
        wrongHints: [null, "Vleermuizen + insecten hebben ook vleugels.", "Reptielen + vissen leggen ook eieren.", "Sommige inktvissen hebben ook een snavel-achtig iets."],
        uitlegPad: {
          stappen: [{ titel: "Veren = uniek", tekst: "ALLEEN vogels hebben veren. Andere dieren hebben haar/schubben/huid." }],
          woorden: [{ woord: "veren", uitleg: "Lichte structuren voor isolatie + vliegen. Alleen vogels." }],
          theorie: "Vogel-test: heeft het veren? → vogel. Geen andere groep heeft veren.",
          voorbeelden: [{ type: "feit", tekst: "Vleermuis (zoogdier) heeft vacht, geen veren. Insect heeft pantser." }],
          basiskennis: [{ onderwerp: "Andere kenmerken niet uniek", uitleg: "Vleugels: ook insecten/vleermuis. Eieren: ook vissen/reptielen. Snavel: ook inktvis." }],
          niveaus: { basis: "Veren.", simpeler: "Alleen vogels hebben veren (uniek!). Vleugels/eieren/snavel komen ook bij andere dieren voor.", nogSimpeler: "Veren" },
        },
      },
      {
        q: "Welke vogel kan **niet** vliegen?",
        options: ["pinguïn", "havik", "mus", "ooievaar"],
        answer: 0,
        wrongHints: [null, "Havik vliegt zeker.", "Mus vliegt.", "Ooievaar trekt — vliegt ver."],
        uitlegPad: {
          stappen: [{ titel: "Pinguïn = zwemt", tekst: "Pinguïn heeft vleugels die als 'flippers' werken — zwemmen, niet vliegen." }],
          woorden: [{ woord: "pinguïn", uitleg: "Vogel die niet vliegt. Leeft op het zuidelijk halfrond, zwemt heel goed." }],
          theorie: "Niet alle vogels vliegen: pinguïn, struisvogel, kiwi.",
          voorbeelden: [{ type: "feit", tekst: "Pinguïn-vleugels evolueerden tot flippers voor zwemmen." }],
          basiskennis: [{ onderwerp: "Wel vogel", uitleg: "Pinguïn heeft veren + snavel + legt eieren → echt vogel, ondanks niet-vliegen." }],
          niveaus: { basis: "pinguïn.", simpeler: "Pinguïn is vogel maar kan niet vliegen — gebruikt vleugels om te zwemmen.", nogSimpeler: "Pinguïn" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Hoeveel **poten** heeft een vogel?",
        options: ["2", "4", "6", "8"],
        answer: 0,
        wrongHints: [
          null,
          "Kijk eens naar een duif of een kip. Op hoeveel poten loopt die?",
          null,
          "Acht poten heeft een spin.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Twee poten",
              tekst: "Een vogel heeft twee poten met klauwen en twee vleugels.",
            },
          ],
          woorden: [
            {
              woord: "klauw",
              uitleg: "Poot met scherpe nagels.",
            },
          ],
          theorie: "Vogels: veren, twee vleugels, snavel, twee poten, eieren, warm bloed, longen.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Mus, eend, uil: allemaal twee poten.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Andere dieren",
              uitleg: "Een hond heeft 4 poten, een insect 6, een spin 8.",
            },
          ],
          niveaus: {
            basis: "2.",
            simpeler: "Een vogel heeft 2 poten.",
            nogSimpeler: "2",
          },
        },
      },
      {
        q: "Een vogel heeft geen bek met tanden. Wat heeft hij wel?",
        options: ["een snavel", "een slurf", "scherpe tanden", "vinnen"],
        answer: 0,
        wrongHints: [null, null, "De vraag zegt al: geen tanden.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Snavel",
              tekst: "Vogels hebben een snavel in plaats van een bek met tanden.",
            },
          ],
          woorden: [
            {
              woord: "snavel",
              uitleg: "De harde, puntige bek van een vogel.",
            },
          ],
          theorie: "Een snavel is een kenmerk van vogels.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Een eend heeft een platte snavel, een havik een kromme.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Slurf",
              uitleg: "Een olifant heeft een slurf. Dat is een zoogdier.",
            },
          ],
          niveaus: {
            basis: "een snavel.",
            simpeler: "Een vogel heeft een snavel.",
            nogSimpeler: "snavel",
          },
        },
      },
      {
        q: "Welke is een **watervogel**?",
        options: ["zwaan", "mus", "havik", "kraai"],
        answer: 0,
        wrongHints: [null, "Een mus zie je vaak in de tuin of op straat.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Zwaan = watervogel",
              tekst: "Een zwaan zwemt op het water, net als een eend, gans en reiger.",
            },
          ],
          woorden: [
            {
              woord: "watervogel",
              uitleg: "Een vogel die in of bij het water leeft.",
            },
          ],
          theorie: "Watervogels: eend, gans, zwaan, reiger.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Op een sloot zie je eenden en zwanen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Andere vogels",
              uitleg: "Havik = roofvogel. Mus = kleine vogel. Kraai = grote vogel.",
            },
          ],
          niveaus: {
            basis: "zwaan.",
            simpeler: "De zwaan is een watervogel.",
            nogSimpeler: "zwaan",
          },
        },
      },
      {
        q: "Hebben vogels **warm** of **koud** bloed?",
        options: [
          "Warm bloed, net als zoogdieren",
          "Koud bloed, net als vissen",
          "Koud bloed, net als reptielen",
          "Warm in de zomer, koud in de winter",
        ],
        answer: 0,
        wrongHints: [null, null, null, "Een mus blijft 's winters in Nederland. Moet hij dan warm blijven?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Warm bloed",
              tekst: "Vogels hebben warm bloed, net als zoogdieren. Hun lichaam blijft vanzelf warm.",
            },
          ],
          woorden: [
            {
              woord: "warm bloed",
              uitleg: "Het lichaam blijft vanzelf warm, ook als het koud is.",
            },
          ],
          theorie: "Warm bloed: zoogdieren en vogels. Koud bloed: vissen, reptielen, amfibieën.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Een mus blijft warm, ook op een koude winterdag.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Veren houden warm",
              uitleg: "Veren helpen de vogel om warm te blijven.",
            },
          ],
          niveaus: {
            basis: "Warm bloed.",
            simpeler: "Vogels hebben warm bloed, net als zoogdieren.",
            nogSimpeler: "warm",
          },
        },
      },
      {
        q: "Waarmee ademt een vogel?",
        options: ["met longen", "met kieuwen", "met zijn veren", "met zijn huid"],
        answer: 0,
        wrongHints: [null, "Kieuwen hebben vissen, om zuurstof uit water te halen.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Longen",
              tekst: "Vogels ademen met longen, net als wij.",
            },
          ],
          woorden: [
            {
              woord: "longen",
              uitleg: "Organen waarmee je lucht inademt.",
            },
          ],
          theorie: "Vogels: ademen met longen, warm bloed, eieren leggen.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Ook een eend die zwemt, ademt met longen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Kieuwen",
              uitleg: "Vissen halen zuurstof uit water met kieuwen.",
            },
          ],
          niveaus: {
            basis: "met longen.",
            simpeler: "Een vogel ademt met longen.",
            nogSimpeler: "longen",
          },
        },
      },
      {
        q: "Een havik vangt kleine dieren om op te eten. Wat voor eter is de havik?",
        options: ["vleeseter", "zaadeter", "insecteter", "aaseter"],
        answer: 0,
        wrongHints: [null, null, null, "Een aaseter eet dieren die al dood zijn. Vangt een aaseter zelf?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Vleeseter",
              tekst: "De havik is een roofvogel. Hij vangt kleine dieren: hij is een vleeseter.",
            },
          ],
          woorden: [
            {
              woord: "vleeseter",
              uitleg: "Dier dat andere dieren eet.",
            },
          ],
          theorie: "Zaadeter: mus. Insecteter: mees. Vleeseter: havik. Aaseter: kraai.",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "Een havik grijpt een muis met zijn klauwen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Roofvogels",
              uitleg: "Havik en buizerd zijn roofvogels.",
            },
          ],
          niveaus: {
            basis: "vleeseter.",
            simpeler: "De havik eet kleine dieren: hij is een vleeseter.",
            nogSimpeler: "vleeseter",
          },
        },
      },
    ],
  },
  {
    title: "Vissen, reptielen en amfibieën",
    vanafGroep: 6, // niveau-filter (audit natuur 8 okt 2026): lager dan deze groep slaat het kwartier deze stap over
    explanation: "**Vissen** 🐠:\n• Leven in water.\n• **Kieuwen** — om zuurstof uit water te halen.\n• **Schubben** op het lichaam.\n• **Vinnen** om te zwemmen.\n• **Koud bloed** — temperatuur volgt water.\n• Eieren leggen.\n• Voorbeelden: forel, baars, zalm, haring.\n\n**Reptielen** 🦎:\n• **Schubben** of harde huid.\n• **Koud bloed** — opwarmen in zon.\n• Meestal **eieren leggen** (op land, in zand).\n• Ademen met longen.\n• Voorbeelden: hagedis, slang, krokodil, schildpad.\n\n**Amfibieën** 🐸:\n• **Twee levens**: jong in water (kieuwen), volwassen op land (longen).\n• **Glibberige huid** — geen schubben.\n• **Koud bloed**.\n• **Eieren in water**.\n• Voorbeelden: kikker, salamander, pad.\n\n**Insecten** 🐞:\n• **6 poten** (precies — dat is dé manier om ze te herkennen).\n• Vaak vleugels (4 of 2).\n• Hard pantser (geen botten binnenin).\n• Voorbeelden: mier, vlinder, bij, kever.\n\n**Spinnen** zijn GEEN insecten — ze hebben **8 poten**.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="40" width="120" height="50" rx="6" fill="${COLORS.vis}" opacity="0.18"/>
<text x="80" y="62" text-anchor="middle" fill="${COLORS.vis}" font-size="11" font-family="Arial" font-weight="bold">VISSEN</text>
<text x="80" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">kieuwen · schubben</text>
<rect x="160" y="40" width="120" height="50" rx="6" fill="${COLORS.reptiel}" opacity="0.18"/>
<text x="220" y="62" text-anchor="middle" fill="${COLORS.reptiel}" font-size="11" font-family="Arial" font-weight="bold">REPTIELEN</text>
<text x="220" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">slang · hagedis</text>
<rect x="20" y="100" width="120" height="50" rx="6" fill="${COLORS.zoog}" opacity="0.18"/>
<text x="80" y="122" text-anchor="middle" fill="${COLORS.zoog}" font-size="11" font-family="Arial" font-weight="bold">AMFIBIEËN</text>
<text x="80" y="140" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">kikker · salamander</text>
<rect x="160" y="100" width="120" height="50" rx="6" fill="${COLORS.insect}" opacity="0.18"/>
<text x="220" y="122" text-anchor="middle" fill="${COLORS.insect}" font-size="11" font-family="Arial" font-weight="bold">INSECTEN</text>
<text x="220" y="140" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">6 poten · mier</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">spin = 8 poten = geen insect!</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel poten heeft een **insect**?",
        options: ["6", "4", "8", "10"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "8 = spin, geen insect!", "10 poten heeft een krab — geen insect."],
        uitlegPad: {
          stappen: [{ titel: "Insect = 6 poten", tekst: "Alle insecten hebben PRECIES 6 poten. Andere telling = geen insect." }],
          woorden: [{ woord: "insect", uitleg: "Dier met 6 poten + (vaak) vleugels + hard pantser." }],
          theorie: "6-poten-test: 6 = insect. 8 = spin. 10 = kreeftachtige.",
          voorbeelden: [{ type: "tabel", tekst: "Mier 6, vlinder 6, bij 6, kever 6. Spin 8 (geen insect). Krab 10." }],
          basiskennis: [{ onderwerp: "Snel-onderscheid", uitleg: "Tel poten — beste manier om insect te herkennen." }],
          niveaus: { basis: "6.", simpeler: "Insecten hebben ALTIJD 6 poten (mier, vlinder, bij). Spin=8 (geen insect).", nogSimpeler: "6" },
        },
      },
      {
        q: "Tot welke groep behoort een **kikker**?",
        options: ["amfibieën", "reptielen", "vissen", "zoogdieren"],
        answer: 0,
        wrongHints: [null, "Reptielen hebben schubben.", "Kikker leeft niet alleen in water (volwassen op land).", "Geen vacht of melk."],
        uitlegPad: {
          stappen: [{ titel: "Kikker = amfibie", tekst: "Kikker leeft eerst in water (kikkervisje), later op land. Glibberige huid. Amfibie!" }],
          woorden: [{ woord: "amfibie", uitleg: "'Twee levens' — water-fase + landfase. Glibberige huid." }],
          theorie: "Amfibie-kenmerken: 2 levens (water→land), glibberig, koud bloed, eieren in water.",
          voorbeelden: [{ type: "lijst", tekst: "Amfibieën: kikker, salamander, pad." }],
          basiskennis: [{ onderwerp: "Niet reptiel", uitleg: "Reptiel heeft schubben + droge huid. Amfibie glibberig." }],
          niveaus: { basis: "amfibieën.", simpeler: "Kikker leeft in water (jong) + op land (volwassen). Glibberige huid = amfibie.", nogSimpeler: "Amfibie" },
        },
      },
      {
        q: "Wat klopt over een **spin**?",
        options: ["Het is geen insect", "Het is een insect", "Het is een reptiel", "Het is een vogel"],
        answer: 0,
        wrongHints: [null, "Spinnen zijn aparte groep (spinachtigen).", "Spinnen hebben geen schubben.", "Spinnen hebben geen veren."],
        uitlegPad: {
          stappen: [{ titel: "Spin = 8 poten", tekst: "Spinnen hebben 8 poten — insecten 6. Spin = aparte groep (spinachtigen)." }],
          woorden: [{ woord: "spinachtigen", uitleg: "Aparte groep: spinnen, schorpioenen, mijten. 8 poten." }],
          theorie: "Veel mensen denken spin = insect. Fout! Spinnen vormen eigen groep.",
          voorbeelden: [{ type: "tel-test", tekst: "Tel poten: spin 8, mier 6 → andere groep." }],
          basiskennis: [{ onderwerp: "Geen vleugels", uitleg: "Spinnen kunnen niet vliegen — geen vleugels." }],
          niveaus: { basis: "Geen insect (8 poten).", simpeler: "Spin heeft 8 poten = NIET insect (=6 poten). Spin = aparte groep (spinachtigen).", nogSimpeler: "8 poten" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Waarmee haalt een vis **zuurstof** uit het water?",
        options: ["kieuwen", "longen", "vinnen", "schubben"],
        answer: 0,
        wrongHints: [
          null,
          "Longen hebben dieren die lucht ademen.",
          "Vinnen gebruikt een vis om te zwemmen.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Kieuwen",
              tekst: "Een vis heeft kieuwen. Daarmee haalt hij zuurstof uit het water.",
            },
          ],
          woorden: [
            {
              woord: "kieuwen",
              uitleg: "Delen aan de zijkant van de kop van een vis, om zuurstof uit water te halen.",
            },
          ],
          theorie: "Vissen: kieuwen, schubben, vinnen, koud bloed, eieren.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Bij een vis zie je de kieuwen achter zijn kop open en dicht gaan.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Vinnen en schubben",
              uitleg: "Vinnen zijn om te zwemmen, schubben bedekken het lichaam.",
            },
          ],
          niveaus: {
            basis: "kieuwen.",
            simpeler: "Een vis haalt zuurstof uit het water met kieuwen.",
            nogSimpeler: "kieuwen",
          },
        },
      },
      {
        q: "Welke is een **reptiel**?",
        options: ["hagedis", "salamander", "forel", "mier"],
        answer: 0,
        wrongHints: [
          null,
          null,
          "Een salamander heeft een glibberige huid zonder schubben. Bij welke groep past dat?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Hagedis = reptiel",
              tekst: "Een hagedis heeft schubben, koud bloed en ademt met longen. Het is een reptiel.",
            },
          ],
          woorden: [
            {
              woord: "reptiel",
              uitleg: "Dier met schubben of een harde huid en koud bloed, zoals slang en krokodil.",
            },
          ],
          theorie: "Reptielen: hagedis, slang, krokodil, schildpad. Amfibieën: kikker, salamander, pad.",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "Een hagedis ligt in de zon om op te warmen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Salamander",
              uitleg: "Een salamander lijkt op een hagedis, maar is een amfibie.",
            },
          ],
          niveaus: {
            basis: "hagedis.",
            simpeler: "De hagedis is een reptiel. De salamander is een amfibie.",
            nogSimpeler: "hagedis",
          },
        },
      },
      {
        q: "Welk dier heeft een **glibberige huid** zonder schubben?",
        options: ["salamander", "slang", "haring", "krokodil"],
        answer: 0,
        wrongHints: [null, null, "Een slang heeft schubben.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Glibberige huid = amfibie",
              tekst: "Amfibieën, zoals kikker en salamander, hebben een glibberige huid zonder schubben.",
            },
          ],
          woorden: [
            {
              woord: "amfibie",
              uitleg: "Dier dat jong in het water leeft en volwassen op het land, zoals de kikker.",
            },
          ],
          theorie: "Vissen en reptielen hebben schubben. Amfibieën niet.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Salamander, kikker en pad: glibberige huid.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Schubben",
              uitleg: "Haring (vis), slang en krokodil (reptielen) hebben schubben.",
            },
          ],
          niveaus: {
            basis: "salamander.",
            simpeler: "De salamander heeft een glibberige huid zonder schubben.",
            nogSimpeler: "salamander",
          },
        },
      },
      {
        q: "Waar leggen kikkers hun **eieren**?",
        options: ["in het water", "in het zand", "in een nest in een boom", "in een holletje onder de grond"],
        answer: 0,
        wrongHints: [null, null, "In het zand leggen veel reptielen hun eieren.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Eieren in water",
              tekst: "Kikkers zijn amfibieën. Ze leggen hun eieren in het water. Daar komen de kikkervisjes uit.",
            },
          ],
          woorden: [
            {
              woord: "kikkerdril",
              uitleg: "Een klomp kikkereitjes in het water.",
            },
          ],
          theorie: "Amfibieën leggen eieren in het water. Reptielen leggen meestal eieren op land.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "In de lente zie je kikkerdril in de sloot.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Twee levens",
              uitleg: "Een kikker leeft jong in het water en volwassen op het land.",
            },
          ],
          niveaus: {
            basis: "in het water.",
            simpeler: "Kikkers leggen hun eieren in het water.",
            nogSimpeler: "water",
          },
        },
      },
      {
        q: "Welke is een **insect**?",
        options: ["kever", "spin", "slak", "krab"],
        answer: 0,
        wrongHints: [null, null, "Tel de poten van een spin. Hoeveel zijn het?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Kever = insect",
              tekst: "Een kever heeft 6 poten en een hard pantser. Dus het is een insect.",
            },
          ],
          woorden: [
            {
              woord: "insect",
              uitleg: "Dier met precies 6 poten, zoals mier, vlinder, bij en kever.",
            },
          ],
          theorie: "Insecten herken je aan 6 poten. Spinnen hebben er 8.",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "Insect: kever, mier, bij. Geen insect: spin.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Spin",
              uitleg: "Een spin heeft 8 poten en is geen insect.",
            },
          ],
          niveaus: {
            basis: "kever.",
            simpeler: "De kever heeft 6 poten: het is een insect.",
            nogSimpeler: "kever",
          },
        },
      },
      {
        q: "Waarmee ademt een **volwassen** kikker?",
        options: ["met longen", "met kieuwen", "met vinnen", "met schubben"],
        answer: 0,
        wrongHints: [
          null,
          null,
          "Kieuwen heeft het kikkervisje in het water. En als de kikker volwassen is en op het land leeft?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Longen",
              tekst: "Een kikkervisje ademt met kieuwen. Een volwassen kikker leeft op het land en ademt met longen.",
            },
          ],
          woorden: [
            {
              woord: "amfibie",
              uitleg: "Dier met twee levens: jong in het water, volwassen op het land.",
            },
          ],
          theorie: "Amfibieën: jong met kieuwen, volwassen met longen.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Kikkervisje: kieuwen. Kikker: longen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Twee levens",
              uitleg: "Het woord amfibie hoort bij dieren die in water en op land leven.",
            },
          ],
          niveaus: {
            basis: "met longen.",
            simpeler: "Een volwassen kikker ademt met longen.",
            nogSimpeler: "longen",
          },
        },
      },
      {
        q: "Wat hebben vissen, reptielen en amfibieën **allemaal**?",
        options: ["koud bloed", "schubben", "kieuwen", "vinnen"],
        answer: 0,
        wrongHints: [
          null,
          null,
          "Een kikker heeft een glibberige huid. Heeft hij schubben?",
          "Een hagedis ademt met longen. Heeft hij kieuwen?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Koud bloed",
              tekst: "Vissen, reptielen en amfibieën hebben alle drie koud bloed. Hun temperatuur volgt de omgeving.",
            },
          ],
          woorden: [
            {
              woord: "koud bloed",
              uitleg: "De temperatuur van het lichaam volgt de omgeving, zoals het water of de zon.",
            },
          ],
          theorie: "Koud bloed: vissen, reptielen, amfibieën. Warm bloed: zoogdieren en vogels.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Een hagedis warmt op in de zon.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Schubben",
              uitleg: "Vissen en reptielen hebben schubben, amfibieën niet.",
            },
          ],
          niveaus: {
            basis: "koud bloed.",
            simpeler: "Vissen, reptielen en amfibieën hebben allemaal koud bloed.",
            nogSimpeler: "koud bloed",
          },
        },
      },
    ],
  },
  {
    title: "Andere diergroepen",
    vanafGroep: 6, // niveau-filter (audit natuur 8 okt 2026): lager dan deze groep slaat het kwartier deze stap over
    explanation: "Naast deze groepen zijn er nog andere:\n\n**Weekdieren** 🐌:\n• Zacht lichaam, vaak in een schelp.\n• Voorbeelden: slak, mossel, octopus, inktvis.\n\n**Schaaldieren** 🦀:\n• Pantser om lichaam.\n• Veel poten.\n• Vaak in water.\n• Voorbeelden: krab, kreeft, garnaal.\n\n**Wormen** 🪱:\n• Lang, geen poten.\n• Voorbeelden: regenworm, lintworm.\n\n**Stekelhuidigen** ⭐:\n• In zee, sterachtig.\n• Voorbeelden: zeester, zee-egel.\n\nDeze groepen zien er anders uit, maar zijn ook 'dieren'.\n\n**Even bedenken**: alle dieren zijn:\n• Levend (eten, ademen, groeien...).\n• Niet planten (kunnen geen fotosynthese).\n• Niet schimmels.\n\nDe diversiteit is enorm. Op aarde leven naar schatting **8 miljoen** verschillende diersoorten — de meeste zijn insecten.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">andere diergroepen</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">🐌 weekdieren — slak, mossel</text>
<text x="20" y="75" fill="${COLORS.text}" font-size="11" font-family="Arial">🦀 schaaldieren — krab, kreeft</text>
<text x="20" y="95" fill="${COLORS.text}" font-size="11" font-family="Arial">🪱 wormen — regenworm</text>
<text x="20" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">⭐ zeesterren — stekelhuidigen</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">~8 miljoen diersoorten op aarde</text>
</svg>`,
    checks: [
      {
        q: "Wat is een **slak**?",
        options: ["Weekdier", "Schaaldier", "Insect", "Reptiel"],
        answer: 0,
        wrongHints: [null, "Geen pantser.", "Geen 6 poten.", "Geen schubben."],
        uitlegPad: {
          stappen: [{ titel: "Zacht + schelp", tekst: "Slak heeft zacht lichaam + schelp = weekdier." }],
          woorden: [{ woord: "weekdier", uitleg: "Zacht lichaam, vaak met schelp. Slak, mossel, octopus, inktvis." }],
          theorie: "Weekdieren: zacht lichaam (geen pantser/skelet). Vaak schelp eromheen.",
          voorbeelden: [{ type: "lijst", tekst: "Weekdieren: slak, mossel, oester, octopus, inktvis." }],
          basiskennis: [{ onderwerp: "Niet schaaldier", uitleg: "Schaaldieren (krab) hebben pantser, geen schelp." }],
          niveaus: { basis: "Weekdier.", simpeler: "Slak = zacht lichaam + schelp = weekdier. (Krab=pantser=schaaldier.)", nogSimpeler: "Weekdier" },
        },
      },
      {
        q: "Tot welke groep hoort een **krab**?",
        options: ["Schaaldieren", "Weekdieren", "Vissen", "Zoogdieren"],
        answer: 0,
        wrongHints: [null, "Geen schelp zoals een slak (weekdier).", "Geen schubben en vinnen zoals een vis.", "Geen vacht zoals een zoogdier."],
        uitlegPad: {
          stappen: [{ titel: "Pantser = schaaldier", tekst: "Krab heeft hard pantser + veel poten = schaaldier." }],
          woorden: [{ woord: "schaaldier", uitleg: "Pantser, veel poten, vaak in water. Krab, kreeft, garnaal." }],
          theorie: "Schaaldieren: hard pantser om lichaam, veel poten, meestal water-bewoners.",
          voorbeelden: [{ type: "lijst", tekst: "Schaaldieren: krab, kreeft, garnaal, langoest." }],
          basiskennis: [{ onderwerp: "Schelp vs pantser", uitleg: "Schelp (huisje om in weg te kruipen): slak. Pantser (hard omhulsel om het lichaam): krab." }],
          niveaus: { basis: "Schaaldier.", simpeler: "Krab heeft pantser + veel poten = schaaldier. (Slak=schelp=weekdier.)", nogSimpeler: "Schaaldier" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Tot welke groep hoort een **zeester**?",
        options: ["stekelhuidigen", "weekdieren", "vissen", "schaaldieren"],
        answer: 0,
        wrongHints: [null, null, "Weekdieren hebben een zacht lichaam, vaak in een schelp.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Zeester = stekelhuidige",
              tekst: "Een zeester leeft in zee en heeft de vorm van een ster. Hij hoort bij de stekelhuidigen.",
            },
          ],
          woorden: [
            {
              woord: "stekelhuidigen",
              uitleg: "Dieren in zee, vaak sterachtig, zoals zeester en zee-egel.",
            },
          ],
          theorie: "Andere diergroepen: weekdieren, schaaldieren, wormen, stekelhuidigen.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Stekelhuidigen: zeester, zee-egel.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Geen vis",
              uitleg: "Een zeester heeft geen vinnen en geen kieuwen zoals een vis.",
            },
          ],
          niveaus: {
            basis: "stekelhuidigen.",
            simpeler: "De zeester hoort bij de stekelhuidigen.",
            nogSimpeler: "stekelhuidigen",
          },
        },
      },
      {
        q: "Welke is een **weekdier**?",
        options: ["mossel", "garnaal", "zee-egel", "regenworm"],
        answer: 0,
        wrongHints: [null, null, "Een garnaal heeft een pantser en veel poten.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Mossel = weekdier",
              tekst: "Een mossel heeft een zacht lichaam in een schelp. Het is een weekdier.",
            },
          ],
          woorden: [
            {
              woord: "weekdier",
              uitleg: "Dier met een zacht lichaam, vaak in een schelp.",
            },
          ],
          theorie: "Weekdieren: slak, mossel, octopus, inktvis.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Mossel en slak: zacht lichaam met een schelp of huisje.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Schaaldieren",
              uitleg: "Krab, kreeft en garnaal hebben een pantser.",
            },
          ],
          niveaus: {
            basis: "mossel.",
            simpeler: "De mossel is een weekdier.",
            nogSimpeler: "mossel",
          },
        },
      },
      {
        q: "Hoe herken je een **worm**?",
        options: [
          "Lang lichaam zonder poten",
          "Pantser met veel poten",
          "Zacht lichaam in een schelp",
          "Stekels op de huid",
        ],
        answer: 0,
        wrongHints: [null, null, "Een pantser met veel poten heeft een krab.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Worm",
              tekst: "Een worm is lang en heeft geen poten, zoals de regenworm.",
            },
          ],
          woorden: [
            {
              woord: "worm",
              uitleg: "Lang dier zonder poten.",
            },
          ],
          theorie: "Wormen: lang, geen poten. Voorbeelden: regenworm, lintworm.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Na een regenbui zie je regenwormen op straat.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Andere groepen",
              uitleg: "Krab = pantser. Slak = schelp. Zeester = stekelhuidige.",
            },
          ],
          niveaus: {
            basis: "Lang lichaam zonder poten.",
            simpeler: "Een worm is lang en heeft geen poten.",
            nogSimpeler: "geen poten",
          },
        },
      },
      {
        q: "Tot welke groep hoort een **octopus**?",
        options: ["weekdieren", "vissen", "schaaldieren", "stekelhuidigen"],
        answer: 0,
        wrongHints: [
          null,
          null,
          "Een octopus leeft in zee, maar heeft hij schubben en vinnen?",
          "Heeft een octopus een hard pantser?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Octopus = weekdier",
              tekst: "Een octopus heeft een zacht lichaam. Hij is een weekdier, net als de inktvis.",
            },
          ],
          woorden: [
            {
              woord: "weekdier",
              uitleg: "Dier met een zacht lichaam, vaak in een schelp.",
            },
          ],
          theorie: "Niet elk weekdier heeft een schelp. De octopus heeft er geen.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Weekdieren: slak, mossel, octopus, inktvis.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Zacht lichaam",
              uitleg: "Weekdier: het lichaam is week, dat betekent zacht.",
            },
          ],
          niveaus: {
            basis: "weekdieren.",
            simpeler: "De octopus is een weekdier.",
            nogSimpeler: "weekdier",
          },
        },
      },
      {
        q: "Welke is een **schaaldier**?",
        options: ["garnaal", "inktvis", "zeester", "regenworm"],
        answer: 0,
        wrongHints: [null, null, "Een inktvis heeft een zacht lichaam.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Garnaal = schaaldier",
              tekst: "Een garnaal heeft een pantser om zijn lichaam en veel poten. Het is een schaaldier.",
            },
          ],
          woorden: [
            {
              woord: "schaaldier",
              uitleg: "Dier met een pantser om het lichaam en veel poten, vaak in water.",
            },
          ],
          theorie: "Schaaldieren: krab, kreeft, garnaal.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Garnaal, krab en kreeft: pantser en veel poten.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Weekdieren",
              uitleg: "Inktvis en slak hebben een zacht lichaam.",
            },
          ],
          niveaus: {
            basis: "garnaal.",
            simpeler: "De garnaal is een schaaldier.",
            nogSimpeler: "garnaal",
          },
        },
      },
      {
        q: "Wat hebben **schaaldieren** om hun lichaam?",
        options: ["een pantser", "een vacht", "veren", "een glibberige huid"],
        answer: 0,
        wrongHints: [null, null, "Een vacht hebben zoogdieren.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Pantser",
              tekst: "Schaaldieren, zoals krab en kreeft, hebben een hard pantser om hun lichaam.",
            },
          ],
          woorden: [
            {
              woord: "pantser",
              uitleg: "Harde laag die het lichaam beschermt.",
            },
          ],
          theorie: "Schaaldieren: pantser, veel poten, vaak in water.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Een krab heeft een hard pantser.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Glibberige huid",
              uitleg: "Een glibberige huid hebben amfibieën, zoals de kikker.",
            },
          ],
          niveaus: {
            basis: "een pantser.",
            simpeler: "Schaaldieren hebben een pantser.",
            nogSimpeler: "pantser",
          },
        },
      },
      {
        q: "Van welke groep dieren zijn er de **meeste** soorten?",
        options: ["insecten", "zoogdieren", "vogels", "vissen"],
        answer: 0,
        wrongHints: [null, null, "Er zijn veel soorten zoogdieren, maar zijn het er het meest?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Insecten",
              tekst: "Op aarde leven heel veel soorten dieren. De meeste daarvan zijn insecten.",
            },
          ],
          woorden: [
            {
              woord: "soort",
              uitleg: "Een groep dieren die op elkaar lijken, zoals de koolmees of de egel.",
            },
          ],
          theorie: "Er zijn naar schatting 8 miljoen diersoorten. De meeste zijn insecten.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Er zijn veel meer soorten kevers dan soorten zoogdieren.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Insecten",
              uitleg: "Insecten herken je aan 6 poten.",
            },
          ],
          niveaus: {
            basis: "insecten.",
            simpeler: "Van de insecten zijn er de meeste soorten.",
            nogSimpeler: "insecten",
          },
        },
      },
    ],
  },

  // C
  {
    title: "Levensstadia — van baby tot volwassen",
    explanation: "Dieren beginnen hun leven anders. Een paar belangrijke voorbeelden:\n\n**Mensen + zoogdieren** (levend baren):\n• baby → peuter → kind → tiener → volwassen.\n\n**Vogels**:\n• ei → kuiken → jonge vogel → volwassen.\n• Een **moedervogel broedt** op het ei (warm houden) tot het uitkomt.\n\n**Vissen**:\n• ei → larve → volwassen vis.\n\n**Amfibieën** (kikker als voorbeeld):\n• ei → **kikkervisje** (in water, met staart) → kikker met poten → volwassen kikker.\n• Dit heet **gedaanteverwisseling** (metamorfose): het dier verandert van vorm.\n\n**Insecten** (vlinder als voorbeeld):\n• ei → **rups** → **pop** → volwassen vlinder.\n• Ook gedaanteverwisseling — heel beroemd.\n\n**Veel dieren bij geboorte**:\n• **Nestblijvers** (jonge merel of mus, mensenbaby): kunnen nog niets, de ouders zorgen voor alles.\n• **Nestvlieders** (kuiken van kip of eend): kunnen meteen lopen.\n\n**Paartijd**: dieren willen zich voortplanten. Vogels zingen, herten vechten, kikkers kwaken — allemaal om een partner te vinden.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">levensstadia</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">vogel: ei → kuiken → volwassen</text>
<text x="20" y="75" fill="${COLORS.text}" font-size="11" font-family="Arial">kikker: ei → kikkervisje → kikker</text>
<text x="20" y="95" fill="${COLORS.text}" font-size="11" font-family="Arial">vlinder: ei → rups → pop → vlinder</text>
<text x="20" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">mens: baby → kind → tiener → volwassen</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">gedaanteverwisseling: van vorm veranderen</text>
<text x="150" y="175" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">kikker + vlinder doen dat</text>
</svg>`,
    checks: [
      {
        q: "Welk **stadium** komt tussen rups en vlinder?",
        options: ["pop", "ei", "kuiken", "kikkervisje"],
        answer: 0,
        wrongHints: [null, "Het ei komt vóór de rups.", "Een kuiken komt uit een vogelei.", "Een kikkervisje wordt een kikker."],
        uitlegPad: {
          stappen: [{ titel: "Ei → rups → pop → vlinder", tekst: "Een vlinder groeit op in 4 stadia. Tussen rups en vlinder zit het popstadium." }],
          woorden: [{ woord: "pop", uitleg: "Het stadium waarin de rups stil hangt en van binnen verandert in een vlinder." }],
          theorie: "Vlinder: ei → rups → pop → vlinder. In de pop verandert de rups helemaal van vorm.",
          voorbeelden: [{ type: "stap", tekst: "Vlinder legt een ei → er komt een rups uit → de rups eet veel → hij verpopt zich → er komt een vlinder uit de pop." }],
          basiskennis: [{ onderwerp: "Pop of cocon?", uitleg: "Bij de meeste vlinders hangt de pop vrij aan een takje of blad. Alleen sommige nachtvlinders, zoals de zijderups, spinnen er een cocon van draad omheen." }],
          niveaus: { basis: "pop.", simpeler: "Volgorde: ei → rups → POP → vlinder. In de pop verandert de rups in een vlinder.", nogSimpeler: "Pop" },
        },
      },
      {
        q: "Wat betekent **gedaanteverwisseling**?",
        options: [
          "Een dier dat tijdens zijn leven van vorm verandert",
          "Een dier dat oud wordt",
          "Een dier dat van kleur verandert",
          "Een dier dat verhuist",
        ],
        answer: 0,
        wrongHints: [null, "Oud worden hoort er niet bij.", "Kleur is iets anders.", "Verhuizen is geen gedaanteverwisseling."],
        uitlegPad: {
          stappen: [{ titel: "Vorm-verandering", tekst: "Gedaante = vorm. Verwisseling = veranderen. Dier verandert volledig van vorm." }],
          woorden: [{ woord: "metamorfose", uitleg: "Wetenschappelijke naam voor gedaanteverwisseling." }],
          theorie: "Bekende voorbeelden: rups → vlinder. Kikkervisje → kikker. Volledig andere vorm.",
          voorbeelden: [{ type: "tabel", tekst: "Vlinder en kikker zijn beroemd om hun metamorfose." }],
          basiskennis: [{ onderwerp: "Niet kleur", uitleg: "Kleurverandering = camouflage, niet gedaanteverwisseling." }],
          niveaus: { basis: "Van vorm veranderen.", simpeler: "Gedaanteverwisseling = dier verandert tijdens leven van vorm (rups→vlinder, kikkervisje→kikker).", nogSimpeler: "Vorm" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat is de goede volgorde bij een **kikker**?",
        options: [
          "ei → kikkervisje → kikker met poten → volwassen kikker",
          "kikkervisje → ei → kikker met poten → volwassen kikker",
          "ei → kikker met poten → kikkervisje → volwassen kikker",
          "ei → rups → kikkervisje → volwassen kikker",
        ],
        answer: 0,
        wrongHints: [null, null, "Waar komt een kikkervisje uit?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Kikker: vier stappen",
              tekst: "Uit het ei komt een kikkervisje met een staart. Dat krijgt poten en wordt een kikker.",
            },
          ],
          woorden: [
            {
              woord: "kikkervisje",
              uitleg: "Een jonge kikker die in het water zwemt, met een staart.",
            },
          ],
          theorie: "Een kikker verandert van vorm tijdens zijn leven. Dat heet gedaanteverwisseling.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "ei → kikkervisje → kikker met poten → volwassen kikker.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Rups",
              uitleg: "Een rups hoort bij de vlinder, niet bij de kikker.",
            },
          ],
          niveaus: {
            basis: "ei → kikkervisje → kikker met poten → volwassen kikker.",
            simpeler: "Eerst het ei, dan het kikkervisje, dan de kikker met poten.",
            nogSimpeler: "ei, kikkervisje, kikker",
          },
        },
      },
      {
        q: "Wat doet een moedervogel als ze **broedt**?",
        options: [
          "Ze houdt het ei warm",
          "Ze zoekt eten voor de jongen",
          "Ze leert de jongen vliegen",
          "Ze vliegt naar een warm land",
        ],
        answer: 0,
        wrongHints: [null, null, null, "Leren vliegen kan pas als het jong al uit het ei is."],
        uitlegPad: {
          stappen: [
            {
              titel: "Broeden",
              tekst: "De moedervogel zit op het ei om het warm te houden. Zo kan het kuiken groeien tot het uitkomt.",
            },
          ],
          woorden: [
            {
              woord: "broeden",
              uitleg: "Op een ei zitten om het warm te houden.",
            },
          ],
          theorie: "Vogels: ei → kuiken → jonge vogel → volwassen.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Een kip zit op haar eieren tot de kuikens uitkomen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Uitkomen",
              uitleg: "Het kuiken pikt het ei open en komt eruit.",
            },
          ],
          niveaus: {
            basis: "Ze houdt het ei warm.",
            simpeler: "Broeden is op het ei zitten om het warm te houden.",
            nogSimpeler: "ei warm",
          },
        },
      },
      {
        q: "Een eendenkuiken kan meteen na het uitkomen lopen. Hoe heet zo'n jong?",
        options: ["nestvlieder", "nestblijver", "trekvogel", "standvogel"],
        answer: 0,
        wrongHints: [null, null, "Een nestblijver kan nog niets. Kan dit kuiken al iets?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Nestvlieder",
              tekst: "Een jong dat meteen kan lopen, heet een nestvlieder. Het kuiken van een kip of eend is er een.",
            },
          ],
          woorden: [
            {
              woord: "nestvlieder",
              uitleg: "Een jong dat meteen na de geboorte kan lopen.",
            },
          ],
          theorie: "Nestblijvers kunnen nog niets en de ouders zorgen voor alles. Nestvlieders kunnen meteen lopen.",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "Nestvlieder: kuiken van kip of eend. Nestblijver: jonge merel, mensenbaby.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Trek- en standvogels",
              uitleg: "Die woorden gaan over waar een vogel 's winters is, niet over jongen.",
            },
          ],
          niveaus: {
            basis: "nestvlieder.",
            simpeler: "Een jong dat meteen kan lopen, is een nestvlieder.",
            nogSimpeler: "nestvlieder",
          },
        },
      },
      {
        q: "Welk dier maakt een **gedaanteverwisseling** door?",
        options: ["vlinder", "hond", "mus", "koe"],
        answer: 0,
        wrongHints: [null, "Een puppy lijkt al op een grote hond. Verandert hij van vorm?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Vlinder",
              tekst: "Een vlinder begint als rups en wordt dan een pop. Daarna komt de vlinder eruit. Hij verandert helemaal van vorm.",
            },
          ],
          woorden: [
            {
              woord: "gedaanteverwisseling",
              uitleg: "Een dier verandert tijdens zijn leven van vorm.",
            },
          ],
          theorie: "Gedaanteverwisseling zie je bij de vlinder en bij de kikker.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Vlinder: ei → rups → pop → vlinder.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Hond, mus, koe",
              uitleg: "Een jong van deze dieren lijkt al op de ouders. Het wordt alleen groter.",
            },
          ],
          niveaus: {
            basis: "vlinder.",
            simpeler: "De vlinder verandert van vorm: rups, pop, vlinder.",
            nogSimpeler: "vlinder",
          },
        },
      },
      {
        q: "Hoe begint een **vogel** zijn leven?",
        options: ["als ei", "als rups", "als kikkervisje", "als pop"],
        answer: 0,
        wrongHints: [null, null, "Een rups wordt later een vlinder.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Ei",
              tekst: "Een vogel komt uit een ei. Daaruit komt een kuiken.",
            },
          ],
          woorden: [
            {
              woord: "kuiken",
              uitleg: "Een jonge vogel die net uit het ei komt.",
            },
          ],
          theorie: "Vogels: ei → kuiken → jonge vogel → volwassen.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Een merel legt eieren in haar nest.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Eieren leggen",
              uitleg: "Alle vogels leggen eieren.",
            },
          ],
          niveaus: {
            basis: "als ei.",
            simpeler: "Een vogel begint zijn leven als ei.",
            nogSimpeler: "ei",
          },
        },
      },
      {
        q: "Waarom zingen veel vogels in de **paartijd**?",
        options: [
          "Om een partner te vinden",
          "Om warm te blijven",
          "Om eten te vinden",
          "Om hun jongen te laten slapen",
        ],
        answer: 0,
        wrongHints: [null, null, "Om warm te blijven heeft een vogel zijn veren.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Paartijd",
              tekst: "In de paartijd willen dieren zich voortplanten. Vogels zingen om een partner te vinden.",
            },
          ],
          woorden: [
            {
              woord: "paartijd",
              uitleg: "De tijd waarin dieren een partner zoeken om jongen te krijgen.",
            },
          ],
          theorie: "Vogels zingen, herten vechten, kikkers kwaken: allemaal om een partner te vinden.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "In de lente hoor je 's ochtends veel vogels zingen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Voortplanten",
              uitleg: "Voortplanten is nieuwe wezens maken, zoals jongen.",
            },
          ],
          niveaus: {
            basis: "Om een partner te vinden.",
            simpeler: "Vogels zingen in de paartijd om een partner te vinden.",
            nogSimpeler: "partner",
          },
        },
      },
      {
        q: "Welke fase komt bij mensen direct na **baby**?",
        options: ["peuter", "kind", "tiener", "volwassene"],
        answer: 0,
        wrongHints: [null, null, "Een kind gaat al naar de basisschool. Is dat direct na baby?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Baby → peuter",
              tekst: "Bij mensen gaat het zo: baby → peuter → kind → tiener → volwassen.",
            },
          ],
          woorden: [
            {
              woord: "peuter",
              uitleg: "Een klein kind dat net kan lopen en praten, zo tussen 1 en 4 jaar.",
            },
          ],
          theorie: "Mensen en zoogdieren worden levend geboren.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "baby → peuter → kind → tiener → volwassen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Tiener",
              uitleg: "Een tiener is ongeveer 13 tot 19 jaar.",
            },
          ],
          niveaus: {
            basis: "peuter.",
            simpeler: "Na baby komt peuter.",
            nogSimpeler: "peuter",
          },
        },
      },
    ],
  },

  // D
  {
    title: "Lente en zomer",
    explanation: "Nederland heeft **vier seizoenen** door de stand van de aarde rond de zon.\n\n**LENTE 🌷** (maart, april, mei):\n• Het wordt warmer.\n• **Bomen** krijgen blaadjes.\n• Bloemen bloeien (tulpen, narcissen, paardenbloemen).\n• Vogels maken **nesten** en leggen **eieren**.\n• Veel **jonge dieren** worden geboren (lammetjes, kuikens, hazen).\n• Trekvogels keren **terug** uit warme landen.\n\n**ZOMER ☀️** (juni, juli, augustus):\n• Heet, lange dagen, korte nachten.\n• Bomen vol bladeren, alles groeit.\n• Veel **insecten** (vlinders, bijen, libellen).\n• Vogels leren hun jongen vliegen.\n• Boeren maken **hooi** voor de winter.\n• Mensen op vakantie.\n\n**Waarom verschillen seizoenen?**\nDe aarde staat **schuin** op zijn as. Wanneer onze kant naar de zon gewend is → zomer (= meer zonkracht, langere dagen). Wanneer afgewend → winter.\n\nOp de **evenaar** zijn er nauwelijks seizoenen. Bij de **polen** is het 6 maanden licht, dan 6 maanden donker.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="40" width="120" height="120" rx="10" fill="${COLORS.lente}" opacity="0.30" stroke="${COLORS.lente}" stroke-width="2"/>
<text x="80" y="62" text-anchor="middle" fill="#1b5e20" font-size="13" font-family="Arial" font-weight="bold">LENTE 🌷</text>
<text x="80" y="85" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">bloemen</text>
<text x="80" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">jonge dieren</text>
<text x="80" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">trekvogels terug</text>
<text x="80" y="140" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">mrt-apr-mei</text>
<rect x="160" y="40" width="120" height="120" rx="10" fill="${COLORS.zomer}" opacity="0.30" stroke="${COLORS.zomer}" stroke-width="2"/>
<text x="220" y="62" text-anchor="middle" fill="#bf360c" font-size="13" font-family="Arial" font-weight="bold">ZOMER ☀️</text>
<text x="220" y="85" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">heet, lang licht</text>
<text x="220" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">veel insecten</text>
<text x="220" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">groen overal</text>
<text x="220" y="140" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">jun-jul-aug</text>
</svg>`,
    checks: [
      {
        q: "Wat gebeurt vooral in de **lente**?",
        options: ["Veel jonge dieren geboren", "Bladeren vallen", "Sneeuw", "Lange koude nachten"],
        answer: 0,
        wrongHints: [null, "Bladeren vallen = herfst.", "Sneeuw = winter.", "Lange koude nachten = winter."],
        uitlegPad: {
          stappen: [{ titel: "Lente = nieuw leven", tekst: "Lente: warmer + bloemen + jonge dieren (lammetjes, kuikens, hazen)." }],
          woorden: [{ woord: "lente", uitleg: "Maart-april-mei. Periode van ontwaken na winter." }],
          theorie: "Seizoen-toewijzing: lente=geboorte, zomer=groei, herfst=oogst/voorraad, winter=rust.",
          voorbeelden: [{ type: "tabel", tekst: "Lente: lammetjes, kuikens, paardenbloemen, trekvogels terug." }],
          basiskennis: [{ onderwerp: "Niet andere seizoenen", uitleg: "Bladval=herfst, sneeuw/koude nachten=winter." }],
          niveaus: { basis: "Jonge dieren.", simpeler: "Lente = jonge dieren geboren (lammetjes, kuikens) + bloemen bloeien.", nogSimpeler: "Jong" },
        },
      },
      {
        vanafGroep: 7, // schuine aardas = groep-7/8-stof
        q: "Waarom is het in de zomer warmer?",
        options: [
          "Onze kant van de aarde staat naar de zon",
          "De zon is dichterbij",
          "Er zijn meer wolken",
          "We staan stil",
        ],
        answer: 0,
        wrongHints: [null, "Afstand tot zon wisselt nauwelijks.", "Wolken maken het juist koeler.", "Aarde draait altijd."],
        uitlegPad: {
          stappen: [{ titel: "Schuine as", tekst: "Aarde staat schuin op zijn as. Zomer = onze kant naar zon = meer zonkracht." }],
          woorden: [{ woord: "as-helling", uitleg: "Aarde-as staat 23,5° schuin. Daarom seizoenen op gematigde breedtes." }],
          theorie: "Seizoenen NIET door afstand zon, MAAR door schuinte. Ons halfrond meer/minder naar zon gericht.",
          voorbeelden: [{ type: "feit", tekst: "Wanneer NL zomer heeft, heeft Australië winter (andere kant)." }],
          basiskennis: [{ onderwerp: "Niet afstand", uitleg: "Aarde is in juli juist verst van zon — toch zomer NL." }],
          niveaus: { basis: "Onze kant naar zon.", simpeler: "Zomer = onze kant van aarde naar zon gedraaid → meer zonkracht → warmer.", nogSimpeler: "Naar zon" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welke maanden horen bij de **lente**?",
        options: [
          "maart, april, mei",
          "juni, juli, augustus",
          "september, oktober, november",
          "december, januari, februari",
        ],
        answer: 0,
        wrongHints: [null, null, "In juli en augustus zijn de zomervakanties. Welk seizoen is dat?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Lente",
              tekst: "De lente is in maart, april en mei. Het wordt warmer en bomen krijgen blaadjes.",
            },
          ],
          woorden: [
            {
              woord: "lente",
              uitleg: "Het seizoen na de winter. Ook voorjaar genoemd.",
            },
          ],
          theorie: "Lente: maart, april, mei. Zomer: juni, juli, augustus. Herfst: september, oktober, november. Winter: december, januari, februari.",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "In april bloeien de tulpen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Vier seizoenen",
              uitleg: "Nederland heeft vier seizoenen: lente, zomer, herfst, winter.",
            },
          ],
          niveaus: {
            basis: "maart, april, mei.",
            simpeler: "De lente is maart, april en mei.",
            nogSimpeler: "maart, april, mei",
          },
        },
      },
      {
        q: "In welk seizoen valt de maand **juli**?",
        options: ["zomer", "lente", "herfst", "winter"],
        answer: 0,
        wrongHints: [null, null, "De lente is maart, april en mei. Hoort juli daarbij?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Juli = zomer",
              tekst: "De zomer is juni, juli en augustus.",
            },
          ],
          woorden: [
            {
              woord: "zomer",
              uitleg: "Het warmste seizoen, met lange dagen.",
            },
          ],
          theorie: "Zomer: juni, juli, augustus.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "In juli is het vaak warm en hebben veel mensen vakantie.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Vier seizoenen",
              uitleg: "Elk seizoen heeft drie maanden.",
            },
          ],
          niveaus: {
            basis: "zomer.",
            simpeler: "Juli hoort bij de zomer.",
            nogSimpeler: "zomer",
          },
        },
      },
      {
        q: "Wat doen **trekvogels** in de lente?",
        options: [
          "Ze komen terug uit warme landen",
          "Ze vliegen naar warme landen",
          "Ze houden winterslaap",
          "Ze krijgen een witte vacht",
        ],
        answer: 0,
        wrongHints: [null, null, "Wegvliegen naar warme landen doen ze in de herfst.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Terugkomen",
              tekst: "In de herfst vliegen trekvogels naar warme landen. In de lente komen ze terug.",
            },
          ],
          woorden: [
            {
              woord: "trekvogel",
              uitleg: "Vogel die 's winters naar een warm land vliegt, zoals de zwaluw en de ooievaar.",
            },
          ],
          theorie: "Lente: trekvogels keren terug uit warme landen.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "In de lente zie je de zwaluwen weer.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Standvogels",
              uitleg: "Standvogels, zoals de mus, blijven het hele jaar hier.",
            },
          ],
          niveaus: {
            basis: "Ze komen terug uit warme landen.",
            simpeler: "In de lente komen trekvogels terug.",
            nogSimpeler: "terugkomen",
          },
        },
      },
      {
        q: "Wat maken boeren in de zomer, zodat hun dieren in de winter te eten hebben?",
        options: ["hooi", "nesten", "bloemen", "honing"],
        answer: 0,
        wrongHints: [null, null, "Nesten maken vogels.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Hooi",
              tekst: "In de zomer maaien boeren gras en laten het drogen. Dat is hooi. De dieren eten het in de winter.",
            },
          ],
          woorden: [
            {
              woord: "hooi",
              uitleg: "Gedroogd gras.",
            },
          ],
          theorie: "Zomer: alles groeit, boeren maken hooi voor de winter.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Koeien en paarden eten in de winter hooi.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Waarom in de zomer",
              uitleg: "In de zomer groeit het gras goed.",
            },
          ],
          niveaus: {
            basis: "hooi.",
            simpeler: "Boeren maken in de zomer hooi.",
            nogSimpeler: "hooi",
          },
        },
      },
      {
        q: "In welk seizoen zie je de **meeste insecten**, zoals vlinders en libellen?",
        options: ["zomer", "winter", "herfst", "lente"],
        answer: 0,
        wrongHints: [null, null, "In de winter is het koud. Zie je dan veel vlinders?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Zomer",
              tekst: "In de zomer is het warm en groeit alles. Dan zie je veel insecten: vlinders, bijen en libellen.",
            },
          ],
          woorden: [
            {
              woord: "insect",
              uitleg: "Dier met 6 poten, zoals vlinder, bij en libel.",
            },
          ],
          theorie: "Zomer: heet, lange dagen, alles groeit, veel insecten.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Op een warme zomerdag vliegen de bijen van bloem naar bloem.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Libel",
              uitleg: "Een libel is een insect dat vaak bij water vliegt.",
            },
          ],
          niveaus: {
            basis: "zomer.",
            simpeler: "In de zomer zie je de meeste insecten.",
            nogSimpeler: "zomer",
          },
        },
      },
      {
        q: "Waar op aarde zijn er bijna **geen seizoenen**?",
        options: ["bij de evenaar", "in Nederland", "in België", "in Duitsland"],
        answer: 0,
        wrongHints: [null, null, "Nederland heeft vier seizoenen.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Evenaar",
              tekst: "Bij de evenaar zijn er nauwelijks seizoenen. In Nederland zijn er vier.",
            },
          ],
          woorden: [
            {
              woord: "evenaar",
              uitleg: "Een denkbeeldige lijn rond het midden van de aarde.",
            },
          ],
          theorie: "Nederland heeft vier seizoenen. Bij de evenaar zijn er bijna geen seizoenen.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Bij de evenaar is het het hele jaar ongeveer even warm.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Polen",
              uitleg: "Bij de polen is het lang licht en daarna lang donker.",
            },
          ],
          niveaus: {
            basis: "bij de evenaar.",
            simpeler: "Bij de evenaar zijn er bijna geen seizoenen.",
            nogSimpeler: "evenaar",
          },
        },
      },
      {
        q: "Wat doen veel vogels in de **lente**?",
        options: [
          "Ze maken nesten en leggen eieren",
          "Ze vliegen naar warme landen",
          "Ze houden winterslaap",
          "Ze verliezen al hun veren",
        ],
        answer: 0,
        wrongHints: [null, null, "Naar warme landen vliegen doen trekvogels in de herfst.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Nesten en eieren",
              tekst: "In de lente maken vogels nesten en leggen ze eieren.",
            },
          ],
          woorden: [
            {
              woord: "nest",
              uitleg: "Een huisje dat een vogel bouwt voor zijn eieren.",
            },
          ],
          theorie: "Lente: warmer, blaadjes, bloemen, nesten en eieren, jonge dieren.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Een merel bouwt in de lente een nest in de heg.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Broeden",
              uitleg: "De moedervogel zit op de eieren om ze warm te houden.",
            },
          ],
          niveaus: {
            basis: "Ze maken nesten en leggen eieren.",
            simpeler: "In de lente bouwen vogels nesten.",
            nogSimpeler: "nesten",
          },
        },
      },
      {
        q: "Hoeveel **seizoenen** heeft Nederland?",
        options: ["4", "2", "3", "6"],
        answer: 0,
        wrongHints: [null, "Noem ze eens op: lente, zomer, ...", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Vier seizoenen",
              tekst: "Nederland heeft vier seizoenen: lente, zomer, herfst en winter.",
            },
          ],
          woorden: [
            {
              woord: "seizoen",
              uitleg: "Een deel van het jaar met eigen weer en natuur.",
            },
          ],
          theorie: "Elk seizoen duurt ongeveer drie maanden.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Lente, zomer, herfst, winter.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Een jaar",
              uitleg: "Een jaar heeft twaalf maanden: vier seizoenen van drie maanden.",
            },
          ],
          niveaus: {
            basis: "4.",
            simpeler: "Nederland heeft 4 seizoenen.",
            nogSimpeler: "4",
          },
        },
      },
    ],
  },
  {
    title: "Herfst en winter",
    explanation: "**HERFST 🍂** (september, oktober, november):\n• Wordt **kouder**, dagen worden korter.\n• Bladeren van bomen worden geel/oranje en **vallen af**.\n• **Trekvogels** vliegen naar warme landen.\n• Sommige dieren leggen voorraad aan: eekhoorn verstopt nootjes.\n• Anderen worden vetter voor de winter (egel, dassen).\n• Veel paddenstoelen.\n\n**WINTER ❄️** (december, januari, februari):\n• Koud, soms vorst en sneeuw.\n• **Bomen kaal** (de meeste naaldbomen blijven groen).\n• Sommige dieren houden **winterslaap** (egel, vleermuis, hamster).\n• De eekhoorn en de beer houden **winterrust**: ze slapen veel, maar worden af en toe wakker om te eten.\n• Andere dieren passen vacht aan: dikker, soms wit (sneeuwhaas).\n• Vogels die blijven (mus, mees) hebben moeite om voedsel te vinden.\n• Mensen kunnen helpen: vogelvoer in de tuin.\n\n**Wat is winterslaap?**\nDieren laten hun **lichaamstemperatuur dalen** en bewegen bijna niet. Hun hart klopt langzaam. Zo gebruiken ze weinig energie. In de lente worden ze wakker.\n\n**Waarom vallen bladeren?**\nBomen sparen energie. In winter is er weinig zonlicht voor fotosynthese. Bladeren zouden alleen energie kosten. Naaldbomen behouden hun naalden omdat die met minder energie kunnen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="40" width="120" height="120" rx="10" fill="${COLORS.herfst}" opacity="0.30" stroke="${COLORS.herfst}" stroke-width="2"/>
<text x="80" y="62" text-anchor="middle" fill="#bf360c" font-size="13" font-family="Arial" font-weight="bold">HERFST 🍂</text>
<text x="80" y="85" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">bladeren vallen</text>
<text x="80" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">trekvogels weg</text>
<text x="80" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">paddenstoelen</text>
<text x="80" y="140" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">sep-okt-nov</text>
<rect x="160" y="40" width="120" height="120" rx="10" fill="${COLORS.winter}" opacity="0.30" stroke="${COLORS.winter}" stroke-width="2"/>
<text x="220" y="62" text-anchor="middle" fill="#0d47a1" font-size="13" font-family="Arial" font-weight="bold">WINTER ❄️</text>
<text x="220" y="85" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">kou, vorst</text>
<text x="220" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">bomen kaal</text>
<text x="220" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">winterslaap</text>
<text x="220" y="140" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">dec-jan-feb</text>
</svg>`,
    checks: [
      {
        q: "Welk dier houdt **winterslaap**?",
        options: ["egel", "kraai", "ree", "merel"],
        answer: 0,
        wrongHints: [null, "Kraai blijft actief in de winter.", "Ree blijft actief, zoekt eten in bos.", "De merel blijft de hele winter wakker en zoekt eten."],
        uitlegPad: {
          stappen: [{ titel: "Egel = winterslaap", tekst: "Egel is klassiek winterslaap-dier. Slaapt nov-april in nest van bladeren." }],
          woorden: [{ woord: "winterslaap", uitleg: "Lichaamstemperatuur daalt, bewegingen bijna nul. Bespaart energie." }],
          theorie: "Winterslaap-dieren: egel, vleermuis, hamster. Niet: ree, vos, kraai (blijven actief).",
          voorbeelden: [{ type: "feit", tekst: "Egel weegt vóór winter ~1 kg, in winterslaap zakt hartslag van 190 → 20." }],
          basiskennis: [{ onderwerp: "Vleermuis ook", uitleg: "Vleermuis houdt ook winterslaap (in grotten, kerken)." }],
          niveaus: { basis: "egel.", simpeler: "Egel = klassiek winterslaap-dier. Slaapt hele winter in nest.", nogSimpeler: "Egel" },
        },
      },
      {
        q: "Waarom **vallen bladeren** in de herfst?",
        options: [
          "Boom spaart energie in winter",
          "Bladeren worden vies",
          "Sneeuw drukt ze eraf",
          "Vogels eten ze op",
        ],
        answer: 0,
        wrongHints: [null, "Niet over vies.", "Bladeren vallen vóór de sneeuw.", "Vogels eten geen bladeren."],
        uitlegPad: {
          stappen: [{ titel: "Geen zonlicht = geen werk", tekst: "Bladeren maken voedsel met zonlicht. Winter = weinig licht. Bladeren kosten dan energie. Dus: vallen af." }],
          woorden: [{ woord: "fotosynthese", uitleg: "Voedsel maken uit zonlicht. Stopt bij gebrek aan licht." }],
          theorie: "Loofbomen sparen energie door bladeren af te werpen. Naaldbomen behouden naalden (efficiënter).",
          voorbeelden: [{ type: "feit", tekst: "Eik laat in oktober blad vallen → spaart sap voor wortels → groeit weer in lente." }],
          basiskennis: [{ onderwerp: "Naaldbomen anders", uitleg: "Spar/den behouden naalden — naalden hebben minder verlies." }],
          niveaus: { basis: "Energie sparen.", simpeler: "Winter = weinig licht. Bladeren werken niet → kosten energie. Boom werpt ze af om te overleven.", nogSimpeler: "Sparen" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat doet een **eekhoorn** in de herfst?",
        options: [
          "Hij verstopt nootjes",
          "Hij vliegt naar een warm land",
          "Hij krijgt een witte vacht",
          "Hij maakt hooi",
        ],
        answer: 0,
        wrongHints: [null, null, "Een eekhoorn heeft geen vleugels.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Voorraad",
              tekst: "In de herfst verstopt de eekhoorn nootjes. In de winter heeft hij dan eten.",
            },
          ],
          woorden: [
            {
              woord: "voorraad",
              uitleg: "Eten dat je bewaart voor later.",
            },
          ],
          theorie: "Herfst: sommige dieren leggen voorraad aan, andere worden vetter.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "De eekhoorn begraaft eikels en nootjes.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Winterrust",
              uitleg: "In de winter slaapt de eekhoorn veel, maar hij wordt af en toe wakker om te eten.",
            },
          ],
          niveaus: {
            basis: "Hij verstopt nootjes.",
            simpeler: "De eekhoorn verstopt in de herfst nootjes.",
            nogSimpeler: "nootjes",
          },
        },
      },
      {
        q: "Een dier slaapt veel in de winter, maar wordt af en toe wakker om te eten. Hoe heet dat?",
        options: ["winterrust", "winterslaap", "paartijd", "trektijd"],
        answer: 0,
        wrongHints: [
          null,
          null,
          "Bij winterslaap bewegen dieren bijna niet en worden ze pas in de lente wakker.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Winterrust",
              tekst: "Slapen, maar af en toe wakker worden om te eten: dat heet winterrust. De eekhoorn en de beer doen dat.",
            },
          ],
          woorden: [
            {
              woord: "winterrust",
              uitleg: "Veel slapen in de winter, maar af en toe wakker worden om te eten.",
            },
          ],
          theorie: "Winterslaap: lichaamstemperatuur daalt, dier beweegt bijna niet (egel, vleermuis, hamster). Winterrust: veel slapen, af en toe eten (eekhoorn, beer).",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "Een eekhoorn komt op een zachte winterdag even zijn nootjes zoeken.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Winterslaap",
              uitleg: "Bij winterslaap wordt het dier pas in de lente wakker.",
            },
          ],
          niveaus: {
            basis: "winterrust.",
            simpeler: "Af en toe wakker worden om te eten = winterrust.",
            nogSimpeler: "winterrust",
          },
        },
      },
      {
        q: "Welk dier houdt **winterrust**?",
        options: ["eekhoorn", "egel", "vleermuis", "zwaluw"],
        answer: 0,
        wrongHints: [null, null, "De egel houdt winterslaap. Wordt hij tussendoor wakker om te eten?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Eekhoorn = winterrust",
              tekst: "De eekhoorn slaapt veel in de winter, maar wordt af en toe wakker om van zijn voorraad te eten.",
            },
          ],
          woorden: [
            {
              woord: "winterrust",
              uitleg: "Veel slapen in de winter, maar af en toe wakker worden om te eten.",
            },
          ],
          theorie: "Winterslaap: egel, vleermuis, hamster. Winterrust: eekhoorn, beer.",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "Winterslaap: egel. Winterrust: eekhoorn.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Winterslaap",
              uitleg: "Bij winterslaap daalt de lichaamstemperatuur en beweegt het dier bijna niet.",
            },
          ],
          niveaus: {
            basis: "eekhoorn.",
            simpeler: "De eekhoorn houdt winterrust.",
            nogSimpeler: "eekhoorn",
          },
        },
      },
      {
        q: "Welke bomen blijven in de winter meestal **groen**?",
        options: ["naaldbomen", "loofbomen", "fruitbomen", "eikenbomen"],
        answer: 0,
        wrongHints: [null, null, "Loofbomen verliezen hun bladeren in de herfst.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Naaldbomen",
              tekst: "De meeste naaldbomen houden hun naalden. Zo blijven ze in de winter groen.",
            },
          ],
          woorden: [
            {
              woord: "naaldboom",
              uitleg: "Boom met naalden in plaats van bladeren, zoals de den en de spar.",
            },
          ],
          theorie: "Winter: de meeste bomen zijn kaal, de meeste naaldbomen blijven groen.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Een kerstboom is een naaldboom.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Loofbomen",
              uitleg: "Loofbomen hebben bladeren die in de herfst vallen.",
            },
          ],
          niveaus: {
            basis: "naaldbomen.",
            simpeler: "Naaldbomen blijven meestal groen.",
            nogSimpeler: "naaldbomen",
          },
        },
      },
      {
        q: "Hoe past een **sneeuwhaas** zich aan de winter aan?",
        options: [
          "Zijn vacht wordt wit",
          "Hij vliegt naar het zuiden",
          "Hij houdt winterslaap",
          "Hij verstopt zich in het water",
        ],
        answer: 0,
        wrongHints: [null, null, "Een haas heeft geen vleugels.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Witte vacht",
              tekst: "De sneeuwhaas krijgt in de winter een dikke, witte vacht.",
            },
          ],
          woorden: [
            {
              woord: "vacht",
              uitleg: "De haren op het lichaam van een dier.",
            },
          ],
          theorie: "Sommige dieren passen hun vacht aan: dikker, soms wit.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Met een witte vacht valt de sneeuwhaas niet op in de sneeuw.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Andere manieren",
              uitleg: "Trekvogels vliegen weg, egels houden winterslaap.",
            },
          ],
          niveaus: {
            basis: "Zijn vacht wordt wit.",
            simpeler: "De sneeuwhaas krijgt een witte vacht.",
            nogSimpeler: "wit",
          },
        },
      },
      {
        q: "Hoe kun je vogels helpen in de **winter**?",
        options: [
          "Vogelvoer in de tuin hangen",
          "Hun nesten weghalen",
          "Ze wegjagen uit de tuin",
          "Alle struiken weghalen",
        ],
        answer: 0,
        wrongHints: [null, null, "Wat zou een vogel aan zijn nest hebben?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Vogelvoer",
              tekst: "In de winter vinden mussen en mezen moeilijk voedsel. Vogelvoer in de tuin helpt ze.",
            },
          ],
          woorden: [
            {
              woord: "standvogel",
              uitleg: "Vogel die het hele jaar in Nederland blijft, zoals de mus.",
            },
          ],
          theorie: "Vogels die blijven, hebben in de winter moeite om voedsel te vinden.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Een pindakaaspot of vetbol aan een tak.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Mus en mees",
              uitleg: "Deze vogels blijven 's winters hier.",
            },
          ],
          niveaus: {
            basis: "Vogelvoer in de tuin hangen.",
            simpeler: "Je helpt vogels met vogelvoer.",
            nogSimpeler: "vogelvoer",
          },
        },
      },
    ],
  },
  {
    title: "Planten en bomen",
    vanafGroep: 6, // niveau-filter (audit natuur 8 okt 2026): lager dan deze groep slaat het kwartier deze stap over
    explanation: "**Planten** zijn levende wezens die anders zijn dan dieren:\n• **Maken eigen voedsel** uit zonlicht (fotosynthese).\n• Geen hart, maag of hersenen zoals dieren.\n• Bewegen niet weg, blijven op één plek.\n• Hebben bladeren, stengels, wortels, bloemen.\n\n**Onderdelen van een plant**:\n• **Wortel**: in de grond — pakt water + voedingsstoffen op.\n• **Stengel/stam**: draagt de plant.\n• **Blad**: vangt zonlicht — fotosynthese.\n• **Bloem**: voor voortplanting.\n• **Vrucht/zaad**: nieuwe plant.\n\n**Twee soorten bomen**:\n• **Loofbomen** — bladeren in zomer, kaal in winter. Eik, beuk, esdoorn, berk.\n• **Naaldbomen** — naalden, blijven groen ('s winters ook). Den, spar, taxus.\n\n**Fotosynthese** (foto = licht, synthese = maken):\n• water + koolstofdioxide + zonlicht → suiker + zuurstof.\n• Daarom geven planten ons zuurstof om te ademen!\n\n**Bestuiving**: bijen, hommels en vlinders brengen stuifmeel van bloem naar bloem. Zonder hen maken veel planten geen vruchten en zaden.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">plant 🌱</text>
<line x1="150" y1="50" x2="150" y2="160" stroke="#5d4037" stroke-width="3"/>
<ellipse cx="150" cy="50" rx="40" ry="20" fill="#43a047" opacity="0.5"/>
<ellipse cx="150" cy="170" rx="50" ry="10" fill="#5d4037" opacity="0.4"/>
<text x="195" y="40" fill="#1b5e20" font-size="10" font-family="Arial">blad: fotosynthese</text>
<text x="195" y="100" fill="#5d4037" font-size="10" font-family="Arial">stengel: dragen</text>
<text x="195" y="170" fill="#5d4037" font-size="10" font-family="Arial">wortel: water</text>
<line x1="150" y1="120" x2="150" y2="120" stroke="#ec407a" stroke-width="3"/>
<circle cx="120" cy="100" r="6" fill="#ec407a"/>
<text x="60" y="105" text-anchor="middle" fill="#ec407a" font-size="10" font-family="Arial">bloem: zaden</text>
</svg>`,
    checks: [
      {
        q: "Wat is **fotosynthese**?",
        options: [
          "Plant maakt suiker uit zonlicht",
          "Plant fotografeert de zon",
          "Plant verbrandt suiker",
          "Plant ademt water in",
        ],
        answer: 0,
        wrongHints: [null, "Niets met fotograferen.", "Suiker verbranden is juist het omgekeerde van fotosynthese.", "Water komt via de wortels binnen — wat doet de plant met het licht?"],
        uitlegPad: {
          stappen: [{ titel: "Foto + synthese", tekst: "Foto=licht. Synthese=maken. Plant maakt suiker uit zonlicht (+ water + CO2)." }],
          woorden: [{ woord: "fotosynthese", uitleg: "Plant maakt voedsel via zonlicht. Geeft zuurstof af." }],
          theorie: "Formule: water + CO2 + zonlicht → suiker + zuurstof.",
          voorbeelden: [{ type: "feit", tekst: "Daarom geven planten ons zuurstof om te ademen!" }],
          basiskennis: [{ onderwerp: "Niet fotograferen", uitleg: "'Foto' Grieks voor licht (zoals bij fotosynthese, fotograaf)." }],
          niveaus: { basis: "Suiker uit zonlicht.", simpeler: "Foto (licht) + synthese (maken) = plant maakt suiker uit zonlicht. Geeft zuurstof af.", nogSimpeler: "Suiker" },
        },
      },
      {
        q: "Welk onderdeel van de plant is voor **voortplanting**?",
        options: ["bloem", "wortel", "stam", "blad"],
        answer: 0,
        wrongHints: [null, "Wortel haalt water.", "Stam draagt.", "Blad doet fotosynthese."],
        uitlegPad: {
          stappen: [{ titel: "Bloem = voortplanting", tekst: "Bloem heeft stuifmeel + stamper → bestoven → vrucht/zaad → nieuwe plant." }],
          woorden: [{ woord: "bloem", uitleg: "Voortplantingsorgaan plant. Maakt zaden/vruchten." }],
          theorie: "Plant-onderdelen + functie: wortel=water, stam=dragen, blad=fotosynthese, bloem=voortplanting.",
          voorbeelden: [{ type: "stap", tekst: "Bij bestuift bloem → vrucht → zaad valt → nieuwe plant groeit." }],
          basiskennis: [{ onderwerp: "Bestuiving", uitleg: "Bijen/hommels brengen stuifmeel van bloem naar bloem. Cruciale rol." }],
          niveaus: { basis: "bloem.", simpeler: "Bloem maakt zaden voor nieuwe planten = voortplantingsorgaan.", nogSimpeler: "Bloem" },
        },
      },
      {
        q: "Welke is een **naaldboom**?",
        options: ["spar", "eik", "beuk", "esdoorn"],
        answer: 0,
        wrongHints: [null, "Eik = loofboom.", "Beuk = loofboom.", "Esdoorn = loofboom."],
        uitlegPad: {
          stappen: [{ titel: "Spar = naalden", tekst: "Spar heeft naalden (geen bladeren). Blijft 's winters groen → naaldboom." }],
          woorden: [{ woord: "naaldboom", uitleg: "Boom met naalden (geen bladeren). Den, spar, taxus." }],
          theorie: "2 boom-soorten: naaldbomen (groen 's winters) + loofbomen (kaal 's winters).",
          voorbeelden: [{ type: "tabel", tekst: "Naald: spar, den, taxus. Loof: eik, beuk, esdoorn, berk." }],
          basiskennis: [{ onderwerp: "Kerstboom", uitleg: "Kerstboom is meestal spar of den — naaldbomen blijven groen." }],
          niveaus: { basis: "spar.", simpeler: "Spar heeft naalden + blijft 's winters groen = naaldboom. (Eik/beuk/esdoorn = loofboom).", nogSimpeler: "Spar" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welk deel van een plant haalt **water** uit de grond?",
        options: ["wortel", "blad", "bloem", "stengel"],
        answer: 0,
        wrongHints: [null, null, "Het blad zit boven de grond en vangt zonlicht.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Wortel",
              tekst: "De wortel zit in de grond. Hij pakt water en voedingsstoffen op.",
            },
          ],
          woorden: [
            {
              woord: "wortel",
              uitleg: "Deel van de plant onder de grond.",
            },
          ],
          theorie: "Wortel: water. Stengel: draagt. Blad: zonlicht. Bloem: voortplanting.",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "Als je een plant water geeft, giet je het op de grond bij de wortels.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Voedingsstoffen",
              uitleg: "Stoffen uit de grond die een plant nodig heeft om te groeien.",
            },
          ],
          niveaus: {
            basis: "wortel.",
            simpeler: "De wortel haalt water uit de grond.",
            nogSimpeler: "wortel",
          },
        },
      },
      {
        q: "Wat doet het **blad** van een plant?",
        options: [
          "Het vangt zonlicht",
          "Het haalt water uit de grond",
          "Het draagt de plant",
          "Het zorgt voor de voortplanting",
        ],
        answer: 0,
        wrongHints: [null, null, "Water uit de grond halen doet een deel onder de grond.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Blad",
              tekst: "Het blad vangt zonlicht. Daarmee maakt de plant zijn eigen voedsel: fotosynthese.",
            },
          ],
          woorden: [
            {
              woord: "fotosynthese",
              uitleg: "Een plant maakt suiker uit water, koolstofdioxide en zonlicht.",
            },
          ],
          theorie: "Wortel: water. Stengel: draagt. Blad: zonlicht. Bloem: voortplanting.",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "Bladeren zijn vaak plat en breed: zo vangen ze veel licht.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Bloem",
              uitleg: "De bloem is voor de voortplanting.",
            },
          ],
          niveaus: {
            basis: "Het vangt zonlicht.",
            simpeler: "Het blad vangt zonlicht.",
            nogSimpeler: "zonlicht",
          },
        },
      },
      {
        q: "Wat geven planten ons om te **ademen**?",
        options: ["zuurstof", "koolstofdioxide", "rook", "stof"],
        answer: 0,
        wrongHints: [null, null, "Koolstofdioxide gebruikt de plant juist bij fotosynthese.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Zuurstof",
              tekst: "Bij fotosynthese maakt een plant suiker en zuurstof. Die zuurstof ademen wij in.",
            },
          ],
          woorden: [
            {
              woord: "zuurstof",
              uitleg: "Een gas in de lucht dat wij nodig hebben om te ademen.",
            },
          ],
          theorie: "Fotosynthese: water + koolstofdioxide + zonlicht → suiker + zuurstof.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Bomen en planten maken zuurstof.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Koolstofdioxide",
              uitleg: "Een gas dat een plant opneemt om voedsel te maken.",
            },
          ],
          niveaus: {
            basis: "zuurstof.",
            simpeler: "Planten geven ons zuurstof.",
            nogSimpeler: "zuurstof",
          },
        },
      },
      {
        q: "Welk deel van een plant houdt de bladeren en bloemen **omhoog**?",
        options: ["stengel", "wortel", "zaad", "stuifmeel"],
        answer: 0,
        wrongHints: [null, null, "De wortel zit onder de grond en haalt water op.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stengel",
              tekst: "De stengel (bij een boom: de stam) draagt de plant. Hij houdt bladeren en bloemen omhoog.",
            },
          ],
          woorden: [
            {
              woord: "stengel",
              uitleg: "Het lange deel van een plant tussen wortel en bloem.",
            },
          ],
          theorie: "Wortel: water. Stengel/stam: draagt. Blad: zonlicht. Bloem: voortplanting. Vrucht/zaad: nieuwe plant.",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "De steel van een tulp is een stengel.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Stam",
              uitleg: "Bij een boom heet de stengel de stam.",
            },
          ],
          niveaus: {
            basis: "stengel.",
            simpeler: "De stengel houdt de plant omhoog.",
            nogSimpeler: "stengel",
          },
        },
      },
      {
        q: "Wat is een verschil tussen planten en dieren?",
        options: [
          "Planten maken zelf hun voedsel",
          "Planten leven niet",
          "Planten groeien niet",
          "Planten planten zich niet voort",
        ],
        answer: 0,
        wrongHints: [
          null,
          null,
          "Planten eten niet zoals dieren. Zijn ze daarom niet levend?",
          "Een klein zaadje wordt een grote boom. Groeit een plant dan?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eigen voedsel",
              tekst: "Planten maken hun eigen voedsel uit zonlicht. Dieren moeten eten.",
            },
          ],
          woorden: [
            {
              woord: "fotosynthese",
              uitleg: "Een plant maakt voedsel uit zonlicht.",
            },
          ],
          theorie: "Planten zijn levende wezens. Ze groeien en planten zich voort, net als dieren.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Een koe moet gras eten. Het gras maakt zelf voedsel.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Bloem",
              uitleg: "De bloem van de plant is voor de voortplanting.",
            },
          ],
          niveaus: {
            basis: "Planten maken zelf hun voedsel.",
            simpeler: "Planten maken zelf voedsel. Dieren niet.",
            nogSimpeler: "eigen voedsel",
          },
        },
      },
    ],
  },
  {
    title: "Voedselketen — wie eet wat?",
    vanafGroep: 6, // niveau-filter (audit natuur 8 okt 2026): lager dan deze groep slaat het kwartier deze stap over
    explanation: "Een **voedselketen** laat zien wie wat eet. Energie stroomt van zon naar dier naar dier.\n\n**Voorbeeld voedselketen** (weiland):\n• zon → gras → konijn → vos\n• De zon geeft energie aan **gras** (planten).\n• Het **konijn** eet gras.\n• De **vos** eet konijnen.\n\n**Begrippen**:\n• **Producent**: maakt zelf voedsel = plant.\n• **Planteneter** (herbivoor): koe, konijn, schaap, hert, rups, ree.\n• **Vleeseter** (carnivoor): vos, leeuw, havik, krokodil.\n• **Alleseter** (omnivoor): mens, beer, varken, kraai.\n• **Aaseter**: eet dode dieren (kraai, gier).\n• **Afbreker**: schimmels, bacteriën, regenwormen — maken dode resten weer tot grond.\n\n**Voedselweb**: meerdere ketens die elkaar kruisen. In de natuur eet niet alleen één dier één ander — het is een netwerk.\n\n**Belangrijk**: als één schakel verdwijnt, raakt het hele netwerk uit balans. Daarom zijn ALLE dieren belangrijk, ook insecten en wormen.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">voedselketen</text>
<text x="40" y="65" fill="${COLORS.warm}" font-size="20" font-family="Arial">☀️</text>
<text x="65" y="70" fill="${COLORS.text}" font-size="14" font-family="Arial">→</text>
<text x="80" y="65" fill="${COLORS.lente}" font-size="20" font-family="Arial">🌱</text>
<text x="105" y="70" fill="${COLORS.text}" font-size="14" font-family="Arial">→</text>
<text x="125" y="65" fill="${COLORS.text}" font-size="20" font-family="Arial">🐰</text>
<text x="150" y="70" fill="${COLORS.text}" font-size="14" font-family="Arial">→</text>
<text x="170" y="65" fill="${COLORS.text}" font-size="20" font-family="Arial">🦊</text>
<text x="20" y="100" fill="${COLORS.text}" font-size="11" font-family="Arial">producent: plant</text>
<text x="20" y="118" fill="${COLORS.text}" font-size="11" font-family="Arial">planteneter (herbivoor): koe, konijn</text>
<text x="20" y="136" fill="${COLORS.text}" font-size="11" font-family="Arial">vleeseter (carnivoor): vos, leeuw</text>
<text x="20" y="154" fill="${COLORS.text}" font-size="11" font-family="Arial">alleseter (omnivoor): mens, beer</text>
</svg>`,
    checks: [
      {
        q: "Welk dier is een **planteneter**?",
        options: ["konijn", "vos", "uil", "haai"],
        answer: 0,
        wrongHints: [null, "Een vos eet vooral andere dieren, zoals konijnen en muizen.", "Een uil vangt muizen: dat is een vleeseter.", "Een haai eet vissen: dat is een vleeseter."],
        uitlegPad: {
          stappen: [{ titel: "Wat eet het dier?", tekst: "Een planteneter eet alleen planten, zoals gras, blaadjes en wortels. Een konijn eet gras en groente." }],
          woorden: [{ woord: "planteneter", uitleg: "Een dier dat alleen planten eet. Voorbeelden: koe, konijn, schaap." }],
          theorie: "Er zijn planteneters (alleen planten), vleeseters (vlees) en alleseters (planten én vlees).",
          voorbeelden: [{ type: "tabel", tekst: "Planteneter: koe, konijn, ree. Vleeseter: vos, uil, haai. Alleseter: mens, beer, varken." }],
          basiskennis: [{ onderwerp: "Moeilijk woord, voor wie wil", uitleg: "Een planteneter heet ook wel herbivoor. Een vleeseter heet carnivoor, een alleseter omnivoor." }],
          niveaus: { basis: "konijn.", simpeler: "Een konijn eet gras en groente: alleen planten.", nogSimpeler: "Konijn" },
        },
      },
      {
        q: "Wie staat **bovenaan** in de keten *gras → konijn → vos*?",
        options: ["vos", "gras", "konijn", "zon"],
        answer: 0,
        wrongHints: [null, "Gras is producent (begin).", "Konijn eet gras maar wordt zelf gegeten.", "Zon geeft energie maar leeft niet."],
        uitlegPad: {
          stappen: [{ titel: "Vos = top", tekst: "De vos eet het konijn. In deze keten eet niemand de vos. → vos staat bovenaan." }],
          woorden: [{ woord: "toppredator", uitleg: "Dier bovenaan de keten: een volwassen dier wordt bijna nooit door een ander dier gegeten." }],
          theorie: "Voedselketen-volgorde: producent → consument → toppredator. Pijl wijst van prooi naar eter.",
          voorbeelden: [{ type: "stap", tekst: "Gras→konijn→vos. Gras=begin. Konijn=midden. Vos=top." }],
          basiskennis: [{ onderwerp: "Energie stroomt op", uitleg: "Energie van zon → gras → konijn → vos. Vos krijgt minste deel." }],
          niveaus: { basis: "vos.", simpeler: "Vos eet konijn. In deze keten eet niemand de vos → vos staat bovenaan.", nogSimpeler: "Vos" },
        },
      },
      {
        q: "Wat doet een **afbreker**?",
        options: [
          "Eet dode resten en maakt grond",
          "Jaagt op andere dieren",
          "Eet alleen planten",
          "Slaapt de hele dag",
        ],
        answer: 0,
        wrongHints: [null, "Jagen = vleeseter.", "Planteneter eet planten.", "Niet slapen — actief afbreken."],
        uitlegPad: {
          stappen: [{ titel: "Afbreken = recyclen", tekst: "Afbrekers (regenworm/schimmel/bacterie) eten dode resten en maken er weer grond van." }],
          woorden: [{ woord: "afbreker", uitleg: "Maakt dode planten/dieren weer tot voedingsstoffen voor nieuwe planten." }],
          theorie: "Cyclus: dode bladeren → afbreker → grond → nieuwe planten. Natuur recyclet alles.",
          voorbeelden: [{ type: "lijst", tekst: "Afbrekers: regenworm, schimmels (paddenstoel), bacteriën." }],
          basiskennis: [{ onderwerp: "Belangrijke rol", uitleg: "Zonder afbrekers: dode resten zouden zich opstapelen, geen voeding voor nieuwe planten." }],
          niveaus: { basis: "Eet dode resten.", simpeler: "Afbreker (regenworm/schimmel) eet dood materiaal en maakt er grond van. Natuur recyclet.", nogSimpeler: "Recyclen" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welk dier is een **alleseter**?",
        options: ["varken", "koe", "schaap", "konijn"],
        answer: 0,
        wrongHints: [null, null, "Een koe eet gras en hooi. Eet een koe ook vlees?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Varken = alleseter",
              tekst: "Een alleseter eet planten én dieren. Het varken, de beer, de kraai en de mens zijn alleseters.",
            },
          ],
          woorden: [
            {
              woord: "alleseter",
              uitleg: "Dier dat zowel planten als dieren eet.",
            },
          ],
          theorie: "Planteneter: koe, schaap, konijn. Alleseter: mens, beer, varken, kraai.",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "Planteneter: koe. Alleseter: varken.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Planteneters",
              uitleg: "Koe, schaap en konijn eten alleen planten.",
            },
          ],
          niveaus: {
            basis: "varken.",
            simpeler: "Het varken is een alleseter.",
            nogSimpeler: "varken",
          },
        },
      },
      {
        q: "Welke is een **afbreker**?",
        options: ["regenworm", "vos", "konijn", "havik"],
        answer: 0,
        wrongHints: [null, null, "Een vos jaagt op konijnen.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Regenworm = afbreker",
              tekst: "Een regenworm eet dode resten, zoals dode bladeren, en maakt er weer grond van.",
            },
          ],
          woorden: [
            {
              woord: "afbreker",
              uitleg: "Wie dode resten weer tot grond maakt: schimmels, bacteriën, regenwormen.",
            },
          ],
          theorie: "Afbrekers: schimmels, bacteriën, regenwormen.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Dode bladeren in het bos worden langzaam grond.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Belangrijk",
              uitleg: "Zonder afbrekers blijven dode resten liggen.",
            },
          ],
          niveaus: {
            basis: "regenworm.",
            simpeler: "De regenworm is een afbreker.",
            nogSimpeler: "regenworm",
          },
        },
      },
      {
        q: "Waar begint de **energie** in een voedselketen?",
        options: ["bij de zon", "bij de vos", "bij het konijn", "bij de regenworm"],
        answer: 0,
        wrongHints: [null, null, "De vos eet het konijn. Staat hij aan het begin of aan het eind?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Zon",
              tekst: "De zon geeft energie aan planten. Die gaat via het konijn naar de vos.",
            },
          ],
          woorden: [
            {
              woord: "energie",
              uitleg: "Kracht om te leven, te groeien en te bewegen.",
            },
          ],
          theorie: "Energie stroomt van zon naar plant naar dier naar dier.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "zon → gras → konijn → vos.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Plant",
              uitleg: "De plant vangt het zonlicht en maakt er voedsel van.",
            },
          ],
          niveaus: {
            basis: "bij de zon.",
            simpeler: "De energie begint bij de zon.",
            nogSimpeler: "zon",
          },
        },
      },
      {
        q: "Wat is een **voedselweb**?",
        options: [
          "Meerdere voedselketens die elkaar kruisen",
          "Het web dat een spin maakt",
          "Eén dier dat één ander dier eet",
          "Een lijst met alle planteneters",
        ],
        answer: 0,
        wrongHints: [null, null, "Het gaat hier niet over spinnen.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Voedselweb",
              tekst: "In de natuur eet niet één dier één ander dier. Er zijn veel ketens die elkaar kruisen: een voedselweb.",
            },
          ],
          woorden: [
            {
              woord: "voedselweb",
              uitleg: "Een netwerk van voedselketens.",
            },
          ],
          theorie: "Een voedselketen is één rij. Een voedselweb is een netwerk van veel ketens.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Een vos eet konijnen, maar ook muizen. Een havik eet ook muizen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Voedselketen",
              uitleg: "Laat zien wie wat eet, bijvoorbeeld gras → konijn → vos.",
            },
          ],
          niveaus: {
            basis: "Meerdere voedselketens die elkaar kruisen.",
            simpeler: "Een voedselweb is een netwerk van voedselketens.",
            nogSimpeler: "netwerk",
          },
        },
      },
      {
        q: "In de keten *gras → konijn → vos* verdwijnen alle konijnen. Wat gebeurt er met de vossen?",
        options: [
          "Ze hebben minder te eten",
          "Ze krijgen meer te eten",
          "Er verandert niets voor ze",
          "Ze gaan gras eten",
        ],
        answer: 0,
        wrongHints: [null, null, "Wat eet de vos in deze keten?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Uit balans",
              tekst: "De vos eet konijnen. Zijn de konijnen weg, dan heeft de vos minder te eten.",
            },
          ],
          woorden: [
            {
              woord: "schakel",
              uitleg: "Eén dier of plant in een voedselketen.",
            },
          ],
          theorie: "Als één schakel verdwijnt, raakt het hele netwerk uit balans.",
          voorbeelden: [
            {
              type: "feit",
              tekst: "Minder konijnen → minder eten voor vossen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Alle dieren belangrijk",
              uitleg: "Ook insecten en wormen zijn een schakel in het voedselweb.",
            },
          ],
          niveaus: {
            basis: "Ze hebben minder te eten.",
            simpeler: "Zonder konijnen hebben vossen minder te eten.",
            nogSimpeler: "minder eten",
          },
        },
      },
    ],
  },

  // E
  {
    title: "Eindopdracht — natuur door elkaar",
    explanation: "Tijd om alles door elkaar te toetsen!\n\n**Wat je hebt geleerd**:\n• 6 kenmerken van leven.\n• 6 hoofd-diergroepen: zoogdieren, vogels, vissen, reptielen, amfibieën, insecten.\n• Plus weekdieren, schaaldieren, wormen.\n• Levensstadia + metamorfose (kikker, vlinder).\n• 4 seizoenen — wat gebeurt waar.\n• Plant-onderdelen + fotosynthese.\n• Voedselketen + producent/planteneter/vleeseter.\n\nVeel succes!",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="24" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">eindtoets</text>
<text x="150" y="60" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">leven · groepen · seizoenen</text>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">planten · voedselketen</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">je kunt het — succes!</text>
</svg>`,
    checks: [
      {
        q: "Tot welke groep behoort een **vleermuis**?",
        options: ["zoogdier", "vogel", "insect", "reptiel"],
        answer: 0,
        wrongHints: [null, "Geen veren — denk aan vacht + zogen.", "Geen 6 poten en geen hard pantser.", "Geen schubben + warmbloedig."],
        uitlegPad: {
          stappen: [{ titel: "Vleermuis = enige vliegende zoogdier", tekst: "Vleermuis lijkt op vogel maar heeft vacht + zoogt → zoogdier (enige zoogdier dat kan vliegen)." }],
          woorden: [{ woord: "vleermuis", uitleg: "Enige zoogdier dat kan vliegen. Vacht, geen veren." }],
          theorie: "Niet door uiterlijk laten misleiden: vacht+zoogt+longen=zoogdier, ook al vliegt het.",
          voorbeelden: [{ type: "feit", tekst: "Vleermuis-jong drinkt melk bij moeder (zoogt). Heeft pels, geen veren." }],
          basiskennis: [{ onderwerp: "Niet vogel", uitleg: "Vogel = veren. Vleermuis = vacht. Cruciaal verschil." }],
          niveaus: { basis: "zoogdier.", simpeler: "Vleermuis vliegt maar heeft vacht + zoogt → zoogdier (enige vliegende).", nogSimpeler: "Zoogdier" },
        },
      },
      {
        q: "Wat doen **bijen** voor planten?",
        options: ["Bestuiven", "Eten ze op", "Beschermen ze", "Maken zaden"],
        answer: 0,
        wrongHints: [null, "Bijen eten honing, ze eten geen planten op.", "Beschermen doen ze niet direct.", "Bijen maken honing, geen zaden."],
        uitlegPad: {
          stappen: [{ titel: "Bestuiving = sleutel", tekst: "Bij vliegt van bloem naar bloem en brengt stuifmeel mee → bevruchting → vrucht/zaad." }],
          woorden: [{ woord: "bestuiving", uitleg: "Stuifmeel van ene bloem naar andere → bloem kan vrucht/zaad maken." }],
          theorie: "Zonder bestuivers (bij/hommel/vlinder) maken veel planten geen vruchten en zaden.",
          voorbeelden: [{ type: "feit", tekst: "Veel ons voedsel (appel, aardbei, tomaat) bestaat dankzij bijen." }],
          basiskennis: [{ onderwerp: "Bijen sterven", uitleg: "Wereldwijd dalen bijen-aantallen → groot probleem voor voedselproductie." }],
          niveaus: { basis: "Bestuiven.", simpeler: "Bijen brengen stuifmeel van bloem naar bloem → bevruchting → vrucht/zaad → nieuwe planten.", nogSimpeler: "Bestuiven" },
        },
      },
      {
        q: "Welke vorm heeft een **kikker** als baby?",
        options: ["kikkervisje", "kuiken", "rups", "pop"],
        answer: 0,
        wrongHints: [null, "Kuiken = vogel.", "Rups = vlinder.", "Een pop hoort bij insecten zoals de vlinder."],
        uitlegPad: {
          stappen: [{ titel: "Kikkervisje = baby kikker", tekst: "Kikker-cyclus: ei → kikkervisje (in water, met staart) → kikker met poten → volwassen." }],
          woorden: [{ woord: "kikkervisje", uitleg: "Baby-kikker met staart, leeft in water, ademt met kieuwen." }],
          theorie: "Kikker doet metamorfose: water-baby met kieuwen → land-volwassen met longen.",
          voorbeelden: [{ type: "stap", tekst: "Eerst kikkervisje (vis-achtig met staart), dan poten, dan staart weg, dan klaar." }],
          basiskennis: [{ onderwerp: "Niet kuiken/rups", uitleg: "Kuiken = vogel-baby. Rups = vlinder-baby. Kikkervisje = kikker-baby." }],
          niveaus: { basis: "kikkervisje.", simpeler: "Kikker-baby = kikkervisje (met staart, in water). Verandert later in kikker.", nogSimpeler: "Kikkervisje" },
        },
      },
      {
        q: "In welk seizoen krijgen bomen weer **blaadjes**?",
        options: ["lente", "zomer", "herfst", "winter"],
        answer: 0,
        wrongHints: [null, "In zomer zijn ze al vol — wanneer kwamen ze terug?", "Herfst = blaadjes vallen juist.", "Winter = bomen helemaal kaal."],
        uitlegPad: {
          stappen: [{ titel: "Lente = nieuwe blaadjes", tekst: "Lente: warmer + meer licht → bomen maken nieuwe blaadjes uit knoppen." }],
          woorden: [{ woord: "uitlopen", uitleg: "Knoppen openen → nieuwe blaadjes verschijnen." }],
          theorie: "Boom-cyclus: lente=blad uit, zomer=vol, herfst=val, winter=kaal.",
          voorbeelden: [{ type: "tabel", tekst: "Maart: knoppen zwellen. April: blaadjes uit. Mei: vol blad." }],
          basiskennis: [{ onderwerp: "Knoppen winter", uitleg: "Knoppen vormen al in herfst, wachten dichtgebonden de winter af." }],
          niveaus: { basis: "lente.", simpeler: "Lente = bomen krijgen nieuwe blaadjes uit knoppen (na kale winter).", nogSimpeler: "Lente" },
        },
      },
      {
        q: "Wat doet een **plant met zonlicht**?",
        options: ["Maakt zelf voedsel", "Wordt warmer", "Krijgt kleur", "Slaapt"],
        answer: 0,
        wrongHints: [null, "Wordt wel warmer, maar dat is een bijproduct.", "Krijgt wel kleur, maar dat is niet het hoofddoel.", "Planten slapen niet."],
        uitlegPad: {
          stappen: [{ titel: "Fotosynthese", tekst: "Plant gebruikt zonlicht om voedsel te maken (suiker) uit water + CO2." }],
          woorden: [{ woord: "fotosynthese", uitleg: "Plant maakt suiker uit zonlicht. Geeft zuurstof af." }],
          theorie: "Gevolg: plant heeft eigen voedsel (groei) + wij krijgen zuurstof om te ademen.",
          voorbeelden: [{ type: "feit", tekst: "Zonder zonlicht (in donkere kamer) gaat plant dood — geen voedsel mogelijk." }],
          basiskennis: [{ onderwerp: "Bij-effecten", uitleg: "Warmer + kleur zijn bijeffecten, niet hoofddoel." }],
          niveaus: { basis: "Fotosynthese.", simpeler: "Plant gebruikt zonlicht om voedsel (suiker) te maken = fotosynthese.", nogSimpeler: "Voedsel" },
        },
      },
      { q: "Welk seizoen begint **rond 21 maart**?", options: ["Lente","Zomer","Herfst","Winter"], answer: 0, wrongHints: [null, "21 juni.", "21 sept.", "21 dec."] },
      { q: "Welk seizoen heeft **bladval**?", options: ["Herfst","Lente","Zomer","Winter"], answer: 0, wrongHints: [null, "Bloesem.", "Volle bladeren.", "Geen bladeren meer."] },
      { q: "Wat doet een **trekvogel** in de winter?", options: ["Vliegt naar warmer land","Slaapt","Verandert kleur","Niets"], answer: 0, wrongHints: [null, "Winterslaap is iets voor egels, niet voor vogels.", "Van kleur wisselen doet een sneeuwhaas — denk aan wat 'trek' in trekvogel betekent.", "Hij doet juist iets groots — denk aan het woord 'trek'."] },
      { q: "Wat is **winterslaap**?", options: ["Langdurige rust met lage activiteit","Korte slaap","Wakker blijven","Vlucht"], answer: 0, wrongHints: [null, "Winterslaap duurt geen nacht, maar maanden.", "Bij winterslaap blijft het dier juist niet wakker.", "Wegvliegen naar een warm land doen trekvogels."] },
      { q: "Welk dier houdt **winterslaap** in NL?", options: ["Egel","Vos","Konijn","Eekhoorn"], answer: 0, wrongHints: [null, "Blijft actief.", "Blijft actief.", "Blijft actief — eet van zijn wintervoorraad."] },
      { q: "Welk seizoen is in Nederland meestal het **droogst**?", options: ["Lente","Winter","Zomer","Herfst"], answer: 0, wrongHints: [null, "In de winter valt er vaker regen dan in de lente.", "Verrassend: in de zomer valt juist veel regen, door onweersbuien.", "De herfst is vaak het natst."] },
      { q: "Wat doet een **kikkervisje** in de lente?", options: ["Groeit uit tot kikker","Slaapt","Verstopt zich","Vliegt"], answer: 0, wrongHints: [null, "Het is juist actief: zwemmen + groeien.", "Het zwemt rond in het water, niet verborgen.", "Kikkers zijn geen vliegers."] },
      { q: "Welke vogel **trekt** in de herfst weg uit NL?", options: ["Ooievaar","Mus","Merel","Koolmees"], answer: 0, wrongHints: [null, "Mussen blijven heel jaar in NL — standvogel.", "Merels blijven hier — bij voederplankjes zie je ze 's winters ook.", "Koolmezen blijven het hele jaar — je ziet ze 's winters bij de pindakaaspot."] },
      { q: "In welk seizoen gaan de **knoppen** aan een tak open (lopen ze uit)?", options: ["Lente","Zomer","Herfst","Winter"], answer: 0, wrongHints: [null, "Dan zijn de bladeren al volgroeid.", "Dan vallen de bladeren juist.", "Dan zitten de knoppen nog dicht te wachten."] },
      { q: "Welk seizoen heeft **kortste dagen** in NL?", options: ["Winter","Zomer","Lente","Herfst"], answer: 0, wrongHints: [null, "In de zomer zijn de dagen juist het langst.", "In de lente worden de dagen steeds langer.", "In de herfst worden de dagen korter, maar de kortste dag (rond 21 december) valt in de winter."] },
      { q: "Wat is een **standvogel**?", options: ["Vogel die het hele jaar in NL blijft","Vogel die in de winter wegtrekt","Vogel die alleen insecten eet","Vogel die niet kan vliegen"], answer: 0, wrongHints: [null, "Dat is juist een trekvogel.", "Wat een vogel eet, heeft niets met 'stand' te maken.", "Kunnen vliegen heeft niets met 'stand' te maken."] },
      { q: "Wat doet een **rups** uiteindelijk?", options: ["Wordt vlinder","Sterft direct","Wordt bij","Wordt spin"], answer: 0, wrongHints: [null, "De rups eet en groeit eerst een hele tijd — en dan verandert hij.", "Uit een bijeneitje komt een larve, geen rups.", "Spinnen hebben geen rups-fase."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const dierenSeizoenenNatuur = {
  id: "dieren-seizoenen-natuur",
  title: "Dieren en seizoenen",
  emoji: "🌿",
  level: "groep5-7",
  subject: "natuur",
  // SLO-kerndoelen (sprint-4 G4a): 39-42 (oriëntatie op jezelf en de wereld
  // — natuur en techniek, milieu, levenscyclus). Geen referentieniveau-
  // schaal voor natuur (1F/1S geldt alleen voor taal+rekenen).
  sloKerndoelen: [39, 40, 41, 42],
  sloThema: "Wereldoriëntatie — natuur, dieren & seizoenen",
  referentieNiveau: "PO-kerndoel",
  prerequisites: [
    { id: "dierenklassen-po", title: "Dierenklassen", niveau: "po-1F" },
  ],
  intro:
    "Wereld & Natuur voor de basisschool: wat is leven, de diergroepen (zoogdieren, vogels, vissen, reptielen+amfibieën, insecten), levensstadia + metamorfose, de vier seizoenen, planten met fotosynthese, en voedselketens.",
  triggerKeywords: [
    "dieren", "diergroepen",
    "zoogdier", "zoogdieren",
    "vogel", "vogels",
    "vis", "vissen",
    "reptiel", "amfibie", "kikker",
    "insect", "insecten", "bij", "vlinder", "spin",
    "metamorfose", "gedaanteverwisseling",
    "rups pop vlinder", "kikkervisje",
    "lente", "zomer", "herfst", "winter", "seizoen",
    "winterslaap", "trekvogels",
    "plant", "planten", "boom", "bomen", "bloem",
    "fotosynthese", "loofboom", "naaldboom",
    "voedselketen", "voedselweb",
    "herbivoor", "carnivoor", "omnivoor",
    "natuur", "biologie po",
  ],
  chapters,
  steps,
};

export default dierenSeizoenenNatuur;
