// Leerpad: Tweede Wereldoorlog + Holocaust — HAVO/VWO Geschiedenis
// CSE-onderwerp 1939-1945. Aanloop, verloop, Holocaust, Pacific, gevolgen.
// 5 stappen × ~5 checks. Referentieniveau havo-3F / vwo-3S.

const stepEmojis = ["⚠️", "⚔️", "✡️", "🌊", "🏆"];

const chapters = [
  { letter: "A", title: "Aanloop (1919-1939)", emoji: "⚠️", from: 0, to: 0 },
  { letter: "B", title: "Verloop in Europa", emoji: "⚔️", from: 1, to: 1 },
  { letter: "C", title: "Holocaust + Nederland", emoji: "✡️", from: 2, to: 2 },
  { letter: "D", title: "Pacific + Hiroshima", emoji: "🌊", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht — gevolgen + lessen", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Aanloop ───────────────────────────────────────────
  {
    title: "Aanloop tot WO2 (1919-1939)",
    explanation:
      "**Verdrag van Versailles** (1919) eindigde WO1:\n• Duitsland kreeg de schuld + zware sancties.\n• Verlies grondgebied (Elzas-Lotharingen, kolonies).\n• Beperking leger: max 100 000 man, geen tanks, geen luchtmacht.\n• Enorme herstelbetalingen (132 mld goudmark).\n• Het 'gedicteerde verdrag' werd in DE als vernedering ervaren.\n\n**Weimar-Republiek** (1919-1933):\n• Eerste Duitse democratie.\n• Hyperinflatie 1923 (briefje van 100 biljoen Mark!).\n• 1924-1929 herstel ('Roaring Twenties').\n• Krach 1929 → Grote Depressie → werkloosheid → radicalisering.\n\n**Opkomst Hitler + NSDAP**:\n• Adolf Hitler (1889-1945, Oostenrijker) trad toe tot kleine partij 1919.\n• Mislukte München-putsch 1923 → 'Mein Kampf' geschreven in gevangenis.\n• NSDAP groeide tijdens Depressie: 1928 2,6% → 1932 37%.\n• 30 januari 1933: Hitler benoemd tot Rijkskanselier door president Hindenburg.\n• Rijksdagbrand 27 februari → noodverordeningen → arrestatie communisten.\n• Machtigingswet maart 1933: Hitler dictator, andere partijen verboden.\n\n**Nazi-ideologie**:\n• **Rassenleer**: arisch 'superieur ras' boven anderen. Joden, Roma, Slaven, gehandicapten 'inferieur'.\n• **Antisemitisme**: joden zondebok voor alle problemen (verloren oorlog, depressie, communisme).\n• **Lebensraum** (leefruimte): expansie naar Oost-Europa nodig.\n• **Führerprinzip**: één leider absoluut.\n• **Totalitaire staat**: alles politiek, Hitlerjugend, Bund Deutscher Mädel, Gestapo overal.\n\n**Stappen naar oorlog**:\n• 1935: herbewapening + dienstplicht (Versailles schenden).\n• 1936: bezetting Rijnland.\n• 1938 maart: **Anschluss** Oostenrijk.\n• 1938 sept: **München-akkoord** — UK/FR geven Sudetenland (DE-sprekend deel Tsjechië) aan Hitler (appeasement-politiek Chamberlain).\n• 1938 nov: **Kristallnacht** — joodse winkels + synagogen vernield.\n• 1939 maart: rest Tsjechië bezet.\n• 1939 augustus: **Molotov-Ribbentrop-pact** — niet-aanvalsverdrag Hitler-Stalin (geheime clausule: Polen verdelen).\n• **1 september 1939**: Duitsland valt Polen binnen → 3 sept: UK + FR verklaren oorlog. **WO2 begint.**\n\n**Waarom werkte appeasement niet?**\n• Westen wilde geen nieuwe WO1.\n• Hoop dat Hitler 'redelijk' zou worden.\n• Onderschatting expansie-drang.\n• Chamberlain: 'Peace for our time' (Sept 1938) — 11 maanden later oorlog.",
    checks: [
      {
        q: "**Verdrag van Versailles** (1919) gaf Duitsland:",
        options: [
          "Schuld + sancties + beperking leger + herstelbetalingen",
          "Beloningen",
          "Gelijkwaardige behandeling",
          "Niets"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Tegenovergesteld.", "Wel veel."],
        uitlegPad: {
          stappen: [
            { titel: "Vernederend voor Duitsland", tekst: "DE moest 'oorlogsschuld' accepteren (artikel 231), 132 mld goudmark betalen, leger inkrimpen tot 100k man, kolonies + grondgebied verliezen. Werd als 'Diktat' ervaren. Voedde latere extremisme + Hitler's belofte 'recht doen'. Historici: te streng → veroorzaakte WO2." },
          ],
          niveaus: { basis: "Sancties + schuld. A.", simpeler: "Streng straf voor DE. A.", nogSimpeler: "Streng = A." },
        },
      },
      {
        q: "**Hitler werd Rijkskanselier** op:",
        options: ["30 januari 1933", "1 sept 1939", "9 nov 1923", "1 mei 1945"],
        answer: 0,
        wrongHints: [null, "Niet — start WO2.", "Niet — München-putsch (mislukt).", "Niet — zijn dood."],
        uitlegPad: {
          stappen: [{ titel: "Wettelijk aan macht", tekst: "Hitler verkregen democratisch (NSDAP grootste partij na 1932-verkiezingen). Hindenburg benoemde hem Rijkskanselier 30 jan 1933. Binnen maanden: brand Rijksdag, machtigingswet, eenpartij-staat. Niet revolutionaire greep maar legaal achterhalen + dan systeem afbreken." }],
          niveaus: { basis: "30-1-1933. A.", simpeler: "Begin 1933. A.", nogSimpeler: "1933 = A." },
        },
      },
      {
        q: "**Lebensraum** = ?",
        options: [
          "Leefruimte voor 'Arisch ras' — expansie naar Oost-Europa",
          "Vrije markt",
          "Religieuze tolerantie",
          "Geen ideologie"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Tegenovergesteld.", "Wel."],
        uitlegPad: {
          stappen: [
            { titel: "Rechtvaardiging invasie", tekst: "Hitler: DE bevolking groeit, heeft meer ruimte nodig. Oost-Europa (Polen, Oekraïne, Rusland) zou herkoloniseerd worden als DE leefruimte. Slaven 'inferieur' → onderdrukken of uitroeien. Argument voor invasie 1941 USSR (Operation Barbarossa)." },
          ],
          niveaus: { basis: "Leefruimte oosten. A.", simpeler: "Ruimte voor DE-volk. A.", nogSimpeler: "Lebens = A." },
        },
      },
      {
        q: "**München-akkoord (1938)**:",
        options: [
          "UK/FR geven Sudetenland aan Hitler — appeasement",
          "Oorlogsverklaring",
          "Vredesakkoord WO2-einde",
          "Olympische Spelen"
        ],
        answer: 0,
        wrongHints: [null, "Niet — uitstel.", "Niet — daar Versailles.", "Onzin."],
        uitlegPad: {
          stappen: [
            { titel: "Appeasement faalde", tekst: "Chamberlain (UK) + Daladier (FR) hoopten oorlog te vermijden door Hitler Sudetenland te geven. Hitler beloofde verdere expansie te staken. 11 maanden later: invasie Polen. Klassieke les: dictatoriale agressie niet sussen via concessies. 'Peace for our time' werd ironie." },
          ],
          niveaus: { basis: "Sudetenland weggeven. A.", simpeler: "DE krijgt deel Tsjechië. A.", nogSimpeler: "München = A." },
        },
      },
      {
        q: "**WO2 begon** met DE-invasie van:",
        options: ["Polen (1 sept 1939)", "Frankrijk", "USSR", "Nederland"],
        answer: 0,
        wrongHints: [null, "Niet — mei 1940.", "Niet — juni 1941.", "Niet — mei 1940."],
        uitlegPad: {
          stappen: [
            { titel: "Datum WO2-start", tekst: "1 sept 1939 vroeg ochtend: DE valt Polen binnen na grens-incident (gefabriceerd door SS). 3 sept: UK + FR verklaren oorlog aan DE. 17 sept: USSR valt OOST-Polen aan (Molotov-Ribbentrop-pact). Polen bezet binnen weken." },
          ],
          niveaus: { basis: "Polen. A.", simpeler: "Polen 1939. A.", nogSimpeler: "Polen = A." },
        },
      },
    ],
  },

  // ─── B. Verloop ───────────────────────────────────────────
  {
    title: "Verloop in Europa 1939-1945",
    explanation:
      "**Fase 1: Blitzkrieg-successen (1939-1941)**:\n• **Blitzkrieg** = bliksem-oorlog: tank + luchtmacht + infanterie samen, snel doorbreken.\n• 1939 sept: Polen valt in weken.\n• 1940 april: Denemarken + Noorwegen.\n• 1940 mei: Nederland (5 dagen — Rotterdam-bombardement 14 mei), België, Luxemburg, Frankrijk.\n• Frankrijk valt 22 juni 1940 — wapenstilstand bij Compiègne (zelfde plek WO1-Duits verlies, omgekeerde positie).\n• **Battle of Britain** (zomer 1940): luchtoorlog UK-DE. UK wint dankzij radar + RAF.\n\n**Fase 2: Wereldoorlog (1941-1943)**:\n• **Operation Barbarossa** (juni 1941): DE valt USSR aan. Schending Molotov-Pact.\n  - Snelle vooruitgang, maar gestopt voor Moskou door winter.\n  - Stalingrad-slag (1942-43): grootste land-veldslag ooit, ~2 mln doden, DE verlieten.\n• **Pearl Harbor** (7 dec 1941): Japan valt Amerikaanse vloot aan. VS verklaart oorlog Japan + DE.\n• **Noord-Afrika** (Rommel vs Montgomery): El Alamein 1942, geallieerden winnen.\n\n**Fase 3: Geallieerd offensief (1943-1945)**:\n• Juli 1943: Geallieerde invasie Sicilië → Italië.\n• Mussolini valt sept 1943 (Italiaanse fascistische leider).\n• **D-Day** (6 juni 1944): geallieerde invasie Normandië, ~160 000 troepen op één dag.\n• Sept 1944: bevrijding Zuid-NL (Maastricht, Eindhoven, Nijmegen) door Geallieerden.\n• **Slag om Arnhem** ('A Bridge Too Far') sept 1944: mislukt — operatie Market Garden.\n• **Hongerwinter** (1944-45): 20 000 NL-doden in nog-bezet West-NL.\n• Bombardement Dresden (feb 1945): controversieel, ~25 000 doden.\n• Sovjets nemen Berlijn (april 1945).\n• Hitler zelfmoord 30 april 1945.\n• **8 mei 1945** (V-E Day): DE capitulatie. **Bevrijdingsdag NL**.\n\n**Drie wapens nieuw**:\n• **Radar** — vroege waarschuwing voor luchtaanvallen.\n• **Code-breken** — Enigma-machine door Bletchley Park (Turing).\n• **Atoom-bom** (later in Pacific).\n\n**Belangrijke leiders**:\n• **Hitler** (DE Führer).\n• **Mussolini** (Italië, fascisme).\n• **Hirohito** (Japan keizer) + **Tojo** (premier).\n• **Stalin** (USSR).\n• **Churchill** (UK, vanaf mei 1940).\n• **Roosevelt** (VS, tot apr 1945) → **Truman**.\n• **De Gaulle** (Vrije Frankrijk, vanaf Londen).\n\n**Nederlandse situatie**:\n• 10 mei 1940 inval, 14 mei capitulatie.\n• Koningin Wilhelmina + regering vluchten naar Londen.\n• Bezetting onder Rijkscommissaris Seyss-Inquart.\n• NSB (Nederlandse fascisten) collaboreerden.\n• Verzet groeide langzaam — onderduik joden, persclandestien, sabotage.\n• 1944-45 Hongerwinter: tulpenbollen + brandnetels eten.\n• 5 mei 1945 bevrijding (officieel).",
    checks: [
      {
        q: "Nederland werd door DE bezet in:",
        options: ["Mei 1940 (10-14 mei)", "September 1939", "Juni 1941", "Juli 1944"],
        answer: 0,
        wrongHints: [null, "Niet — DE viel Polen aan.", "Niet — USSR-invasie.", "Niet — bevrijding Zuid."],
        uitlegPad: {
          stappen: [
            { titel: "5-daagse oorlog", tekst: "10 mei 1940 vroeg ochtend: DE valt NL aan (Westfeldzug). 14 mei: Rotterdam-bombardement → NL capituleert om verdere steden te sparen. Koningin + regering naar Londen. Beneluxlanden + FR allemaal in 6 weken bezet — Blitzkrieg-succes." },
          ],
          niveaus: { basis: "Mei 1940. A.", simpeler: "10-14 mei 1940. A.", nogSimpeler: "1940 = A." },
        },
      },
      {
        q: "**Stalingrad** (1942-43):",
        options: [
          "Grootste land-slag ooit, ~2 mln doden, DE verliezen — keerpunt oost",
          "DE wint",
          "Geen militair belang",
          "Sovjet-stad zonder strijd"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Tegenovergesteld.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "Hitler-megalomanie", tekst: "Hitler wilde Stalingrad (naar Stalin genoemd) ten koste van alles. Sovjets vochten om elke straat. Winter 1942-43: 6e Leger DE omsingeld, geen ontsnapping toegestaan. Februari 1943 capitulatie. ~800 000 DE verliezen + ~1,2 mln Sovjet. Daarna USSR op offensief. Keerpunt aan oostfront." },
          ],
          niveaus: { basis: "Keerpunt + DE verliezen. A.", simpeler: "DE verliest grote slag. A.", nogSimpeler: "DE verlies = A." },
        },
      },
      {
        q: "**D-Day** (6 juni 1944):",
        options: [
          "Geallieerde landing Normandië, ~160 000 troepen 1 dag",
          "Pearl Harbor",
          "Bevrijding Auschwitz",
          "Hiroshima"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dec 1941.", "Niet — jan 1945.", "Niet — aug 1945."],
        uitlegPad: {
          stappen: [
            { titel: "Operation Overlord", tekst: "Grootste amfibische operatie ooit. Eisenhower-commando. 5 stranden (Utah, Omaha, Gold, Juno, Sword) op Normandische kust. Omaha het bloedigst (~2400 Amerikaanse doden). Doorbraak naar Parijs (bevrijd aug 1944) en oprukken naar Duitsland. Begin van eind in West." },
          ],
          niveaus: { basis: "Landing Normandië. A.", simpeler: "Frankrijk-invasie. A.", nogSimpeler: "Normandië = A." },
        },
      },
      {
        q: "**Hongerwinter** (1944-45):",
        options: [
          "West-NL bezet, geen voedsel-toelevering, ~20 000 doden",
          "Korte winter",
          "Italiaanse hongersnood",
          "Geen relatie WO2"
        ],
        answer: 0,
        wrongHints: [null, "Niet — wel ernstig.", "Niet.", "Wel."],
        uitlegPad: {
          stappen: [
            { titel: "Wraak voor spoorwegstaking", tekst: "Sept 1944: NL-spoorwegen staakten om geallieerde-bevrijding te steunen. DE blokkeerde voedsel-toelevering aan WEST-NL (Randstad). Strenge winter + bezetting → mensen aten tulpenbollen + suikerbieten + brandnetels. ~20 000 doden vooral oudere mannen + zwangere vrouwen. Foto's hongerige kinderen wereldwijd bekend." },
          ],
          niveaus: { basis: "20 000 doden NL. A.", simpeler: "Hongersnood West-NL. A.", nogSimpeler: "Honger = A." },
        },
      },
      {
        q: "**V-E Day** (Victory Europe) is:",
        options: ["8 mei 1945 — DE-capitulatie", "5 mei 1945", "6 juni 1944", "15 augustus 1945"],
        answer: 0,
        wrongHints: [null, "NL-specifieke bevrijdingsdag.", "Niet — D-Day.", "Niet — V-J Day (Japan)."],
        uitlegPad: {
          stappen: [
            { titel: "Officiële DE-capitulatie", tekst: "7 mei: DE tekent capitulatie in Reims. 8 mei: ratificatie Berlijn. Sovjet-tijdzone: 9 mei (Victory Day in Rusland). NL viert 5 mei (bevrijdingsdag) want dat was effectieve bevrijding voor NL-bevolking — DE-troepen in NL gaven zich over." },
          ],
          niveaus: { basis: "8 mei 1945. A.", simpeler: "DE-capitulatie. A.", nogSimpeler: "8-5-45 = A." },
        },
      },
    ],
  },

  // ─── C. Holocaust ─────────────────────────────────────────
  {
    title: "Holocaust — Endlösung + Nederland",
    explanation:
      "**Holocaust** (Grieks: 'volledig verbrand') = systematische uitroeiing van ~6 miljoen joden door Nazi-Duitsland + collaborateurs (1933-45).\n\n**Fasen**:\n\n**1. Uitsluiting (1933-39)**:\n• Boycot joodse winkels (1933).\n• **Neurenberger wetten** (1935): joden geen DE-burgers, geen huwelijk met niet-joden.\n• **Kristallnacht** (9-10 nov 1938): 267 synagogen vernield, 7500 winkels, ~30 000 joden naar kampen.\n• Beroepsverbod, eigendomonteigening.\n\n**2. Ghettoisering (1939-41)**:\n• Joden geconcentreerd in stadsdelen (Warschau-getto: ~400 000 mensen).\n• Honger + ziekte massaal.\n• Verboden eruit.\n\n**3. Endlösung — Massa-moord (1941-45)**:\n• Na invasie USSR: **Einsatzgruppen** (mobiele dood-eskaders) schieten joden ter plekke. ~1,5 mln doden via deze methode.\n• **Babi Yar** (Kiev sept 1941): 33 000 joden in 2 dagen geschoten.\n• **Wannsee-conferentie** (jan 1942): plan voor systematische uitroeiing alle Europese joden — 11 miljoen geïdentificeerd.\n• **Concentratiekampen** → **Vernietigingskampen**:\n  - Auschwitz-Birkenau (~1,1 mln doden).\n  - Treblinka (~800k).\n  - Belzec, Sobibor, Chelmno, Majdanek.\n• Methodes: gas (Zyklon B), schieten, honger, dwangarbeid.\n• Bevrijd door geallieerden + Sovjets jan-mei 1945. Schokte de wereld.\n\n**Slachtoffers**:\n• ~6 mln joden (uit ~9 mln vooroorlogs Europese joden).\n• Plus: Roma + Sinti (~500k), gehandicapten (~270k via 'T4'-programma), homoseksuelen, communisten, krijgsgevangenen Sovjet (~3 mln), Polen-elite, etc.\n\n**Nederland**:\n• Bezet 1940. NL had ~140 000 joden vooroorlogs (~1% bevolking, vooral Amsterdam).\n• Registratie verplicht 1941 (CBS-administratie maakte deportatie efficiënt — controversiële naoorlogse vraag over verantwoordelijkheid).\n• Februaristaking (25-26 feb 1941): Amsterdammers protesteerden tegen joodse vervolging — enige West-Europese verzet zo openlijk. Hard neergeslagen.\n• Vanaf juli 1942: deportaties via Westerbork → Auschwitz, Sobibor.\n• ~75% NL-joden vermoord (104 000 van 140 000) — HOOGSTE % West-Europa.\n• Vergelijk: België 40%, Frankrijk 25%, Denemarken <5% (gered door bevolking).\n\n**Anne Frank** (1929-1945):\n• Duits-joodse vluchtelinge in Amsterdam.\n• Onderdook 1942-1944 met familie in Prinsengracht 263.\n• Verraden aug 1944, naar Westerbork → Auschwitz → Bergen-Belsen.\n• Stierf feb 1945 aan tyfus, 15 jaar oud.\n• Dagboek door vader Otto (enige overlevende) gepubliceerd 1947. Wereldwijd 70+ mln verkocht. Anne Frank Huis = museum.\n\n**Joodse verzet + redders**:\n• 'Righteous Among the Nations' (Yad Vashem): erkenning niet-joden die joden redden.\n• ~5800 Nederlanders, vooral via onderduikkamers.\n• Bekend: Corrie ten Boom (Haarlem), Miep Gies (Anne Frank-helper).\n• Internationaal: Oskar Schindler (DE, 1100 gered, film 'Schindler's List'), Raoul Wallenberg (Zweden in Boedapest).\n\n**Naoorlogs**:\n• **Neurenberger Processen** (1945-46): 24 nazi-leiders berecht. Hess, Göring, Speer veroordeeld. Hitler/Himmler/Goebbels al dood.\n• **Eichmann-proces** Israel 1961: bracht Holocaust opnieuw onder aandacht. Hannah Arendt schreef 'Banaliteit van het kwaad'.\n• Yad Vashem (Jeruzalem 1953) + Holocaust-museum Washington (1993) = nationale herinnering.\n• Holocaust-ontkenning strafbaar in DE, FR, IL en andere landen.\n\n**Lessen**:\n• Hoe 'normale' mensen kunnen meewerken aan massa-moord (banaliteit kwaad).\n• Belang vrije pers + rechtsstaat + minderheidsbescherming.\n• 'Nooit weer' — maar genocide gebeurt nog (Rwanda 1994, Bosnië 1995, Oeigoeren huidig).",
    checks: [
      {
        q: "**Holocaust**: ~6 miljoen joden vermoord. Hoogste percentage West-Europa was in:",
        options: [
          "Nederland (~75%)",
          "België (~40%)",
          "Frankrijk (~25%)",
          "Denemarken (<5%)"
        ],
        answer: 0,
        wrongHints: [null, "Wel hoog, niet hoogste.", "Idem.", "Bijna alle gered — laagste."],
        uitlegPad: {
          stappen: [
            { titel: "Tragische uitschieter", tekst: "Van 140 000 NL-joden vermoord 104 000 — hoogste % West-Europa. Redenen: efficiënte CBS-registratie, weinig schuilplaats in dichtbevolkt klein land, weinig massaal-verzet, NSB-collaboratie. Denemarken redde bijna iedereen via boot-evacuatie naar Zweden." },
          ],
          niveaus: { basis: "NL ~75%. A.", simpeler: "NL hoogste verlies. A.", nogSimpeler: "NL 75% = A." },
        },
      },
      {
        q: "**Wannsee-conferentie** (jan 1942):",
        options: [
          "Nazi-plan voor systematische uitroeiing alle Europese joden (Endlösung)",
          "Vredesakkoord",
          "Olympische Spelen plan",
          "Economie-overleg"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Onzin.", "Onzin."],
        uitlegPad: {
          stappen: [
            { titel: "Bureaucratie van moord", tekst: "Heydrich + 14 hoge nazi-ambtenaren bij Wannsee-meer Berlijn. Lijst 11 mln joden + organisatorische uitvoering. Bewijst: Holocaust was PLAN, niet impuls. Wannsee-villa nu Gedenkstätte. Notities (Eichmann) ontdekt na oorlog — onmiskenbaar bewijs." },
          ],
          niveaus: { basis: "Endlösung-plan. A.", simpeler: "Uitroeiing alle joden. A.", nogSimpeler: "Endlösung = A." },
        },
      },
      {
        q: "**Anne Frank** stierf:",
        options: [
          "Bergen-Belsen, feb 1945, tyfus (15 jaar oud)",
          "Auschwitz",
          "Westerbork",
          "Amsterdam"
        ],
        answer: 0,
        wrongHints: [null, "Wel geweest, niet gestorven daar.", "Idem.", "Onderdook daar, niet gestorven."],
        uitlegPad: {
          stappen: [
            { titel: "Tijdslijn", tekst: "Aug 1944: verraden, gearresteerd. Sept '44: Westerbork → Auschwitz. Okt '44: naar Bergen-Belsen (DE). Feb '45: tyfus-epidemie → Anne + zus Margot sterven. Bevrijding kamp april '45 — paar weken te laat. Otto enige overlevende familie." },
          ],
          niveaus: { basis: "Bergen-Belsen tyfus. A.", simpeler: "Bergen-Belsen feb '45. A.", nogSimpeler: "Belsen = A." },
        },
      },
      {
        q: "**Februaristaking** (25-26 feb 1941):",
        options: [
          "Amsterdammers protesteerden tegen joodse vervolging — enige openlijk West-EU-verzet",
          "Voor hogere lonen",
          "Voor koningin",
          "Tegen voedsel-tekort"
        ],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Niet hoofdreden.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Eerste massa-protest joden-vervolging", tekst: "Na razzia's bij Joods Buurt: trambestuurders staakten, kantoor + winkel-personeel volgde. Massaal-uniek voor bezet West-Europa. DE-bezetters reageerden hard: arrestaties, executie. Toch belangrijke morele actie. Standbeeld 'De Dokwerker' op Jonas Daniël Meijerplein Amsterdam herinnert." },
          ],
          niveaus: { basis: "Anti-joden-vervolging staking. A.", simpeler: "Amsterdammers tegen razzia. A.", nogSimpeler: "Staking = A." },
        },
      },
      {
        q: "**Oskar Schindler** redde:",
        options: [
          "~1100 joden door werk in eigen fabriek (DE-zakenman)",
          "Niemand",
          "Hele dorpen",
          "Alleen familie"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Te veel.", "Niet — vreemden."],
        uitlegPad: {
          stappen: [
            { titel: "Film 'Schindler's List' 1993", tekst: "DE-zakenman + NSDAP-lid. Maakte aanvankelijk winst met joodse dwangarbeiders. Geleidelijk veranderde mening → kostte fortuin om hen veilig te houden. Door 'lijst' bewaarde 1100 voor dood. Stierf arm 1974, begraven op Mount Zion. Film Spielberg won 7 Oscars." },
          ],
          niveaus: { basis: "1100 joden. A.", simpeler: "Fabriek redde joden. A.", nogSimpeler: "Schindler = A." },
        },
      },
    ],
  },

  // ─── D. Pacific + Hiroshima ───────────────────────────────
  {
    title: "Pacific-oorlog + Hiroshima",
    explanation:
      "**Japan's Imperiale expansie** (1931-1941):\n• Japan = militaristische staat sinds Meiji.\n• 1931 inval Mantsjoerije (China-NO).\n• 1937 volle invasie China (Nanjing-massacre dec 1937: ~300 000 doden in 6 weken, oorlogsmisdaad).\n• 1940 lidmaatschap **As-mogendheden** (DE + Italië + Japan).\n• 1940-41 bezetting Frans-Indochina (= Vietnam).\n• VS embargo's tegen Japan (olie + staal) → kritiek voor Japans oorlogsmachine.\n\n**Pearl Harbor** (7 dec 1941):\n• Japan valt Amerikaanse Pacific-vloot aan in Hawaii zonder oorlogsverklaring.\n• 2400 doden, 19 schepen gezonken, 200+ vliegtuigen vernietigd.\n• Bedoeling: VS-vloot uitschakelen, tijd winnen voor Aziatische expansie.\n• Resultaat: VS oorlog verklaart aan Japan (8 dec). DE + Italië verklaren oorlog aan VS (11 dec).\n• 'A date which will live in infamy' (Roosevelt).\n\n**Japan's snelle expansie (dec 1941 - jun 1942)**:\n• Filipijnen, Singapore, Hongkong, Birma, Nederlands-Indië (= Indonesië), grote delen Pacific.\n• Brutaliteit: krijgsgevangenen + lokale bevolking dwangarbeid (Bataan-mars, Burma-spoorlijn).\n• Indonesië: NL-bestuur weggevaagd, 'bevrijding' van wit kolonialisme (door Japan), maar zelf wreed.\n\n**Keerpunten Pacific**:\n• **Coral Sea + Midway** (mei-juni 1942): VS-marine stopt Japanse expansie.\n• **Guadalcanal** (1942-43): eerste echte VS-offensief.\n• 'Island hopping': VS verovert eiland na eiland, Japan terugdringen.\n• Iwo Jima (feb 1945) + Okinawa (apr-jun 1945) — bloedige slagen.\n\n**Atoomwapen** (Manhattan Project):\n• VS startte 1939 (Einstein-brief aan Roosevelt) na DE-onderzoek.\n• Leiders: Oppenheimer (wetenschappelijk), Groves (militair).\n• ~125 000 mensen, $2 mld (toen) = grootste Geheim project ooit.\n• Eerste test (Trinity) 16 juli 1945 New Mexico.\n• Oppenheimer citeerde Bhagavad Gita: 'Nu ben ik dood geworden, vernietiger van werelden.'\n\n**Hiroshima + Nagasaki**:\n• **6 augustus 1945**: 'Little Boy' (uranium) op Hiroshima. ~80 000 directe doden, ~140 000 binnen jaar door straling.\n• **9 augustus 1945**: 'Fat Man' (plutonium) op Nagasaki. ~40 000 direct, ~75 000 binnen jaar.\n• **15 augustus 1945** (V-J Day): Japan capituleert (hoorbaar door bevolking — voor eerst keizer Hirohito-stem op radio).\n• 2 september 1945: officiële ondertekening op USS Missouri.\n\n**Atoombom-debat**:\n• Argumenten VOOR: invasie Japan zou 500k-1mln geallieerde + miljoenen Japanse doden eisen. Bom bracht snelle einde.\n• Argumenten TEGEN: Japan was al verslagen, alleen kwestie tijd. Burger-doelen, niet militaire. Sovjet-druk + atoom-monopolie demonstreren waren echte motieven.\n• Tot vandaag controversieel.\n\n**Nasleep Japan**:\n• Amerikaanse bezetting onder Macarthur (1945-52).\n• Nieuwe grondwet: artikel 9 verbiedt oorlog ('vredes-grondwet').\n• Snelle economische opbouw → 1980s tweede grootste economie wereld.\n• Hirohito bleef keizer (controversieel — sommigen wilden berechting).\n\n**Indonesië**:\n• 17 augustus 1945: Soekarno + Hatta verklaren onafhankelijkheid TIJDENS machtsvacuüm (Japan capituleert, NL nog niet terug).\n• NL erkent niet, militaire 'politionele acties' 1947-49.\n• Internationale druk (VS, VN) → NL erkent dec 1949.\n• Beladen geschiedenis: NL-koloniale + Japanse + onafhankelijkheid-oorlog (Bersiap-tijd massamoord op Nederlanders + Indo-Europeanen door Indonesische jongeren).",
    checks: [
      {
        q: "**Pearl Harbor** = aanval van:",
        options: [
          "Japan op Amerikaanse vloot, Hawaii, 7 dec 1941",
          "DE op USSR",
          "VS op Japan",
          "China op Japan"
        ],
        answer: 0,
        wrongHints: [null, "Niet — Barbarossa.", "Tegenovergesteld.", "Niet — Japan invadeerde China."],
        uitlegPad: {
          stappen: [
            { titel: "Verrassings-aanval", tekst: "Zondag morgen 7 dec 1941, geen oorlogsverklaring vooraf. Japanse vliegtuigen bombardeerden Amerikaanse vloot in Pearl Harbor (Hawaii). 2400 doden. VS verklaart oorlog aan Japan + komt zo in WO2 (ook Europese theater)." },
          ],
          niveaus: { basis: "Japan→VS-Hawaii. A.", simpeler: "Japan valt VS aan. A.", nogSimpeler: "PH = A." },
        },
      },
      {
        q: "**Atoombom Hiroshima** datum?",
        options: ["6 augustus 1945", "6 juni 1944", "8 mei 1945", "15 augustus 1945"],
        answer: 0,
        wrongHints: [null, "Niet — D-Day.", "Niet — V-E.", "Niet — V-J Day (capitulatie)."],
        uitlegPad: {
          stappen: [
            { titel: "'Little Boy'", tekst: "8:15 ochtend. Enola Gay-bommenwerper. 13 kt TNT-equivalent (klein vs huidige H-bommen). 80 000 direct dood, stad weggevaagd. 9 aug Nagasaki. 15 aug Japan capituleert. Eerste + enige militair-gebruikte atoomwapens." },
          ],
          niveaus: { basis: "6 aug 1945. A.", simpeler: "Augustus 1945. A.", nogSimpeler: "6-8-45 = A." },
        },
      },
      {
        q: "**Manhattan Project** ontwikkelde:",
        options: ["Atoombom", "Radar", "Penicilline", "Computer"],
        answer: 0,
        wrongHints: [null, "Apart project.", "Apart.", "Apart (Bletchley/Turing)."],
        uitlegPad: {
          stappen: [
            { titel: "Geheimst project ooit", tekst: "Begonnen 1939 na Einstein's brief aan Roosevelt (zorg dat DE eerst bom heeft). 125 000 mensen, $2 mld. Locaties: Los Alamos (design, Oppenheimer), Oak Ridge (uranium-verrijking), Hanford (plutonium). Trinity test 16 juli 1945. 3 weken later Hiroshima." },
          ],
          niveaus: { basis: "Atoombom. A.", simpeler: "VS-atoombom-project. A.", nogSimpeler: "Atoom = A." },
        },
      },
      {
        q: "**Indonesië-onafhankelijkheid** uitgeroepen op:",
        options: ["17 aug 1945 (Soekarno + Hatta)", "15 aug 1945", "8 mei 1945", "27 dec 1949"],
        answer: 0,
        wrongHints: [null, "Niet — Japan capituleert die dag.", "Niet — V-E day Europe.", "Niet — NL-erkenning."],
        uitlegPad: {
          stappen: [
            { titel: "Tijdens machtsvacuüm", tekst: "Soekarno + Hatta riepen onafhankelijkheid uit 2 dagen na Japan-capitulatie. NL erkende niet → 4 jaar conflict ('politionele acties'). Onder internationale druk (VN, VS) tekende NL 27 dec 1949 erkenning. Bersiap-tijd 1945-46: lokale jongeren vermoorden duizenden NL/Indo-Europeanen." },
          ],
          niveaus: { basis: "17 aug 1945. A.", simpeler: "Augustus 1945. A.", nogSimpeler: "17-8-45 = A." },
        },
      },
      {
        q: "**Nanjing-massacre** (dec 1937):",
        options: [
          "Japanse troepen vermoordden ~300k Chinezen in 6 weken — oorlogsmisdaad",
          "Chinese overwinning",
          "Vrede getekend",
          "Geen relevant feit"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Tegenovergesteld.", "Wel zeer relevant."],
        uitlegPad: {
          stappen: [
            { titel: "'Rape of Nanking'", tekst: "Toen Japanse leger de Chinese hoofdstad Nanjing innam: massamoord + verkrachting van Chinese burgers + krijgsgevangenen. Schattingen 200-300k doden in 6 weken. Eén van ergste oorlogsmisdaden 20e eeuw. Belangrijke reden voor naoorlogse anti-Japan-sentiment in China. Sommige Japanse nationalisten ontkennen schaal nog steeds — diplomatiek spanningsveld." },
          ],
          niveaus: { basis: "300k Chinezen vermoord. A.", simpeler: "Japans massamoord China. A.", nogSimpeler: "Nanjing = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — Gevolgen + Lessen WO2",
    explanation:
      "**Cijfers WO2** (~6 jaar):\n• ~60-85 mln doden wereldwijd.\n• USSR: 26 mln (zwaarst).\n• China: 15-20 mln.\n• Duitsland: 6-7 mln.\n• Joden (Holocaust): 6 mln.\n• Poland: 5,8 mln (50% joods).\n• Japan: 2,8 mln.\n• VS + UK + Frankrijk + NL relatief minder (samen ~1 mln).\n\n**Materiële schade**:\n• Europese steden + Japan verwoest.\n• Infrastructuur, industrie, woningen platgebombardeerd.\n• ~50 mln vluchtelingen + ontheemden in Europa direct na oorlog.\n\n**Nieuwe wereldorde**:\n• **VS** + **USSR** = twee supermachten.\n• Europa verzwakt → einde Europese koloniale dominantie.\n• **VN** opgericht 1945 (San Francisco) — opvolger van mislukte Volkenbond.\n• **Mensenrechten-Verklaring** 1948 (UDHR).\n• **NAVO** 1949 + **Warschaupact** 1955 = Koude Oorlog begint.\n\n**Marshall-plan** (1948-52):\n• VS gaf $13 mld (vandaag ~$170 mld) aan West-Europa voor wederopbouw.\n• Doel: economisch herstel + tegen communisme.\n• Sleutel succes naoorlogs Europa.\n• Sovjet zone weigerde → kloof versterkt.\n\n**Berechting**:\n• **Neurenberg-processen** (1945-46): 24 nazi-top, 12 doodstraffen.\n• Tokyo-processen (1946-48): Japanse leiders.\n• **Beginsel** Neurenberg: 'orders volgen' geen verdediging voor oorlogsmisdaden → individuele verantwoordelijkheid.\n• Latere: Eichmann (1961, Israel), Klaus Barbie (1987, Frankrijk).\n\n**Israel-stichting** (1948):\n• Holocaust + zionistische beweging + Britse mandaat-einde.\n• VN-verdeelplan 1947 → Israel onafhankelijk 14 mei 1948.\n• Direct oorlog Israel-Arabische landen.\n• Lopend conflict tot vandaag.\n\n**Dekolonisatie**:\n• Verzwakt Europa kan kolonies niet meer behouden.\n• India 1947, Indonesië 1949, China-burgeroorlog 1949 (communistisch wint), Vietnam 1954/1975, Afrika 1957-65.\n• Niet altijd vredig — soms bloedige onafhankelijkheidsoorlog.\n\n**Welvaartsstaat** (1945-1980):\n• Westerse landen creëren sociaal vangnet: AOW, ziektewet, werkloosheidsuitkering.\n• Educatie + gezondheidszorg breed beschikbaar.\n• Compromis tussen kapitalisme + socialisme.\n\n**Europese integratie**:\n• EGKS 1951 → EEG 1957 → EU.\n• Doel: oorlog onmogelijk maken door integratie.\n• Werkt: geen oorlog meer tussen EU-landen.\n\n**Lessen**:\n• Appeasement van dictators werkt niet.\n• Internationale samenwerking nodig (VN, EU, NAVO).\n• Mensenrechten + rechtsstaat moeten beschermd worden.\n• Genocide gebeurt door 'gewone' mensen die orders volgen (banaliteit kwaad).\n• Bewustzijn + onderwijs over Holocaust cruciaal — 'Nooit Weer' moet actief beleefd worden.\n\n**Herinnering vandaag**:\n• 4 mei: Dodenherdenking NL (alle oorlogsslachtoffers).\n• 5 mei: Bevrijdingsdag NL.\n• 27 januari: Internationale Holocaust-herdenkingsdag (bevrijding Auschwitz 1945).\n• Auschwitz, Anne Frank Huis, Yad Vashem, Holocaust-museum Washington — bezoek-bestemmingen.\n• Holocaust-overlevenden bijna allemaal gestorven → nu via getuigenissen + films + documentaires bewaard.\n\n**Bedreigingen voor herinnering**:\n• Holocaust-ontkenning (strafbaar in DE, FR, IL).\n• Antisemitisme leeft helaas weer op in Europa + VS.\n• Rechts-extremisme + neonazi-bewegingen.\n• Tijd verstrijken: 80% jongeren weet basis-feiten Holocaust nauwelijks (recent onderzoek).\n\n**Andere genocides** sinds 1945:\n• Cambodja (Rode Khmer 1975-79, ~1,5 mln).\n• Rwanda 1994 (Hutu vs Tutsi, ~800k in 100 dagen).\n• Bosnië 1992-95 (Srebrenica massacre 1995, ~8000 mannen).\n• Oeigoeren in China (huidig debat — concentratiekampen?).\n• Verschrikkelijk lessen: 'Nooit Weer' is geen automatisch garantie.",
    checks: [
      {
        q: "**Marshall-plan** was:",
        options: [
          "$13 mld VS-hulp voor wederopbouw West-Europa (1948-52)",
          "Militair plan",
          "Energie-plan",
          "Russische ontwikkelingshulp"
        ],
        answer: 0,
        wrongHints: [null, "Niet militair.", "Niet specifiek.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "Genereus + strategisch", tekst: "Genoemd naar George Marshall (VS-Secretary of State). Hulp voor wederopbouw + voorkomen communisme-uitbreiding. Sleutel naoorlogs welvaart Europa. Sovjet-zone weigerde → kloof West-Oost diep. NL ontving ~$1 mld." },
          ],
          niveaus: { basis: "VS-hulp wederopbouw. A.", simpeler: "$13 mld voor Europa. A.", nogSimpeler: "Marshall = A." },
        },
      },
      {
        q: "**Neurenberg-principe**:",
        options: [
          "'Orders volgen' is geen verdediging voor oorlogsmisdaden",
          "Geen straf voor leiders",
          "Alleen militair berecht",
          "Geen rechtszitting"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Onjuist.", "Wel."],
        uitlegPad: {
          stappen: [
            { titel: "Individuele verantwoordelijkheid", tekst: "Klassiek beginsel: ook ambtenaren + soldaten zijn verantwoordelijk voor hun handelingen. Eichmann probeerde dit verweer ('ich war nur ein kleines Rädchen') — werd verworpen. Vandaag basis voor Internationale Strafhof Den Haag (ICC) waar oorlogsmisdaden berecht worden." },
          ],
          niveaus: { basis: "Orders ≠ vrijbrief. A.", simpeler: "Persoonlijk verantwoordelijk. A.", nogSimpeler: "Persoon = A." },
        },
      },
      {
        q: "**Israel** werd onafhankelijk in:",
        options: ["1948 (14 mei)", "1939", "1945", "1967"],
        answer: 0,
        wrongHints: [null, "Niet — start WO2.", "Niet — einde WO2.", "Niet — Zesdaagse Oorlog."],
        uitlegPad: {
          stappen: [
            { titel: "VN-verdeelplan + Britse mandaat-einde", tekst: "VN-resolutie 181 (nov 1947) verdeelde mandaat-Palestina in joodse + Arabische staat. 14 mei 1948: David Ben-Gurion roept Israel uit. Direct oorlog met Egypte+Jordanië+Syrië+Libanon+Irak. Israel wint, vergroot grondgebied. Begin van conflict tot vandaag." },
          ],
          niveaus: { basis: "1948. A.", simpeler: "Mei 1948. A.", nogSimpeler: "1948 = A." },
        },
      },
      {
        q: "**Europese integratie** (EGKS → EU) had als hoofddoel:",
        options: [
          "Oorlog tussen EU-landen onmogelijk maken via economische verwevenheid",
          "Geld verdienen",
          "Engels verspreiden",
          "Religie"
        ],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Tegenovergesteld bedoeling.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Schuman + Monnet", tekst: "1951: kolen + staal-industrie (oorlogsbasis) onder gemeenschappelijk bestuur Schumanplan. Idee: landen die handel + economie delen, gaan geen oorlog meer voeren. Werkt: geen oorlog meer tussen EU-leden sinds 1945. Nobelvredesprijs 2012 voor EU." },
          ],
          niveaus: { basis: "Vrede via integratie. A.", simpeler: "Geen oorlog meer EU. A.", nogSimpeler: "Vrede = A." },
        },
      },
      {
        q: "**Welke genocide sinds WO2** vond plaats in 1994?",
        options: ["Rwanda (~800k in 100 dagen)", "Bosnië", "Cambodja", "Geen"],
        answer: 0,
        wrongHints: [null, "Iets vroeger 1992-95.", "1975-79.", "Wel."],
        uitlegPad: {
          stappen: [
            { titel: "Hutu vs Tutsi", tekst: "Apr 1994: Hutu-extremisten begonnen systematische slachting Tutsi-bevolking + gematigde Hutu. ~800 000 doden in 100 dagen via machetes + geweren. VN-vredesmacht trok terug. Internationale gemeenschap verzuimde. Belangrijke les: 'Nooit Weer' is geen automatische garantie. Sindsdien meer aandacht voor preventie genocide." },
          ],
          niveaus: { basis: "Rwanda 1994. A.", simpeler: "Rwanda 800k doden. A.", nogSimpeler: "Rwanda = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const tweedeWereldoorlogHavoVwo = {
  id: "tweede-wereldoorlog-havo-vwo",
  title: "Tweede Wereldoorlog + Holocaust (HAVO/VWO Geschiedenis)",
  emoji: "⚔️",
  level: "havo-vwo-4-5",
  subject: "geschiedenis",
  referentieNiveau: "havo-3F / vwo-3S",
  sloThema: "Geschiedenis — WO2 + Holocaust (CSE-onderwerp)",
  prerequisites: [
    { id: "twintigste-eeuw-havo-vwo", title: "Twintigste eeuw", niveau: "havo-3F" },
  ],
  intro:
    "WO2 + Holocaust voor HAVO/VWO eindexamen — aanloop (Versailles → Hitler → Anschluss), Europese theater (Blitzkrieg → Stalingrad → D-Day), Holocaust + Nederland (75%-verlies, Anne Frank), Pacific + Hiroshima, naoorlogse wereld + lessen. 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "Tweede Wereldoorlog", "WO2", "WWII",
    "Verdrag van Versailles",
    "Weimar-Republiek",
    "Hitler", "NSDAP",
    "Mein Kampf",
    "Rijksdagbrand",
    "machtigingswet",
    "rassenleer", "antisemitisme",
    "Lebensraum",
    "Anschluss", "München-akkoord",
    "appeasement", "Chamberlain",
    "Kristallnacht",
    "Molotov-Ribbentrop",
    "Blitzkrieg",
    "Polen 1939", "Frankrijk 1940",
    "Battle of Britain",
    "Operation Barbarossa",
    "Stalingrad",
    "Noord-Afrika", "El Alamein", "Rommel",
    "D-Day", "Normandië", "Eisenhower",
    "Market Garden", "Arnhem",
    "Hongerwinter",
    "V-E Day", "8 mei 1945",
    "bevrijdingsdag", "5 mei",
    "Holocaust", "Sjoah",
    "Neurenberger wetten",
    "ghetto", "Warschau-getto",
    "Wannsee-conferentie",
    "Endlösung",
    "Einsatzgruppen", "Babi Yar",
    "concentratiekamp", "vernietigingskamp",
    "Auschwitz", "Treblinka",
    "Zyklon B",
    "Westerbork",
    "Februaristaking",
    "Anne Frank",
    "Schindler", "Oskar Schindler",
    "Yad Vashem",
    "Pearl Harbor",
    "Manhattan Project", "Oppenheimer",
    "Hiroshima", "Nagasaki",
    "Nanjing-massacre",
    "Soekarno", "Indonesië-onafhankelijkheid",
    "Neurenberg-processen",
    "Marshall-plan",
    "VN", "NAVO",
    "Israel 1948",
    "dekolonisatie",
    "welvaartsstaat",
    "Rwanda 1994", "Bosnië", "Srebrenica",
    "genocide",
  ],
  chapters,
  steps,
};

export default tweedeWereldoorlogHavoVwo;
