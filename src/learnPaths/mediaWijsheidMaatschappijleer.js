// Leerpad: Mediawijsheid — klas 2-3 maatschappijleer.
// Onderdeel maatschappijleer + digitale geletterdheid. Ref 2F.
// 6 stappen met uitlegPad.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  echt: "#66bb6a",
  nep: "#ef5350",
  alg: "#42a5f5",
  privacy: "#ffd54f",
  pest: "#ff7043",
  highlight: "#9575cd",
};

const stepEmojis = ["📱", "❌", "🤖", "🔒", "🛡️", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is mediawijsheid?", emoji: "📱", from: 0, to: 0 },
  { letter: "B", title: "Nepnieuws + factcheck", emoji: "❌", from: 1, to: 1 },
  { letter: "C", title: "Algoritmes + bubbels", emoji: "🤖", from: 2, to: 2 },
  { letter: "D", title: "Privacy + AVG + cookies", emoji: "🔒", from: 3, to: 3 },
  { letter: "E", title: "Cyberpesten + veiligheid", emoji: "🛡️", from: 4, to: 4 },
  { letter: "F", title: "Eind-toets", emoji: "🏆", from: 5, to: 5 },
];

const steps = [
  {
    title: "Wat is mediawijsheid?",
    explanation:
      "**Mediawijsheid** = kritisch + bewust omgaan met **alle media**: nieuws, sociale media, video's, advertenties.\n\n**Waarom belangrijk?**\n• We zitten **uren per dag** op telefoons/computers.\n• Veel **nepnieuws** in omloop.\n• **Reclame** is overal.\n• Onze data wordt **verzameld + verkocht**.\n• Online kun je **bedrogen** worden.\n\n**5 vaardigheden** van mediawijsheid:\n\n**1. Begrijpen**:\nWeet hoe media werken — wie maakt ze + waarom?\n\n**2. Gebruiken**:\nWeet hoe je apps + websites bedient — veilig.\n\n**3. Kritisch zijn**:\nNiet alles geloven — checken.\n\n**4. Communiceren**:\nWees beleefd online — wat je zegt blijft.\n\n**5. Creëren**:\nMaak eigen inhoud — video, post, blog.\n\n**Wat is media?**\nAlle vormen van informatie-overdracht:\n• **Klassiek**: krant, radio, TV.\n• **Online**: websites, sociale media *(Instagram, TikTok, YouTube, Snap)*.\n• **Apps**: WhatsApp, Discord, Pinterest.\n• **Gaming**: Twitch, Fortnite-chat.\n\n**Verschil tussen ECHT en NEP**:\n• **Echt nieuws**: geverifieerd door journalisten, bronnen vermeld.\n• **Mening**: persoonlijk standpunt, niet feit.\n• **Reclame**: wil iets verkopen, niet neutraal.\n• **Fake news**: vals — bedoeld om te misleiden.\n• **Satire**: grappige nep — niet serieus bedoeld.\n\n**Toets-feitje**:\nKinderen + tieners zitten gemiddeld **4-7 uur per dag** op een scherm. Onderwijs in mediawijsheid is daarom super belangrijk.",
    checks: [
      {
        q: "Wat is **mediawijsheid**?",
        options: ["Kritisch omgaan met alle media", "Zo min mogelijk media gebruiken", "Snel en handig met apps werken", "Vooral nieuws van bekende kranten lezen"],
        answer: 0,
        wrongHints: [null, "Minder kijken kan verstandig zijn, maar ben je dan ook wijs met wat je wél ziet?", "Handig zijn met apps is een digitale vaardigheid. Snap je daardoor ook wat je ziet?", "Ook bekende kranten maken fouten. Is één soort bron genoeg?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is mediawijsheid?", tekst: "**Mediawijsheid** = bewust + kritisch omgaan met **alle media** (TV, internet, social media, krant, radio). Je weet hoe ze werken, wat ze doen, en hoe je ze veilig gebruikt." },
            { titel: "Niet tegen, maar slim", tekst: "Mediawijsheid is NIET 'tegen media zijn' of 'telefoon weggooien'. Het is **slim gebruiken**: nepnieuws herkennen, bronnen checken, eigen tijd bewaken, online veiligheid." },
            { titel: "5 vaardigheden", tekst: "1) Begrijpen (hoe werken media, wie maakt ze en waarom?). 2) Gebruiken (apps en websites veilig bedienen). 3) Kritisch zijn (bron-check). 4) Communiceren (beleefd online). 5) Creëren (zelf inhoud maken)." },
          ],
          woorden: [
            { woord: "mediawijsheid", uitleg: "Slim + kritisch omgaan met alle media." },
            { woord: "media", uitleg: "Communicatie-middelen: TV, internet, krant, social media, etc." },
          ],
          theorie: "Toets-tip mediawijsheid: hoort bij groep 7-8. Je leert: nepnieuws herkennen, online veiligheid, schermtijd bewaken, eigen content maken. Belangrijke groep 8-vaardigheid voor middelbare school.",
          voorbeelden: [
            { type: "stap", tekst: "TikTok-video: wie post dit? Klopt het? Is er bewijs? = mediawijs." },
            { type: "stap", tekst: "Spam-mail: niet zomaar klikken op link, eerst checken. = mediawijs." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Mediawijs = bewust + kritisch. Niet 'tegen' media, juist slim ermee." }],
          niveaus: {
            basis: "Mediawijsheid = kritisch + bewust met media omgaan.",
            simpeler: "Slim gebruiken: nepnieuws herkennen, bronnen checken.",
            nogSimpeler: "Slim met media.",
          },
        },
      },
      {
        q: "Wat is **satire**?",
        options: ["Grappige nep — niet serieus bedoeld", "Nepnieuws — bedoeld om te misleiden", "Reclame — verkopen met een grap", "Column — iemands eigen mening"],
        answer: 0,
        wrongHints: [null, "Satire is ook niet echt, maar wil het dat je het gelooft?", "Geen verkoopdoel — een lach.", "Een columnstuk is iets anders dan een grap-stuk."],
      },
      {
        q: "Hoeveel uur per dag zitten kinderen en tieners gemiddeld op een scherm?",
        options: ["4-7 uur", "1 uur", "30 min", "12+ uur"],
        answer: 0,
        wrongHints: [null, "Tel school, telefoon, gamen en tv eens bij elkaar op — kom je dan op maar 1 uur?", "Alleen al je telefoon gebruik je waarschijnlijk langer dan dat.", "Dan blijft er bijna geen tijd over voor school en slapen."],
      },
      {
        q: "Welke is **geen** media?",
        options: ["Een glas water", "Een krant", "De app TikTok", "De radio"],
        answer: 0,
        wrongHints: [null, "Drukmedium — letters op papier.", "Sociale-media-app met video's.", "Audiomedium — uitzendingen via lucht."],
      },
    ],
  },
  {
    title: "Nepnieuws + factcheck",
    explanation:
      "**Nepnieuws** *(fake news)* = informatie die **niet waar is**, met opzet verspreid om mensen te misleiden.\n\n**Waarom maken mensen nepnieuws?**\n• **Politiek** — om verkiezing te beïnvloeden.\n• **Geld** — clicks = advertentie-inkomsten.\n• **Aandacht** — viraal gaan.\n• **Schade** — iemand zwartmaken.\n• **Macht** — buitenlandse beïnvloeding *(bv. Rusland, China)*.\n\n**Soorten misleiding** *(uit het hoofd!)*:\n\n**1. Fake news** — totaal verzonnen.\n• Voorbeeld: 'Bill Gates wil iedereen chippen met vaccin'.\n\n**2. Misinformatie** — onjuist maar niet expres.\n• Iemand deelt iets waarvan hij denkt dat het waar is, maar dat blijkt niet zo.\n\n**3. Desinformatie** — opzettelijk onjuist.\n• Met **opzet** verspreid om te misleiden.\n\n**4. Half-waar** — feiten gemixt met leugens.\n• Vaak het meest geloofwaardig.\n\n**5. Misleidende kop** — clickbait.\n• Kop suggereert iets sensationeels, artikel zelf saaier.\n• 'Dokter ontdekt schokkende waarheid' → vaak niets.\n\n**6. Gemanipuleerde beelden** — foto's bewerkt, video's deepfake.\n\n**7. Out-of-context** — echte foto's/video's, maar bij verkeerd onderwerp.\n• Bv. foto van rellen uit 2010 wordt gepost als '2024 rellen' — vals.\n\n**Hoe checken? — FACT-checklist** *(uit het hoofd!)*:\n\n**F — Find the source** *(zoek bron)*:\n• Wie heeft het geschreven?\n• Bekende journalist? Officiële krant? Random Twitter-account?\n\n**A — Are the facts correct?** *(kloppen de feiten?)*:\n• Check op andere websites *(verschillende bronnen)*.\n• Google de claim.\n\n**C — Cross-check** *(meerdere bronnen)*:\n• Staat het bij **3+ bronnen**?\n• Zo niet: verdacht.\n\n**T — Test images/videos** *(beelden checken)*:\n• Google reverse-image-search.\n• Tineye.com.\n• InVID (hulpmiddel om video's te checken).\n\n**Vertrouwde bronnen in NL**:\n• **NOS** *(publieke omroep)*.\n• **NRC**, **Volkskrant**, **Trouw**, **AD**, **Telegraaf** *(kranten — verschillende oriëntaties)*.\n• **RTL Nieuws**, **Nieuwsuur**.\n• **Factcheckers**: Nieuwscheckers (Leiden), Stop Fake News, Pointer.\n\n**Niet 100% vertrouwen**:\nElke krant heeft eigen kleuring *(politiek-links/rechts)*. Maar feiten daarin zijn meestal gecheckt.\n\n**Wikipedia**:\n• Vaak betrouwbaar voor feitelijke info.\n• Niet kopiëren voor werkstuk — vermeld als bron.\n• Engelse Wikipedia uitgebreider dan NL.\n\n**Sociale media**:\n• Niet vertrouwd. Eerst checken voor delen.\n• 'Maar mijn vriend zei het' = geen bron.\n\n**toetsvraag**:\n*'Hoe check je nieuws?'*\n→ Zoek bron, check andere bronnen, vergelijk feiten.\n\n*'Wat is desinformatie?'*\n→ Opzettelijk onjuiste info om te misleiden.",
    checks: [
      {
        q: "Wat is **desinformatie**?",
        options: ["Opzettelijk onjuiste info om te misleiden", "Onjuiste info die per ongeluk gedeeld wordt", "Een eerlijke mening in een column of vlog", "Betaalde info om een product te verkopen"],
        answer: 0,
        wrongHints: [null, "Dat is mis-informatie.", "Een mening mag, ook als je het er niet mee eens bent. Is dat misleiden?", "Reclame wil je iets verkopen — is dat de kern van desinformatie?"],
        uitlegPad: {
          stappen: [
            { titel: "Verschil mis- en desinformatie", tekst: "**Mis-informatie** = per ONGELUK onjuist (je dacht dat het klopte, maar nee). **Des-informatie** = met **OPZET** onjuiste info, om mensen bewust te MISLEIDEN." },
            { titel: "Waarom desinformatie?", tekst: "Mensen verspreiden expres nepnieuws voor 1) politiek (verkiezing beïnvloeden), 2) geld (clicks = advertentie-inkomsten), 3) macht (buitenlandse beïnvloeding zoals Rusland in VS-verkiezingen)." },
            { titel: "Voorbeelden", tekst: "Mis-info: jij vertelt vriend 'morgen is school dicht' op basis van wat je dacht te horen → blijkt niet. Des-info: iemand maakt expres fake video van een politicus om hem zwart te maken." },
          ],
          woorden: [
            { woord: "des-informatie", uitleg: "OPZETTELIJK onjuiste info." },
            { woord: "mis-informatie", uitleg: "PER ONGELUK onjuiste info." },
            { woord: "fake news", uitleg: "Verzonnen nieuws (= meestal desinformatie)." },
          ],
          theorie: "Toets-tip: DES = OPZET. MIS = PER ONGELUK. Onthoud dit verschil. Beide zijn nepnieuws, maar de bedoeling verschilt.",
          voorbeelden: [
            { type: "stap", tekst: "Rusland verspreidde tijdens VS-verkiezingen 2016 desinformatie via fake-Facebook-accounts." },
            { type: "stap", tekst: "Influencer post per ongeluk verkeerde info over vaccin: mis-info (geen opzet)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Des = met opzet (Designed). Mis = per ongeluk (Mistake)." }],
          niveaus: {
            basis: "Desinformatie = opzettelijk onjuist om te misleiden.",
            simpeler: "Iemand verzint expres nepnieuws om jou te bedriegen.",
            nogSimpeler: "Opzettelijk gelogen.",
          },
        },
      },
      {
        q: "Hoe **check** je een nieuwsbericht?",
        options: ["Meerdere bronnen vergelijken", "Kijken hoeveel likes het heeft", "Kijken of de kop betrouwbaar klinkt", "Vragen of je vrienden het geloven"],
        answer: 0,
        wrongHints: [null, "Veel likes betekent veel aandacht — maar is het daarom waar?", "Een kop kan heel betrouwbaar klinken en toch misleiden.", "Je vrienden kunnen hetzelfde nepbericht gezien hebben. Wat zegt hun mening dan?"],
      },
      {
        q: "Welke is **betrouwbaar** in NL?",
        options: ["NOS", "Anoniem Twitter-account", "Random TikTok-video", "Reclame-mail"],
        answer: 0,
        wrongHints: [null, "Geen naam erbij = geen verantwoording.", "Onbekende maker, geen redactie.", "Doel = jou iets verkopen, niet informeren."],
      },
      {
        q: "Wat is **clickbait**?",
        options: ["Een misleidende kop om je te laten klikken", "Een virus dat je via een link binnenhaalt", "Een advertentie tussen andere berichten", "Een kop die het hele verhaal samenvat"],
        answer: 0,
        wrongHints: [null, "Dat is malware. Bij clickbait gaat het om de tekst die je ziet — wat doet die met je?", "Er zit vaak reclame achter, maar waar gaat het woord 'bait' (lokaas) over?", "Hoef je dan nog te klikken?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is clickbait?", tekst: "**Clickbait** (Engels voor 'klik-aas') is een **misleidende kop** die je verleidt om te klikken — maar het artikel zelf is teleurstellend, saai, of niet over de belofte." },
            { titel: "Hoe herken je het?", tekst: "Typische clickbait-koppen: 'Je gelooft NIET wat er gebeurt!', 'Dokter ontdekt SCHOKKENDE waarheid', '10 dingen die je niet wist...'. Sensationele taal, geen specifieke info." },
            { titel: "Waarom doen ze dit?", tekst: "Websites verdienen geld per **CLICK** of per advertentie-weergave. Hoe meer mensen klikken, hoe meer geld. Daarom **lokken** ze met geheimzinnige koppen." },
          ],
          woorden: [
            { woord: "clickbait", uitleg: "Engels: 'klik-aas' — misleidende kop." },
            { woord: "sensationeel", uitleg: "Overdreven spannend om aandacht te trekken." },
          ],
          theorie: "Toets-tip clickbait: ALTIJD met scepsis. Lees verder dan kop. Als artikel niet wat kop beloofde → niet delen. Sluit de tab.",
          voorbeelden: [
            { type: "stap", tekst: "Kop: 'Bijgaande foto zal je leven veranderen.' Artikel: standaard foto, niets bijzonders. Clickbait." },
            { type: "stap", tekst: "Kop: 'Top 10 redenen waarom...' Artikel: 1 echte reden, rest opvulling. Clickbait." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Kop te sensationeel? Klopt zelden. Vertrouw saaie + feitelijke koppen meer." }],
          niveaus: {
            basis: "Clickbait = misleidende sensationele kop om mensen te laten klikken.",
            simpeler: "'Klik-aas' — lokt je, valt tegen.",
            nogSimpeler: "Misleidende kop.",
          },
        },
      },
    ],
  },
  {
    title: "Sociale media + algoritmes",
    explanation:
      "Sociale media werken met **algoritmes** — slimme computer-programma's die kiezen wat jij ziet.\n\n**Hoe werken algoritmes?**\n\n• App kijkt: **wat doe jij?** *(klik, like, scroll-pauze, deel)*.\n• App leert: 'Anna kijkt vaker katten-video's' → meer katten-video's.\n• Doel: **jou langer op de app houden** *(meer ads = meer geld)*.\n\n**Algoritmes maken bubbels** *(filterbubbel)*:\n• Je ziet **steeds dezelfde soort dingen** *(jouw mening, jouw stijl)*.\n• Andere meningen verdwijnen.\n• **Risico**: je gelooft dat 'iedereen' het met je eens is — niet waar.\n\n**Echo chamber** *(echo-kamer)*:\n• Online groep waar **alleen jouw mening klinkt**.\n• Andere standpunten worden afgewezen.\n• Versterkt **polarisatie** *(extremer worden)*.\n\n**Doomscrolling** 📱\n• Eindeloos scrollen door negatief nieuws.\n• Algoritmes pushen vaak negatief = meer reactie = meer tijd.\n• Kan je somber maken.\n\n**Verslaving + dopamine**:\n• Elke **like** = klein dopamine-shotje *(geluksstofje)*.\n• Apps zijn ontworpen om **verslavend** te zijn.\n• Notificaties, oneindig scrollen, kleurige knoppen.\n\n**Tijdsverdeling — gemiddelde tiener** *(2024)*:\n• 2-3 uur TikTok.\n• 1-2 uur Instagram.\n• 1-2 uur YouTube.\n• Plus Snapchat, gaming, etc.\n• Totaal: **5-7 uur per dag schermtijd**.\n\n**Influencers** 👤\n• Mensen met veel volgers.\n• Krijgen **betaald** om producten aan te prijzen.\n• Niet altijd duidelijk welke posts gesponsord zijn.\n• In NL moeten ze **'#ad'** of **'#sponsored'** vermelden — niet iedereen doet dat.\n\n**Likes en self-esteem**:\n• Veel likes = goed gevoel.\n• Weinig likes = slecht gevoel.\n• Maar likes = **niet jouw waarde**.\n• Onderzoek vindt vaak een **verband** tussen veel social media en somberheid / een laag zelfbeeld.\n\n**Hoe verstandig omgaan?**\n\n**1. Schermtijd-limieten**:\n• iOS / Android hebben app-limieten.\n• Bv. 1 uur/dag TikTok-max.\n\n**2. Notificaties uit**:\n• Pull-effect uitschakelen.\n• Check zelf wanneer JIJ wil, niet de app.\n\n**3. Specifiek doel**:\n• Voor je opent: 'wat ga ik doen?'\n• 'Even Instagram open' wordt vaak 1 uur.\n\n**4. Mute / unfollow**:\n• Accounts die je slecht gevoel geven? **Unfollow**.\n• Niet alles hoeven zien.\n\n**5. Buiten + offline tijd**:\n• Sport, lezen, vrienden in real life.\n• Sluit dag af zonder telefoon (laatste uur).\n\n**Toets-feitje**:\nOnderzoek (o.a. Twenge, 2017): tieners die >3 uur/dag op hun scherm zitten, hebben een **hoger risico op depressieve klachten**. Mediawijsheid kan beschermen.",
    checks: [
      {
        q: "Wat is een **algoritme** op social media?",
        options: ["Programma dat kiest wat jij ziet", "Mens die beslist", "Toeval", "Volgorde waarin posts geplaatst zijn"],
        answer: 0,
        wrongHints: [null, "Geen mens primair.", "Bewust gekozen.", "Dan zag je alles op tijd — maar je feed wordt juist voor je uitgekozen."],
      },
      {
        q: "Wat is een **filterbubbel**?",
        options: ["Zelfde meningen + content steeds zien", "Een filter dat nepnieuws tegenhoudt", "Een fotofilter dat je gezicht verandert", "Instellingen die je privacy beschermen"],
        answer: 0,
        wrongHints: [null, "Een filterbubbel kies je niet zelf en hij houdt geen nep tegen. Wat doet hij wel?", "Het woord 'filter' klopt, maar het gaat niet om foto's.", "Privacy gaat over wat anderen van jou zien. Waar gaat een filterbubbel over?"],
      },
      {
        q: "Hoe **schermtijd** verminderen?",
        options: ["App-limieten instellen en meldingen uitzetten", "Elke melding meteen afhandelen, dan is hij weg", "Je telefoon als wekker naast je bed leggen", "Je telefoon op stil zetten maar in je hand houden"],
        answer: 0,
        wrongHints: [null, "Elke melding trekt je weer naar je scherm. Wordt het dan minder?", "Wat doe je als eerste als je 's ochtends je wekker uitzet?", "Stil is goed, maar kijk je minder als hij in je hand ligt?"],
      },
      {
        q: "Wat doen **influencers** met merken?",
        options: ["Betaald aanprijzen", "Gratis aanbevelen", "Kritisch beoordelen", "Onafhankelijk testen"],
        answer: 0,
        wrongHints: [null, "Doen ze het meestal uit zichzelf, of zit er een deal achter?", "Geef je veel kritiek op een merk dat jou betaalt?", "Een onafhankelijke tester krijgt geen geld van het merk. Hoe zit dat bij influencers?"],
      },
    ],
  },
  {
    title: "Privacy + AVG + cookies",
    explanation:
      "**Privacy** = controle over jouw **persoonlijke gegevens** *(naam, adres, foto's, gewoontes)*.\n\n**Wat zijn persoonlijke gegevens?**\n• Naam, adres, telefoonnummer.\n• Email-adres.\n• Foto's *(met gezicht)*.\n• Locatie.\n• Bank-gegevens.\n• Medische info.\n• Wachtwoorden.\n• Surfgedrag *(welke sites bezoek je)*.\n\n**Wie wil jouw data?**\n\n**Bedrijven**:\n• **Facebook, Google, TikTok** — voor advertenties.\n• **Webshops** — voor betere aanbevelingen.\n• **Banken** — voor diensten.\n\n**Slechteriken**:\n• Hackers — voor identiteitsfraude.\n• Oplichters — voor bedrog.\n• Stalkers — voor lastigvallen.\n\n**AVG (Algemene Verordening Gegevensbescherming)**:\n• Europese **privacy-wet** *(sinds 2018)*.\n• Engels: **GDPR** *(General Data Protection Regulation)*.\n• Bedrijven moeten:\n  - Vragen voordat ze data verzamelen.\n  - Eerlijk zeggen wat ze ermee doen.\n  - Data verwijderen als jij dat vraagt.\n• Boetes voor overtreding: tot **4% wereldwijde omzet** *(miljarden bij grote bedrijven)*.\n\n**Cookies** 🍪\n\n**Wat zijn cookies?**\n• **Kleine bestanden** die websites op je computer plaatsen.\n• Bevatten info zoals: 'Anna logde gisteren in', 'koos NL als taal'.\n\n**Soorten cookies**:\n\n**1. Functionele** *(noodzakelijk)*:\n• Voor: ingelogd blijven, taal-keuze, winkelmandje.\n• Mag **zonder toestemming**.\n\n**2. Analytisch** *(statistiek)*:\n• Hoeveel bezoekers? Welke pagina's?\n• Vaak ook zonder strenge toestemming.\n\n**3. Tracking / marketing** *(volg-cookies)*:\n• Volgen jou van site naar site.\n• Bouwen profiel op.\n• Verkocht aan adverteerders.\n• **Toestemming nodig** volgens AVG.\n\n**Cookie-banner** *(verplicht door de privacywet)*:\nElke website moet vragen: 'Mag ik cookies plaatsen?'\n• 'Accepteer alles' = makkelijk maar **veel data weg**.\n• 'Weiger / Alleen noodzakelijk' = beter voor privacy.\n• 'Aanpassen' = kies per type.\n\n**Tips voor privacy**:\n\n**1. Sterke wachtwoorden**:\n• Min 12 tekens, mix letters/cijfers/tekens.\n• **Verschillend per site** — gebruik wachtwoord-manager.\n• Niet: 'wachtwoord123', '123456', je voornaam.\n\n**2. 2FA** *(twee-staps-verificatie)*:\n• Naast wachtwoord ook **code op telefoon**.\n• Veel veiliger.\n• Gebruik voor: email, bank, social media.\n\n**3. Privacy-instellingen** check:\n• Op Instagram, TikTok: 'wie kan mijn profiel zien?'.\n• Locatie uit als niet nodig.\n• Foto's met je gezicht blijven lang online — pas op.\n\n**4. Geen foto's posten van anderen** zonder vragen:\n• Vooral van kinderen.\n• Privacy van anderen ook respecteren.\n\n**5. VPN** *(virtual private network)*:\n• Verbergt jouw IP-adres.\n• Voor wie extra privacy wil.\n• NordVPN, ExpressVPN, etc.\n\n**Wat NIET delen online**:\n• Volledig adres + postcode.\n• Telefoonnummer.\n• Foto van paspoort / rijbewijs.\n• Bankrekeningnummer.\n• Wachtwoorden *(zelfs aan vrienden!)*.\n• Voorzichtig met: school-naam, dagelijkse routine.\n\n**Toets-feitje**:\nDe AVG geldt voor **alle bedrijven die data van EU-burgers verwerken**, zelfs bedrijven uit andere landen. Grote techbedrijven zoals Meta (Facebook) hebben al hoge boetes gekregen.",
    checks: [
      {
        q: "Wat is **AVG**?",
        options: ["EU-privacy-wet", "Auto-vereniging", "Sociale media", "Belasting"],
        answer: 0,
        wrongHints: [null, "Verwarring met ANWB? Andere afkorting.", "Geen platform — een wet.", "Geen heffing — een regel."],
      },
      {
        q: "**Tracking cookies** — wat doen ze?",
        options: ["Volgen jou van site naar site", "Een website sneller laten laden", "Reclame op websites blokkeren", "Je inlog op één site onthouden"],
        answer: 0,
        wrongHints: [null, "Soms gevolg, niet doel.", "Juist niet — waar gebruiken adverteerders jouw surfgedrag voor?", "Dat doen functionele cookies. Wat doet een tracking-cookie?"],
      },
      {
        q: "Wat is **2FA**?",
        options: ["Twee-staps-verificatie", "Twee apparaten tegelijk ingelogd", "2x foto", "Twee accounts"],
        answer: 0,
        wrongHints: [null, "Het gaat niet om waar je inlogt, maar hoe.", "Niet over foto's — over inloggen.", "Geen extra account — een extra check."],
      },
      {
        q: "Welke deel je **NIET** online?",
        options: ["Wachtwoord + paspoort", "Vakantie-foto van zee", "Verjaardagswens", "Boekrecensie"],
        answer: 0,
        wrongHints: [null, "Locatie eventueel — anders OK.", "OK.", "OK."],
      },
    ],
  },
  {
    title: "Cyberpesten + online veiligheid",
    explanation:
      "**Cyberpesten** = pesten via internet of telefoon. Bv. via WhatsApp, Instagram, Snapchat, games.\n\n**Vormen**:\n• **Bellen + lastigvallen**.\n• **Naar berichten** sturen.\n• **Foto's verspreiden** zonder toestemming.\n• **Uitsluiten** uit groepen.\n• **Roddel** verspreiden.\n• **Bedreigen**.\n• **Identiteit stelen** *(fake-account met jouw foto)*.\n• **Deepfakes** *(AI-gegenereerde nep-foto's/video's)*.\n\n**Hoe vaak?**\n• ~10-15% van Nederlandse jongeren is cyberpest-slachtoffer.\n• ~5% is dader.\n• Veel **niet gemeld** wegens schaamte.\n\n**Gevolgen voor slachtoffer**:\n• Stress + angst.\n• Slecht slapen.\n• Slechte cijfers.\n• Depressie.\n• In ernstige gevallen: zelfmoord.\n\n**Wat te doen — als slachtoffer**:\n\n**1. NIET reageren**:\n• Pesters willen reactie.\n• Negeer of blokkeer.\n\n**2. Bewaar bewijs**:\n• Screenshots maken.\n• Datum + tijd noteren.\n\n**3. Blokkeer + meld**:\n• Op platform zelf *('Report')*.\n• Op de meeste apps gaat dader weg of krijgt ban.\n\n**4. Praat met iemand**:\n• Ouder, mentor, vriend.\n• **Niet alleen blijven zitten**.\n\n**5. Hulplijnen**:\n• **De Kindertelefoon**: 0800-0432 (gratis, anoniem).\n• **Pestweb.nl**.\n• **Politie** *(als het strafbaar is, bv. bedreiging of stalking)*: 0900-8844.\n\n**Cyberpesten kan strafbaar zijn in NL** *(bv. bedreiging, art. 285 Sr)*:\n• Boete + taakstraf voor minderjarigen.\n• Volwassen daders: tot 2 jaar cel bij bedreiging.\n\n**Online predators / grooming** ⚠️\n\n**Grooming** = volwassene bouwt online vertrouwen op met kind voor seksuele doeleinden.\n\n**Tekens**:\n• Onbekende vraagt foto's van jou.\n• Vraagt geheim te houden van ouders.\n• Geeft cadeautjes online *(robux, V-bucks)*.\n• Vraagt af te spreken.\n• Vraagt naaktfoto's of andere seksuele beelden.\n\n**Wat NOOIT doen**:\n• **NIET** afspreken met online onbekenden.\n• **NIET** naaktfoto's sturen *(ook niet aan vriendje/vriendinnetje — kan later misbruikt worden)*.\n• **Wel direct** ouder/politie inschakelen.\n\n**Sextortion** = chantage met intieme beelden.\n• 'Stuur geld of ik post je foto.'\n• Betaal **nooit** — vraagt steeds meer.\n• Meld bij **politie** *(0900-8844)* of **HelpWanted.nl**.\n\n**Online veiligheid — checklist**:\n\n**1. Onbekenden**:\n• Geen vriendschaps-verzoeken aannemen van onbekenden.\n• Geen DM antwoorden van onbekenden.\n\n**2. Privé instellingen**:\n• Account privé *(alleen vrienden)*.\n• Locatie uit.\n\n**3. Foto's**:\n• Niet alles posten.\n• Geen huisnummer/adres-info in achtergrond.\n\n**4. Wachtwoorden**:\n• Sterk + uniek.\n• 2FA.\n\n**5. Bij twijfel — vraag**:\n• Ouder, oudere broer/zus, mentor.\n\n**Toets-feitje**:\nDe Kindertelefoon voert jaarlijks heel veel gesprekken — veel over cyberpesten + online stress. Niet alleen — er is hulp.",
    checks: [
      {
        q: "Wat doe je bij **cyberpesten**?",
        options: ["Niet reageren, bewijs bewaren, melden", "Rustig terugschrijven dat het moet stoppen", "Je account meteen verwijderen", "Het negeren en het aan niemand vertellen"],
        answer: 0,
        wrongHints: [null, "Een reactie geeft de pester vaak juist aandacht. Wat werkt beter?", "Dan raak je ook je bewijs kwijt — en stopt de pester er niet door.", "Negeren kan helpen, maar wie kan je steunen als niemand het weet?"],
      },
      {
        q: "**Kindertelefoon**-nummer?",
        options: ["0800-0432", "112", "0900-9292", "113"],
        answer: 0,
        wrongHints: [null, "112 is alleen voor spoed: politie, brandweer of ambulance.", "Dat is het nummer voor reisinformatie over bus en trein.", "113 is de hulplijn voor zelfmoordpreventie. Welke lijn is speciaal voor kinderen?"],
      },
      {
        q: "Wat is **grooming**?",
        options: ["Volwassene bouwt online vertrouwen met kind voor misbruik", "Klasgenoten die iemand via de groepsapp pesten", "Iemand chanteren met een gestuurde naaktfoto", "Je wachtwoord stelen via een nepmail of nepsite"],
        answer: 0,
        wrongHints: [null, "Dat is cyberpesten.", "Dat is sextortion.", "Dat is phishing."],
      },
      {
        q: "Bij **sextortion** — wat doen?",
        options: ["Niet betalen, melden bij politie", "Betalen, want dan stopt het meestal", "Zelf contact zoeken om het uit te praten", "Alles verwijderen en het geheimhouden"],
        answer: 0,
        wrongHints: [null, "Betalen leidt bijna altijd tot nieuwe eisen.", "Praten geeft de afperser juist meer kans om druk te zetten.", "Wie kan je dan helpen, en waar is je bewijs gebleven?"],
      },
    ],
  },
  {
    title: "Eind-opdracht — mediawijsheid mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl. Door elkaar: nepnieuws, algoritmes, privacy, veiligheid.\n\nVeel succes!",
    checks: [
      { q: "**Mediawijsheid** is?", options: ["Kritisch met media omgaan", "Zo min mogelijk media gebruiken", "Handig zijn met apps en sites", "Vooral nieuws van bekende kranten lezen"], answer: 0, wrongHints: [null, "Minder kijken kan verstandig zijn, maar ben je dan ook wijs met wat je wél ziet?", "Handig zijn met apps is een digitale vaardigheid. Snap je daardoor ook wat je ziet?", "Ook bekende kranten maken fouten. Is één soort bron genoeg?"] },
      { q: "**Desinformatie** = ?", options: ["Opzettelijk onjuist", "Per ongeluk onjuist", "Een eerlijke mening", "Betaalde reclame"], answer: 0, wrongHints: [null, "Misinformatie.", "Een mening mag. Is die bedoeld om te misleiden?", "Reclame wil je iets verkopen — is dat de kern van desinformatie?"] },
      { q: "Wat doen **algoritmes**?", options: ["Kiezen wat jij ziet", "Reclame van je scherm weghalen", "Je account beveiligen tegen hackers", "Berichten sorteren op tijd"], answer: 0, wrongHints: [null, "Halen algoritmes reclame weg, of laten ze je juist gerichte reclame zien?", "Dat doen wachtwoorden en 2FA. Wat doet een algoritme op TikTok?", "Dan zou iedereen hetzelfde zien. Is jouw tijdlijn gelijk aan die van een vriend?"] },
      { q: "**AVG** = ?", options: ["EU-privacywet", "EU-wet tegen nepnieuws", "Wet op het auteursrecht", "Leeftijdsgrens voor sociale media"], answer: 0, wrongHints: [null, "Dat gaat over de inhoud van berichten. Waar staat de 'G' van AVG voor?", "Auteursrecht gaat over wie een foto of tekst mag gebruiken. Waar staat de 'G' van AVG voor?", "Er staat in de AVG wel iets over leeftijd, maar wat beschermt de wet in het algemeen?"] },
      { q: "**2FA** = ?", options: ["Twee-staps-verificatie", "Twee accounts op dezelfde app", "Wachtwoord twee keer intypen", "Een tweede e-mailadres als reserve"], answer: 0, wrongHints: [null, "Meer accounts maken je niet veiliger. Waar slaat de 'F' van factor op?", "Twee keer hetzelfde intypen is nog steeds één ding dat je weet. Is dat extra veilig?", "Een reserve-adres helpt bij herstel, maar is het een extra controle bij het inloggen?"] },
      { q: "Wat NOOIT delen online?", options: ["Wachtwoord", "Boekrecensie", "Vakantie-foto", "Vriendelijk bericht"], answer: 0, wrongHints: [null, "OK.", "OK (eventueel zonder locatie).", "OK."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const mediaWijsheidMaatschappijleer = {
  id: "media-wijsheid-maatschappijleer",
  title: "Mediawijsheid (klas 2-3)",
  emoji: "📱",
  level: "klas2-3",
  subject: "maatschappijleer",
  referentieNiveau: "2F",
  sloThema: "Maatschappijleer — mediawijsheid + digitale geletterdheid",
  prerequisites: [
    { id: "mensenrechten-maatschappijleer", title: "Mensenrechten", niveau: "2F" },
  ],
  intro:
    "Mediawijsheid voor klas 2-3 — 5 vaardigheden + soorten media, nepnieuws (FACT-check, satire vs desinformatie), algoritmes + filterbubbels + influencers, privacy + AVG + cookies + 2FA, cyberpesten + grooming + sextortion + hulplijnen. ~15 min.",
  triggerKeywords: [
    "mediawijsheid", "nepnieuws", "fake news",
    "algoritme", "filterbubbel", "influencer",
    "privacy", "AVG", "GDPR", "cookies",
    "cyberpesten", "grooming", "sextortion",
  ],
  chapters,
  steps,
};

export default mediaWijsheidMaatschappijleer;
