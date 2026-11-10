// 🕵️ Wie is de bedrieger? — woordspel voor 3 tot 12 spelers op één telefoon (Mark, 10 nov 2026).
// Dit is Marks losse spelbestand, vrijwel letterlijk overgenomen: alleen de naam (imposter → bedrieger,
// afspraak 15 sep 2026), drie woorden (druiven, café, darts), een terugknop en twee meetpunten zijn anders.
// Gewone DOM-code, geen React: BedriegerSpel.jsx geeft het element waarin het spel zichzelf tekent.
// Namen van spelers blijven op het toestel (localStorage) en gaan niet mee in de meetpunten.

export function startBedrieger(app, opties) {
  opties = opties || {};
  function meld(naam, extra){ try{ if(opties.meld) opties.meld(naam, extra); }catch(e){} }
  var WORDS = {"Huis": [["radio", "📻", ["Er komt muziek uit", "Je draait aan een knop", "Staat vaak in de keuken of de auto"], 1], ["koelkast", "🧊", ["Het is er koud", "Staat in de keuken", "Er brandt een lichtje als je de deur opent"], 1], ["stofzuiger", "🧹", ["Maakt veel lawaai", "Heeft een lange slang", "Doe je meestal in het weekend"], 1], ["wekker", "⏰", ["Vervelend 's ochtends", "Gaat af", "Zet je de avond ervoor"], 1], ["föhn", "💨", ["Warme lucht", "Staat in de badkamer", "Droogt iets"], 1], ["kussen", "🛏️", ["Zacht", "Ligt op bed of op de bank", "Je legt je hoofd erop"], 1], ["paraplu", "☂️", ["Handig als het regent", "Je klapt hem open", "Heb je nooit bij je als het nodig is"], 1], ["tandenborstel", "🪥", ["Twee keer per dag", "Staat in de badkamer", "Heeft haartjes"], 1], ["bank", "🛋️", ["Daar zak je in weg", "Staat in de woonkamer", "Hier val je op in slaap"], 1], ["kaars", "🕯️", ["Er zit een vlammetje op", "Je blaast hem uit", "Gezellig"], 1], ["televisie", "📺", ["Daar kijk je naar", "Staat of hangt in de woonkamer", "Heeft een afstandsbediening"], 1], ["spiegel", "🪞", ["Je ziet jezelf erin", "Hangt aan de muur", "Kan breken"], 1], ["theepot", "🫖", ["Er zit een tuit aan", "Is warm", "Voor als je gasten hebt"], 1], ["ladder", "🪜", ["Je klimt erop", "Handig bij een klus", "Heeft sporten"], 1], ["deurmat", "🚪", ["Ligt bij de ingang", "Je veegt je voeten erop", "Er staat soms welkom op"], 1], ["gordijn", "🪟", ["Hangt voor het raam", "Je schuift het dicht", "Houdt licht tegen"], 1], ["strijkijzer", "👔", ["Het is heet", "Tegen kreukels", "Hoort bij een plank"], 1], ["wasmachine", "🧺", ["Draait rondjes", "Is altijd vol", "Sokken verdwijnen erin"], 1], ["lamp", "💡", ["Geeft licht", "Je klikt hem aan", "Kan doorbranden"], 1], ["brandblusser", "🧯", ["Hoop dat je hem nooit nodig hebt", "Is rood", "Hangt vaak op een gang"], 1], ["pan", "🍳", ["Staat op het vuur", "Heeft een steel", "Daar bak je iets in"], 1], ["wc-rol", "🧻", ["Hangt in het toilet", "Is snel op", "Je trekt er een stuk af"], 1], ["bezem", "🧹", ["Voor vegen", "Lange steel", "Heks heeft er één"], 1], ["emmer", "🪣", ["Voor water", "Heeft een hengsel", "Bij het soppen"], 1], ["kast", "🗄️", ["Daar zit je spullen in", "Heeft deuren of laden", "Staat tegen de muur"], 1], ["vaas", "🏺", ["Daar zet je bloemen in", "Kan stuk", "Staat op tafel"], 1], ["stoel", "🪑", ["Daar zit je op", "Heeft vier poten", "Staat bij de tafel"], 1], ["lepel", "🥄", ["Voor soep of toetje", "Zit in het bestek", "Rond uiteinde"], 1], ["vork", "🍴", ["Prikken", "Zit in het bestek", "Heeft tanden"], 1], ["mok", "☕", ["Voor koffie of thee", "Heeft een oor", "Staat in de kast"], 1], ["fornuis", "🔥", ["Daar kook je op", "Pitten", "Staat in de keuken"], 1], ["vaatwasser", "🍽️", ["Wast af", "Altijd te vol", "Maakt geluid 's nachts"], 1], ["bed", "🛌", ["Daar slaap je in", "Staat in de slaapkamer", "Je maakt het op"], 1], ["douche", "🚿", ["Warm water", "Je staat eronder", "In de badkamer"], 1], ["deken", "🧣", ["Houdt je warm", "Ligt op bed", "Zacht en dik"], 1], ["stopcontact", "🔌", ["Zit in de muur", "Daar steek je iets in", "Stroom"], 2], ["doos", "📦", ["Daar kan je iets in doen", "Van karton", "Bij een verhuizing"], 1], ["boekenplank", "📚", ["Hangt aan de muur", "Boeken", "Stoffig"], 2], ["pantoffels", "🥿", ["Draag je thuis", "Zacht", "Bij de voordeur"], 1], ["dakraam", "🪟", ["Zit in het dak", "Je kijkt naar de lucht", "Kan lekken"], 2]], "Eten": [["pannenkoek", "🥞", ["Rond en plat", "Met stroop of spek", "Wordt omgedraaid in de pan"], 1], ["frikandel", "🌭", ["Typisch Nederlands", "Met mayo", "Komt uit de frituur"], 1], ["stroopwafel", "🧇", ["Leg je op een warme kop", "Plakkerig", "Twee laagjes met iets ertussen"], 1], ["kaas", "🧀", ["Zit soms vol gaten", "Op brood", "Gouda is er één van"], 1], ["pizza", "🍕", ["Komt uit Italië", "In punten te snijden", "Wordt vaak bezorgd"], 1], ["patat", "🍟", ["Met mayonaise", "Uit de frituur", "Eet je met je handen"], 1], ["chocolade", "🍫", ["Zoet", "Smelt in je hand", "Komt van cacao"], 1], ["soep", "🍲", ["Eet je met een lepel", "Is warm", "Lekker in de winter"], 1], ["ijsje", "🍦", ["Smelt snel", "Koud", "Lekker in de zomer"], 1], ["banaan", "🍌", ["Heeft een schil", "Is geel", "Apen eten het graag"], 1], ["popcorn", "🍿", ["Bij de film", "Het knalt", "Blijft tussen je tanden zitten"], 1], ["sushi", "🍣", ["Eet je met stokjes", "Vaak rauw", "Komt uit Japan"], 1], ["croissant", "🥐", ["Bij het ontbijt", "Frans", "Bladerdeeg"], 1], ["rijst", "🍚", ["Heel veel korreltjes", "Bijgerecht", "Kook je in water"], 1], ["appeltaart", "🥧", ["Met slagroom", "Snijd je in stukken", "Bij oma"], 1], ["komkommer", "🥒", ["Lang en groen", "Zit in salade", "Bijna alleen water"], 1], ["brood", "🍞", ["Je snijdt het", "Met beleg", "Bij het ontbijt"], 1], ["ei", "🥚", ["Breekbaar", "Je kookt het", "Een kip legt het"], 1], ["wortel", "🥕", ["Oranje", "Konijnen eten het graag", "Is een groente"], 1], ["hamburger", "🍔", ["Fastfood", "Tussen twee broodjes", "Met een stuk vlees"], 1], ["appel", "🍎", ["Rond en vaak rood", "Groeit aan een boom", "Een per dag"], 1], ["tomaat", "🍅", ["Rood", "Zit in ketchup", "Is fruit of groente"], 1], ["aardbei", "🍓", ["Zomerfruit", "Pitjes aan de buitenkant", "Met slagroom"], 1], ["druiven", "🍇", ["Aan een tros", "Rozijnen komen ervan", "Klein en rond"], 1], ["citroen", "🍋", ["Heel zuur", "Geel", "Past bij thee of vis"], 1], ["ananas", "🍍", ["Stekelig", "Tropisch", "Op pizza, vinden sommigen"], 2], ["watermeloen", "🍉", ["Groot en groen", "Rood vruchtvlees", "Veel water"], 1], ["avocado", "🥑", ["Groen en romig", "Met een pit", "Op toast"], 2], ["maïs", "🌽", ["Gele korrels", "Aan een kolf", "Op de barbecue"], 1], ["champignon", "🍄", ["Groeit in het bos", "Heeft een hoedje", "Op pizza"], 2], ["knoflook", "🧄", ["Sterke geur", "Teentjes", "Houdt vampiers weg"], 2], ["aardappel", "🥔", ["Groeit onder de grond", "Kook je", "Basis voor veel gerechten"], 1], ["spaghetti", "🍝", ["Lange slierten", "Met saus", "Opdraaien om je vork"], 1], ["taart", "🎂", ["Voor een verjaardag", "Kaarsjes", "Snijden"], 1], ["koekje", "🍪", ["Bij de thee", "Klein en zoet", "Uit een trommel"], 1], ["donut", "🍩", ["Heeft een gat", "Glazuur", "Zoet"], 1], ["honing", "🍯", ["Van bijen", "Plakkerig", "Op brood"], 1], ["spek", "🥓", ["Knapperig", "In de pan", "Bij het ontbijt"], 1], ["kip", "🍗", ["Veel mensen eten het", "Poot of filet", "Uit de oven"], 1], ["melk", "🥛", ["Wit", "Van de koe", "Bij de cornflakes"], 1]], "Dieren": [["olifant", "🐘", ["Heel groot", "Heeft een lange neus", "Is grijs"], 1], ["pinguïn", "🐧", ["Houdt van kou", "Waggelt", "Zwart en wit"], 1], ["giraffe", "🦒", ["Lange nek", "Gevlekt", "Eet van hoge bomen"], 1], ["egel", "🦔", ["Prikkelig", "Rolt zich op", "Leeft in de tuin"], 1], ["koe", "🐄", ["Zegt boe", "Staat in de wei", "Geeft melk"], 1], ["dolfijn", "🐬", ["Slim", "Springt uit het water", "Zwemt in groepen"], 1], ["kameleon", "🦎", ["Verandert van kleur", "Lange tong", "Beweegt langzaam"], 2], ["uil", "🦉", ["Actief 's nachts", "Draait zijn kop", "Roept hoe-hoe"], 1], ["kikker", "🐸", ["Springt", "Is groen", "Begint als dikkopje"], 1], ["vleermuis", "🦇", ["Hangt ondersteboven", "Vliegt in het donker", "Slaapt overdag"], 1], ["zebra", "🦓", ["Gestreept", "Leeft in Afrika", "Lijkt op een paard"], 1], ["eekhoorn", "🐿️", ["Verzamelt noten", "Klimt in bomen", "Heeft een pluimstaart"], 1], ["kreeft", "🦞", ["Heeft scharen", "Wordt rood als je hem kookt", "Leeft in zee"], 1], ["papegaai", "🦜", ["Praat na", "Kleurrijk", "Zit op een stok"], 1], ["slak", "🐌", ["Heel langzaam", "Draagt zijn huis mee", "Laat een spoor achter"], 1], ["haai", "🦈", ["Scherpe tanden", "Zwemt in zee", "Rugvin boven het water"], 1], ["schaap", "🐑", ["Heeft wol", "Staat op de dijk", "Je telt ze om te slapen"], 1], ["pauw", "🦚", ["Prachtige staart", "Pronkt", "Maakt hard geluid"], 1], ["kangoeroe", "🦘", ["Springt", "Heeft een buidel", "Komt uit Australië"], 1], ["spin", "🕷️", ["Acht poten", "Maakt een web", "Sommigen zijn er bang voor"], 1], ["hond", "🐕", ["Blaft", "Gaat mee uit wandelen", "Beste vriend van de mens"], 1], ["kat", "🐈", ["Spint", "Krabt aan de bank", "Heeft negen levens"], 1], ["paard", "🐎", ["Je kan erop rijden", "Heeft hoeven", "Hinnikt"], 1], ["varken", "🐖", ["Roze", "Wroet in de modder", "Geeft spek"], 1], ["konijn", "🐇", ["Lange oren", "Eet wortels", "Springt"], 1], ["kip", "🐔", ["Legt eieren", "Pikt", "Zit in het hok"], 1], ["eend", "🦆", ["Kwaakt", "Zwemt in de vijver", "Brood voeren"], 1], ["zwaan", "🦢", ["Lange hals", "Wit", "Elegant"], 1], ["vlinder", "🦋", ["Begint als rups", "Mooie vleugels", "Fladdert"], 1], ["bij", "🐝", ["Maakt honing", "Heeft een angel", "Zoemt"], 1], ["mier", "🐜", ["Heel klein", "Werkt in een groep", "Bouwt een hoop"], 1], ["krab", "🦀", ["Loopt zijwaarts", "Heeft scharen", "Aan het strand"], 1], ["octopus", "🐙", ["Acht armen", "Leeft in zee", "Spuit inkt"], 1], ["walvis", "🐳", ["Het grootste dier", "Blaast water omhoog", "Zingt"], 1], ["schildpad", "🐢", ["Heeft een schild", "Heel traag", "Wordt oud"], 1], ["slang", "🐍", ["Sist", "Glibberig", "Kan gevaarlijk zijn"], 1], ["leeuw", "🦁", ["Koning van de dieren", "Heeft een manen", "Brult"], 1], ["tijger", "🐅", ["Gestreept", "Grote kat", "Leeft in Azië"], 1], ["aap", "🐒", ["Klimt", "Houdt van bananen", "Lijkt op ons"], 1], ["beer", "🐻", ["Winterslaap", "Houdt van honing", "Groot en harig"], 1]], "Plekken": [["bioscoop", "🎬", ["Het is er donker", "Grote zaal", "Popcorn"], 1], ["zwembad", "🏊", ["Chloorlucht", "Nat", "Je draagt zwemkleding"], 1], ["bibliotheek", "📚", ["Het is er stil", "Je leent iets", "Veel boeken"], 1], ["camping", "⛺", ["Je slaapt buiten", "Met een tent of caravan", "Vaak in de vakantie"], 1], ["ziekenhuis", "🏥", ["Daar kom je liever niet", "Witte jassen", "Er liggen patiënten"], 1], ["strand", "🏖️", ["Zand", "Water en zon", "Neem een handdoek mee"], 1], ["supermarkt", "🛒", ["Met een wagentje", "Kassa", "Je koopt boodschappen"], 1], ["kerk", "⛪", ["Hoge toren", "Op zondag", "Klokken"], 1], ["pretpark", "🎢", ["Lange rijen", "Attracties", "Je gilt er"], 1], ["tankstation", "⛽", ["Auto's komen er", "Je betaalt aan de kassa", "Het ruikt naar benzine"], 1], ["dierentuin", "🦁", ["Dieren in verblijven", "Kaartje kopen", "Leuk met kinderen"], 1], ["station", "🚉", ["Treinen", "Perrons", "Je wacht op vertraging"], 1], ["bakkerij", "🥖", ["Het ruikt er lekker", "Vroeg open", "Broodjes"], 1], ["speeltuin", "🛝", ["Kinderen", "Glijbaan", "Zandbak"], 1], ["museum", "🖼️", ["Kunst of geschiedenis", "Kijken, niet aanraken", "Rondleiding"], 1], ["brandweerkazerne", "🚒", ["Sirene", "Rode wagens", "Een paal om af te glijden"], 1], ["luchthaven", "✈️", ["Paspoort", "Wachten", "Koffers"], 1], ["kasteel", "🏰", ["Torens", "Ridders", "Heel oud"], 1], ["boerderij", "🚜", ["Dieren", "Trekkers", "Op het platteland"], 1], ["kermis", "🎡", ["Suikerspin", "Reuzenrad", "Zomer in het dorp"], 1], ["school", "🏫", ["Daar leer je", "Bel", "Elke dag"], 1], ["kantoor", "🏢", ["Bureaus", "Vergaderingen", "Koffieautomaat"], 1], ["bos", "🌲", ["Veel bomen", "Wandelen", "Paddenstoelen"], 1], ["berg", "⛰️", ["Hoog", "Klimmen", "Sneeuw op de top"], 1], ["woestijn", "🏜️", ["Droog", "Zand", "Heel warm"], 1], ["eiland", "🏝️", ["Water eromheen", "Palmbomen", "Ver weg"], 1], ["grot", "🕳️", ["Donker", "Druipstenen", "Vleermuizen"], 1], ["brug", "🌉", ["Over het water", "Auto's rijden eroverheen", "Kan open"], 1], ["stadion", "🏟️", ["Veel mensen", "Wedstrijd", "Zingen en schreeuwen"], 1], ["haven", "🚢", ["Schepen", "Containers", "Zeelucht"], 1], ["restaurant", "🍽️", ["Menukaart", "Ober", "Je betaalt achteraf"], 1], ["café", "☕", ["Gezellig", "Terras", "Iets drinken"], 1], ["hotel", "🏨", ["Overnachten", "Receptie", "Kamersleutel"], 1], ["apotheek", "💊", ["Medicijnen", "Groen kruis", "Wachten tot je aan de beurt bent"], 2], ["tuin", "🌷", ["Gras", "Bloemen", "Buiten"], 1], ["park", "🌳", ["Banken", "Eendjes", "Wandelen"], 1], ["speelhal", "🕹️", ["Spelletjes", "Lichtjes", "Munten"], 1], ["bouwplaats", "🏗️", ["Kranen", "Stof", "Helmen"], 2], ["molen", "🌬️", ["Wieken", "Wind", "Typisch Nederlands"], 2], ["rechtbank", "⚖️", ["Rechter", "Uitspraak", "Iemand wordt veroordeeld"], 2]], "Beroepen": [["brandweerman", "🧑‍🚒", ["Draagt een helm", "Komt met sirene", "Blust iets"], 1], ["dokter", "🧑‍⚕️", ["Witte jas", "Je maakt een afspraak", "Stethoscoop"], 1], ["piloot", "🧑‍✈️", ["Zit voorin", "Uniform met strepen", "Spreekt via de intercom"], 1], ["bakker", "🥖", ["Staat vroeg op", "Meel", "Oven"], 1], ["loodgieter", "🔧", ["Lekkage", "Pijpen", "Komt als het water niet werkt"], 1], ["tandarts", "🦷", ["Boor", "Je zit achterover", "Veel mensen zijn er bang voor"], 1], ["kapper", "✂️", ["Knipt", "Spiegel", "Praat veel"], 1], ["politieagent", "👮", ["Uniform", "Bekeuring", "Op straat"], 1], ["clown", "🤡", ["Rode neus", "Maakt grappen", "Op de kermis"], 1], ["boer", "🧑‍🌾", ["Staat vroeg op", "Dieren", "Land"], 1], ["schilder", "🎨", ["Kwast", "Verf", "Muren of doeken"], 1], ["kok", "🧑‍🍳", ["Hoge hoed", "Keuken", "Proeft"], 1], ["postbode", "📮", ["Bezorgt", "Heeft een ronde", "Fiets of busje"], 1], ["astronaut", "🧑‍🚀", ["Gewichtloos", "Raket", "Helm"], 1], ["dj", "🎧", ["Draait platen", "Op feestjes", "Koptelefoon"], 1], ["fotograaf", "📷", ["Zegt kaas", "Flits", "Op bruiloften"], 1], ["bouwvakker", "👷", ["Helm", "Steigers", "Fluohesje"], 1], ["kapitein", "⚓", ["Leidt een schip", "Pet", "Staat aan het roer"], 1], ["detective", "🕵️", ["Zoekt aanwijzingen", "Raadsels", "Vergrootglas"], 1], ["juf", "🧑‍🏫", ["Voor de klas", "Bord", "Huiswerk"], 1], ["advocaat", "⚖️", ["Pleit", "Pak aan", "Verdedigt iemand"], 2], ["journalist", "📰", ["Schrijft", "Stelt vragen", "Nieuws"], 2], ["acteur", "🎭", ["Speelt een rol", "Film of toneel", "Leert teksten"], 1], ["zanger", "🎤", ["Microfoon", "Optreden", "Zingt"], 1], ["schrijver", "✍️", ["Boeken", "Pen of toetsenbord", "Fantasie"], 2], ["architect", "📐", ["Ontwerpt gebouwen", "Tekeningen", "Maquette"], 2], ["chauffeur", "🚌", ["Rijdt", "Zit achter het stuur", "Brengt mensen"], 1], ["machinist", "🚂", ["Rijdt een trein", "Zit voorin", "Spoor"], 2], ["visser", "🎣", ["Vroeg op het water", "Netten", "Vangt iets"], 1], ["slager", "🔪", ["Vlees", "Mes", "Winkel"], 1], ["bloemist", "💐", ["Boeketten", "Mooi ruikend", "Rozen"], 1], ["tuinman", "🌱", ["Gras maaien", "Planten", "Buiten werken"], 2], ["schoonmaker", "🧽", ["Doet de boel schoon", "Emmer", "Werkt vaak 's avonds"], 1], ["elektricien", "⚡", ["Draden", "Stroom", "Lichtschakelaar"], 2], ["timmerman", "🪚", ["Hout", "Zaag", "Maakt kozijnen"], 1], ["monteur", "🔩", ["Repareert auto's", "Olie", "Garage"], 2], ["verpleegster", "💉", ["Zorgt voor patiënten", "Ziekenhuis", "Vroege diensten"], 1], ["wetenschapper", "🔬", ["Doet onderzoek", "Laboratorium", "Proefjes"], 2], ["bewaker", "🛡️", ["Past op", "Uniform", "Houdt de wacht"], 2], ["burgemeester", "🏛️", ["Gemeente", "Ketting", "Opent dingen"], 2]], "Spullen": [["fiets", "🚲", ["Twee wielen", "Trappen", "Heeft een bel"], 1], ["rugzak", "🎒", ["Draag je op je rug", "Voor school of wandelen", "Bandjes"], 1], ["zonnebril", "🕶️", ["Tegen fel licht", "Zomer", "Op je neus"], 1], ["skateboard", "🛹", ["Wieltjes", "Stunts", "Skatepark"], 1], ["gitaar", "🎸", ["Snaren", "Muziek", "Je tokkelt"], 1], ["kompas", "🧭", ["Wijst het noorden", "Naald", "Wandelaars"], 2], ["telescoop", "🔭", ["Kijken naar sterren", "Lange buis", "Voor ver weg"], 2], ["portemonnee", "👛", ["Zit geld in", "Pasjes", "Zit in je zak of tas"], 1], ["sleutel", "🔑", ["Past op één slot", "Raak je kwijt", "Deur"], 1], ["bril", "👓", ["Om beter te zien", "Op je neus", "Glazen"], 1], ["camera", "📸", ["Foto's", "Lens", "Klik"], 1], ["hoed", "🎩", ["Op je hoofd", "Tovenaar", "Tegen de zon of kou"], 1], ["klok", "🕰️", ["Tikt", "Wijzers", "Aan de muur"], 1], ["zaklamp", "🔦", ["Batterijen", "Licht in het donker", "Knopje"], 1], ["schaats", "⛸️", ["Ijs", "Glijden", "Winter"], 1], ["bal", "⚽", ["Rond", "Rollen", "Om mee te spelen"], 1], ["hamer", "🔨", ["Spijker", "Klus", "Slaan"], 1], ["koffer", "🧳", ["Vakantie", "Inpakken", "Wieltjes"], 1], ["horloge", "⌚", ["Om je pols", "Tijd", "Kan slim zijn"], 1], ["vlieger", "🪁", ["Wind nodig", "Touw", "Strand"], 1], ["schaar", "✂️", ["Knippen", "Twee handvatten", "Scherp"], 1], ["pen", "🖊️", ["Schrijven", "Inkt", "Zit in je pennenzak"], 1], ["boek", "📖", ["Pagina's", "Lezen", "Staat in de kast"], 1], ["laptop", "💻", ["Toetsenbord", "Scherm", "Je neemt hem mee naar werk"], 1], ["telefoon", "📱", ["Altijd bij je", "Scherm", "Bellen en appen"], 1], ["koptelefoon", "🎧", ["Op je oren", "Muziek", "Met draad of zonder"], 1], ["batterij", "🔋", ["Raakt leeg", "Voor de afstandsbediening", "Plus en min"], 1], ["magneet", "🧲", ["Trekt metaal aan", "Op de koelkast", "Noord en zuid"], 2], ["ballon", "🎈", ["Vol lucht", "Knalt", "Op een feestje"], 1], ["cadeau", "🎁", ["Pak je uit", "Met strik", "Voor een verjaardag"], 1], ["kroon", "👑", ["Van goud", "Op een hoofd", "Koning"], 1], ["ring", "💍", ["Om je vinger", "Bruiloft", "Kostbaar"], 1], ["sjaal", "🧣", ["Om je nek", "In de winter", "Gebreid"], 1], ["handschoen", "🧤", ["Voor je handen", "Koud weer", "Altijd één kwijt"], 1], ["schoen", "👟", ["Veters", "Paar", "Staat bij de deur"], 1], ["trommel", "🥁", ["Slaan", "Lawaai", "Stokjes"], 1], ["piano", "🎹", ["Toetsen", "Zwart en wit", "Muziek"], 1], ["dobbelsteen", "🎲", ["Gooien", "Zes kanten", "Bij een bordspel"], 1], ["spelcomputer", "🎮", ["Controller", "Scherm", "Spelletjes"], 1], ["landkaart", "🗺️", ["Wijst de weg", "Opvouwen", "Straten en steden"], 1]], "Sport": [["voetbal", "⚽", ["Elf spelers", "Doel", "Scheidsrechter"], 1], ["tennis", "🎾", ["Racket", "Net", "Wimbledon"], 1], ["basketbal", "🏀", ["Mand", "Dribbelen", "Lange spelers"], 1], ["zwemmen", "🏊", ["Water", "Slagen", "Baantjes"], 1], ["hardlopen", "🏃", ["Hijgen", "Schoenen", "Marathon"], 1], ["wielrennen", "🚴", ["Peloton", "Tour", "Trappen"], 1], ["schaatsen", "⛸️", ["Ijs", "Elfstedentocht", "Rondjes"], 1], ["skiën", "⛷️", ["Sneeuw", "Berg", "Wintersport"], 1], ["boksen", "🥊", ["Handschoenen", "Ring", "Rondes"], 1], ["golf", "⛳", ["Gat", "Club", "Veel gras"], 2], ["hockey", "🏑", ["Stick", "Veld", "Bal en doel"], 1], ["honkbal", "⚾", ["Knuppel", "Pitcher", "Amerika"], 2], ["volleybal", "🏐", ["Net", "Over de bal heen", "Smash"], 1], ["darts", "🎯", ["Pijlen", "Bullseye", "Bord aan de muur"], 1], ["bowlen", "🎳", ["Kegels", "Zware bal", "Strike"], 1], ["judo", "🥋", ["Wit pak", "Matten", "Gooien"], 2], ["turnen", "🤸", ["Rekstok", "Radslag", "Lenig"], 1], ["roeien", "🚣", ["Boot", "Riemen", "Samen in het gelid"], 1], ["surfen", "🏄", ["Golven", "Plank", "Zee"], 1], ["klimmen", "🧗", ["Muur", "Touw", "Hoogte"], 1], ["paardrijden", "🏇", ["Zadel", "Manege", "Hoefijzer"], 1], ["schaken", "♟️", ["Zwart en wit", "Schaakmat", "Denksport"], 2], ["pingpong", "🏓", ["Kleine bal", "Tafel", "Batje"], 1], ["badminton", "🏸", ["Shuttle", "Net", "Racket"], 2], ["rugby", "🏉", ["Ovale bal", "Hard", "Scrum"], 2]], "Vervoer": [["auto", "🚗", ["Vier wielen", "Stuur", "Rijbewijs"], 1], ["bus", "🚌", ["Haltes", "Chauffeur", "Buskaartje"], 1], ["trein", "🚆", ["Rails", "Perron", "Vertraging"], 1], ["tram", "🚋", ["In de stad", "Rails op straat", "Bel"], 1], ["vliegtuig", "✈️", ["Vleugels", "Piloot", "Opstijgen"], 1], ["helikopter", "🚁", ["Rotor", "Landt op een dak", "Veel lawaai"], 1], ["zeilboot", "⛵", ["Wind", "Zeil", "Op het water"], 1], ["veerboot", "🛳️", ["Brengt je naar een eiland", "Auto's mee", "Dek"], 1], ["motor", "🏍️", ["Twee wielen", "Helm", "Brullend"], 1], ["scooter", "🛵", ["Klein", "Brommer", "Helm"], 1], ["ambulance", "🚑", ["Sirene", "Haast", "Naar het ziekenhuis"], 1], ["taxi", "🚕", ["Bel je op", "Meter loopt", "Chauffeur"], 1], ["vrachtwagen", "🚚", ["Veel lading", "Snelweg", "Groot"], 1], ["tractor", "🚜", ["Op het land", "Grote wielen", "Boer"], 1], ["raket", "🚀", ["Naar de ruimte", "Aftellen", "Vuur"], 1], ["kano", "🛶", ["Peddel", "Rivier", "Smal"], 1], ["metro", "🚇", ["Ondergronds", "Tunnel", "Grote stad"], 1], ["luchtballon", "🎈", ["Hangt aan een mand", "Warme lucht", "Zweeft"], 1], ["step", "🛴", ["Twee wieltjes", "Afduwen", "Kinderen"], 1], ["rolstoel", "🦽", ["Wielen", "Duwen", "Zitten"], 1], ["caravan", "🚐", ["Achter de auto", "Vakantie", "Bed erin"], 1], ["parachute", "🪂", ["Spring je mee", "Open als je valt", "Hoogte"], 2], ["onderzeeër", "🌊", ["Onder water", "Periscoop", "Duikt"], 2], ["politieauto", "🚓", ["Blauwe lichten", "Sirene", "Achtervolging"], 1], ["gondel", "🚡", ["Hangt aan een kabel", "Naar de berg", "Uitzicht"], 2]], "Natuur": [["regen", "🌧️", ["Nat", "Druppels", "Paraplu"], 1], ["sneeuw", "❄️", ["Wit", "Koud", "Sneeuwpop"], 1], ["zon", "☀️", ["Warm", "Aan de hemel", "Zonnebrand"], 1], ["maan", "🌙", ["'s Nachts", "Verandert van vorm", "Rond of een streepje"], 1], ["ster", "⭐", ["Twinkelt", "In de nacht", "Ver weg"], 1], ["wolk", "☁️", ["In de lucht", "Wit of grijs", "Regen komt eruit"], 1], ["regenboog", "🌈", ["Kleuren", "Na de regen", "Een boog"], 1], ["bliksem", "⚡", ["Flits", "Onweer", "Gevaarlijk"], 1], ["vulkaan", "🌋", ["Uitbarsting", "Lava", "Berg"], 1], ["waterval", "💧", ["Water valt naar beneden", "Hoge rots", "Mist"], 1], ["rivier", "🏞️", ["Stroomt", "Naar zee", "Oever"], 1], ["zee", "🌊", ["Zout", "Golven", "Strand"], 1], ["bloem", "🌸", ["Ruikt lekker", "Kleurrijk", "Bijen komen erop af"], 1], ["roos", "🌹", ["Doornen", "Rood", "Op Valentijn"], 1], ["zonnebloem", "🌻", ["Geel", "Draait mee", "Groot"], 1], ["cactus", "🌵", ["Prikt", "Woestijn", "Weinig water"], 1], ["palmboom", "🌴", ["Tropisch", "Kokosnoot", "Strand"], 1], ["boom", "🌳", ["Stam", "Takken", "Bladeren"], 1], ["blad", "🍃", ["Groen", "Valt in de herfst", "Aan een tak"], 1], ["steen", "🪨", ["Hard", "Ligt op de grond", "Kan je gooien"], 1], ["vuur", "🔥", ["Heet", "Vlammen", "Kampvuur"], 1], ["tornado", "🌪️", ["Draaiende wind", "Verwoest", "Amerika"], 2], ["mist", "🌫️", ["Slecht zicht", "'s Ochtends", "Grijs"], 1], ["komeet", "☄️", ["Staart", "In de ruimte", "Komt langs"], 2], ["aarde", "🌍", ["Waar we wonen", "Rond", "Blauw en groen"], 1]], "Kleding": [["jas", "🧥", ["Voor de kou", "Rits", "Aan de kapstok"], 1], ["trui", "🧶", ["Gebreid", "Warm", "Lange mouwen"], 1], ["broek", "👖", ["Twee pijpen", "Riem", "Zakken"], 1], ["jurk", "👗", ["Aan een stuk", "Voor een feest", "Rok"], 1], ["t-shirt", "👕", ["Korte mouwen", "Zomer", "Met opdruk"], 1], ["sokken", "🧦", ["Altijd één kwijt", "In je schoenen", "Paar"], 1], ["laars", "🥾", ["Stevig", "Voor in de modder", "Wandelen"], 1], ["sandalen", "🩴", ["Zomer", "Open", "Slippers"], 1], ["hoge hakken", "👠", ["Pijn aan je voeten", "Voor een feest", "Tikken"], 1], ["pet", "🧢", ["Op je hoofd", "Klep", "Zon"], 1], ["das", "🧣", ["Om je hals", "Winter", "Lang"], 1], ["handtas", "👜", ["Zit alles in", "Hangt aan je schouder", "Dames dragen die vaak"], 1], ["bikini", "👙", ["Strand", "Twee delen", "Zwemmen"], 1], ["pyjama", "🌙", ["Draag je 's nachts", "Comfortabel", "Bed"], 1], ["short", "🩳", ["Kort", "Warm weer", "Benen"], 1], ["pak", "🤵", ["Bij een bruiloft", "Jasje en broek", "Stropdas"], 1], ["vlinderdas", "🎀", ["Onder je kin", "Netjes", "Bij een smoking"], 2], ["labjas", "🥼", ["Wit", "Wetenschapper", "Dokter"], 2], ["helm", "⛑️", ["Beschermt je hoofd", "Fiets of bouw", "Riempje"], 1], ["ketting", "📿", ["Om je nek", "Hangertje", "Sieraad"], 1], ["regenjas", "🌧️", ["Droog blijven", "Capuchon", "Nat weer"], 1], ["muts", "🧢", ["Warm", "Winter", "Op je hoofd"], 1], ["badjas", "🛁", ["Na het douchen", "Zacht", "Met riem"], 1], ["riem", "👖", ["Houdt je broek omhoog", "Gesp", "Gaatjes"], 1], ["trouwjurk", "👰", ["Wit", "Eén keer gedragen", "Bruiloft"], 1]], "Bekende mensen": [["Einstein", "🧠", ["Beroemde natuurkundige", "Wilde haren", "Formule E=mc²"], 1], ["Willem-Alexander", "👑", ["Koning van Nederland", "Zijn vrouw heet Máxima", "Zijn verjaardag is Koningsdag"], 1], ["Max Verstappen", "🏎️", ["Racet in de Formule 1", "Nederlander", "Wereldkampioen"], 1], ["Michael Jackson", "🕺", ["Zanger en danser", "Moonwalk", "King of Pop"], 1], ["Napoleon", "🎩", ["Franse keizer", "Veroverde een groot deel van Europa", "Verloor bij Waterloo"], 1], ["Beethoven", "🎼", ["Componist", "Werd doof", "Schreef de Negende Symfonie"], 1], ["Cristiano Ronaldo", "⚽", ["Voetballer", "Komt uit Portugal", "Scoort veel doelpunten"], 1], ["Mozart", "🎹", ["Componist", "Al als kind beroemd", "Komt uit Oostenrijk"], 2], ["Rembrandt", "🎨", ["Nederlandse schilder", "De Nachtwacht", "Leefde in de Gouden Eeuw"], 2], ["Van Gogh", "🌻", ["Nederlandse schilder", "Zonnebloemen", "De Sterrennacht"], 2], ["Marie Curie", "☢️", ["Onderzocht straling", "Won twee Nobelprijzen", "Natuurkundige en scheikundige"], 2], ["Newton", "🍎", ["Ontdekte de zwaartekracht", "Engelse wetenschapper", "Een appel valt uit een boom"], 2], ["Leonardo da Vinci", "🖼️", ["Schilder en uitvinder", "De Mona Lisa", "Kwam uit Italië"], 2], ["Cleopatra", "🏺", ["Koningin van Egypte", "Heel lang geleden", "Beroemde heerser"], 2], ["Columbus", "⛵", ["Ontdekkingsreiziger", "Voer over de oceaan", "Kwam bij Amerika aan"], 2], ["Nelson Mandela", "✊", ["President van Zuid-Afrika", "Zat jaren in de gevangenis", "Streed tegen apartheid"], 2], ["Galileo", "🔭", ["Keek door een telescoop", "Zei dat de aarde om de zon draait", "Italiaanse wetenschapper"], 3], ["Darwin", "🐢", ["Evolutietheorie", "Reisde naar de Galápagos", "Engelse bioloog"], 3], ["Gandhi", "🕊️", ["Streed zonder geweld", "Indiase leider", "Droeg eenvoudige witte kleding"], 3], ["Johan Cruijff", "⚽", ["Nederlandse voetballer", "Rugnummer 14", "Een beroemde draai is naar hem genoemd"], 3], ["Michiel de Ruyter", "⚓", ["Nederlandse admiraal", "Gouden Eeuw", "Zeeheld"], 3], ["Erasmus", "📜", ["Denker uit Rotterdam", "Humanist", "Schreef Lof der Zotheid"], 3], ["Mondriaan", "🟥", ["Schilder van vlakken", "Rood, geel en blauw", "Rechte lijnen"], 3], ["Spinoza", "💭", ["Filosoof uit Amsterdam", "Dacht na over God en natuur", "Sleep lenzen"], 3], ["Aristoteles", "🏛️", ["Griekse filosoof", "Leerling van Plato", "Leraar van Alexander de Grote"], 3], ["Alexander de Grote", "🗡️", ["Veroverde een enorm rijk", "Kwam uit Macedonië", "Werd jong koning"], 3], ["Pythagoras", "📐", ["Griekse wiskundige", "Stelling over driehoeken", "a² + b² = c²"], 4], ["Archimedes", "🛁", ["Griekse uitvinder", "Eureka", "Drijven en zinken"], 4], ["Copernicus", "🪐", ["De zon staat in het midden", "Poolse sterrenkundige", "Veranderde ons wereldbeeld"], 4], ["Christiaan Huygens", "🕰️", ["Nederlandse wetenschapper", "Slingeruurwerk", "Ontdekte de maan Titan"], 4], ["Hippocrates", "⚕️", ["Griekse arts", "Vader van de geneeskunde", "Eed voor artsen"], 4], ["Hendrik Lorentz", "🧲", ["Nederlandse natuurkundige", "Won de Nobelprijs", "Werkte in Leiden"], 4], ["Euclides", "📏", ["Griekse wiskundige", "Meetkunde", "Schreef De Elementen"], 4], ["Ada Lovelace", "💻", ["Engelse wiskundige", "Gezien als eerste programmeur", "Werkte met Babbage"], 4]], "Wereld": [["Eiffeltoren", "🗼", ["Staat in Parijs", "Ijzeren toren", "Heel hoog"], 1], ["Vrijheidsbeeld", "🗽", ["Staat in New York", "Heeft een fakkel", "Is groen"], 1], ["Piramides", "🔺", ["Egypte", "Van de farao's", "Midden in het zand"], 1], ["Chinese Muur", "🧱", ["Heel lang", "Staat in China", "Toeristen lopen erop"], 1], ["Nederland", "🌷", ["Tulpen", "Windmolens", "Veel fietsen"], 1], ["Afrika", "🌍", ["Een continent", "Leeuwen en olifanten", "De Sahara ligt er"], 1], ["Noordpool", "🧊", ["IJsberen", "Heel koud", "Bovenkant van de aarde"], 1], ["Amsterdam", "🚲", ["Hoofdstad", "Grachten", "Veel fietsen"], 1], ["Big Ben", "🕰️", ["Staat in Londen", "Klokkentoren", "Slaat de uren"], 2], ["Colosseum", "🏛️", ["Staat in Rome", "Gladiatoren", "Oud stadion"], 2], ["Taj Mahal", "🕌", ["Staat in India", "Wit gebouw", "Gebouwd uit liefde"], 2], ["Mount Everest", "🏔️", ["Hoogste berg", "Himalaya", "Klimmers"], 2], ["Sahara", "🏜️", ["Grote hete woestijn", "Afrika", "Kamelen"], 2], ["Japan", "🗾", ["Eilandenrijk", "Sushi", "Tokio"], 2], ["Australië", "🦘", ["Kangoeroes", "Eigen continent", "Sydney"], 2], ["Zuidpool", "🐧", ["Antarctica", "IJs", "Pinguïns"], 2], ["Amazone", "🌳", ["Regenwoud", "Grote rivier", "Zuid-Amerika"], 2], ["Machu Picchu", "⛰️", ["Van de Inca's", "Peru", "Hoog in de bergen"], 3], ["Stonehenge", "🪨", ["Grote stenen in een kring", "Engeland", "Heel oud"], 3], ["Grand Canyon", "🏜️", ["Diepe kloof", "Amerika", "Een rivier heeft hem uitgesleten"], 3], ["Nijl", "🌊", ["Een van de langste rivieren", "Egypte", "Stroomt naar de Middellandse Zee"], 3], ["Atlantische Oceaan", "🌊", ["Tussen Europa en Amerika", "Zout water", "Schepen steken over"], 3], ["Alpen", "⛷️", ["Bergketen", "Skiën", "Zwitserland en Oostenrijk"], 3], ["Venetië", "🛶", ["Stad op het water", "Gondels", "Italië"], 3], ["Deltawerken", "🌊", ["Zeeland", "Stormvloedkering", "Beschermt tegen water"], 3], ["Panamakanaal", "🚢", ["Verbindt twee oceanen", "Schepen", "Sluizen"], 3], ["Kilimanjaro", "🏔️", ["Hoogste berg van Afrika", "Tanzania", "Sneeuw op de top"], 3], ["Evenaar", "🌐", ["Denkbeeldige lijn", "Midden van de aarde", "Warm"], 4], ["Greenwich", "🕰️", ["Nulmeridiaan", "Bij Londen", "Tijd"], 4], ["Bosporus", "🌉", ["Zeestraat", "Istanbul", "Tussen Europa en Azië"], 4], ["Himalaya", "🏔️", ["Hoogste bergketen", "Azië", "Veel toppen"], 4], ["Middellandse Zee", "🌊", ["Tussen Europa en Afrika", "Warm", "Vakantie"], 4], ["Waddenzee", "🦭", ["Valt droog", "Zeehonden", "Bij Nederland"], 4], ["Poolcirkel", "❄️", ["Lijn rond de pool", "Poolnacht", "Noorderlicht"], 4], ["Tropen", "🌴", ["Warm en vochtig", "Rond de evenaar", "Regenwoud"], 4]], "Wetenschap": [["planeet", "🪐", ["Draait om een ster", "De aarde is er één", "Rond"], 1], ["skelet", "💀", ["Botten", "Zit in je lijf", "Houdt je overeind"], 1], ["hart", "❤️", ["Klopt", "Pompt bloed", "Zit in je borst"], 1], ["hersenen", "🧠", ["Daarmee denk je", "Zitten in je hoofd", "Grijs en kronkelig"], 1], ["microscoop", "🔬", ["Je kijkt erdoor", "Voor hele kleine dingen", "Op school"], 1], ["dinosaurus", "🦖", ["Uitgestorven", "Heel groot", "Fossielen"], 1], ["thermometer", "🌡️", ["Meet temperatuur", "Bij koorts", "Kwik of digitaal"], 1], ["ruimte", "🚀", ["Sterren", "Stil", "Astronauten"], 1], ["atoom", "⚛️", ["Heel klein", "Bouwsteen van alles", "Protonen en neutronen"], 2], ["zwaartekracht", "🍎", ["Trekt je naar beneden", "Houdt je op de grond", "Appel van Newton"], 2], ["fotosynthese", "🌱", ["Planten maken suiker", "Zonlicht", "Bladgroen"], 2], ["watercyclus", "♻️", ["Regen", "Verdamping", "Wolken"], 2], ["zonsverduistering", "🌑", ["De maan voor de zon", "Het wordt donker", "Bijzonder"], 2], ["fossiel", "🦴", ["Versteend", "Oud", "Opgegraven"], 2], ["elektriciteit", "⚡", ["Stroom", "Stopcontact", "Draden"], 2], ["spijsvertering", "🍽️", ["Eten wordt afgebroken", "Maag en darmen", "Verwerken"], 2], ["zuurstof", "💨", ["Hebben we nodig", "Zit in de lucht", "Planten maken het"], 2], ["eb en vloed", "🌊", ["Zee gaat op en neer", "De maan speelt mee", "Twee keer per dag"], 2], ["ecosysteem", "🌿", ["Dieren en planten samen", "Evenwicht", "Leefomgeving"], 3], ["bloedsomloop", "🩸", ["Bloed stroomt", "Aders", "Het hart pompt"], 3], ["evolutie", "🦎", ["Soorten veranderen", "Darwin", "Heel langzaam"], 3], ["zonne-energie", "🔋", ["Panelen", "Duurzaam", "Op het dak"], 3], ["broeikaseffect", "🌡️", ["De aarde wordt warmer", "Gassen in de lucht", "Klimaat"], 3], ["erosie", "🏜️", ["Wind en water slijten land", "Rots verdwijnt langzaam", "Landschap verandert"], 3], ["voedselketen", "🐟", ["Wie eet wie", "Planten beginnen", "Roofdieren aan de top"], 3], ["magnetisch veld", "🧭", ["Kompas", "De aarde heeft er één", "Noord en zuid"], 3], ["bacterie", "🦠", ["Heel klein", "Soms ziek", "Soms nuttig"], 3], ["relativiteitstheorie", "⏱️", ["Einstein", "Tijd en ruimte", "Snelheid van het licht"], 4], ["zwart gat", "⚫", ["Zuigt alles op", "Zelfs licht ontsnapt niet", "Ruimte"], 4], ["DNA", "🧬", ["Erfelijkheid", "Dubbele helix", "Zit in cellen"], 4], ["supernova", "💥", ["Een ster explodeert", "Heel fel", "Einde van een ster"], 4], ["entropie", "🌀", ["Wanorde", "Natuurkunde", "Neemt toe"], 4], ["plaattektoniek", "🌋", ["Aardplaten", "Aardbevingen", "Verschuift langzaam"], 4], ["foton", "💡", ["Lichtdeeltje", "Heel klein", "Beweegt razendsnel"], 4]], "Geschiedenis": [["ridder", "🛡️", ["Harnas", "Zwaard", "Kasteel"], 1], ["piraat", "🏴‍☠️", ["Schatkaart", "Papegaai", "Zeeroverschip"], 1], ["farao", "👑", ["Egypte", "Piramide", "Heerser"], 1], ["Vikingen", "⚔️", ["Voeren op lange schepen", "Uit het noorden", "Helmen"], 1], ["Romeinen", "🏛️", ["Gladiatoren", "Rechte wegen", "Latijn"], 1], ["mammoet", "🦣", ["Harig", "Slagtanden", "IJstijd"], 1], ["holbewoner", "🦴", ["Lang geleden", "Maakt vuur", "Jaagt"], 1], ["Gouden Eeuw", "💰", ["Rijk Nederland", "VOC", "Rembrandt"], 2], ["Middeleeuwen", "🏰", ["Kastelen", "Ridders", "Lang geleden"], 2], ["VOC", "🚢", ["Handelsschepen", "Specerijen", "Oost-Indië"], 2], ["Berlijnse Muur", "🧱", ["Verdeelde een stad", "Viel in 1989", "Duitsland"], 2], ["boekdrukkunst", "📰", ["Boeken sneller maken", "Gutenberg", "Losse letters"], 2], ["stoommachine", "🚂", ["Stoom", "Treinen", "Fabrieken"], 2], ["Olympische Spelen", "🏅", ["Komen uit Griekenland", "Medailles", "Om de vier jaar"], 2], ["Franse Revolutie", "🇫🇷", ["Bestorming van de Bastille", "De koning verloor zijn macht", "Vrijheid, gelijkheid, broederschap"], 3], ["Industriële Revolutie", "🏭", ["Fabrieken", "Machines", "Stoom"], 3], ["Renaissance", "🎨", ["Wedergeboorte", "Kunst en wetenschap", "Da Vinci"], 3], ["Koude Oorlog", "❄️", ["De VS en de Sovjet-Unie", "Wedloop", "Geen echt gevecht"], 3], ["Tachtigjarige Oorlog", "⚔️", ["Nederland tegen Spanje", "Willem van Oranje", "Opstand"], 3], ["Reformatie", "📜", ["Luther", "De kerk veranderde", "Protestanten"], 3], ["maanlanding", "🌕", ["Eerste stappen op de maan", "Apollo 11", "Astronauten"], 3], ["Verlichting", "💡", ["Denken en rede", "18e eeuw", "Filosofen"], 4], ["feodalisme", "🏰", ["Heer en leenman", "Middeleeuws systeem", "Land in ruil voor trouw"], 4], ["Kruistochten", "✝️", ["Naar Jeruzalem", "Middeleeuwen", "Ridders"], 4], ["Hanzesteden", "⚓", ["Handelssteden", "Zwolle, Kampen en Deventer", "Samenwerking"], 4], ["Republiek der Zeven Provinciën", "🏛️", ["Gouden Eeuw", "Zeven gewesten", "Zonder koning"], 4], ["ontdekkingsreizen", "🧭", ["Zeevaarders", "Nieuwe werelden", "Kaarten tekenen"], 4], ["bronstijd", "🔶", ["Voor de ijzertijd", "Brons", "Heel lang geleden"], 4], ["hunebedden", "🪨", ["Grote stenen", "Drenthe", "Prehistorisch"], 4]], "Abstract": [["vriendschap", "🤝", ["Je mag iemand graag", "Samen lachen", "Vertrouwen"], 2], ["geluk", "🍀", ["Blij zijn", "Meevaller", "Klavertje vier"], 2], ["geheim", "🤫", ["Niet doorvertellen", "Stil", "Alleen jij weet het"], 2], ["vrijheid", "🕊️", ["Zelf kiezen", "Niet vastzitten", "Een vogel"], 3], ["geduld", "⏳", ["Wachten", "Niet boos worden", "Kalm blijven"], 3], ["eerlijkheid", "⚖️", ["Niet liegen", "Gelijk delen", "De waarheid"], 3], ["fantasie", "🦄", ["Dingen verzinnen", "Niet echt", "In je hoofd"], 3], ["democratie", "🗳️", ["Stemmen", "De meerderheid beslist", "Verkiezingen"], 3], ["inflatie", "📈", ["Alles wordt duurder", "De euro is minder waard", "Prijzen stijgen"], 3], ["nostalgie", "📼", ["Terugverlangen", "Vroeger was alles beter", "Oude tijden"], 3], ["humor", "😂", ["Lachen", "Grapjes", "Komedie"], 3], ["gerechtigheid", "⚖️", ["Wat eerlijk is", "Rechter", "Straf"], 4], ["toeval", "🎲", ["Niet gepland", "Kans", "Per ongeluk"], 4], ["eeuwigheid", "♾️", ["Nooit eindigend", "Tijd zonder einde", "Altijd"], 4], ["vooroordeel", "🙈", ["Denken zonder te weten", "Vooraf een oordeel", "Niet eerlijk"], 4], ["compromis", "🤝", ["Allebei een beetje toegeven", "Middenweg", "Overleg"], 4], ["economie", "💶", ["Geld en handel", "Producten", "Vraag en aanbod"], 4], ["solidariteit", "🤲", ["Samen staan voor elkaar", "Delen met anderen", "Steun"], 4], ["ironie", "🙃", ["Het tegenovergestelde zeggen", "Sarcastisch", "Anders bedoelen"], 4], ["perspectief", "👁️", ["Hoe jij het ziet", "Standpunt", "De andere kant"], 4], ["paradox", "🔄", ["Lijkt tegenstrijdig", "Toch waar", "Raadsel"], 4]]};
  var CATS = Object.keys(WORDS);
  var MAX = 12;

  var S = {
    screen:"setup",
    players:["","",""],
    cats:CATS.slice(),
    bedriegers:1,
    hint:false,
    tips:true,
    levels:[1,2],
    used:{},
    round:null,
    error:""
  };

  try{
    var saved = JSON.parse(localStorage.getItem("bedrieger-v1")||"null");
    if(saved){
      if(Array.isArray(saved.players) && saved.players.length>=3) S.players = saved.players.slice(0,MAX);
      if(Array.isArray(saved.cats) && saved.cats.length) S.cats = saved.cats.filter(function(c){return CATS.indexOf(c)>-1;});
      if(!S.cats.length) S.cats = CATS.slice();
      if(saved.bedriegers===2) S.bedriegers = 2;
      S.hint = !!saved.hint;
      if(saved.tips===false) S.tips = false;
      if(Array.isArray(saved.levels) && saved.levels.length) S.levels = saved.levels.filter(function(l){return l>=1&&l<=4;});
      if(!S.levels.length) S.levels = [1,2];
      var known = Array.isArray(saved.known) ? saved.known : CATS.slice(0,10);
      CATS.forEach(function(c){ if(known.indexOf(c)===-1 && S.cats.indexOf(c)===-1) S.cats.push(c); });
    }
  }catch(e){}

  function persist(){
    try{ localStorage.setItem("bedrieger-v1", JSON.stringify({players:S.players,cats:S.cats,bedriegers:S.bedriegers,hint:S.hint,tips:S.tips,levels:S.levels,known:CATS})); }catch(e){}
  }



  function el(tag, attrs, kids){
    var n = document.createElement(tag);
    if(attrs) Object.keys(attrs).forEach(function(k){
      if(k==="class") n.className = attrs[k];
      else if(k==="text") n.textContent = attrs[k];
      else if(k.indexOf("on")===0) n.addEventListener(k.slice(2), attrs[k]);
      else if(attrs[k]===true) n.setAttribute(k,"");
      else if(attrs[k]!==false && attrs[k]!=null) n.setAttribute(k, attrs[k]);
    });
    (kids||[]).forEach(function(c){ if(c) n.appendChild(typeof c==="string"?document.createTextNode(c):c); });
    return n;
  }
  function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
  function cleanNames(){ return S.players.map(function(p){return p.trim();}); }

  // Eerlijke beurt: iedereen is één keer bedrieger voordat iemand voor de tweede keer aan de beurt komt.
  function shuffle(a){
    for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=a[i]; a[i]=a[j]; a[j]=t; }
    return a;
  }
  function pickBedriegers(names){
    var key = names.join("|")+"#"+S.bedriegers;
    if(S.bagKey!==key){ S.bagKey=key; S.bag=[]; S.lastImps=[]; }
    var imps = [];
    while(imps.length<S.bedriegers){
      if(!S.bag.length){
        S.bag = shuffle(names.map(function(_,i){return i;}).filter(function(i){return imps.indexOf(i)===-1;}));
        var top = S.bag.length-1;
        if(top>0 && S.lastImps.indexOf(S.bag[top])>-1){ var t=S.bag[0]; S.bag[0]=S.bag[top]; S.bag[top]=t; }
      }
      imps.push(S.bag.pop());
    }
    S.lastImps = imps.slice();
    return imps;
  }

  var LEVELS = [[1,"Makkelijk"],[2,"Moeilijk"],[3,"Heel moeilijk"],[4,"Onmogelijk"]];
  function pool(){
    var out = [];
    S.cats.forEach(function(c){
      WORDS[c].forEach(function(e){ if(S.levels.indexOf(e[3])>-1) out.push({cat:c,e:e}); });
    });
    return out;
  }

  function startRound(){
    var names = cleanNames();
    var all = pool();
    var fresh = all.filter(function(x){ return !S.used[x.e[0]+"|"+x.cat]; });
    if(!fresh.length){ S.used = {}; fresh = all; }
    var choice = pick(fresh);
    S.used[choice.e[0]+"|"+choice.cat] = true;
    var cat = choice.cat, entry = choice.e;
    var imps = pickBedriegers(names);
    var order = names.map(function(_,i){return i;});
    S.round = {names:names, cat:cat, word:entry[0], emoji:entry[1], tips:entry[2], showTips:S.tips, imps:imps, i:0, shown:false, starter:Math.floor(Math.random()*names.length), hint:S.hint};
    meld("bedrieger_ronde",{spelers:names.length,bedriegers:S.bedriegers,niveaus:S.levels.slice().sort().join("")});
    S.screen = "pass";
    render();
  }

  function render(){
    app.replaceChildren();
    window.scrollTo(0,0);
    if(S.screen==="setup") renderSetup();
    else if(S.screen==="pass") renderPass();
    else if(S.screen==="card") renderCard();
    else if(S.screen==="play") renderPlay();
    else if(S.screen==="reveal") renderReveal();
  }

  function renderSetup(){
    var head = el("div",{class:"section"},[
      el("h1",{},["Be",el("span",{text:"drie"}),"ger"]),
      el("p",{class:"sub",text:"Eén telefoon, rondgeven. Iedereen krijgt hetzelfde woord, behalve de bedrieger."})
    ]);

    var rows = el("div",{class:"rows"});
    S.players.forEach(function(name,i){
      var input = el("input",{type:"text",id:"p"+i,value:name,placeholder:"Speler "+(i+1),maxlength:"16",autocomplete:"off","aria-label":"Naam speler "+(i+1),
        oninput:function(e){ S.players[i]=e.target.value; persist(); updateStart(); }});
      input.value = name;
      var row = el("div",{class:"row"},[input]);
      if(S.players.length>3){
        row.appendChild(el("button",{class:"icon","aria-label":"Verwijder speler "+(i+1),text:"×",onclick:function(){
          S.players.splice(i,1);
          if(S.players.length<6) S.bedriegers = 1;
          persist(); render();
        }}));
      }
      rows.appendChild(row);
    });
    var addBtn = el("button",{class:"ghost",text:"+ Speler toevoegen",onclick:function(){
      S.players.push(""); persist(); render();
      var last = document.getElementById("p"+(S.players.length-1)); if(last) last.focus();
    }});
    if(S.players.length>=MAX) addBtn.disabled = true;

    var players = el("div",{class:"section"},[
      el("div",{class:"label",text:"Spelers ("+S.players.length+")"}), rows, addBtn
    ]);

    var chips = el("div",{class:"chips"});
    CATS.forEach(function(c){
      chips.appendChild(el("button",{class:"chip","aria-pressed":S.cats.indexOf(c)>-1?"true":"false",text:c,onclick:function(){
        var at = S.cats.indexOf(c);
        if(at>-1){ if(S.cats.length>1) S.cats.splice(at,1); }
        else S.cats.push(c);
        persist(); render();
      }}));
    });
    var sel = el("div",{class:"sel-row"},[
      el("button",{text:"Alles",onclick:function(){ S.cats=CATS.slice(); persist(); render(); }})
    ]);
    var total = pool().length;
    var cats = el("div",{class:"section"},[el("div",{class:"label",text:"Categorieën"}), chips, sel]);

    var lv = el("div",{class:"chips"});
    LEVELS.forEach(function(l){
      lv.appendChild(el("button",{class:"chip","aria-pressed":S.levels.indexOf(l[0])>-1?"true":"false",text:l[1],onclick:function(){
        var at = S.levels.indexOf(l[0]);
        if(at>-1){ if(S.levels.length>1) S.levels.splice(at,1); }
        else S.levels.push(l[0]);
        persist(); render();
      }}));
    });
    var levels = el("div",{class:"section"},[
      el("div",{class:"label",text:"Niveau"}), lv,
      el("p",{class:total?"sub":"err",text:total?(total+" woorden in de pot"):"Geen woorden bij deze keuze. Kies een ander niveau of een andere categorie."})
    ]);

    var canTwo = S.players.length>=6;
    var out = el("output",{text:String(S.bedriegers)});
    var stepper = el("div",{class:"stepper"},[
      el("button",{"aria-label":"Minder bedriegers",text:"−",onclick:function(){ S.bedriegers=1; persist(); render(); }}),
      out,
      el("button",{"aria-label":"Meer bedriegers",text:"+",disabled:!canTwo,onclick:function(){ if(canTwo){S.bedriegers=2; persist(); render();} }}),
      el("span",{class:"sub",text:canTwo?"bedriegers":"bedrieger (2 kan vanaf 6 spelers)"})
    ]);
    var imp = el("div",{class:"section"},[el("div",{class:"label",text:"Aantal bedriegers"}), stepper]);

    var hint = el("button",{class:"switch","aria-pressed":S.hint?"true":"false",onclick:function(){ S.hint=!S.hint; persist(); render(); }},[
      el("span",{},[el("b",{text:"Bedrieger ziet de categorie"}),el("small",{text:"Makkelijker voor de bedrieger"})]),
      el("span",{class:"pill"})
    ]);

    var tips = el("button",{class:"switch","aria-pressed":S.tips?"true":"false",onclick:function(){ S.tips=!S.tips; persist(); render(); }},[
      el("span",{},[el("b",{text:"Tips voor omschrijven"}),el("small",{text:"Voorbeelden op de kaart, behalve voor de bedrieger"})]),
      el("span",{class:"pill"})
    ]);
    var err = el("p",{class:"err",id:"err"});
    var start = el("button",{class:"primary",id:"start",text:"Start spel",onclick:function(){
      var names = cleanNames();
      if(names.some(function(n){return !n;})){ document.getElementById("err").textContent="Vul bij elke speler een naam in."; return; }
      var low = names.map(function(n){return n.toLowerCase();});
      if(low.some(function(n,i){return low.indexOf(n)!==i;})){ document.getElementById("err").textContent="Twee spelers hebben dezelfde naam. Maak ze verschillend."; return; }
      if(!pool().length){ document.getElementById("err").textContent="Er zijn geen woorden bij deze keuze. Kies een ander niveau of een andere categorie."; return; }
      startRound();
    }});

    function updateStart(){ var e=document.getElementById("err"); if(e) e.textContent=""; }

    if(opties.onTerug) app.appendChild(el("button",{class:"bdg-terug",text:"← Terug",onclick:opties.onTerug}));
    app.append(head, players, cats, levels, imp, hint, tips, err, start);
  }

  function renderPass(){
    var r = S.round;
    app.appendChild(el("div",{class:"stage"},[
      el("div",{class:"counter",text:"Speler "+(r.i+1)+" van "+r.names.length}),
      el("p",{class:"sub",text:"Geef de telefoon aan"}),
      el("div",{class:"pass-name",text:r.names[r.i]}),
      el("p",{class:"sub",text:"Alleen die speler kijkt mee."}),
      el("button",{class:"paper-btn",text:"Toon mijn kaart",onclick:function(){ S.screen="card"; render(); }})
    ]));
  }

  function renderCard(){
    var r = S.round;
    var isImp = r.imps.indexOf(r.i)>-1;
    var last = r.i===r.names.length-1;
    var card;
    if(isImp){
      card = el("div",{class:"card imp"},[
        el("div",{class:"kicker",text:r.names[r.i]+", jij bent de"}),
        el("div",{class:"word",text:"Bedrieger"}),
        r.hint ? el("div",{class:"hint",text:"Categorie: "+r.cat}) : el("div",{class:"hint",text:"Je kent het woord niet. Bluf mee."}),
        el("div",{class:"hint",text:"Luister eerst en zeg iets dat bij alles past."})
      ]);
    } else {
      card = el("div",{class:"card"},[
        el("div",{class:"kicker",text:r.names[r.i]+", jouw woord is"}),
        el("div",{class:"pic",text:r.emoji,"aria-hidden":"true"}),
        el("div",{class:"word",text:r.word}),
        el("div",{class:"hint",text:"Verklap het niet."}),
        r.showTips ? el("div",{class:"tips"},[el("b",{text:"Je zou kunnen zeggen"})].concat(r.tips.map(function(t){return el("span",{text:"• "+t});}))) : null
      ]);
    }
    app.appendChild(el("div",{class:"stage"},[
      card,
      el("button",{class:"paper-btn",text:last?"Verberg en begin met praten":"Verberg en geef door",onclick:function(){
        if(last){ S.screen="play"; }
        else { r.i++; S.screen="pass"; }
        render();
      }})
    ]));
  }

  function renderPlay(){
    var r = S.round;
    var rules = el("ul",{class:"rule"},[
      el("li",{text:"Beschrijf het woord om de beurt, in één zin of één woord."}),
      el("li",{text:"Niet te duidelijk, anders weet de bedrieger het."}),
      el("li",{text:"Niet te vaag, anders ben je zelf verdacht."}),
      el("li",{text:"Na een paar rondes stemmen jullie wie de bedrieger is."})
    ]);
    app.appendChild(el("div",{class:"stage"},[
      el("div",{class:"counter",text:r.imps.length>1?"Er zijn "+r.imps.length+" bedriegers":"Er is 1 bedrieger"}),
      el("p",{class:"sub",text:"Deze speler begint"}),
      el("div",{class:"start-name",text:r.names[r.starter]}),
      rules,
      el("button",{class:"primary",text:"Onthul de bedrieger",onclick:function(){ meld("bedrieger_onthuld",{spelers:r.names.length}); S.screen="reveal"; render(); }})
    ]));
  }

  function renderReveal(){
    var r = S.round;
    var list = el("div",{class:"bad-list"});
    r.imps.forEach(function(i){ list.appendChild(el("div",{class:"bad",text:r.names[i]})); });
    app.appendChild(el("div",{class:"stage"},[
      el("p",{class:"sub",text:r.imps.length>1?"De bedriegers waren":"De bedrieger was"}),
      list,
      el("div",{class:"card"},[
        el("div",{class:"kicker",text:"Het woord was ("+r.cat+")"}),
        el("div",{class:"pic",text:r.emoji,"aria-hidden":"true"}),
        el("div",{class:"word",text:r.word})
      ]),
      el("div",{class:"actions"},[
        el("button",{class:"primary",text:"Nieuwe ronde",onclick:startRound}),
        el("button",{class:"ghost",text:"Andere spelers of instellingen",onclick:function(){ S.screen="setup"; render(); }})
      ])
    ]));
  }

  render();
}
