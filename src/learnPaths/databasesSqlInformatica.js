// Leerpad: Databases & SQL — Informatica HAVO/VWO
// Wat is een database, relationeel model (tabel/sleutel/relatie),
// SQL opvragen (SELECT/WHERE), SQL bewerken + tellen + integriteit. 4 stappen.

const stepEmojis = ["🗄️", "🔑", "🔍", "✏️"];

const chapters = [
  { letter: "A", title: "Wat is een database?", emoji: "🗄️", from: 0, to: 0 },
  { letter: "B", title: "Het relationele model", emoji: "🔑", from: 1, to: 1 },
  { letter: "C", title: "SQL — gegevens opvragen", emoji: "🔍", from: 2, to: 2 },
  { letter: "D", title: "SQL bewerken & integriteit", emoji: "✏️", from: 3, to: 3 },
];

const steps = [
  // ─── A. Wat is een database? ──────────────────────────────
  {
    title: "Wat is een database?",
    explanation:
      "Een **database** is een **geordende verzameling gegevens** die je makkelijk kunt opslaan, opzoeken en bijwerken. Bijna elke app (webshop, school, social media, deze leer-app) gebruikt er een.\n\n**Waarom niet gewoon een los bestand?**\nIn een database staan gegevens **gestructureerd** in **tabellen**, zodat je razendsnel kunt zoeken, filteren en combineren — ook bij miljoenen gegevens. Een los tekstbestand wordt dan onhandelbaar.\n\n**De bouwstenen van een tabel:**\n• Een **tabel** gaat over één soort ding (bv. een tabel `Leerlingen`).\n• Een **record** (rij) = één exemplaar (één leerling).\n• Een **veld** (kolom) = één eigenschap (bv. naam, groep, geboortejaar).\n\nVoorbeeld — tabel `Leerlingen`:\n```\n id | naam   | groep | geboortejaar\n----+--------+-------+--------------\n  1 | Sara   |   7   |     2016\n  2 | Tim    |   8   |     2015\n  3 | Noor   |   7   |     2016\n```\nHier zijn **id, naam, groep, geboortejaar** de **velden**, en elke regel (Sara, Tim, Noor) is een **record**.\n\nEen programma dat databases beheert heet een **DBMS** (DataBase Management System), bv. MySQL, PostgreSQL of SQLite.",
    checks: [
      {
        q: "Wat is een **database**?",
        options: ["Een geordende verzameling gegevens", "Eén losse foto", "Een programmeertaal", "Een netwerkkabel"],
        answer: 0,
        wrongHints: [null, "Een database bevat juist heel veel gegevens, geordend.", "Een taal is iets anders (bv. SQL ondervraagt een database).", "Dat is hardware."],
        uitlegPad: {
          stappen: [{ titel: "Geordend opslaan", tekst: "Een **database** is een **gestructureerde verzameling gegevens** die je snel kunt opslaan, zoeken en bijwerken — opgeslagen in **tabellen**. Bijna elke app gebruikt er een. Een DBMS (zoals MySQL of PostgreSQL) beheert de database." }],
          niveaus: { basis: "Geordende gegevens.", simpeler: "Database = geordende gegevens", nogSimpeler: "A." },
        },
      },
      {
        q: "In een tabel: wat is een **record**?",
        options: ["Eén rij — één exemplaar (bv. één leerling)", "Eén kolom/eigenschap", "De naam van de tabel", "Een foutmelding"],
        answer: 0,
        wrongHints: [null, "Dat is juist een veld (kolom).", "De tabelnaam is iets anders.", "Een record is gewoon data, geen fout."],
        uitlegPad: {
          stappen: [{ titel: "Rij = record, kolom = veld", tekst: "Een **record** is één **rij** in de tabel = één exemplaar (bv. de leerling 'Sara'). Een **veld** is één **kolom** = één eigenschap (bv. naam of groep). De tabel `Leerlingen` bevat dus meerdere records, elk met dezelfde velden." }],
          niveaus: { basis: "Een rij.", simpeler: "Record = rij", nogSimpeler: "A." },
        },
      },
      {
        q: "Waarom een database in plaats van één groot tekstbestand?",
        options: ["Snel zoeken/filteren/combineren, ook bij veel data", "Het is mooier om te lezen", "Bestanden bestaan niet meer", "Een database kost geen ruimte"],
        answer: 0,
        wrongHints: [null, "Het gaat om snelheid en structuur, niet om uiterlijk.", "Bestanden bestaan natuurlijk gewoon.", "Een database kost wel degelijk opslag."],
        uitlegPad: {
          stappen: [{ titel: "Structuur = snelheid", tekst: "In een database staan gegevens **gestructureerd** in tabellen, zodat je razendsnel kunt **zoeken, filteren en combineren** — ook bij miljoenen records. In een los tekstbestand zou je alles regel voor regel moeten doorzoeken; dat wordt onwerkbaar." }],
          niveaus: { basis: "Snel zoeken bij veel data.", simpeler: "Database = snel zoeken", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── B. Het relationele model ─────────────────────────────
  {
    title: "Het relationele model — sleutels & relaties",
    explanation:
      "De meeste databases zijn **relationeel**: gegevens staan in **meerdere tabellen** die aan elkaar gekoppeld zijn. Zo voorkom je dat je dezelfde informatie steeds opnieuw opschrijft.\n\n**Primaire sleutel (primary key):**\nElk record heeft een **uniek kenmerk** waarmee je het kunt aanwijzen, meestal een `id`. Geen twee records hebben dezelfde primaire sleutel. (Twee leerlingen kunnen 'Sara' heten, maar hebben een verschillend id.)\n\n**Relatie via een verwijssleutel (foreign key):**\nIn een andere tabel verwijs je naar dat id. Voorbeeld:\n```\nTabel Leerlingen          Tabel Toetsen\n id | naam               id | leerling_id | vak     | cijfer\n----+------             ----+------------+---------+-------\n  1 | Sara                1 |     1      | rekenen |  8\n  2 | Tim                 2 |     1      | taal    |  7\n                         3 |     2      | rekenen |  6\n```\nDe kolom `leerling_id` in **Toetsen** is een **foreign key** die verwijst naar de primaire sleutel `id` in **Leerlingen**. Toets 1 en 2 horen dus bij Sara (id 1).\n\n**Waarom opsplitsen in tabellen?**\n• Je schrijft de naam 'Sara' maar **één keer** op (in Leerlingen), niet bij elke toets.\n• Verandert haar naam? Eén plek aanpassen.\n• Minder fouten en **dubbele gegevens** (redundantie).\n\nDit netjes opsplitsen heet **normaliseren**.",
    checks: [
      {
        q: "Wat is een **primaire sleutel** (primary key)?",
        options: ["Een uniek kenmerk dat elk record aanwijst", "Een wachtwoord voor de database", "De grootste kolom", "Een tabel zonder gegevens"],
        answer: 0,
        wrongHints: [null, "Het is geen wachtwoord, maar een identificatie.", "Grootte heeft er niets mee te maken.", "Een sleutel is een veld, geen lege tabel."],
        uitlegPad: {
          stappen: [{ titel: "Uniek per record", tekst: "Een **primaire sleutel** (vaak `id`) is een **uniek** kenmerk: geen twee records hebben dezelfde. Daarmee kun je elk record precies aanwijzen — ook als twee mensen dezelfde naam hebben. Het is de 'identiteitskaart' van een rij." }],
          niveaus: { basis: "Uniek kenmerk per record.", simpeler: "Primaire sleutel = uniek id", nogSimpeler: "A." },
        },
      },
      {
        q: "Een **foreign key** (verwijssleutel) wordt gebruikt om…",
        options: ["Tabellen aan elkaar te koppelen (verwijzen naar een ander record)", "De database te beveiligen", "Een back-up te maken", "Tekst te versleutelen"],
        answer: 0,
        wrongHints: [null, "Beveiliging is een andere zaak.", "Een back-up is iets anders.", "Versleuteling hoort bij beveiliging, niet bij sleutels-relaties."],
        uitlegPad: {
          stappen: [{ titel: "Verwijzen naar een primaire sleutel", tekst: "Een **foreign key** is een veld in de ene tabel dat **verwijst naar de primaire sleutel** van een andere tabel. Zo koppel je records: `leerling_id` in Toetsen verwijst naar `id` in Leerlingen, zodat je weet welke toets bij welke leerling hoort." }],
          niveaus: { basis: "Tabellen koppelen.", simpeler: "Foreign key = koppeling", nogSimpeler: "A." },
        },
      },
      {
        q: "Waarom splits je gegevens op in meerdere gekoppelde tabellen?",
        options: ["Om dubbele gegevens (redundantie) te voorkomen", "Om de database trager te maken", "Omdat één tabel niet mag", "Om meer wachtwoorden te hebben"],
        answer: 0,
        wrongHints: [null, "Het maakt het juist beter, niet trager.", "Eén tabel mag prima — opsplitsen is een keuze tegen dubbele data.", "Wachtwoorden hebben er niets mee te maken."],
        uitlegPad: {
          stappen: [{ titel: "Eén keer opschrijven", tekst: "Door op te splitsen (normaliseren) schrijf je elk gegeven **maar één keer** op (de naam 'Sara' staat alleen in Leerlingen). Verandert er iets? Eén plek aanpassen. Dat voorkomt **dubbele gegevens** en fouten." }],
          niveaus: { basis: "Geen dubbele data.", simpeler: "Opsplitsen = geen dubbel", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── C. SQL — opvragen ────────────────────────────────────
  {
    title: "SQL — gegevens opvragen",
    explanation:
      "Met **SQL** (Structured Query Language) praat je met een relationele database: gegevens opvragen, toevoegen, wijzigen, verwijderen.\n\n**Opvragen met SELECT:**\n```\nSELECT naam, groep\nFROM Leerlingen\nWHERE groep = 8;\n```\nLees dit als: 'geef de **naam** en **groep** **uit** de tabel Leerlingen **waarbij** de groep gelijk is aan 8'.\n\n• **SELECT** = welke velden (kolommen) je wilt zien. `SELECT *` = álle kolommen.\n• **FROM** = uit welke tabel.\n• **WHERE** = een **voorwaarde** (filter) — alleen records die eraan voldoen.\n\n**Voorbeelden van voorwaarden:**\n• `WHERE groep = 7`\n• `WHERE cijfer >= 6` (voldoende)\n• `WHERE naam = 'Sara'` (tekst tussen aanhalingstekens)\n• `WHERE groep = 8 AND cijfer >= 6` (combineren met AND/OR)\n\n**Sorteren:** `ORDER BY cijfer DESC` zet de hoogste cijfers bovenaan (DESC = aflopend, ASC = oplopend).\n\nSQL lijkt op bijna-Engels — dat maakt het leesbaar. Een query (vraag) verandert niets aan de data; hij **haalt op**.",
    checks: [
      {
        q: "Welk SQL-woord bepaalt **welke kolommen** je terugkrijgt?",
        options: ["SELECT", "FROM", "WHERE", "ORDER BY"],
        answer: 0,
        wrongHints: [null, "FROM bepaalt de tabel, niet de kolommen.", "WHERE is de filter (voorwaarde).", "ORDER BY sorteert, kiest geen kolommen."],
        uitlegPad: {
          stappen: [{ titel: "SELECT = kies kolommen", tekst: "**SELECT** geeft aan **welke velden (kolommen)** je wilt zien: `SELECT naam, groep` of `SELECT *` voor alles. **FROM** kiest de tabel, **WHERE** filtert de rijen." }],
          niveaus: { basis: "SELECT.", simpeler: "Kolommen kiezen = SELECT", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat doet **`WHERE cijfer >= 6`** in een query?",
        options: ["Toont alleen records met cijfer 6 of hoger", "Verandert alle cijfers in 6", "Verwijdert lage cijfers", "Sorteert op cijfer"],
        answer: 0,
        wrongHints: [null, "WHERE wijzigt niets — het filtert alleen.", "WHERE verwijdert niets; het selecteert.", "Sorteren doet ORDER BY."],
        uitlegPad: {
          stappen: [{ titel: "WHERE = filter", tekst: "**WHERE** is een **voorwaarde**: alleen records die eraan voldoen komen terug. `WHERE cijfer >= 6` toont de voldoendes. Een SELECT-query **verandert de data niet** — het haalt alleen op." }],
          niveaus: { basis: "Filtert op ≥6.", simpeler: "WHERE = filter", nogSimpeler: "A." },
        },
      },
      {
        q: "Je wilt **alle kolommen** van álle leerlingen in groep 7. Welke query?",
        options: ["SELECT * FROM Leerlingen WHERE groep = 7;", "DELETE FROM Leerlingen;", "SELECT 7 FROM groep;", "WHERE Leerlingen = 7;"],
        answer: 0,
        wrongHints: [null, "DELETE verwijdert juist gegevens — gevaarlijk hier.", "De volgorde/namen kloppen niet (groep is een kolom, geen tabel).", "Een query begint niet met WHERE; SELECT/FROM ontbreken."],
        uitlegPad: {
          stappen: [{ titel: "SELECT * = alle kolommen", tekst: "`SELECT * FROM Leerlingen WHERE groep = 7;` → de **ster (*)** betekent alle kolommen, **FROM Leerlingen** is de tabel, **WHERE groep = 7** filtert op groep 7. Let op: **DELETE** zou records wíssen — dat wil je hier niet." }],
          niveaus: { basis: "SELECT * ... WHERE groep=7.", simpeler: "Alles ophalen = SELECT *", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── D. SQL bewerken & integriteit ────────────────────────
  {
    title: "SQL bewerken, tellen & data-integriteit",
    explanation:
      "Naast opvragen kun je met SQL ook gegevens **toevoegen, wijzigen en verwijderen**:\n\n• **INSERT** — een record toevoegen:\n```\nINSERT INTO Leerlingen (naam, groep) VALUES ('Lina', 7);\n```\n• **UPDATE** — een record wijzigen (gebruik WHERE, anders pas je álles aan!):\n```\nUPDATE Leerlingen SET groep = 8 WHERE id = 1;\n```\n• **DELETE** — een record verwijderen (ook met WHERE!):\n```\nDELETE FROM Leerlingen WHERE id = 3;\n```\n⚠️ `DELETE FROM Leerlingen;` zónder WHERE wist **alle** leerlingen. Bij UPDATE/DELETE is de WHERE dus levensbelangrijk.\n\n**Tellen en samenvatten** (aggregatie):\n• `SELECT COUNT(*) FROM Leerlingen;` → hoeveel leerlingen.\n• `SELECT AVG(cijfer) FROM Toetsen;` → gemiddeld cijfer.\n• `MAX`, `MIN`, `SUM` werken vergelijkbaar.\n\n**Data-integriteit (gegevens kloppend houden):**\n• **Validatie**: een veld dat een datum hoort te zijn, accepteert geen 'banaan'.\n• **Geen dubbele sleutels**: de database weigert twee records met dezelfde primaire sleutel.\n• **Back-ups**: regelmatig een kopie, zodat je bij een fout of crash niets kwijt bent.\n\nEn natuurlijk: bevat de database **persoonsgegevens** (namen, cijfers), dan geldt de **AVG** — alleen opslaan wat nodig is, en veilig bewaren.",
    checks: [
      {
        q: "Welk SQL-commando **verwijdert** een record?",
        options: ["DELETE", "SELECT", "ORDER BY", "INSERT"],
        answer: 0,
        wrongHints: [null, "SELECT haalt alleen op, verwijdert niets.", "ORDER BY sorteert.", "INSERT voegt juist toe."],
        uitlegPad: {
          stappen: [{ titel: "DELETE wist — gebruik WHERE!", tekst: "**DELETE** verwijdert records: `DELETE FROM Leerlingen WHERE id = 3;`. ⚠️ Zónder **WHERE** wist `DELETE FROM Leerlingen;` **alle** rijen. Daarom is de WHERE bij DELETE (en UPDATE) levensbelangrijk." }],
          niveaus: { basis: "DELETE.", simpeler: "Verwijderen = DELETE", nogSimpeler: "A." },
        },
      },
      {
        q: "Waarom is bij **UPDATE** en **DELETE** een **WHERE** zo belangrijk?",
        options: ["Zonder WHERE pas je álle records aan / wis je alles", "Anders werkt de query niet", "Het maakt de query mooier", "WHERE versnelt de database"],
        answer: 0,
        wrongHints: [null, "De query werkt juist wél — op álles, en dat is het gevaar.", "Het gaat om veiligheid, niet om uiterlijk.", "Snelheid is hier niet het punt."],
        uitlegPad: {
          stappen: [{ titel: "Geen WHERE = alles", tekst: "**WHERE** bepaalt wélke records geraakt worden. Vergeet je 'm bij UPDATE of DELETE, dan wordt **élk** record aangepast of gewist. `DELETE FROM Leerlingen;` = alle leerlingen weg. Daarom altijd eerst de WHERE controleren." }],
          niveaus: { basis: "Anders raak je alles.", simpeler: "Zonder WHERE = alles", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke SQL-functie geeft het **aantal** records?",
        options: ["COUNT(*)", "AVG", "DELETE", "ORDER BY"],
        answer: 0,
        wrongHints: [null, "AVG geeft het gemiddelde, niet het aantal.", "DELETE verwijdert.", "ORDER BY sorteert."],
        uitlegPad: {
          stappen: [{ titel: "Aggregatie", tekst: "**COUNT(*)** telt het aantal records: `SELECT COUNT(*) FROM Leerlingen;`. Andere samenvat-functies: **AVG** (gemiddelde), **SUM** (totaal), **MAX/MIN** (hoogste/laagste). Handig om snel iets over een hele tabel te weten." }],
          niveaus: { basis: "COUNT(*).", simpeler: "Aantal tellen = COUNT", nogSimpeler: "A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const databasesSqlInformatica = {
  id: "databases-sql-informatica",
  title: "Databases & SQL (Informatica)",
  emoji: "🗄️",
  level: "havo4-5-vwo",
  subject: "informatica",
  referentieNiveau: "havo-vwo-informatica-domein-databases",
  sloThema: "Informatica HAVO/VWO — gegevens gestructureerd opslaan en opvragen met relationele databases en SQL",
  prerequisites: [],
  intro:
    "Hoe slaan apps hun gegevens op? Je leert wat een database is (tabellen, records, velden), het relationele model (primaire sleutel, foreign key, waarom opsplitsen), en SQL: gegevens opvragen met SELECT/WHERE/ORDER BY en bewerken met INSERT/UPDATE/DELETE — plus tellen (COUNT) en data-integriteit/AVG. ~15 min.",
  triggerKeywords: [
    "database", "databases", "tabel", "record", "veld", "DBMS",
    "relationeel", "relationele database",
    "primaire sleutel", "primary key", "foreign key", "verwijssleutel",
    "normaliseren", "redundantie",
    "SQL", "query", "SELECT", "FROM", "WHERE",
    "INSERT", "UPDATE", "DELETE", "ORDER BY",
    "COUNT", "AVG", "aggregatie",
    "data-integriteit", "MySQL", "PostgreSQL", "SQLite",
  ],
  chapters,
  steps,
};

export default databasesSqlInformatica;
