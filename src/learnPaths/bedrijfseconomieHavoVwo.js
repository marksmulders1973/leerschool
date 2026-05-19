// Leerpad: Bedrijfseconomie kerngebieden — HAVO/VWO (M&O-opvolger)
// Eindexamen-CSE-stof: financiën + organisatie + marketing + handel.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  finan: "#42a5f5",
  org: "#ab47bc",
  marketing: "#ef6c00",
  recht: "#66bb6a",
  hl: "#ffd54f",
};

const stepEmojis = ["💼", "📊", "📈", "🛒", "🏆"];

const chapters = [
  { letter: "A", title: "Balans + V&W-rekening", emoji: "💼", from: 0, to: 0 },
  { letter: "B", title: "Kostencalculatie", emoji: "📊", from: 1, to: 1 },
  { letter: "C", title: "Financiering + investering", emoji: "📈", from: 2, to: 2 },
  { letter: "D", title: "Marketing + handel", emoji: "🛒", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Balans + V&W ──────────────────────────────────────
  {
    title: "Balans + Winst-en-Verlies-rekening",
    explanation:
      "**Bedrijfseconomie** (HAVO/VWO sinds 2018; voorheen M&O = Management + Organisatie) onderzoekt financiën + organisatie van bedrijven.\n\n**Balans** = financiële foto van bedrijf op één moment. Twee zijden — **altijd in evenwicht**.\n\n**Linkerzijde (debet) = Activa**: wat bedrijf BEZIT.\n• **Vaste activa**: > 1 jaar gebruikt. Gebouwen, machines, voertuigen, computers.\n• **Vlottende activa**: < 1 jaar. Voorraden, debiteuren (klanten die nog moeten betalen), bank/kas.\n\n**Rechterzijde (credit) = Passiva**: hoe bedrijf gefinancierd is.\n• **Eigen vermogen (EV)**: van eigenaar(s). Aandelenkapitaal + reserves.\n• **Vreemd vermogen (VV)** = schulden:\n  - **Lang VV** (> 1 jaar): hypotheek, lening.\n  - **Kort VV** (< 1 jaar): crediteuren (leveranciers nog te betalen), bankkrediet.\n\n**Balansvergelijking**: Activa = Passiva = Eigen Vermogen + Vreemd Vermogen.\n\n**Voorbeeld balans (vereenvoudigd)**:\n```\nBakkerij De Korenaar — 31 dec 2025\n\nDebet (Activa)             Credit (Passiva)\nGebouw         €200.000    Eigen vermogen   €150.000\nMachines        €50.000    Hypotheek        €100.000\nVoorraad        €10.000    Crediteuren       €20.000\nDebiteuren      €15.000    Bankkrediet        €5.000\nBank             €5.000\n────────────────────────────────────────────────\nTotaal         €280.000    Totaal           €280.000\n```\n\n**Solvabiliteit** = mate waarin bedrijf bij faillissement schulden kan betalen.\n• Formule: **EV / Totaal vermogen × 100%**.\n• Voorbeeld: 150.000 / 280.000 = ~54%.\n• Hoger = veiliger.\n• Vuistregel: minimaal 25-30% — banken eisen vaak hoger voor lening.\n\n**Liquiditeit** = mate waarin bedrijf direct kan betalen.\n• **Current ratio**: vlottende activa / kort VV. Minimaal 1, beter 1,5+.\n• **Quick ratio**: (vlottende activa − voorraad) / kort VV. Minimaal 1.\n\n**Winst-en-Verlies-rekening (W&V)** = financieel resultaat over **periode** (meestal jaar).\n\n**Structuur W&V**:\n```\nNetto-omzet                €500.000\n− Inkoopwaarde omzet       −€300.000\n──────────────────────────\nBruto winst                €200.000\n\n− Lonen                    −€80.000\n− Huur                     −€20.000\n− Afschrijvingen           −€15.000\n− Overige kosten           −€10.000\n──────────────────────────\nBedrijfsresultaat          €75.000\n\n− Rente                    −€5.000\n──────────────────────────\nResultaat vóór belasting   €70.000\n− Vennootschapsbelasting   −€17.500 (25%)\n──────────────────────────\nNettowinst                 €52.500\n```\n\n**Belangrijke begrippen**:\n• **Omzet** = verkoopprijs × aantal verkocht.\n• **Inkoopwaarde** = wat producten kostten.\n• **Brutowinst** = omzet − inkoopwaarde.\n• **Afschrijvingen** = verlies waarde vaste activa over tijd. Lineair: (aanschaf − restwaarde) / levensduur.\n• **Vennootschapsbelasting (vpb)** = 19% NL (laag tarief tot €200k) / 25,8% hoog tarief (2024).\n\n**Rentabiliteit** (winstgevendheid):\n• **REV** (rentabiliteit eigen vermogen) = nettowinst / gem. EV × 100%.\n• **RTV** (rentabiliteit totaal vermogen) = bedrijfsresultaat / gem. totaal vermogen × 100%.\n• Hoog = goed presterend.\n\n**Cito-pattern**: balans + W&V analyseren + ratio's berekenen + advies geven 'is bedrijf gezond?'.",
    checks: [
      {
        q: "Welke zijn **passiva**?",
        options: ["Eigen vermogen + vreemd vermogen","Gebouwen + voorraden","Klanten + leveranciers","Omzet + winst"],
        answer: 0,
        wrongHints: [null, "Niet — dat is activa.", "Niet — wel termen maar niet beide pasiva.", "Niet — W&V."],
        uitlegPad: {
          stappen: [{ titel: "Rechts op balans", tekst: "**Passiva** (credit-zijde balans) = **hoe** bedrijf gefinancierd is: Eigen Vermogen + Vreemd Vermogen. Tegenover **activa** (debet) = **wat** bedrijf bezit: gebouwen, voorraad, debiteuren, etc. Balans altijd in evenwicht: A = P." }],
          niveaus: { basis: "EV + VV. A.", simpeler: "Passiva = EV+VV = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Solvabiliteit** berekenen:",
        options: ["EV / Totaal vermogen × 100%","VV / EV","Omzet / kosten","Winst / omzet"],
        answer: 0,
        wrongHints: [null, "Niet — dat is debt-equity-ratio.", "Niet — winstmarge.", "Niet — winstmarge."],
        uitlegPad: {
          stappen: [{ titel: "Eigen vermogen-aandeel", tekst: "**Solvabiliteit** = **EV / Totaal vermogen × 100%**. Toont in welke mate bedrijf zijn schulden kan betalen bij faillissement. Vuistregel ≥25-30%. Banken eisen vaak 40%+ voor lening." }],
          niveaus: { basis: "EV/TV ×100. A.", simpeler: "Solv = EV/TV = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is **brutowinst**?",
        options: ["Omzet − inkoopwaarde","Omzet − alle kosten","Eigen vermogen","Belastingaftrek"],
        answer: 0,
        wrongHints: [null, "Niet — dat is nettowinst.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Verschil verkoop-inkoop", tekst: "**Brutowinst** = omzet − inkoopwaarde van verkochte producten. Bv: kocht voor €300k, verkocht voor €500k → brutowinst €200k. Daarvan moeten nog lonen, huur, afschrijvingen, rente, belasting af → nettowinst." }],
          niveaus: { basis: "Omzet − inkoop. A.", simpeler: "Bruto = O − I = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Afschrijving** is:",
        options: ["Waardevermindering vaste activa over tijd","Belastingaangifte","Loonbetaling","Voorraad-aankoop"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Spread van kosten", tekst: "**Afschrijving** = jaarlijkse waardevermindering vaste activa (gebouw, machine, auto). Lineair: (aanschaf − restwaarde) / levensduur. Bv. machine €50k, restwaarde €5k, levensduur 10 jaar → €4500/jaar afschrijving. Spread van kosten over gebruiksperiode." }],
          niveaus: { basis: "Waardeverlies activa. A.", simpeler: "Afschrijving = waarde-verlies = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Current ratio** vlottende activa / kort vreemd vermogen. Wat is minimum?",
        options: ["~1 (liefst 1,5+)","0","10","100"],
        answer: 0,
        wrongHints: [null, "Bedrijf zou direct failliet.", "Te hoog — kapitaalverspilling.", "Absurd."],
        uitlegPad: {
          stappen: [{ titel: "Liquiditeit-grens", tekst: "**Current ratio** = vlottende activa / kort VV. Indicator liquiditeit (direct betaalvermogen). **Minimaal 1** = even veel vlottend bezit als kort schuld. **1,5+** = comfortabel. Te laag = mogelijk niet kunnen betalen op tijd. Te hoog = misschien te veel kapitaal vast (geld werkt niet)." }],
          niveaus: { basis: "~1. A.", simpeler: "Min current ratio = 1 = A.", nogSimpeler: "1 = A." },
        },
      },
    ],
  },

  // ─── B. Kostencalculatie ──────────────────────────────────
  {
    title: "Kostencalculatie + Break-even",
    explanation:
      "Bedrijven moeten weten: **wat kost mijn product werkelijk?** Pas dan kun je prijs bepalen + winst maken.\n\n**Kosten-soorten**:\n\n**Constante (vaste) kosten**:\n• Onafhankelijk van productie-omvang.\n• Voorbeelden: huur pand, salaris vast personeel, verzekeringen, afschrijving machines.\n• Per stuk dalen ze als je meer produceert (gespreid).\n\n**Variabele kosten**:\n• Stijgen met productie.\n• Voorbeelden: grondstoffen, energie, productie-arbeid (uurloon).\n\n**Totale kosten** = constante + variabele kosten.\n\n**Voorbeeld T-shirts**:\n• Constante kosten /maand: €5.000 (huur + machines + vast personeel).\n• Variabele kosten /T-shirt: €4 (stof + naald + draad).\n• Verkoopprijs: €15.\n\nKostprijs / T-shirt bij 1000 stuks/maand:\n• Constant per stuk: 5000/1000 = €5.\n• Variabel: €4.\n• **Kostprijs**: €9.\n• Brutowinst per T-shirt: 15 − 9 = **€6**.\n\nKostprijs / T-shirt bij 500 stuks/maand:\n• Constant per stuk: 5000/500 = €10.\n• Variabel: €4.\n• **Kostprijs**: €14. Brutowinst: 1 — bijna geen marge.\n\n**→ Schaalvoordelen**: meer produceren verlaagt kostprijs (alleen door constante kosten gespreid).\n\n**Break-even-punt (BEP)** = aantal stuks waarbij omzet = totale kosten → geen winst, geen verlies.\n\n**Formule**: BEP = **constante kosten / (verkoopprijs − variabele kosten/stuk)**.\n\n• Noemer (P − V) = **dekkingsbijdrage per stuk** (deel van prijs dat bijdraagt aan dekken constante kosten).\n• Voorbeeld T-shirts: 5000 / (15 − 4) = 5000/11 ≈ **455 stuks/maand**.\n• Boven 455: winst. Onder: verlies.\n\n**BEP-omzet** = BEP × verkoopprijs = 455 × 15 = €6825 omzet om break-even te bereiken.\n\n**Dekkingsbijdrage (DB)**:\n• Totale DB = omzet − totale variabele kosten.\n• Eerst dekt DB de constante kosten, daarna = winst.\n\n**Verkoop-prijs-bepaling-methodes**:\n\n**Cost-plus-prijs** (kostprijs-plus):\n• Bereken kostprijs → tel winstopslag op.\n• Voorbeeld: kostprijs €9 + 30% opslag = €11,70.\n• Eenvoudig maar negeert markt.\n\n**Marktprijs**:\n• Wat concurrentie + klant accepteren.\n• Belangrijker in concurrerende markt.\n\n**Penetratiestrategie**:\n• Lage start-prijs om markt in te dringen.\n• Voorbeelden: Netflix-start NL, Aldi.\n\n**Skimming**:\n• Hoge start-prijs voor early-adopters.\n• Voorbeelden: nieuwe iPhone, Tesla-debut.\n\n**Promotionele prijs**:\n• Tijdelijke korting.\n• Acties: 1+1 gratis, 50% off.\n\n**BTW + prijs**:\n• In NL BTW 21% (hoog), 9% (laag voor voedsel, boeken, OV, etc.), 0% (export).\n• Verkoopprijs **incl. BTW** vs **excl. BTW**.\n• Voor bedrijf is BTW doorgeefluik (consument betaalt, bedrijf draagt af).\n\n**Marges**:\n• **Brutomarge** = (omzet − inkoop) / omzet × 100%.\n• **Nettowinstmarge** = nettowinst / omzet × 100%.\n• Detailhandel: bruto 30-50%, netto 2-10%.\n• Tech: bruto 60-80%, netto 20-30%.\n• Auto-dealers: bruto 10-15%, netto 2-3%.\n\n**Cito-pattern**: bereken BEP + adviseer prijsstrategie.",
    checks: [
      {
        q: "**Constante kosten** zijn:",
        options: ["Onafhankelijk van productie-omvang","Stijgen met productie","Worden 0 bij stop","Variëren maandelijks"],
        answer: 0,
        wrongHints: [null, "Niet — dat zijn variabele.", "Niet noodzakelijk — huur loopt door.", "Niet primair definitie."],
        uitlegPad: {
          stappen: [{ titel: "Vast = vast", tekst: "**Constante (vaste) kosten** blijven gelijk ongeacht hoeveel je produceert: huur, vaste lonen, verzekeringen, afschrijving. **Variabele kosten** stijgen met productie: grondstof, energie. Per stuk dalen constante als je meer maakt." }],
          niveaus: { basis: "Onafhankelijk productie. A.", simpeler: "Constant = vast = A.", nogSimpeler: "Vast = A." },
        },
      },
      {
        q: "**Break-even-punt-formule**:",
        options: ["Constante kosten / (prijs − variabele kosten/stuk)","Omzet / kosten","Prijs × aantal","Winst / EV"],
        answer: 0,
        wrongHints: [null, "Niet — algemene rentabiliteit.", "Niet — omzet.", "Niet — REV."],
        uitlegPad: {
          stappen: [{ titel: "Constant ÷ dekkingsbijdrage", tekst: "**BEP** = **Constante kosten / (Prijs per stuk − Variabele kosten per stuk)**. Noemer = **dekkingsbijdrage per stuk** (DB). Hoeveel stuks moet je verkopen tot DB samen = constante kosten. Pas daarboven winst." }],
          niveaus: { basis: "K/(P−V). A.", simpeler: "BEP = constant/DB = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Constante kosten €10.000, prijs €25, variabele €5/stuk. **BEP**?",
        options: ["500 stuks","2.000","250","10.000"],
        answer: 0,
        wrongHints: [null, "Niet — controleer formule.", "Te laag.", "Niet correct."],
        uitlegPad: {
          stappen: [{ titel: "Bereken", tekst: "BEP = 10.000 / (25 − 5) = 10.000/20 = **500 stuks**. Bij 500 stuks: omzet = 500×25 = 12.500. Kosten = 10.000 + 500×5 = 12.500. ✓ Break-even." }],
          niveaus: { basis: "500. A.", simpeler: "10k/20 = 500 = A.", nogSimpeler: "500 = A." },
        },
      },
      {
        q: "Welke prijsstrategie past bij **nieuwe iPhone**?",
        options: ["Skimming (hoge start-prijs)","Penetratie (lage start)","Cost-plus","Geen strategie"],
        answer: 0,
        wrongHints: [null, "Niet — Apple kiest niet voor laag.", "Te eenvoudig — Apple denkt markt-strategisch.", "Wel."],
        uitlegPad: {
          stappen: [{ titel: "Premium-strategie", tekst: "**Skimming**: hoge start-prijs voor early-adopters bereid te betalen. Later prijsverlaging. Apple-classic: nieuwe iPhone €1200+, oudere modellen blijven beschikbaar lager. Tesla-debut zelfde patroon. **Penetratie**: tegenovergestelde — lage start om markt te winnen (Aldi, Netflix-NL-start)." }],
          niveaus: { basis: "Skimming. A.", simpeler: "iPhone-nieuw = skimming = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "NL **BTW-hoog tarief** is:",
        options: ["21%","9%","0%","50%"],
        answer: 0,
        wrongHints: [null, "Niet — laag tarief.", "Niet — alleen export.", "Niet — absurd."],
        uitlegPad: {
          stappen: [{ titel: "Drie tarieven", tekst: "**NL BTW**:\n• **21% (hoog)**: meeste producten + diensten.\n• **9% (laag)**: voedsel, water, boeken, OV, geneesmiddelen, cultuur, hotel.\n• **0%**: export (geen NL-BTW heffen). Bedrijven betalen wel BTW op inkoop maar krijgen terug.\n\nBTW is **omzet-belasting** — consument draagt, bedrijf draagt af." }],
          niveaus: { basis: "21%. A.", simpeler: "BTW hoog = 21% = A.", nogSimpeler: "21 = A." },
        },
      },
    ],
  },

  // ─── C. Financiering + investering ────────────────────────
  {
    title: "Financiering + investering",
    explanation:
      "Bedrijven hebben geld nodig — voor opstart, groei, vervanging machines. **Hoe** krijg je dat? **Welke** investering doe je?\n\n**Financiering-bronnen**:\n\n**Eigen vermogen (intern)**:\n• Eigen geld eigenaren bij start.\n• Ingehouden winst (niet uitgekeerd als dividend).\n• Aandelen (publiek of privé verkocht).\n• Geen rente, geen aflossing — maar verdunning eigenaarschap.\n\n**Vreemd vermogen (extern)**:\n• **Bank-lening**: vaste rente + aflossings-schema.\n• **Hypotheek**: lange-termijn-lening met onroerend goed als onderpand.\n• **Obligaties**: bedrijf geeft schuldpapieren uit, beleggers kopen.\n• **Leasen**: huren in plaats van kopen.\n• **Crediteuren**: leveranciers laten je later betalen.\n• **Crowdfunding**: vele kleine investeerders via online platform.\n• **Venture capital**: investeerders nemen aandeel in jonge bedrijven.\n• **Subsidies**: overheid (innovatie, duurzaam, regional development).\n\n**Voorkeuren financiering**:\n• Starter: eigen geld + familie/vrienden + crowdfunding + soms VC.\n• MKB: bank-lening + leveranciers-krediet.\n• Beursgenoteerd: aandelen + obligaties.\n\n**Rente**:\n• **Enkelvoudig**: rente over hoofdsom alleen.\n• **Samengesteld**: rente over rente erbij. Lange termijn → enorm effect (exp groei).\n• Formule: K_eind = K_start × (1 + r)^n.\n• Voorbeeld: €1000 bij 5%/jaar over 20 jaar → 1000 × 1,05²⁰ = €2653.\n\n**Investeringscriteria**:\n\n**Terugverdientijd (TVT, Payback Period)**:\n• Hoe lang om investering terug te verdienen via netto-cashflow.\n• Voorbeeld: machine €100k, jaarlijkse netto-besparing €25k → TVT = 4 jaar.\n• Simpel maar negeert lange-termijn-cashflow + tijdwaarde geld.\n\n**Netto Contante Waarde (NCW / NPV)**:\n• Toekomstige cashflows naar 'vandaag-waarde' brengen via discontering.\n• Formule: NCW = Σ (CF_t / (1+r)^t) − initiële investering.\n• Positief: investering rendabel.\n• Negatief: niet doen.\n\n**Interne Rentabiliteit (IRR)**:\n• Discontvoet waarbij NCW = 0.\n• Vergelijk met vereiste rendement: hoger = doen.\n\n**Voorbeeld investerings-vraag** (Cito-pattern):\nMachine kost €50.000, levert €15.000 netto/jaar gedurende 5 jaar. TVT?\n→ 50.000 / 15.000 = **3,33 jaar**. Goed (< 5 jaar levensduur). Doen.\n\n**Werkkapitaal**:\n• Vlottende activa − kort VV.\n• Nodig om dagelijkse activiteiten te financieren (voorraad, debiteuren, kas).\n• Te weinig = liquiditeitsproblemen.\n• Te veel = kapitaal-verspilling.\n\n**Cashflow-management**:\n• **Cashflow** = werkelijke geld-in en -uit (anders dan winst!).\n• Winst kan hoog zijn maar geen cash (klanten nog niet betaald) — failliet ondanks winst.\n• 'Cash is king' — kasstroom belangrijkste indicator gezondheid.\n• Klanten sneller laten betalen (kortingen voor snel) + leveranciers later betalen = optimalisatie werkkapitaal.\n\n**Rechtsvormen**:\n• **Eenmanszaak**: 1 eigenaar, persoonlijk aansprakelijk. Eenvoudig + flexibel. Klein/start.\n• **VOF (Vennootschap onder Firma)**: 2+ vennoten, hoofdelijk aansprakelijk.\n• **BV (Besloten Vennootschap)**: aandelen niet vrij verhandelbaar. Aansprakelijkheid beperkt tot inleg. Veel MKB.\n• **NV (Naamloze Vennootschap)**: aandelen vrij verhandelbaar (kan op beurs). Voor grote bedrijven (Heineken, Philips, ASML, Shell).\n• **Coöperatie**: leden zijn eigenaar (boeren-coöperaties, bv. FrieslandCampina).\n• **Stichting**: geen winstoogmerk, geen leden, geen aandeelhouders.\n• **Vereniging**: leden, doel niet winst.\n\n**Belastingen op bedrijven**:\n• **Vennootschapsbelasting (vpb)**: 19% (laag, eerste €200k) / 25,8% (hoog) — 2024.\n• **BTW**: 21%, 9%, 0%.\n• **Loonbelasting + sociale premies**: ingehouden van werknemers-loon.\n• **Dividend**-belasting bij uitkering.\n• Bedrijven proberen door slimme structuren (NL-route, Ierland-route) belasting te minimaliseren — vaak controverse.",
    checks: [
      {
        q: "Wat is **eigen vermogen** financieren?",
        options: ["Geld eigenaren + ingehouden winst","Bank-lening","Hypotheek","Obligaties"],
        answer: 0,
        wrongHints: [null, "Vreemd vermogen.", "Vreemd vermogen.", "Vreemd vermogen."],
        uitlegPad: {
          stappen: [{ titel: "EV-bronnen", tekst: "**Eigen vermogen** (EV) = geld eigenaren (bij oprichting + ingehouden winst + aandelen). Geen rente, geen aflossing. **Vreemd vermogen** (VV) = geleend (bank, obligaties, leveranciers) — heeft rente + aflossings-plicht. EV is duurder (verdunning) maar veiliger." }],
          niveaus: { basis: "Eigenaars + winst. A.", simpeler: "EV = eigenaars-geld = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Machine €60k, netto-besparing €20k/jaar. **Terugverdientijd**?",
        options: ["3 jaar","6 jaar","60 jaar","2 maanden"],
        answer: 0,
        wrongHints: [null, "Niet — controleer.", "Veel te lang.", "Veel te kort."],
        uitlegPad: {
          stappen: [{ titel: "TVT-formule", tekst: "**TVT = investering / netto-cashflow** = 60.000 / 20.000 = **3 jaar**. Simpele methode. Beter: NCW (discontering). TVT < levensduur machine = positief signaal." }],
          niveaus: { basis: "3 jaar. A.", simpeler: "60k/20k=3 = A.", nogSimpeler: "3 = A." },
        },
      },
      {
        q: "Welke rechtsvorm heeft **beperkte aansprakelijkheid + niet vrij verhandelbare aandelen**?",
        options: ["BV","NV","Eenmanszaak","VOF"],
        answer: 0,
        wrongHints: [null, "Niet — aandelen wel vrij.", "Niet — persoonlijk aansprakelijk.", "Niet — persoonlijk."],
        uitlegPad: {
          stappen: [{ titel: "BV = Besloten", tekst: "**BV (Besloten Vennootschap)**: aandelen niet vrij verhandelbaar (alleen bij notaris + akkoord andere aandeelhouders). **Beperkte aansprakelijkheid**: alleen tot inleg aandelen. Meest gebruikte vorm MKB NL. **NV (Naamloze)** = aandelen wel vrij — voor beurshandel." }],
          niveaus: { basis: "BV. A.", simpeler: "Besloten = BV = A.", nogSimpeler: "BV = A." },
        },
      },
      {
        q: "**Cashflow** kan negatief zijn terwijl bedrijf winst maakt. Waarom?",
        options: ["Klanten hebben nog niet betaald","Onmogelijk","Door dividend","Door belasting"],
        answer: 0,
        wrongHints: [null, "Wel mogelijk.", "Speelt rol maar niet primair.", "Mogelijk maar niet hoofd-reden."],
        uitlegPad: {
          stappen: [{ titel: "Winst ≠ cash", tekst: "**Winst** is boekhoudkundig (omzet − kosten), maar **cashflow** is werkelijk geld. Als klanten op factuur kopen (op rekening) maar nog niet betaald → winst staat in boek maar geen cash. Bedrijven kunnen failliet ondanks 'winstgevend' zijn. **'Cash is king'** — focus op kasstroom." }],
          theorie: "Klassieker: snel-groeiende bedrijven (groot werkkapitaal nodig) komen vaak in cash-tekort. Daarom externe financiering nodig.",
          niveaus: { basis: "Klanten niet betaald. A.", simpeler: "Cashflow ≠ winst = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Vennootschapsbelasting NL** hoog tarief 2024:",
        options: ["25,8%","19%","21%","9%"],
        answer: 0,
        wrongHints: [null, "Niet — laag tarief.", "BTW.", "BTW laag."],
        uitlegPad: {
          stappen: [{ titel: "Twee schijven", tekst: "**Vennootschapsbelasting** (vpb) 2024:\n• **19%** over eerste €200.000 winst.\n• **25,8%** boven €200.000.\n\nHerschikkingen recent: kabinet wil naar 25%. Belastingplanning groot bij grote bedrijven — controverse over multinationals (Shell, Apple-NL-route)." }],
          niveaus: { basis: "25,8%. A.", simpeler: "Vpb hoog = 25,8% = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── D. Marketing + handel ────────────────────────────────
  {
    title: "Marketing + handel",
    explanation:
      "**Marketing** = vraag creëren + voldoen via klantgericht denken. Niet alleen 'reclame'.\n\n**Klassieke 4 P's**:\n\n**1. Product**:\n• Wat verkoop je? Fysiek goed, dienst, ervaring.\n• **Productlevenscyclus**: introductie → groei → volwassen → verval.\n• Productdifferentiatie: USP (unique selling point).\n\n**2. Prijs**:\n• Wat kost het? (zie kostencalculatie-stap).\n• Strategie: penetratie / skimming / cost-plus / marktprijs.\n• Psychologische prijs (€9,99 ipv €10).\n• Premium vs lage-prijs-positie.\n\n**3. Plaats (distributie)**:\n• Waar verkoop je? Eigen winkel, online, via tussenpersonen.\n• Direct (DTC = Direct to Consumer, bv Tesla).\n• Indirect (via groothandel + detailhandel).\n• Omni-channel: combinatie online + offline.\n\n**4. Promotie**:\n• Hoe maak je het bekend?\n• Reclame: TV, radio, online, billboard.\n• Persoonlijke verkoop, sales-team.\n• Sales promotion: korting, samples.\n• Public relations: persberichten, sponsoring.\n• Social media + influencer-marketing.\n• Content marketing (blog, podcast, video).\n• SEO + SEA (zoekmachine-optimalisatie + advertising).\n\n**3 extra P's** (modern, vooral diensten):\n• **People** (mensen — medewerkers + cultuur).\n• **Process** (klantreis-proces).\n• **Physical evidence** (uitstraling, branding, locatie).\n\n**Doelgroep + segmentatie**:\n• **Demografisch**: leeftijd, geslacht, inkomen, gezinsgrootte.\n• **Geografisch**: regio, stad/dorp, klimaat.\n• **Psychografisch**: leefstijl, waarden, persoonlijkheid.\n• **Gedrag**: koop-frequentie, loyaliteit, voordeel-zoekend.\n• **Personas**: ideaaltypische klant-profielen.\n\n**Marktonderzoek**:\n• **Kwantitatief**: enquête, surveys, statistieken. Veel mensen.\n• **Kwalitatief**: interviews, focusgroepen. Diepgaand maar weinig mensen.\n• **Online**: A/B-tests, click-data, heatmaps.\n\n**Concurrentie-analyse**:\n• Wie zijn directe concurrenten?\n• Wat is hun **SWOT** (Strengths/Weaknesses/Opportunities/Threats)?\n• **Porter's 5 Forces**:\n  1. Concurrentie binnen sector.\n  2. Macht leveranciers.\n  3. Macht klanten.\n  4. Dreiging nieuwe toetreders.\n  5. Substituten.\n\n**Online marketing-trends**:\n• **SEO** (organisch zoeken).\n• **SEA** (Google Ads, betaald).\n• **Social media** (Insta, TikTok, LinkedIn).\n• **Influencer-marketing**.\n• **Email-marketing**.\n• **Content-marketing** (blog/video).\n• **Conversie-optimalisatie** (CRO).\n• **Marketing-automation** (mail-flows op gedrag).\n\n**Handel**:\n• **Groothandel**: B2B, kopen + doorverkopen aan winkels.\n• **Detailhandel**: B2C, eindconsument.\n• **E-commerce**: online-handel. NL groot in (Bol.com, Coolblue, Wehkamp).\n• **Cross-border**: internationale handel.\n\n**Inkoop**:\n• **Strategische inkoop**: belangrijk voor bedrijf, lange-termijn-relatie.\n• **Operationele inkoop**: dagelijks, gestandaardiseerd.\n• **Just-in-time** (JIT): voorraad minimaliseren, geleverd wanneer nodig (Toyota-pionier).\n\n**Klantloyaliteit**:\n• Loyale klant kost minder dan nieuwe werven (~5×).\n• Loyalty-programma's, NPS (Net Promoter Score), CRM-systemen.\n• Mondtot-mond reclame (positief + negatief) krachtig.\n\n**Duurzaamheid + maatschappelijk verantwoord ondernemen (MVO/CSR)**:\n• Druk van consumenten, NGO's, overheid.\n• Voorbeelden: Tony's Chocolonely (slavernij-vrij), Patagonia, Triodos Bank.\n• Risico greenwashing (zogenaamd duurzaam).\n• EU-CSRD (Corporate Sustainability Reporting Directive) verplicht rapportage sinds 2024.\n\n**Internationale handel**:\n• **Export** = goederen + diensten verkopen aan buitenland.\n• **Import** = kopen uit buitenland.\n• **Handelsbalans** = export − import. NL: groot positief (Rotterdam-haven).\n• **Wisselkoersrisico**: euro/dollar-fluctuatie.\n• **Hedging**: afdekken risico's via futures, opties.\n• **Globalisering**: WTO 1995, China-WTO-lid 2001, recente terugslag (Trump-tarieven, Brexit, Rusland-sancties).",
    checks: [
      {
        q: "**4 P's** van marketing zijn:",
        options: ["Product, Prijs, Plaats, Promotie","Pre, Post, Push, Pull","Person, Place, Past, Possible","Profit, Power, People, Planet"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Wel populair (3P's MVO) maar niet originele 4P's."],
        uitlegPad: {
          stappen: [{ titel: "McCarthy 1960", tekst: "**4 P's** (Jerome McCarthy 1960): **Product, Prijs, Plaats, Promotie**. Marketing-mix-basis. Moderne uitbreidingen: People, Process, Physical evidence (vooral diensten)." }],
          niveaus: { basis: "Prod/Prijs/Plaats/Promotie. A.", simpeler: "4P = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is **psychologische prijs**?",
        options: ["€9,99 voelt veel lager dan €10","Geheime prijs","Tijdelijke prijs","Prijs voor psychologen"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Linksomafronding", tekst: "**Psychologische prijs**: ronding net onder een rond getal (€9,99 ipv €10). Hersenen lezen vooral eerste cijfer ('9') → voelt veel lager. Werkt bewezen — €9,99-prijs verkoopt 20-30% beter dan €10. Ook €99 vs €100, €499 vs €500." }],
          niveaus: { basis: "9,99 voelt lager. A.", simpeler: "Psy prijs = A.", nogSimpeler: "9,99 = A." },
        },
      },
      {
        q: "**Porter's 5 Forces** is voor:",
        options: ["Concurrentie-analyse","Marketing-mix","Boekhouding","HR"],
        answer: 0,
        wrongHints: [null, "Niet — andere theorie.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Michael Porter 1979", tekst: "**5 Forces** (Porter): analyse-framework concurrentie sector.\n1. Concurrentie binnen sector.\n2. Macht leveranciers.\n3. Macht klanten.\n4. Dreiging nieuwe toetreders.\n5. Substituten.\n\nBedrijven analyseren hun positie via deze 5 invalshoeken." }],
          niveaus: { basis: "Concurrentie. A.", simpeler: "5F = concurrentie-analyse = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Just-in-time** (JIT) is een methode voor:",
        options: ["Voorraad minimaliseren — geleverd wanneer nodig","Snel-bedrijfsstart","Klantkorting","Personeel"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Toyota-methode", tekst: "**Just-in-time**: voorraad zo minimaal mogelijk; producten + onderdelen worden geleverd **op het moment dat ze nodig zijn**. Spaart opslagkosten + werkkapitaal. **Toyota pionier** vanaf jaren '50. Zwakte: kwetsbaar bij verstoring keten (COVID-19 + chiptekort 2020-22 toonde dit)." }],
          theorie: "Cito-actueel: discussie 'just-in-case' (meer voorraad voor zekerheid) als reactie op kwetsbaarheid JIT.",
          niveaus: { basis: "Voorraad min. A.", simpeler: "JIT = min voorraad = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is **MVO** (CSR)?",
        options: ["Maatschappelijk Verantwoord Ondernemen","Marketing Vereniging Online","Maandelijkse Verkoop Overzicht","Markttoezicht"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Triple bottom line", tekst: "**MVO** = Maatschappelijk Verantwoord Ondernemen (Engels CSR = Corporate Social Responsibility). Bedrijven hebben verantwoordelijkheid voor **People, Planet, Profit** (triple bottom line). Voorbeelden NL: Tony's Chocolonely (slavernij-vrij chocolade), Triodos Bank, Patagonia. EU verplicht rapportage via CSRD sinds 2024 voor grote bedrijven." }],
          niveaus: { basis: "MVO. A.", simpeler: "MVO = duurzaam ondernemen = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — bedrijfseconomie mix",
    explanation:
      "Mix van balans + kosten + financiering + marketing.\n\nVeel succes!",
    checks: [
      {
        q: "Welke is **vlottend actief**?",
        options: ["Voorraad","Gebouw","Machine","Aandelenkapitaal"],
        answer: 0,
        wrongHints: [null, "Vast actief.", "Vast actief.", "Eigen vermogen (passiva)."],
        uitlegPad: {
          stappen: [{ titel: "<1 jaar = vlottend", tekst: "**Vlottende activa**: < 1 jaar gebruikt. Voorraad, debiteuren, kas, bank. **Vaste activa**: > 1 jaar. Gebouwen, machines, voertuigen. Onderscheid belangrijk voor balans-analyse + liquiditeit." }],
          niveaus: { basis: "Voorraad. A.", simpeler: "Voorraad = vlottend = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Brutomarge** = ?",
        options: ["(Omzet − inkoop) / omzet × 100%","Omzet / inkoop","Nettowinst / EV","Inkoop / omzet"],
        answer: 0,
        wrongHints: [null, "Geen marge-formule.", "Niet — REV.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [{ titel: "Bruto-rendement op omzet", tekst: "**Brutomarge** = (Omzet − Inkoopwaarde) / Omzet × 100%. Toont % van elke euro omzet dat als brutowinst overblijft. Sectoren verschillen: tech 60-80%, detailhandel 30-50%, auto's 10-15%." }],
          niveaus: { basis: "(O−I)/O ×100. A.", simpeler: "Bruto = (O−I)/O = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Solvabiliteit van 60%** betekent:",
        options: ["60% van vermogen is eigen vermogen","60% schuld","60% winst","60% liquide"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet relevant.", "Niet — andere ratio."],
        uitlegPad: {
          stappen: [{ titel: "EV-aandeel", tekst: "**Solvabiliteit 60%** = EV / Totaal vermogen = 60%. Dus 60% gefinancierd met eigen geld, 40% met schuld. Sterk solvabel, banken zullen graag lenen. Vuistregel: ≥25-30% redelijk." }],
          niveaus: { basis: "60% EV. A.", simpeler: "Solv 60% = 60% EV = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Bedrijf met **alleen ingehouden winst** voor groei financiert:",
        options: ["Intern (eigen vermogen)","Extern (vreemd vermogen)","Beide","Geen financiering"],
        answer: 0,
        wrongHints: [null, "Niet — vreemd = lenen.", "Niet hier.", "Wel financiering, intern."],
        uitlegPad: {
          stappen: [{ titel: "Self-funded", tekst: "**Ingehouden winst** = niet uitgekeerd aan eigenaren, geherinvesteerd in bedrijf. Vorm van **intern EV**. Voordeel: geen rente, geen verdunning. Nadeel: groei beperkt door winst. Veel familiebedrijven groeien zo. Externe financiering nodig voor snellere groei." }],
          niveaus: { basis: "Intern. A.", simpeler: "Ingehouden winst = intern = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke is **vraag-stimulerend** (geen prijs-strategie)?",
        options: ["Reclame-campagne (promotie)","Penetratie","Skimming","Cost-plus"],
        answer: 0,
        wrongHints: [null, "Wel prijs.", "Wel prijs.", "Wel prijs."],
        uitlegPad: {
          stappen: [{ titel: "Promotie ≠ prijs", tekst: "**Reclame** zit in 4e P (Promotie), niet 2e (Prijs). Stimuleert vraag zonder per se prijs aan te passen. Andere genoemde opties zijn allemaal prijs-strategieën." }],
          niveaus: { basis: "Reclame = promotie. A.", simpeler: "Reclame ≠ prijs = A.", nogSimpeler: "A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const bedrijfseconomieHavoVwo = {
  id: "bedrijfseconomie-havo-vwo",
  title: "Bedrijfseconomie kerngebieden (HAVO/VWO)",
  emoji: "💼",
  level: "havo4-5-vwo",
  subject: "economie",
  referentieNiveau: "havo-vwo-CSE-bedrijfseconomie",
  sloThema: "Bedrijfseconomie HAVO/VWO — eindexamen (M&O-opvolger)",
  prerequisites: [
    { id: "balans-beco", title: "Balans (basis)", niveau: "klas3-4" },
    { id: "vraag-aanbod-economie", title: "Vraag + aanbod", niveau: "klas3" },
    { id: "procenten", title: "Procenten", niveau: "klas2" },
  ],
  intro:
    "Bedrijfseconomie HAVO/VWO eindexamen (sinds 2018, opvolger M&O). Balans + W&V (debet/credit + solvabiliteit/liquiditeit), kostencalculatie + BEP, financiering + investering (EV/VV + TVT + rechtsvormen), marketing (4P's + Porter + MVO). ~15-20 min.",
  triggerKeywords: [
    "bedrijfseconomie", "M&O", "MO",
    "balans", "activa", "passiva",
    "eigen vermogen", "vreemd vermogen",
    "vlottende activa", "vaste activa",
    "debiteuren", "crediteuren",
    "solvabiliteit", "liquiditeit",
    "current ratio", "quick ratio",
    "winst-en-verlies-rekening", "V&W",
    "brutowinst", "nettowinst",
    "afschrijving",
    "constante kosten", "vaste kosten", "variabele kosten",
    "kostprijs",
    "break-even", "BEP",
    "dekkingsbijdrage",
    "skimming", "penetratie",
    "BTW", "vennootschapsbelasting",
    "vpb",
    "rentabiliteit", "REV", "RTV",
    "terugverdientijd", "TVT",
    "NCW", "NPV",
    "cashflow",
    "werkkapitaal",
    "BV", "NV", "eenmanszaak", "VOF",
    "marketing", "4 P's", "4P",
    "marketing-mix",
    "Porter", "5 forces",
    "SWOT",
    "MVO", "CSR",
    "just-in-time", "JIT",
    "segmentatie",
    "USP",
  ],
  chapters,
  steps,
};

export default bedrijfseconomieHavoVwo;
