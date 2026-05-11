// Leerpad: Pincode 7e ed. VMBO-GT klas 4 - hoofdstuk 3 (Ben jij ondernemend?)
// Uitgebreide versie 2026-05-09: 7 stappen voor compleet examen-blok.
// Concrete voorbeelden: foodtruck, webshop, bijles geven.

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

const stepEmojis = ["🚀", "🔍", "🎯", "📈", "📊", "🏆", "⚖️", "🧾", "⚠️"];

const chapters = [
  { letter: "A", title: "Starten", emoji: "🚀", from: 0, to: 2 },
  { letter: "B", title: "Markt", emoji: "📊", from: 3, to: 5 },
  { letter: "C", title: "Bedrijf inrichten", emoji: "⚖️", from: 6, to: 7 },
  { letter: "D", title: "Risico", emoji: "⚠️", from: 8, to: 8 },
];

const steps = [
  // ─── Stap 1: Wat is ondernemen ────────────────────────────
  {
    title: "Wat is ondernemen? — kansen, risico en winst",
    explanation: "**Ondernemen** = met eigen middelen en risico iets produceren of verkopen om **winst** te maken.\n\n**Een ondernemer**:\n• Ziet **kansen** in de markt (wat hebben mensen nodig?)\n• Neemt **risico** (kan ook verlies maken)\n• Is **zelfstandig** (geen baas)\n• Investeert eigen geld of leent\n\n**Soorten ondernemingen** (op basis wat je doet):\n• **Productie**: maakt iets nieuws (bakker, kledingmerk, foodtruck eigenaar)\n• **Handel**: koopt en verkoopt door (winkel, webshop, supermarkt)\n• **Diensten**: levert iets onstoffelijks (kapper, IT-bedrijf, bijles geven)\n\n**Stappen voor het starten van een bedrijf**:\n1. **Idee** — wat ga je doen?\n2. **Marktonderzoek** — is er vraag naar? (volgende stap)\n3. **Ondernemingsplan** — wat ga je verkopen, voor welke prijs, wat zijn de kosten?\n4. **Inschrijven bij KvK** (Kamer van Koophandel) — verplicht\n5. **BTW-nummer** krijgen via Belastingdienst\n6. **Starten** — producten/dienst leveren, klanten werven\n\n**Voorbeeld 'Foodtruck Funky Fries' van Sam (19)**:\n• Idee: Belgische friet op evenementen\n• Marktonderzoek: praat met festival-organisatoren, kijk concurrenten\n• Plan: investering €15.000 (truck + apparatuur + voorraad)\n• KvK-inschrijving: €80\n• Eerste festival: omzet €2.400 over 2 dagen, kosten €1.600 → winst €800\n\n**Risico** = je kunt al je geïnvesteerde geld verliezen als het niet werkt.",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">START EEN BEDRIJF</text>
<text x="50" y="55" text-anchor="middle" fill="${COLORS.geld}" font-size="22" font-family="Arial">💡</text>
<text x="50" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">idee</text>
<text x="85" y="60" fill="${COLORS.muted}" font-size="14" font-family="Arial">→</text>
<text x="120" y="55" text-anchor="middle" fill="${COLORS.vraag}" font-size="22" font-family="Arial">🔍</text>
<text x="120" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">onderzoek</text>
<text x="160" y="60" fill="${COLORS.muted}" font-size="14" font-family="Arial">→</text>
<text x="200" y="55" text-anchor="middle" fill="${COLORS.warm}" font-size="22" font-family="Arial">📋</text>
<text x="200" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">plan</text>
<text x="232" y="60" fill="${COLORS.muted}" font-size="14" font-family="Arial">→</text>
<text x="265" y="55" text-anchor="middle" fill="${COLORS.alt}" font-size="22" font-family="Arial">🚀</text>
<text x="265" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">starten</text>
<text x="160" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">3 soorten ondernemingen:</text>
<rect x="20" y="130" width="85" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="62" y="148" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">PRODUCTIE</text>
<text x="62" y="162" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">bakker, foodtruck</text>
<rect x="118" y="130" width="85" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="160" y="148" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">HANDEL</text>
<text x="160" y="162" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">winkel, webshop</text>
<rect x="216" y="130" width="85" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="258" y="148" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">DIENST</text>
<text x="258" y="162" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">kapper, bijles</text>
<text x="160" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">eigen risico → kans op winst of verlies</text>
</svg>`,
    checks: [
      {
        q: "Een **webshop in handgemaakte sieraden** — welk type onderneming?",
        options: ["Productie (je maakt zelf)", "Handel", "Diensten", "Geen van deze"],
        answer: 0,
        wrongHints: [null, "Handel = inkopen en doorverkopen zonder zelf te maken.", "Diensten = iets ongrijpbaars (kapsel, advies).", "Het past wel — sieraden maken is productie."],
        uitlegPad: {
          stappen: [{ titel: "Zelf maken?", tekst: "Handgemaakte sieraden → jij maakt ze ZELF. Dat is productie. Webshop is alleen het kanaal." }],
          woorden: [{ woord: "productie", uitleg: "Iets NIEUWS maken: bakker (brood), kleermaker (kleding), sieraden-maker." }, { woord: "handel", uitleg: "Iets INGEKOCHT doorverkopen zonder zelf te maken: winkel, supermarkt." }, { woord: "dienst", uitleg: "Iets onstoffelijks leveren: kapsel, IT-advies, taxi-rit." }],
          theorie: "Drie types ondernemingen: productie (zelf maken), handel (doorverkopen) en diensten (onstoffelijk leveren). Test: 'wat zit er in de winkel: jouw werk, ingekochte spullen, of iets dat je DOET?'",
          voorbeelden: [{ type: "productie", tekst: "Bakker bakt brood. Sieraden-maker maakt ketting." }, { type: "handel", tekst: "Albert Heijn koopt brood in en verkoopt het." }, { type: "dienst", tekst: "Kapper knipt jouw haar." }],
          basiskennis: [{ onderwerp: "Kanaal vs type", uitleg: "Webshop is een KANAAL (waar je verkoopt). Type onderneming gaat over WAT je verkoopt." }],
          niveaus: { basis: "Zelf maken = productie. A.", simpeler: "Je MAAKT de sieraden zelf. Daarom productie. Webshop is alleen de manier waarop je verkoopt. = A.", nogSimpeler: "Zelf maken = A." },
        },
      },
      {
        q: "**Bijles wiskunde geven** is welk type?",
        options: ["Diensten", "Productie", "Handel", "Geen van deze"],
        answer: 0,
        wrongHints: [null, "Je maakt geen tastbaar product.", "Je verkoopt geen ingekochte spullen door.", "Het is wel duidelijk een type — denk: tastbaar of niet?"],
        uitlegPad: {
          stappen: [{ titel: "Tastbaar of niet?", tekst: "Bij bijles geef je UITLEG en TIJD — niets om vast te pakken. Dat is een dienst." }],
          woorden: [{ woord: "dienst", uitleg: "Onstoffelijke prestatie: kennis, tijd, ervaring leveren aan een klant." }],
          theorie: "Bij dienst lever je iets dat de klant niet kan opstapelen of in een vitrine zetten — kennisoverdracht (bijles), wel-zijn (massage), advies (consultant).",
          voorbeelden: [{ type: "dienst", tekst: "Bijles, kapper, taxi, fitness-instructeur, advocaat, fysiotherapeut." }],
          basiskennis: [{ onderwerp: "Test", uitleg: "Kun je het opbergen in een doos? Nee → dienst." }],
          niveaus: { basis: "Bijles = dienst. A.", simpeler: "Je geeft uitleg + tijd. Niet iets tastbaars. Dat is een dienst. = A.", nogSimpeler: "Niet tastbaar = A." },
        },
      },
      {
        q: "Welke instantie schrijft je in als nieuwe ondernemer?",
        options: ["Kamer van Koophandel (KvK)", "De gemeente", "DUO", "De school"],
        answer: 0,
        wrongHints: [null, "Gemeente regelt soms vergunningen, geen inschrijving.", "DUO is voor studie.", "School heeft hier geen rol in."],
        uitlegPad: {
          stappen: [{ titel: "Officieel ondernemer worden", tekst: "Voor je mag verkopen + factureren moet je in het Handelsregister staan. Dat regelt de Kamer van Koophandel (KvK)." }],
          woorden: [{ woord: "KvK", uitleg: "Kamer van Koophandel. Onafhankelijk register van alle ondernemingen in NL." }, { woord: "Handelsregister", uitleg: "Officiële lijst van alle bedrijven, beheerd door KvK." }],
          theorie: "KvK-inschrijving (€80 in 2024) levert je een KvK-nummer op. Vervolgens stuurt KvK je gegevens door naar de Belastingdienst → automatisch BTW-nummer.",
          voorbeelden: [{ type: "praktijk", tekst: "Sam met de foodtruck: inschrijven bij KvK in Utrecht, betaalt €80, krijgt KvK-nummer + automatisch BTW-nummer." }],
          basiskennis: [{ onderwerp: "Niet de gemeente", uitleg: "Gemeente is voor vergunningen (terras, geluid). Ondernemerschap zelf gaat via KvK." }],
          niveaus: { basis: "KvK schrijft in. A.", simpeler: "Voor officieel ondernemer = inschrijven bij Kamer van Koophandel. = A.", nogSimpeler: "KvK = A." },
        },
      },
      {
        q: "Een ondernemer **neemt risico**. Wat betekent dat?",
        options: ["Hij kan zijn investering verliezen als het bedrijf verliesgevend is", "Hij krijgt altijd zijn geld terug", "Hij betaalt geen belasting", "Hij hoeft niet te werken"],
        answer: 0,
        wrongHints: [null, "Geen garantie — anders was het geen risico.", "Ondernemers betalen wél belasting.", "Ondernemers werken vaak heel hard juist door risico."],
        uitlegPad: {
          stappen: [{ titel: "Geld weg = mogelijk", tekst: "Risico = de kans dat het MIS gaat. De ondernemer kan zijn ingelegde geld kwijtraken als het bedrijf niet werkt." }],
          woorden: [{ woord: "ondernemersrisico", uitleg: "Kans op verlies van investering bij slecht resultaat. Daarom recht op winst als het wél lukt." }, { woord: "investering", uitleg: "Geld dat je in een bedrijf steekt: voorraad, machines, marketing." }],
          theorie: "Risico is de essentie van ondernemen. Werknemer krijgt loon ongeacht resultaat. Ondernemer krijgt winst BIJ succes en verlies BIJ falen. Vandaar de potentiële beloning (winst).",
          voorbeelden: [{ type: "verlies", tekst: "Sam investeert €15.000 in foodtruck. Festival regent weg, geen klanten → verlies €10.000." }, { type: "winst", tekst: "Sam draait goed weekend → omzet €3.000, kosten €1.500 → winst €1.500." }],
          basiskennis: [{ onderwerp: "Belasting + werken", uitleg: "Ondernemer betaalt ook belasting (over winst, en BTW). Hij werkt vaak juist heel hard." }],
          niveaus: { basis: "Hij kan zijn investering verliezen. A.", simpeler: "Risico = kans dat het mis gaat. Ondernemer kan het geld kwijtraken als bedrijf failliet gaat. = A.", nogSimpeler: "Geld kwijt = A." },
        },
      },
      {
        q: "Sam start de Foodtruck Funky Fries. Welke stap komt VÓÓR het ondernemingsplan?",
        options: ["Marktonderzoek", "Inschrijving KvK", "Starten van verkoop", "BTW-aangifte doen"],
        answer: 0,
        wrongHints: [null, "Inschrijving komt nadat je weet wat je gaat doen.", "Verkoop is de laatste stap.", "BTW-aangifte volgt na inschrijving."],
        uitlegPad: {
          stappen: [{ titel: "Volgorde van starten", tekst: "1) Idee → 2) Marktonderzoek (is er vraag?) → 3) Plan (hoe ga je het doen?) → 4) KvK → 5) Starten → 6) Aangiften. Marktonderzoek komt vóór plan." }],
          woorden: [{ woord: "ondernemingsplan", uitleg: "Document met je idee, doelgroep, prijzen, kosten, verwachte omzet, financiering. Basis om te starten + lening krijgen." }, { woord: "marktonderzoek", uitleg: "Uitzoeken: is er vraag, wat is concurrentie, wat willen klanten betalen?" }],
          theorie: "Logica: zonder marktonderzoek weet je niet wat in het plan moet. Zonder plan kun je je niet zinvol inschrijven (KvK wil weten wat je doet) of investeren.",
          voorbeelden: [{ type: "Sam", tekst: "Sam wil foodtruck. Onderzoek toont: festivalbezoekers willen friet €5. Plan gebruikt deze info → bestelt truck → KvK → start." }],
          basiskennis: [{ onderwerp: "Idee → onderzoek → plan", uitleg: "Drie stappen vóór je iets formaliseert. Daarna KvK + starten." }],
          niveaus: { basis: "Marktonderzoek voor plan. A.", simpeler: "Eerst kijken of er vraag is (onderzoek), DAN plan maken hoe je het gaat doen. = A.", nogSimpeler: "Onderzoek eerst = A." },
        },
      },
      {
        q: "Welk kenmerk hoort er NIET bij een ondernemer?",
        options: ["Heeft een baas die het werk uitdeelt", "Ziet kansen", "Investeert eigen geld of leent", "Neemt risico"],
        answer: 0,
        wrongHints: [null, "Klopt — kansen zien is kern.", "Klopt — geld is altijd nodig.", "Klopt — risico is essentieel kenmerk."],
        uitlegPad: {
          stappen: [{ titel: "Wat onderscheidt ondernemer van werknemer?", tekst: "Werknemer heeft een baas. Ondernemer IS de baas — neemt zelf alle beslissingen, ziet kansen, investeert + draagt risico." }],
          woorden: [{ woord: "ondernemer", uitleg: "Zelfstandig persoon die met eigen middelen een bedrijf runt." }, { woord: "werknemer", uitleg: "Iemand in loondienst bij een werkgever." }],
          theorie: "Drie kerneigenschappen ondernemer: (1) kansen zien, (2) investeren, (3) risico nemen. Een baas hebben zou dit allemaal omkeren — dan ben je werknemer.",
          voorbeelden: [{ type: "ondernemer", tekst: "Sam beslist zelf welke festivals + welke prijzen + werkt 60 uur in seizoen." }, { type: "werknemer", tekst: "Frituurmedewerker bij McDonalds krijgt rooster van manager + vast loon, geen risico." }],
          basiskennis: [{ onderwerp: "Geen baas = ondernemer", uitleg: "De afwezigheid van een baas is wat ondernemer onderscheidt. Hij is zelfstandig." }],
          niveaus: { basis: "Baas hebben = werknemer, niet ondernemer. A.", simpeler: "Een ondernemer heeft GEEN baas. Hij beslist zelf. Daarom past 'heeft een baas' niet bij hem. = A.", nogSimpeler: "Baas = werknemer = A." },
        },
      },
    ],
  },
  // ─── Stap 2: Marktonderzoek ─────────────────────────────────
  {
    title: "Marktonderzoek — is er vraag naar mijn idee?",
    explanation: "Voor je start: weet je dat er **vraag** is naar wat je wilt verkopen? Anders investeer je geld zonder klanten te krijgen.\n\n**Marktonderzoek** = systematisch uitzoeken: zijn er klanten, wat willen ze, wat betalen ze, wie zijn concurrenten?\n\n**Twee hoofdvormen**:\n\n**1. Deskresearch (online)**\n• Google: zoeken concurrenten\n• Sociale media: zien wat mensen zeggen\n• CBS, brancheorganisaties: cijfers\n• **Goedkoop maar algemeen**\n\n**2. Veldonderzoek (zelf doen)**\n• **Enquête**: vragenlijst aan potentiële klanten\n• **Interview**: diepgaand met enkele klanten\n• **Observatie**: kijken hoe mensen zich gedragen\n• **Test**: probeer met een klein groepje\n• **Duurder maar specifiek**\n\n**Voorbeeld Foodtruck Funky Fries**:\nSam vraagt 30 festival-bezoekers via Instagram-poll: 'Zou je €5 betalen voor verse Belgische friet op een festival?'\n• 22 zeggen ja → goede kans\n• 5 zeggen nee → te duur\n• 3 zeggen ja, maar liever €4 → prijspunt onderzoeken\n\n**Wat onderzoek je**?\n• **Doelgroep**: wie is je klant? (leeftijd, locatie, koopkracht)\n• **Concurrenten**: wat bieden zij? (prijs, kwaliteit)\n• **Trends**: groeit de markt? (bv. bezorgmarkt boomde door corona)\n• **Prijsbereidheid**: wat willen klanten betalen?\n\n**SWOT-analyse** — vat alles samen:\n• **S**trengths (sterk): wat doe ik beter?\n• **W**eaknesses (zwak): wat kan beter?\n• **O**pportunities (kansen): wat kan ik benutten?\n• **T**hreats (bedreigingen): wat kan misgaan?",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">MARKTONDERZOEK</text>
<rect x="20" y="40" width="135" height="50" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="87" y="58" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">DESK 💻</text>
<text x="87" y="73" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">online · cijfers · concurrenten</text>
<text x="87" y="85" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">goedkoop, algemeen</text>
<rect x="165" y="40" width="135" height="50" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="232" y="58" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">VELD 🚶</text>
<text x="232" y="73" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">enquête · interview · test</text>
<text x="232" y="85" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">duurder, specifiek</text>
<text x="160" y="115" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">SWOT-ANALYSE</text>
<rect x="40" y="125" width="115" height="35" rx="4" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="97" y="142" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">S sterk</text>
<text x="97" y="155" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">wat doe ik beter</text>
<rect x="165" y="125" width="115" height="35" rx="4" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="222" y="142" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">W zwak</text>
<text x="222" y="155" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">wat kan beter</text>
<rect x="40" y="165" width="115" height="35" rx="4" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="97" y="182" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">O kansen</text>
<text x="97" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">wat kan ik benutten</text>
<rect x="165" y="165" width="115" height="35" rx="4" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.2"/>
<text x="222" y="182" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">T bedreig.</text>
<text x="222" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">wat kan misgaan</text>
</svg>`,
    checks: [
      {
        q: "Wat is **deskresearch**?",
        options: ["Onderzoek vanachter je computer (Google, CBS, sociale media)", "Onderzoek door interviews op straat", "Een soort meubel", "Een verplichte enquête"],
        answer: 0,
        wrongHints: [null, "Dat is veldonderzoek.", "Geen meubelvraag.", "Niet verplicht — een methode."],
        uitlegPad: {
          stappen: [{ titel: "Achter je bureau zoeken", tekst: "Desk = bureau. Deskresearch = onderzoek dat je achter je computer doet: googelen, CBS-cijfers, sociale-media-scan, brancheorganisaties." }],
          woorden: [{ woord: "deskresearch", uitleg: "Marktonderzoek door bestaande informatie te zoeken — niet zelf interviewen." }, { woord: "veldonderzoek", uitleg: "Zelf data verzamelen via enquête, interview, observatie." }],
          theorie: "Goedkoop + snel maar ALGEMEEN. Je weet veel over de markt in algemene zin, maar niet specifiek over JOUW doelgroep.",
          voorbeelden: [{ type: "desk", tekst: "Sam googelt 'aantal foodtrucks in NL' + 'gemiddelde prijs friet op festival'." }],
          basiskennis: [{ onderwerp: "Niet meubel", uitleg: "Engelse 'desk' = bureau. Niet letterlijk een meubel." }],
          niveaus: { basis: "Desk = computer-onderzoek. A.", simpeler: "Deskresearch = info opzoeken (Google, CBS, socials). Veldonderzoek = de straat op (interviews). = A.", nogSimpeler: "Computer = desk = A." },
        },
      },
      {
        q: "Sam zet een Instagram-poll uit. Welk type onderzoek is dat?",
        options: ["Veldonderzoek (enquête)", "Deskresearch", "SWOT-analyse", "Boekhouding"],
        answer: 0,
        wrongHints: [null, "Desk = bestaande info verzamelen.", "SWOT = analyse-methode, geen onderzoek-type.", "Boekhouding = administratie."],
        uitlegPad: {
          stappen: [{ titel: "Vragen aan publiek", tekst: "Een poll = jij stelt vragen aan jouw publiek (potentiële klanten). Dat is een digitale ENQUÊTE = veldonderzoek." }],
          woorden: [{ woord: "enquête", uitleg: "Vragenlijst aan een groep mensen om hun mening of gedrag te onderzoeken." }, { woord: "veldonderzoek", uitleg: "Zelf nieuwe data verzamelen — interview, enquête, observatie, test." }],
          theorie: "Het MEDIUM (papier, internet, op straat) maakt niet uit. Wat telt: verzamel je ZELF nieuwe data (veld) of zoek je BESTAANDE info (desk).",
          voorbeelden: [{ type: "veld", tekst: "Instagram-poll, straatinterview, focusgroep, klant-test." }, { type: "desk", tekst: "CBS-rapport, Google-trends, brancheblog." }],
          basiskennis: [{ onderwerp: "Online ≠ desk", uitleg: "Online onderzoek kan veld zijn (poll, enquête) OF desk (bestaande info). Het gaat om: zelf vragen of opzoeken?" }],
          niveaus: { basis: "Poll = enquête = veld. A.", simpeler: "Een Instagram-poll vraagt aan mensen wat ze vinden. Dat is veldonderzoek — jij verzamelt nieuwe data. = A.", nogSimpeler: "Vragen stellen = veld = A." },
        },
      },
      {
        q: "Wat staat de **W** voor in een SWOT-analyse?",
        options: ["Weaknesses (zwakke punten)", "Wins", "Wishes", "Workers"],
        answer: 0,
        wrongHints: [null, "Niet wat het betekent.", "Niet de afkorting.", "Workers heeft niets met SWOT te maken."],
        uitlegPad: {
          stappen: [{ titel: "SWOT-letters", tekst: "S = Strengths (sterk). W = Weaknesses (zwak). O = Opportunities (kansen). T = Threats (bedreigingen). 4 kwadranten." }],
          woorden: [{ woord: "SWOT", uitleg: "Analyse-methode: sterke + zwakke punten (INTERN) en kansen + bedreigingen (EXTERN) in 1 schema." }, { woord: "Weaknesses", uitleg: "Engels voor zwakke punten — wat kan in jouw bedrijf BETER?" }],
          theorie: "SWOT helpt om voor te zijn: ken je sterke punten (uitspelen), zwakke punten (verbeteren), kansen (benutten), bedreigingen (anticiperen).",
          voorbeelden: [{ type: "SWOT Sam", tekst: "S: enige Belgische friet op markt. W: weinig kapitaal. O: bezorg-trend. T: regen." }],
          basiskennis: [{ onderwerp: "Letter-grep", uitleg: "Onthoud per letter wat het in Engels betekent — komt 't zelfde terug op elke business-kaart." }],
          niveaus: { basis: "W = Weaknesses = zwak. A.", simpeler: "SWOT: S = sterk, W = zwak, O = kansen, T = bedreigingen. W staat voor Weaknesses. = A.", nogSimpeler: "W = zwak = A." },
        },
      },
      {
        q: "Wat zou een **bedreiging** (T) zijn voor een nieuwe foodtruck?",
        options: ["Een grote concurrent komt op hetzelfde festival", "Een trouwe klantenkring", "Lage huur voor parkeerplek", "Goede recensies"],
        answer: 0,
        wrongHints: [null, "Trouwe klanten = sterk punt.", "Lage huur = kans.", "Goede recensies = sterk punt."],
        uitlegPad: {
          stappen: [{ titel: "Wat KAN MIS GAAN buiten jezelf?", tekst: "Bedreiging = EXTERN gevaar dat je niet zelf controleert. Een concurrent die je markt opslokt = klassieke T." }],
          woorden: [{ woord: "bedreiging (T)", uitleg: "Externe ontwikkeling die jou kan SCHADEN: concurrenten, wetgeving, recessie, weer." }, { woord: "kans (O)", uitleg: "Externe ontwikkeling die jou kan HELPEN: trend, technologie, wegvallen concurrent." }],
          theorie: "Bedreigingen + kansen zijn EXTERN (buiten jezelf). Sterke + zwakke punten zijn INTERN (in je bedrijf). Trouwe klanten + goede recensies + lage huur zijn INTERN of POSITIEF — geen bedreigingen.",
          voorbeelden: [{ type: "T Sam", tekst: "Concurrent-truck arriveert op zelfde festival → markt halveert." }, { type: "T algemeen", tekst: "Weer slecht → festival afgelast → 0 omzet die dag." }],
          basiskennis: [{ onderwerp: "EXTERN", uitleg: "Bedreiging komt van BUITEN, niet uit eigen bedrijf." }],
          niveaus: { basis: "Grote concurrent = T. A.", simpeler: "Een grote concurrent op zelfde festival = gevaar van buitenaf = bedreiging. = A.", nogSimpeler: "Concurrent = T = A." },
        },
      },
      {
        q: "Waarom is **veldonderzoek** vaak nuttiger dan deskresearch alleen?",
        options: ["Je krijgt antwoorden van JOUW potentiële klanten, niet algemene cijfers", "Het is gratis", "Het is altijd sneller", "Het is verplicht"],
        answer: 0,
        wrongHints: [null, "Veldonderzoek kost juist meer.", "Tegendeel — interviews kosten tijd.", "Niet verplicht."],
        uitlegPad: {
          stappen: [{ titel: "Algemeen vs specifiek", tekst: "Desk geeft algemene marktcijfers. Veld geeft antwoorden van JOUW klanten over JOUW idee. Veel waardevoller voor een concrete beslissing." }],
          woorden: [{ woord: "specifiek onderzoek", uitleg: "Onderzoek gericht op JOUW situatie/doelgroep — niet 'de markt in het algemeen'." }],
          theorie: "Tradeoff: desk is goedkoop + snel maar oppervlakkig. Veld is duur + tijdsintensief maar diep + specifiek. Beste combinatie: eerst desk (overzicht), daarna veld (concreet maken).",
          voorbeelden: [{ type: "desk only", tekst: "CBS: NL bezoekt 800 festivals/jaar. Maar willen ZE jouw friet? Onbekend." }, { type: "veld", tekst: "Sam vraagt 30 festivalbezoekers persoonlijk — krijgt concrete prijs-feedback." }],
          basiskennis: [{ onderwerp: "Tijd + geld", uitleg: "Veldonderzoek kost altijd MEER tijd én geld dan deskresearch. Geen gratis." }],
          niveaus: { basis: "Van jouw eigen klanten. A.", simpeler: "Veldonderzoek krijgt antwoorden van JOUW doelgroep over JOUW idee. Specifieker dus nuttiger. = A.", nogSimpeler: "Eigen klanten = A." },
        },
      },
      {
        q: "Welk kenmerk hoort bij **deskresearch**?",
        options: ["Goedkoop, snel toegankelijke informatie", "Specifiek voor jouw doelgroep", "Vereist veel persoonlijke gesprekken", "Levert altijd nieuwe inzichten"],
        answer: 0,
        wrongHints: [null, "Specifiek = juist veldonderzoek.", "Persoonlijke gesprekken = veld.", "Desk = algemeen, soms al bekend."],
        uitlegPad: {
          stappen: [{ titel: "Voordelen deskresearch", tekst: "Voordelen: GOEDKOOP (vaak gratis info) + SNEL (binnen uren) + GEMAKKELIJK toegankelijk." }],
          woorden: [{ woord: "deskresearch-voordeel", uitleg: "Lage drempel + brede info + snel beeld van de markt." }],
          theorie: "Nadelen: ALGEMEEN (niet specifiek voor jouw idee) + soms VEROUDERD + iedereen ziet hetzelfde (geen voorsprong).",
          voorbeelden: [{ type: "snel desk", tekst: "Sam googelt 1 uur lang: aantal foodtrucks, prijsranges, populaire toppings. Klaar." }],
          basiskennis: [{ onderwerp: "Tegenover veld", uitleg: "Desk en veld zijn complementair. Desk eerst (overzicht), veld erna (specifiek voor jou)." }],
          niveaus: { basis: "Desk = goedkoop + snel. A.", simpeler: "Deskresearch via internet/cijfers is gratis of goedkoop én snel uit te voeren. = A.", nogSimpeler: "Snel + goedkoop = A." },
        },
      },
    ],
  },
  // ─── Stap 3: Doelgroep en marketing ──────────────────────
  {
    title: "Doelgroep en marketing — wie zijn je klanten?",
    explanation: "**Doelgroep** = de mensen voor wie jouw product/dienst bedoeld is. Hoe specifieker, hoe beter je marketing werkt.\n\n**Doelgroep beschrijven** — denk aan:\n• **Demografisch**: leeftijd, geslacht, opleiding, inkomen\n• **Geografisch**: waar wonen ze (stad, dorp, regio)?\n• **Levensstijl**: wat doen ze, wat vinden ze leuk?\n• **Koopgedrag**: kopen ze online, in winkel, vaak/zelden?\n\n**Voorbeeld Foodtruck Funky Fries**:\nDoelgroep = bezoekers van outdoor festivals (16-35), willen snel lekker eten, betalen graag iets extra voor kwaliteit, delen graag op Instagram.\n\n**Marketing-mix (4 P's)** — hoe bereik je je doelgroep?\n\n**1. Product** — wat verkoop je?\n• Belgische friet, vegan saus, biologische ingrediënten\n\n**2. Prijs** — wat vraag je ervoor?\n• €5 medium, €7 large, combo's\n• Hoog = exclusief, laag = volume\n\n**3. Plaats** — waar verkoop je?\n• Festivals, weekendmarkten, bedrijfskantines\n• Geen vaste plek = lage huurkosten\n\n**4. Promotie** — hoe maak je het bekend?\n• Instagram + TikTok (waar doelgroep is)\n• Sticker op truck, gratis proefjes\n• Reviews stimuleren\n\n**USP (Unique Selling Point)** = wat maakt jou ANDERS dan de rest?\nVoor Funky Fries: 'enige foodtruck met 100% Belgische dubbel gefrituurde aardappel + glutenvrije sauzen.'\n\n**Klantenwerving** kost geld. Vuistregel: nieuwe klant kost 5× meer dan bestaande klant tevreden houden.",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">MARKETING-MIX (4 P's)</text>
<rect x="20" y="40" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="87" y="58" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">PRODUCT 🍟</text>
<text x="87" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">wat verkoop je</text>
<text x="87" y="86" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">kwaliteit, variatie</text>
<rect x="165" y="40" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="232" y="58" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">PRIJS 💰</text>
<text x="232" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">wat vraag je</text>
<text x="232" y="86" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">hoog of laag</text>
<rect x="20" y="100" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="87" y="118" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">PLAATS 📍</text>
<text x="87" y="134" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">waar verkoop je</text>
<text x="87" y="146" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">festival, online</text>
<rect x="165" y="100" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.2"/>
<text x="232" y="118" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">PROMOTIE 📣</text>
<text x="232" y="134" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">hoe bekend maken</text>
<text x="232" y="146" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">socials, reviews</text>
<text x="160" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">USP = wat maakt JOU anders?</text>
</svg>`,
    checks: [
      {
        q: "Wat is een **doelgroep**?",
        options: ["De mensen voor wie jouw product bedoeld is", "Het personeel", "Concurrenten", "Leveranciers"],
        answer: 0,
        wrongHints: [null, "Personeel = jouw mensen, geen klanten.", "Concurrenten zijn andere bedrijven.", "Leveranciers leveren AAN jou."],
        uitlegPad: {
          stappen: [{ titel: "Voor wie maak je het?", tekst: "Doelgroep = de specifieke mensen die je WIL bereiken als klant. Hoe scherper je hen omschrijft, hoe beter je marketing werkt." }],
          woorden: [{ woord: "doelgroep", uitleg: "De groep mensen voor wie je product of dienst gemaakt is." }, { woord: "segmentatie", uitleg: "De markt opdelen in groepen op basis van leeftijd, locatie, gedrag, etc." }],
          theorie: "Doelgroep beschrijf je via: leeftijd, geslacht, inkomen, woonplaats, levensstijl, koopgedrag. Hoe specifieker, hoe makkelijker te bereiken.",
          voorbeelden: [{ type: "Sam", tekst: "Doelgroep Funky Fries: festival-bezoekers 16-35, willen lekker snel-eten, instagram-actief." }, { type: "niet doelgroep", tekst: "Personeel werkt VOOR jou. Concurrent = andere ondernemer. Leverancier levert AAN jou." }],
          basiskennis: [{ onderwerp: "Niet 'iedereen'", uitleg: "'Iedereen' is geen doelgroep — dan kun je niemand specifiek aanspreken." }],
          niveaus: { basis: "Doelgroep = jouw klanten. A.", simpeler: "De mensen voor wie je product GEMAAKT IS = doelgroep. Niet personeel, niet concurrenten, niet leveranciers. = A.", nogSimpeler: "Klanten = A." },
        },
      },
      {
        q: "De **4 P's** van marketing zijn:",
        options: ["Product, Prijs, Plaats, Promotie", "Personeel, Productiviteit, Promotie, Pensioen", "Plan, Profit, Patent, People", "Print, Pop, Pin, Product"],
        answer: 0,
        wrongHints: [null, "Personeel hoort bij personeelsbeleid.", "Internationale termen die niet in Pincode staan.", "Geen marketing-categorieën."],
        uitlegPad: {
          stappen: [{ titel: "Vier instrumenten", tekst: "Marketing-mix = 4 P's. Product (wat verkoop je) + Prijs (wat vraag je) + Plaats (waar verkoop je) + Promotie (hoe maak je bekend)." }],
          woorden: [{ woord: "marketing-mix", uitleg: "De vier (of zes) instrumenten waarmee je je markt benadert." }, { woord: "4 P's", uitleg: "Product, Prijs, Plaats, Promotie. Soms uitgebreid met Personeel en Presentatie (6 P's)." }],
          theorie: "Elke P is een KNOP die je kan instellen. Voor Sam: Product (Belgische friet), Prijs (€5), Plaats (festival), Promotie (TikTok). 4 keuzes samen = marketingstrategie.",
          voorbeelden: [{ type: "premium", tekst: "Apple: Product (high-end), Prijs (hoog), Plaats (eigen winkels), Promotie (cinematisch)." }, { type: "discount", tekst: "Lidl: Product (eigen merk), Prijs (laag), Plaats (eigen filiaal), Promotie (folder)." }],
          basiskennis: [{ onderwerp: "Onthouden", uitleg: "Ezelsbruggetje: Pin Pin Pin Pin — Product Prijs Plaats Promotie. 4 keer P." }],
          niveaus: { basis: "Product, Prijs, Plaats, Promotie. A.", simpeler: "Marketing 4 P's: wat verkoop je (Product), voor hoeveel (Prijs), waar (Plaats), hoe vertel je het (Promotie). = A.", nogSimpeler: "4P's = Product/Prijs/Plaats/Promotie = A." },
        },
      },
      {
        q: "Wat is een **USP**?",
        options: ["Unique Selling Point — wat maakt jou anders dan de rest", "Een soort BTW", "Een marktanalyse", "Een type lening"],
        answer: 0,
        wrongHints: [null, "USP heeft niets met BTW te maken.", "Een marktanalyse is iets breders.", "Geen lening-vorm."],
        uitlegPad: {
          stappen: [{ titel: "Wat maakt JOU uniek?", tekst: "Unique Selling Point = je 'reden om bij JOU te kopen, niet bij de concurrent'. 1 of 2 dingen waar jij sterk in bent." }],
          woorden: [{ woord: "USP", uitleg: "Unique Selling Point — uniek verkoop-argument. Wat onderscheidt jou van concurrenten?" }],
          theorie: "Sterke USP's: kwaliteit (beste), prijs (goedkoopste), service (snelst), variatie (meeste keuze), niche (alleen vegan/glutenvrij). Eén heldere USP > tien zwakke claims.",
          voorbeelden: [{ type: "Sam USP", tekst: "'Enige foodtruck met 100% Belgische dubbel-gefrituurde friet + glutenvrije sauzen' = duidelijke USP." }, { type: "andere USP", tekst: "Coolblue USP: 'glimlach in elke doos' (klantenservice + verpakking)." }],
          basiskennis: [{ onderwerp: "Niet financieel", uitleg: "USP heeft niks met geld, belasting of leningen te maken. Het is een MARKETING-begrip." }],
          niveaus: { basis: "USP = uniek punt. A.", simpeler: "USP = waarom KOPEN MENSEN BIJ JOU en niet bij concurrent? Iets wat alleen jij hebt of doet. = A.", nogSimpeler: "Uniek = A." },
        },
      },
      {
        q: "Een **hoge prijs** (€8 voor friet) past bij welke marketing-strategie?",
        options: ["Exclusieve, kwaliteit-uitstraling — kleinere doelgroep", "Massa-verkoop", "Doelgroep met laag inkomen", "Laagste-prijs-strategie"],
        answer: 0,
        wrongHints: [null, "Massa = lage prijs, hoge volume.", "Lage inkomens kunnen hoge prijs niet vaak betalen.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [{ titel: "Hoge prijs signaleert kwaliteit", tekst: "Een hoge prijs maakt je product EXCLUSIEF — alleen bepaalde mensen kopen het. Past bij premium-merk, niet bij massa-strategie." }],
          woorden: [{ woord: "premium-strategie", uitleg: "Hoog prijspunt + sterke uitstraling + kleinere maar koopkrachtige doelgroep." }, { woord: "massa-strategie", uitleg: "Lage prijs + groot volume + brede doelgroep." }],
          theorie: "Drie hoofdstrategieën: (1) laagste prijs (Lidl, Action), (2) middenklasse (AH, HEMA), (3) premium (Albert Heijn-XL, Apple). Hoge prijs = signaal van exclusiviteit. Te lage prijs bij premium-product wekt wantrouwen.",
          voorbeelden: [{ type: "premium friet", tekst: "€8 friet met truffel-saus + biologische aardappel + festival-sfeer = premium." }, { type: "massa friet", tekst: "€2 friet bij snackbar = volume-strategie." }],
          basiskennis: [{ onderwerp: "Doelgroep volgt prijs", uitleg: "Doelgroep + prijs moeten OP ELKAAR PASSEN. Hoge prijs + lage-inkomens-doelgroep = mismatch." }],
          niveaus: { basis: "Hoge prijs = exclusief. A.", simpeler: "Hoge prijs trekt mensen die kwaliteit/exclusiviteit zoeken. Niet massa, niet laag-inkomen. = A.", nogSimpeler: "Hoog = exclusief = A." },
        },
      },
      {
        q: "**Vuistregel klantenwerving**:",
        options: ["Nieuwe klant kost ~5× meer dan bestaande klant tevreden houden", "Nieuwe klanten zijn altijd gratis", "Bestaande klanten kosten meer", "Alle klanten kosten hetzelfde"],
        answer: 0,
        wrongHints: [null, "Reclame en moeite kosten geld.", "Tegenovergesteld.", "Verschil is groot."],
        uitlegPad: {
          stappen: [{ titel: "Trouw is goud", tekst: "Bestaande klant kent je al, vertrouwt je. Nieuwe klant moet je vinden, overtuigen, eerste keer laten kopen. Veel duurder per persoon." }],
          woorden: [{ woord: "klantbinding", uitleg: "Bestaande klanten tevreden houden zodat ze terugkomen. Goedkoper dan nieuwe werven." }, { woord: "acquisitie", uitleg: "Nieuwe klanten werven. Duur door reclame, kennismakingsaanbiedingen, eerste contact." }],
          theorie: "Vuistregel uit marketing: nieuwe klant kost 5-7× meer dan bestaande klant tevreden houden. Daarom: investeer in service, klantloyaliteit, herhaalkortingen.",
          voorbeelden: [{ type: "kosten nieuw", tekst: "Sam moet 1 nieuwe klant via Instagram-advertentie kosten ~€10. Een bestaande klant met loyaliteitskaart: €2." }],
          basiskennis: [{ onderwerp: "Klant = investering", uitleg: "Eerste verkoop levert vaak weinig op (kosten reclame). Tweede + derde verkoop = winst." }],
          niveaus: { basis: "5× duurder voor nieuwe klant. A.", simpeler: "Nieuwe klant overtuigen kost reclame + moeite. Bestaande klant tevreden houden is veel goedkoper. ~5× verschil. = A.", nogSimpeler: "Nieuwe duurder = A." },
        },
      },
      {
        q: "Sam wil mensen op een festival bereiken. Welk promotie-kanaal werkt het beste?",
        options: ["Instagram + TikTok — daar zit de doelgroep (16-35)", "Krantenadvertentie", "Telefoongids", "Brieven sturen"],
        answer: 0,
        wrongHints: [null, "Festival-bezoekers lezen geen kranten gericht.", "Niet meer in gebruik.", "Vaak ongelezen, hoge kosten."],
        uitlegPad: {
          stappen: [{ titel: "Doelgroep bepaalt kanaal", tekst: "Kies het promotie-kanaal waar JOUW DOELGROEP zit. Festivalbezoekers 16-35 zijn op TikTok + Instagram, niet in de krant." }],
          woorden: [{ woord: "promotie-kanaal", uitleg: "Medium om je doelgroep te bereiken: socials, krant, radio, etc." }],
          theorie: "Voor elke leeftijd/levensstijl een ander kanaal. 16-35 = TikTok/Instagram. 35-55 = Facebook/LinkedIn. 55+ = krant/radio. Niche-doelgroepen via niche-platforms.",
          voorbeelden: [{ type: "Sam", tekst: "Sam post Instagram-reel van friet-bereiding + TikTok-video op festival. Bereikt duizenden bezoekers." }, { type: "ander", tekst: "Uitvaartonderneming kiest krant + radio (oudere doelgroep)." }],
          basiskennis: [{ onderwerp: "Niet alles werkt", uitleg: "Geld in verkeerd kanaal = weggegooid. Telefoongidsen worden niet meer gelezen door 16-35." }],
          niveaus: { basis: "Insta+TikTok voor jong. A.", simpeler: "Festival-doelgroep 16-35 zit op Instagram + TikTok. Daar moet je adverteren. = A.", nogSimpeler: "Insta = A." },
        },
      },
    ],
  },
  // ─── Stap 4: Omzet, kosten en winst ────────────────────────
  {
    title: "Omzet, kosten en winst — kan ik ermee verdienen?",
    explanation: "Drie kernbegrippen voor elke ondernemer:\n\n**Omzet** = aantal × prijs.\nVoorbeeld: 200 frieten × €5 = **€1.000 omzet** per festivaldag.\n\n**Kosten** = wat het de ondernemer kost om te produceren:\n\n**Constante kosten (vaste kosten)**\n• Blijven hetzelfde, ongeacht hoeveel je verkoopt\n• Voorbeelden: huur, verzekering, abonnementen, salaris vaste medewerkers\n\n**Variabele kosten**\n• Veranderen MET het aantal stuks\n• Voorbeelden: aardappelen, olie, sauzen, verpakking, gas\n\n**Totale kosten** = constante + variabele\n\n**Winst** = omzet − totale kosten\n• Omzet > kosten → **winst** ✓\n• Omzet < kosten → **verlies** ✗\n• Omzet = kosten → **break-even** (quitte)\n\n**Voorbeeld foodtruck-dag**:\n• Omzet: 200 friet × €5 = €1.000\n• Constante kosten (per dag): truck-afschrijving €100, verzekering €20, telefoon €5 = €125\n• Variabele kosten: ingrediënten €1,50 × 200 = €300\n• Totale kosten: €125 + €300 = **€425**\n• Winst: €1.000 - €425 = **€575** per dag 🎉\n\n**Break-even-punt** (BEP):\nHoeveel moet je verkopen om quitte te draaien?\n• Bij prijs €5, variabele kosten per stuk €1,50, vaste kosten €125 per dag\n• Per friet hou je over: €5 - €1,50 = **€3,50** (dekkingsbijdrage)\n• Vaste kosten dekken: €125 / €3,50 = **36 frieten** = break-even\n• Alles boven 36 frieten = **winst**\n\n**Brutowinstmarge** = (verkoopprijs − inkoopprijs) / verkoopprijs × 100%\nVoor friet: (€5 - €1,50) / €5 = 70%",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">FOODTRUCK 1 DAG</text>
<rect x="20" y="40" width="80" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="60" y="60" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">OMZET</text>
<text x="60" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">€1000</text>
<text x="60" y="94" text-anchor="middle" fill="${COLORS.muted}" font-size="8" font-family="Arial">200×€5</text>
<text x="108" y="76" fill="${COLORS.muted}" font-size="20" font-family="Arial">−</text>
<rect x="125" y="40" width="100" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.5"/>
<text x="175" y="58" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">KOSTEN</text>
<text x="175" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">€125 vast</text>
<text x="175" y="88" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">€300 variabel</text>
<text x="232" y="76" fill="${COLORS.muted}" font-size="20" font-family="Arial">=</text>
<rect x="250" y="40" width="60" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="280" y="60" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">WINST</text>
<text x="280" y="80" text-anchor="middle" fill="${COLORS.geld}" font-size="13" font-family="Arial" font-weight="bold">€575</text>
<text x="160" y="125" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">BREAK-EVEN-PUNT</text>
<line x1="40" y1="135" x2="40" y2="200" stroke="${COLORS.text}" stroke-width="1"/>
<line x1="40" y1="200" x2="290" y2="200" stroke="${COLORS.text}" stroke-width="1"/>
<line x1="40" y1="180" x2="290" y2="155" stroke="${COLORS.geld}" stroke-width="2"/>
<text x="295" y="155" fill="${COLORS.geld}" font-size="9" font-family="Arial">omzet</text>
<line x1="40" y1="190" x2="290" y2="170" stroke="${COLORS.aanbod}" stroke-width="2"/>
<text x="295" y="170" fill="${COLORS.aanbod}" font-size="9" font-family="Arial">kosten</text>
<circle cx="118" cy="184" r="4" fill="${COLORS.warm}"/>
<text x="118" y="218" text-anchor="middle" fill="${COLORS.warm}" font-size="9" font-family="Arial">36 stuks</text>
</svg>`,
    checks: [
      {
        q: "Een ondernemer heeft omzet **€2.000**, vaste kosten **€500**, variabele kosten **€800**. Wat is de winst?",
        options: ["€700", "€1.500", "€1.200", "€500"],
        answer: 0,
        wrongHints: [null, "Vergeet niet ALLE kosten af te trekken.", "Variabele kosten ook aftrekken.", "Niet alle vaste kosten zijn afgetrokken."],
        uitlegPad: {
          stappen: [{ titel: "Winst-formule", tekst: "Winst = Omzet − Totale Kosten. Totale Kosten = Vast + Variabel. €2.000 − (€500 + €800) = €700." }],
          woorden: [{ woord: "omzet", uitleg: "Aantal × prijs. Totaal binnenkomend geld." }, { woord: "totale kosten", uitleg: "Vaste + variabele kosten samen." }, { woord: "winst", uitleg: "Omzet minus totale kosten. Positief = winst, negatief = verlies." }],
          theorie: "Stappenplan: (1) totale kosten optellen: €500 + €800 = €1.300. (2) winst = omzet − totale kosten: €2.000 − €1.300 = €700.",
          voorbeelden: [{ type: "berekening", tekst: "Omzet 2000, kosten samen 1300 → winst 700." }, { type: "verlies-check", tekst: "Als kosten > omzet → verlies. Hier €1.300 < €2.000 → winst." }],
          basiskennis: [{ onderwerp: "Niet half aftrekken", uitleg: "Veelgemaakte fout: alleen vaste of alleen variabele aftrekken. Beide moeten!" }],
          niveaus: { basis: "2000 − (500+800) = 700. A.", simpeler: "Vaste + variabele kosten = €1.300. Omzet €2.000 − €1.300 = €700 winst. = A.", nogSimpeler: "2000−1300=700 = A." },
        },
      },
      {
        q: "Welke kost is **VARIABEL** voor een foodtruck?",
        options: ["Aardappelen en olie", "Huur kraampje", "Verzekering", "Telefoon-abo"],
        answer: 0,
        wrongHints: [null, "Huur is vast.", "Verzekering is vast.", "Telefoon is vast."],
        uitlegPad: {
          stappen: [{ titel: "Wat verandert MET aantal stuks?", tekst: "Variabel = verandert met productie. Meer friet bakken = meer aardappel/olie nodig. Huur/verzekering/abo blijft hetzelfde, ongeacht of je 10 of 1000 frieten verkoopt." }],
          woorden: [{ woord: "variabele kosten", uitleg: "Kosten die meebewegen met productie/verkoop: grondstof, verpakking, energie-per-stuk." }, { woord: "vaste kosten", uitleg: "Kosten die hetzelfde blijven: huur, verzekering, abonnementen." }],
          theorie: "Test: 'Als ik 100 frieten extra maak, gaat deze kost dan omhoog?' Ja → variabel. Nee → vast. Aardappelen + olie + saus + bakje: ja. Huur kraampje + verzekering + telefoon-abo: nee.",
          voorbeelden: [{ type: "variabel", tekst: "Sam bakt 200 friet → €300 aardappel/olie. 100 friet → €150. Schaalbaar met productie." }, { type: "vast", tekst: "Sam huurt kraampje €40/dag — of hij 1 of 1000 friet verkoopt." }],
          basiskennis: [{ onderwerp: "Hoeveelheid is sleutel", uitleg: "Variabele kosten zijn ALTIJD per stuk. Vaste kosten ALTIJD per periode (dag/maand)." }],
          niveaus: { basis: "Aardappel + olie = variabel. A.", simpeler: "Aardappelen heb je MEER NODIG als je meer friet maakt. Dat is variabele kost. = A.", nogSimpeler: "Per stuk = variabel = A." },
        },
      },
      {
        q: "Het **break-even-punt** is wanneer:",
        options: ["Omzet = totale kosten (geen winst, geen verlies)", "Winst maximaal", "Verkoop maximaal", "De ondernemer stopt"],
        answer: 0,
        wrongHints: [null, "Maximale winst zit hoger dan break-even.", "Aantal zegt niets — break-even gaat over geld.", "Stoppen is geen economisch begrip."],
        uitlegPad: {
          stappen: [{ titel: "Quitte draaien", tekst: "Break-even-punt (BEP) = de hoeveelheid waar omzet PRECIES gelijk is aan totale kosten. Boven BEP = winst. Onder BEP = verlies." }],
          woorden: [{ woord: "break-even-punt", uitleg: "Punt waar omzet = kosten. Engels 'break even' = quitte spelen." }, { woord: "dekkingsbijdrage", uitleg: "Verkoopprijs − variabele kosten per stuk. Wat overblijft om vaste kosten te dekken." }],
          theorie: "Formule: BEP = vaste kosten / dekkingsbijdrage per stuk. Vertelt je hoe groot je MINIMAAL moet verkopen om geen verlies te maken.",
          voorbeelden: [{ type: "Sam", tekst: "Vaste €125. Dekkingsbijdrage €5−€1,50 = €3,50. BEP = 125/3,50 ≈ 36 frieten. Boven 36 = winst." }],
          basiskennis: [{ onderwerp: "Niet maximum", uitleg: "BEP is MINIMUM (niet maximum). Winst groeit boven dit punt." }],
          niveaus: { basis: "Omzet = kosten. A.", simpeler: "Break-even = punt waar je net niet verliest en net niet wint. Omzet dekt precies alle kosten. = A.", nogSimpeler: "Quitte = A." },
        },
      },
      {
        q: "Sam verkoopt friet voor €5. Variabele kosten **€1,50** per friet. Vaste kosten **€140** per dag. **Hoeveel friet moet hij verkopen om break-even** te draaien?",
        options: ["40 friet", "28 friet", "94 friet", "100 friet"],
        answer: 0,
        wrongHints: [null, "Te weinig — €5-€1,50 = €3,50 dekking per friet, dus €140/€3,50.", "Te veel — controleer de berekening.", "Te veel — €140/€3,50 = 40."],
        uitlegPad: {
          stappen: [{ titel: "Bereken in 2 stappen", tekst: "(1) Dekkingsbijdrage per friet: €5 − €1,50 = €3,50. (2) BEP: vaste kosten / dekkingsbijdrage = €140 / €3,50 = 40 frieten." }],
          woorden: [{ woord: "dekkingsbijdrage", uitleg: "Wat elke verkochte eenheid bijdraagt aan dekken van vaste kosten." }],
          theorie: "Elke friet 'pakt' €3,50 van de vaste kosten af. Met €140 vaste kosten, en €3,50 per friet, heb je 40 frieten nodig om quitte te draaien.",
          voorbeelden: [{ type: "rekenstap", tekst: "Bij 39 frieten: 39 × €3,50 = €136,50 dekking. Te weinig (vaste kosten €140). Bij 40: 40 × €3,50 = €140 ✓." }, { type: "bovenBEP", tekst: "41e friet = €3,50 pure winst. 100 frieten = €60 × €3,50 = €210 winst boven BEP." }],
          basiskennis: [{ onderwerp: "Formule", uitleg: "BEP-formule: vaste kosten / dekkingsbijdrage per stuk = aantal." }],
          niveaus: { basis: "140/3,50 = 40. A.", simpeler: "Per friet hou je over: €5−€1,50 = €3,50. Vaste kosten €140 / €3,50 = 40 frieten = break-even. = A.", nogSimpeler: "40 = A." },
        },
      },
      {
        q: "**Brutowinstmarge** voor een friet van €5 met inkoop €1,50?",
        options: ["70%", "30%", "350%", "100%"],
        answer: 0,
        wrongHints: [null, "Dat is de inkoop-percentage van prijs.", "Dat is de prijs als percentage van inkoop.", "Verkoopprijs zelf is niet de marge."],
        uitlegPad: {
          stappen: [{ titel: "Marge-formule", tekst: "Brutowinstmarge = (verkoopprijs − inkoopprijs) / verkoopprijs × 100%. Hier: (5 − 1,50) / 5 = 3,50/5 = 0,70 = 70%." }],
          woorden: [{ woord: "brutowinstmarge", uitleg: "Percentage van de verkoopprijs dat overblijft na inkoop (vóór vaste kosten + belasting)." }],
          theorie: "Marge zegt: 'van elke verkoop-euro, hoeveel houd je over voor jezelf'. Hoge marge (70%) = veel ruimte voor vaste kosten + winst. Lage marge (15%) = je moet veel volume draaien.",
          voorbeelden: [{ type: "hoge marge", tekst: "Friet 70%: per €5 verkoop houd je €3,50 over." }, { type: "lage marge", tekst: "Supermarkt-A-merken: marge ~5-15%. Vandaar dat ze huismerken pushen (hogere marge)." }],
          basiskennis: [{ onderwerp: "Niet inkoop/verkoop swap", uitleg: "30% is inkoop / verkoop. 350% is verkoop als % van inkoop. Marge gaat over WINST als % van VERKOOP." }],
          niveaus: { basis: "3,50/5 × 100 = 70%. A.", simpeler: "Verkoopprijs €5. Inkoopprijs €1,50. Winst €3,50. Dat is €3,50 op €5 = 70% van de verkoopprijs. = A.", nogSimpeler: "70% = A." },
        },
      },
      {
        q: "Wat is **omzet**?",
        options: ["Aantal × prijs (totaal verkoopbedrag)", "Winst min belasting", "Wat de ondernemer overhoudt", "De vaste kosten"],
        answer: 0,
        wrongHints: [null, "Winst is iets anders.", "Dat is netto winst, niet omzet.", "Vaste kosten zijn input, geen omzet."],
        uitlegPad: {
          stappen: [{ titel: "Verkoop totaal", tekst: "Omzet = aantal verkochte stuks × prijs per stuk. Het TOTAAL aan geld dat binnenkomt door verkoop." }],
          woorden: [{ woord: "omzet", uitleg: "Totaal verkoopbedrag in een periode. Voor kosten worden afgetrokken." }, { woord: "winst", uitleg: "Omzet minus kosten. Wat je overhoudt." }],
          theorie: "Omzet is BRUTO inkomen van het bedrijf. Veel hoger dan winst — kosten gaan er nog vanaf. Winst = wat de ondernemer ECHT verdient.",
          voorbeelden: [{ type: "Sam", tekst: "200 friet × €5 = €1.000 omzet per dag. Kosten €425 → winst €575." }, { type: "verschil", tekst: "Apple omzet $400 miljard, winst ~$100 miljard. Verschil van $300 mrd kosten." }],
          basiskennis: [{ onderwerp: "Niet winst", uitleg: "Omzet ≠ winst. Omzet is alles wat binnenkomt; winst is wat over is nadat kosten zijn afgetrokken." }],
          niveaus: { basis: "Aantal × prijs. A.", simpeler: "Omzet = alle verkoop bij elkaar opgeteld. Niet wat over is — dat is winst. = A.", nogSimpeler: "Verkoop totaal = A." },
        },
      },
    ],
  },
  // ─── Stap 5: Vraag en aanbod ──────────────────────────────
  {
    title: "Vraag en aanbod — hoe komt de prijs tot stand?",
    explanation: "**Pincode 3.3: Vraag en aanbod.** De **prijs** van een product ontstaat door wat kopers willen betalen + wat verkopers willen aanbieden.\n\n**De vraag**: hoeveel willen kopers van iets bij verschillende prijzen?\n• **Wet van de vraag**: hoe **hoger** de prijs, hoe **minder** mensen willen kopen\n• Voorbeeld appels: €3/kg → 100 kg vraag, €1/kg → 400 kg vraag\n\n**Vraagcurve**: lijn die loopt van linksboven naar rechtsbeneden (hogere prijs = minder vraag).\n\n**Het aanbod**: hoeveel willen verkopers leveren bij verschillende prijzen?\n• **Wet van het aanbod**: hoe **hoger** de prijs, hoe **meer** verkopers willen leveren\n• Voorbeeld appels: €1/kg → boer levert weinig (lage winst), €3/kg → boer levert veel (winstgevend)\n\n**Aanbodcurve**: lijn die loopt van linksbeneden naar rechtsboven (hogere prijs = meer aanbod).\n\n**Evenwichtsprijs**: punt waar vraag = aanbod. Hier 'klikt' de markt.\n\n**Voorbeeld concert-tickets**:\n• Vraag: 50.000 mensen willen naar Taylor Swift\n• Aanbod: 35.000 zitplaatsen\n• → Officiele prijs €120, maar zwarte markt €500+ (hoge vraag, laag aanbod)\n\n**Wat als vraag of aanbod verandert?**\n\n**Vraag stijgt** (meer mensen willen het):\n• Bv. trend, reclame, hoger inkomen\n• Curve schuift naar rechts\n• Nieuwe evenwichtsprijs HOGER\n• Voorbeeld: hype rond AirPods Max → prijs blijft hoog\n\n**Vraag daalt**:\n• Bv. recessie, ander product populairder\n• Curve schuift naar links\n• Nieuwe prijs LAGER\n• Voorbeeld: handgels na corona-piek\n\n**Aanbod stijgt** (meer leveranciers):\n• Bv. nieuwe technologie, meer concurrenten\n• Curve schuift naar rechts\n• Prijs LAGER\n• Voorbeeld: zonnepanelen — China produceert massa, prijs gehalveerd\n\n**Aanbod daalt**:\n• Bv. oogst mislukt, fabriek dicht\n• Curve schuift naar links\n• Prijs HOGER\n• Voorbeeld: olieprijs steeg na sancties Rusland\n\n**Voor je dagelijks leven**:\n• Sneakers in sale: aanbod > vraag (te veel, weg ermee)\n• Festival-ticket vlak voor evenement: vraag > aanbod = prijs stijgt\n• Restaurant slechte recensie: vraag daalt, prijs zou moeten dalen of hij gaat dicht\n\n**Substituut en complement**:\n• **Substituten**: vervangbaar (Pepsi vs Coca-Cola). Prijs Coca stijgt → meer Pepsi-vraag.\n• **Complement**: hoort bij elkaar (printer + cartridge). Printer goedkoop → meer cartridges nodig.\n\n**Nuttige formule**:\n• Bij prijs P → bekijk Q_vraag en Q_aanbod\n• Als Q_vraag > Q_aanbod: prijs gaat omhoog (krapte)\n• Als Q_vraag < Q_aanbod: prijs gaat omlaag (overschot)",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">VRAAG &amp; AANBOD — APPELS</text>
<line x1="40" y1="40" x2="40" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<line x1="40" y1="160" x2="290" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<text x="20" y="50" fill="${COLORS.text}" font-size="11" font-family="Arial">prijs</text>
<text x="240" y="175" fill="${COLORS.text}" font-size="11" font-family="Arial">aantal kg</text>
<line x1="60" y1="50" x2="280" y2="155" stroke="${COLORS.aanbod}" stroke-width="2.5"/>
<line x1="60" y1="155" x2="280" y2="50" stroke="${COLORS.vraag}" stroke-width="2.5"/>
<text x="240" y="58" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">aanbod</text>
<text x="240" y="135" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">vraag</text>
<circle cx="170" cy="100" r="6" fill="${COLORS.geld}"/>
<text x="180" y="92" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">evenwicht €2/kg</text>
<text x="160" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">prijs ontstaat waar vraag = aanbod</text>
</svg>`,
    checks: [
      {
        q: "**Wet van de vraag**: bij hogere prijs willen kopers...",
        options: ["Minder kopen", "Meer kopen", "Hetzelfde kopen", "Sneller kopen"],
        answer: 0,
        wrongHints: [null, "Tegendeel — duurder = minder kopen.", "Wel verandering.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Duurder = minder", tekst: "Wet van de vraag: hoe HOGER de prijs, hoe MINDER kopers willen kopen. Logisch — meer geld nodig voor zelfde aantal." }],
          woorden: [{ woord: "vraag", uitleg: "Hoeveelheid die kopers willen kopen tegen een bepaalde prijs." }, { woord: "vraagcurve", uitleg: "Lijn die laat zien hoe vraag verandert bij verschillende prijzen. Loopt van linksboven naar rechtsbeneden." }],
          theorie: "Test-vraag: 'Als appels duurder worden, koop je dan MEER of MINDER?' Minder. Daarom: prijs ↑ → vraag ↓. Geldt voor bijna alles (uitzondering: luxegoederen waar hogere prijs juist status geeft).",
          voorbeelden: [{ type: "appels", tekst: "€1/kg → mensen kopen 5 kg. €4/kg → mensen kopen 2 kg." }, { type: "concertkaart", tekst: "€80 ticket → 50.000 willen. €200 ticket → 20.000 willen." }],
          basiskennis: [{ onderwerp: "Geen 'sneller'", uitleg: "Wet gaat over HOEVEEL je koopt, niet over snelheid." }],
          niveaus: { basis: "Duurder = minder vraag. A.", simpeler: "Wat doet jij als boodschappen duurder worden? Minder kopen. Iedereen doet hetzelfde. = A.", nogSimpeler: "Duurder = minder = A." },
        },
      },
      {
        q: "**Wet van het aanbod**: bij hogere prijs willen verkopers...",
        options: ["Meer leveren", "Minder leveren", "Hetzelfde", "Niets"],
        answer: 0,
        wrongHints: [null, "Tegendeel — hogere winst = meer leveren.", "Wel verandering.", "Wel reactie."],
        uitlegPad: {
          stappen: [{ titel: "Hogere prijs = grotere winst", tekst: "Wet van het aanbod: hoe HOGER de prijs, hoe MEER verkopers willen leveren. Hogere prijs → meer winst per stuk → loont om meer te produceren." }],
          woorden: [{ woord: "aanbod", uitleg: "Hoeveelheid die verkopers willen LEVEREN tegen een bepaalde prijs." }, { woord: "aanbodcurve", uitleg: "Loopt van linksbeneden naar rechtsboven. Hogere prijs = meer aanbod." }],
          theorie: "Test: 'Als de prijs van koffie verdubbelt, gaat de boer dan meer of minder koffie verbouwen?' Meer! Hoge prijs = lonend om uit te breiden.",
          voorbeelden: [{ type: "boer", tekst: "Bij appelprijs €1/kg ploeg je niet bij. Bij €4/kg ga je nieuwe boomgaard planten." }, { type: "industrie", tekst: "Hogere olieprijs in 2022 → meer schaliegas-winning in VS." }],
          basiskennis: [{ onderwerp: "Tegenovergesteld aan vraag", uitleg: "Vraag: hoog prijs = laag aantal. Aanbod: hoog prijs = hoog aantal. Tegenovergesteld!" }],
          niveaus: { basis: "Hogere prijs = meer leveren. A.", simpeler: "Hoge prijs = veel winst per stuk = verkoper wil méér leveren. = A.", nogSimpeler: "Meer winst = meer = A." },
        },
      },
      {
        q: "**Evenwichtsprijs** is:",
        options: ["Prijs waar vraag = aanbod", "Hoogste prijs", "Laagste prijs", "Gemiddelde prijs"],
        answer: 0,
        wrongHints: [null, "Niet automatisch.", "Niet automatisch.", "Niet definitie."],
        uitlegPad: {
          stappen: [{ titel: "Waar curves elkaar kruisen", tekst: "Op een grafiek: waar vraagcurve en aanbodcurve elkaar SNIJDEN — dat is de evenwichtsprijs. Vraag = aanbod, markt is in balans." }],
          woorden: [{ woord: "evenwichtsprijs", uitleg: "Prijs waarbij hoeveelheid vraag = hoeveelheid aanbod. Markt 'klikt'." }, { woord: "marktevenwicht", uitleg: "Toestand waar vraag en aanbod elkaar in balans houden." }],
          theorie: "Boven evenwichtsprijs → te veel aanbod → prijs daalt terug. Onder evenwichtsprijs → te veel vraag → prijs stijgt terug. Markt streeft naar evenwicht.",
          voorbeelden: [{ type: "appels", tekst: "Boer wil €4/kg leveren (veel), kopers willen alleen €1/kg betalen (veel). Compromis: €2,50/kg waar beide tevreden zijn." }],
          basiskennis: [{ onderwerp: "Geen hoogste/laagste", uitleg: "Evenwichtsprijs is niet automatisch hoog of laag — het is waar markt 'in balans' is." }],
          niveaus: { basis: "Vraag = aanbod. A.", simpeler: "Evenwichtsprijs = waar wat kopers willen kopen = wat verkopers willen leveren. Markt klikt. = A.", nogSimpeler: "Balanspunt = A." },
        },
      },
      {
        q: "Veel **vraag**, weinig aanbod → prijs gaat:",
        options: ["Omhoog", "Omlaag", "Blijft gelijk", "Naar 0"],
        answer: 0,
        wrongHints: [null, "Tegendeel.", "Wel beweging.", "Onmogelijk in normale markt."],
        uitlegPad: {
          stappen: [{ titel: "Krapte = duurder", tekst: "Veel kopers willen, weinig is beschikbaar. Verkopers kunnen meer vragen — kopers betalen om het te krijgen. Prijs stijgt." }],
          woorden: [{ woord: "krapte", uitleg: "Vraag > aanbod. Resultaat: prijsstijging." }, { woord: "overschot", uitleg: "Aanbod > vraag. Resultaat: prijs daalt." }],
          theorie: "Beweging naar evenwichtsprijs: bij krapte gaan prijzen omhoog, totdat vraag daalt (te duur) en aanbod stijgt (winstgevend). Bij overschot omgekeerd.",
          voorbeelden: [{ type: "concert", tekst: "Taylor Swift: 50.000 fans, 35.000 plekken. Officiele €120 → zwarte markt €500+." }, { type: "PS5", tekst: "PS5 launch 2020: enorme vraag, geen voorraad → tweedehands €800+." }],
          basiskennis: [{ onderwerp: "Beweging", uitleg: "Prijs blijft niet bij krapte. Beweging is altijd OMHOOG." }],
          niveaus: { basis: "Krapte = prijs omhoog. A.", simpeler: "Iedereen wil het, weinig te krijgen → mensen betalen meer om het toch te krijgen → prijs stijgt. = A.", nogSimpeler: "Krapte = duur = A." },
        },
      },
      {
        q: "**Substituten** zijn:",
        options: ["Producten die elkaar kunnen vervangen (Pepsi vs Coca-Cola)", "Producten die bij elkaar horen", "Gratis producten", "Belastingvrije producten"],
        answer: 0,
        wrongHints: [null, "Dat zijn complementen.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Vervangbaar", tekst: "Substituut = product dat de PLAATS kan innemen van een ander. Als Coca duurder wordt, schuiven mensen naar Pepsi (hetzelfde 'doel' bereikt)." }],
          woorden: [{ woord: "substituut", uitleg: "Vervangbaar product. Stijging prijs A → meer vraag naar B." }, { woord: "complement", uitleg: "Aanvullend product. Hoort bij elkaar (printer + cartridge)." }],
          theorie: "Belangrijk voor prijsbeleid: als concurrent veel substituten heeft (Coca-Pepsi-Spa Cola), kun je niet zomaar de prijs verhogen — klanten lopen weg.",
          voorbeelden: [{ type: "substituten", tekst: "Pepsi/Coca, AH-merk/A-merk, trein/auto, Spotify/Apple Music." }, { type: "complementen", tekst: "Printer + inkt, telefoon + lader, auto + benzine, tandpasta + tandenborstel." }],
          basiskennis: [{ onderwerp: "Niet gratis/belastingvrij", uitleg: "Substituut heeft niks met prijs te maken in absolute zin — het gaat om VERVANGBAARHEID." }],
          niveaus: { basis: "Vervangbaar = substituut. A.", simpeler: "Pepsi en Coca = beide cola, vervangen elkaar = substituten. = A.", nogSimpeler: "Vervang = A." },
        },
      },
      {
        q: "Bij €3 per kg vragen kopers 100 kg, bij €1 vragen ze 400 kg. Wat heet dit?",
        options: ["Wet van de vraag — hogere prijs, minder vraag", "Wet van het aanbod", "Inflatie", "Recessie"],
        answer: 0,
        wrongHints: [null, "Verkeerde wet.", "Inflatie is iets anders.", "Recessie is iets anders."],
        uitlegPad: {
          stappen: [{ titel: "Patroon herkennen", tekst: "€3 → 100 kg. €1 → 400 kg. Prijs OMHOOG → aantal OMLAAG. Dat is de Wet van de Vraag." }],
          woorden: [{ woord: "wet van de vraag", uitleg: "Hogere prijs = minder gevraagd aantal. Loopt OMGEKEERD." }],
          theorie: "Patroon: kijk naar de KANT — gaat het over vraag (kopers) of aanbod (verkopers). Kopers + duurder → minder = wet van de vraag.",
          voorbeelden: [{ type: "vraag", tekst: "€3-100kg, €1-400kg = vraag stijgt als prijs daalt." }, { type: "aanbod", tekst: "Bij aanbod werkt het andersom: €3-400kg, €1-100kg = verkopers leveren meer bij hogere prijs." }],
          basiskennis: [{ onderwerp: "Inflatie ≠ wet", uitleg: "Inflatie is prijsstijging in de tijd. Wet van vraag/aanbod is relatie tussen prijs en hoeveelheid op één moment." }],
          niveaus: { basis: "Hogere prijs, minder gevraagd. A.", simpeler: "€1 → 400 kopen, €3 → 100 kopen. Duurder → minder vraag = wet van de vraag. = A.", nogSimpeler: "Vraag = A." },
        },
      },
    ],
  },
  // ─── Stap 6: Macht op de markt — marktvormen ──────────────
  {
    title: "Macht op de markt — wie bepaalt de prijs?",
    explanation: "**Pincode 3.4: Macht op de markt.** Niet elke markt werkt hetzelfde. Hoeveel **concurrentie** er is bepaalt wie de prijs vaststelt.\n\n**4 marktvormen** (van veel naar weinig concurrentie):\n\n**1. Volkomen concurrentie**\n• **Veel** aanbieders + **veel** vragers\n• **Identiek** product (geen verschil tussen leveranciers)\n• Niemand bepaalt prijs — markt doet dat\n• Voorbeeld: tarwe, aardappel, basis-grondstoffen\n• Voor consument: laagst mogelijke prijs, weinig keuze in 'merk'\n\n**2. Monopolistische concurrentie**\n• **Veel** aanbieders\n• **Verschillende** producten (gedifferentieerd door merk, kwaliteit, design)\n• Beetje invloed op prijs door uniek karakter\n• Voorbeeld: kledingmerken (Nike vs Adidas vs Puma), restaurants, kappers\n• Voor consument: veel keuze, prijs varieert per merk\n\n**3. Oligopolie**\n• **Weinig grote** aanbieders (3-10)\n• Strategisch met elkaar — wat doet concurrent?\n• Risico: prijsafspraken (illegaal!)\n• Voorbeeld: telecom (KPN, Vodafone, T-Mobile, Odido), banken (ING, Rabo, ABN, SNS), supermarkten (AH, Jumbo, Lidl, Aldi)\n• Voor consument: beperkte keuze, prijzen vaak hoog\n\n**4. Monopolie**\n• **1** aanbieder\n• Volledige macht over prijs\n• Vaak via patenten, schaarse grondstoffen, of overheidsregulering\n• Voorbeeld: NS (treinen op de meeste lijnen), Schiphol (luchthaven Amsterdam), regionale waterleidingbedrijven\n• Voor consument: hoge prijzen, geen keuze\n\n**Vergelijking prijs en winst**:\n| Marktvorm | Prijs | Winst aanbieder |\n|---|---|---|\n| Volkomen concurr. | Laag | Klein |\n| Monopol. concurr. | Middel | Middel |\n| Oligopolie | Hoog | Hoog |\n| Monopolie | Hoogst | Hoogst |\n\n**Waarom mag een monopolie soms?**\n• Niet meer concurrenten haalbaar (treinrails dubbel aanleggen onpraktisch)\n• Onderzoek + ontwikkeling kost veel (medicijnen-patent voor 20 jaar)\n• Maar: met **prijsregulering** (overheid bepaalt max-prijs)\n\n**Wat doet de ACM (Autoriteit Consument & Markt)?**\n• Voorkomt **kartels** (prijsafspraken tussen oligopolie-spelers)\n• Goedkeuring van fusies (anders monopolie)\n• Voorbeeld: Heineken-Vrumona-fusie geblokkeerd in 2020\n• ACM legt boetes op (Apple App Store, Google)\n\n**Marktmacht en consument**:\n• Hoe meer concurrentie, hoe **beter voor de consument** (lagere prijs, meer keuze)\n• Maar: bedrijven hebben minder winst → minder R&D, minder banen?\n• Spanning tussen efficiëntie en innovatie\n\n**Voorbeelden uit het echte leven**:\n• **Volkomen concurrentie**: weekmarkt-aardappelen — alle boeren leveren ongeveer dezelfde prijs\n• **Monopolistische concurrentie**: 50 cafés in stad, elk eigen sfeer/locatie/menu\n• **Oligopolie**: Nederlandse benzine (Shell, BP, Esso, Total — vergelijkbare prijzen!)\n• **Monopolie**: gemeentelijke watermaatschappij — geen alternatief\n\n**Voor jou**:\n• Bij **volkomen concurrentie** loont vergelijken minst (alle prijzen ongeveer gelijk)\n• Bij **monopolistische concurrentie** loont MERKEN-onderzoek (kwaliteit verschilt)\n• Bij **oligopolie** loont vergelijken (kleine verschillen kunnen €100/jaar schelen — telecom!)\n• Bij **monopolie**: weinig keuze, accepteren of niet kopen",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">4 MARKTVORMEN</text>
<rect x="20" y="40" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="87" y="58" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">VOLKOMEN</text>
<text x="87" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">veel + veel · ident.</text>
<text x="87" y="86" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">tarwe, aardappel</text>
<rect x="165" y="40" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="232" y="58" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">MONO. CONC.</text>
<text x="232" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">veel · gediff.</text>
<text x="232" y="86" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Nike, Adidas, café</text>
<rect x="20" y="105" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="87" y="123" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">OLIGOPOLIE</text>
<text x="87" y="139" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">3-10 grote</text>
<text x="87" y="151" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">telecom, banken</text>
<rect x="165" y="105" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.5"/>
<text x="232" y="123" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">MONOPOLIE</text>
<text x="232" y="139" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">1 aanbieder</text>
<text x="232" y="151" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">NS, Schiphol</text>
<text x="160" y="180" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">meer concurrentie → lagere prijs</text>
<text x="160" y="200" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">ACM bewaakt eerlijke markt</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel **aanbieders** bij volkomen concurrentie?",
        options: ["Veel", "Weinig (3-10)", "1", "Geen"],
        answer: 0,
        wrongHints: [null, "Dat is oligopolie.", "Dat is monopolie.", "Dan geen markt."],
      },
      {
        q: "**Telecom** (KPN/Vodafone/T-Mobile/Odido) is welke marktvorm?",
        options: ["Oligopolie (weinig grote)", "Volkomen concurrentie", "Monopolie", "Monopolistische concurrentie"],
        answer: 0,
        wrongHints: [null, "Te weinig spelers voor 'volkomen'.", "Niet 1, maar 4.", "Niet 'veel' aanbieders."],
      },
      {
        q: "**Monopolie** kenmerk:",
        options: ["1 aanbieder bepaalt prijs", "Veel aanbieders", "Alleen consumenten", "Lage prijs"],
        answer: 0,
        wrongHints: [null, "Tegendeel.", "Onzin.", "Tegendeel — meestal hoog."],
      },
      {
        q: "Wat doet de **ACM**?",
        options: ["Voorkomt kartels + bewaakt eerlijke concurrentie", "Maakt wetten", "Int belasting", "Subsidies"],
        answer: 0,
        wrongHints: [null, "Wetten = parlement.", "Belastingdienst.", "Niet ACM."],
      },
      {
        q: "**Veel** kledingmerken (Nike, Adidas, Puma, ...): welke marktvorm?",
        options: ["Monopolistische concurrentie (veel + gedifferentieerd)", "Volkomen concurrentie", "Oligopolie", "Monopolie"],
        answer: 0,
        wrongHints: [null, "Producten verschillen wel.", "Te veel spelers.", "Veel meer dan 1."],
      },
      {
        q: "Bij welke marktvorm is **vergelijken** het meest waardevol?",
        options: ["Oligopolie — kleine verschillen kunnen €100/jr schelen", "Volkomen concurrentie", "Monopolie", "Iedere is gelijk"],
        answer: 0,
        wrongHints: [null, "Bij volkomen alles gelijke prijs.", "Geen alternatief.", "Wel verschil."],
      },
    ],
  },
  // ─── Stap 7: Rechtsvormen ─────────────────────────────────
  {
    title: "Rechtsvormen — eenmanszaak, VOF of BV?",
    explanation: "**Rechtsvorm** = de juridische opzet van een bedrijf. Belangrijk voor:\n• Wie is **aansprakelijk** voor schulden?\n• Hoeveel **belasting** betaal je?\n• Heb je **kapitaal** nodig om te starten?\n\n**Eenmanszaak** (1 ondernemer)\n• ✓ Makkelijk te starten via KvK (~€80)\n• ✓ Geen minimumkapitaal\n• ✓ Belastingvoordelen voor starters (zelfstandigenaftrek)\n• ✗ **Privé aansprakelijk**: bedrijf failliet = je huis/spaargeld in gevaar\n• Belasting: **inkomstenbelasting (IB)** over winst\n\n**VOF — Vennootschap onder Firma** (2+ ondernemers samen)\n• Net als eenmanszaak, maar met meerdere eigenaars (vennoten)\n• ✗ Iedereen privé aansprakelijk — ook voor schulden van de andere vennoot!\n• Belasting: elk apart IB over zijn winstdeel\n\n**BV — Besloten Vennootschap**\n• Apart juridisch lichaam (rechtspersoon, met aandelen)\n• ✓ **Niet privé aansprakelijk** (alleen tot ingelegd kapitaal)\n• ✗ Notaris nodig om op te richten (~€500-€1.500)\n• ✗ Apart financiele administratie + jaarverslag\n• Belasting: **vennootschapsbelasting (VPB)** over winst, en als jij loon krijgt uit de BV ook IB\n\n**Wanneer welke rechtsvorm**?\n• **Eenmanszaak**: kleinschalig starten, weinig risico (bv. bijles geven)\n• **VOF**: samen met 1-2 vrienden, vertrouwen onderling (bv. samen kapsalon)\n• **BV**: als omzet/winst groot wordt, of veel risico (bv. €100k+ omzet, juridisch riskante markt)\n\n**Vuistregel**: tot ~€100.000 winst is eenmanszaak fiscaal voordeliger. Erboven wordt BV interessanter.",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">3 RECHTSVORMEN</text>
<rect x="15" y="40" width="95" height="135" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="62" y="58" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">EENMANSZAAK</text>
<text x="62" y="76" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">1 eigenaar</text>
<text x="62" y="93" text-anchor="middle" fill="${COLORS.aanbod}" font-size="9" font-family="Arial" font-weight="bold">⚠ privé aansprak.</text>
<text x="62" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">betaalt IB</text>
<text x="62" y="123" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">starters-aftrek</text>
<text x="62" y="138" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">€80 KvK</text>
<text x="62" y="160" text-anchor="middle" fill="${COLORS.geld}" font-size="9" font-family="Arial" font-weight="bold">klein/start</text>
<rect x="115" y="40" width="95" height="135" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="162" y="58" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">VOF</text>
<text x="162" y="76" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">2+ vennoten</text>
<text x="162" y="93" text-anchor="middle" fill="${COLORS.aanbod}" font-size="9" font-family="Arial" font-weight="bold">⚠⚠ allen aansprak.</text>
<text x="162" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">IB per persoon</text>
<text x="162" y="123" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">vennootschap</text>
<text x="162" y="138" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">contract slim!</text>
<text x="162" y="160" text-anchor="middle" fill="${COLORS.geld}" font-size="9" font-family="Arial" font-weight="bold">samen klein</text>
<rect x="215" y="40" width="95" height="135" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="262" y="58" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">BV</text>
<text x="262" y="76" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">rechtspersoon</text>
<text x="262" y="93" text-anchor="middle" fill="${COLORS.geld}" font-size="9" font-family="Arial" font-weight="bold">✓ NIET privé</text>
<text x="262" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">betaalt VPB</text>
<text x="262" y="123" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">notaris nodig</text>
<text x="262" y="138" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">jaarverslag</text>
<text x="262" y="160" text-anchor="middle" fill="${COLORS.geld}" font-size="9" font-family="Arial" font-weight="bold">groot/risico</text>
<text x="160" y="200" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">~€100k winst: eenmanszaak fiscaal voordeliger</text>
</svg>`,
    checks: [
      {
        q: "Bij welke rechtsvorm is de eigenaar **NIET privé aansprakelijk**?",
        options: ["BV", "Eenmanszaak", "VOF", "Allemaal"],
        answer: 0,
        wrongHints: [null, "Eenmanszaak: privé wel aansprakelijk.", "VOF: nog erger — ook voor de andere vennoot.", "Niet allemaal — alleen BV."],
      },
      {
        q: "Twee vrienden starten een **VOF** voor hun foodtruck. Wat is het belangrijkste risico?",
        options: ["Beide vennoten zijn privé aansprakelijk — ook voor schulden van de ander", "Ze mogen geen winst maken", "Ze betalen dubbele belasting", "Ze hebben een notaris nodig"],
        answer: 0,
        wrongHints: [null, "Winst maken is juist het doel.", "Bij VOF betaalt elk apart IB.", "Notaris is voor BV, niet VOF."],
      },
      {
        q: "Welke belasting betaalt een **BV**?",
        options: ["Vennootschapsbelasting (VPB)", "Inkomstenbelasting", "Alleen BTW", "Geen"],
        answer: 0,
        wrongHints: [null, "Eigenaars BV betalen IB over loon, BV zelf VPB.", "BTW betalen alle ondernemingen.", "BV's betalen wél belasting."],
      },
      {
        q: "Sam wil zelfstandig starten met **lage start-kosten**. Welke rechtsvorm is meest geschikt?",
        options: ["Eenmanszaak (~€80 KvK, geen notaris)", "BV (notaris vereist)", "VOF (2 vennoten nodig)", "Stichting"],
        answer: 0,
        wrongHints: [null, "BV heeft notariskosten van €500-€1.500.", "VOF heeft 2 personen nodig — hij wil alleen.", "Stichting is voor non-profit, niet ondernemen."],
      },
      {
        q: "Bij welk winst-niveau wordt een **BV vaak interessanter** dan eenmanszaak?",
        options: ["Boven ongeveer €100.000 winst per jaar", "Vanaf €1 winst", "Pas bij €1 miljoen", "Nooit"],
        answer: 0,
        wrongHints: [null, "Onder €100k is eenmanszaak (met aftrek) voordeliger.", "Te hoog — al ruim voor €1 miljoen omslagpunt.", "BV kan zeker voordeliger worden."],
      },
      {
        q: "Wat is een **rechtspersoon**?",
        options: ["Een bedrijf dat juridisch een aparte 'persoon' is — zoals een BV", "Een advocaat", "Een ondernemer met een diploma", "Een werknemer"],
        answer: 0,
        wrongHints: [null, "Advocaat is een beroep, niet rechtsvorm.", "Niet diplomastatus.", "Werknemer = geen rechtspersoon."],
      },
    ],
  },
  // ─── Stap 8: BTW en facturen ───────────────────────────────
  {
    title: "BTW, facturen en boekhouden — basics",
    explanation: "Als ondernemer moet je BTW (omzetbelasting) **innen voor de overheid** en **administratie** bijhouden.\n\n**BTW (Belasting Toegevoegde Waarde)**:\n• Je rekent BTW bovenop je prijs aan klanten\n• Je houdt deze BTW apart\n• Je drukt af en toe (per kwartaal) op je belastingdienst\n\n**3 BTW-tarieven in NL**:\n• **21%** — algemeen tarief (kleding, elektronica, restaurant, koeriersdienst)\n• **9%** — laag tarief (boodschappen, water, boeken, kapper, OV)\n• **0%** — export en sommige zorg\n\n**Voorbeeld friet €5 inclusief 9% BTW**:\n• Excl BTW: €5 / 1,09 = **€4,59** voor jou\n• BTW: **€0,41** voor de Belastingdienst\n\n**Factuur** = officieel document voor zakelijke verkoop. Verplichte items:\n• **Jouw** naam, adres, KvK-nummer, BTW-nummer\n• **Klant** naam en adres\n• **Datum** + uniek factuurnummer\n• **Omschrijving** dienst/product\n• **Prijs** (excl BTW), BTW-bedrag, totaal\n\n**Boekhouding** = administratie van inkomsten en uitgaven:\n• **Bonnetjes bewaren** — verplicht 7 jaar!\n• **Bankafschriften** koppelen aan facturen\n• **BTW-aangifte** (elk kwartaal voor de meesten)\n• **Aangifte inkomstenbelasting** (eind van het jaar)\n\n**Boekhoudprogramma's** maken het makkelijker:\n• MoneyMonk, e-Boekhouden, Exact Online\n• Vanaf €10/maand\n\n**Vuistregel zelfstandige**:\nHoud **ongeveer 30%** van je omzet apart voor belasting + BTW. Anders sta je later voor een verrassing!",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">BTW-TARIEVEN</text>
<rect x="35" y="40" width="80" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="75" y="62" text-anchor="middle" fill="${COLORS.vraag}" font-size="18" font-family="Arial" font-weight="bold">21%</text>
<text x="75" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">algemeen</text>
<text x="75" y="94" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">restaurant, kleding</text>
<rect x="120" y="40" width="80" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="160" y="62" text-anchor="middle" fill="${COLORS.geld}" font-size="18" font-family="Arial" font-weight="bold">9%</text>
<text x="160" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">laag</text>
<text x="160" y="94" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">eten, kapper, ov</text>
<rect x="205" y="40" width="80" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="245" y="62" text-anchor="middle" fill="${COLORS.warm}" font-size="18" font-family="Arial" font-weight="bold">0%</text>
<text x="245" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">special</text>
<text x="245" y="94" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">export, zorg</text>
<rect x="20" y="120" width="280" height="40" rx="6" fill="rgba(255,213,79,0.10)" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="160" y="138" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">FACTUUR — verplichte items</text>
<text x="160" y="153" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">jouw + klant gegevens · datum · nr · prijs · BTW · totaal</text>
<rect x="20" y="170" width="280" height="40" rx="6" fill="rgba(255,82,82,0.10)" stroke="${COLORS.rood}" stroke-width="1.2" stroke-dasharray="3 2"/>
<text x="160" y="188" text-anchor="middle" fill="${COLORS.rood}" font-size="11" font-family="Arial" font-weight="bold">⚠ HOUD ~30% OMZET APART</text>
<text x="160" y="202" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">voor belasting + BTW — anders verrassing!</text>
</svg>`,
    checks: [
      {
        q: "Welk **BTW-tarief** geldt voor boodschappen (eten/drinken)?",
        options: ["9% (laag)", "21% (algemeen)", "0%", "25%"],
        answer: 0,
        wrongHints: [null, "21% is voor andere dingen.", "0% is alleen voor specifieke gevallen.", "25% bestaat niet als NL-tarief."],
      },
      {
        q: "Een product kost **€100 zonder BTW**. Wat is de prijs **inclusief 21% BTW**?",
        options: ["€121", "€100", "€79", "€21"],
        answer: 0,
        wrongHints: [null, "Inclusief BTW is meer dan zonder.", "Dat zou aftrek zijn.", "Dat is alleen het BTW-bedrag."],
      },
      {
        q: "Hoeveel BTW zit in een product van **€121 inclusief 21% BTW**?",
        options: ["€21", "€25,41", "€121", "€100"],
        answer: 0,
        wrongHints: [null, "Niet 21% van €121 — dat is fout. Reken: €121/1,21 = €100, dus €21 BTW.", "Dat is de hele prijs.", "Dat is exclusief BTW."],
      },
      {
        q: "Wat is verplicht op een **factuur**?",
        options: ["KvK-nummer, BTW-nummer, datum, factuurnummer, prijs + BTW", "Alleen het bedrag", "Alleen jouw naam", "Niets — vrije keuze"],
        answer: 0,
        wrongHints: [null, "Te weinig — wettelijk verplichte items.", "Te weinig.", "Wel verplichte items."],
      },
      {
        q: "Hoe lang moet je **bonnen en administratie bewaren**?",
        options: ["7 jaar (wettelijke bewaarplicht)", "1 jaar", "Tot het volgende boekjaar", "Niet"],
        answer: 0,
        wrongHints: [null, "Veel te kort.", "Wettelijke termijn is langer.", "Wel verplicht."],
      },
      {
        q: "Sam ontvangt **€1.000 omzet inclusief 9% BTW** op een dag. Hoeveel houdt hij apart voor BTW?",
        options: ["Ongeveer €83", "€90", "€100", "€9"],
        answer: 0,
        wrongHints: [null, "Niet 9% van €1000 — dat is incl. BTW. Reken: €1000 - €1000/1,09.", "Te veel.", "Te weinig."],
      },
    ],
  },
  // ─── Stap 9: Risico, verlies en faillissement ────────────
  {
    title: "Risico, verlies en faillissement — wat als het misgaat?",
    explanation: "Niet alle bedrijven slagen. **Statistiek**: ongeveer **40% van de starters** stopt binnen 5 jaar. Dat hoort bij ondernemerschap.\n\n**Soorten risico**:\n\n**1. Marktrisico**\n• Geen vraag naar je product (verkeerd ingeschat)\n• Trends veranderen (TikTok-rage voorbij)\n• Crisis (corona, recessie)\n\n**2. Concurrentierisico**\n• Grote speler komt op jouw markt (Albert Heijn opent in jouw straat)\n• Goedkopere alternatieven\n\n**3. Kostenrisico**\n• Grondstoffen worden duurder (gas, olie)\n• Personeelskosten stijgen\n• Onverwachte uitgaven (machine kapot)\n\n**4. Financieel risico**\n• Klanten betalen niet of te laat (debiteurenrisico)\n• Lening kun je niet aflossen\n• Belastingschuld groeit\n\n**5. Persoonlijk risico**\n• Ziekte of burn-out → geen omzet\n• Bij eenmanszaak/VOF: privé-vermogen in gevaar\n\n**Wat is een faillissement?**\nJe kunt je schulden niet meer betalen. Een rechter benoemt een **curator** die:\n• Bedrijfs-bezittingen verkoopt\n• Geld eerlijk verdeelt onder schuldeisers\n• Het bedrijf opheft\n\n**Bij eenmanszaak/VOF**: ook privé-bezittingen kunnen worden verkocht (huis, auto). Bij **BV**: alleen het bedrijfs-vermogen.\n\n**Hoe risico beperken?**\n• **Buffer** (3-6 mnd kosten op spaarrekening)\n• **Verzekeringen** (arbeidsongeschiktheid, aansprakelijkheid)\n• **Diversificatie** (niet 1 grote klant maar 10 kleine)\n• **Realistische cashflow-planning**\n• **Niet te snel groeien** (niet meteen 10 medewerkers aannemen)\n\n**WSNP** (Wet Schuldsanering Natuurlijke Personen): laatste redmiddel voor particulieren in nood. Strenge regels, maar na 3 jaar 'schoon'.",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">RISICO BIJ ONDERNEMEN</text>
<text x="160" y="42" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial">~40% stopt binnen 5 jaar</text>
<rect x="20" y="55" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.2"/>
<text x="87" y="75" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial">marktrisico</text>
<rect x="165" y="55" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.2"/>
<text x="232" y="75" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial">concurrentie</text>
<rect x="20" y="92" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.oranje}" stroke-width="1.2"/>
<text x="87" y="112" text-anchor="middle" fill="${COLORS.oranje}" font-size="11" font-family="Arial">kosten ↑</text>
<rect x="165" y="92" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.oranje}" stroke-width="1.2"/>
<text x="232" y="112" text-anchor="middle" fill="${COLORS.oranje}" font-size="11" font-family="Arial">debiteuren</text>
<rect x="20" y="129" width="280" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.rood}" stroke-width="1.2"/>
<text x="160" y="149" text-anchor="middle" fill="${COLORS.rood}" font-size="11" font-family="Arial" font-weight="bold">persoonlijk: ziekte / burn-out</text>
<rect x="20" y="170" width="280" height="40" rx="4" fill="rgba(105,240,174,0.10)" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="160" y="188" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">RISICO BEPERKEN</text>
<text x="160" y="202" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">buffer · verzekering · spreiding · realistisch</text>
</svg>`,
    checks: [
      {
        q: "Wat is **debiteurenrisico**?",
        options: ["Klanten betalen niet of te laat", "Belastingdienst stuurt brief", "Concurrenten worden goedkoper", "Personeel wordt ziek"],
        answer: 0,
        wrongHints: [null, "Belasting is een ander risico-type.", "Concurrentie-risico.", "Persoonlijk risico."],
      },
      {
        q: "Bij een **faillissement van een eenmanszaak**, wat is het belangrijkste verschil met een BV?",
        options: ["Ook privé-bezittingen (huis, auto) kunnen verkocht worden", "Geen verschil", "Bij eenmanszaak gebeurt niets", "BV is altijd erger"],
        answer: 0,
        wrongHints: [null, "Wel groot verschil — aansprakelijkheid.", "Curator komt ook bij eenmanszaak.", "BV beschermt juist meer."],
      },
      {
        q: "Wie wordt aangesteld bij een faillissement?",
        options: ["Een curator (door de rechter)", "Een nieuwe ondernemer", "De accountant", "De Belastingdienst"],
        answer: 0,
        wrongHints: [null, "Bedrijf wordt vaak gestopt, geen overname.", "Accountant is administratief.", "Belastingdienst is wel schuldeiser, niet curator."],
      },
      {
        q: "Welke maatregel beperkt **risico** voor een ondernemer?",
        options: ["Een buffer van 3-6 maanden kosten op spaarrekening", "Snel veel personeel aannemen", "Alleen 1 hele grote klant", "Geen verzekering nemen"],
        answer: 0,
        wrongHints: [null, "Snel groeien = juist meer risico.", "1 grote klant = afhankelijk = risico.", "Geen verzekering = blootgesteld."],
      },
      {
        q: "Wat betekent **diversificatie van klanten**?",
        options: ["Veel verschillende klanten, niet afhankelijk van 1 grote", "Alleen 1 type klant", "Klanten verschillende prijzen geven", "Veel in advertenties investeren"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — afhankelijk van 1 = risico.", "Prijsverschil heeft niets met diversificatie te maken.", "Reclame is iets anders."],
      },
      {
        q: "Wat is een belangrijk **persoonlijk risico** voor een eenmanszaak-eigenaar?",
        options: ["Ziekte of burn-out → geen omzet meer", "BTW-aangifte vergeten", "Te weinig advertentie", "Geen logo hebben"],
        answer: 0,
        wrongHints: [null, "Vergeten BTW is operationeel, niet persoonlijk.", "Marketing-issue, niet persoonlijk risico.", "Logo's zijn cosmetisch, geen risico."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const pincodeOndernemen = {
  id: "pincode-ondernemen",
  title: "Ondernemen",
  emoji: "🚀",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - Pincode VMBO-GT klas 4 hoofdstuk 3",
  prerequisites: [
    { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F" },
    { id: "procenten-po", title: "Procenten", niveau: "po-1F" },
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
  ],
  intro:
    "Hoofdstuk 3 van Pincode 7e ed. VMBO-GT 4 (en andere methodes): ondernemen, marktonderzoek, marketing, kosten/omzet/winst, vraag en aanbod, marktvormen, rechtsvormen, BTW + facturen, risico. 9 stappen, voorbeelden uit jongerenleven. Volledige Pincode 3.1-3.4 dekking.",
  triggerKeywords: [
    "ondernemen",
    "ondernemer",
    "kvk",
    "kamer van koophandel",
    "marktonderzoek",
    "deskresearch",
    "veldonderzoek",
    "enquete",
    "swot",
    "doelgroep",
    "marketing",
    "marketing-mix",
    "4 p's",
    "product",
    "prijs",
    "plaats",
    "promotie",
    "usp",
    "ondernemingsplan",
    "productie",
    "handel",
    "diensten",
    "omzet",
    "kosten",
    "winst",
    "verlies",
    "vaste kosten",
    "constante kosten",
    "variabele kosten",
    "totale kosten",
    "break-even",
    "brutowinstmarge",
    "vraag", "aanbod", "vraag en aanbod", "vraagcurve", "aanbodcurve",
    "evenwichtsprijs", "marktevenwicht", "wet van de vraag", "wet van het aanbod",
    "substituut", "complement", "verschuiving",
    "marktvorm", "marktvormen", "concurrentie",
    "volkomen concurrentie", "monopolistische concurrentie",
    "oligopolie", "monopolie", "kartel", "marktmacht",
    "acm", "autoriteit consument en markt",
    "rechtsvorm",
    "eenmanszaak",
    "vof",
    "vennootschap onder firma",
    "bv",
    "besloten vennootschap",
    "rechtspersoon",
    "aansprakelijk",
    "vpb",
    "vennootschapsbelasting",
    "btw",
    "factuur",
    "boekhouden",
    "boekhouding",
    "bewaarplicht",
    "faillissement",
    "curator",
    "wsnp",
    "debiteurenrisico",
    "buffer",
    "diversificatie",
    "pincode hoofdstuk 3",
    "pincode hoofdstuk c",
  ],
  chapters,
  steps,
};

export default pincodeOndernemen;
