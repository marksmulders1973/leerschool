// Leerpad: Recyclen + afval + duurzaamheid - groep 6-8.
// Toets-burgerschap/duurzaamheid. 1F. 4 stappen.

const stepEmojis = ["🗑️", "♻️", "🌍", "🏆"];

const chapters = [
  { letter: "A", title: "Soorten afval", emoji: "🗑️", from: 0, to: 0 },
  { letter: "B", title: "Recyclen + hergebruik", emoji: "♻️", from: 1, to: 1 },
  { letter: "C", title: "Plastic + zee", emoji: "🌍", from: 2, to: 2 },
  { letter: "D", title: "Eind-toets", emoji: "🏆", from: 3, to: 3 },
];

const steps = [
  {
    title: "Soorten afval + hoe scheiden",
    explanation:
      "**Afval** = wat we weggooien.\nElke Nederlander maakt **~480 kg afval per jaar** *(2024)*.\nDat is ruim **1,3 kg per dag**!\n\n**Afval scheiden** = afval verdelen in soorten zodat het **opnieuw gebruikt** kan worden.\n\n**Soorten afval in NL** *(per kleur bak)*:\n\n**🟫 Groente, Fruit en Tuinafval (GFT)** *(groene bak)*:\n• Schillen, appelklokhuizen.\n• Eierschalen.\n• Theezakjes + koffiedik.\n• Bladeren + grasmaaisel.\n• Snijbloemen.\n• **Wordt compost** *(meststof voor planten)*.\n\n**🟦 Papier + karton** *(blauwe bak)*:\n• Kranten, tijdschriften.\n• Verpakkingsdozen *(zonder voedselresten)*.\n• Reclame-folders.\n• Wel: schoon karton.\n• Niet: vette pizza-dozen, met plastic-laag.\n• **Wordt nieuw papier** *(7-10 keer recyclebaar)*.\n\n**🟧 Glas** *(glasbak in dorp/wijk)*:\n• Lege wijnflessen, jampotten, sauspotjes.\n• Verschillende kleuren *(groen/wit/bruin)* — soms apart in 3 bakken.\n• **Wordt nieuw glas** *(eindeloos recyclebaar zonder kwaliteit-verlies)*.\n\n**🟨 PMD (Plastic-Metaal-Drankkartons)** *(oranje of gele bak)*:\n• Plastic flessen + verpakkingen *(zonder statiegeld)*.\n• Blikjes *(soep, frisdrank)*.\n• Pak melk/sap *(Tetrapak)*.\n• Aluminium folie.\n• **Wordt gesorteerd** in fabriek + apart gerecycled.\n\n**🟥 Restafval** *(grijze of zwarte bak)*:\n• Wat **niet** in andere bakken kan.\n• Luiers, kattenbakvulling, vuil papier.\n• **Wordt verbrand** in afvalcentrale *(elektriciteit + warmte gemaakt)*.\n• De as (slakken) wordt daarna nog gebruikt in de wegenbouw.\n\n**Speciaal afval**:\n• **KCA** *(Klein Chemisch Afval — gif, verf, batterijen)*: brengen naar **milieustraat** of speciale bak.\n• **Elektrisch afval** *(oude telefoon, koelkast)*: inleveren bij winkel of milieustraat.\n• **Textiel** *(oude kleding)*: in kledingcontainer.\n• **Bouwafval, oud meubilair**: milieustraat *(soms gratis)*.\n\n**Milieustraat / Afvalpunt**:\n• Plek waar je grote/bijzondere zaken brengt.\n• Meestal gemeente-faciliteit.\n• Gratis voor inwoners *(soms tegen kleine vergoeding)*.\n\n**Statiegeld**:\n• **€0,10-€0,25** per glazen flesje bier/fris.\n• **€0,25** voor grote en **€0,15** voor kleine plastic flessen *(kleine sinds 2021)*.\n• **€0,15** voor blikjes *(sinds 2023)*.\n• Inleveren bij supermarkt → terug krijgen.\n• **Beste recycling** — kwaliteit blijft hoog.\n\n**Waarom is afval scheiden belangrijk?**\n• **Minder grondstoffen** nodig.\n• **Minder CO₂** uitstoot.\n• **Minder vervuiling** *(geen plastic in zee)*.\n• **Geld besparen** *(grondstoffen zijn duur)*.\n• **Aarde voor toekomst** bewaren.\n\n**NL is goed!**\n• 64% van NL-afval wordt gerecycled *(EU-top)*.\n• Doel 2030: 75%.\n• Duitsland: 67% — wij staan iets erachter.\n\n**Toets-feitje**:\n**1 ton papier** recyclen bespaart: **17 bomen** + 26.000 L water + 4100 kWh energie. Gooi je oude **schoolschriften** dus in de papierbak — dat helpt!",
    checks: [
      {
        q: "Hoeveel **afval** maakt gemiddelde Nederlander per jaar?",
        options: ["~480 kg", "10 kg", "10.000 kg", "100 kg"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Onmogelijk.", "Te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "480 kg per jaar = veel!", tekst: "Een gemiddelde Nederlander maakt ongeveer **480 kg afval per jaar** (2024). Dat is ruim **1,3 kg PER DAG** — bijna zoveel als een grote fles cola!" },
            { titel: "Waar komt het vandaan?", tekst: "• **Verpakkingen** (plastic, karton)\n• **Voedselresten** (~38 kg per jaar wordt zelfs WEGGEGOOID = verspilling)\n• **Tuinafval**\n• **Wegwerp-producten** (luiers, tissues)\n• **Kleding + meubels die je weggooit**." },
            { titel: "Wat doe je ermee?", tekst: "Door **goed te scheiden** (GFT/PMD/papier/glas) kun je veel hergebruiken. NL recyclet 64% — EU-top! Doel 2030: 75%. Helpt: minder afval, minder grondstof-gebruik, minder CO₂." },
          ],
          woorden: [
            { woord: "afval", uitleg: "Wat we weggooien." },
            { woord: "voedselverspilling", uitleg: "Eten dat weggegooid wordt (~38 kg per persoon NL)." },
          ],
          theorie: "Toets-feit afval-cijfers:\n• **480 kg** per NL'er per jaar.\n• **~1,3 kg** per dag.\n• **64%** wordt gerecycled.\n• **38 kg** voedsel wordt verspild per persoon.\nGetallen om te kennen voor Doorstroomtoets.",
          voorbeelden: [
            { type: "stap", tekst: "10 kg = onmogelijk (alleen verpakkingen al meer)." },
            { type: "stap", tekst: "10.000 kg = onmogelijk (=10 ton, = ~7 auto's per persoon)." },
            { type: "stap", tekst: "100 kg = te weinig (een gemiddeld gezin van 4 = 4×480 = ~2000 kg!)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Onthoud: ~480 kg per jaar = ~1,3 kg per dag. Beide cijfers handig om te weten." }],
          niveaus: {
            basis: "~480 kg per jaar.",
            simpeler: "Een Nederlander maakt elke dag ~1,3 kg afval, dat is 480 kg per jaar.",
            nogSimpeler: "480 kg",
          },
        },
      },
      {
        q: "Wat hoort in **GFT-bak**?",
        options: ["Schillen", "Plastic", "Glas", "Batterijen"],
        answer: 0,
        wrongHints: [null, "PMD.", "Glasbak.", "KCA."],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent GFT?", tekst: "**GFT** = afkorting voor **Groente, Fruit en Tuin**afval. Dit is afval dat KAN ROTTEN — biologisch materiaal." },
            { titel: "Wat hoort erin?", tekst: "Schillen (banaan, appel), groente-resten, koffiedik, theezakjes, eierschalen, gras, bladeren, takjes. Allemaal dingen die uit de natuur komen en kunnen verteren." },
            { titel: "Wat wordt ermee gedaan?", tekst: "GFT wordt naar een **composteerinstallatie** gebracht. Daar wordt het door bacteriën omgezet in **compost** (zwarte vruchtbare aarde). Die compost wordt gebruikt door boeren en in tuinen." },
          ],
          woorden: [
            { woord: "GFT", uitleg: "Groente, Fruit en Tuin-afval." },
            { woord: "compost", uitleg: "Verteerde GFT-resten = vruchtbare aarde." },
            { woord: "PMD", uitleg: "Andere bak: Plastic, Metaal, Drankkartons." },
          ],
          theorie: "Toets-tip afvalscheiding NL: GFT (rot), PMD (plastic+metaal+drank), papier, glas, restafval. Sommige gemeenten ook batterijen + chemisch afval (KCA). Goed scheiden = minder restafval = goedkoper + groener.",
          voorbeelden: [
            { type: "stap", tekst: "Bananenschil → GFT. Plastic verpakking → PMD. Glasflesje → glasbak." },
            { type: "stap", tekst: "Niet in GFT: kattengrit, luiers, plastic zakken (ook 'biologisch afbreekbare'). Vlees- en visresten mogen in Nederland wél in de GFT-bak." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "GFT = uit natuur = kan rotten. Plastic + glas + metaal = niet in GFT (rotten niet)." }],
          niveaus: {
            basis: "GFT = Groente, Fruit, Tuin — biologisch afval.",
            simpeler: "Schillen + tuinafval = GFT (wordt compost).",
            nogSimpeler: "Wat kan rotten = GFT.",
          },
        },
      },
      {
        q: "Wat is **statiegeld**?",
        options: ["Geld terug bij inleveren van een fles", "Belasting op flessen", "Boete voor zwerfafval", "Korting bij de kassa"],
        answer: 0,
        wrongHints: [null, "Belasting krijg je nooit terug.", "Je krijgt geen straf.", "Je betaalt juist eerst extra."],
        uitlegPad: {
          stappen: [
            { titel: "Statiegeld = bewaard geld", tekst: "**Statiegeld** is geen belasting + geen boete + geen extra kosten. Het is **JOUW eigen geld** dat tijdelijk bij de fles 'in bewaring' staat. Bij **inleveren** krijg je het terug." },
            { titel: "Bedragen in NL (2024)", tekst: "• **Plastic fles tot en met 1 liter**: €0,15\n• **Plastic fles groter dan 1 liter**: €0,25\n• **Glasfles bier**: €0,10\n• **Glasfles statiegeld-frisdrank**: €0,25-1,00\n• **Blikje** (sinds 2023): €0,15" },
            { titel: "Waarom werkt het?", tekst: "Mensen leveren flessen + blikjes IN (om hun geld terug te krijgen) ipv weg te gooien. Resultaat: **minder zwerfafval** + **meer recycling**. Sinds het blikjes-statiegeld liggen er flink minder blikjes in de natuur." },
          ],
          woorden: [
            { woord: "statiegeld", uitleg: "Bedrag op fles/blikje, terug bij inleveren." },
            { woord: "zwerfafval", uitleg: "Afval dat in natuur/op straat ligt." },
          ],
          theorie: "Toets-feit statiegeld:\n• Bedoeld voor **minder afval** + **meer recycling**.\n• Bij Albert Heijn / Jumbo / Plus / etc. inleveren via automaat.\n• Bij groot evenement: vaak 'statiegeld' op bekers → terug bij teruggave.\n• Net als pinpas — JIJ haalt geld op.",
          voorbeelden: [
            { type: "stap", tekst: "Je koopt 6 grote colaflessen × €0,25 statiegeld = €1,50 extra betaald. Lege flessen inleveren = €1,50 terug." },
            { type: "stap", tekst: "Niet verwarren met **belasting** (geld AF naar overheid) of **boete** (straf). Statiegeld = jouw geld in bewaring." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Statiegeld = jouw geld bewaard bij fles. Inleveren = terug. Niet vergeten — gratis geld!" }],
          niveaus: {
            basis: "Statiegeld = geld terug bij inleveren fles/blikje.",
            simpeler: "Je betaalt extra bij koop. Lege fles terugbrengen = geld terug.",
            nogSimpeler: "Inleveren = geld terug",
          },
        },
      },
      {
        q: "Hoeveel **% NL-afval** wordt gerecycled?",
        options: ["~64%", "10%", "100%", "1%"],
        answer: 0,
        wrongHints: [null, "Veel meer.", "Onmogelijk.", "Veel meer."],
      },
    ],
  },
  {
    title: "Recyclen + hergebruik + circulaire economie",
    explanation:
      "**Drie R's** *(traditioneel)*:\n• **Reduce** — minder gebruiken.\n• **Reuse** — opnieuw gebruiken.\n• **Recycle** — opnieuw maken.\n\n**Ladder van Lansink** *(NL-afvalbeleid)*:\n1. **Voorkomen** *(geen afval maken)*.\n2. **Hergebruiken** *(zelfde object, andere keer)*.\n3. **Recyclen** *(materiaal opnieuw)*.\n4. **Energie winnen** *(verbranden = elektriciteit)*.\n5. **Storten** *(laatste optie, slechtste)*.\n\nHoe hoger = beter voor milieu.\n\n**Voorkomen** *(beste!)*:\n• **Geen extra plastic-zakken** — neem eigen.\n• **Geen 'wegwerp'-artikelen** *(plastic-rietje, plastic-bestek)*.\n• **Bulk-koop** *(minder verpakking)*.\n• **Korter douchen** — minder water.\n• **Niet te veel eten kopen** — voedselverspilling tegengaan.\n\n**Hergebruiken** *(2e beste)*:\n• **Tweedehands kleding kopen** *(Kringloopwinkel, Vinted)*.\n• **Repareren** ipv weggooien *(repair-café in dorp)*.\n• **Glazen flessen** opnieuw vullen.\n• **Doorgeven** *(speelgoed, boeken aan buren/familie)*.\n• **Marktplaats** of **doneer**.\n\n**Recyclen**:\n• Materiaal opnieuw gebruiken voor iets nieuws.\n• Voorbeelden:\n  - Plastic fles → fleecetrui.\n  - Glas → nieuw glas.\n  - Papier → nieuw papier.\n  - Metaal → nieuwe metalen voorwerpen.\n• **Niet 100% efficiënt** — kost energie + vaak kwaliteit-verlies.\n• Daarom: **eerst voorkomen + hergebruiken**.\n\n**Energie winnen**:\n• Wat overblijft → **afvalcentrale**.\n• **Verbranden bij hoge temperatuur** *(1200°C+)*.\n• Warmte gebruikt voor:\n  - Elektriciteit produceren.\n  - Stadsverwarming *(warmtenet)*.\n• ~1 ton afval = ~600 kWh elektriciteit.\n• Restproduct = **slak** *(asfalt + bouwmaterialen)*.\n\n**Storten** *(slechtste)*:\n• Op stortplaats stoppen.\n• In NL **bijna nooit meer** *(< 2%)*.\n• In sommige landen veel.\n• Probleem: gas + lekkage.\n\n**Circulaire economie** ♻️:\n\n**Traditioneel = lineair**:\nGrondstof → product → afval *(weggegooid)*.\n\n**Circulair**:\nGrondstof → product → gebruik → opnieuw grondstof → nieuw product → ...\n\nDoel: **niets gaat verloren**, alles wordt opnieuw gebruikt.\n\n**Voorbeelden circulair denken**:\n• **Auto's gehuurd** ipv gekocht *(Mywheels, Greenwheels)*.\n• **Refurbished telefoons** *(opgeknapt)*.\n• **Tassen van zee-plastic** *(Bottletop, Adidas)*.\n• **Tweedehands meubilair** *(Ikea-tweedehands-platform)*.\n\n**NL-bedrijven die circulair zijn**:\n• **Fairphone** *(modulaire telefoon — uit elkaar te halen)*.\n• **Mud Jeans** *(spijkerbroek-huren)*.\n• **PHILIPS** *(licht als dienst: bedrijven huren licht)*.\n• **Tony's Chocolonely** *(eerlijke chocolade, zonder slavernij)*.\n\n**Voedselverspilling** 🍅:\n• ~30% van wereld-voedsel wordt weggegooid.\n• In NL: ~38 kg per persoon per jaar.\n• Tips:\n  - **Lijstje** maken voor boodschappen.\n  - **Restjes opeten**.\n  - **THT (Tenminste Houdbaar Tot)** ≠ gevaar *(meestal nog goed te eten).*\n  - **Te Goed Om Weg Te Gooien** apps *(Too Good To Go)*.\n\n**Toets-feitje**:\nDe **eerste glasbak in NL** kwam in **1972**. Daarvoor ging glas in de vuilniszak. Inmiddels 11.000+ glasbakken in NL. 90% van glas wordt gerecycled — een succes!",
    checks: [
      {
        q: "Wat is **beste optie** in Ladder van Lansink?",
        options: ["Voorkomen", "Recyclen", "Verbranden", "Storten"],
        answer: 0,
        wrongHints: [null, "Goed, maar niet het allerbeste.", "Niet primair.", "Slechtste."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is de Ladder van Lansink?", tekst: "Een **rangorde** voor afval-aanpak, bedacht door politicus **Ad Lansink** in 1979. Van **beste** (boven) naar **slechtste** (onder)." },
            { titel: "De rangorde (boven = best)", tekst: "1) **Voorkomen** (geen afval). 2) **Hergebruiken** (zelfde product opnieuw). 3) **Recyclen** (materiaal hergebruiken). 4) **Verbranden** (energie eruit). 5) **Storten** (op vuilnisbelt — slechtste)." },
            { titel: "Beste = niet maken", tekst: "Het ALLERBESTE is: geen afval MAKEN. Bijvoorbeeld: geen plastic zakje pakken bij winkel = geen plastic afval. Beter dan recyclen — dat kost ook energie." },
          ],
          woorden: [
            { woord: "Ladder van Lansink", uitleg: "NL-rangorde voor afval-aanpak (1979)." },
            { woord: "preventie", uitleg: "Voorkomen = beste optie." },
          ],
          theorie: "Toets-tip afval-hiërarchie: PREVENTIE > HERGEBRUIK > RECYCLEN > VERBRANDEN > STORTEN. Onthoud volgorde. Politiek + bedrijven gebruiken dit nog steeds.",
          voorbeelden: [
            { type: "stap", tekst: "Eigen drinkfles gebruiken (preventie) is beter dan plastic flesje kopen + recyclen (recycle stap 3)." },
            { type: "stap", tekst: "Tweedehands kleding kopen = hergebruik (stap 2) = beter dan oude kleding wegdoen + nieuwe kopen." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Hoog = goed. 'Voorkomen' staat hoogst op de ladder. Recyclen pas op #3." }],
          niveaus: {
            basis: "Beste = voorkomen (geen afval maken). Slechtste = storten.",
            simpeler: "Niet maken > hergebruiken > recyclen > verbranden > storten.",
            nogSimpeler: "Voorkomen is best.",
          },
        },
      },
      {
        q: "Wat is **circulaire economie**?",
        options: ["Alles steeds opnieuw gebruiken", "Een bedrijf met een rond gebouw", "Handel tussen alle landen", "Alles na één keer weggooien"],
        answer: 0,
        wrongHints: [null, "Het gaat niet om de vorm van een gebouw.", "Dat heet wereldhandel.", "Dat is juist lineair: het tegenovergestelde."],
      },
      {
        q: "Wat is **THT-datum**?",
        options: ["Datum waarna het vaak nog goed is", "Datum waarna het direct ongezond is", "Datum waarop het gemaakt is", "Datum waarop de winkel opengaat"],
        answer: 0,
        wrongHints: [null, "Dat geldt eerder voor TGT (Te Gebruiken Tot).", "Dat is niet wat THT betekent.", "Dat heeft niets met eten te maken."],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent THT?", tekst: "**THT** = **Tenminste Houdbaar Tot**. Dat is een datum die zegt: TOT deze datum garandeert de fabrikant dat het product GOED is. NA die datum: vaak NOG STEEDS OK, maar zonder garantie." },
            { titel: "Niet meteen weggooien!", tekst: "Veel mensen gooien automatisch weg na THT-datum. Maar voor veel producten (pasta, rijst, blikvoer, chocola, koekjes) is het nog **weken/maanden** OK. RUIK + KIJK + PROEF eerst." },
            { titel: "Verschil met TGT", tekst: "**TGT** = **Te Gebruiken Tot** = STRENGE datum, vooral op vers vlees, kip en vis. Na deze datum WEL gevaar (bacteriegroei). NIET meer eten. THT = vrijblijvend, TGT = strikt." },
          ],
          woorden: [
            { woord: "THT", uitleg: "Tenminste Houdbaar Tot — vrijblijvende datum." },
            { woord: "TGT", uitleg: "Te Gebruiken Tot — STRIKTE datum (vlees/vis)." },
          ],
          theorie: "Toets-feit voedselverspilling: NL gooit per jaar **~38 kg** voedsel per persoon weg. Veel daarvan door verkeerd lezen van THT-datum. Beter: ruik + proef.",
          voorbeelden: [
            { type: "stap", tekst: "Pakje pasta met THT-datum gisteren = nog gewoon eten. Smaakt OK? Eet maar." },
            { type: "stap", tekst: "Vlees met TGT-datum gisteren = WEGGOOIEN. Risico bacteriën." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "T**H**T = **H**oudbaar (kijk, ruik, proef). T**G**T = **G**ebruiken vóór die datum (daarna weg)." }],
          niveaus: {
            basis: "THT = Tenminste Houdbaar Tot — vaak na datum nog OK.",
            simpeler: "THT = vrijblijvend. Ruik + proef. TGT = vlees/vis = strikt.",
            nogSimpeler: "Na THT vaak nog goed.",
          },
        },
      },
      {
        q: "Welk deel van al het **voedsel in de wereld** wordt weggegooid?",
        options: ["~30%", "1%", "90%", "Niet"],
        answer: 0,
        wrongHints: [null, "Veel meer.", "Niet zo erg.", "Wel."],
      },
    ],
  },
  {
    title: "Plastic + plastic-soup + oceanen",
    explanation:
      "**Plastic** = synthetisch *(door mens gemaakt)* materiaal van **olie**.\n\n**Voordelen plastic**:\n• Goedkoop.\n• Licht.\n• Sterk.\n• Veelzijdig *(allerlei vormen)*.\n• Hygiënisch *(verpakking)*.\n\n**Nadelen**:\n• **Vergaan langzaam** *(plastic fles = 450 jaar)*.\n• **Microplastic** *(<5 mm)* = overal in water, voedsel, lucht.\n• **Plastic-soup** in oceanen.\n• Maken kost veel olie *(fossiel)*.\n• Verbranden geeft CO₂.\n\n**Soorten plastic** *(7 codes)*:\n• Driehoekje met getal binnen op verpakking.\n• 1 = PET *(flessen, makkelijk recyclebaar)*.\n• 2 = HDPE *(stevig, melkflessen)*.\n• 3 = PVC *(buizen, niet recyclen).*\n• 4 = LDPE *(boodschappentas, folie)*.\n• 5 = PP *(yoghurt-beker, deksel)*.\n• 6 = PS *(bakje, polystyreen — niet recyclen)*.\n• 7 = Anders *(mix, moeilijk)*.\n\n**Hoe lang duurt vergaan?**\n• **Bananenschil**: 1 maand.\n• **Karton**: 2-5 maanden.\n• **Sigarettenfilter**: 10-12 jaar.\n• **Plastic-zak**: 10-20 jaar.\n• **Aluminium-blikje**: 80-200 jaar.\n• **Plastic fles**: 450 jaar.\n• **Glazen fles**: **1 miljoen jaar** *(maar wel breekbaar)*.\n• **Plastic luier**: 450 jaar.\n• **Piepschuim**: 500+ jaar.\n\n**Plastic-soup** in zeeën 🌊:\n\n**Wat is het?**\n• Plastic-resten drijven in oceaan.\n• 5 grote 'gyres' *(draaikolken)* verzamelen plastic.\n• **Great Pacific Garbage Patch**: zo groot als Frankrijk × 3 *(1,6 mln km²)*.\n• Niet zoals 'eiland' — meer als verspreide deeltjes.\n\n**Hoeveel plastic in zee?**\n• **8-12 miljoen ton** komt er per jaar bij.\n• Een groot deel komt via **rivieren** *(vooral in Azië)*.\n• Totaal: ~150 miljoen ton plastic in oceaan al.\n\n**Schade**:\n• **Dieren eten plastic** — vol maag.\n• Walvissen, zeeschildpadden, vogels gestikt.\n• **Microplastic in vis** → terug in mens.\n• Recente studies: microplastic in **mens-bloed** + **moeder-melk**.\n\n**Boyan Slat + The Ocean Cleanup** 🇳🇱:\n\n**Wie?**\n• Nederlander, geboren 1994.\n• Op zijn 16e kreeg hij het idee: 'Waarom ruimen we het plastic niet op?'\n• Op zijn 18e richtte hij **The Ocean Cleanup** op.\n\n**Hoe?**\n• **Systeem 03**: U-vormige drijflijn op zee.\n• Twee schepen slepen — gebruiken stromingen.\n• Vangt plastic-deeltjes vanaf 1 cm.\n• Plastic gerecycled tot zonnebril ($199).\n\n**Resultaten**:\n• Sinds 2021 actief op Pacific.\n• **Al heel veel plastic** opgehaald — de teller loopt elk jaar op.\n• Doel: 90% wereldwijd plastic in oceaan weg tegen 2040.\n\n**Andere oplossingen**:\n• **River Interceptors**: bij rivier-mond plastic vangen.\n• Actief in o.a. Indonesië + Maleisië + Dominicaanse Republiek.\n• Stopt plastic voordat het zee bereikt.\n\n**Wat KUN JIJ doen?**\n\n• **Geen plastic-zakken** — neem **stof-tas**.\n• **Eigen waterfles** — geen wegwerp.\n• **Bamboe-tandenborstel** *(natuurlijk)*.\n• **Vermijd microbeads** in cosmetica.\n• **Schoonmaak strand** *(beach-clean-up)*.\n• **Plogging** *(rennen + opruimen)*.\n• **Repareren** ipv vervangen.\n• **Tweedehands** kopen.\n• **Praat erover** + inspireer anderen.\n\n**Klimaatactivisten** *(jong)*:\n• **Greta Thunberg** *(Zweeds, 2003+)*: 'Fridays for Future', spreekt op VN.\n• **Vanessa Nakate** *(Oeganda)*.\n• **Xiye Bastida** *(Mexico/VS)*.\n\n**Toets-feitje**:\nEen **glazen fles** kan **1 miljoen jaar** in milieu blijven — maar wel **eindeloos recyclebaar**. Een **plastic fles** vergaat 'maar' 450 jaar — maar **kwaliteit zakt** elke keer dat hij gerecycled wordt *(downcycling)*. Glas wint!",
    checks: [
      {
        q: "Hoe lang duurt **plastic fles vergaan**?",
        options: ["~450 jaar", "1 maand", "10 jaar", "~50 jaar"],
        answer: 0,
        wrongHints: [null, "Bananenschil.", "Plastic-tas.", "Veel langer — het duurt eeuwen."],
        uitlegPad: {
          stappen: [
            { titel: "Plastic vergaan = HEEL traag", tekst: "Een plastic fles in natuur (zee, bos, weg) duurt **~450 jaar** voor het volledig vergaan is. Tegen die tijd leven jij en je achter-achterkleinkinderen al lang niet meer!" },
            { titel: "Vergelijking vergaantijden", tekst: "Andere afvalsoorten:\n• **Bananenschil**: 1 maand\n• **Karton**: 2-5 maanden\n• **Sigaret-filter**: 10-12 jaar\n• **Plastic zak**: 10-20 jaar\n• **Aluminium blikje**: 80-200 jaar\n• **Plastic fles**: **450 jaar**\n• **Piepschuim**: 500+ jaar\n• **Glazen fles**: 1 miljoen jaar (maar 100% recyclebaar)." },
            { titel: "Daarom recyclen", tekst: "Plastic in natuur veroorzaakt **plastic-soup** in oceanen — 8-12 miljoen ton per jaar erbij. Dieren eten het en sterven. Recyclen + minder gebruiken = enige oplossing." },
          ],
          woorden: [
            { woord: "vergaan", uitleg: "Volledig afbreken door natuur." },
            { woord: "plastic-soup", uitleg: "Plastic-deeltjes drijvend in oceanen." },
            { woord: "microplastic", uitleg: "Kleine stukjes plastic (<5 mm) door afgebroken plastic." },
          ],
          theorie: "Toets-feit plastic-vergaan:\n• Plastic vergaat **niet** echt — breekt in steeds kleinere stukjes (microplastic).\n• Die microplastics zitten nu in **mens-bloed + moedermelk + voedsel**.\n• Eens gemaakt = altijd ergens.\n• Daarom: voorkomen > recyclen > weggooien.",
          voorbeelden: [
            { type: "stap", tekst: "Plastic fles uit 1970 zou nu in 2026 = 56 jaar oud = nog ~400 jaar te gaan voor totaal vergaan." },
            { type: "stap", tekst: "Bananenschil zelf wegrollen in bos = na 1 maand weg. Plastic flesje = jouw achter-achter-achterkleinkinderen vinden 't nog terug." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Plastic = ~450 jaar. Onthoud dit shock-cijfer. Helpt om bewust te kiezen voor minder plastic." }],
          niveaus: {
            basis: "~450 jaar.",
            simpeler: "Een plastic fles in natuur duurt 450 jaar voor afgebroken — 4 eeuwen!",
            nogSimpeler: "450 jaar",
          },
        },
      },
      {
        q: "Wie startte **Ocean Cleanup**?",
        options: ["Boyan Slat", "Verstappen", "Cruijff", "Rutte"],
        answer: 0,
        wrongHints: [null, "F1.", "Voetbal.", "Politicus."],
      },
      {
        q: "Waar ligt het **grootste plastic-eiland**?",
        options: ["Grote Oceaan", "Atlantische Oceaan", "Indische Oceaan", "NL kust"],
        answer: 0,
        wrongHints: [null, "Wel deel maar niet grootst.", "Ook deel.", "Niet."],
      },
      {
        q: "**Tips** om plastic te verminderen?",
        options: ["Stoffen tas en eigen waterfles", "Meer plastic", "Niets doen", "Verbranden"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet.", "Geeft CO₂."],
      },
    ],
  },
  {
    title: "Eind-toets — duurzaam mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      { q: "Wat hoort in **GFT-bak**?", options: ["Schillen", "Plastic", "Glas", "Batterij"], answer: 0, wrongHints: [null, "PMD.", "Glasbak.", "KCA."] },
      { q: "Wat is **statiegeld** op een grote plastic fles (meer dan 1 liter)?", options: ["€0,25", "Niks", "€10", "€1"], answer: 0, wrongHints: [null, "Wel.", "Te veel.", "Te veel."] },
      { q: "**Beste optie** Ladder van Lansink?", options: ["Voorkomen", "Verbranden", "Storten", "Recyclen"], answer: 0, wrongHints: [null, "Slecht.", "Slechtste.", "Goed maar niet beste."] },
      { q: "**Plastic fles** vergaat in?", options: ["~450 jr", "1 maand", "10 dagen", "~50 jr"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Veel langer — eeuwen."] },
      { q: "Wie startte **Ocean Cleanup**?", options: ["Boyan Slat", "Verstappen", "Cruijff", "Geen NL'er"], answer: 0, wrongHints: [null, "F1.", "Voetbal.", "Wel NL!"] },
      { q: "Wat is **circulaire economie**?", options: ["Alles steeds opnieuw gebruiken", "Een autobedrijf", "Een rond geldstuk", "Alles na één keer weggooien"], answer: 0, wrongHints: [null, "Niet primair.", "Het gaat niet om de vorm van geld.", "Dat is juist lineair."] },
      {
        q: "Wat hoort in **PMD-bak** (Plastic, Metaal, Drankkartons)?",
        options: ["Een leeg melkpak", "Een appelschil", "Een oude krant", "Een lege batterij"],
        answer: 0,
        wrongHints: [null, "Dat is groente/fruit-afval (groene bak).", "Papier = papierbak (blauw of papierwagen).", "Batterijen = KCA, supermarkt-inzameling."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is PMD?", tekst: "**PMD** staat voor:\n• **P** = **Plastic** verpakkingen (flesjes shampoo, yoghurtbakje, plastic zak)\n• **M** = **Metaal** verpakkingen (soepblik, drinkblikje, deksels)\n• **D** = **Drankkartons** (melk, sap, soms soep)\n\nVroeger waren plastic + blik aparte bakken — sinds 2014 in NL samen in **oranje PMD-bak** (sommige gemeenten gebruiken zakken)." },
            { titel: "Wat hoort NIET in PMD?", tekst: "• **Plastic dat geen verpakking is** (tuinstoel, emmer) → milieustraat of restafval\n• **Plastic speelgoed** → kringloop of restafval\n• **Plastic kledinghanger** → restafval\n• **Plastic met etensresten** → restafval (vies)\n• **Piepschuim** → soms PMD, soms restafval (gemeente-afhankelijk)\n• **Tube** met tandpasta → restafval (vermengd metaal/plastic)" },
            { titel: "Toets-feit: NL afvalsysteem", tekst: "Nederland heeft **5-7 afvalbakken** per huis (gemeente verschilt):\n• **Grijs** = restafval\n• **Groen / GFT** = groente/fruit/tuin\n• **Oranje / PMD** = plastic/metaal/drank\n• **Blauw** = papier + karton\n• **Glasbak** (in wijk)\n• **Textielcontainer** (in wijk)\n• **KCA** = klein chemisch afval (verf, batterijen — supermarkt of milieustraat)\n\nNL recyclet een groot deel van de plastic flessen en het glas." },
          ],
          woorden: [
            { woord: "PMD", uitleg: "Plastic + Metaal + Drankkartons. Sinds 2014 samen in oranje bak." },
            { woord: "KCA", uitleg: "Klein Chemisch Afval. Batterijen, verf, medicijnen, olie. Niet in restafval." },
            { woord: "milieustraat", uitleg: "Inzamelplek voor groot afval + KCA. Elke gemeente heeft minstens 1." },
            { woord: "scheidingspercentage", uitleg: "Hoeveel % afval correct gescheiden wordt. NL: ruim 60%." },
          ],
          theorie: "**Volgorde van afval-verwerking** (NL beleid):\n1. **Recyclen** — beste verwerking, na voorkomen en hergebruiken (PMD/papier/glas/GFT)\n2. **Verbranden met energiewinning** — restafval naar afvalenergiecentrale (AEC), wekt elektriciteit op\n3. **Storten** — slechtste optie, alleen wat anders niet kan\n\nNL stort minder dan 1% van afval — een van de laagste percentages in EU.",
          voorbeelden: [
            { type: "feit", tekst: "Plastic uit de PMD-bak kan een paar keer gerecycled worden voordat het te zwak wordt." },
            { type: "feit", tekst: "Wist je: 1 kg plastic recyclen bespaart 2 kg CO₂ vs nieuwe plastic maken." },
          ],
          basiskennis: [{ onderwerp: "Niet vies", uitleg: "Spoel PMD-spullen LICHT — niet super schoon nodig. Wel zo droog mogelijk (geen yoghurt-resten)." }],
          niveaus: { basis: "Plastic + metaal + drankkartons.", simpeler: "PMD-bak = Plastic verpakkingen + Metaal (blikjes) + Drankkartons (melk/sap). Alles wat van plastic, blik, of kartonnen drinkpak is.", nogSimpeler: "Plastic/blik/melkpak" },
        },
      },
      {
        q: "Wat zijn **microplastics**?",
        options: ["Heel kleine stukjes plastic", "Dunne plastic tasjes", "Plastic dat snel vergaat", "Grote drijvende plastic eilanden"],
        answer: 0,
        wrongHints: [null, "Een tasje is veel groter — let op het woord 'micro'.", "Plastic vergaat juist heel langzaam.", "'Micro' betekent juist klein."],
        uitlegPad: {
          stappen: [
            { titel: "Wat zijn microplastics?", tekst: "**Microplastics** = plastic-deeltjes **kleiner dan 5 millimeter**. Nog kleiner heten **nanoplastics**.\n\n**Waar komen ze vandaan?**\n• **Afgebroken plastic-flessen** in zee (verteren niet, breken in stukjes)\n• **Autobanden** slijten = plastic-stof in straten + lucht\n• **Synthetische kleding** in wasmachine (polyester, fleece)\n• **Microbeads** in oude cosmetica (in NL uitgefaseerd sinds 2018, EU-verbod sinds 2023)\n• **Verf + lakken** die afbrokkelen" },
            { titel: "Waarom probleem?", tekst: "Microplastics zitten **OVERAL**:\n• **In zee** — vissen eten ze (en wij eten dan de vis)\n• **In drinkwater** — onderzoek 2017: ~83% wereld-kraanwater bevat plastic\n• **In zout, suiker, bier**\n• **In ons lichaam** — wetenschappers vonden microplastics in bloed (2022), placenta, longen\n\nGevolg voor gezondheid nog onbekend — onderzoek loopt." },
            { titel: "Toets-feit: NL-actie + Ocean Cleanup", tekst: "**NL acties tegen microplastics**:\n• **Microbeads** verbod (was in cosmetica, scrub-zalf — uitfaseren 2018-)\n• **Verbod op gratis plastic tasjes** sinds 2016\n• **Statiegeld** op blikjes (vanaf 2023) — minder zwerfvuil\n• **The Ocean Cleanup** (Boyan Slat, NL!) — interceptors in rivieren VÓÓR het plastic in zee komt\n• **EU SUP-richtlijn** — verbod op single-use plastic (rietjes, bestek)\n\nElk beetje minder plastic = minder microplastics op lange termijn." },
          ],
          woorden: [
            { woord: "microplastic", uitleg: "Plastic kleiner dan 5 mm. Niet biologisch afbreekbaar." },
            { woord: "nanoplastic", uitleg: "Plastic kleiner dan 1 micrometer (duizenden keren kleiner dan microplastic). Onzichtbaar." },
            { woord: "biologisch afbreekbaar", uitleg: "Materiaal dat door bacteriën vergaat. Plastic = NIET (alleen breken in kleinere stukjes)." },
          ],
          theorie: "Hoe lang doet plastic erover om af te breken?\n• **Plastic fles** — ~450 jaar (alleen breken in microplastic, niet weg)\n• **Plastic tas** — 10-1.000 jaar\n• **Plastic rietje** — 200 jaar\n• **Sigarettenpeuk** — 10-12 jaar (met filter)\n• **Touw** — 600 jaar\n\nVergelijk: papier 2-6 weken, appel-klokhuis 2 maanden, ijzer 50-100 jaar.",
          voorbeelden: [
            { type: "feit", tekst: "Een veelgenoemde schatting (2019) is tot 5 gram microplastic per week (~1 creditcard); andere onderzoekers denken dat het veel minder is." },
            { type: "feit", tekst: "WHO + EU onderzoeken nu gezondheidseffecten. Voorzorgsprincipe: zoveel mogelijk vermijden." },
          ],
          basiskennis: [{ onderwerp: "Niet zichtbaar", uitleg: "Microplastics zijn met blote oog vaak niet zichtbaar. Specialistische microscopen nodig." }],
          niveaus: { basis: "Kleine plastic-deeltjes.", simpeler: "Microplastics zijn plastic-stukjes kleiner dan 5 mm. Komen van afgebroken plastic-flessen, autobanden, kleding-wasbeurt. Zitten in zee + ons drinkwater + zelfs ons bloed.", nogSimpeler: "Klein plastic" },
        },
      },
      {
        q: "Welke **3 R's** vormen de basis van duurzaamheid?",
        options: ["Reduce, Reuse, Recycle", "Rust, Reizen, Rennen", "Regen, Rivier, Rots", "Rood, Rond, Ruw"],
        answer: 0,
        wrongHints: [null, "Heeft niets met afval te maken.", "Dat zijn natuurwoorden, geen afvalregels.", "Dat zijn kenmerken van dingen, geen afvalregels."],
        uitlegPad: {
          stappen: [
            { titel: "De 3 R's", tekst: "De **3 R's van duurzaamheid** zijn (Engels, internationaal gebruikt):\n\n1. **REDUCE** (verminder) — beste! Koop minder spullen, eet minder vlees, gebruik minder energie.\n2. **REUSE** (hergebruik) — gebruik tweedehands, navulbare flesjes, repareer kleding.\n3. **RECYCLE** — wat overblijft = laat het verwerken tot nieuwe grondstof.\n\n**Volgorde belangrijk**: REDUCE = beste. RECYCLE = pas als REDUCE + REUSE niet kan." },
            { titel: "Voorbeelden in dagelijks leven", tekst: "**Reduce**:\n• Geen plastic tasje (eigen tas mee)\n• Vegetarisch eten 1× per week\n• Kortere douche\n• Geen pakketje bestellen voor 1 item\n\n**Reuse**:\n• Glazen pot voor lunch (geen aluminiumfolie)\n• Tweedehands kleding (Vinted, kringloop)\n• Repareer broek met gat\n• Compost voor tuin\n\n**Recycle**:\n• PMD/papier/glas scheiden\n• Oude telefoon naar inzamelpunt (kostbare grondstoffen)\n• Kerstboom naar gemeente" },
            { titel: "Toets-feit: 5R's of 7R's", tekst: "Sommige variatie:\n• **3R's** klassiek (Reduce-Reuse-Recycle)\n• **5R's** modern: + **Refuse** (weigeren onnodige dingen) + **Rot** (composteren)\n• **7R's** uitgebreid: + Repair + Rethink\n\nVoor de toets op de basisschool: de **3 klassieke R's** zijn voldoende kennis. Engelse woorden onthouden = makkelijk." },
          ],
          woorden: [
            { woord: "duurzaamheid", uitleg: "Iets dat goed is voor mens, milieu, toekomst. Niet alleen NU maar ook OVER 100 jaar." },
            { woord: "Reduce", uitleg: "Engels: verminderen. Minder kopen + verbruiken." },
            { woord: "Reuse", uitleg: "Engels: hergebruiken. Tweede leven voor spullen." },
            { woord: "Recycle", uitleg: "Engels: recyclen. Verwerken tot nieuwe grondstof." },
          ],
          theorie: "Waarom volgorde Reduce > Reuse > Recycle?\n• **Reduce**: kost geen energie (gewoon niet kopen). Beste voor planeet.\n• **Reuse**: weinig energie (alleen tweedehands transport).\n• **Recycle**: KOST WEL energie (smelten, schoonmaken). Beter dan storten, maar niet beter dan reduce.\n\nVerschil:\n• **Recycling** ≠ gratis goed. Plastic recyclen kost veel water + chemicaliën.\n• **Reduce** is altijd beter.",
          voorbeelden: [
            { type: "feit", tekst: "Nederlandse gemiddelde: 1 persoon = ~500 kg afval per jaar. Helft is recyclebaar." },
            { type: "feit", tekst: "1 nieuwe spijkerbroek kost 7.500 liter water. Tweedehands = 0 liter extra. Daarom Vinted/Marktplaats = duurzaam." },
          ],
          basiskennis: [{ onderwerp: "Niet alleen recycle", uitleg: "Veel mensen denken 'als ik recycle is het goed'. Maar Reduce is veel beter — voorkom afval überhaupt." }],
          niveaus: { basis: "Reduce, Reuse, Recycle.", simpeler: "De 3 R's: 1) Reduce = minder kopen, 2) Reuse = tweedehands gebruiken, 3) Recycle = scheiden + verwerken tot nieuwe spullen. Reduce is altijd beste.", nogSimpeler: "Reduce-Reuse-Recycle" },
        },
      },
      { q: "Waar gooi je een **bananenschil** in?", options: ["GFT","Restafval","Plastic","Papier"], answer: 0, wrongHints: [null, "Niet — composteerbaar.", "Niet — geen plastic.", "Niet."] },
      { q: "**PMD** staat voor?", options: ["Plastic + Metaal + Drankkartons","Papier + Magazines + Drukwerk","Plastic + Materiaal + Dozen","Geen afkorting"], answer: 0, wrongHints: [null, "Papier gaat in een eigen bak.", "Bijna — drankkartons, niet dozen.", "Wel — bestaat sinds 2010s."] },
      { q: "In welke bak hoort een **glazen fles**?", options: ["Glasbak","GFT","Plastic","Papier"], answer: 0, wrongHints: [null, "Niet — geen organisch.", "Niet.", "Niet."] },
      { q: "**Statiegeld** krijg je terug bij?", options: ["Inleveren van fles in winkel","Aankoop","Vakantie","Geboorte"], answer: 0, wrongHints: [null, "Niet — bij teruggeven.", "Niet relevant.", "Niet relevant."] },
      { q: "Waar gooi je **oud papier** in?", options: ["Papierbak / oud papier","Restafval","GFT","Glasbak"], answer: 0, wrongHints: [null, "Dan kan het niet meer gerecycled worden.", "Voor groente/fruit/tuin — geen papier.", "Voor glas, niet voor papier."] },
      { q: "Waar breng je een **kapotte koffer** naartoe?", options: ["Grofvuil / milieustraat","Restafval","Plastic","Papier"], answer: 0, wrongHints: [null, "Niet — past niet.", "Niet.", "Niet."] },
      { q: "Welke is **NIET** recyclebaar in standaard bak?", options: ["Vies plastic met etensresten","Schone plastic fles","Glazen pot","Karton"], answer: 0, wrongHints: [null, "Schoon plastic — kan in PMD.", "Hoort in de glasbak.", "Hoort in oud papier."] },
      { q: "Wat is **circulaire economie**?", options: ["Spullen steeds opnieuw gebruiken", "Lineair", "Alles na gebruik verbranden", "Reclame"], answer: 0, wrongHints: [null, "Tegenovergesteld.", "Dan gaan de grondstoffen juist verloren.", "Niet."] },
      { q: "Wat doet een **microplastic** in de zee?", options: ["Vissen eten het, ecosysteem schade","Niets","Verdampt","Voedt vissen"], answer: 0, wrongHints: [null, "Wel.", "Niet.", "Tegenovergesteld."] },
      { q: "**Boyan Slat** is bekend om?", options: ["Plastic uit zee halen", "F1", "Schaatsen", "Politiek"], answer: 0, wrongHints: [null, "Verstappen-territorium.", "Sport, geen milieu-werk.", "Geen politicus — een ondernemer."] },
      { q: "Wat is **composteren**?", options: ["GFT-afval omzetten tot grond", "Plastic recyclen", "Verbranden", "Glas smelten"], answer: 0, wrongHints: [null, "Niet.", "Tegenovergesteld.", "Glas kun je niet composteren."] },
      { q: "Welk symbool zie je op recyclebare verpakkingen?", options: ["3 pijlen-driehoek","Smiley","Dollar","Niet"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Wel."] },
      { q: "Lawaai van een snelweg is welk type **vervuiling**?", options: ["Geluidsvervuiling","Lucht","Water","Bodem"], answer: 0, wrongHints: [null, "Lucht is gassen — geen geluid.", "Water-vervuiling = stoffen in water.", "Bodem-vervuiling = stoffen in grond."] },
      { q: "Wat gebeurt met **restafval** uiteindelijk in NL?", options: ["Verbranden in afvalcentrale","Storten","Recyclen","Lozen in zee"], answer: 0, wrongHints: [null, "Niet meer toegestaan.", "Niet — kan niet meer.", "Verboden."] },
      { q: "Welk **percentage** van NL-afval wordt gerecycled (ongeveer)?", options: ["~60%+","20%","100%","5%"], answer: 0, wrongHints: [null, "Te weinig.", "Onmogelijk.", "Veel te weinig."] },
      { q: "Wat is **duurzaam** kopen?", options: ["Spullen die lang meegaan", "Veel kopen", "Goedkoop", "Mooie kleur"], answer: 0, wrongHints: [null, "Tegenovergesteld.", "Niet altijd.", "Niet relevant."] },
      { q: "Welke afvalsoort wordt **niet** vaak gerecycled?", options: ["Vies/gemengd afval","Glas","Papier","Plastic flessen"], answer: 0, wrongHints: [null, "Glasbak naast supermarkt — recycle-tak.", "Oud papier-bak — apart ingezameld.", "PMD-bak of statiegeld — gerecycled."] },
      { q: "Wat is **upcycling**?", options: ["Van iets ouds iets nieuws/beters maken", "Afval verbranden", "Storten", "Weggooien bij het restafval"], answer: 0, wrongHints: [null, "Dan gaat het juist verloren.", "Tegenovergesteld.", "Dan wordt er niets nieuws van gemaakt."] },
      { q: "Welke soort plastic is **beter** voor milieu?", options: ["Herbruikbaar plastic", "Plastic zakje", "Wegwerp", "Folie"], answer: 0, wrongHints: [null, "1× gebruik — schadelijk voor milieu.", "Eenmalig — belast milieu juist.", "Dunne wegwerp — niet beter."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const recyclenAfvalPo = {
  id: "recyclen-afval-po",
  title: "Recyclen + afval + duurzaam (Doorstroomtoets groep 6-8)",
  emoji: "♻️",
  level: "groep6-8",
  subject: "natuur",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — burgerschap / duurzaamheid",
  prerequisites: [
    { id: "klimaatverandering-aardrijkskunde", title: "Klimaatverandering", niveau: "2F" },
  ],
  intro:
    "Recyclen voor Doorstroomtoets groep 6-8 — afval-soorten (GFT/PMD/glas/papier/restafval) + scheiden (NL 64% recycle, EU-top) + statiegeld + Ladder van Lansink (voorkomen→hergebruiken→recyclen) + circulaire economie + plastic-soup + Boyan Slat / Ocean Cleanup. ~15 min.",
  triggerKeywords: [
    "afval", "recyclen", "recycling",
    "GFT", "PMD", "glasbak", "papier",
    "statiegeld",
    "Ladder van Lansink",
    "circulaire economie",
    "plastic", "plastic-soup", "microplastic",
    "Boyan Slat", "Ocean Cleanup",
    "duurzaamheid",
    "voedselverspilling", "THT",
  ],
  chapters,
  steps,
};

export default recyclenAfvalPo;
