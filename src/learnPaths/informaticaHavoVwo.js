// Leerpad: Informatica kernconcepten — HAVO/VWO
// Eindexamen-CSE-stof sinds 2019: programmeren + netwerken + databases + AI + maatschappij.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  code: "#42a5f5",
  netwerk: "#66bb6a",
  db: "#ab47bc",
  ai: "#ef6c00",
  hl: "#ffd54f",
};

const stepEmojis = ["💻", "🌐", "🗃️", "🤖", "🏆"];

const chapters = [
  { letter: "A", title: "Programmeren + algoritmes", emoji: "💻", from: 0, to: 0 },
  { letter: "B", title: "Netwerken + internet", emoji: "🌐", from: 1, to: 1 },
  { letter: "C", title: "Databases + data", emoji: "🗃️", from: 2, to: 2 },
  { letter: "D", title: "AI + maatschappij", emoji: "🤖", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Programmeren + algoritmes ─────────────────────────
  {
    title: "Programmeren + algoritmes",
    explanation:
      "**Informatica** als HAVO/VWO eindexamen-vak (sinds vernieuwing 2019). CSE test 4 domeinen + maatschappelijke impact.\n\n**Algoritme** = stap-voor-stap-recept om probleem op te lossen.\n• Niet computer-specifiek — recept maken is ook algoritme.\n• Goede algoritme: duidelijk, eindig, deterministisch.\n• Voorbeeld: zoek-algoritme, sorteer-algoritme.\n\n**Programmeren** = algoritme vertalen naar code die computer begrijpt.\n\n**Talen** (CSE: vaak **Python** of **Java**):\n• **Python**: leesbare syntax, vaak gebruikt op school + AI.\n• **Java**: streng-typed, voor grote systemen.\n• **JavaScript**: web-front-end.\n• **C/C++**: dichter bij hardware, snel.\n\n**Basis-constructies** (universeel):\n\n**1. Variabelen**:\n```python\nleeftijd = 16\nnaam = 'Anna'\npi = 3.14\nisStudent = True\n```\n• **Types**: int (heel getal), float (komma), string (tekst), bool (True/False).\n\n**2. Operatoren**:\n• Wiskundig: + − × / %  (modulo = restwaarde).\n• Vergelijking: ==, !=, <, >, <=, >=.\n• Logisch: and, or, not.\n\n**3. Conditionele uitvoering (if)**:\n```python\nif leeftijd >= 18:\n    print('Volwassen')\nelif leeftijd >= 12:\n    print('Tiener')\nelse:\n    print('Kind')\n```\n\n**4. Lussen (loops)**:\n• **For-lus**: bekend aantal herhalingen.\n  ```python\n  for i in range(5):\n      print(i)  # 0,1,2,3,4\n  ```\n• **While-lus**: zolang voorwaarde waar is.\n  ```python\n  n = 10\n  while n > 0:\n      print(n)\n      n -= 1\n  ```\n\n**5. Functies** (procedures):\n```python\ndef oppervlakte(lengte, breedte):\n    return lengte * breedte\n\nopp = oppervlakte(5, 3)  # 15\n```\n• **Parameters** = input.\n• **Return** = output.\n• **DRY**: Don't Repeat Yourself — herbruikbare code.\n\n**6. Datastructuren**:\n• **Lijst (list/array)**: geordende reeks.\n  ```python\n  cijfers = [7, 8, 6, 9, 7]\n  cijfers[0]  # 7 (eerste element)\n  ```\n• **Dictionary (dict)**: key-value paren.\n  ```python\n  student = {'naam': 'Anna', 'leeftijd': 16}\n  student['naam']  # 'Anna'\n  ```\n• **Tuple**: geordend, onveranderbaar.\n• **Set**: unieke elementen, ongeordend.\n\n**Algoritme-voorbeelden** (Cito-classics):\n\n**Zoeken** (search):\n• **Lineair**: doorloop lijst tot je 'm vindt. O(n).\n• **Binair**: in gesorteerde lijst, halveer bereik elke stap. O(log n) — veel sneller.\n\n**Sorteren** (sort):\n• **Bubble sort**: vergelijk paren, wissel. Simpel, traag. O(n²).\n• **Quick sort**: divide-and-conquer. O(n log n) gemiddeld.\n• **Merge sort**: gegarandeerd O(n log n).\n\n**Big O-notatie**:\n• Hoe schaalt algoritme met grootte input n?\n• O(1) = constant.\n• O(log n) = logaritmisch (zeer snel).\n• O(n) = lineair.\n• O(n²) = kwadratisch (traag bij grote n).\n• O(2^n) = exponentieel (zeer slecht).\n\n**Software-ontwikkel-cyclus**:\n1. Analyse: wat moet programma doen?\n2. Ontwerp: pseudocode, flowchart, UML.\n3. Implementatie: schrijf code.\n4. Testen: unit tests, integratie tests.\n5. Onderhoud: bugs fixen, nieuwe features.\n\n**Best practices**:\n• Naming-conventies (zinvolle namen).\n• Code-comments waar nodig (waarom, niet wat).\n• Version control (Git).\n• Code reviews.\n• Testen voorop.\n\n**OOP** (Object-Oriented Programming):\n• **Klasse** = blauwdruk (template).\n• **Object** = instantie.\n• **Methode** = functie op object.\n• **Attribuut** = eigenschap.\n• Concepten: encapsulation, inheritance, polymorphism.\n• Veel gebruikt voor grote projecten.",
    checks: [
      {
        q: "Wat is een **algoritme**?",
        options: ["Stap-voor-stap-recept om probleem op te lossen","Een soort computer","Een database","Een netwerk"],
        answer: 0,
        wrongHints: [null, "Niet — concept.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Recept-analogie", tekst: "**Algoritme** = stap-voor-stap-instructies om probleem op te lossen. Niet computer-specifiek — kookrecept is ook algoritme. **Goede algoritme**: helder, eindig, deterministisch (zelfde input → zelfde output). **Programma** = algoritme + concrete code." }],
          niveaus: { basis: "Stappenplan. A.", simpeler: "Algoritme = recept = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Python-syntax**: hoe schrijf je een **for-lus** die 5x print?",
        options: ["for i in range(5): print(i)","loop 5 times print(i)","for(i=0;i<5;i++)","while i<5: print"],
        answer: 0,
        wrongHints: [null, "Geen Python.", "Niet — dat is C/Java.", "Onvolledig + while ipv for."],
        uitlegPad: {
          stappen: [{ titel: "Python for-loop", tekst: "**Python for-lus**: `for i in range(5): print(i)` print getallen 0,1,2,3,4 (range begint bij 0, telt tot maar exclusief 5). Andere talen anders: Java `for(int i=0; i<5; i++)`. Python is leesbaar + populair bij beginners en data science." }],
          niveaus: { basis: "for i in range(5). A.", simpeler: "Python for = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Binair zoeken** werkt:",
        options: ["In gesorteerde lijst, halveer bereik elke stap","In ongesorteerde lijst","Alleen op binaire bestanden","Alleen op getallen"],
        answer: 0,
        wrongHints: [null, "Niet — vereist sortering.", "Niet — algemener.", "Niet — werkt op alles vergelijkbaar."],
        uitlegPad: {
          stappen: [{ titel: "Telefoonboek-strategie", tekst: "**Binair zoeken** (binary search): in **gesorteerde** lijst, kijk middelste element. Te groot? Zoek in eerste helft. Te klein? In tweede helft. Halveer bereik elke stap → **O(log n)** = zeer snel.\n\n1 miljoen items: binair zoekt in max 20 stappen, lineair (één voor één) in gemiddeld 500.000.\n\nWerkt zoals zoeken in oud telefoonboek: open midden, wij in correcte helft." }],
          niveaus: { basis: "Halveren in gesorteerd. A.", simpeler: "Binair = halveren = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**O(n²)** schaalt:",
        options: ["Kwadratisch","Lineair","Logaritmisch","Constant"],
        answer: 0,
        wrongHints: [null, "Dat is O(n).", "Dat is O(log n).", "Dat is O(1)."],
        uitlegPad: {
          stappen: [{ titel: "Big O", tekst: "**Big O-notatie**: hoe schaalt algoritme met n input-grootte?\n• O(1): constant (bv. array[5]).\n• O(log n): logaritmisch (binair zoeken).\n• O(n): lineair (lineair zoeken).\n• **O(n²): kwadratisch** (bubble sort, geneste lussen).\n• O(2^n): exponentieel (rugzakprobleem brute-force).\n\nBij n=1000: O(n²) = 1 miljoen operaties. O(n log n) = 10.000. Verschil groot.\n\nKies algoritme op basis van schaal." }],
          niveaus: { basis: "Kwadratisch. A.", simpeler: "n² = kwadratisch = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**DRY** programming-principe:",
        options: ["Don't Repeat Yourself","Do React Yourself","Dynamic Resource Yielding","Draft Ready Yes"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Hergebruik", tekst: "**DRY = Don't Repeat Yourself**: maak van herhaalde code een **functie/klasse** om duplicatie te vermijden. Voordeel: één plek aanpassen → effect overal. Tegenovergesteld: WET (Write Everything Twice — slecht). Onderhoudbaarheid groot verschil." }],
          niveaus: { basis: "Don't Repeat Yourself. A.", simpeler: "DRY = niet herhalen = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── B. Netwerken + internet ──────────────────────────────
  {
    title: "Netwerken + internet",
    explanation:
      "**Netwerk** = verzameling apparaten verbonden om gegevens uit te wisselen.\n\n**Schaal van netwerken**:\n• **PAN** (Personal Area Network): Bluetooth tussen telefoon + oortjes.\n• **LAN** (Local Area Network): netwerk in huis/school/kantoor (WiFi/Ethernet).\n• **MAN** (Metropolitan): stad-omvattend.\n• **WAN** (Wide Area Network): groot gebied, bv. NL-breed.\n• **Internet**: wereld-wijde net van netwerken.\n\n**Internet** = letterlijk 'inter-net' = netwerk van netwerken.\n• Ontstaan uit ARPANET (VS-defensie 1969).\n• Web = WWW = laag bovenop internet (Tim Berners-Lee 1989).\n• ~5 miljard mensen online.\n\n**Hoe werkt internet** (op hoog niveau):\n\n**1. IP-adressen**:\n• Unique nummer per apparaat.\n• **IPv4**: 4 cijfers 0-255: bv. 192.168.1.5.\n• 4 mld adressen → niet genoeg.\n• **IPv6**: langere, hexadecimaal.\n• Werkt zoals huisadressen — internet weet waar pakketten heen moeten.\n\n**2. Pakket-schakeling (packet switching)**:\n• Berichten opdelen in kleine **pakketten**.\n• Elk pakket apart routeren via beste pad.\n• Aan einde weer samenstellen.\n• Voordeel: efficiënt, fault-tolerant (één route uitgevallen → andere genomen).\n\n**3. Routers**:\n• Apparaten die pakketten doorgeven.\n• Beslissen welk pad te gebruiken.\n• Internet = miljoenen routers.\n\n**4. Protocollen**:\n• Afspraken hoe apparaten communiceren.\n• **TCP/IP**: basis.\n  - **TCP**: garandeert dat pakketten aankomen + in volgorde.\n  - **IP**: routering.\n• **HTTP/HTTPS**: web-pagina's. S = secure (TLS-encryptie).\n• **FTP**: bestanden.\n• **SMTP / IMAP**: e-mail.\n• **DNS**: domeinnaam → IP-adres (google.com → 142.250.x.x).\n\n**5. Cliënt-server-model**:\n• Cliënt (jouw browser) vraagt informatie.\n• Server (Google's computer) stuurt response.\n• Veel internet werkt zo.\n\n**6. Cloud + datacenters**:\n• Diensten draaien in **datacenters**.\n• Bv. AWS (Amazon), Google Cloud, Azure (Microsoft).\n• NL: groot datacenter-cluster Eemshaven, Schiphol.\n\n**Veiligheid**:\n\n**Encryptie**:\n• **Symmetrisch** (AES): zelfde sleutel encrypten + decrypten.\n• **Asymmetrisch** (RSA): publieke + private sleutel. Basis HTTPS + e-mail.\n• **Hashing** (SHA): eenrichtings-versleuteling voor wachtwoorden.\n\n**Aanvallen**:\n• **Phishing**: nep-mails om credentials te stelen.\n• **Malware** (virussen, ransomware, spyware).\n• **DDoS** (Distributed Denial of Service): overspoelen server met verkeer.\n• **Man-in-the-middle**: onderscheppen verkeer.\n• **SQL injection**: kwaadaardige database-query.\n• **Brute force**: alle wachtwoorden proberen.\n\n**Verdedigen**:\n• **Firewall**: filtert verkeer.\n• **VPN** (Virtual Private Network): geëncrypteerde tunnel.\n• **2FA** (Two-Factor Authentication).\n• **Wachtwoord-manager**.\n• **Updates** uitvoeren.\n• **Anti-virus**.\n\n**Privacy + AVG/GDPR**:\n• EU-wet (sinds 2018): bescherming persoonsgegevens.\n• **Recht op inzage, correctie, vergetelheid**.\n• Bedrijven moeten **datalek** binnen 72u melden.\n• Boetes tot 4% van wereldwijde omzet of €20M.\n• **Cookie-banners** op websites = AVG-eis.\n\n**WLAN beveiliging**:\n• **WEP**: oud, gebroken.\n• **WPA / WPA2 / WPA3**: nieuwer, sterker.\n• Goede router-instellingen + sterk wachtwoord cruciaal.\n\n**Internet of Things (IoT)**:\n• Verbonden apparaten: thermostaat, slim slot, slimme TV, auto.\n• Veiligheids-risico: vaak slecht beveiligd, kan via botnet aanvallen lanceren.\n• Mirai-botnet 2016: gebruikte IoT-apparaten voor DDoS.",
    checks: [
      {
        q: "Wat doet **DNS**?",
        options: ["Vertaalt domeinnaam (google.com) naar IP-adres","Encryptie","Routering pakketten","Bestand-overdracht"],
        answer: 0,
        wrongHints: [null, "Niet — apart protocol.", "Niet — IP doet routering.", "Niet — FTP."],
        uitlegPad: {
          stappen: [{ titel: "Telefoonboek internet", tekst: "**DNS** (Domain Name System): vertaalt **leesbare domeinnaam** (google.com) naar **IP-adres** (142.250.74.110). Als 'telefoonboek' internet. Je intypt google.com → browser vraagt DNS → krijgt IP → maakt verbinding.\n\nDNS-servers wereldwijd, hiërarchisch (root → TLD → autoritatief)." }],
          niveaus: { basis: "Domeinnaam → IP. A.", simpeler: "DNS = vertaler = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**HTTPS** verschilt van HTTP doordat:",
        options: ["Verkeer wordt geëncrypteerd (TLS)","Sneller","Goedkoper","Alleen voor Google"],
        answer: 0,
        wrongHints: [null, "Niet — vaak iets trager.", "Niet relevant.", "Niet — alle sites."],
        uitlegPad: {
          stappen: [{ titel: "S = Secure", tekst: "**HTTPS** (HTTP Secure): verkeer geëncrypteerd via **TLS** (vroeger SSL). Voorkomt afluisteren + manipulatie tijdens transport. Vandaag standaard — browsers waarschuwen voor HTTP-sites. Sloten-symbool naast URL = HTTPS actief." }],
          niveaus: { basis: "Encryptie. A.", simpeler: "HTTPS = TLS = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is een **DDoS-aanval**?",
        options: ["Overspoelen server met verkeer","Wachtwoord stelen","Database-corruptie","Virus"],
        answer: 0,
        wrongHints: [null, "Phishing.", "SQL injection.", "Malware (apart concept)."],
        uitlegPad: {
          stappen: [{ titel: "Distributed Denial of Service", tekst: "**DDoS** = **Distributed Denial of Service**. Vele computers tegelijk overspoelen target-server met verkeer → server kan legitieme gebruikers niet meer bedienen. **Distributed** = vele bronnen (botnet — geïnfecteerde computers). Verdedigen lastig — schaalbare infrastructuur + Cloudflare-achtige diensten." }],
          niveaus: { basis: "Overspoelen verkeer. A.", simpeler: "DDoS = overspoelen = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk **WLAN-protocol** is meest veilig (2024)?",
        options: ["WPA3","WEP","WPA","Open netwerk"],
        answer: 0,
        wrongHints: [null, "Verouderd + gebroken.", "Voorganger WPA3.", "Geen beveiliging."],
        uitlegPad: {
          stappen: [{ titel: "WPA3 = nieuwste", tekst: "**WLAN-beveiligings-evolutie**: WEP (1997, gebroken) → WPA (2003) → **WPA2** (2004, lange tijd standaard) → **WPA3** (2018, nieuwste). WPA3 lost zwakheden WPA2 op (KRACK-aanval) + biedt bescherming tegen offline brute-force-aanvallen. Bij router-instellingen: kies WPA3 als beschikbaar." }],
          niveaus: { basis: "WPA3. A.", simpeler: "Veiligst = WPA3 = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**AVG / GDPR** is:",
        options: ["EU-privacy-wet sinds 2018","NL-belastingwet","Beveiliging-standaard","Verkeers-regel"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet — wet niet standaard.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "GDPR/AVG", tekst: "**AVG** (Algemene Verordening Gegevensbescherming) = NL-naam. **GDPR** (General Data Protection Regulation) = EU. Sinds 25 mei 2018. Bescherming persoonsgegevens van EU-burgers. Rechten: inzage, correctie, **vergetelheid** ('right to be forgotten'), dataportabiliteit. **Datalek** moet binnen 72u gemeld worden bij Autoriteit Persoonsgegevens. Boetes tot 4% wereldwijde omzet of €20 mln (hoogste van twee)." }],
          niveaus: { basis: "EU-privacy-wet. A.", simpeler: "AVG = privacy = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── C. Databases + data ──────────────────────────────────
  {
    title: "Databases + data-modellering",
    explanation:
      "**Database (DB)** = georganiseerde verzameling data + systeem om die te beheren.\n\n**Soorten**:\n\n**Relationeel (SQL)**:\n• **Tabellen** met **rijen** (records) + **kolommen** (velden/attributes).\n• **Schema** definieert structuur.\n• **SQL** (Structured Query Language) voor toegang.\n• Voorbeelden: MySQL, PostgreSQL, SQLite, Oracle, SQL Server.\n• Sterk in: consistentie, transacties (ACID).\n\n**NoSQL**:\n• Niet-relationeel.\n• Typen: documenten (MongoDB), key-value (Redis), kolom-georiënteerd (Cassandra), graf (Neo4j).\n• Sterk in: schaalbaarheid, flexibel schema, web-data.\n\n**Voorbeeld relationele DB** (school):\n```\nLeerlingen-tabel:\nID | Naam       | Klas\n1  | Anna       | 4A\n2  | Bram       | 4B\n3  | Carlijn    | 4A\n\nCijfers-tabel:\nID | LeerlingID | Vak       | Cijfer\n1  | 1          | Wiskunde  | 7\n2  | 1          | Engels    | 8\n3  | 2          | Wiskunde  | 6\n```\n\n**Primaire sleutel (primary key)**: uniek nummer per rij (bv. ID).\n**Vreemde sleutel (foreign key)**: verwijst naar primaire sleutel andere tabel (bv. LeerlingID).\n\n**Relaties**:\n• **1:1** (één-op-één): bv. persoon → paspoort.\n• **1:N** (één-op-veel): bv. leerling → cijfers.\n• **N:M** (veel-op-veel): bv. studenten ↔ cursussen (via tussentafel).\n\n**SQL-queries** (basis):\n\n**SELECT** (lezen):\n```sql\nSELECT naam FROM Leerlingen WHERE klas = '4A';\n```\nResultaat: Anna, Carlijn.\n\n**INSERT** (toevoegen):\n```sql\nINSERT INTO Leerlingen (ID, naam, klas) VALUES (4, 'Daan', '4C');\n```\n\n**UPDATE** (wijzigen):\n```sql\nUPDATE Leerlingen SET klas = '5A' WHERE ID = 1;\n```\n\n**DELETE** (verwijderen):\n```sql\nDELETE FROM Leerlingen WHERE ID = 3;\n```\n\n**JOIN** (combineren tabellen):\n```sql\nSELECT Leerlingen.naam, Cijfers.vak, Cijfers.cijfer\nFROM Leerlingen\nJOIN Cijfers ON Leerlingen.ID = Cijfers.LeerlingID\nWHERE Cijfers.cijfer >= 8;\n```\n\n**Normalisatie**:\n• Tabellen opdelen om **redundantie** (herhaling) + **anomalieën** te voorkomen.\n• **1NF**: atomaire waarden (geen lijsten in cellen).\n• **2NF**: alle attributen volledig afhankelijk van primaire sleutel.\n• **3NF**: geen transitieve afhankelijkheden.\n\n**Big Data**:\n• Volume + Velocity + Variety + Veracity (4 V's).\n• Te groot voor traditionele DB's.\n• Tools: Hadoop, Spark, Kafka.\n• Toepassingen: web-analytics, IoT-streams, wetenschap.\n\n**Data-vraag-bronnen** (Cito-context):\n• **CBS Open Data**: NL-statistieken.\n• **Eurostat**: EU.\n• **Wereldbank**, **VN**, **OECD**.\n• **Kaggle**: data-science-competities.\n\n**Data-visualisatie**:\n• Grafieken: lijn, staaf, taart, scatter, heatmap, treemap.\n• Tools: Excel, Tableau, Power BI, Python (matplotlib/seaborn), R.\n• Goede vizualisering = grootste-mogelijke-impact zonder verwarrende elementen.\n\n**Datakwaliteit**:\n• Missing values.\n• Duplicates.\n• Inconsistent format.\n• Outliers (uitschieters).\n• **Data cleaning** vaak 80% van data-science-werk.\n\n**Privacy + databases**:\n• AVG/GDPR vereist:\n  - Doelbinding (data alleen voor afgesproken doel).\n  - Minimaal noodzakelijke data.\n  - Bewaartermijnen.\n  - Toegang-controle.\n• Encryptie at-rest + in-transit.\n• Anonimisering / pseudonimisering.",
    checks: [
      {
        q: "**Primaire sleutel** in DB-tabel is:",
        options: ["Uniek ID per rij","Wachtwoord","Buitenste tabel","SQL-commando"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Identificeert rij uniek", tekst: "**Primary key**: uniek identificatie per rij. Vaak auto-incrementing ID (1, 2, 3, ...). Garandeert geen duplicates. Andere tabellen kunnen verwijzen via **foreign key**. Voorbeeld: Leerling-ID 1 verschilt van Leerling-ID 2 zelfs als beide 'Anna' heten." }],
          niveaus: { basis: "Uniek ID. A.", simpeler: "PK = uniek = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke SQL-query selecteert alle leerlingen uit klas 4A?",
        options: ["SELECT * FROM Leerlingen WHERE klas = '4A'","GET Leerlingen FROM 4A","SHOW LEERLING klas=4A","FIND Leerlingen.klas:4A"],
        answer: 0,
        wrongHints: [null, "Geen SQL.", "Geen SQL.", "Geen SQL."],
        uitlegPad: {
          stappen: [{ titel: "SELECT-syntax", tekst: "**SQL SELECT**: `SELECT [kolommen] FROM [tabel] WHERE [conditie];`\n\n`SELECT * FROM Leerlingen WHERE klas = '4A';` selecteert alle kolommen voor rijen waar klas '4A' is. **\\*** = alle kolommen. **WHERE** = filter. **String-waarden in quotes**." }],
          niveaus: { basis: "SELECT...WHERE. A.", simpeler: "SQL = SELECT FROM WHERE = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**JOIN** in SQL doet:",
        options: ["Combineert rijen uit 2+ tabellen","Sorteert rijen","Verwijdert duplicates","Maakt nieuwe tabel"],
        answer: 0,
        wrongHints: [null, "Dat is ORDER BY.", "Dat is DISTINCT.", "Dat is CREATE TABLE."],
        uitlegPad: {
          stappen: [{ titel: "Tabellen koppelen", tekst: "**JOIN**: combineert rijen uit 2+ tabellen op basis van overeenkomende kolommen (vaak foreign-primary key match). Types: **INNER JOIN** (alleen matches), **LEFT JOIN** (alle uit linker tabel), RIGHT JOIN, FULL JOIN.\n\nVoorbeeld: leerling + diens cijfers in één query." }],
          niveaus: { basis: "Combineert tabellen. A.", simpeler: "JOIN = combineren = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**1NF (eerste normaalvorm)** vereist:",
        options: ["Atomaire waarden (geen lijsten in cel)","Indexering","Versleuteling","JSON-formaat"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "1NF = elke cel één waarde", tekst: "**1e Normaalvorm (1NF)**: elke cel bevat **één enkele atomaire waarde**, geen lijsten of geneste structuren. **Foute** cel: 'Wiskunde, Engels, Frans' in één cel. **Goede** oplossing: aparte rijen per vak in vakken-tabel.\n\nHogere normaalvormen (2NF, 3NF) elimineren verdere redundantie + afhankelijkheid-anomalieën." }],
          niveaus: { basis: "Atomair. A.", simpeler: "1NF = 1 waarde per cel = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Big Data 4 V's**:",
        options: ["Volume + Velocity + Variety + Veracity","Vier kleuren","Vier vakken","Verkoop"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "4 V-kenmerken", tekst: "**Big Data 4 V's**:\n• **Volume**: groot (terabytes/petabytes).\n• **Velocity**: snelheid van data-stroom (real-time IoT, social media).\n• **Variety**: verschillende formaten (tekst, video, log, sensor).\n• **Veracity**: betrouwbaarheid + accuratheid (data kan vies, onzeker zijn).\n\nSoms 5e V: Value (waarde). Klassiek voorbeeld: Twitter-feed = volume + velocity + variety + veracity-uitdagingen tegelijk." }],
          niveaus: { basis: "Vol/Vel/Var/Ver. A.", simpeler: "4V = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── D. AI + maatschappij ─────────────────────────────────
  {
    title: "AI + maatschappelijke impact",
    explanation:
      "**Kunstmatige intelligentie (AI)** = computers die taken doen die mensen 'intelligent' lijken.\n\n**Geschiedenis**:\n• 1950: Alan Turing — *Turing-test* (kan machine doen alsof het mens is?).\n• 1956: Dartmouth Conference — term 'AI' ingevoerd.\n• 'AI winters' 1970s + 1990s — beloften kwamen niet uit.\n• 2010s: **deep learning** doorbraak (GPU's, big data, beter algoritmes).\n• 2017: 'Transformer'-architectuur (Google) → basis huidige LLMs.\n• 2022-2024: **ChatGPT, GPT-4, Claude, Gemini** — generatieve AI revolutie.\n• 2025+: AI-agents, multimodaal, redenering.\n\n**Soorten AI**:\n\n**Smal/Narrow AI** (huidig):\n• Specifieke taak: schaken, spamfilter, gezichtsherkenning, ChatGPT.\n• Geen algemeen begrip wereld.\n\n**Algemene AI (AGI)** (theoretisch):\n• Even capabel als mens in alle taken.\n• Niet bereikt — hot debat hoe ver weg.\n\n**Super-intelligente AI (ASI)** (speculatief):\n• Beter dan mens in alle taken.\n• Existentiële risico's-discussie.\n\n**Belangrijke technieken**:\n\n**Machine Learning (ML)**:\n• Niet expliciet geprogrammeerd — leert van data.\n• **Supervised**: training met gelabelde data.\n• **Unsupervised**: patronen ontdekken zonder labels.\n• **Reinforcement**: leren via beloning (AlphaGo, robots).\n\n**Deep Learning**:\n• Subset ML met **neurale netwerken** (vele lagen).\n• Geïnspireerd door brein-neuronen (vereenvoudigde versie).\n• **CNN** (Convolutional Neural Network): beelden.\n• **RNN/LSTM**: sequenties (tekst, tijd).\n• **Transformer**: huidige basis (BERT, GPT, Claude).\n\n**Large Language Models (LLM)**:\n• Getraind op enorme tekst (boeken, web, code).\n• Voorspelt 'volgend woord' op basis context.\n• Begrijpen niet écht — patroonherkenning op grote schaal.\n• Voorbeelden: GPT-4 (OpenAI), Claude (Anthropic), Gemini (Google).\n• Hallucinatie: kan plausibel-klinkende onzin produceren.\n\n**Toepassingen AI in 2024-25**:\n• Tekst: schrijven, samenvatting, vertaling, programmeren.\n• Beeld: DALL-E, Midjourney, Stable Diffusion.\n• Stem: spraakherkenning, voice cloning.\n• Video: SORA (OpenAI) genereert video.\n• Medisch: röntgen-analyse, diagnose-ondersteuning, drug-design.\n• Zelfrijdende auto's: Tesla Autopilot, Waymo.\n• Klantenservice: chatbots.\n• Wetenschap: AlphaFold (eiwit-vouwing) → Nobelprijs 2024 voor Hassabis + Jumper.\n\n**Ethische + maatschappelijke vragen**:\n\n**Bias** (vooringenomenheid):\n• AI getraind op data leert mens-bias.\n• Voorbeelden: gezichtsherkenning werkt slechter bij donkere huid; sollicitatie-AI bevoorkeurt mannen door verleden-data.\n• Aanpakken: diverse trainingsdata, audits, fairness-metrics.\n\n**Werk + automatisering**:\n• Routine-werk verdwijnt (administratie, klantenservice).\n• Nieuwe werkrollen (AI-supervisie, ethiek).\n• Discussie: massa-werkloosheid? Of nieuwe banen?\n• Mogelijk grote-omslag voor maatschappij.\n\n**Privacy**:\n• AI lerende van gebruikersdata (vaak zonder duidelijke toestemming).\n• Gezichtsherkenning in openbare ruimte.\n• China's social-credit-systeem als waarschuwing.\n\n**Misbruik**:\n• **Deepfakes**: nep-video's politici, BN'ers.\n• Desinformatie + AI-geschreven nepnieuws.\n• Auteursrechtschending (LLMs trainen op auteurs' werk zonder toestemming).\n• Wapen-AI (drones, autonome wapens).\n\n**EU AI Act** (2024):\n• Eerste grote AI-wet wereldwijd.\n• Risk-tiers: onaanvaardbaar verboden, hoog gereguleerd, beperkt transparant, minimaal vrij.\n• Bv. social scoring + onbewuste beïnvloeding-AI verboden.\n• Hoog-risico (medisch, kritieke infrastructuur, HR): strenge regels.\n• Boetes tot 7% wereldwijde omzet.\n\n**Toekomst** (speculatief):\n• **AGI**: 5 jaar? 50 jaar? Onbekend.\n• **Singularity**: theorie dat AI snel zichzelf verbetert → boven mens.\n• Klimaat: AI-data-centers gebruiken veel energie (~3% wereldwijd elektriciteit 2024, groeiend).\n• Politiek: wie heeft macht — VS-bedrijven dominate, China inhaalt, EU regelmaker.",
    checks: [
      {
        q: "**Turing-test** test:",
        options: ["Of machine onderscheidbaar is van mens","Computerkracht","Internetsnelheid","Programma-correctheid"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "1950 Turing", tekst: "**Alan Turing** stelde 1950 voor: machine is 'intelligent' als mens in tekst-conversatie niet kan onderscheiden of antwoord van mens of machine komt. **Turing-test**. Beperkt criterium (geen begrip-vereiste), maar invloedrijk. ChatGPT slaagt vaak — definitie 'intelligent' nu omstreden." }],
          niveaus: { basis: "Mens vs machine onderscheiden. A.", simpeler: "Turing = mens-of-machine = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**LLM** staat voor:",
        options: ["Large Language Model","Long Linked Memory","Latin Letters Model","Last Logic Module"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Voorspel volgend woord", tekst: "**LLM = Large Language Model**: model getraind op enorme tekst-corpus dat 'volgend woord' voorspelt op basis context. Voorbeelden: **ChatGPT** (OpenAI), **Claude** (Anthropic), **Gemini** (Google), **LLaMA** (Meta open source). Onderscheid: niet **denken** — herkennen patronen op grote schaal." }],
          niveaus: { basis: "LLM. A.", simpeler: "LLM = taalmodel = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is **AI-hallucinatie**?",
        options: ["AI produceert plausibel-klinkende onzin","AI-storing","Visuele AI","Geluidsverwerking"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Verzonnen feiten", tekst: "**Hallucinatie**: LLM produceert antwoord dat **plausibel klinkt** maar **onjuist** is. Bv. verzint feiten, bronnen, citaten. Komt door: LLM is patroon-voorspeller, niet feit-checker. **Gevolg**: niet blind vertrouwen, altijd verifiëren. Modellen worden beter (RAG = Retrieval Augmented Generation hangt feiten erbij) maar probleem blijft." }],
          niveaus: { basis: "Plausibele onzin. A.", simpeler: "Hallucinatie = verzinnen = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**AI-bias** ontstaat door:",
        options: ["Vooringenomen trainingsdata","Computer-fouten","Magie","Stroomstoring"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Garbage in, garbage out", tekst: "**Bias** = systemische vertekening in AI-output. Komt door **vooringenomen trainingsdata**. Voorbeelden:\n• Gezichtsherkenning: getraind op vooral lichte huidskleur → werkt slechter op donkere.\n• Amazon-sollicitatie-AI: getraind op CV's mannen → discrimineerde vrouwen.\n• LLM's: kunnen sexisme, racisme overnemen uit web-data.\n\nAanpakken: diverse data, audits, fairness-evaluaties." }],
          niveaus: { basis: "Trainingsdata. A.", simpeler: "Bias = vooringenomen data = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**EU AI Act** (2024) reguleert AI op basis van:",
        options: ["Risico-niveau","Land van oorsprong","Prijs","Gebruikers-aantal"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Risicogebaseerd", tekst: "**EU AI Act** (eerste grote AI-wet wereldwijd, 2024): **risico-niveau-aanpak**:\n• **Onaanvaardbaar** (verboden): social scoring (China-stijl), realtime biometrie publieke ruimte, manipulatie.\n• **Hoog risico**: medisch, kritieke infra, HR, onderwijs-AI — strenge regels.\n• **Beperkt risico** (transparantie): chatbots, deepfakes moeten gemarkeerd.\n• **Minimaal**: vrije gebruik (zoals spamfilter).\n\nBoetes tot 7% wereldwijde omzet. NL implementeert via aanvullende wet 2025." }],
          niveaus: { basis: "Risico-niveau. A.", simpeler: "AI Act = risico-tiers = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — Informatica mix",
    explanation:
      "Mix van programmeren + netwerken + databases + AI.\n\nVeel succes!",
    checks: [
      {
        q: "Hoeveel **operaties** doet binair zoeken in lijst van 1 miljoen items (worst case)?",
        options: ["~20","~500.000","~1.000.000","~1.000"],
        answer: 0,
        wrongHints: [null, "Lineair worst case.", "Niet — veel minder.", "Te veel."],
        uitlegPad: {
          stappen: [{ titel: "log₂(1 miljoen) ≈ 20", tekst: "**Binair zoeken**: O(log n). log₂(1.000.000) ≈ **20**. Elke stap halveer je bereik: 1.000.000 → 500.000 → 250.000 → ... → 1.\n\nVergelijk: lineair zoeken = O(n) = gemiddeld 500.000 stappen.\n\nVerschil: 20 vs 500.000 = factor 25.000 sneller bij grote lijsten." }],
          niveaus: { basis: "~20. A.", simpeler: "log n = 20 = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk **protocol** stuurt e-mail?",
        options: ["SMTP","HTTP","FTP","DNS"],
        answer: 0,
        wrongHints: [null, "Web-pagina's.", "Bestanden.", "Naam → IP."],
        uitlegPad: {
          stappen: [{ titel: "SMTP", tekst: "**SMTP** (Simple Mail Transfer Protocol): voor **versturen** e-mail. **POP3** of **IMAP**: voor **ontvangen** (cliënt-server). HTTP = web, FTP = bestanden, DNS = naam→IP-vertaling." }],
          niveaus: { basis: "SMTP. A.", simpeler: "Mail = SMTP = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Hashing** wordt gebruikt voor:",
        options: ["Wachtwoorden veilig opslaan (one-way)","Encryptie tweezijdig","Bestandsoverdracht","Routing"],
        answer: 0,
        wrongHints: [null, "Niet — hash is one-way.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Eenrichtings-versleuteling", tekst: "**Hashing** (SHA-256, bcrypt): converteert input naar fixed-length output. **One-way**: kan niet terug. Toepassing: wachtwoorden — niet plain opslaan, maar hash. Bij login: hash invoer + vergelijk met opgeslagen hash. Database-lek → wachtwoorden niet direct bruikbaar (mits sterke hash + salt).\n\nVerschil met encryptie: encryptie is omkeerbaar (juiste sleutel → originele tekst). Hash niet." }],
          niveaus: { basis: "Wachtwoorden one-way. A.", simpeler: "Hash = one-way = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke is een **NoSQL-database**?",
        options: ["MongoDB","PostgreSQL","MySQL","Oracle"],
        answer: 0,
        wrongHints: [null, "Relationeel.", "Relationeel.", "Relationeel."],
        uitlegPad: {
          stappen: [{ titel: "Document-database", tekst: "**MongoDB** = NoSQL document-database (JSON-achtige documenten). **PostgreSQL, MySQL, Oracle, SQL Server** = relationele SQL-databases. NoSQL-typen ook: Redis (key-value), Cassandra (column), Neo4j (graph). Gebruikt voor schaalbare web-apps + flexibele schema's." }],
          niveaus: { basis: "MongoDB. A.", simpeler: "NoSQL = MongoDB = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Supervised learning** is:",
        options: ["ML met gelabelde trainingsdata","ML zonder data","Versleuteld leren","Schoolles"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Woord-grap."],
        uitlegPad: {
          stappen: [{ titel: "Supervised = met labels", tekst: "**Supervised learning**: model getraind op **gelabelde** voorbeelden (input + verwachte output). Voorbeeld: 10.000 foto's gelabeld 'kat' of 'hond' → model leert onderscheid. **Unsupervised**: zonder labels, vindt patronen zelf (clustering). **Reinforcement**: leren via beloning (zoals AlphaGo)." }],
          niveaus: { basis: "Gelabelde data. A.", simpeler: "Supervised = labels = A.", nogSimpeler: "A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const informaticaHavoVwo = {
  id: "informatica-havo-vwo",
  title: "Informatica kernconcepten (HAVO/VWO)",
  emoji: "💻",
  level: "havo4-5-vwo",
  subject: "informatica",
  referentieNiveau: "havo-vwo-CSE-informatica",
  sloThema: "Informatica HAVO/VWO — vernieuwd eindexamen sinds 2019",
  prerequisites: [
    { id: "algoritmen-programmeren-po", title: "Algoritmen + programmeren basis", niveau: "groep6-8" },
    { id: "digitale-geletterdheid-po", title: "Digitale geletterdheid", niveau: "groep6-8" },
  ],
  intro:
    "Informatica HAVO/VWO eindexamen (vernieuwd 2019). Programmeren + algoritmes (Python + O-notatie + datastructuren), netwerken + internet (TCP/IP + HTTPS + AVG), databases + data-modellering (SQL + JOIN + normalisatie + Big Data 4V), AI + maatschappij (ML + LLM + bias + EU AI Act). ~15-20 min.",
  triggerKeywords: [
    "informatica",
    "algoritme",
    "programmeren", "Python", "Java",
    "for-lus", "while-lus", "if-else",
    "functie", "parameter",
    "lijst", "array", "dictionary",
    "binair zoeken", "lineair zoeken",
    "bubble sort", "quick sort", "merge sort",
    "Big O", "O(n)", "O(log n)", "O(n²)",
    "OOP", "klasse", "object",
    "DRY",
    "netwerk", "LAN", "WAN",
    "internet", "TCP/IP",
    "IP-adres", "IPv4", "IPv6",
    "DNS",
    "HTTP", "HTTPS", "TLS", "SSL",
    "router", "pakket-schakeling",
    "encryptie", "AES", "RSA",
    "hashing", "SHA",
    "DDoS", "phishing", "malware",
    "firewall", "VPN", "2FA",
    "AVG", "GDPR",
    "WPA3",
    "IoT",
    "database", "DB",
    "SQL", "MySQL", "PostgreSQL",
    "NoSQL", "MongoDB",
    "primaire sleutel", "foreign key",
    "JOIN",
    "normalisatie", "1NF", "2NF", "3NF",
    "Big Data", "4 V's",
    "AI", "kunstmatige intelligentie",
    "Turing-test",
    "machine learning", "ML",
    "deep learning",
    "neuraal netwerk",
    "transformer",
    "LLM", "GPT", "ChatGPT", "Claude", "Gemini",
    "hallucinatie AI",
    "supervised learning", "unsupervised", "reinforcement",
    "AI bias",
    "deepfake",
    "EU AI Act",
    "AGI", "singularity",
  ],
  chapters,
  steps,
};

export default informaticaHavoVwo;
