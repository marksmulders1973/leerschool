// Leerpad: Informatiebronnen — groep 6-8 PO.
// Cito-Doorstroomtoets onderdeel "Informatiebronnen" (10 van 40 studievaardigheden-
// vragen, 25%). Tweede grootste Toets-gat dat 4-agent-audit B 2026-05-18 vond.
//
// 5 stappen × ~5 checks = ~25 Doorstroomtoets-stijl oefenvragen.
// Referentieniveau 1F.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  highlight: "#ffd54f",
  accent: "#ff6b35",
  alt: "#42a5f5",
};

const stepEmojis = ["🔍", "📖", "📑", "✅", "🏆"];

const chapters = [
  { letter: "A", title: "Welke bron kies je?", emoji: "🔍", from: 0, to: 0 },
  { letter: "B", title: "Woordenboek & alfabetisch zoeken", emoji: "📖", from: 1, to: 1 },
  { letter: "C", title: "Inhoudsopgave & index", emoji: "📑", from: 2, to: 2 },
  { letter: "D", title: "Betrouwbaarheid + fake news", emoji: "✅", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Welke bron ────────────────────────────────────────
  {
    title: "Welke informatie-bron pas je waar?",
    explanation:
      "Voor verschillende vragen gebruik je **verschillende bronnen**. De toets test of je de juiste kiest.\n\n**Bron-soorten**:\n• **Woordenboek** *(Van Dale)*: voor **woord-betekenis**, spelling. Bv. wat betekent 'oligarchie'?\n• **Encyclopedie** *(Wikipedia, Winkler Prins)*: voor **brede info** over onderwerp. Bv. 'Hoe ontstond de Tweede Wereldoorlog?'.\n• **Atlas**: voor **kaarten + topografie**. Bv. 'Waar ligt Kazachstan?'.\n• **Schoolboek**: voor **vak-specifieke** uitleg op jouw niveau.\n• **Krantenartikel**: voor **actuele** gebeurtenissen (laatste maand/jaar).\n• **Wetenschappelijk artikel**: voor **bewezen onderzoek** (moeilijker te lezen, voor wie dieper wil).\n• **Internet-zoekmachine**: snelle eerste check, MAAR — niet alles is waar.\n• **Mensen** *(juf, ouder, expert)*: voor uitleg + persoonlijke ervaring.\n\n**Toets-truc**: kijk wat de vraag ZOEKT.\n• Betekenis-vraag → woordenboek.\n• 'Wat is...' over onderwerp → encyclopedie.\n• 'Waar ligt...' → atlas.\n• 'Wat gebeurde gisteren?' → krant.\n\n**Veel-gemaakte fout**: alles via Wikipedia. Sommige info staat sneller in een atlas of woordenboek. Bovendien: Wikipedia is niet altijd het meest betrouwbaar — daarover meer in deel D.",
    checks: [
      {
        q: "Je wilt weten **wat 'innovatie' betekent**. Welke bron?",
        options: ["Woordenboek","Atlas","Krant","Encyclopedie"],
        answer: 0,
        wrongHints: [null, "Een atlas heeft kaarten, geen woord-betekenis.", "Krant geeft nieuws, geen betekenis.", "Een encyclopedie vertelt veel over een onderwerp. Welk boek zet woorden en hun betekenis op een rij?"],
        uitlegPad: {
          stappen: [{ titel: "Betekenis = woordenboek", tekst: "Een woordenboek (Van Dale, online of papier) geeft per woord een korte betekenis. 'Innovatie = vernieuwing'. Encyclopedie geeft veel meer info dan je nodig hebt." }],
          woorden: [{ woord: "woordenboek", uitleg: "Lijst van woorden met betekenis + spelling, alfabetisch." }],
          theorie: "Toets-regel: voor woord-betekenis altijd woordenboek (Van Dale). Voor concept-uitleg encyclopedie (Wikipedia).",
          voorbeelden: [{ type: "controle", tekst: "Wat betekent 'oligarchie'? → woordenboek: 'regering door enkele personen'." }],
          basiskennis: [{ onderwerp: "Niet verwarren", uitleg: "Woordenboek = wat het woord BETEKENT. Encyclopedie = wat het FENOMEEN is (geschiedenis, voorbeelden, etc.)." }],
          niveaus: { basis: "Betekenis = woordenboek.", simpeler: "Voor wat een woord betekent → woordenboek.", nogSimpeler: "Woordenboek" },
        },
      },
      {
        q: "Je zoekt **waar Kazachstan ligt** op de wereldkaart. Welke bron?",
        options: ["Atlas","Woordenboek","Encyclopedie","Krant"],
        answer: 0,
        wrongHints: [null, "Woordenboek heeft geen kaarten.", "Een encyclopedie vertelt óver het land. Waar vind je een kaart?", "Krant heeft geen wereldkaarten."],
        uitlegPad: {
          stappen: [{ titel: "Plek = atlas", tekst: "Een atlas is een **kaartenboek**. Voor 'waar ligt...' altijd atlas (papier of online via Google Maps)." }],
          woorden: [{ woord: "atlas", uitleg: "Kaartenboek met landen, steden, water, gebergte etc." }],
          theorie: "Voor topografie + ligging → atlas. Voor land-info (bevolking, taal) → encyclopedie.",
          voorbeelden: [{ type: "controle", tekst: "'Wat zijn de hoofdsteden van Europa?' → atlas-pagina Europa." }],
          niveaus: { basis: "Waar ligt = atlas.", simpeler: "Voor kaarten en ligging → atlas.", nogSimpeler: "Atlas" },
        },
      },
      {
        q: "Je wilt weten **wat er gisteren in het journaal was**. Welke bron?",
        options: ["Krant of nieuws-site","Woordenboek","Atlas","Encyclopedie"],
        answer: 0,
        wrongHints: [null, "Woordenboek heeft geen nieuws.", "Atlas is kaartenboek, geen nieuws.", "Encyclopedie loopt achter op nieuws."],
        uitlegPad: {
          stappen: [{ titel: "Actueel nieuws = krant", tekst: "Voor 'wat gebeurde gisteren' → krant of nieuws-site (NOS, AD, Volkskrant). Encyclopedie is altijd weken/maanden achter." }],
          woorden: [{ woord: "actueel", uitleg: "Van vandaag/deze week." }],
          theorie: "Actueel → krant. Verleden (>1 jaar) → encyclopedie of geschiedenisboek.",
          voorbeelden: [{ type: "voorbeeld", tekst: "'Wie won gisteren de wedstrijd?' → sport-krant of nu.nl." }],
          niveaus: { basis: "Nieuws = krant.", simpeler: "Actueel → krant of nieuws-site.", nogSimpeler: "Krant" },
        },
      },
      {
        q: "Welke bron is het beste voor een **werkstuk over de Romeinen**?",
        options: ["Encyclopedie en schoolboek","Woordenboek en atlas","Atlas en krant","Woordenboek en krant"],
        answer: 0,
        wrongHints: [null, "Daar vind je woorden en kaarten. Staat er een verhaal over de Romeinen in?", "Kaarten en nieuws van nu. Vertellen die hoe de Romeinen leefden?", "Woordbetekenis en nieuws van vandaag. Vind je daar de geschiedenis?"],
        uitlegPad: {
          stappen: [{ titel: "Werkstuk = brede bron", tekst: "Een werkstuk vraagt **brede info** + **structuur**. Combineer **encyclopedie** (Wikipedia of Winkler Prins) voor algemeen + **schoolboek** voor jouw-niveau-uitleg. Atlas erbij als je kaarten nodig hebt." }],
          niveaus: { basis: "Voor een werkstuk over geschiedenis gebruik je een encyclopedie en je schoolboek.", simpeler: "Voor een werkstuk heb je veel informatie over één onderwerp nodig. Die vind je in een encyclopedie.", nogSimpeler: "Encyclopedie en schoolboek." },
        },
      },
      {
        q: "Welke informatie krijg je het **beste** van een expert of leerkracht?",
        options: ["Uitleg die past bij jouw vraag","Een lijst van alle feiten","Een kaart van de hele wereld","De spelling van een woord"],
        answer: 0,
        wrongHints: [null, "Daarvoor pak je een naslag-bron, geen mens.", "Daarvoor is een atlas.", "Daarvoor is een woordenboek."],
        uitlegPad: {
          stappen: [{ titel: "Mens = persoonlijke uitleg", tekst: "Een expert kan **luisteren naar JOUW vraag** en uitleg geven op JOUW niveau — beter dan een boek dat alles vertelt. Vraag de juf voor uitleg, niet voor spelling." }],
          niveaus: { basis: "Een expert of leerkracht kan uitleg geven die precies past bij jouw vraag.", simpeler: "Een mens kan naar je luisteren en antwoord geven op precies wat jij wilt weten. Een boek kan dat niet.", nogSimpeler: "Uitleg die bij jouw vraag past." },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Je wilt op een kaart zien **door welke landen de rivier de Rijn stroomt**. Welke bron pak je?",
        options: ["Atlas", "Woordenboek", "Krant", "Wetenschappelijk artikel"],
        answer: 0,
        wrongHints: [
          null,
          "Een woordenboek legt woorden uit. Staan daar kaarten in?",
          "Staat er in een krant een kaart met alle landen langs de Rijn?",
          "Zoek je bewezen onderzoek, of wil je iets op een kaart zien?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Kaart nodig = atlas",
              tekst: "Je wilt iets **op een kaart zien**: waar een rivier loopt en door welke landen. Kaarten vind je in een **atlas**.",
            },
          ],
          woorden: [
            {
              woord: "atlas",
              uitleg: "Boek (of website) vol kaarten van landen, rivieren en steden.",
            },
          ],
          theorie: "Toets-regel: gaat de vraag over een plek, een land, een rivier of een kaart? Dan kies je de atlas.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Welke zeeën liggen rond Italië? → atlas.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Kijk wat de vraag zoekt",
              uitleg: "Woord-betekenis → woordenboek. Plek of kaart → atlas. Nieuws → krant.",
            },
          ],
          niveaus: {
            basis: "Heb je een kaart nodig, dan pak je een atlas.",
            simpeler: "Wil je iets op een kaart zien, zoals een rivier door landen? Dan pak je de atlas.",
            nogSimpeler: "De atlas.",
          },
        },
      },
      {
        q: "Je snapt de uitleg over **breuken** niet goed en wilt het nog eens **op jouw niveau** lezen. Welke bron past het best?",
        options: ["Je rekenboek van school", "Atlas", "Krant", "Wetenschappelijk artikel"],
        answer: 0,
        wrongHints: [
          null,
          "Staat er rekenuitleg in een boek met kaarten?",
          "Is breuken nieuws van vandaag?",
          "Zo'n artikel is vaak moeilijk om te lezen. Is dat op jouw niveau?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Uitleg op jouw niveau = schoolboek",
              tekst: "Een **schoolboek** legt een vak uit op het niveau van jouw groep. Voor rekenuitleg pak je dus je **rekenboek**.",
            },
          ],
          woorden: [
            {
              woord: "schoolboek",
              uitleg: "Boek voor één vak, geschreven voor jouw groep of klas.",
            },
          ],
          theorie: "Toets-regel: wil je vak-uitleg die past bij jouw groep? Dan kies je het schoolboek.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Je wilt de uitleg over de tafels nog eens lezen → je rekenboek.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Wetenschappelijk artikel",
              uitleg: "Daarin staat bewezen onderzoek, maar het is moeilijk te lezen. Fijn voor wie heel diep wil gaan, niet voor gewone uitleg.",
            },
          ],
          niveaus: {
            basis: "Uitleg over schoolstof op jouw niveau vind je in je eigen schoolboek.",
            simpeler: "Snap je iets van rekenen niet? Kijk dan in je rekenboek, dat is geschreven voor jouw groep.",
            nogSimpeler: "Je rekenboek.",
          },
        },
      },
    ],
  },

  // ─── B. Woordenboek & alfabetisch zoeken ──────────────────
  {
    title: "Woordenboek — alfabetisch zoeken",
    explanation:
      "In een woordenboek staan woorden **alfabetisch**: van A naar Z. De toets test of je snel kunt zoeken.\n\n**Alfabetische volgorde — Toets-regels**:\n1. Eerst kijken naar de **eerste letter** van het woord.\n2. Gelijke eerste letter? → vergelijk **tweede letter**.\n3. Gelijke tweede ook? → derde letter, etc.\n\n**Voorbeeld**: 'banaan' komt voor 'beer' (a komt vóór e in 'b**a**naan' vs 'b**e**er').\n\n**Toets-bladzijde-truc**: bovenaan elke bladzijde staan **trefwoorden** (eerste + laatste woord op die bladzijde). Bv. 'baan — bever'. Het gezochte woord 'banaan' valt daarbinnen → die bladzijde.\n\n**Trefwoord vinden**:\n• 'kat' opzoeken? → 'k' → 'ka...' → 'kat'.\n• Hoofdvorm gebruiken: 'liep' → kijken bij 'lopen' (hele werkwoord). 'kinderen' → 'kind' (enkelvoud).\n\n**Toets-letters die op elkaar lijken**:\n• De IJ zoek je in het woordenboek bij de I (als i + j). Alleen in sommige oude lijsten, zoals telefoonboeken, stond de IJ bij de Y.\n• Ons (Nederlandse) alfabet: A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z (26 letters).",
    checks: [
      {
        q: "In het woordenboek: welk woord komt **eerst** alfabetisch?",
        options: ["kaal","kaars","kaart","kaas"],
        answer: 0,
        wrongHints: [null, "Alle woorden beginnen met kaa-. Vergelijk de vierde letter van elk woord. Is de r de vroegste letter?", "Kaars en kaart beginnen allebei met kaar-. Kaars komt al vóór kaart. Kan kaart dan het eerst komen?", "De s staat ver achter in het alfabet. Kijk naar de vierde letter van de andere woorden."],
        uitlegPad: {
          stappen: [{ titel: "Tweede letter vergelijken", tekst: "Alle vier de woorden beginnen met **kaa**. Kijk dan naar de vierde letter: kaal (**l**), kaars (**r**), kaart (**r**), kaas (**s**). De l komt vóór de r en de s in het alfabet, dus 'kaal' komt eerst." }],
          woorden: [{ woord: "alfabetisch", uitleg: "Volgorde A-B-C-D...Z." }],
          theorie: "Eerste letter hetzelfde? → tweede letter. Tweede ook hetzelfde? → derde letter. Etc.",
          voorbeelden: [{ type: "voorbeeld", tekst: "'kat' < 'koe' want a < o in 2e letter." }],
          basiskennis: [{ onderwerp: "Alfabet onthouden", uitleg: "Bij twijfel: zing het ABC-liedje door. a-b-c-d-e-f-g, h-i-j-k-l-m-n-o-p..." }],
          niveaus: { basis: "De eerste drie letters zijn bij alle woorden hetzelfde. Vergelijk daarom de vierde letter.", simpeler: "De vierde letters zijn l, r, r en s. Welke letter komt het eerst in het alfabet?", nogSimpeler: "Kaal." },
        },
      },
      {
        q: "Op een bladzijde staan bovenaan: *'koers — komkommer'*. Welk woord vind je op deze bladzijde?",
        options: ["kok","kameel","krant","koe"],
        answer: 0,
        wrongHints: [null, "'Kameel' start met 'ka' — komt VOOR 'koers' in het alfabet.", "'Krant' komt NA 'komkommer' (kr > kom).", "'Koe' is korter dan 'koers' en komt er net vóór. Dus hij staat op de bladzijde ervoor."],
        uitlegPad: {
          stappen: [{ titel: "Tussen 2 trefwoorden", tekst: "Bovenaan staan **eerste + laatste woord** van die bladzijde. 'koers — komkommer' → ergens daartussen vind je 'kok' (koers < kok < komkommer in alfabet)." }],
          woorden: [{ woord: "trefwoord", uitleg: "Eerste/laatste woord bovenaan een woordenboek-bladzijde." }],
          theorie: "Toets-truc: vergelijk gezocht woord met trefwoorden. Eerste-trefwoord ≤ gezochte ≤ laatste-trefwoord → goede bladzijde.",
          voorbeelden: [{ type: "controle", tekst: "Trefwoorden 'app — auto'. Past 'aubergine'? 'au' = 'au', dan 'b' vs 't': b komt vóór t → aubergine < auto. Dus ja, 'aubergine' staat op deze bladzijde." }],
          basiskennis: [{ onderwerp: "Wat als woord trefwoord IS", uitleg: "Als gezochte woord exact = trefwoord, dan staat het op die bladzijde (vaak helemaal bovenaan of onderaan)." }],
          niveaus: { basis: "Kok past tussen koers en komkommer.", simpeler: "koers < kok < komkommer = ja, kok zit ertussen.", nogSimpeler: "Kok" },
        },
      },
      {
        q: "Je zoekt **'liep'** in het woordenboek. Onder welk woord vind je het?",
        options: ["lopen","lieg","liep","leven"],
        answer: 0,
        wrongHints: [null, "Niet — dat is een vorm van 'liegen', een ander werkwoord.", "Niet — als losse vorm staat 't er meestal niet in; kijk naar het hele werkwoord.", "'Leven' is een ander werkwoord. Van welk werkwoord is 'liep' een vorm?"],
        uitlegPad: {
          stappen: [{ titel: "Hele werkwoord opzoeken", tekst: "Vervoegde werkwoorden (liep, loop, lopen) staan onder **hele werkwoord = 'lopen'**. Vergeet niet: 'kat-katten' staat onder 'kat' (enkelvoud)." }],
          woorden: [{ woord: "hele werkwoord", uitleg: "Vorm op -en: lopen, denken, zwemmen." }],
          theorie: "Vervoegde vorm → herleid naar hele werkwoord. Meervoud → herleid naar enkelvoud.",
          voorbeelden: [{ type: "voorbeeld", tekst: "'gegeten' → eten. 'kinderen' → kind. 'aardigste' → aardig." }],
          basiskennis: [{ onderwerp: "Onregelmatig", uitleg: "'liep' = verleden tijd van 'lopen'. 'Was' = 'zijn'. 'Zag' = 'zien'." }],
          niveaus: { basis: "Liep → lopen.", simpeler: "Vervoegd werkwoord → opzoeken onder hele werkwoord.", nogSimpeler: "Lopen" },
        },
      },
      {
        q: "Welke 3 woorden staan in **alfabetische volgorde**?",
        options: ["appel, banaan, citroen","banaan, appel, citroen","citroen, banaan, appel","appel, citroen, banaan"],
        answer: 0,
        wrongHints: [null, "Niet — appel komt VOOR banaan.", "Niet — citroen komt NA banaan.", "Niet — banaan komt VOOR citroen."],
        uitlegPad: {
          stappen: [{ titel: "A-B-C", tekst: "**a**ppel (a) → **b**anaan (b) → **c**itroen (c). A → B → C = alfabetische volgorde ✓." }],
          niveaus: { basis: "a-b-c → appel-banaan-citroen.", simpeler: "Volgorde a-b-c: appel, banaan, citroen.", nogSimpeler: "ABC" },
        },
      },
      {
        q: "Je zoekt **'oligarchie'** op in het woordenboek. Bij welk woord staat het het DICHTST in de buurt?",
        options: ["oliebol","monarchie","democratie","oven"],
        answer: 0,
        wrongHints: [null, "Niet — begint met 'm', andere bladzijde.", "Niet — begint met 'd'.", "Begint wel met 'o', maar de tweede letter is anders — verder weg."],
        uitlegPad: {
          stappen: [{ titel: "Eerste 3 letters vergelijken", tekst: "**'oli'** is de start. Op de bladzijde 'oliebol — olijfboom' zou 'oligarchie' staan. Andere woorden met 'mon-', 'dem-' staan op compleet andere bladzijden." }],
          niveaus: { basis: "Oliebol — zelfde start.", simpeler: "'Oli'-woorden bij elkaar.", nogSimpeler: "Oliebol" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welk woord komt als **laatste** in het woordenboek?",
        options: ["tas", "tak", "tafel", "taart"],
        answer: 0,
        wrongHints: [
          null,
          "Alle vier beginnen met 'ta'. Vergelijk de derde letter.",
          "Alle vier beginnen met 'ta'. Kijk naar de derde letter: een f komt vroeg in het alfabet.",
          "Kijk naar de derde letter: een a komt vroeg in het alfabet.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Derde letter vergelijken",
              tekst: "Alle vier beginnen met **ta**. Kijk dan naar de 3e letter: taart (**a**), tafel (**f**), tak (**k**), tas (**s**). A < F < K < S, dus 'tas' komt als laatste.",
            },
          ],
          woorden: [
            {
              woord: "alfabetisch",
              uitleg: "Volgorde A-B-C-D...Z.",
            },
          ],
          theorie: "Eerste letters gelijk? → tweede letter. Ook gelijk? → derde letter. Enzovoort.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "'pen' komt na 'pet'? Nee: n < t, dus 'pen' eerst.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Alfabet onthouden",
              uitleg: "Bij twijfel: zeg het alfabet op tot je bij de letter bent.",
            },
          ],
          niveaus: {
            basis: "tas (taa < taf < tak < tas).",
            simpeler: "Alle ta-, dan 3e letter: a, f, k, s. S is de laatste → tas.",
            nogSimpeler: "Tas.",
          },
        },
      },
      {
        q: "Je zoekt het woord **'raket'**. Op welke bladzijde staat het? Kijk naar de trefwoorden bovenaan.",
        options: ["radio — rand", "raam — rabarber", "rang — recht", "regen — rest"],
        answer: 0,
        wrongHints: [
          null,
          "Begin met 'raa' en 'rab'. Komt 'rak' daarvóór of daarna?",
          "Vergelijk de derde letter: k en n. Welke komt eerst?",
          "Vergelijk de tweede letter: a en e. Welke komt eerst?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Past het tussen de trefwoorden?",
              tekst: "'raket' begint met **ra**. Vergelijk de 3e letter: ra**d**io (d) < ra**k**et (k) < ra**n**d (n). Dus 'raket' valt tussen 'radio' en 'rand'.",
            },
          ],
          woorden: [
            {
              woord: "trefwoorden",
              uitleg: "Eerste en laatste woord van een bladzijde, bovenaan gedrukt.",
            },
          ],
          theorie: "Een woord staat op de bladzijde als het ná het eerste trefwoord en vóór het laatste trefwoord komt.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "'fiets' op 'fiets — film'? Ja, het is het eerste woord zelf.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Stap voor stap",
              uitleg: "Vergelijk letter voor letter. Zijn de eerste twee gelijk (ra), kijk dan naar de derde.",
            },
          ],
          niveaus: {
            basis: "radio — rand (d < k < n).",
            simpeler: "Rak... zit tussen rad... en ran...",
            nogSimpeler: "Radio — rand.",
          },
        },
      },
      {
        q: "In een verhaal lees je het woord **'bomen'**. Welk woord zoek je op in het woordenboek?",
        options: ["boom", "bom", "boon", "bodem"],
        answer: 0,
        wrongHints: [null, "Eén bom, twee bommen. Is dat hetzelfde als bomen?", "Eén boon, twee bonen. Is dat hetzelfde als bomen?", "Eén bodem, twee bodems. Past dat bij 'bomen'?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Zoek het enkelvoud",
              tekst: "In het woordenboek staat het **enkelvoud** (één). Eén **boom**, twee bomen. Dus je zoekt 'boom'.",
            },
          ],
          woorden: [
            {
              woord: "enkelvoud",
              uitleg: "De vorm voor één: boom. Meervoud = meer dan één: bomen.",
            },
          ],
          theorie: "Meervoud? Zoek het enkelvoud. Werkwoord-vorm? Zoek het hele werkwoord.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "'stoelen' → zoek 'stoel'.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Zeg 'één ...' voor het woord. Wat je dan zegt, zoek je op.",
            },
          ],
          niveaus: {
            basis: "Enkelvoud van bomen = boom.",
            simpeler: "Eén boom, twee bomen → zoek 'boom'.",
            nogSimpeler: "Boom.",
          },
        },
      },
      {
        q: "Welke drie woorden staan in **alfabetische volgorde**?",
        options: ["berg, boek, brug", "boek, berg, brug", "brug, berg, boek", "berg, brug, boek"],
        answer: 0,
        wrongHints: [
          null,
          "Alle drie beginnen met b. Vergelijk de tweede letter: o en e.",
          "Alle drie beginnen met b. Vergelijk de tweede letters: r, e en o. Welke komt eerst?",
          "Vergelijk de tweede letter van 'brug' en 'boek': r en o.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tweede letter beslist",
              tekst: "Alle drie beginnen met **b**. Kijk naar de 2e letter: b**e**rg (e), b**o**ek (o), b**r**ug (r). E < O < R, dus: berg, boek, brug.",
            },
          ],
          woorden: [
            {
              woord: "volgorde",
              uitleg: "Welke eerst komt, welke daarna.",
            },
          ],
          theorie: "Zelfde eerste letter? Dan beslist de tweede letter.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "'dak, dier, doos' → a < i < o.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Alfabet",
              uitleg: "... d-e-f ... n-o-p-q-r ... De e komt dus vóór de o, en de o vóór de r.",
            },
          ],
          niveaus: {
            basis: "berg, boek, brug (e < o < r).",
            simpeler: "Kijk naar de 2e letter: e, o, r.",
            nogSimpeler: "Berg, boek, brug.",
          },
        },
      },
      {
        q: "Je wilt het woord **'ijsbeer'** opzoeken in het woordenboek. Bij welke letter zoek je?",
        options: ["Bij de i", "Bij de y", "Bij de j", "Bij de e"],
        answer: 0,
        wrongHints: [null, "Zo deed men het soms in oude lijsten. Hoe gaat het in het woordenboek?", "Schrijf het woord op: i-j-s-b-e-e-r. Welke letter staat vooraan?", "Je hoort misschien een e, maar hoe schrijf je 'ijs'? Kijk naar de eerste letter."],
        uitlegPad: {
          stappen: [
            {
              titel: "IJ = i + j",
              tekst: "In het woordenboek zoek je de **ij** bij de **i**, alsof het een i met een j erachter is. Dus 'ijsbeer' vind je bij de i.",
            },
          ],
          woorden: [
            {
              woord: "ij",
              uitleg: "Klank die je schrijft met een i en een j, zoals in 'ijs'.",
            },
          ],
          theorie: "IJ in het woordenboek = i + j. Zoek dus bij de i.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "'ijzer' → bij de i.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Let op",
              uitleg: "Alleen in sommige oude lijsten, zoals telefoonboeken, stond de ij bij de y.",
            },
          ],
          niveaus: {
            basis: "IJ zoek je bij de i.",
            simpeler: "ijsbeer = i + j + sbeer → bij de i.",
            nogSimpeler: "Bij de i.",
          },
        },
      },
    ],
  },

  // ─── C. Inhoudsopgave & index ─────────────────────────────
  {
    title: "Inhoudsopgave & index — info zoeken in boek",
    explanation:
      "In een boek (encyclopedie, schoolboek, naslagwerk) zoek je niet alfabetisch door alles. Je gebruikt **inhoudsopgave** (vooraan) of **index** (achteraan).\n\n**Inhoudsopgave** (vooraan):\n• Lijst van **hoofdstukken** + paginanummer.\n• Geeft **overzicht** van wat er IN het boek staat.\n• Bv. 'Hoofdstuk 3 — Romeinen ... blz 45'.\n\n**Index** = **trefwoordenregister** (achteraan):\n• **Alfabetische** lijst van trefwoorden + paginanummers.\n• Geeft snel toegang tot **specifieke onderwerpen**.\n• Bv. 'Caesar ... 47, 89-91, 156'.\n\n**Welke gebruik je wanneer?**\n• Wil je weten of het boek **GEHEEL over X gaat** → inhoudsopgave.\n• Wil je weten **WAAR een specifiek woord staat** → index.\n• Bv. werkstuk Romeinen, je hebt Wikipedia + boek. In boek 'Caesar' opzoeken → **index**.\n\n**toetsvraag-favoriet**: bij encyclopedie of schoolboek vraag de Doorstroomtoets vaak: 'In welk hoofdstuk vind je info over X?' (= inhoudsopgave-vaardigheid) of 'Op welke bladzijde vind je een gegeven feit?' (= index).\n\n**Bibliotheek-klassen** *(bonus, vaak een toetsvraag)*: in de bib hebben informatieve boeken een nummer per onderwerp (geschiedenis, planten, techniek...). Maar voor groep 8 voldoende: **fictie** (verhalen) staat op **schrijver alfabetisch**, **non-fictie** (waar gebeurd) op **onderwerp-nummer**.",
    checks: [
      {
        q: "Welk **deel van een boek** geeft een lijst van hoofdstukken vooraf?",
        options: ["Inhoudsopgave","Index","Voorwoord","Glossarium"],
        answer: 0,
        wrongHints: [null, "De index staat achterin en is alfabetisch, geen lijst van hoofdstukken op volgorde.", "Een voorwoord is een tekst van de schrijver, geen lijst.", "Een glossarium is een woordenlijst met betekenissen."],
        uitlegPad: {
          stappen: [{ titel: "Vooraan = inhoudsopgave", tekst: "Vooraan in een boek staat de **inhoudsopgave** met hoofdstukken + paginanummers in volgorde. Achteraan staat de **index** (trefwoorden alfabetisch)." }],
          woorden: [{ woord: "inhoudsopgave", uitleg: "Lijst hoofdstukken met paginanummers vooraan in boek." }],
          theorie: "Vooraan = inhoudsopgave (volgorde). Achteraan = index (alfabetisch).",
          niveaus: { basis: "Vooraan in een boek staat een lijst met de hoofdstukken op volgorde en hun bladzijden.", simpeler: "De lijst van hoofdstukken vooraan in een boek heet de inhoudsopgave.", nogSimpeler: "Inhoudsopgave" },
        },
      },
      {
        q: "Je zoekt in een geschiedenisboek **alles over 'Karel V'**. Welk deel kun je het beste raadplegen?",
        options: ["Index","Inhoudsopgave","Glossarium","Voorwoord"],
        answer: 0,
        wrongHints: [null, "De inhoudsopgave noemt alleen de hoofdstukken. Welk deel noemt álle bladzijden waar een naam staat?", "Een glossarium legt moeilijke woorden uit. Zegt het op welke bladzijde Karel V staat?", "In het voorwoord vertelt de schrijver iets vooraf. Kun je daar iets opzoeken?"],
        uitlegPad: {
          stappen: [{ titel: "Specifiek = index", tekst: "Wil je **ALLE plekken** waar 'Karel V' voorkomt? → index (achteraan). 'Karel V ... 47, 89-91, 156' = drie verspreide plekken in het boek." }],
          theorie: "Index = trefwoorden + paginanummers, alfabetisch. Beste zoek-tool voor specifieke namen/begrippen.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Zoek 'Anne Frank' in een WO2-boek → kijk in de index achteraan." }],
          niveaus: { basis: "Voor één naam die op veel plekken kan staan, kijk je achterin het boek in de alfabetische lijst.", simpeler: "Zoek je een specifieke naam, dan kijk je in de index achteraan.", nogSimpeler: "Index" },
        },
      },
      {
        q: "*'Hoofdstuk 4 — Middeleeuwen ... blz 58'* — bij welk deel van een boek hoort dit?",
        options: ["Inhoudsopgave","Index","Bibliografie","Voetnoot"],
        answer: 0,
        wrongHints: [null, "De index staat op alfabet, niet op hoofdstuknummer.", "Een bibliografie is een lijst van gebruikte boeken.", "Een voetnoot is een korte uitleg onderaan een bladzijde."],
        uitlegPad: {
          stappen: [{ titel: "Hoofdstuk + pagina = inhoudsopgave", tekst: "**'Hoofdstuk 4 — Onderwerp ... blz N'** = klassieke inhoudsopgave-stijl. Volgorde: hoofdstuk 1, 2, 3, 4...." }],
          niveaus: { basis: "Een rij met hoofdstuknummers op volgorde en hun bladzijden staat vooraan in het boek.", simpeler: "'Hoofdstuk 4 ... blz 58' is een regel uit de inhoudsopgave.", nogSimpeler: "Inhoudsopgave" },
        },
      },
      {
        q: "In een bibliotheek vind je **een spannende roman over een speurder**. Waar zoek je?",
        options: ["Bij fictie","Bij non-fictie","Bij naslag","Bij stripboeken"],
        answer: 0,
        wrongHints: [null, "Bij non-fictie staan boeken over echte dingen. Is een roman over een speurder echt gebeurd?", "Bij naslag staan boeken om iets in op te zoeken, zoals een woordenboek. Lees je een roman zo?", "Is een roman een strip met plaatjes?"],
        uitlegPad: {
          stappen: [{ titel: "Roman = fictie", tekst: "Romans = **verhalen, verzonnen** = fictie-afdeling. Daar staan ze **alfabetisch op achternaam schrijver**. Bv. 'A. Achterberg' bij A, 'B. de Beer' bij B." }],
          woorden: [{ woord: "fictie", uitleg: "Verzonnen verhaal (roman, sprookje, sciencefiction)." }, { woord: "non-fictie", uitleg: "Echt gebeurd / feiten (geschiedenis, biografie, naslag)." }],
          theorie: "Fictie → alfabetisch schrijver. Non-fictie → onderwerp/classificatie-nummer.",
          niveaus: { basis: "Is een roman een echt gebeurd verhaal of een verzonnen verhaal?", simpeler: "Verzonnen verhalen staan in de bibliotheek bij elkaar. Hoe heet die afdeling?", nogSimpeler: "Fictie" },
        },
      },
      {
        q: "Wat staat er in een **glossarium** van een schoolboek?",
        options: ["Moeilijke woorden met uitleg","De hoofdstukken op volgorde","De namen van de schrijvers","Kaarten van alle landen"],
        answer: 0,
        wrongHints: [null, "De hoofdstukken op volgorde vind je vooraan in het boek. Heet dat deel een glossarium?", "Wie het boek schreef, staat op de kaft of op de eerste bladzijden. Is dat een glossarium?", "Kaarten van landen zoek je in een atlas. Is een glossarium een atlas?"],
        uitlegPad: {
          stappen: [{ titel: "Glossarium = mini-woordenboek", tekst: "Een **glossarium** is een **woordenlijst** achterin een boek met de **moeilijke vak-woorden** + **uitleg**. Bv. bij geschiedenis-boek: 'feodalisme = systeem waarbij...'" }],
          woorden: [{ woord: "glossarium", uitleg: "Lijst van moeilijke woorden met hun uitleg, achterin een boek (een soort klein woordenboek)." }],
          theorie: "toetsvraag-soms: 'Wat is het verschil tussen glossarium en index?' → glossarium geeft BETEKENIS van vakwoord, index geeft PAGINA.",
          niveaus: { basis: "Een glossarium lijkt op een klein woordenboek achterin het boek. Wat staat er in een woordenboek?", simpeler: "In een woordenboek zoek je op wat een woord betekent. Welk antwoord past daarbij?", nogSimpeler: "Moeilijke woorden met uitleg" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Je ziet in een boek de regel *'vulkaan ... 12, 34-36'*. In welk deel van het boek staat deze regel?",
        options: ["Index", "Inhoudsopgave", "Voorwoord", "Glossarium"],
        answer: 0,
        wrongHints: [
          null,
          "Daar staan hoofdstukken. Is 'vulkaan' met een rij bladzijden een hoofdstuk?",
          "Staat er in een voorwoord een rij bladzijden achter een woord?",
          "Staat daar een uitleg van het woord, of staan er bladzijden?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Trefwoord + bladzijden = index",
              tekst: "Eén **trefwoord** met **meerdere bladzijden** erachter: dat is de **index** (achterin). Daar zie je op welke bladzijden 'vulkaan' voorkomt.",
            },
          ],
          woorden: [
            {
              woord: "index",
              uitleg: "Alfabetische lijst van trefwoorden met bladzijden, achterin het boek.",
            },
          ],
          theorie: "Hoofdstuk + bladzijde = inhoudsopgave. Trefwoord + bladzijden = index.",
          niveaus: {
            basis: "Achter het woord 'vulkaan' staan alleen bladzijden. In welk deel van een boek zoek je op waar een woord voorkomt?",
            simpeler: "Achterin een boek staat een lijst met woorden van A tot Z en bladzijden erachter. Hoe heet die lijst?",
            nogSimpeler: "Index",
          },
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "'Hoofdstuk 2 — Het weer ... blz 20' → inhoudsopgave.",
            },
          ],
        },
      },
      {
        q: "Je wilt snel zien of een boek over dieren een **hoofdstuk over vogels** heeft. Waar kijk je eerst?",
        options: ["Inhoudsopgave", "Glossarium", "Voorwoord", "Achterkant van het boek"],
        answer: 0,
        wrongHints: [null, "Daar staan moeilijke woorden met uitleg. Staan daar hoofdstukken?", "Staan in het voorwoord alle hoofdstukken op een rij?", "Op de achterkant staat een korte tekst over het boek. Staan daar alle hoofdstukken?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Hoofdstukken = inhoudsopgave",
              tekst: "Wil je weten **welke hoofdstukken** er in een boek staan? Kijk vooraan in de **inhoudsopgave**. Daar staan alle hoofdstukken met hun bladzijde.",
            },
          ],
          woorden: [
            {
              woord: "hoofdstuk",
              uitleg: "Een groot deel van een boek over één onderwerp.",
            },
          ],
          theorie: "In welk hoofdstuk staat iets? → inhoudsopgave (vooraan).",
          niveaus: {
            basis: "Je zoekt een hoofdstuk. In welk deel van een boek staan alle hoofdstukken op een rij?",
            simpeler: "Vooraan in een boek staat een lijst met alle hoofdstukken en hun bladzijde. Hoe heet die lijst?",
            nogSimpeler: "Inhoudsopgave",
          },
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Heeft je aardrijkskundeboek een hoofdstuk over Europa? → inhoudsopgave.",
            },
          ],
        },
      },
      {
        q: "Waar staat de **index** meestal in een boek?",
        options: ["Achterin", "Vooraan", "In het midden", "Op de voorkant"],
        answer: 0,
        wrongHints: [null, "Wat staat er vooraan in een boek?", "Een index is een lijst om iets terug te zoeken. Ligt die midden tussen de hoofdstukken?", "Op de voorkant staan de titel en een plaatje. Past daar een lange lijst woorden?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Index = achterin",
              tekst: "De **index** staat **achterin** het boek. Vooraan staat de **inhoudsopgave**.",
            },
          ],
          woorden: [
            {
              woord: "index",
              uitleg: "Trefwoordenregister: lijst van woorden met bladzijden.",
            },
          ],
          theorie: "Vooraan = inhoudsopgave. Achterin = index.",
          niveaus: {
            basis: "Vooraan in een boek staat de inhoudsopgave. De index is een andere lijst. Waar zou die dan staan?",
            simpeler: "Je zoekt 'olifant' op in de index van een dierenboek. Blader je dan naar de eerste of naar de laatste bladzijden?",
            nogSimpeler: "Achterin",
          },
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Je zoekt 'olifant' in een dierenboek → blader naar de laatste bladzijden.",
            },
          ],
        },
      },
      {
        q: "In welke volgorde staan de woorden in een **index**?",
        options: ["Op alfabet", "Op lengte van het woord", "Op hoofdstuk", "Op hoe belangrijk ze zijn"],
        answer: 0,
        wrongHints: [
          null,
          "Hoe zou je dan snel een woord terugvinden? Denk aan het woordenboek.",
          "Op hoofdstuk zoeken doe je in een ander deel. Welke volgorde maakt zoeken naar één woord snel?",
          "Wie bepaalt wat belangrijk is? Denk aan hoe een woordenboek is geordend.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Index = alfabetisch",
              tekst: "In een **index** staan de trefwoorden **alfabetisch**: van A naar Z. Zo vind je een woord snel, net als in een woordenboek.",
            },
          ],
          woorden: [
            {
              woord: "alfabetisch",
              uitleg: "Volgorde van A naar Z.",
            },
          ],
          theorie: "Inhoudsopgave = op volgorde van het boek. Index = op alfabet.",
          niveaus: {
            basis: "Je wilt in een index snel één woord vinden. Hoe zijn de woorden in een woordenboek geordend?",
            simpeler: "In een woordenboek staat 'appel' vóór 'banaan'. Welke volgorde is dat?",
            nogSimpeler: "Alfabet",
          },
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "In een index staat 'appel' vóór 'banaan'.",
            },
          ],
        },
      },
      {
        q: "Je zoekt in de bibliotheek een **informatief boek over planeten**. Hoe staan zulke boeken geordend?",
        options: [
          "Op onderwerp",
          "Op achternaam van de schrijver",
          "Op kleur van de kaft",
          "Op dikte van het boek",
        ],
        answer: 0,
        wrongHints: [null, "Zo staan verhalenboeken. Is een boek over planeten een verhaal?", "Weet je van tevoren welke kleur een boek over planeten heeft?", "Zoek je een dik of een dun boek, of een boek over planeten?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Non-fictie = op onderwerp",
              tekst: "Een boek over planeten is **non-fictie**: het gaat over echte dingen. Non-fictie staat in de bibliotheek op **onderwerp** (met een nummer). **Fictie** (verhalen) staat op schrijver.",
            },
          ],
          woorden: [
            {
              woord: "non-fictie",
              uitleg: "Boeken over echte dingen, niet verzonnen.",
            },
          ],
          theorie: "Fictie (verzonnen) → op schrijver, alfabetisch. Non-fictie (echt) → op onderwerp.",
          niveaus: {
            basis: "Een boek over planeten is non-fictie: het gaat over echte dingen. Hoe vind je zulke boeken het snelst terug?",
            simpeler: "Je zoekt boeken óver planeten, niet van een bepaalde schrijver. Waarop zijn ze dan geordend?",
            nogSimpeler: "Onderwerp",
          },
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Een boek over paarden staat bij het onderwerp dieren.",
            },
          ],
        },
      },
    ],
  },

  // ─── D. Betrouwbaarheid + fake news ────────────────────────
  {
    title: "Betrouwbaarheid — fake news + AI + bronnen vergelijken",
    explanation:
      "Niet alle info is **waar**. De toets test of je betrouwbare van onbetrouwbare bronnen kunt onderscheiden. Belangrijk in tijd van **fake news + AI**.\n\n**Vragen om te checken**:\n1. **WIE schreef het?** Expert of anoniem? Naam-met-functie = betrouwbaarder.\n2. **WANNEER?** Recent of 10 jaar oud? Recente info weegt vaak zwaarder (behalve bij geschiedenis).\n3. **WAAR gepubliceerd?** Officiële site (overheid, krant) of random blog?\n4. **WAAROM?** Wil de schrijver iets verkopen / overtuigen? Dan oppassen.\n5. **CHECK 2e bron**: zegt een tweede onafhankelijke bron hetzelfde?\n\n**Primaire vs secundaire bron**:\n• **Primair** = direct van bron. Bv. dagboek Anne Frank, originele wet, ooggetuige.\n• **Secundair** = iemand anders die het beschrijft. Bv. schoolboek over Anne Frank.\n• De toets waardeert primaire bronnen vaak hoger (dichter bij feiten).\n\n**AI-gegenereerde teksten** (ChatGPT, Gemini):\n• AI VERZINT soms feiten (= 'hallucineren'). Niet automatisch waar!\n• Toets-tip: AI-info ALTIJD checken via 2e bron.\n\n**Wikipedia**:\n• Door **iedereen aanpasbaar** = niet altijd 100% correct.\n• Voor **algemeen** redelijk goed, voor **omstreden** opletten.\n• Toets-truc: kijk naar **bronnen-lijst onderaan** Wikipedia-artikel. Veel/goede bronnen = betrouwbaarder.\n\n**Fake news-signalen**:\n• Sensationele kop ('JE WILT NIET WETEN WAT...').\n• Anonieme schrijver.\n• Geen bron-vermelding.\n• Beweringen zonder bewijs.\n• Vaak gedeeld op social media zonder krantvermelding.",
    checks: [
      {
        q: "Welke bron is **het meest betrouwbaar** voor info over de Tweede Wereldoorlog?",
        options: ["Website van oorlogsinstituut NIOD","Video van een vlogger met veel volgers","TikTok-filmpje met duizenden likes","Blog van een schrijver zonder naam"],
        answer: 0,
        wrongHints: [null, "Veel volgers betekent niet dat iemand de feiten heeft onderzocht. Een vlogger geeft vaak vooral zijn mening.", "Veel likes zeggen hoe leuk mensen het vinden, niet of het klopt. Waar haalt de maker het vandaan?", "Als je niet weet wie het schreef, kun je ook niet nagaan of die persoon er verstand van heeft."],
        uitlegPad: {
          stappen: [{ titel: "Officiële instituten", tekst: "Het **NIOD** is een Nederlands instituut dat onderzoek doet naar de Tweede Wereldoorlog en andere oorlogen. De onderzoekers werken met echte bronnen uit die tijd en controleren elkaars werk. Voor informatie over de oorlog is zo'n instituut de betrouwbaarste keus." }],
          woorden: [{ woord: "instituut", uitleg: "Officiële organisatie voor onderzoek." }],
          theorie: "Hiërarchie: wetenschappelijk instituut > krant/overheid > Wikipedia (met bronnen) > blog > social media zonder bron.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Voor klimaat → KNMI of IPCC (wetenschap) > krantenartikel > anonieme blog." }],
          niveaus: { basis: "Vraag je bij elke bron af: wie heeft dit gemaakt, en heeft die persoon het echt onderzocht?", simpeler: "Een instituut met onderzoekers die echte bronnen bestuderen, is betrouwbaarder dan een filmpje of een blog.", nogSimpeler: "De website van het NIOD." },
        },
      },
      {
        q: "Wat is een **primaire bron** over Anne Frank?",
        options: ["Het dagboek van Anne Frank zelf","Schoolboek over Anne Frank","Film over Anne Frank","Wikipedia-artikel"],
        answer: 0,
        wrongHints: [null, "Een schoolboek is later door iemand anders geschreven. Dat is een secundaire bron.", "Een film is later door anderen gemaakt. Dat is een secundaire bron.", "Een Wikipedia-artikel vat andere bronnen samen. Dat is een secundaire bron."],
        uitlegPad: {
          stappen: [{ titel: "Primair = direct van bron", tekst: "Het dagboek **schreef Anne zelf**. Direct van de bron. Schoolboek/film/wiki = iemand anders interpreteert haar dagboek (secundair)." }],
          woorden: [{ woord: "primaire bron", uitleg: "Direct van de persoon/gebeurtenis zelf (dagboek, ooggetuige, originele wet)." }, { woord: "secundaire bron", uitleg: "Iemand anders die de primaire bron beschrijft." }],
          theorie: "Toets-tip: primaire bron = origineel. Secundair = afgeleid. Onderzoek waardeert primair hoger.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Primair: brief van Rembrandt aan Saskia. Secundair: schoolboek-uitleg over hun relatie." }],
          niveaus: { basis: "Een primaire bron komt rechtstreeks van de persoon zelf of uit die tijd. Welke bron is niet door iemand anders gemaakt?", simpeler: "Alles wat anderen later over Anne Frank maakten, is secundair. Zoek wat zij zelf schreef.", nogSimpeler: "Het dagboek dat Anne Frank zelf schreef." },
        },
      },
      {
        q: "Wat is een **signaal** dat een bericht **nepnieuws** (fake news) kan zijn?",
        options: ["Een schreeuwerige kop en geen bronvermelding","Een krantenartikel met een datum en een schrijver","Een wetenschappelijk artikel met een bronnenlijst","Een Wikipedia-artikel met twintig verwijzingen"],
        answer: 0,
        wrongHints: [null, "Een datum en de naam van de schrijver maken een artikel juist beter te controleren.", "Een bronnenlijst laat zien waar de informatie vandaan komt. Dat is een goed teken.", "Veel verwijzingen kun je zelf nakijken. Dat is juist een goed teken."],
        uitlegPad: {
          stappen: [{ titel: "Sensationeel + anoniem = fake-signalen", tekst: "Fake news-kenmerken: SCHREEUWERIGE KOPPEN, geen schrijver-naam, geen bronvermelding, vraagt om delen ('deel met iedereen!'). Een artikel met datum + auteur + bronnen = juist betrouwbaarder." }],
          niveaus: { basis: "Nepnieuws wil dat je schrikt en het snel doorstuurt. Kijk welke tekst niet laat zien waar de informatie vandaan komt.", simpeler: "Een kop die schreeuwt en geen bron noemt, is een waarschuwing.", nogSimpeler: "Een schreeuwerige kop zonder bronvermelding." },
        },
      },
      {
        q: "Een AI-chatbot zoals ChatGPT vertelt je iets voor je werkstuk. Wat doe je?",
        options: ["Checken bij een tweede bron","Direct geloven en gebruiken","Dezelfde vraag nog eens aan de chatbot stellen","Het geloven als het antwoord heel zeker klinkt"],
        answer: 0,
        wrongHints: [null, "Een chatbot kan dingen verzinnen. Weet je dan al zeker dat het klopt?", "Als de chatbot zich vergist, kan hij zich bij dezelfde vraag gewoon nog eens vergissen.", "Een chatbot klinkt bijna altijd zeker, ook als hij iets verzint."],
        uitlegPad: {
          stappen: [{ titel: "AI hallucineert", tekst: "AI zoals ChatGPT **verzint soms feiten** zonder dat 't merkt — dat heet 'hallucineren'. ALTIJD checken via Wikipedia/krant/expert voor je 't gebruikt in een werkstuk." }],
          woorden: [{ woord: "hallucineren", uitleg: "Wanneer AI iets verzint dat NIET waar is." }],
          theorie: "AI-output = goed STARTpunt, geen EINDpunt. 2e bron = altijd nodig.",
          voorbeelden: [{ type: "voorbeeld", tekst: "ChatGPT zegt: 'Napoleon won bij Waterloo'. Check → klopt niet, hij verloor er." }],
          niveaus: { basis: "Een chatbot kan dingen verzinnen die niet kloppen. Hoe kom je erachter of het antwoord waar is?", simpeler: "Zoek hetzelfde op in een boek, een krant of op een betrouwbare website, en vergelijk.", nogSimpeler: "Controleren bij een tweede bron." },
        },
      },
      {
        q: "Welk Wikipedia-artikel is waarschijnlijk **het meest betrouwbaar**?",
        options: ["Artikel met 50 bronvermeldingen onderaan","Een heel lang artikel zonder bronnen","Artikel met de waarschuwing 'omstreden'","Artikel van gisteren, zonder bronnen"],
        answer: 0,
        wrongHints: [null, "Een lange tekst is nog geen bewijs. Kun je nagaan waar de informatie vandaan komt?", "Die waarschuwing betekent dat mensen het oneens zijn over wat er staat.", "Nieuw is niet hetzelfde als betrouwbaar. Kun je de informatie hier controleren?"],
        uitlegPad: {
          stappen: [{ titel: "Bronnen-aantal = betrouwbaarheid-signaal", tekst: "Veel **goede** bronnen onderaan = veel mensen hebben dit nagekeken. Bronnen kun je zelf naast leggen. Geen bronnen = niet beter dan een meningstekst." }],
          theorie: "Wikipedia-checklist: hoeveel bronnen? Bekende bronnen? 'Omstreden'-banner? Recent bewerkt?",
          niveaus: { basis: "Vraag je af: bij welk artikel kun je zelf nakijken waar de informatie vandaan komt?", simpeler: "Bronvermeldingen laten zien waar de schrijver zijn informatie vond. Die kun je zelf controleren.", nogSimpeler: "Het artikel met 50 bronvermeldingen." },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Een website over tandpasta is gemaakt **door een tandpastafabriek**. Waar moet je extra op letten?",
        options: [
          "Dat de maker iets wil verkopen",
          "Dat de tekst te kort is",
          "Dat er plaatjes in staan",
          "Dat de letters te klein zijn",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Is een korte tekst meteen onbetrouwbaar?",
          "Zijn plaatjes een probleem? Denk aan wie de site maakte en waarom.",
          "Denk aan de vraag: WAAROM is het geschreven?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "WAAROM is het geschreven?",
              tekst: "Een fabriek wil zijn **product verkopen**. Dan vertelt de site vooral de goede kanten. Daarom: **oppassen** en ook een andere bron lezen.",
            },
          ],
          woorden: [
            {
              woord: "reclame",
              uitleg: "Tekst of beeld die je iets wil laten kopen.",
            },
          ],
          theorie: "Check-vraag 4: wil de schrijver iets verkopen of je overtuigen? Dan extra opletten.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Een snoepmerk zegt dat snoep gezond is → check bij een andere bron.",
            },
          ],
          niveaus: {
            basis: "Denk aan de vraag: waarom heeft deze fabriek de website gemaakt?",
            simpeler: "Een bedrijf vertelt graag vooral de goede dingen over zijn eigen product.",
            nogSimpeler: "De maker wil iets verkopen.",
          },
        },
      },
      {
        q: "Welke bron over de bouw van de Afsluitdijk is een **secundaire** bron?",
        options: [
          "Een schoolboek dat erover vertelt",
          "Een foto die een bouwvakker toen maakte",
          "Het dagboek van een bouwvakker",
          "Een brief van een arbeider uit die tijd",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Wie maakte deze foto, en was die persoon er zelf bij?",
          "Schreef deze bouwvakker het zelf op, toen hij erbij was?",
          "Schreef iemand die er zelf bij was deze brief?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Secundair = later beschreven",
              tekst: "Een **secundaire** bron is gemaakt door iemand die er **niet zelf bij was** en het later beschrijft, zoals een **schoolboek**. Foto, dagboek en brief van mensen die er toen bij waren zijn **primair**.",
            },
          ],
          woorden: [
            {
              woord: "secundair",
              uitleg: "Uit de tweede hand: iemand anders vertelt erover.",
            },
          ],
          theorie: "Primair = direct van toen (ooggetuige, dagboek, foto). Secundair = later beschreven (schoolboek, samenvatting).",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Een brief van een soldaat = primair. Een spreekbeurt over die soldaat = secundair.",
            },
          ],
          niveaus: {
            basis: "Een secundaire bron is later gemaakt door iemand die er zelf niet bij was. Welke bron past daarbij?",
            simpeler: "Dagboeken, foto's en brieven uit die tijd zijn primair. Een tekst die het later navertelt, is secundair.",
            nogSimpeler: "Het schoolboek.",
          },
        },
      },
      {
        q: "Je wilt weten wat **de nieuwste telefoons van dit jaar** kunnen. Welke tekst kies je?",
        options: [
          "Een artikel van deze maand",
          "Een artikel van tien jaar geleden",
          "Een oud boek over telefoons",
          "Een tekst zonder datum",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Stonden de telefoons van dit jaar toen al in de krant?",
          "Stonden de telefoons van dit jaar al in een oud boek?",
          "Weet je bij deze tekst of hij nieuw of oud is?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "WANNEER is het geschreven?",
              tekst: "Over iets **nieuws** wil je **recente** info. Een artikel van **deze maand** gaat over de telefoons van nu. Een oude tekst kent de nieuwste telefoons nog niet.",
            },
          ],
          woorden: [
            {
              woord: "recent",
              uitleg: "Van kort geleden.",
            },
          ],
          theorie: "Check-vraag 2: wanneer is het geschreven? Bij nieuwe dingen weegt recente info zwaarder.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Wie speelt dit seizoen in het Nederlands elftal? → zoek een recent artikel.",
            },
          ],
          niveaus: {
            basis: "Kijk bij elke tekst wanneer hij geschreven is. Kan een oude tekst al iets weten over telefoons van dit jaar?",
            simpeler: "Over nieuwe dingen lees je in een nieuwe tekst.",
            nogSimpeler: "Het artikel van deze maand.",
          },
        },
      },
      {
        q: "Wat betekent het als een AI-chatbot **'hallucineert'**?",
        options: [
          "Hij verzint dingen die niet kloppen",
          "Hij geeft heel langzaam antwoord",
          "Hij praat in een andere taal",
          "Hij kan geen plaatjes maken",
        ],
        answer: 0,
        wrongHints: [null, "Gaat het om hoe snel hij antwoordt, of om of het klopt?", "Gaat het hier om de taal, of om of het antwoord klopt?", "Gaat het om plaatjes, of om of het antwoord klopt?"],
        uitlegPad: {
          stappen: [
            {
              titel: "AI kan verzinnen",
              tekst: "Een AI-chatbot schrijft soms **feiten op die niet kloppen**, alsof ze waar zijn. Dat heet **hallucineren**. Daarom check je AI-info altijd met een tweede bron.",
            },
          ],
          woorden: [
            {
              woord: "hallucineren",
              uitleg: "Bij AI: dingen verzinnen die niet waar zijn.",
            },
          ],
          theorie: "AI is niet automatisch waar. Check AI-info altijd via een tweede betrouwbare bron.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Een chatbot noemt een boek dat niet bestaat → hallucinatie.",
            },
          ],
          niveaus: {
            basis: "Bij mensen betekent hallucineren: dingen zien die er niet zijn. Wat zou dat bij een chatbot betekenen?",
            simpeler: "Een chatbot die hallucineert, geeft een antwoord dat echt lijkt maar niet waar is.",
            nogSimpeler: "Hij verzint dingen die niet kloppen.",
          },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ─────────────────────────────────
  {
    title: "Eindopdracht — bronnen door elkaar",
    explanation:
      "Mix van bron-kiezen + alfabetisch + inhoudsopgave/index + betrouwbaarheid. Doorstroomtoets-stijl door elkaar.\n\n**Strategie eindopdracht**:\n• Lees de hele vraag — wat ZOEKT de leerling?\n• Welke bron past het beste?\n• Twijfel? Sluit duidelijk foute opties uit.\n\nVeel succes!",
    checks: [
      {
        q: "Voor een **werkstuk over duurzaamheid** — welke combinatie van bronnen is het BESTE?",
        options: ["Wetenschapsartikel + krant + expert","TikTok + Instagram + YouTube-filmpjes","Woordenboek + atlas + stripboek","Wikipedia + een blog + een reclame"],
        answer: 0,
        wrongHints: [null, "Filmpjes geven vaak meningen, geen onderzoek.", "Staat er in een woordenboek, atlas of stripboek veel over duurzaamheid?", "Is een blog of reclame betrouwbaar?"],
        uitlegPad: {
          stappen: [{ titel: "Combineren = sterker werkstuk", tekst: "Werkstuk-best practice: combineer **3 soorten bronnen** — wetenschap (feiten), actueel (krant/nieuws) en persoonlijk (interview). Niet 1 bron klakkeloos overnemen." }],
          niveaus: { basis: "Voor een goed werkstuk gebruik je bronnen die je kunt vertrouwen. Liefst verschillende soorten: één met onderzoek, één met nieuws en iemand die er veel van weet.", simpeler: "Filmpjes, reclame en een stripboek geven vooral meningen of plaatjes. Zoek de combinatie met onderzoek, nieuws en iemand die er verstand van heeft.", nogSimpeler: "Een wetenschapsartikel, een krant en een expert vormen samen de beste combinatie." },
        },
      },
      {
        q: "Welk woord komt **derde** alfabetisch: kraan, krant, kralen?",
        options: ["krant","kraan","kralen","ze staan alle drie op dezelfde plek"],
        answer: 0,
        wrongHints: [null, "Alle drie beginnen met 'kra'. Vergelijk daarom de 4e letter van alle drie de woorden.", "Kralen heeft als 4e letter een l. Heeft een ander woord een 4e letter die later in het alfabet komt?", "In het woordenboek heeft elk woord zijn eigen plek. Vergelijk de 4e letter."],
        uitlegPad: {
          stappen: [{ titel: "4e letter vergelijken bij gelijke 1-3", tekst: "Alle 3 beginnen met 'kra'. Kijk 4e letter: kra**a**n (a) < kra**l**en (l) < kra**n**t (n). A<L<N → kraan, kralen, krant. Derde = krant." }],
          niveaus: { basis: "Alle drie de woorden beginnen met 'kra'. Kijk dus naar de 4e letter van elk woord en zet die op volgorde van het alfabet.", simpeler: "De 4e letters zijn: kraan heeft een a, kralen een l en krant een n. Welke letter komt in het alfabet als laatste?", nogSimpeler: "De volgorde is kraan, kralen, krant. Krant komt als derde." },
        },
      },
      {
        q: "Een tekst zegt: *'Wist je dat de maan eigenlijk een spiegel is? Deel deze waarheid!'* Wat doe je?",
        options: ["Niet delen en eerst controleren","Direct delen op WhatsApp","Het geloven, want het staat er toch","Delen, maar er 'misschien' bij zetten"],
        answer: 0,
        wrongHints: [null, "Als je het deelt, geloven je vrienden het misschien ook. Weet je al of het klopt?", "Omdat iets ergens staat, is het nog niet waar. Hoe kom je erachter?", "Ook met 'misschien' erbij gaat het bericht verder rond. Weet je al of het klopt?"],
        uitlegPad: {
          stappen: [{ titel: "Fake news-signaal", tekst: "Sensationele 'wist je dat' + 'deel!' + onlogische claim ('maan = spiegel') + geen bronvermelding = **fake news**. Niet delen, niet geloven, eerst check via NASA of wetenschapssite." }],
          niveaus: { basis: "Kijk naar de zin 'Deel deze waarheid!'. Een bericht dat je vraagt om het snel door te sturen, zonder te zeggen waar het vandaan komt, is verdacht.", simpeler: "Of de maan een spiegel is, kun je nakijken in een boek of op een site over sterrenkunde. Wat doe je dus voordat je iets deelt?", nogSimpeler: "Niet delen en eerst controleren of het klopt." },
        },
      },
      {
        q: "Je hebt 30 seconden om in een **geschiedenisboek** info over **'Karel V'** te vinden. Waar kijk je?",
        options: ["Index achteraan","Hoofdstuk 1","Voorwoord","Hele boek doorbladeren"],
        answer: 0,
        wrongHints: [null, "Hoofdstuk 1 gaat over één onderwerp. Weet je zeker dat Karel V daarin staat?", "In het voorwoord vertelt de schrijver waarom hij het boek schreef. Vind je daar snel informatie over Karel V?", "In 30 seconden het hele boek? Welk deel van het boek wijst je snel de goede bladzijde?"],
        uitlegPad: {
          stappen: [{ titel: "Specifieke naam = index", tekst: "**Index achteraan** = alfabetisch. Zoek 'Karel V' → pagina-nummers. Direct naar de juiste plek. 30 sec genoeg." }],
          niveaus: { basis: "Je zoekt één naam in een dik boek. Welk deel van het boek is een lijst met namen en woorden, met de bladzijden erachter?", simpeler: "Achterin het boek staat een lijst van A tot Z. Daar zoek je Karel V op en zie je meteen op welke bladzijde hij staat.", nogSimpeler: "Je kijkt in de index achterin het boek." },
        },
      },
      {
        q: "In welke bron zoek je op hoe je het woord **'metaforisch'** spelt?",
        options: ["Woordenboek","Encyclopedie","Atlas","Krant"],
        answer: 0,
        wrongHints: [null, "Een encyclopedie vertelt veel over een onderwerp. In welk boek zoek je op hoe je een woord schrijft?", "In een atlas staan kaarten van landen, geen spelling van woorden.", "In een krant staan nieuwsberichten. Daar zoek je geen spelling op."],
        uitlegPad: {
          stappen: [{ titel: "Spelling = woordenboek", tekst: "Woordenboek geeft **spelling + betekenis** per woord. Voor spelling-check: woordenboek (Van Dale) of het online Groene Boekje." }],
          niveaus: { basis: "Je wilt weten hoe je een woord schrijft. In welk boek staan alle woorden op alfabet, met hun spelling en betekenis?", simpeler: "Een atlas heeft kaarten, een krant heeft nieuws en een encyclopedie vertelt over onderwerpen. Welk boek is er speciaal voor woorden?", nogSimpeler: "Je zoekt het op in een woordenboek." },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welk woord staat in het woordenboek **tussen 'vis' en 'vlag'**?",
        options: ["vitamine", "vier", "vlek", "vork"],
        answer: 0,
        wrongHints: [
          null,
          "Vergelijk 'vie' met 'vis': komt e vóór of na s?",
          "Vergelijk 'vle' met 'vla': komt e vóór of na a?",
          "Vergelijk de tweede letter met die van 'vlag'.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Letter voor letter",
              tekst: "'vi**t**amine' komt na 'vi**s**' (s < t). En 'v**i**tamine' komt vóór 'v**l**ag' (i < l). Dus 'vitamine' staat ertussen. 'vier' komt vóór 'vis' (e < s); 'vlek' en 'vork' komen na 'vlag'.",
            },
          ],
          niveaus: {
            basis: "Het woord moet ná 'vis' komen en vóór 'vlag'. Vergelijk bij elk woord letter voor letter met 'vis' en met 'vlag'.",
            simpeler: "Een woord dat begint met 'vi' en waarvan de 3e letter na de s komt, staat na 'vis'. En 'vi' komt altijd vóór 'vl'. Welk woord past?",
            nogSimpeler: "Vitamine staat tussen 'vis' en 'vlag'.",
          },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const informatiebronnenPo = {
  id: "informatiebronnen-po",
  title: "Informatiebronnen (groep 6-8, Doorstroomtoets-stof)",
  emoji: "🔍",
  level: "groep6-8",
  subject: "taal",
  referentieNiveau: "1F",
  sloThema: "Studievaardigheden — informatiebronnen / Doorstroomtoets-onderdeel",
  prerequisites: [
    { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen-strategie", niveau: "po-1F" },
    { id: "digitale-geletterdheid-po", title: "Digitale geletterdheid", niveau: "po-1F" },
  ],
  intro:
    "Bronnen voor de Doorstroomtoets — woordenboek, atlas, encyclopedie, inhoudsopgave + index, betrouwbaarheid + fake news. 5 stappen × ~5 vragen. ~15 min.",
  triggerKeywords: [
    "informatiebron", "bron", "woordenboek", "alfabetisch",
    "encyclopedie", "atlas", "index", "inhoudsopgave",
    "betrouwbaar", "fake news", "primaire bron", "secundaire bron",
    "wikipedia", "ChatGPT", "AI", "hallucineren",
    "studievaardigheden", "naslag", "bibliotheek",
  ],
  chapters,
  steps,
};

export default informatiebronnenPo;
