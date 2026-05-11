// Leerpad: Pincode 7e ed. VMBO-GT klas 4 - hoofdstuk 5 (Hoe werkt de overheid?)
// Uitgebreide versie 2026-05-09: 7 stappen voor compleet examen-blok.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  geld: "#69f0ae",
  warm: "#ffd54f",
  alt: "#ff7043",
  vraag: "#42a5f5",
  aanbod: "#ef5350",
  rood: "#ff5252",
  oranje: "#ffa040",
  grijs: "#90a4ae",
};

const stepEmojis = ["🏛️", "🏘️", "📑", "💰", "📈", "⚖️", "🗳️"];

const chapters = [
  { letter: "A", title: "Wat doet de overheid?", emoji: "🏛️", from: 0, to: 1 },
  { letter: "B", title: "Geld van de overheid", emoji: "💰", from: 2, to: 3 },
  { letter: "C", title: "Sturing en regels", emoji: "⚖️", from: 4, to: 5 },
  { letter: "D", title: "Politiek", emoji: "🗳️", from: 6, to: 6 },
];

const steps = [
  // ─── Stap 1: Taken van de overheid ──────────────────────
  {
    title: "Taken van de overheid",
    explanation: "De **overheid** doet dingen die de markt niet (goed) doet:\n\n**1. Wetten en orde** — politie, rechters, defensie. Veiligheid voor iedereen.\n\n**2. Openbare voorzieningen** — wegen, openbaar vervoer, parken, dijken. Iedereen profiteert ervan; te duur of onlogisch om privé te regelen.\n\n**3. Onderwijs en zorg** — betaalbaar voor iedereen, niet alleen voor rijken. Scholen, universiteiten, ziekenhuizen.\n\n**4. Sociale zekerheid** — uitkeringen voor mensen die (tijdelijk) niet kunnen werken (AOW, WW, bijstand).\n\n**5. Inkomensverdeling** — belasting heffen om verschillen tussen arm en rijk te verkleinen (progressieve belasting + toeslagen).\n\n**6. Marktordening** — concurrentie eerlijk houden, consumenten beschermen, milieu bewaken (komt uitgebreid in stap 6).\n\n**Waarom DOET de overheid dit, niet de markt?**\n• **Collectieve goederen**: niemand wil voor een dijk apart betalen, terwijl iedereen ervan profiteert (free-rider-probleem)\n• **Externe effecten**: vervuiling raakt iedereen, niet alleen de vervuiler. Markt corrigeert dat zelf niet\n• **Ongelijkheid**: zonder overheid worden de allerarmsten niet geholpen\n• **Informatie-ongelijkheid**: consument weet vaak niet alles (denk aan voedselveiligheid)\n\n**'Maar het kost wel veel'**:\n• Begroting Nederland: ~€350-400 miljard/jaar\n• Per Nederlander: ~€20.000/jaar overheid-uitgaven\n• Wordt betaald uit belasting + sociale premies\n\n**Verschillen tussen landen**:\n• **Verzorgingsstaat** (NL, Scandinavië): overheid doet veel, hoge belasting\n• **Liberaal** (VS): overheid doet minder, lage belasting maar veel zelf regelen (zorg, onderwijs)",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">6 TAKEN VAN DE OVERHEID</text>
<rect x="20" y="40" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="87" y="60" text-anchor="middle" fill="${COLORS.vraag}" font-size="10" font-family="Arial">wetten + orde</text>
<rect x="165" y="40" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="232" y="60" text-anchor="middle" fill="${COLORS.vraag}" font-size="10" font-family="Arial">openbare voorzieningen</text>
<rect x="20" y="80" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="87" y="100" text-anchor="middle" fill="${COLORS.geld}" font-size="10" font-family="Arial">onderwijs + zorg</text>
<rect x="165" y="80" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="232" y="100" text-anchor="middle" fill="${COLORS.geld}" font-size="10" font-family="Arial">sociale zekerheid</text>
<rect x="20" y="120" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="87" y="140" text-anchor="middle" fill="${COLORS.warm}" font-size="10" font-family="Arial">inkomensverdeling</text>
<rect x="165" y="120" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="232" y="140" text-anchor="middle" fill="${COLORS.warm}" font-size="10" font-family="Arial">marktordening</text>
<text x="160" y="180" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">~€350-400 miljard/jaar</text>
<text x="160" y="200" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">betaald uit belasting + sociale premies</text>
</svg>`,
    checks: [
      {
        q: "Wie regelt het ophalen van **vuilnis**?",
        options: ["De gemeente", "Het Rijk", "De provincie", "De Belastingdienst"],
        answer: 0,
        wrongHints: [null, "Rijk maakt landelijke wetten.", "Provincie regelt grotere zaken (provinciale wegen, natuur).", "Belastingdienst int belasting."],
        uitlegPad: {
          stappen: [{ titel: "Lokale taak", tekst: "Vuilnis ophalen + verwerken is een LOKALE taak. Wat dichtbij burger gebeurt → gemeente. Wat landelijk → Rijk. Wat regionaal → provincie." }],
          woorden: [{ woord: "afvalstoffenheffing", uitleg: "Gemeentebelasting waaruit vuilnis-ophalen betaald wordt." }, { woord: "lokale taak", uitleg: "Taak die per dorp/stad verschilt en best dichtbij georganiseerd wordt." }],
          theorie: "Drie overheidslagen, drie scopes: Rijk = landelijk (defensie, AOW), provincie = regio (provinciale wegen, natuur), gemeente = lokaal (vuilnis, paspoort, OZB).",
          voorbeelden: [{ type: "gemeente", tekst: "Vuilniswagen rijdt door jouw straat → betaald door gemeente → opbrengst uit afvalstoffenheffing op aanslag." }],
          basiskennis: [{ onderwerp: "Niet Belastingdienst", uitleg: "Belastingdienst is Rijksdienst die belasting INT, geen vuilnis ophaalt." }],
          niveaus: { basis: "Gemeente. A.", simpeler: "Vuilnis is lokaal werk — dichtbij burgers. Dat doet de gemeente. = A.", nogSimpeler: "Lokaal = gemeente = A." },
        },
      },
      {
        q: "Welke taak van de overheid is **inkomensverdeling**?",
        options: ["Belasting heffen om verschil arm/rijk te verkleinen", "Loon verhogen voor iedereen", "Banen verdelen", "Spaargeld verdelen"],
        answer: 0,
        wrongHints: [null, "Loon wordt op de markt bepaald (behalve minimumloon).", "Banen verdelen doet de markt.", "Spaargeld blijft van de spaarder."],
        uitlegPad: {
          stappen: [{ titel: "Herverdelen via belasting", tekst: "Inkomensverdeling = overheid verkleint verschillen tussen arm en rijk. Methode: hoge inkomens belasten + lage inkomens steunen (toeslagen, uitkeringen)." }],
          woorden: [{ woord: "inkomensverdeling", uitleg: "Overheidstaak: ongelijkheid tussen arm en rijk verkleinen via belasting + uitkeringen." }, { woord: "progressieve belasting", uitleg: "Hoger inkomen → hoger %. Maakt netto-verschillen kleiner." }],
          theorie: "NL is wereldwijd één van de meest gelijke landen (Gini ~0,28) DOOR sterke herverdeling: IB-schijven 37-49%, AOW, bijstand, zorgtoeslag, huurtoeslag.",
          voorbeelden: [{ type: "praktijk", tekst: "Iemand met €100k brutosalaris betaalt veel IB → financiert AOW + toeslagen voor lager-betaalden." }],
          basiskennis: [{ onderwerp: "Niet 'loon verhogen'", uitleg: "Overheid bepaalt geen lonen (behalve minimumloon). Banen + spaargeld zijn ook geen overheidsverdeling." }],
          niveaus: { basis: "Belasting + toeslagen voor herverdelen. A.", simpeler: "Inkomensverdeling = overheid haalt belasting van rijken + helpt armen met toeslagen. = A.", nogSimpeler: "Herverdelen = A." },
        },
      },
      {
        q: "Wat is een **collectief goed**?",
        options: ["Goed waar iedereen van profiteert (dijk, lantarenpaal) — markt levert het niet", "Een goed dat collectief in de winkel staat", "Een gratis goed", "Iets met een collectief contract"],
        answer: 0,
        wrongHints: [null, "Geen winkelterm.", "Vrij goed is iets anders (lucht).", "Geen contract-term."],
        uitlegPad: {
          stappen: [{ titel: "Iedereen profiteert, niemand wil betalen", tekst: "Collectief goed = profijt voor ALLE inwoners (dijk, leger, verlichting). Markt levert dit niet, want individuen wachten op anderen (free-rider). Daarom overheid." }],
          woorden: [{ woord: "collectief goed", uitleg: "Goed waar iedereen tegelijkertijd van profiteert en niemand uitgesloten kan worden. Markt faalt hier." }, { woord: "free-rider", uitleg: "Iemand die wel meegeniet maar niet meebetaalt — anderen draaien op voor de kosten." }],
          theorie: "Twee kenmerken: (1) niet-rivaliteit (jouw genot vermindert dat van anderen niet — iedereen profiteert van dijk), (2) niet-uitsluitbaar (je kunt niemand wegjagen). Daarom: belasting heffen + overheid levert het.",
          voorbeelden: [{ type: "collectief", tekst: "Dijken, defensie, politie, straatverlichting, bibliotheek (deels)." }, { type: "niet collectief", tekst: "Brood, kleren, telefoon — wel rivaliteit, wel uitsluitbaar (alleen wie betaalt heeft het)." }],
          basiskennis: [{ onderwerp: "Niet 'gratis'", uitleg: "Collectief goed is GRATIS in gebruik (zee inkijken bij dijk gratis), maar wordt door belasting BETAALD." }],
          niveaus: { basis: "Iedereen profiteert, markt levert niet. A.", simpeler: "Een collectief goed (dijk, leger) profiteert IEDEREEN — daarom betaalt de overheid het uit belasting. = A.", nogSimpeler: "Iedereen profiteert = A." },
        },
      },
      {
        q: "**Defensie** valt onder welke overheidstaak?",
        options: ["Wetten en orde (veiligheid)", "Onderwijs", "Sociale zekerheid", "Inkomensverdeling"],
        answer: 0,
        wrongHints: [null, "Onderwijs gaat over scholen.", "Sociale zekerheid = uitkeringen.", "Inkomensverdeling = belasting heffen."],
        uitlegPad: {
          stappen: [{ titel: "Veiligheid = wetten + orde", tekst: "Defensie (leger) = bescherming tegen buitenlandse dreiging. Politie = bescherming binnen NL. Beide vallen onder 'wetten en orde' = veiligheid." }],
          woorden: [{ woord: "wetten en orde", uitleg: "Eerste klassieke overheidstaak: veiligheid waarborgen via wetten + handhaving." }, { woord: "defensie", uitleg: "Bescherming tegen buitenlandse aanvallen door middel van leger, luchtmacht, marine." }],
          theorie: "Klassieke overheidstaken (nachtwakerstaat): wetten, orde, defensie. Moderne taken (verzorgingsstaat): onderwijs, zorg, sociale zekerheid, inkomensverdeling.",
          voorbeelden: [{ type: "defensie", tekst: "NL-leger uitgaven ~€20 mrd/jaar (~5% van Rijksbegroting). NAVO-verdrag verplicht 2% BBP." }],
          basiskennis: [{ onderwerp: "Niet onderwijs/sociaal", uitleg: "Onderwijs en sociale zekerheid zijn aparte taken. Defensie is veiligheid." }],
          niveaus: { basis: "Defensie = wetten + orde. A.", simpeler: "Defensie beschermt NL = veiligheid = 'wetten en orde'-taak. = A.", nogSimpeler: "Veiligheid = A." },
        },
      },
      {
        q: "Wat is een **verzorgingsstaat**?",
        options: ["Land waar de overheid veel sociale taken vervult, gefinancierd door hoge belasting", "Land zonder overheid", "Land met alleen private zorg", "Land met dictatuur"],
        answer: 0,
        wrongHints: [null, "Zonder overheid bestaat niet.", "Tegendeel — verzorgingsstaat heeft publieke zorg.", "Politiek systeem is iets anders."],
        uitlegPad: {
          stappen: [{ titel: "Veel sociale taken + hoge belasting", tekst: "Verzorgingsstaat = land waar overheid veel SOCIALE taken vervult: gezondheidszorg, onderwijs, uitkeringen. Burger betaalt veel belasting, krijgt veel publieke voorzieningen terug." }],
          woorden: [{ woord: "verzorgingsstaat", uitleg: "Staatsmodel met sterk publiek systeem voor zorg, onderwijs, sociale zekerheid." }, { woord: "liberale staat", uitleg: "Staat waar overheid weinig doet en markt veel — VS-model." }],
          theorie: "Spectrum: aan ene kant nachtwaker-staat (alleen wetten/orde/defensie, lage belasting), aan andere kant verzorgingsstaat (uitgebreide voorzieningen, hoge belasting). NL + Scandinavië = klassieke verzorgingsstaat. VS = meer liberaal.",
          voorbeelden: [{ type: "NL", tekst: "Iedereen heeft gegarandeerd onderwijs + ziekenhuiszorg + bij ontslag WW. Belastingdruk ~40% van BBP." }, { type: "VS", tekst: "Geen verplichte zorgverzekering, dunne sociale vangnetten, lagere belasting (~25%)." }],
          basiskennis: [{ onderwerp: "Politiek vs economie", uitleg: "Verzorgingsstaat zegt iets over ECONOMISCH systeem (overheid groot), niet POLITIEK (democratisch of dictatuur)." }],
          niveaus: { basis: "Veel sociale taken + hoge belasting. A.", simpeler: "Verzorgingsstaat = overheid regelt veel (zorg, school, uitkering) en burgers betalen veel belasting daarvoor. = A.", nogSimpeler: "Veel publiek = A." },
        },
      },
      {
        q: "Een **extern effect** is bv:",
        options: ["Een fabriek vervuilt rivier; niet de fabriek maar omwonenden lijden eronder", "Belastingverlaging", "Hogere lonen", "Spaargeld"],
        answer: 0,
        wrongHints: [null, "Beleidsmaatregel, geen extern effect.", "Loon is interne uitkomst.", "Spaargeld is privé."],
        uitlegPad: {
          stappen: [{ titel: "Effect VOOR ANDEREN", tekst: "Extern effect = gevolg van een activiteit voor mensen die er NIET aan deelnemen. Fabriek vervuilt → omwonenden krijgen ziekteklachten. Niet in prijs verrekend." }],
          woorden: [{ woord: "extern effect", uitleg: "Positief of negatief gevolg voor derden, niet meegenomen in de markprijs." }, { woord: "negatief extern effect", uitleg: "Schade voor derden: vervuiling, geluidsoverlast, files." }, { woord: "positief extern effect", uitleg: "Voordeel voor derden: onderwijs (slimmere samenleving), bijenhouder (bestuiving voor buurtboer)." }],
          theorie: "Markt regelt externe effecten niet zelf. Overheid grijpt in via heffingen (CO2-heffing), regulering (uitstootnormen) of subsidies (zonnepanelen).",
          voorbeelden: [{ type: "negatief", tekst: "Stikstof-uitstoot landbouw → natuur kapot, omwonenden ziek. Boer betaalt prijs niet." }, { type: "positief", tekst: "Onderwijs maakt iedereen slimmer → hele samenleving profiteert." }],
          basiskennis: [{ onderwerp: "Niet beleid", uitleg: "Belastingverlaging is BELEID, geen extern effect. Loon en spaargeld zijn interne uitkomsten." }],
          niveaus: { basis: "Vervuiling voor derden. A.", simpeler: "Extern effect = iemand anders ondervindt jouw activiteit zonder dat het in de prijs zit. = A.", nogSimpeler: "Anderen lijden = A." },
        },
      },
    ],
  },
  // ─── Stap 2: Overheidslagen ──────────────────────────────
  {
    title: "Overheidslagen — Rijk, provincie, gemeente",
    explanation: "Nederland heeft **drie overheidslagen**, elk met eigen taken en geldstromen.\n\n**1. Rijksoverheid (nationaal)**\n• Tweede Kamer, Eerste Kamer, regering, ministers\n• Wetten voor heel NL\n• Defensie, buitenlands beleid, AOW, justitie, belastingstelsel\n• Begroting: ~€350 miljard/jaar\n\n**2. Provincie (12 in NL)**\n• Provinciale Staten + Gedeputeerde Staten + Commissaris van de Koning\n• Provinciale wegen, openbaar vervoer (regio), natuur, ruimtelijke ordening (waar mag je bouwen?)\n• Begroting: ~€500 miljoen-€1 miljard per provincie\n\n**3. Gemeente (~340 in NL)**\n• Gemeenteraad + College van B&W + Burgemeester\n• Vuilnis, paspoorten, bibliotheken, jeugdzorg, bijstand, lokale wegen, gemeentebelasting\n• Veel gemeente-services raken je dagelijks: parkeren, hondenbelasting, OZB-belasting op je huis\n\n**Geldstromen**:\n• Rijksoverheid haalt geld op via belastingen + premies\n• Geeft door aan provincies en gemeenten via het **Gemeentefonds** en **Provinciefonds**\n• Gemeenten heffen ook eigen belastingen (OZB, hondenbelasting, toeristenbelasting)\n\n**Decentralisaties** (sinds 2015):\n• Veel taken zijn van Rijk → gemeente verschoven (jeugdzorg, WMO)\n• Idee: gemeente is dichter bij burger\n• Probleem: gemeente kreeg minder geld dan nodig → bezuinigingen\n\n**Bijzonder**:\n• **Waterschappen** — vierde overheidslaag specifiek voor water (dijken, sloten, waterkwaliteit). 21 waterschappen in NL. Heffen waterschapsbelasting.\n\n**Provincie** vs **gemeente**:\n• Provincie = bovenliggend niveau (regio, vaak meerdere gemeenten)\n• Gemeente = lokaal, dichtstbij burger",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">DRIE OVERHEIDSLAGEN</text>
<rect x="40" y="40" width="240" height="40" rx="8" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="160" y="62" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">RIJKSOVERHEID</text>
<text x="160" y="76" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Tweede Kamer · regering · ministers</text>
<rect x="60" y="95" width="80" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="100" y="115" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">PROVINCIE</text>
<text x="100" y="128" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">12 in NL</text>
<rect x="180" y="95" width="80" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="220" y="115" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">GEMEENTE</text>
<text x="220" y="128" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">~340 in NL</text>
<rect x="60" y="148" width="200" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.2" stroke-dasharray="3 2"/>
<text x="160" y="167" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">WATERSCHAPPEN</text>
<text x="160" y="178" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">21 — water/dijken</text>
<text x="160" y="205" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">geld via Gemeentefonds/Provinciefonds + eigen belastingen</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel **provincies** heeft Nederland?",
        options: ["12", "10", "21", "340"],
        answer: 0,
        wrongHints: [null, "Was vroeger lager, nu 12.", "21 = waterschappen.", "340 = gemeenten."],
        uitlegPad: {
          stappen: [{ titel: "12 provincies", tekst: "NL heeft 12 provincies: Groningen, Friesland, Drenthe, Overijssel, Gelderland, Utrecht, Noord-Holland, Zuid-Holland, Zeeland, Noord-Brabant, Limburg, Flevoland." }],
          woorden: [{ woord: "provincie", uitleg: "Tweede overheidslaag (na Rijk). 12 stuks in NL. Eigen verkiezingen, Provinciale Staten." }],
          theorie: "Flevoland is de jongste (1986, ingepolderd). Provincies regelen ruimtelijke ordening, provinciale wegen, natuur, openbaar vervoer in regio.",
          voorbeelden: [{ type: "feit", tekst: "Provinciale Statenverkiezingen elke 4 jaar — bepalen ook indirect de Eerste Kamer." }],
          basiskennis: [{ onderwerp: "Niet verwarren", uitleg: "12 = provincies. 21 = waterschappen. ~340 = gemeenten. Verschillende lagen, andere aantallen." }],
          niveaus: { basis: "12 provincies. A.", simpeler: "Nederland heeft 12 provincies — van Groningen tot Limburg, plus Flevoland. = A.", nogSimpeler: "12 = A." },
        },
      },
      {
        q: "Wie verzorgt **jeugdzorg** (sinds 2015)?",
        options: ["De gemeente", "De Rijksoverheid", "De provincie", "Niemand"],
        answer: 0,
        wrongHints: [null, "Was vroeger Rijk, sinds 2015 gedecentraliseerd.", "Provincie heeft andere taken.", "Wel verzorgd."],
        uitlegPad: {
          stappen: [{ titel: "Decentralisatie 2015", tekst: "In 2015 ging jeugdzorg van Rijk → gemeente. Idee: gemeente is dichter bij gezinnen, kan beter maatwerk leveren. Praktijk: gemeenten kregen minder geld dan nodig." }],
          woorden: [{ woord: "jeugdzorg", uitleg: "Hulp aan jongeren + gezinnen met problemen: gedragsproblemen, opvoedhulp, soms uithuisplaatsing." }, { woord: "decentralisatie", uitleg: "Taken van Rijk overdragen naar lagere overheid (provincie/gemeente)." }],
          theorie: "Drie grote decentralisaties van 2015: jeugdzorg, WMO (zorg voor ouderen/zieken), Participatiewet (bijstand). Bedoeling: efficiëntie + maatwerk. Werkelijkheid: gemeenten financieel in problemen.",
          voorbeelden: [{ type: "praktijk", tekst: "Gezin met probleemkind belt gemeente → consulent komt → toewijzing hulp via lokaal jeugdzorg-team." }],
          basiskennis: [{ onderwerp: "Sinds 2015 lokaal", uitleg: "Voor 2015 was jeugdzorg landelijk. Nu lokaal — gevolg: 340 verschillende systemen in NL." }],
          niveaus: { basis: "Gemeente sinds 2015. A.", simpeler: "Sinds 2015 doet de gemeente jeugdzorg, niet meer het Rijk. = A.", nogSimpeler: "Gemeente = A." },
        },
      },
      {
        q: "Wat is **OZB**?",
        options: ["Onroerendezaakbelasting — gemeentebelasting op je huis", "Een Rijksbelasting", "Provinciale belasting", "Belasting op brandstof"],
        answer: 0,
        wrongHints: [null, "Niet Rijk.", "Niet provincie.", "Brandstof = accijns."],
        uitlegPad: {
          stappen: [{ titel: "OZB = gemeente + huis", tekst: "Onroerendezaakbelasting = belasting op het BEZIT van een huis of bedrijfspand. Geheven door de GEMEENTE. Berekend op basis van WOZ-waarde." }],
          woorden: [{ woord: "OZB", uitleg: "Onroerendezaakbelasting. Gemeentebelasting voor eigenaren van onroerend goed." }, { woord: "WOZ-waarde", uitleg: "Geschatte marktwaarde van je woning per 1 januari, vastgesteld door gemeente." }],
          theorie: "Tarief verschilt per gemeente (~0,05-0,15% van WOZ). Huiseigenaar krijgt jaarlijks gemeentelijke aanslag met OZB + afvalstoffenheffing + rioolheffing.",
          voorbeelden: [{ type: "berekening", tekst: "WOZ-waarde €400.000 × 0,1% = €400 OZB per jaar voor gemeente." }],
          basiskennis: [{ onderwerp: "Niet Rijk/accijns", uitleg: "Rijksbelastingen: IB, VPB, BTW. Accijns is op alcohol/brandstof/tabak. OZB is puur gemeente." }],
          niveaus: { basis: "OZB = gemeente. A.", simpeler: "OZB = belasting op je huis die de GEMEENTE int. Berekend op WOZ-waarde. = A.", nogSimpeler: "Huis + gemeente = A." },
        },
      },
      {
        q: "Een **waterschap** zorgt voor:",
        options: ["Dijken, sloten en waterkwaliteit", "Onderwijs", "Politie", "Parkeren"],
        answer: 0,
        wrongHints: [null, "Onderwijs is gemeente/Rijk.", "Politie is Rijk.", "Parkeren is gemeente."],
        uitlegPad: {
          stappen: [{ titel: "Vierde overheidslaag — water", tekst: "Waterschappen zijn een aparte overheid voor alles wat met WATER te maken heeft: dijken onderhouden, sloten schoonhouden, waterkwaliteit bewaken." }],
          woorden: [{ woord: "waterschap", uitleg: "Speciale overheid voor water. 21 in NL. Heeft eigen verkiezingen + waterschapsbelasting." }],
          theorie: "Reden voor aparte laag: water trekt zich niets aan van gemeente/provinciegrenzen. Een rivier loopt door meerdere gemeentes — best beheerd door één instantie. Bestaan al sinds Middeleeuwen.",
          voorbeelden: [{ type: "praktijk", tekst: "Waterschap Rivierenland onderhoudt dijken langs Waal + Lek. Watersnoodramp 1953 = aanleiding voor moderne Deltawerken." }],
          basiskennis: [{ onderwerp: "Niet onderwijs/politie", uitleg: "Onderwijs/politie/parkeren zijn taken van andere overheidslagen, niet waterschappen." }],
          niveaus: { basis: "Dijken + water. A.", simpeler: "Waterschap = alles met water: dijken, sloten, waterkwaliteit. = A.", nogSimpeler: "Water = A." },
        },
      },
      {
        q: "Welke instantie maakt **landelijke wetten**?",
        options: ["Rijksoverheid (Tweede + Eerste Kamer)", "Gemeenteraad", "Provinciale Staten", "ACM"],
        answer: 0,
        wrongHints: [null, "Gemeente maakt verordeningen, geen wetten.", "Provincie maakt geen wetten.", "ACM is een toezichthouder."],
        uitlegPad: {
          stappen: [{ titel: "Wetgevende macht", tekst: "Alleen de Rijksoverheid kan landelijke wetten maken. Procedure: regering dient wetsvoorstel in → Tweede Kamer stemt → Eerste Kamer stemt → Koning ondertekent → wet." }],
          woorden: [{ woord: "wet", uitleg: "Regel die voor heel NL geldt. Gemaakt door Tweede + Eerste Kamer (parlement)." }, { woord: "verordening", uitleg: "Lokale regel van gemeente of provincie — geen wet." }],
          theorie: "Trias politica: wetgevende macht (parlement), uitvoerende macht (regering), rechterlijke macht (rechters). Onafhankelijk van elkaar — controle/balans.",
          voorbeelden: [{ type: "wet", tekst: "Wet op het Hoger Onderwijs, Wegenverkeerswet, AOW-wet, Belastingwet." }, { type: "verordening", tekst: "Parkeerverordening gemeente Amsterdam — alleen geldig in Amsterdam." }],
          basiskennis: [{ onderwerp: "ACM = uitvoeren", uitleg: "ACM (Autoriteit Consument & Markt) voert wetten UIT, maakt ze niet." }],
          niveaus: { basis: "Tweede + Eerste Kamer. A.", simpeler: "Landelijke wetten = Tweede Kamer + Eerste Kamer (Rijksoverheid). = A.", nogSimpeler: "Parlement = A." },
        },
      },
      {
        q: "Wat ging er mis bij de **decentralisatie van jeugdzorg** (2015)?",
        options: ["Gemeenten kregen meer taken maar minder geld dan nodig", "Niemand merkte iets", "Rijk nam alles terug", "Het werd goedkoper en beter"],
        answer: 0,
        wrongHints: [null, "Wel veel media-aandacht.", "Rijk gaf juist los.", "Vaak juist duurder en moeilijker."],
        uitlegPad: {
          stappen: [{ titel: "Bezuinigingsoperatie", tekst: "Bij decentralisatie 2015 ging jeugdzorg + WMO + bijstand naar gemeenten. Maar het Rijk gaf MINDER geld mee dan de oude budgetten — bezuinigingsoperatie. Gemeenten kwamen in financiële problemen." }],
          woorden: [{ woord: "decentralisatie", uitleg: "Taken van Rijk → gemeenten doorgeven." }, { woord: "korting bij overheveling", uitleg: "Rijk gaf minder geld dan eerder voor dezelfde taken — verwachting was efficiëntiewinst, maar bleek te krap." }],
          theorie: "Effect: gemeenten moesten wachtlijsten invoeren, eigen bijdragen verhogen, of geld bijleggen uit gemeentefonds. Sommige gemeenten kondigden faillissement aan. Probleem actueel — Rijk doet incidentele bijspijkeringen.",
          voorbeelden: [{ type: "praktijk", tekst: "Gemeente Zaanstad: jeugdzorg-tekort €15 mln in 2018, moest snijden in andere voorzieningen." }],
          basiskennis: [{ onderwerp: "Wel iets merkbaar", uitleg: "Burgers merkten: langere wachtlijsten + hogere eigen bijdragen + verschillende behandeling per gemeente (postcodeloterij)." }],
          niveaus: { basis: "Meer taken, minder geld. A.", simpeler: "Gemeenten kregen nieuwe taken EN te weinig geld → financiële problemen. = A.", nogSimpeler: "Te weinig geld = A." },
        },
      },
    ],
  },
  // ─── Stap 3: Rijksbegroting ──────────────────────────────
  {
    title: "De Rijksbegroting — het huishoudboekje van NL",
    explanation: "De **Rijksbegroting** is het 'huishoudboekje' van de overheid: hoeveel geld komt erin, hoeveel gaat eruit?\n\n**Wordt elk jaar op Prinsjesdag** (3e dinsdag van september) gepresenteerd in de **Miljoenennota**.\nDe **Troonrede** (toespraak koning) geeft de hoofdlijnen.\n\n**Inkomsten** (~€350-400 miljard/jaar):\n• **Belastingen** (verreweg grootste): IB, BTW, VPB, accijns\n• **Sociale premies** (AOW, WW)\n• **Aardgasbaten** (steeds kleiner — Groningen-veld dicht)\n• **Dividend** uit staatsbedrijven (NS, Schiphol, BNG)\n• **Boetes**\n\n**Uitgaven**:\n• **Sociale zekerheid** (~30% — AOW, WW, bijstand): grootste post\n• **Zorg** (~20%)\n• **Onderwijs** (~10%)\n• **Defensie**\n• **Infrastructuur** (wegen, OV)\n• **Rente op de staatsschuld** — verplichte uitgave\n• **EU-afdracht** (~€8 miljard)\n• **Ontwikkelingshulp**\n\n**Begrotingsoverschot**: meer inkomsten dan uitgaven\n• Schuld kan af, of geld in een 'spaarpot' (nu eigenlijk geen)\n\n**Begrotingstekort**: meer uitgaven dan inkomsten\n• Er moet bij geleend worden\n• Staatsschuld groeit\n\n**Cyclisch begroten**:\n• Bij economische groei: belasting komt vanzelf binnen → overschot\n• Bij recessie: minder belasting + meer uitkeringen → tekort\n• Overheid kan met begroting de economie stimuleren of afremmen\n\n**Vaste uitgaven** (kan overheid moeilijk aanpassen):\n• Pensioenen (AOW)\n• Rente op schuld\n• Verdragen (EU, NAVO)\n→ Slechts ~30% van de begroting is écht 'vrij' beïnvloedbaar\n\n**Wie maakt de begroting?**\n• Minister van Financiën stelt voor\n• Tweede Kamer keurt goed (kan amenderen)\n• Eerste Kamer keurt goed (kan alleen ja/nee)",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">RIJKSBEGROTING</text>
<rect x="20" y="40" width="135" height="120" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="87" y="58" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">INKOMSTEN</text>
<text x="87" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">~€370 miljard</text>
<text x="87" y="95" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">belastingen (groot)</text>
<text x="87" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">sociale premies</text>
<text x="87" y="121" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">aardgas (klein)</text>
<text x="87" y="134" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">dividend NS/Schiphol</text>
<text x="87" y="147" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">boetes</text>
<rect x="165" y="40" width="135" height="120" rx="6" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.5"/>
<text x="232" y="58" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">UITGAVEN</text>
<text x="232" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">~€370 miljard</text>
<text x="232" y="95" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">sociale zek. 30%</text>
<text x="232" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">zorg 20%</text>
<text x="232" y="121" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">onderwijs · defensie</text>
<text x="232" y="134" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">infra · EU · rente</text>
<text x="232" y="147" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">ontwikkelingshulp</text>
<text x="160" y="185" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">PRINSJESDAG — 3e dinsdag sept.</text>
<text x="160" y="203" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Miljoenennota + Troonrede</text>
</svg>`,
    checks: [
      {
        q: "Wanneer wordt de Rijksbegroting gepresenteerd?",
        options: ["Op Prinsjesdag — 3e dinsdag van september", "Op Koningsdag", "1 januari", "Elke maand"],
        answer: 0,
        wrongHints: [null, "Koningsdag is een feestdag.", "Begrotingsjaar start dan, presentatie eerder.", "Begroting is jaarlijks."],
        uitlegPad: {
          stappen: [{ titel: "Prinsjesdag", tekst: "Elke 3e dinsdag van september presenteert de koning de Troonrede + minister van Financiën de Miljoenennota met de Rijksbegroting voor het komend jaar." }],
          woorden: [{ woord: "Prinsjesdag", uitleg: "3e dinsdag van september. Koningsrijtuig, Troonrede, Miljoenennota." }, { woord: "Rijksbegroting", uitleg: "Plan van inkomsten + uitgaven van Rijk voor 1 jaar." }],
          theorie: "Begrotingsjaar = kalenderjaar. Presentatie 3 maanden voor start — parlement heeft tot eind december om vragen te stellen + amendementen in te dienen. Daadwerkelijk goedgekeurd door beide Kamers.",
          voorbeelden: [{ type: "ritueel", tekst: "Koning rijdt met de Glazen Koets naar het Binnenhof, leest de Troonrede in de Ridderzaal." }],
          basiskennis: [{ onderwerp: "Niet 1 januari", uitleg: "Op 1 jan gaat begroting in, maar presentatie gebeurt al in september." }],
          niveaus: { basis: "3e dinsdag september. A.", simpeler: "Prinsjesdag = de derde dinsdag van september. Koning leest Troonrede. = A.", nogSimpeler: "Prinsjesdag = A." },
        },
      },
      {
        q: "Wat is verreweg de **grootste inkomstenbron** van de Rijksoverheid?",
        options: ["Belastingen", "Aardgasbaten", "Boetes", "Dividend NS"],
        answer: 0,
        wrongHints: [null, "Aardgasbaten zijn klein geworden.", "Boetes zijn marginaal.", "NS-dividend is gering."],
        uitlegPad: {
          stappen: [{ titel: "Belastingen domineren", tekst: "Verreweg het meeste geld komt binnen via belastingen + sociale premies: IB, BTW, VPB, accijns. Samen ~95% van de inkomsten. De rest (gas, boetes, dividend) is klein." }],
          woorden: [{ woord: "Rijksinkomsten", uitleg: "Geld dat het Rijk binnenkrijgt: belastingen, premies, gas, boetes, dividend." }, { woord: "belastingsoorten", uitleg: "IB (loon), BTW (consumptie), VPB (bedrijfswinst), accijns (drank/brandstof)." }],
          theorie: "Verdeling ~ 2024: IB+loonheffing 40%, BTW 25%, sociale premies 20%, VPB 8%, accijns 5%, rest 2%. Aardgas is gekrompen door Groninger afbouw.",
          voorbeelden: [{ type: "gas", tekst: "Aardgasbaten waren ~€10 mrd in 2010s, nu ~€1 mrd door afsluiting Groningen." }],
          basiskennis: [{ onderwerp: "Boetes klein", uitleg: "Snelheidsboetes etc. zijn voor strafhandhaving, niet voor financiering. Marginale rijksinkomst." }],
          niveaus: { basis: "Belastingen. A.", simpeler: "Verreweg meeste rijksinkomsten komen uit BELASTINGEN — alle andere bronnen zijn klein. = A.", nogSimpeler: "Belasting = A." },
        },
      },
      {
        q: "Wat is de **Miljoenennota**?",
        options: ["Document met de plannen voor de Rijksbegroting", "Een toespraak van de koning", "Een rekening voor 1 miljoen", "Europese richtlijn"],
        answer: 0,
        wrongHints: [null, "Troonrede is de toespraak.", "Geen rekening — naam komt van miljarden bedragen.", "Puur Nederlands document."],
        uitlegPad: {
          stappen: [{ titel: "Plan-document", tekst: "Miljoenennota = financieel plan-document van het Kabinet. Bevat de uitgangspunten + verwachte inkomsten/uitgaven voor het komend jaar. Wordt op Prinsjesdag aangeboden door minister van Financiën." }],
          woorden: [{ woord: "Miljoenennota", uitleg: "Hoofdstuk van de Rijksbegroting met financiële plannen en economische verwachtingen." }, { woord: "Troonrede", uitleg: "Toespraak van de koning op Prinsjesdag waarin regering hoofdlijnen aankondigt." }],
          theorie: "Naam komt van: de bedragen lopen in miljarden, maar 'Miljardennota' kwam pas later in zwang. Klassieke naam blijft Miljoenennota.",
          voorbeelden: [{ type: "praktijk", tekst: "Miljoenennota 2025 ~700 pagina's met sectorale uitgaven, belastingplannen, schuldprognose." }],
          basiskennis: [{ onderwerp: "Niet de toespraak", uitleg: "Troonrede is de TOESPRAAK van de koning. Miljoenennota is het DOCUMENT van Financiën." }],
          niveaus: { basis: "Plan-document begroting. A.", simpeler: "Miljoenennota = boekwerk met financiële plannen Rijk voor komend jaar. = A.", nogSimpeler: "Plan-boek = A." },
        },
      },
      {
        q: "Wat is de **grootste uitgavenpost** van de Rijksoverheid?",
        options: ["Sociale zekerheid (~30%)", "Defensie", "Onderwijs", "Cultuur"],
        answer: 0,
        wrongHints: [null, "Defensie is veel kleiner (~3%).", "Onderwijs ~10%.", "Cultuur is klein."],
        uitlegPad: {
          stappen: [{ titel: "Sociale zekerheid #1", tekst: "AOW + WW + bijstand + WIA + toeslagen + kinderbijslag samen ~30% van Rijksuitgaven. Veruit grootste post." }],
          woorden: [{ woord: "sociale zekerheid", uitleg: "Stelsel van uitkeringen + toeslagen om iedereen een basisinkomen + sociale bescherming te garanderen." }],
          theorie: "Top uitgaven (~2024): sociale zekerheid 30%, zorg 20%, onderwijs 10%, openbaar bestuur+veiligheid 10%, infra 5%, defensie 3-5%, EU-afdracht 4%, rente staatsschuld 2-4%.",
          voorbeelden: [{ type: "verdeling", tekst: "Van elke €100 Rijksuitgaven: ~€30 sociaal, ~€20 zorg, ~€10 onderwijs. Verzorgingsstaat in actie." }],
          basiskennis: [{ onderwerp: "Vergrijzing-effect", uitleg: "Sociale zekerheid (vooral AOW + zorg) groeit door vergrijzing — meer ouderen, langer leven." }],
          niveaus: { basis: "Sociale zekerheid 30%. A.", simpeler: "Grootste uitgavenpost = sociale zekerheid (~30% van alles). = A.", nogSimpeler: "AOW etc. = A." },
        },
      },
      {
        q: "Een **begrotingstekort** betekent:",
        options: ["Meer uitgaven dan inkomsten — staatsschuld groeit", "Belasting wordt teruggegeven", "Geen begroting", "Iedereen krijgt extra toeslag"],
        answer: 0,
        wrongHints: [null, "Bij overschot soms wel.", "Begroting bestaat sowieso.", "Geen automatische toeslag."],
        uitlegPad: {
          stappen: [{ titel: "Tekort = bijlenen", tekst: "Begrotingstekort = uitgaven > inkomsten. Verschil moet de overheid LENEN op de kapitaalmarkt via staatsobligaties. Schuld groeit met dat bedrag." }],
          woorden: [{ woord: "begrotingstekort", uitleg: "Negatief saldo: meer uitgaven dan inkomsten. Resultaat: bijlenen + staatsschuld stijgt." }, { woord: "begrotingsoverschot", uitleg: "Positief saldo: inkomsten > uitgaven. Kan worden gebruikt om schuld af te lossen." }],
          theorie: "EMU-norm: tekort < 3% BBP. NL had 2024 ~€20 mrd tekort = ~2,5% BBP, net onder grens. Tijdens corona ging dit ver omhoog (~13% in 2020) — uitzondering toegestaan.",
          voorbeelden: [{ type: "rekensom", tekst: "Inkomsten €350 mrd, uitgaven €370 mrd → tekort €20 mrd → staatsschuld stijgt met €20 mrd." }],
          basiskennis: [{ onderwerp: "Schuld stijgt", uitleg: "Tekort wordt geleend → staatsschuld groeit met dat bedrag. Mechanisme van schuldopbouw." }],
          niveaus: { basis: "Uitgaven > inkomsten. A.", simpeler: "Begrotingstekort = meer uitgeven dan binnenkrijgen → overheid moet bijlenen → schuld stijgt. = A.", nogSimpeler: "Tekort = bijlenen = A." },
        },
      },
      {
        q: "Wie keurt de begroting **definitief goed**?",
        options: ["Tweede Kamer + Eerste Kamer", "De koning", "De minister van Financiën", "De Belastingdienst"],
        answer: 0,
        wrongHints: [null, "De koning ondertekent ceremonieel maar parlement beslist.", "Hij/zij stelt voor, parlement beslist.", "Belastingdienst voert uit."],
        uitlegPad: {
          stappen: [{ titel: "Parlement beslist", tekst: "Regering DIENT begroting in. Tweede Kamer behandelt + amenden + stemt. Eerste Kamer beoordeelt + stemt. Pas met goedkeuring van BEIDE Kamers wordt begroting wet." }],
          woorden: [{ woord: "Tweede Kamer", uitleg: "150 leden, direct gekozen. Hoofdrol bij budgetbehandeling." }, { woord: "Eerste Kamer", uitleg: "75 leden, indirect gekozen door Provinciale Staten. Toetst kwaliteit van wetten." }],
          theorie: "Parlementaire controle: Kamer kan begroting WIJZIGEN via amendement (Tweede Kamer) of AFWIJZEN (zowel Tweede als Eerste). Een afgewezen begroting = kabinet valt vaak.",
          voorbeelden: [{ type: "praktijk", tekst: "Begroting Onderwijs €40 mrd → Tweede Kamer voegt €500 mln toe voor lerarensalarissen → Eerste Kamer keurt goed → wet." }],
          basiskennis: [{ onderwerp: "Niet minister", uitleg: "Minister van Financiën STELT VOOR (Miljoenennota). Parlement beslist." }],
          niveaus: { basis: "Tweede + Eerste Kamer. A.", simpeler: "Beide Kamers moeten goedkeuren. Dan pas is begroting officieel. = A.", nogSimpeler: "Parlement = A." },
        },
      },
    ],
  },
  // ─── Stap 4: Staatsschuld ────────────────────────────────
  {
    title: "Staatsschuld — wat als er steeds bij wordt geleend?",
    explanation: "**Staatsschuld** = alle schulden die de overheid in de loop der jaren heeft opgebouwd.\n\nNederland heeft een schuld van **~€500 miljard** (eind 2024). Geleend bij banken, pensioenfondsen en investeerders (via **staatsobligaties**).\n\n**Staatsobligatie**: lening-papiertje van de overheid. Investeerder leent de staat geld voor X jaar tegen Y% rente.\n\n**Waarom is staatsschuld een probleem?**\n• **Rente** moet elk jaar betaald worden — geld dat NIET aan onderwijs of zorg kan\n• Schuld stijgt jaar op jaar bij begrotingstekort\n• **EMU-norm** (EU): schuld max 60% van het BBP\n\n**EMU = Economische en Monetaire Unie**:\n• Stabiliteits- en Groeipact (1997)\n• EU-landen mogen schuld max **60% BBP** + tekort max **3% BBP**\n• Bij overschrijding: 'buitensporig tekort' procedure\n• In praktijk: regel is vaak overschreden (Italië, Frankrijk, ook NL tijdens corona)\n\n**Waarom is sommige schuld OK?**\n• Voor **investeringen** die later geld opleveren (snelweg, hoger onderwijs)\n• Tijdens **crisissen** (corona, financiële crisis 2008) is bijlenen normaal — economie draaiende houden\n• Een land is geen huishouden: kan in principe altijd herfinancieren\n\n**BBP (Bruto Binnenlands Product)** = alles wat in NL in 1 jaar wordt geproduceerd.\nNL BBP ~€1.000 miljard/jaar.\n\nSchuld als % van BBP zegt MEER dan absoluut bedrag:\n• Een arm land met €100 miljard schuld is erger dan een rijk land met €500 miljard schuld\n• Vergelijk: Japan schuld ~250% BBP, USA ~120%, NL ~50%\n\n**Wat als rente stijgt?**\n• 1% rentestijging op €500 mrd schuld = €5 mrd EXTRA per jaar\n• Concurrentie met andere uitgaven\n• Drukt regeringen tot bezuinigingen\n\n**Schuldsanering in andere landen**:\n• **Inflatie**: schuld in vaste euro's wordt minder waard (verkapte vorm)\n• **Hoge belasting + bezuinigen** (Griekenland 2010)\n• Soms **schuldkwijtschelding** (na crisis)\n\n**Belangrijk**: schuld OPLOSSEN duurt decennia. Voorkomen is makkelijker.",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">STAATSSCHULD NL ~€500 mrd</text>
<line x1="40" y1="40" x2="40" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<line x1="40" y1="160" x2="290" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<text x="20" y="50" fill="${COLORS.text}" font-size="9" font-family="Arial">% BBP</text>
<text x="240" y="175" fill="${COLORS.text}" font-size="9" font-family="Arial">jaar</text>
<line x1="40" y1="80" x2="290" y2="80" stroke="${COLORS.aanbod}" stroke-width="1.5" stroke-dasharray="4 3"/>
<text x="240" y="74" fill="${COLORS.aanbod}" font-size="10" font-family="Arial" font-weight="bold">EMU 60%</text>
<polyline points="60,100 100,90 140,95 180,75 220,85 260,90" fill="none" stroke="${COLORS.geld}" stroke-width="2.5"/>
<text x="60" y="125" fill="${COLORS.geld}" font-size="10" font-family="Arial">NL ~50%</text>
<text x="160" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">vergelijk: Japan ~250% · USA ~120%</text>
</svg>`,
    checks: [
      {
        q: "Wat is de **EMU-norm** voor staatsschuld?",
        options: ["Maximaal 60% van het BBP", "Altijd onder €100 miljard", "Geen schuld toegestaan", "100% BBP"],
        answer: 0,
        wrongHints: [null, "Bedragen verschillen per land.", "Schuld is wel toegestaan.", "Te ruim — economen alarm."],
        uitlegPad: {
          stappen: [{ titel: "60% BBP regel", tekst: "EMU = Economische en Monetaire Unie (eurozone). Stabiliteits- en Groeipact bepaalt: staatsschuld max 60% van BBP + tekort max 3% BBP per jaar." }],
          woorden: [{ woord: "EMU-norm", uitleg: "Eurozone-regels voor begrotingsdiscipline. 60% schuld + 3% tekort." }, { woord: "Stabiliteits- en Groeipact", uitleg: "EU-verdrag (1997) dat begrotingsdiscipline in eurozone borgt." }],
          theorie: "Doel: voorkomen dat één land de euro destabiliseert. In praktijk vaak overschreden (Italië, Frankrijk, soms NL). Buitensporig-tekort-procedure leidt zelden tot harde sancties.",
          voorbeelden: [{ type: "NL", tekst: "NL ~50% BBP — keurig binnen norm." }, { type: "buiten", tekst: "Italië ~140%, Griekenland ~165%, Frankrijk ~110% — buiten norm." }],
          basiskennis: [{ onderwerp: "Niet absoluut bedrag", uitleg: "Norm is PERCENTAGE van BBP, niet vast bedrag. Grotere economieën mogen meer schuld." }],
          niveaus: { basis: "60% BBP. A.", simpeler: "EMU-norm = staatsschuld mag max 60% van BBP zijn binnen de eurozone. = A.", nogSimpeler: "60% = A." },
        },
      },
      {
        q: "Waarom kan **lenen soms zinvol** zijn voor de overheid?",
        options: ["Voor investeringen die later geld opleveren (infra, onderwijs)", "Belasting verlagen", "Uitkeringen extra hoog maken", "Lenen is altijd slecht"],
        answer: 0,
        wrongHints: [null, "Verschuift probleem naar later.", "Niet duurzaam.", "Soms is lenen rationeel."],
        uitlegPad: {
          stappen: [{ titel: "Investeren = goede schuld", tekst: "Lenen voor INVESTERINGEN die later geld opleveren is zinvol: spoorlijn, snelweg, onderwijs. Latere generaties profiteren ook → betalen mee via belasting." }],
          woorden: [{ woord: "investering", uitleg: "Uitgave die in de toekomst opbrengsten oplevert (productiviteit, economische groei)." }, { woord: "consumptieve uitgaven", uitleg: "Uitgaven zonder toekomstige opbrengst (uitkeringen, lonen)." }],
          theorie: "Onderscheid: investeringen (Deltawerken, hoge-snelheidstrein, universiteiten) bouwen economisch kapitaal op. Consumptieve uitgaven (bv. AOW-verhoging) niet. Lenen voor investeringen ≠ lenen voor consumptie.",
          voorbeelden: [{ type: "infra", tekst: "Nieuwe haven Rotterdam-Maasvlakte 2: €3 mrd lenen → tientallen jaren extra haveninkomsten." }, { type: "onderwijs", tekst: "Investeren in universiteiten → hoger opgeleide beroepsbevolking → hogere lonen + meer belasting later." }],
          basiskennis: [{ onderwerp: "Niet altijd slecht", uitleg: "Een land kan in principe altijd herfinancieren (anders dan huishouden). Investeringen kunnen rentebetaling makkelijk terugverdienen." }],
          niveaus: { basis: "Voor investeringen. A.", simpeler: "Lenen voor wegen, scholen, onderzoek levert later meer geld op dan het kost. Dat is goede schuld. = A.", nogSimpeler: "Investeringen = A." },
        },
      },
      {
        q: "Wat is een **staatsobligatie**?",
        options: ["Lening-papiertje van de staat aan investeerder, met rente", "Een staatsbedrijf", "Belasting op staatsbezit", "Subsidie aan investeerders"],
        answer: 0,
        wrongHints: [null, "Niet een bedrijf.", "Geen belasting.", "Tegendeel — investeerder krijgt rente."],
        uitlegPad: {
          stappen: [{ titel: "Lening van investeerder aan staat", tekst: "Investeerder (pensioenfonds, bank, individu) leent geld aan de staat. Krijgt vooraf afgesproken RENTE per jaar + na X jaar het bedrag terug. Documentatie heet 'obligatie'." }],
          woorden: [{ woord: "staatsobligatie", uitleg: "Schuldpapier uitgegeven door de overheid. Looptijd 5-30 jaar, vaste rente." }, { woord: "kapitaalmarkt", uitleg: "Markt waar staten + bedrijven geld lenen door obligaties uit te geven." }],
          theorie: "Rente hangt af van vertrouwen in het land. NL betaalt lage rente (~3% in 2024), Griekenland veel hoger. Pensioenfondsen kopen vaak NL-obligaties — veilige belegging.",
          voorbeelden: [{ type: "praktijk", tekst: "Pensioenfonds koopt €100 mln NL-obligatie 10-jaar 3% → krijgt €3 mln rente/jaar, na 10 jaar de €100 mln terug." }],
          basiskennis: [{ onderwerp: "Niet bedrijf", uitleg: "Staatsobligatie is een PAPIERTJE, geen organisatie. Een staatsbedrijf zoals NS is iets anders." }],
          niveaus: { basis: "Lening met rente. A.", simpeler: "Staat leent geld door obligaties te verkopen. Koper krijgt rente + bedrag terug na looptijd. = A.", nogSimpeler: "Lening = A." },
        },
      },
      {
        q: "Bij **1% rentestijging op €500 mrd schuld** = ... extra rente per jaar?",
        options: ["€5 miljard", "€500 miljoen", "€500 miljard", "€50 miljoen"],
        answer: 0,
        wrongHints: [null, "Te weinig — 1% van 500 mrd.", "Veel te veel — geen verdubbeling.", "Veel te weinig."],
        uitlegPad: {
          stappen: [{ titel: "1% van €500 mrd", tekst: "1% × €500.000.000.000 = €5.000.000.000 = €5 miljard. Per jaar EXTRA rente over de hele schuld." }],
          woorden: [{ woord: "rentegevoeligheid", uitleg: "Mate waarin overheidsuitgaven veranderen bij rentewijziging." }],
          theorie: "Niet hele schuld wordt direct geraakt — alleen nieuwe + her-financierde leningen. Maar over tijd loopt effect op. €5 mrd is ongeveer wat overheid aan defensie uitgeeft.",
          voorbeelden: [{ type: "schaal", tekst: "€5 mrd = ongeveer hele defensiebudget of het volledige cultuur+onderwijs+sport-budget samen." }],
          basiskennis: [{ onderwerp: "Snel rekenen", uitleg: "1% van miljard = 10 miljoen. 1% van 500 miljard = 5 miljard. Schalen via factoren van 1000." }],
          niveaus: { basis: "1% × 500 = 5 mrd. A.", simpeler: "1% van €500 miljard = €5 miljard. Een groot bedrag per jaar extra. = A.", nogSimpeler: "€5 mrd = A." },
        },
      },
      {
        q: "**Japan staatsschuld** is ongeveer:",
        options: ["~250% van BBP (extreem hoog)", "0%", "30%", "1000%"],
        answer: 0,
        wrongHints: [null, "Geen land heeft 0%.", "Veel landen lager — Japan is uitzonderlijk hoog.", "Onmogelijk hoog."],
        uitlegPad: {
          stappen: [{ titel: "Japan #1 schuldenland", tekst: "Japan heeft de hoogste staatsschuld ter wereld in % BBP: ~250%. Reden: jarenlange recessie + vergrijzing + lage rente waardoor lenen bleef opstapelen." }],
          woorden: [{ woord: "schuld/BBP-ratio", uitleg: "Standaard maat voor schuldzwaarte: hoeveel van de jaarlijkse productie is de totale schuld?" }],
          theorie: "Vergelijking: Japan 250%, VS 120%, Frankrijk 110%, Italië 140%, Duitsland 65%, NL 50%. Japan kan dit aanhouden dankzij grotendeels binnenlandse schuld + lage rente.",
          voorbeelden: [{ type: "Japan", tekst: "Sinds 1990s 'verloren decennium' met deflatie + lage groei. Overheid leende continu bij om economie te stimuleren." }],
          basiskennis: [{ onderwerp: "Niet 0% of 1000%", uitleg: "0% bestaat praktisch niet. 1000% zou collaps zijn — schuld kan niet onbeperkt groeien." }],
          niveaus: { basis: "~250% BBP. A.", simpeler: "Japan heeft de hoogste staatsschuld ter wereld: ongeveer 250% van het BBP. = A.", nogSimpeler: "Japan hoog = A." },
        },
      },
      {
        q: "Hoe **drukt een hoge staatsschuld de samenleving**?",
        options: ["Veel rente betalen → minder geld voor onderwijs/zorg", "Iedereen krijgt korting", "Niemand merkt iets", "Burgers krijgen rente"],
        answer: 0,
        wrongHints: [null, "Geen automatische korting.", "Indirect wel via belastingdruk.", "Burgers betalen, niet ontvangen."],
        uitlegPad: {
          stappen: [{ titel: "Rente vreet budget op", tekst: "Hoge schuld → veel rente per jaar betalen. Dat geld kan NIET aan onderwijs, zorg of infrastructuur worden uitgegeven. Verdringingseffect." }],
          woorden: [{ woord: "rente-uitgaven", uitleg: "Jaarlijkse rente die overheid betaalt over staatsschuld. Bij NL ~€10 mrd in 2024." }],
          theorie: "Hoge rente-uitgaven verdringen andere posten (crowding-out effect). Politiek dilemma: bezuinigen op onderwijs/zorg of meer belasting heffen. Beide impopulair.",
          voorbeelden: [{ type: "praktijk", tekst: "€10 mrd renteslag = budget van Justitie of Defensie. Bij rentestijging 2022-2023 verschoven middelen." }],
          basiskennis: [{ onderwerp: "Burgers betalen", uitleg: "Investeerders ontvangen rente. Burgers betalen die rente via belasting." }],
          niveaus: { basis: "Rente vreet budget. A.", simpeler: "Veel rente betalen aan investeerders → minder geld over voor onderwijs/zorg. = A.", nogSimpeler: "Rente = minder budget = A." },
        },
      },
    ],
  },
  // ─── Stap 5: Conjunctuur ────────────────────────────────
  {
    title: "Conjunctuur — economische op-en-neer",
    explanation: "De economie groeit niet altijd gelijkmatig. Er zijn **schommelingen** rond een lange-termijn-trend. Dit heet **conjunctuur**.\n\n**Conjunctuurcyclus** — fasen:\n\n**1. Hoogconjunctuur (boom)**\n• Hoge groei BBP\n• Lage werkloosheid → krapte\n• Bedrijven maken winst\n• Lonen stijgen\n• Risico: hoge inflatie\n\n**2. Recessie**\n• 2 kwartalen op rij krimp BBP\n• Werkloosheid stijgt\n• Bedrijven minder winst, soms failliet\n• Consumenten besteden minder\n• Negatieve sfeer\n\n**3. Depressie**\n• Lange, diepe recessie (jaren)\n• Bv. 1930-1935 (Great Depression)\n\n**4. Herstel**\n• Bodem bereikt, voorzichtig groeien\n• Werkloosheid daalt langzaam\n\n**Wat veroorzaakt conjunctuur?**\n• **Vertrouwen**: consumenten/bedrijven optimistisch → kopen meer → groei\n• **Externe schokken**: oorlog, pandemie, energieprijs (1973, 2008, 2020, 2022)\n• **Cycle van investeringen** (Kondratieff: ~50 jaar)\n• **Krediet**: makkelijk lenen → meer activiteit; schuldcrisis → krimp\n\n**Wat doet de overheid bij recessie?**\n• **Belasting verlagen** → meer besteedbaar inkomen\n• **Investeren** in infrastructuur (banen) → directe stimulans\n• **Uitkeringen verhogen** of verlengen → koopkracht\n• Heet **anticyclisch begroten**: tegen de cyclus in werken\n• Probleem: tekort groeit\n\n**Wat doet de overheid bij hoogconjunctuur?**\n• **Begrotingsoverschot** opbouwen\n• Belasting NIET verlagen (oververhitting voorkomen)\n• Sparen voor de volgende recessie\n\n**Politiek lastig**: kiezers willen belastingverlaging als het goed gaat, niet wanneer overheid moet bezuinigen.\n\n**Recente recessies in NL**:\n• 2008-2009 (financiële crisis)\n• 2012-2014 (eurocrisis)\n• 2020 (corona — kort maar heftig)\n\n**Coronacrisis 2020**:\n• BBP daalde 3,7% in 1 jaar\n• Overheid pompte ~€80 mrd in NOW (steun werkgevers), TOZO (zzp), TVL (vaste lasten)\n• Schuld steeg, maar economie veerde sneller op dan verwacht",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">CONJUNCTUURCYCLUS</text>
<line x1="40" y1="40" x2="40" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<line x1="40" y1="160" x2="290" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<line x1="40" y1="100" x2="290" y2="100" stroke="${COLORS.muted}" stroke-width="1" stroke-dasharray="3 3"/>
<text x="295" y="103" fill="${COLORS.muted}" font-size="9" font-family="Arial">trend</text>
<path d="M 50,100 Q 80,60 110,100 T 170,100 T 230,100 T 290,100" fill="none" stroke="${COLORS.geld}" stroke-width="2.5"/>
<text x="80" y="55" fill="${COLORS.geld}" font-size="9" font-family="Arial">boom</text>
<text x="140" y="135" fill="${COLORS.aanbod}" font-size="9" font-family="Arial">recessie</text>
<text x="200" y="55" fill="${COLORS.geld}" font-size="9" font-family="Arial">boom</text>
<text x="160" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">recessie = 2 kwartalen krimp</text>
</svg>`,
    checks: [
      {
        q: "Wat is een **recessie**?",
        options: ["Twee kwartalen op rij krimp van het BBP", "Eén dag minder verkoop", "Een belasting verlaging", "Een nieuwe wet"],
        answer: 0,
        wrongHints: [null, "Eén dag is geen recessie.", "Niet hetzelfde.", "Beleidsmaatregel, geen toestand."],
        uitlegPad: {
          stappen: [{ titel: "Technische definitie", tekst: "Recessie = ECONOMIE KRIMPT 2 kwartalen op rij. BBP daalt ten opzichte van vorige kwartalen. Officiële maatstaf voor 'economie in mineur'." }],
          woorden: [{ woord: "recessie", uitleg: "Twee opeenvolgende kwartalen negatieve BBP-groei. Officiële economische toestand." }, { woord: "kwartaal", uitleg: "3 maanden. Een jaar heeft 4 kwartalen (Q1-Q4)." }],
          theorie: "CBS meet BBP per kwartaal. Twee minussen op rij = recessie. Werkloosheid stijgt vaak NA recessie (lagging indicator). NL recessies: 2008-09, 2012-14, 2020.",
          voorbeelden: [{ type: "2020", tekst: "NL Q1 2020 −1,6%, Q2 2020 −9,3% → twee kwartalen min → recessie verklaard." }],
          basiskennis: [{ onderwerp: "Niet zomaar 'slecht'", uitleg: "Recessie is een TECHNISCHE term met regel. Niet elke economische tegenwind is recessie." }],
          niveaus: { basis: "2 kwartalen krimp. A.", simpeler: "Recessie = de economie wordt 2 kwartalen op rij kleiner. = A.", nogSimpeler: "2 kw krimp = A." },
        },
      },
      {
        q: "Wat doet een overheid **anticyclisch** in een recessie?",
        options: ["Belasting verlagen + meer uitgeven om vraag te stimuleren", "Belasting verhogen + bezuinigen", "Niets doen", "De crisis afkondigen"],
        answer: 0,
        wrongHints: [null, "Tegendeel — versterkt recessie.", "Past niet bij anticyclisch.", "Symbolisch, geen beleid."],
        uitlegPad: {
          stappen: [{ titel: "Tegen de cyclus in", tekst: "Anticyclisch = TEGEN de economische cyclus werken. Recessie? Stimuleren: belasting omlaag + uitgaven omhoog = meer geld in economie → economie veert terug." }],
          woorden: [{ woord: "anticyclisch begroten", uitleg: "Bij krimp uitgeven, bij groei sparen. Tegenwicht aan cyclus." }, { woord: "Keynesiaans beleid", uitleg: "Theorie van John Maynard Keynes: overheid moet in recessie de vraag opvijzelen." }],
          theorie: "Logica: in recessie minder besteden burgers → minder omzet bedrijven → ontslagen → nog minder besteden. Spiraal stoppen door overheid die WEL uitgeeft. Bij groei: oversparen om buffers op te bouwen voor volgende crisis.",
          voorbeelden: [{ type: "corona 2020", tekst: "NL gaf €80 mrd uit aan NOW + TOZO + TVL → ontslagen verminderd, bedrijven overleefden, economie veerde terug." }],
          basiskennis: [{ onderwerp: "Niet bezuinigen", uitleg: "Bezuinigen in recessie = procyclisch = VERERGERT crisis. Politiek verleidelijk, economisch schadelijk." }],
          niveaus: { basis: "Stimuleren in recessie. A.", simpeler: "Anticyclisch = overheid steekt geld in economie als die in dip zit. Belasting omlaag + meer uitgeven. = A.", nogSimpeler: "Stimuleren = A." },
        },
      },
      {
        q: "Tijdens **hoogconjunctuur**:",
        options: ["Hoge groei + lage werkloosheid + lonen stijgen", "Recessie", "Krimp van BBP", "Veel werkloosheid"],
        answer: 0,
        wrongHints: [null, "Tegendeel.", "Tegendeel.", "Tegendeel."],
        uitlegPad: {
          stappen: [{ titel: "Boom-fase", tekst: "Hoogconjunctuur = goede tijden. BBP groeit snel, bedrijven hebben veel orders, weinig werkloosheid, lonen onder druk → stijgen. Risico: oververhitting + inflatie." }],
          woorden: [{ woord: "hoogconjunctuur", uitleg: "Bovenkant van de economische cyclus. Hoge groei + lage werkloosheid." }, { woord: "oververhitting", uitleg: "Economie groeit te snel → grondstoffen-tekort + inflatie." }],
          theorie: "Conjunctuurfasen: hoogconjunctuur (boom) → recessie → depressie (extreem) → herstel → hoogconjunctuur. Cyclus duurt vaak 5-10 jaar.",
          voorbeelden: [{ type: "boom NL", tekst: "2017-2019: BBP +2-3%/jaar, werkloosheid <4%, lonen stegen, inflatie liep op." }],
          basiskennis: [{ onderwerp: "Niet recessie", uitleg: "Recessie = krimp. Hoogconjunctuur = sterke groei. Tegengestelden." }],
          niveaus: { basis: "Hoog: groei + lage werkloosheid. A.", simpeler: "Hoogconjunctuur = topfase: BBP stijgt, werkloosheid laag, lonen omhoog. = A.", nogSimpeler: "Topfase = A." },
        },
      },
      {
        q: "Wat veroorzaakt vaak een recessie?",
        options: ["Externe schokken (pandemie, energieprijs, schuldcrisis)", "Een verkiezing", "Een Koningsdag", "Goede zomer"],
        answer: 0,
        wrongHints: [null, "Verkiezing is geen oorzaak.", "Feestdag heeft geen impact.", "Weer is niet maatschappelijk."],
        uitlegPad: {
          stappen: [{ titel: "Plotselinge schok", tekst: "Recessies komen vaak door EXTERNE schokken: oorlog, pandemie, beursvalkrach, energieprijs-piek. Plotse impact verstoort economie." }],
          woorden: [{ woord: "externe schok", uitleg: "Onverwachte gebeurtenis van buitenaf die economie raakt: oorlog, pandemie, beurskrach." }, { woord: "endogene oorzaak", uitleg: "Interne oorzaak: vertrouwens-cyclus, schuldopbouw, overinvestering." }],
          theorie: "Bekende voorbeelden: oliecrisis 1973, Black Monday 1987, dotcom-crash 2000, financiële crisis 2008, eurocrisis 2012, corona 2020, energie-crisis 2022.",
          voorbeelden: [{ type: "schokken", tekst: "Lehman Brothers faillissement september 2008 → wereldwijde recessie 2009." }, { type: "corona", tekst: "Lockdowns maart 2020 → toerisme/horeca/luchtvaart in vrije val." }],
          basiskennis: [{ onderwerp: "Cyclisch + extern", uitleg: "Sommige recessies zijn ook gewoon eind van conjunctuurfase. Maar externe schokken vaak directe trigger." }],
          niveaus: { basis: "Externe schok. A.", simpeler: "Recessies komen vaak door grote externe gebeurtenissen: oorlog, virus, oliecrisis. = A.", nogSimpeler: "Schok = A." },
        },
      },
      {
        q: "Hoe groot was de daling NL-BBP in **2020 (corona)**?",
        options: ["~3,7%", "0%", "30%", "70%"],
        answer: 0,
        wrongHints: [null, "Daling was wel significant.", "Geen totale ineenstorting.", "Niet zo extreem."],
        uitlegPad: {
          stappen: [{ titel: "Corona-dip 2020", tekst: "NL BBP daalde ~3,7% in 2020 als geheel. Vooral Q2 (april-juni) was heftig (-9,3%) door lockdowns. Daarna herstel." }],
          woorden: [{ woord: "BBP-daling", uitleg: "Krimp van de totale economische productie." }],
          theorie: "Vergelijk: 2008 financiële crisis -3,7% in 2009. Corona was net zo zwaar maar veel KORTER (sneller herstel). Overheid steun voorkwam massa-faillissementen.",
          voorbeelden: [{ type: "data", tekst: "2020 BBP NL: -3,7%. Werkloosheid steeg licht. Steunpakket NOW/TOZO/TVL voorkwam ergere klap." }],
          basiskennis: [{ onderwerp: "Niet ineenstorting", uitleg: "30-70% krimp gebeurt in oorlog/burgeroorlog. Vrede + functionerende economie verliest 'maar' enkele procenten." }],
          niveaus: { basis: "~3,7% daling. A.", simpeler: "Corona-recessie NL: BBP daalde ongeveer 3,7% in 2020. = A.", nogSimpeler: "~3,7% = A." },
        },
      },
      {
        q: "Wat is een **depressie**?",
        options: ["Lange, diepe recessie van jaren (bv. 1930-1935)", "Korte tegenslag", "Hoge inflatie", "Snelle groei"],
        answer: 0,
        wrongHints: [null, "Te kort.", "Iets anders (hyperinflatie).", "Tegendeel."],
        uitlegPad: {
          stappen: [{ titel: "Recessie × tijd × diepte", tekst: "Depressie = bijzonder LANGE + DIEPE recessie. Niet maanden maar jaren. Niet -3% maar -10% of meer. Beroemd: Great Depression 1929-1939." }],
          woorden: [{ woord: "depressie", uitleg: "Extreme vorm van recessie: jaren durend, zeer diepe krimp, massale werkloosheid." }],
          theorie: "Great Depression startte met Wall Street Crash 1929 → 1933 VS werkloosheid 25% → ~10 jaar herstel → eindigde pas met WO2-economie. Sindsdien beleid voorkomt dit (overheid grijpt in).",
          voorbeelden: [{ type: "Great Depression", tekst: "VS werkloosheid 1929: 3% → 1933: 25%. BBP daalde 30%. Banken faillieten massaal." }],
          basiskennis: [{ onderwerp: "Niet inflatie", uitleg: "Depressie = krimp + werkloosheid. Hyperinflatie is iets anders (prijzen exploderen)." }],
          niveaus: { basis: "Lange diepe recessie. A.", simpeler: "Depressie = recessie die JAREN duurt en VEEL dieper is. Bv. 1930-1935. = A.", nogSimpeler: "Lang + diep = A." },
        },
      },
    ],
  },
  // ─── Stap 6: Marktordening ────────────────────────────
  {
    title: "Marktordening — overheid bewaakt de markt",
    explanation: "De markt werkt alleen goed als er **regels** zijn. Anders ontstaat misbruik, monopolie, oneerlijke concurrentie. **Marktordening** = de overheid stelt + handhaaft deze regels.\n\n**Belangrijke onderwerpen**:\n\n**1. Mededingingsbeleid (concurrentie)**\n• Voorkomt **kartels** (afspraken over prijzen tussen bedrijven)\n• Voorkomt **monopolie-misbruik** (alleen-aanbieder die hoge prijzen vraagt)\n• Verbiedt fusies die concurrentie schaden\n• Toezichthouder: **ACM** (Autoriteit Consument & Markt)\n\n**2. Consumentenbescherming**\n• Garantie op producten (2 jaar wettelijk)\n• Recht op herroeping (online: 14 dagen bedenktijd)\n• Eerlijke voorwaarden, geen verborgen kosten\n• ACM + Reclame Code Commissie\n\n**3. Productveiligheid**\n• NVWA (Nederlandse Voedsel- en Warenautoriteit) — voor voedsel\n• Strenge eisen: speelgoed, medicijnen, auto's\n\n**4. Milieuregels**\n• Vervuiling beperken (uitstoot, afval)\n• CO2-belasting + emissieheffingen\n• Zonder regels: tragedy of the commons (iedereen verspilt natuur)\n\n**5. Arbeidsmarkt**\n• Minimumloon (bewaakt door SZW + Inspectie SZW)\n• Veiligheid op werkplek (arbo-wet)\n• Anti-discriminatie (College Rechten van Mens)\n\n**6. Financiële markten**\n• Banken-toezicht (DNB, AFM)\n• Beschermen spaarders (DGS = Depositogarantiestelsel — €100k garantie per spaarder per bank)\n• Voorkomen woekerwinsten en misleiding\n\n**Bekende ACM-zaken**:\n• Bouwfraude 2002 (kartels in wegenbouw)\n• Apple App Store boetes (misbruik macht)\n• Ahold Delhaize-fusie (toegestaan met voorwaarden)\n\n**Internationaal**:\n• EU heeft eigen mededingingsbeleid (DG Competition)\n• Boetes Google, Apple, Meta — miljarden euro's\n• Beïnvloedt wereldwijd",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">MARKTORDENING</text>
<rect x="20" y="40" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="87" y="60" text-anchor="middle" fill="${COLORS.vraag}" font-size="10" font-family="Arial">mededinging</text>
<rect x="165" y="40" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="232" y="60" text-anchor="middle" fill="${COLORS.vraag}" font-size="10" font-family="Arial">consumenten</text>
<rect x="20" y="80" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="87" y="100" text-anchor="middle" fill="${COLORS.geld}" font-size="10" font-family="Arial">veiligheid</text>
<rect x="165" y="80" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="232" y="100" text-anchor="middle" fill="${COLORS.geld}" font-size="10" font-family="Arial">milieu</text>
<rect x="20" y="120" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="87" y="140" text-anchor="middle" fill="${COLORS.warm}" font-size="10" font-family="Arial">arbeidsmarkt</text>
<rect x="165" y="120" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="232" y="140" text-anchor="middle" fill="${COLORS.warm}" font-size="10" font-family="Arial">financiële markt</text>
<text x="160" y="180" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">ACM · NVWA · DNB · AFM</text>
<text x="160" y="200" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">toezichthouders bewaken markten</text>
</svg>`,
    checks: [
      {
        q: "Wat doet de **ACM**?",
        options: ["Bewaakt eerlijke concurrentie + consumentenrechten", "Maakt nieuwe wetten", "Int belasting", "Geeft scholen subsidie"],
        answer: 0,
        wrongHints: [null, "Wetten = parlement.", "Belasting = Belastingdienst.", "Onderwijs is iets anders."],
        uitlegPad: {
          stappen: [{ titel: "Marktwaakhond", tekst: "ACM = Autoriteit Consument & Markt. Onafhankelijke toezichthouder die eerlijke concurrentie + consumentenrechten bewaakt." }],
          woorden: [{ woord: "ACM", uitleg: "Autoriteit Consument & Markt. Bewaakt eerlijke markt, voorkomt kartels, beschermt consumenten." }],
          theorie: "Drie hoofdtaken: (1) toezicht op concurrentie (kartels), (2) consumentenbescherming, (3) sector-specifiek toezicht (energie, telecom, post). Kan boetes opleggen tot miljoenen.",
          voorbeelden: [{ type: "boete", tekst: "Apple AppStore-boete €50 mln voor misbruik macht. Google miljarden EU-boetes." }],
          basiskennis: [{ onderwerp: "Uitvoerend, niet wetgevend", uitleg: "ACM voert wetten UIT, maakt ze niet. Wetten komen van parlement." }],
          niveaus: { basis: "Marktbewaking. A.", simpeler: "ACM is de marktpolitie — bewaakt eerlijke concurrentie + consumentenrechten. = A.", nogSimpeler: "Marktwaakhond = A." },
        },
      },
      {
        q: "Een **kartel** is:",
        options: ["Geheime afspraak tussen bedrijven over prijzen of markten", "Goedkeuring overheid", "Een soort consumentenvereniging", "Reclame"],
        answer: 0,
        wrongHints: [null, "Geen overheidsproduct.", "Tegendeel — kartel werkt tegen consument.", "Reclame is publiek."],
        uitlegPad: {
          stappen: [{ titel: "Stiekem samenwerken", tekst: "Kartel = ILLEGALE afspraak tussen concurrenten om PRIJZEN HOOG te houden, MARKTEN te verdelen of NIEUWKOMERS te weren. Werkt tegen de consument." }],
          woorden: [{ woord: "kartel", uitleg: "Illegale prijsafspraak tussen concurrenten." }, { woord: "kartelvorming", uitleg: "Het maken van zulke afspraken — wettelijk verboden, hoge boetes mogelijk." }],
          theorie: "Waarom illegaal? Markt werkt alleen als bedrijven écht concurreren. Kartel maakt concurrentie schijn → consumenten betalen te veel. Klokkenluiders kunnen ACM tippen + krijgen immuniteit.",
          voorbeelden: [{ type: "bouwfraude", tekst: "Bouwfraude NL 2002: tientallen bouwbedrijven verdeelden opdrachten + spraken prijzen af. Miljoenenboetes." }, { type: "EU", tekst: "Vrachtwagen-kartel EU: DAF, Volvo, Daimler etc. spraken prijzen 14 jaar af. Boete €3,8 mrd." }],
          basiskennis: [{ onderwerp: "Niet 'goedkeuring'", uitleg: "Kartel is STIEKEM, niet officieel goedgekeurd. Tegendeel — verboden." }],
          niveaus: { basis: "Geheime prijsafspraak. A.", simpeler: "Kartel = bedrijven spreken stiekem af om prijs hoog te houden. Verboden. = A.", nogSimpeler: "Prijsafspraak = A." },
        },
      },
      {
        q: "Hoeveel garantie heb je op een product (in NL)?",
        options: ["Wettelijk 2 jaar (consumentenkoop)", "1 maand", "Geen", "5 jaar"],
        answer: 0,
        wrongHints: [null, "Te kort.", "Wel garantie.", "Niet de wettelijke standaard."],
        uitlegPad: {
          stappen: [{ titel: "Wettelijke 2 jaar", tekst: "Bij consumentenkoop (van bedrijf aan particulier) geldt WETTELIJKE garantie van 2 jaar. Sommige producten langer (witgoed → conformiteitseis afhankelijk van verwachte levensduur)." }],
          woorden: [{ woord: "consumentenkoop", uitleg: "Verkoop van product door bedrijf aan particulier. Bijzondere bescherming." }, { woord: "conformiteit", uitleg: "Product moet voldoen aan wat je redelijkerwijs mocht verwachten — bij defect: recht op gratis reparatie/vervanging." }],
          theorie: "Wet bewaakt conformiteit: koffiezetapparaat moet jaren werken, niet 6 maanden. Bij defect: eerst reparatie/vervanging GRATIS, anders prijsverlaging of geld terug. Webshops/winkels mogen geen kortere garantie afspreken.",
          voorbeelden: [{ type: "praktijk", tekst: "Telefoon kapot na 14 maanden = garantieclaim (binnen 2 jaar). Wasmachine kapot na 4 jaar = ook claim mogelijk (verwachte levensduur 10 jaar)." }],
          basiskennis: [{ onderwerp: "Niet fabrieksgarantie", uitleg: "Wettelijke garantie ≠ fabrieksgarantie. Fabriek geeft soms extra (bv. 5 jaar). Wettelijke 2 jaar is MINIMUM." }],
          niveaus: { basis: "2 jaar wettelijk. A.", simpeler: "Wet garandeert minimaal 2 jaar bij consumentenkoop. Webshop mag dit niet inkorten. = A.", nogSimpeler: "2 jaar = A." },
        },
      },
      {
        q: "Wat is **DGS**?",
        options: ["Depositogarantiestelsel — €100k per spaarder per bank gegarandeerd", "Een belasting", "Een soort lening", "Vakbond"],
        answer: 0,
        wrongHints: [null, "Geen belasting.", "Geen lening.", "DGS is bank-bescherming."],
        uitlegPad: {
          stappen: [{ titel: "Spaarders beschermd", tekst: "DGS = depositogarantiestelsel. Als jouw bank failliet gaat, garandeert de overheid tot €100.000 per spaarder per bank. Beschermt vertrouwen + voorkomt bank-run." }],
          woorden: [{ woord: "DGS", uitleg: "Depositogarantiestelsel. Verzekert spaargeld tot €100.000 per persoon per bank bij faillissement." }, { woord: "bank-run", uitleg: "Massale geldopname bij bank — kan bank doen omvallen door liquiditeit-tekort." }],
          theorie: "DGS is EU-regelgeving. Banken betalen jaarlijks premie aan een fonds, daaruit worden depositors uitbetaald bij faillissement. Hierdoor durf je spaargeld bij bank te laten staan.",
          voorbeelden: [{ type: "DSB Bank 2009", tekst: "DSB Bank failliet → spaarders kregen via DGS hun geld terug tot €100k." }, { type: "spreiding", tekst: "Spaargeld €250k? Verdeel over 3 banken → 3× €100k garantie." }],
          basiskennis: [{ onderwerp: "Niet belasting", uitleg: "DGS = garantieverzekering, geen belasting. Wordt gefinancierd door banken zelf." }],
          niveaus: { basis: "€100k spaargarantie per bank. A.", simpeler: "Bank failliet → overheid garandeert tot €100.000 spaargeld per spaarder per bank. = A.", nogSimpeler: "€100k = A." },
        },
      },
      {
        q: "Welke organisatie controleert **voedselveiligheid**?",
        options: ["NVWA", "ACM", "DNB", "DUO"],
        answer: 0,
        wrongHints: [null, "ACM = consument + concurrentie.", "DNB = banken.", "DUO = studie."],
        uitlegPad: {
          stappen: [{ titel: "Voedsel + waren", tekst: "NVWA = Nederlandse Voedsel- en Warenautoriteit. Controleert restaurants, supermarkten, fabrieken op hygiëne, dierwelzijn, productveiligheid." }],
          woorden: [{ woord: "NVWA", uitleg: "Nederlandse Voedsel- en Warenautoriteit. Onder ministerie van LNV. Controleert hygiëne + veiligheid + dierwelzijn." }],
          theorie: "NVWA inspecteert + sluit zaken (slecht restaurant, fipronil-eieren-affaire 2017), publiceert sectorrapporten. Werkt samen met EU-instanties bij grensoverschrijdende voedselzaken.",
          voorbeelden: [{ type: "praktijk", tekst: "Fipronil-eierschandaal 2017: NVWA-onderzoek leidde tot miljoenen eieren uit schap." }, { type: "restaurant", tekst: "Hygiëneinspectie + boete bij slecht onderhouden keuken." }],
          basiskennis: [{ onderwerp: "Verschillende toezichthouders", uitleg: "Voedsel = NVWA. Concurrentie/consument = ACM. Banken = DNB. Studie = DUO. Verschillende terreinen." }],
          niveaus: { basis: "NVWA voor voedsel. A.", simpeler: "Voedselveiligheid en productveiligheid = NVWA. = A.", nogSimpeler: "Voedsel = NVWA = A." },
        },
      },
      {
        q: "Online aankoop — hoe lang **bedenktijd**?",
        options: ["14 dagen", "1 dag", "Geen bedenktijd", "1 jaar"],
        answer: 0,
        wrongHints: [null, "Te kort.", "Wel bedenktijd.", "Te lang."],
        uitlegPad: {
          stappen: [{ titel: "Online = 14 dagen", tekst: "Bij online aankopen heb je wettelijke BEDENKTIJD van 14 dagen na ontvangst. Mag zonder reden retourneren. Verkoper moet geld terugstorten binnen 14 dagen na ontvangst retour." }],
          woorden: [{ woord: "bedenktijd", uitleg: "Wettelijke periode waarin je een online aankoop zonder reden mag annuleren." }, { woord: "herroepingsrecht", uitleg: "Formele juridische naam voor de 14-dagen-bedenktijd bij online verkoop." }],
          theorie: "Reden: in winkel kun je product bekijken, online niet. Bedenktijd compenseert dit. Uitzonderingen: gepersonaliseerd, hygiëne-producten (zwemkleding), zegelversiegelde software/CDs/DVD's.",
          voorbeelden: [{ type: "praktijk", tekst: "Zalando-broek niet leuk? 14 dagen voor retour. Coolblue: gratis retourneren + geld terug binnen 14 dagen." }],
          basiskennis: [{ onderwerp: "Niet in winkel", uitleg: "In FYSIEKE winkel geen wettelijke bedenktijd (winkel mag wel uit servicse 30 dagen aanbieden). Online wel." }],
          niveaus: { basis: "14 dagen. A.", simpeler: "Online aankoop: 14 dagen bedenktijd. Mag zonder reden retourneren. = A.", nogSimpeler: "14 dagen = A." },
        },
      },
    ],
  },
  // ─── Stap 7: Politiek systeem ────────────────────────
  {
    title: "Politiek systeem — wie maakt de wetten?",
    explanation: "Nederland is een **parlementaire democratie + constitutionele monarchie**.\n\n**Trias politica** (machtenscheiding):\n• **Wetgevende macht**: maakt wetten — Tweede + Eerste Kamer + regering\n• **Uitvoerende macht**: voert wetten uit — regering (premier + ministers)\n• **Rechtsprekende macht**: toetst wetten — onafhankelijke rechters\n\n**Tweede Kamer (150 leden)**:\n• Direct gekozen door volk (1× per 4 jaar)\n• Maakt + amendeert wetten\n• Controleert de regering\n• Kan minister wegsturen (motie van wantrouwen)\n\n**Eerste Kamer (75 leden)**:\n• Gekozen door Provinciale Staten\n• Toetst wetten op kwaliteit\n• Kan alleen ja/nee zeggen, geen amendement\n• 'Senaat' of 'Chambre de réflexion'\n\n**Regering**:\n• **Minister-president (premier)** + ministers + staatssecretarissen\n• Komt voort uit verkiezingen + coalitievorming\n• Voert beleid uit\n• Legt verantwoording af aan Tweede Kamer\n\n**De koning**:\n• Constitutioneel (niet politiek)\n• Tekent wetten ceremonieel\n• Geeft Troonrede\n• 'Reigns but does not rule'\n\n**Verkiezingen Tweede Kamer**:\n• Stemt op partij (PvdA, VVD, NSC, D66, GL-PvdA, etc.)\n• Evenredige vertegenwoordiging — geen kiesdrempel (alleen 1/150e zetelnorm)\n• Vaak coalities nodig (geen partij krijgt meerderheid)\n• Coalitievorming: maand of meer onderhandelen\n\n**Politieke partijen** + economisch profiel:\n• **VVD/NSC**: minder overheid, lage belasting voor bedrijven, marktwerking\n• **PvdA/GL/SP**: meer overheid, hogere belasting voor herverdeling, sociaal vangnet\n• **D66**: progressief, gemengde aanpak\n• **CDA/CU**: verzorgingsstaat met christelijke solidariteit\n• **PVV/FVD**: minder migratie, lager belasting\n\n**Coalitie-akkoord**:\n• Document met afspraken voor 4 jaar\n• Compromis tussen partijen\n• Wordt in Tweede Kamer steun gegeven\n\n**Provinciale + gemeenteraad-verkiezingen**:\n• Provincie: kiest ook indirect Eerste Kamer\n• Gemeente: lokale partijen + landelijke afdelingen\n\n**Belangrijk economisch**:\n• Beleid Tweede Kamer en regering bepaalt **belasting, uitgaven, regels** — direct effect op iedereen\n• Bij verkiezingen: kijk naar economische standpunten partijen\n• VOOR jou over een paar jaar relevant — eerste keer stemmen vanaf 18!",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">PARLEMENTAIRE DEMOCRATIE</text>
<rect x="20" y="40" width="280" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="160" y="58" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">VOLK STEMT (1× per 4 jaar)</text>
<text x="160" y="72" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">vanaf 18 jaar — Tweede Kamer</text>
<rect x="20" y="90" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="87" y="108" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">TWEEDE KAMER</text>
<text x="87" y="121" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">150 leden · maakt wetten</text>
<rect x="165" y="90" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="232" y="108" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">EERSTE KAMER</text>
<text x="232" y="121" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">75 leden · toetst wetten</text>
<rect x="60" y="138" width="200" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.5"/>
<text x="160" y="156" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">REGERING</text>
<text x="160" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">premier + ministers — voert uit</text>
<text x="160" y="200" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">trias politica: wetgever · uitvoerder · rechter</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel zetels heeft de **Tweede Kamer**?",
        options: ["150", "75", "100", "200"],
        answer: 0,
        wrongHints: [null, "75 = Eerste Kamer.", "Niet correct.", "Niet correct."],
        uitlegPad: {
          stappen: [{ titel: "150 = TK, 75 = EK", tekst: "Tweede Kamer = 150 leden (direct gekozen door volk). Eerste Kamer = 75 leden (gekozen door Provinciale Staten). Tweede heeft meer macht — daar gebeurt het debat." }],
          woorden: [{ woord: "Tweede Kamer", uitleg: "Hoofd-orgaan van het Nederlandse parlement, 150 zetels, direct gekozen." }, { woord: "Eerste Kamer", uitleg: "Senaat met 75 leden, indirect gekozen, toetst kwaliteit van wetten." }],
          theorie: "Naam 'Tweede Kamer' komt uit historie (na Eerste Kamer-instelling kreeg ze die naam). In de praktijk is Tweede dominant — daar liggen amendement-rechten + politieke debat.",
          voorbeelden: [{ type: "verkiezing", tekst: "Verkiezingen Tweede Kamer 2023: 150 zetels verdeeld over 15+ partijen." }],
          basiskennis: [{ onderwerp: "150 onthouden", uitleg: "150 zetels = onthouden, komt elk examen voor. Coalitie heeft meerderheid van 76 zetels nodig." }],
          niveaus: { basis: "150 zetels TK. A.", simpeler: "Tweede Kamer heeft 150 leden. Eerste Kamer 75. = A.", nogSimpeler: "150 = A." },
        },
      },
      {
        q: "Wat is **trias politica**?",
        options: ["Machtenscheiding: wetgever, uitvoerder, rechter", "Drie politieke partijen", "Drie verkiezingen", "Driedaagse zitting"],
        answer: 0,
        wrongHints: [null, "Niet specifiek partijen.", "Niet drie verkiezingen.", "Geen tijdsduur."],
        uitlegPad: {
          stappen: [{ titel: "Macht in 3 delen", tekst: "Trias politica (Montesquieu, 1748): scheiding van macht in (1) wetgevende macht (parlement), (2) uitvoerende macht (regering), (3) rechtsprekende macht (rechters)." }],
          woorden: [{ woord: "trias politica", uitleg: "Latijn voor 'drie machten'. Filosofisch principe achter rechtsstaten." }, { woord: "machtenscheiding", uitleg: "Verschillende organen mogen elkaars taken niet overnemen — onafhankelijke controle." }],
          theorie: "Doel: voorkomen dat 1 persoon/groep alles bepaalt (tirannie). Rechters MOGEN wetten toetsen, parlement mag rechters NIET ontslaan. Onafhankelijkheid = bescherming burger.",
          voorbeelden: [{ type: "praktijk NL", tekst: "Hoge Raad toetst regeringsbeleid (urgenda-vonnis 2019). Parlement laat regering vallen via motie van wantrouwen. Onderlinge balans." }],
          basiskennis: [{ onderwerp: "Politiek vs partij", uitleg: "Trias politica gaat over MACHTEN, niet over partijen. Drie verschillende soorten gezag." }],
          niveaus: { basis: "Wetgever + uitvoerder + rechter. A.", simpeler: "Macht in drie delen: parlement maakt wetten, regering voert uit, rechters toetsen. = A.", nogSimpeler: "3 machten = A." },
        },
      },
      {
        q: "Wie kiest de **Tweede Kamer**?",
        options: ["Het volk, direct (verkiezingen 1× per 4 jaar)", "Provinciale Staten", "De koning", "De regering"],
        answer: 0,
        wrongHints: [null, "Provinciale Staten kiezen Eerste Kamer.", "Koning is ceremonieel.", "Regering komt voort uit verkiezingen, niet andersom."],
        uitlegPad: {
          stappen: [{ titel: "Direct gekozen", tekst: "Het VOLK kiest de Tweede Kamer DIRECT. Iedere Nederlander 18+ mag stemmen. Geen tussenlaag, geen partijbestuur dat beslist." }],
          woorden: [{ woord: "directe verkiezingen", uitleg: "Burgers stemmen rechtstreeks op kandidaten/partijen voor de zetels." }, { woord: "indirecte verkiezingen", uitleg: "Burgers kiezen een ander orgaan dat vervolgens de zetels invult — zoals bij Eerste Kamer." }],
          theorie: "Vier-jaarcyclus: TK-verkiezingen elke 4 jaar (kan eerder bij val kabinet). Stemtelling via evenredige vertegenwoordiging: % stemmen = % zetels.",
          voorbeelden: [{ type: "2023", tekst: "Tweede Kamerverkiezingen november 2023 → PVV grootste partij, coalitievorming volgde." }],
          basiskennis: [{ onderwerp: "Niet de regering", uitleg: "Regering komt VOORT UIT verkiezingen, niet andersom. Eerst kiezen, daarna formeren." }],
          niveaus: { basis: "Volk, direct. A.", simpeler: "Het volk kiest direct de Tweede Kamer — om de 4 jaar verkiezingen. = A.", nogSimpeler: "Volk = A." },
        },
      },
      {
        q: "Wat doet de **regering**?",
        options: ["Voert wetten uit en bepaalt beleid", "Maakt wetten zelfstandig", "Rechtspraak", "Niets"],
        answer: 0,
        wrongHints: [null, "Wetten maken doet ze samen met parlement.", "Rechtspraak is gescheiden.", "Wel actief."],
        uitlegPad: {
          stappen: [{ titel: "Uitvoerende macht", tekst: "Regering = premier + ministers + staatssecretarissen. Voert wetten UIT, dient wetsvoorstellen in, bepaalt dagelijks beleid. Krijgt taken via Tweede Kamer-meerderheid." }],
          woorden: [{ woord: "regering", uitleg: "Uitvoerend orgaan van Nederland: koning + ministers. Praktisch: kabinet (premier + ministers)." }, { woord: "kabinet", uitleg: "Premier + ministers + staatssecretarissen. Beleidsmakend gezelschap." }],
          theorie: "Regering kan wetsvoorstellen INDIENEN, maar parlement moet ze GOEDKEUREN. Voert ze daarna uit. Bij wantrouwen Tweede Kamer → kabinet valt → nieuwe verkiezingen.",
          voorbeelden: [{ type: "rol", tekst: "Minister van Financiën voert belastingbeleid uit. Minister van Justitie zet politie aan het werk." }],
          basiskennis: [{ onderwerp: "Samen met parlement", uitleg: "Wetten maken doet de regering SAMEN met parlement. Niet alleen." }],
          niveaus: { basis: "Wetten uitvoeren + beleid. A.", simpeler: "Regering = premier + ministers. Voeren beleid uit + dienen wetsvoorstellen in. = A.", nogSimpeler: "Uitvoeren = A." },
        },
      },
      {
        q: "Wat is een **coalitie**?",
        options: ["Samenwerking van meerdere partijen om meerderheid te vormen", "Een type wet", "De koning + regering", "Een verkiezing"],
        answer: 0,
        wrongHints: [null, "Geen wet.", "Niet politieke samenwerking met koning.", "Coalitie komt na verkiezing."],
        uitlegPad: {
          stappen: [{ titel: "Samen meerderheid", tekst: "Coalitie = 2 of meer partijen die SAMENWERKEN om een Tweede Kamer-meerderheid (76 zetels) te halen. Nodig omdat geen enkele partij in NL alleen meerderheid krijgt." }],
          woorden: [{ woord: "coalitie", uitleg: "Politieke samenwerking van meerdere partijen, vaak gebaseerd op coalitieakkoord." }, { woord: "coalitieakkoord", uitleg: "Document met afspraken tussen coalitiepartijen over beleid voor 4 jaar." }],
          theorie: "Coalitievorming na verkiezingen: informateurs gaan praten, partijen leggen wensen op tafel, compromis = coalitieakkoord. Duurt vaak maanden in NL.",
          voorbeelden: [{ type: "Rutte-IV", tekst: "Coalitie 2022: VVD + D66 + CDA + CU (4 partijen). Coalitieakkoord 50+ pagina's." }],
          basiskennis: [{ onderwerp: "Niet 1 partij", uitleg: "NL kent geen 1-partij-meerderheid sinds 1800. Altijd coalities." }],
          niveaus: { basis: "Samenwerkende partijen. A.", simpeler: "Coalitie = paar partijen die samen genoeg zetels hebben om kabinet te vormen. = A.", nogSimpeler: "Samen = A." },
        },
      },
      {
        q: "Vanaf welke leeftijd mag je **stemmen** in NL?",
        options: ["18 jaar", "16 jaar", "21 jaar", "25 jaar"],
        answer: 0,
        wrongHints: [null, "Wel mag je vroeger andere dingen.", "Was vroeger zo.", "Te oud."],
        uitlegPad: {
          stappen: [{ titel: "Vanaf 18", tekst: "Actief kiesrecht (mogen stemmen) in NL = vanaf 18 jaar. Passief kiesrecht (gekozen worden) ook 18+. Geldt voor alle verkiezingen: Tweede Kamer, gemeenteraad, provincie, EU." }],
          woorden: [{ woord: "actief kiesrecht", uitleg: "Recht om zelf te stemmen. NL: 18+." }, { woord: "passief kiesrecht", uitleg: "Recht om gekozen te worden. NL: ook 18+." }],
          theorie: "21 was de stemleeftijd tot 1972. Daarna verlaagd naar 18. Sommige landen verlaagden recent verder (Oostenrijk 16, Schotland 16 voor referendum). NL discussie hierover loopt.",
          voorbeelden: [{ type: "praktijk", tekst: "Word je 18 op 14 maart? Verkiezingen op 15 maart → je mag stemmen." }],
          basiskennis: [{ onderwerp: "Niet 21", uitleg: "21 was vroeger, niet meer. 16 is in NL niet algemeen kiesrecht (wel in sommige gemeenteraadverkiezingen-pilots)." }],
          niveaus: { basis: "18 jaar. A.", simpeler: "Je mag stemmen in NL vanaf je 18e verjaardag. = A.", nogSimpeler: "18 = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const pincodeOverheid = {
  id: "pincode-overheid",
  title: "De overheid",
  emoji: "🏛️",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - Pincode VMBO-GT klas 4 hoofdstuk 5",
  prerequisites: [
    { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F" },
    { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F" },
  ],
  intro:
    "Hoofdstuk 5 van Pincode 7e ed. VMBO-GT 4: taken overheid, drie overheidslagen, Rijksbegroting, staatsschuld, conjunctuur, marktordening (ACM/NVWA/DNB), en politiek systeem. 7 stappen examenvoorbereiding.",
  triggerKeywords: [
    "overheid", "rijksoverheid", "rijk", "provincie", "gemeente", "waterschap",
    "openbare voorzieningen", "sociale zekerheid", "inkomensverdeling",
    "collectief goed", "extern effect", "free rider", "verzorgingsstaat",
    "rijksbegroting", "miljoenennota", "prinsjesdag", "troonrede",
    "begrotingstekort", "begrotingsoverschot", "anticyclisch",
    "staatsschuld", "staatsobligatie", "emu-norm", "stabiliteits- en groeipact",
    "bbp", "bruto binnenlands product",
    "conjunctuur", "recessie", "depressie", "hoogconjunctuur", "boom", "herstel",
    "marktordening", "mededinging", "kartel", "monopolie", "consumentenbescherming",
    "acm", "autoriteit consument en markt", "nvwa", "dnb", "afm", "dgs",
    "ozb", "gemeentefonds", "decentralisatie", "jeugdzorg", "wmo",
    "trias politica", "wetgevende macht", "uitvoerende macht", "rechtsprekende macht",
    "tweede kamer", "eerste kamer", "regering", "premier", "minister",
    "verkiezingen", "coalitie", "kabinet",
    "pincode hoofdstuk 5", "pincode hoofdstuk e",
  ],
  chapters,
  steps,
};

export default pincodeOverheid;
