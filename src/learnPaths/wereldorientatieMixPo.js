// Leerpad: Wereldoriëntatie Cito-stijl mix — groep 7-8
// Gemengd geschiedenis + aardrijkskunde + natuur in Cito-stijl.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  hist: "#8d6e63",
  aard: "#42a5f5",
  natuur: "#66bb6a",
  goud: "#ffd54f",
};

const stepEmojis = ["📜", "🗺️", "🌱", "🧪", "🏆"];

const chapters = [
  { letter: "A", title: "NL-geschiedenis tijdvakken", emoji: "📜", from: 0, to: 0 },
  { letter: "B", title: "Aardrijkskunde NL + wereld", emoji: "🗺️", from: 1, to: 1 },
  { letter: "C", title: "Natuur + biologie", emoji: "🌱", from: 2, to: 2 },
  { letter: "D", title: "Wetenschap + techniek", emoji: "🧪", from: 3, to: 3 },
  { letter: "E", title: "Eindmix", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. NL-geschiedenis tijdvakken ────────────────────────
  {
    title: "NL-geschiedenis — tijdvakken-overzicht",
    explanation:
      "Op de Doorstroomtoets / Cito-eindtoets komen vragen over **wereldoriëntatie** in gemengde vorm. Geschiedenis + aardrijkskunde + natuur worden door elkaar gevraagd. Goed om **overzichts-kennis** te hebben.\n\n**Tien tijdvakken NL-geschiedenis** (officiële indeling sinds 2007):\n\n1. **Tijd van jagers + boeren** (tot 3000 v.Chr.): prehistorie, geen schrift.\n2. **Tijd van Grieken + Romeinen** (3000 v.Chr.-500 n.Chr.): Oudheid, Romeinen ook in NL.\n3. **Tijd van monniken + ridders** (500-1000): Vroege Middeleeuwen.\n4. **Tijd van steden + staten** (1000-1500): Late Middeleeuwen, kastelen, gilden.\n5. **Tijd van ontdekkers + hervormers** (1500-1600): Renaissance, Reformatie, ontdekkings-reizen.\n6. **Tijd van regenten + vorsten** (1600-1700): Gouden Eeuw, VOC, Rembrandt.\n7. **Tijd van pruiken + revoluties** (1700-1800): Verlichting, Franse Revolutie.\n8. **Tijd van burgers + stoommachines** (1800-1900): industriële revolutie, NL koninkrijk.\n9. **Tijd van wereldoorlogen** (1900-1950): WO1, WO2, crisis 1929.\n10. **Tijd van televisie + computer** (1950-nu): wederopbouw, EU, internet.\n\n**Belangrijke jaartallen** (Cito-favoriet):\n• **1492**: Columbus ontdekt Amerika.\n• **1602**: VOC opgericht in Amsterdam — eerste multinationale onderneming.\n• **1648**: Vrede van Münster — NL onafhankelijk van Spanje (na Tachtigjarige Oorlog 1568-1648).\n• **1648**: einde 80-jarige oorlog.\n• **1789**: begin Franse Revolutie (bestorming Bastille 14 juli).\n• **1813**: NL bevrijd van Napoleon.\n• **1815**: Koninkrijk der Nederlanden gesticht (Willem I).\n• **1848**: nieuwe grondwet (Thorbecke), ministerieel verantwoordelijk.\n• **1914-1918**: Eerste Wereldoorlog (NL neutraal).\n• **1929**: beurskrach Wall Street, begin Crisis.\n• **1940-1945**: NL bezet door Duitsland in WO2.\n• **10 mei 1940**: Duitse inval NL.\n• **14 mei 1940**: bombardement Rotterdam.\n• **5 mei 1945**: NL bevrijd.\n• **1948**: Universele Verklaring Rechten Mens.\n• **1953**: Watersnoodramp Zeeland (1836 doden).\n• **1957**: oprichting EEG (basis EU).\n• **1969**: man op de maan (Apollo 11, VS).\n• **1989**: val Berlijnse Muur, einde Koude Oorlog symbolisch.\n• **2002**: euro-munt ingevoerd in NL.\n• **2020-2023**: COVID-19-pandemie.\n\n**Beroemde NL'ers**:\n• **Anne Frank** (1929-1945): Joodse onderduikster Amsterdam, dagboek bewaard, sterft Bergen-Belsen.\n• **Willem van Oranje** (1533-1584): leider 80-jarige oorlog, 'Vader des Vaderlands', vermoord Delft.\n• **Rembrandt van Rijn** (1606-1669): schilder Gouden Eeuw, *De Nachtwacht*.\n• **Johannes Vermeer** (1632-1675): schilder, *Meisje met de parel*.\n• **Vincent van Gogh** (1853-1890): post-impressionist, *Sterrennacht*, *Zonnebloemen*.\n• **Aletta Jacobs** (1854-1929): eerste vrouwelijke arts NL + vrouwenkiesrecht-activist.\n• **Mata Hari** (1876-1917): NL-spionne in WO1, geëxecuteerd door FR.\n• **Erasmus van Rotterdam** (1466-1536): Renaissance-humanist, *Lof der Zotheid*.\n• **Antoni van Leeuwenhoek** (1632-1723): Delftse microscoop-uitvinder, ontdekte bacteriën.\n\n**Cito-typische vraag**:\n'Op welk plaatje zie je een schilderij uit de Gouden Eeuw?'\n→ herken Rembrandt-stijl (clair-obscur, donkere achtergrond, NL-gezicht).",
    checks: [
      {
        q: "In welk **tijdvak** valt de Gouden Eeuw (1600s)?",
        options: ["Tijd van regenten + vorsten","Tijd van burgers + stoommachines","Tijd van pruiken + revoluties","Tijd van wereldoorlogen"],
        answer: 0,
        wrongHints: [null, "Niet — 1800s.", "Niet — 1700s.", "Niet — 1900s."],
        uitlegPad: {
          stappen: [{ titel: "1600-1700", tekst: "**Gouden Eeuw NL** valt in **Tijd van regenten + vorsten (1600-1700)** = tijdvak 6 (van 10). Welvaart door VOC + handel. Rembrandt + Vermeer + Hugo de Groot leefden toen. Andere termen: regenten = bestuurders, vorsten = koningen elders." }],
          niveaus: { basis: "Regenten + vorsten. A.", simpeler: "Gouden Eeuw = 1600s = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wanneer was de **Watersnoodramp**?",
        options: ["1953","1916","1995","2021"],
        answer: 0,
        wrongHints: [null, "Niet — markeerde Afsluitdijk-bouw.", "Niet — kleinere overstromingen Limburg.", "Niet — recente kleinere."],
        uitlegPad: {
          stappen: [{ titel: "1 februari 1953", tekst: "**Watersnoodramp 1 februari 1953**: zware storm + springtij → dijken breken in Zeeland + Zuid-Holland. **1836 doden** + 200.000 dieren + 47.000 huizen verwoest. Reactie: **Deltawerken** gebouwd 1958-1997 (Oosterscheldekering, Maeslantkering)." }],
          niveaus: { basis: "1953. A.", simpeler: "1953 = watersnood = A.", nogSimpeler: "1953 = A." },
        },
      },
      {
        q: "Welk **bedrijf werd 1602 opgericht** in Amsterdam?",
        options: ["VOC","KLM","Philips","Shell"],
        answer: 0,
        wrongHints: [null, "Veel later (1919).", "Veel later (1891).", "Veel later (1907)."],
        uitlegPad: {
          stappen: [{ titel: "Eerste multinational", tekst: "**VOC** (Verenigde Oostindische Compagnie) opgericht 1602 in Amsterdam. **Eerste multinationale onderneming** wereldwijd. Handel met Azië (specerijen, thee, koffie). Bestond tot 1799. Donkere zijde: betrokken bij slavenhandel + koloniale onderdrukking Indonesië." }],
          niveaus: { basis: "VOC. A.", simpeler: "1602 = VOC = A.", nogSimpeler: "VOC = A." },
        },
      },
      {
        q: "Wie was **Anne Frank**?",
        options: ["Joodse onderduikster Amsterdam, dagboek bewaard","Schilder","Koningin","Schrijfster fantasy"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet primair — wel schrijver."],
        uitlegPad: {
          stappen: [{ titel: "Achterhuis Amsterdam", tekst: "**Anne Frank** (1929-1945, Frankfurt → Amsterdam): Joodse onderduikster met familie + 4 anderen in **Achterhuis Prinsengracht 263**, 1942-1944. Opgepakt 4 augustus 1944, deported, stierf typhus in **Bergen-Belsen** februari/maart 1945. **Dagboek** bewaard door Miep Gies, na oorlog uitgegeven door vader Otto Frank → wereldberoemd document over Holocaust." }],
          niveaus: { basis: "Joodse onderduikster. A.", simpeler: "Anne = onderduiken = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wanneer werd **NL bevrijd** in WO2?",
        options: ["5 mei 1945","14 mei 1940","8 mei 1945","5 mei 1944"],
        answer: 0,
        wrongHints: [null, "Begin bezetting.", "Algemene Europa-bevrijding.", "Niet — D-Day was juni 1944."],
        uitlegPad: {
          stappen: [{ titel: "Bevrijdingsdag", tekst: "**5 mei 1945**: NL volledig bevrijd door geallieerden (Canadezen + Britten + Amerikanen). Bezet sinds 10 mei 1940. Capitulatie Duits leger NL ondertekend hotel De Wereld Wageningen door generaal Blaskowitz. **Bevrijdingsdag NL** elke 5 mei sinds 1990 nationale feestdag. **4 mei** = Dodenherdenking." }],
          niveaus: { basis: "5 mei 1945. A.", simpeler: "5-5-45 = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── B. Aardrijkskunde NL + wereld ────────────────────────
  {
    title: "Aardrijkskunde — NL + wereld",
    explanation:
      "**Nederland in een notendop**:\n• Oppervlakte: 41.500 km² (klein).\n• Inwoners: ~18 mln (2024).\n• Hoofdstad: **Amsterdam** (maar regering zit Den Haag!).\n• 12 provincies: Noord-Holland, Zuid-Holland, Utrecht, Gelderland, Overijssel, Drenthe, Groningen, Friesland, Flevoland, Noord-Brabant, Limburg, Zeeland.\n• Talen: Nederlands, Fries (officieel in Friesland).\n• **26% NL ligt onder NAP** (Normaal Amsterdams Peil = zeeniveau).\n\n**Belangrijke geografie**:\n• **Rivieren**: Rijn (Lobith → Rotterdam), Maas, Waal, IJssel, Schelde.\n• **Meren**: IJsselmeer (vroegere Zuiderzee, afgesloten 1932 met Afsluitdijk), Markermeer.\n• **Hoogste 'berg'**: Vaalserberg (Limburg) — 322 m. (Eigenlijk laag).\n• **Laagste punt**: Nieuwerkerk aan den IJssel, −6,7 m onder NAP.\n• **Polders + dijken**: groot deel west-NL kunstmatig drooggelegd. Beemster (1612), Flevoland (1957-1968 — jongste provincie).\n• **Wadden-eilanden**: Texel, Vlieland, Terschelling, Ameland, Schiermonnikoog.\n• **Deltawerken**: Maeslantkering, Oosterscheldekering, etc. (gebouwd 1953-1997 na Watersnoodramp).\n\n**Werelddelen + werelddeel-namen**:\n• **Europa** (~745 mln inwoners).\n• **Azië** (~4,7 mld — grootste).\n• **Afrika** (~1,4 mld).\n• **Noord-Amerika** (~580 mln).\n• **Zuid-Amerika** (~440 mln).\n• **Oceanië / Australië** (~45 mln — kleinste).\n• **Antarctica** (geen permanente bewoners).\n\n**Wereld-cijfers**:\n• ~8 mld mensen wereldwijd (2024).\n• Grootste landen oppervlakte: **Rusland, Canada, VS, China, Brazilië**.\n• Grootste landen bevolking: **India** (~1,44 mld), China (~1,42 mld), VS, Indonesië, Pakistan.\n• Klimaten: tropisch (evenaar) → woestijn (subtropisch) → gematigd (NL!) → toendra → poolklimaat.\n\n**Wereldsteden**:\n• **Londen** (UK, hoofdstad).\n• **Parijs** (Frankrijk).\n• **Berlijn** (Duitsland).\n• **Madrid** (Spanje).\n• **Rome** (Italië).\n• **Tokyo** (Japan, grootste metropool wereld ~37 mln).\n• **Peking + Shanghai** (China).\n• **New York** (VS).\n• **Mexico-Stad**.\n• **São Paulo** (Brazilië).\n• **Caïro** (Egypte).\n\n**EU + Europa**:\n• 27 EU-lidstaten sinds Brexit (2020 UK uit).\n• 20 landen met euro (eurozone, sinds Kroatië 2023).\n• Hoofdstad EU: **Brussel** (Commissie + Parlement deels).\n• Andere EU-steden: Straatsburg (Parlement plenair), Luxemburg (Hof).\n• Schengen: open grenzen tussen lidstaten.\n\n**Klimaat + klimaatverandering**:\n• **Broeikaseffect**: CO₂ houdt warmte vast in atmosfeer.\n• Sinds 1880: aarde **~1,2°C warmer**.\n• Parijs-akkoord 2015: doel onder 1,5-2°C blijven.\n• Gevolgen: **zeespiegelstijging**, droogtes, hittegolven, smeltende ijskappen.\n• NL: door zeespiegelstijging extra dijken nodig in toekomst.\n• Oorzaken: fossiele brandstoffen (kolen, olie, gas), ontbossing, vee-houderij.\n\n**Energie**:\n• Fossiel: olie, gas, kolen (vervuilen).\n• Hernieuwbaar: zon, wind, water (waterkracht), geothermie, biomassa.\n• Kernenergie: weinig CO₂ maar afval-probleem.\n• NL: groot deel nog gas + olie. **Groningen-gasveld** afgebouwd door aardbevingen.\n\n**Topografie NL** (Cito-favoriet!):\nKlik op kaart-vragen vaak. Onthoud:\n• **Provincies + hoofdsteden**.\n• **Grote steden + waar liggen**: Amsterdam (NH), Rotterdam (ZH), Den Haag (ZH), Utrecht (Utr), Eindhoven (NB), Groningen (Gr), Maastricht (Lim), Arnhem (Geld), Enschede (Ov), Leeuwarden (Fr).\n• **Rivieren-lopen**: Rijn vanaf Lobith → Waal+Lek → Rotterdam (verdeling Pannerden).",
    checks: [
      {
        q: "Hoeveel **provincies** heeft Nederland?",
        options: ["12","11","13","14"],
        answer: 0,
        wrongHints: [null, "Niet correct (Flevoland erbij sinds 1986).", "Niet correct.", "Te veel."],
        uitlegPad: {
          stappen: [{ titel: "Inclusief Flevoland", tekst: "**12 provincies NL**: Noord-Holland, Zuid-Holland, Utrecht, Gelderland, Overijssel, Drenthe, Groningen, Friesland, **Flevoland** (sinds 1986!), Noord-Brabant, Limburg, Zeeland. **Flevoland = jongste provincie**, ingepolderd 1957-1968." }],
          niveaus: { basis: "12. A.", simpeler: "NL = 12 prov = A.", nogSimpeler: "12 = A." },
        },
      },
      {
        q: "**Hoofdstad van Nederland** is:",
        options: ["Amsterdam","Den Haag","Rotterdam","Utrecht"],
        answer: 0,
        wrongHints: [null, "Niet — regering zit daar, niet hoofdstad.", "Niet — grootste haven.", "Niet — vierde stad."],
        uitlegPad: {
          stappen: [{ titel: "Amsterdam vs Den Haag", tekst: "**Amsterdam = hoofdstad NL** (Grondwet art 32). **Den Haag** = regerings-zetel (parlement + ministeries + koning). Internationaal Hof + ICC ook in Den Haag. Klassieke val: 'wat is hoofdstad?' = Amsterdam. 'Wat is regerings-zetel?' = Den Haag." }],
          niveaus: { basis: "Amsterdam. A.", simpeler: "Hoofdstad = Adam = A.", nogSimpeler: "Adam = A." },
        },
      },
      {
        q: "Het **grootste werelddeel qua bevolking** is:",
        options: ["Azië (~4,7 mld)","Afrika","Europa","Noord-Amerika"],
        answer: 0,
        wrongHints: [null, "Nummer 2 (~1,4 mld).", "Nummer 3 (~745 mln).", "~580 mln."],
        uitlegPad: {
          stappen: [{ titel: "Azië-dominantie", tekst: "**Azië** = grootste werelddeel qua bevolking: ~**4,7 miljard mensen** (~60% wereldbevolking). Inclusief China (1,4 mld) + India (1,44 mld) + Indonesië + Pakistan + Bangladesh + Japan + Filipijnen + etc. **Afrika** is op 2: ~1,4 mld + snelst groeiend." }],
          niveaus: { basis: "Azië. A.", simpeler: "Grootste = Azië = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Hoeveel **EU-lidstaten** zijn er nu (sinds Brexit)?",
        options: ["27","28","26","30"],
        answer: 0,
        wrongHints: [null, "Vóór Brexit 2020.", "Niet correct.", "Te veel."],
        uitlegPad: {
          stappen: [{ titel: "Brexit 2020", tekst: "**27 EU-lidstaten** sinds Verenigd Koninkrijk uitgetreden 31 jan 2020 (Brexit). Voor Brexit: 28. **Eurozone**: 20 landen (sinds Kroatië 2023). Brussel = hoofdstad EU. Andere instellingen in Straatsburg + Luxemburg + Frankfurt (ECB)." }],
          niveaus: { basis: "27. A.", simpeler: "EU = 27 = A.", nogSimpeler: "27 = A." },
        },
      },
      {
        q: "Wat veroorzaakt **klimaatverandering** vooral?",
        options: ["CO₂ van fossiele brandstoffen","Bosbranden alleen","Vulkanen","Zonneflitsen"],
        answer: 0,
        wrongHints: [null, "Klein deel.", "Niet primair.", "Niet primair menselijk."],
        uitlegPad: {
          stappen: [{ titel: "Broeikaseffect", tekst: "**CO₂** (koolstofdioxide) uit verbranding **fossiele brandstoffen** (olie + gas + kolen): hoofdoorzaak klimaatverandering. CO₂ houdt warmte in atmosfeer vast (**broeikaseffect**). Sinds 1880 is aarde ~1,2°C warmer. **Parijs-akkoord 2015**: doel onder 1,5-2°C blijven. Ook bijdragend: methaan (vee-houderij + gas), ontbossing." }],
          niveaus: { basis: "CO₂ fossiel. A.", simpeler: "Klimaat = CO2 = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── C. Natuur + biologie ─────────────────────────────────
  {
    title: "Natuur + biologie — algemene kennis",
    explanation:
      "**Soorten levende wezens** (5 grote rijken):\n• **Bacteriën**: enkelvoudige cellen, geen celkern.\n• **Schimmels** (paddenstoelen, gisten, schimmels op brood).\n• **Planten**: maken eigen voedsel via **fotosynthese** (CO₂ + water + zonlicht → suiker + zuurstof).\n• **Dieren**: eten andere organismes.\n• **Protisten**: enkelvoudige cellen met celkern (amoeben).\n\n**Dieren-klassen** (binnen rijk dieren):\n• **Zoogdieren**: voeden jongen met melk. Hond, kat, koe, mens, walvis, vleermuis.\n• **Vogels**: veren, leggen eieren, snavel. Mus, eend, struisvogel, pinguïn.\n• **Vissen**: leven in water, kieuwen. Haring, snoek, haai, tonijn.\n• **Reptielen**: koudbloedig, schubben. Slangen, hagedissen, schildpadden, krokodillen.\n• **Amfibieën**: water + land. Kikkers, padden, salamanders.\n• **Insecten**: 6 poten + 3 lichaamsdelen. Vlinder, mier, kever, bij.\n• **Spinnen**: 8 poten (geen insect!). Kruisspin, tarantula.\n\n**Voedselketen + voedselweb**:\n• **Producenten**: planten (maken eigen voedsel).\n• **Consumenten**: dieren die anderen eten.\n  - **Herbivoor / planteneter**: koe, schaap, konijn.\n  - **Carnivoor / vleeseter**: leeuw, haai, kat.\n  - **Omnivoor / alleseter**: mens, varken, beer.\n• **Reducenten** / afbrekers: schimmels + bacteriën breken dode organismen af.\n\n**Lichaam mens**:\n• **Hart**: pompt bloed (~70 slagen/min in rust).\n• **Longen**: zuurstof opnemen + CO₂ afgeven.\n• **Maag + darmen**: vertering voedsel.\n• **Lever**: vele functies — ontgift, gal voor vertering vet.\n• **Nieren**: filteren bloed → urine.\n• **Hersenen**: denken + sturen.\n• **Skelet**: ~206 botten houdt vorm.\n• **Spieren**: ~600 maakt beweging.\n• **Huid**: grootste orgaan, beschermt.\n\n**Cellen**:\n• **Cel** = bouwsteen leven.\n• **Plantenceleel** heeft celwand (steviger) + chloroplasten (groen, fotosynthese).\n• **Dierlijke cel** geen celwand, geen chloroplasten.\n• **Celkern** = bevat DNA-instructies.\n\n**Voortplanting**:\n• Veel dieren: man + vrouw → bevruchting → embryo.\n• Eieren-leggers: vogels, reptielen, vissen, sommige zoogdieren (vogelbekdier!).\n• Levendbarend: meeste zoogdieren.\n• Planten: bestuiving via bijen + wind + andere insecten.\n\n**Seizoenen** (gematigd klimaat NL):\n• **Lente** (mrt-mei): bloei + jongen geboren.\n• **Zomer** (jun-aug): warm + groen, foto-synthese piek.\n• **Herfst** (sep-nov): bladeren verkleuren + vallen, oogst.\n• **Winter** (dec-feb): koud, bomen kaal, winterslaap of trek.\n\n**Trekvogels**:\n• Ooievaars, zwaluwen, kraanvogels naar zuiden in winter.\n• Door honger + kou — komen terug in voorjaar.\n\n**Bedreigde dieren NL**:\n• **Wolf**: terug sinds 2015 (~50 in NL nu).\n• **Otter**: hersteld via reïntroductie.\n• **Bever**: hersteld.\n• **Zeearend**: terug.\n• Insecten dalen sterk — biodiversiteitscrisis.\n\n**Ecosystemen**:\n• Tropisch regenwoud (Amazone), woestijn (Sahara), savanne (Afrika), gematigd bos (Europa), toendra (poolgebied), oceaan.\n• Biodiversiteit (variatie soorten) belangrijk voor stabiliteit.\n\n**Klimaatverandering + natuur**:\n• Vroegere lente → bloei + insecten te vroeg.\n• Soorten verschuiven naar polen.\n• Coral bleaching door warm zeewater.\n• NL: insectenpopulatie −75% sinds 1989.",
    checks: [
      {
        q: "Welke is een **zoogdier**?",
        options: ["Walvis","Krokodil","Vlinder","Haring"],
        answer: 0,
        wrongHints: [null, "Reptiel.", "Insect.", "Vis."],
        uitlegPad: {
          stappen: [{ titel: "Voedt jongen met melk", tekst: "**Walvissen zijn zoogdieren** (niet vissen!). Leven in water maar: ademen lucht (komen boven), warmbloedig, voeden jongen met **melk**. **Definitie zoogdier**: voedt jongen via melkklieren. Vleermuizen = enige vliegende zoogdier. Vogelbekdier = legt eieren maar voedt melk → ook zoogdier." }],
          niveaus: { basis: "Walvis. A.", simpeler: "Walvis = zoogd = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat doen planten bij **fotosynthese**?",
        options: ["CO₂ + water + zonlicht → suiker + zuurstof","Eten andere planten","Slapen overdag","Bloemen openen"],
        answer: 0,
        wrongHints: [null, "Niet — planten zijn producenten.", "Niet relevant.", "Onderdeel maar niet fotosynth."],
        uitlegPad: {
          stappen: [{ titel: "Producent", tekst: "**Fotosynthese**: planten gebruiken **CO₂ + water + zonlicht** om **suiker (glucose) + zuurstof** te maken. Vindt plaats in **chloroplasten** (groene cellen) met **chlorofyl** (groen pigment). Zonder fotosynthese geen leven op aarde — alle voedsel begint hier. Bijproduct = zuurstof voor dieren." }],
          niveaus: { basis: "Maakt suiker + zuurstof. A.", simpeler: "Fotosynth = energie = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Hoeveel **botten** heeft een volwassen mens?",
        options: ["~206","~50","~500","~50.000"],
        answer: 0,
        wrongHints: [null, "Veel te weinig.", "Te veel.", "Absurd."],
        uitlegPad: {
          stappen: [{ titel: "206 bij volwassene", tekst: "**Volwassene: ~206 botten**. Baby's hebben ~270 botten — sommige groeien vast tijdens leven (bv. schedelplaten + heupbotten). Grootste bot: dijbeen (femur, ~46 cm). Kleinste: stijgbeugel in oor (3 mm). Skelet houdt lichaamsvorm + beschermt organen + biedt aanhechting spieren." }],
          niveaus: { basis: "206. A.", simpeler: "~206 = A.", nogSimpeler: "206 = A." },
        },
      },
      {
        q: "Een **spin** is:",
        options: ["Geen insect (8 poten, geen 6)","Insect","Vogel","Zoogdier"],
        answer: 0,
        wrongHints: [null, "Niet — insecten hebben 6 poten.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Klassieke val!", tekst: "**Spinnen zijn GEEN insecten**. **Insecten**: 6 poten + 3 lichaamsdelen (kop/borst/achterlijf) + vaak vleugels. **Spinnen**: 8 poten + 2 lichaamsdelen + nooit vleugels — horen bij groep 'spinachtigen' (arachniden, samen met schorpioenen + mijten + teken). Vaak verwarrend. Cito-vraag-classic." }],
          niveaus: { basis: "Geen insect. A.", simpeler: "Spin ≠ insect = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke is een **producent** in voedselketen?",
        options: ["Plant","Hond","Schimmel","Insect"],
        answer: 0,
        wrongHints: [null, "Consument.", "Reducent.", "Consument."],
        uitlegPad: {
          stappen: [{ titel: "Maakt eigen voedsel", tekst: "**Producent** = maakt eigen voedsel via fotosynthese — **planten** + algen. **Consument** = eet anderen (dieren). **Reducent** = breekt dood materiaal af (schimmels + bacteriën). Voedselketen begint altijd bij producent (plant → herbivoor → carnivoor)." }],
          niveaus: { basis: "Plant. A.", simpeler: "Producent = plant = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── D. Wetenschap + techniek ─────────────────────────────
  {
    title: "Wetenschap + techniek — algemene kennis",
    explanation:
      "**Beroemde wetenschappers + uitvinders**:\n\n• **Isaac Newton** (1643-1727, UK): zwaartekracht-wetten, 3 bewegingswetten, optica.\n• **Albert Einstein** (1879-1955, DE/CH/VS): relativiteits-theorie, E=mc², Nobel-prijs 1921.\n• **Marie Curie** (1867-1934, PL/FR): radioactiviteit, **2× Nobelprijs** (eerste vrouw, eerste persoon 2× verschillende vakken).\n• **Charles Darwin** (1809-1882, UK): evolutie-theorie + natuurlijke selectie.\n• **Galileo Galilei** (1564-1642, IT): telescoop, ondersteunde heliocentrisch model.\n• **Nicolaus Copernicus** (1473-1543, PL): aarde draait om zon (1543).\n• **Antoni van Leeuwenhoek** (1632-1723, NL): microscoop, ontdekte bacteriën.\n• **Christiaan Huygens** (1629-1695, NL): slingerklok, Saturnusring.\n• **Thomas Edison** (1847-1931, VS): gloeilamp, fonograaf, ~1000 patenten.\n• **Alexander Graham Bell** (1847-1922, UK/VS): telefoon (1876).\n• **Wright Brothers** (1903): eerste gemotoriseerde vlucht.\n• **Tim Berners-Lee** (1989): uitvinder van het World Wide Web (CERN).\n• **Steve Jobs** (1955-2011, VS): Apple-oprichter.\n\n**Uitvindingen + jaartal (Cito-favoriet)**:\n• **Boekdrukkunst**: Gutenberg ~1450.\n• **Stoommachine**: James Watt 1769 (verbetering van eerder).\n• **Elektrische lamp**: Edison 1879.\n• **Telefoon**: Bell 1876.\n• **Auto**: Karl Benz 1885.\n• **Vliegtuig**: Wright Brothers 1903.\n• **Televisie**: ~1925 (John Logie Baird).\n• **Computer**: WO2-tijd (Turing/Eckert/Mauchly).\n• **Internet/WWW**: 1989-1990 (Berners-Lee).\n• **Smartphone**: iPhone 2007 (Apple).\n• **AI / ChatGPT**: 2022 OpenAI.\n\n**Ruimtevaart**:\n• **Spoetnik 1**: eerste kunstmatige satelliet, 4 oktober 1957, USSR.\n• **Joeri Gagarin**: eerste mens in ruimte, 12 april 1961, USSR.\n• **Apollo 11**: eerste mens op de maan, 20 juli 1969 (Armstrong + Aldrin + Collins, VS).\n• **Wubbo Ockels**: eerste NL'er in ruimte (1985).\n• **André Kuipers**: 2e NL'er, 2x in ruimte (2004 + 2011-12, ISS).\n• **ISS** (International Space Station): bemand sinds 2000, ~400 km hoog.\n• **SpaceX** (Elon Musk): herbruikbare raketten + Mars-plannen.\n• **James Webb-telescoop** (2021): opvolger Hubble — kijkt diep in heelal.\n\n**Hemellichamen**:\n• **Zon** = ster + middelpunt zonnestelsel.\n• **Planeten** (in volgorde van zon): Mercurius, Venus, Aarde, Mars, Jupiter, Saturnus, Uranus, Neptunus. Memo: 'Maar Vader Adam Maakte Jullie Soms Uitstapjes Naar...' of equivalent.\n• **Pluto** = sinds 2006 geen planeet meer (dwergplaneet).\n• **Maan** = aarde's natuurlijke satelliet.\n• **Sterren** = grote massa-gas, fusie kern.\n• **Sterrenstelsels** (zoals onze Melkweg) = miljarden sterren samen.\n\n**Natuurkunde-begrippen**:\n• **Zwaartekracht**: trekt alles naar grond. Op aarde g ≈ 9,8 m/s² (vereenvoudigd 10).\n• **Snelheid**: m/s of km/h. 36 km/h = 10 m/s.\n• **Energie**: vermogen om werk te doen.\n• **Geluid**: trillingen door lucht/medium. Snelheid in lucht: ~340 m/s.\n• **Licht**: zeer snel (300.000 km/s in vacuüm).\n• **Magnetisme**: trekt ijzer + kobalt + nikkel aan.\n• **Elektriciteit**: stroom van elektronen.\n\n**Scheikunde-basis**:\n• **Atoom** = bouwsteen materie, bestaat uit kern + elektronen.\n• **Element**: stof bestaande uit één soort atoom (waterstof H, zuurstof O, ijzer Fe, goud Au).\n• **Molecuul**: 2+ atomen samen (H₂O = water, CO₂ = koolstofdioxide).\n• **Periodiek systeem**: tabel van alle 118 elementen.\n• **3 toestanden materie**: vast, vloeibaar, gas.\n• **Smelten**: vast → vloeibaar.\n• **Verdampen**: vloeibaar → gas.\n• **Stollen**: vloeibaar → vast.\n• **Condenseren**: gas → vloeibaar.\n\n**Lichaam + gezondheid**:\n• **Vaccinatie**: leert immuun-systeem ziekteverwekker herkennen.\n• **Antibiotica**: doodt bacteriën, niet virussen.\n• **DNA**: erfelijk materiaal, in elke cel.\n• **Genen**: stukjes DNA met instructies.\n\n**Mensen uit wetenschap NL recent**:\n• **Andre Geim + Konstantin Novoselov**: Nobelprijs natuurkunde 2010 (grafeen) — beide werkten in NL/UK.\n• **Ben Feringa**: Nobelprijs scheikunde 2016 (moleculaire machines) — Groningen.\n• **Robbert Dijkgraaf**: theoretisch fysicus, ex-minister onderwijs.",
    checks: [
      {
        q: "Wie ontdekte **zwaartekracht-wetten**?",
        options: ["Isaac Newton","Albert Einstein","Galileo","Darwin"],
        answer: 0,
        wrongHints: [null, "Verfijnde later met relativiteit.", "Wel bewegingen onderzocht maar niet zwaartekracht-wetten.", "Andere theorie."],
        uitlegPad: {
          stappen: [{ titel: "Appel-verhaal", tekst: "**Isaac Newton** (1643-1727 UK): zwaartekracht + 3 bewegingswetten. Volgens legende inspireerde vallende appel. *Philosophiæ Naturalis Principia Mathematica* (1687). Beschreef hoe maan om aarde + planeten om zon door zwaartekracht. **Einstein** verfijnde later met algemene relativiteit (1915) — ruimte-tijd-kromming." }],
          niveaus: { basis: "Newton. A.", simpeler: "Zwaartekracht = Newton = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wanneer **eerste mens op de maan**?",
        options: ["20 juli 1969","12 april 1961","4 oktober 1957","1985"],
        answer: 0,
        wrongHints: [null, "Gagarin in ruimte.", "Spoetnik (satelliet).", "Wubbo Ockels."],
        uitlegPad: {
          stappen: [{ titel: "Apollo 11", tekst: "**20 juli 1969**: Neil Armstrong stapt als eerste mens op maan. 'One small step for man, one giant leap for mankind'. Apollo 11-missie (VS). Bemanning: **Armstrong** + **Buzz Aldrin** (ook op maan) + **Michael Collins** (in baan). Onderdeel space race tegen USSR. Tot 1972 6× geslaagde maan-landingen — daarna niemand meer." }],
          niveaus: { basis: "20-7-1969. A.", simpeler: "1969 = maan = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke is **NIET een planeet**?",
        options: ["Pluto","Mercurius","Saturnus","Neptunus"],
        answer: 0,
        wrongHints: [null, "Echte planeet.", "Echte planeet.", "Echte planeet."],
        uitlegPad: {
          stappen: [{ titel: "Sinds 2006 dwergplaneet", tekst: "**Pluto** was van 1930-2006 9e planeet. Sinds 2006 'gedegradeerd' door **Internationale Astronomische Unie (IAU)** tot **dwergplaneet** — te klein + niet 'baan-vrij'. Echte 8 planeten: Mercurius, Venus, Aarde, Mars, Jupiter, Saturnus, Uranus, Neptunus. Pluto vandaag samen met Eris, Makemake, Haumea = dwergplaneten." }],
          niveaus: { basis: "Pluto. A.", simpeler: "Pluto = geen planeet = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**H₂O** is:",
        options: ["Water (2 waterstof + 1 zuurstof)","Suiker","Zout","Lucht"],
        answer: 0,
        wrongHints: [null, "Niet — andere chemische formule.", "Niet — NaCl.", "Mengsel, geen molecuul."],
        uitlegPad: {
          stappen: [{ titel: "Watermolecule", tekst: "**H₂O = water**: 2 waterstof-atomen (H) + 1 zuurstof-atoom (O). H₂ = subscript betekent '2 keer'. Cruciaal voor leven. Andere bekende formules:\n• **CO₂** = koolstofdioxide.\n• **NaCl** = natriumchloride (keukenzout).\n• **C₆H₁₂O₆** = glucose (suiker).\n• **O₂** = zuurstof (gas)." }],
          niveaus: { basis: "Water. A.", simpeler: "H2O = water = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wie won **2× Nobelprijs** in verschillende vakken?",
        options: ["Marie Curie","Einstein","Newton","Darwin"],
        answer: 0,
        wrongHints: [null, "1× (1921).", "Geen Nobelprijs (vóór Nobels tijd).", "Geen Nobelprijs."],
        uitlegPad: {
          stappen: [{ titel: "Unieke prestatie", tekst: "**Marie Curie** (1867-1934, Pools-Frans): **eerste vrouw + eerste persoon met 2 Nobelprijzen in verschillende vakken**:\n• Natuurkunde 1903 (met Pierre + Becquerel, radioactiviteit).\n• Scheikunde 1911 (radium + polonium isolatie).\n\nStierf aan straling-blootstelling — haar notitieboeken nog radioactief vandaag." }],
          niveaus: { basis: "Curie. A.", simpeler: "2× Nobel = Curie = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── E. Eindmix ────────────────────────────────────────────
  {
    title: "Eindmix — wereldoriëntatie gevarieerd",
    explanation:
      "Mix van geschiedenis + aardrijkskunde + natuur + wetenschap. Cito-stijl gemengde vragen.\n\nVeel succes!",
    checks: [
      {
        q: "Wat doe je als je een **schaaltrappetje** (Cito) leest?",
        options: ["Lees zorgvuldig + check tussen-stappen","Snelste antwoord direct","Sla over","Zoek hulp"],
        answer: 0,
        wrongHints: [null, "Vaak fout.", "Niet — punten kwijt.", "Niet — op examen alleen."],
        uitlegPad: {
          stappen: [{ titel: "Cito-strategie", tekst: "Bij **lange leesvraag** (Cito-stijl): **lees zorgvuldig + check stap voor stap**. Niet meteen 1e antwoord kiezen — kijk welke optie alle voorwaarden uit tekst nakomt. Vaak zit val in details. Tip: streep belangrijke woorden in vraag onder." }],
          niveaus: { basis: "Stap voor stap. A.", simpeler: "Stap voor stap = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke is een **kapitaal werelddeel** van NL?",
        options: ["Europa","Azië","Afrika","Antarctica"],
        answer: 0,
        wrongHints: [null, "Niet — apart werelddeel.", "Niet relevant.", "Niet bewoond."],
        uitlegPad: {
          stappen: [{ titel: "EU-lid", tekst: "**Nederland ligt in Europa** (West-Europa specifiek). Onderdeel van **EU** sinds oprichting EEG 1957. NL = klein land (41.500 km²) maar grote economische rol door handel + havens. Buurlanden: België + Duitsland + Noordzee." }],
          niveaus: { basis: "Europa. A.", simpeler: "NL = Europa = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke is **WO2-jaartallen** correct?",
        options: ["1940-1945 voor NL","1914-1918","1939-1945 wereldwijd, 1940-1945 NL","Alle drie kloppen, eerste het meest specifiek NL"],
        answer: 3,
        wrongHints: ["Wel correct maar niet alleen.", "WO1.", "Wel beste.", null],
        uitlegPad: {
          stappen: [{ titel: "WO1 vs WO2", tekst: "**WO1**: 1914-1918 (NL **neutraal**, niet bezet). **WO2**: 1939-1945 wereldwijd, **NL 1940-1945** bezet (Duitse inval 10 mei 1940 → bevrijding 5 mei 1945)." }],
          niveaus: { basis: "Beide jaartallen correct. A.", simpeler: "WO2-NL = 40-45 = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Een **carnivoor** is:",
        options: ["Vleeseter","Planteneter","Alleseter","Zelf-voeder"],
        answer: 0,
        wrongHints: [null, "Herbivoor.", "Omnivoor.", "Producent."],
        uitlegPad: {
          stappen: [{ titel: "Latijnse termen", tekst: "**Carnivoor** (Latijn 'caro' = vlees + 'vorare' = eten) = vleeseter. Voorbeelden: leeuw, tijger, haai, krokodil, gier. **Herbivoor** = planteneter (koe, paard, konijn). **Omnivoor** = alleseter (mens, varken, beer). Goede ezelsbruggetje: HERB = herbal = planten." }],
          niveaus: { basis: "Vleeseter. A.", simpeler: "Carni = vlees = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Op welke datum vieren we **Koningsdag**?",
        options: ["27 april","30 april","5 mei","27 mei"],
        answer: 0,
        wrongHints: [null, "Vroegere koninginnedag.", "Bevrijdingsdag.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Verjaardag Willem-Alexander", tekst: "**Koningsdag = 27 april**, sinds 2014 (verjaardag koning Willem-Alexander, geboren 1967). Voor 2014: **Koninginnedag 30 april** (Juliana's geb-dag, later Beatrix). Beatrix' eigen geb-dag is 31 januari — koos voor 30 april ter ere van moeder Juliana. Bij valt op zondag → wordt naar zaterdag verschoven." }],
          niveaus: { basis: "27 april. A.", simpeler: "Koningsdag = 27-4 = A.", nogSimpeler: "A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const wereldorientatieMixPo = {
  id: "wereldorientatie-mix-po",
  title: "Wereldoriëntatie mix (groep 7-8 Cito-stijl)",
  emoji: "🌍",
  level: "groep7-8",
  subject: "wereld",
  referentieNiveau: "po-doorstroomtoets-wereldorientatie",
  sloThema: "Wereldoriëntatie groep 7-8 — Cito-stijl gemixed eindtoets",
  prerequisites: [
    { id: "tijdvakken-nederland-po", title: "Tijdvakken NL", niveau: "groep6-8" },
    { id: "topografie-nederland", title: "Topografie NL", niveau: "groep6-8" },
    { id: "werelddelen-landen-po", title: "Werelddelen + landen", niveau: "groep6-8" },
    { id: "dieren-seizoenen-natuur", title: "Dieren + natuur", niveau: "groep6-8" },
  ],
  intro:
    "Wereldoriëntatie groep 7-8 mixed — Cito-eindtoets-stijl. Geschiedenis (10 tijdvakken NL + WO2 + Anne Frank + Watersnood 1953), aardrijkskunde (12 provincies + 27 EU + werelddelen + klimaat), natuur + biologie (zoogdieren vs reptielen + fotosynthese + voedselketen + spinnen = geen insect), wetenschap (Newton + Curie + Apollo 11 + H₂O + Pluto). ~15 min.",
  triggerKeywords: [
    "wereldoriëntatie", "wereld-oriëntatie",
    "Cito-eindtoets",
    "Doorstroomtoets wereldoriëntatie",
    "tijdvakken NL", "10 tijdvakken",
    "Gouden Eeuw", "VOC 1602",
    "Anne Frank",
    "Watersnoodramp 1953",
    "Willem van Oranje",
    "Tachtigjarige Oorlog",
    "Koningsdag",
    "provincies NL",
    "12 provincies",
    "hoofdstad Amsterdam",
    "EU 27 lidstaten",
    "werelddelen",
    "klimaatverandering kinderen",
    "fotosynthese",
    "zoogdieren walvis",
    "spin geen insect",
    "voedselketen producent consument",
    "Newton zwaartekracht",
    "Marie Curie",
    "Apollo 11 maan 1969",
    "planeten zonnestelsel",
    "Pluto dwergplaneet",
    "H2O water",
  ],
  chapters,
  steps,
};

export default wereldorientatieMixPo;
