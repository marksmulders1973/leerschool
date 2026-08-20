// 🏝️ Caribisch batch 2 + Suriname — Mark-go 20 aug 2026 ("go op alle punten dagrapport").
// Bron: docs/outreach/CARIBISCH-OUTREACH.md (teksten voorbereid + akkoord 9 aug).
// Dag 1 (do 20 aug, standaard): Variant E (eilanden-NL, 18) + Variant EN (Engelstalig, 9).
// Dag 2 (vr 21 aug, met vlag --suriname): Variant S (14) — zelfde dag ook FB-spoor via browser.
// Route: Resend vanaf hallo@leerkwartier.app, reply-to Mark's Gmail. --proef = alles naar Mark.

import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const env = readFileSync(join(homedir(), ".claude", "resend-lokaal.env"), "utf8");
const KEY = env.match(/RESEND_API_KEY=(\S+)/)?.[1];
if (!KEY) { console.error("Geen RESEND_API_KEY"); process.exit(1); }

const PROEF = process.argv.includes("--proef");
const SURINAME = process.argv.includes("--suriname");

/* ── categorie-zinnen (uit het sjabloon in CARIBISCH-OUTREACH.md) ── */
const ZIN_BIEB = " Voor bibliotheken maak ik graag een A4 met QR-code voor bij de jeugdafdeling.";
const ZIN_NGO = " Organisaties die met gezinnen werken kunnen bovendien een eigen partner-code krijgen waarmee die gezinnen ook de extra's gratis houden.";
const ZIN_SCHOOL = " Leerkrachten kunnen er bovendien gratis oefen-lijstjes mee klaarzetten voor hun klas (leerkwartier.app/leerkracht-takenlijst.html).";

/* ── Variant E — eilanden-rest NL (do 20 aug) ── */
const EILANDEN_NL = [
  { naam: "Biblioteka Públiko Boneiru", email: "info@bibliotheekbonaire.com", zin: ZIN_BIEB },
  { naam: "Biblioteka Nashonal Kòrsou", email: "Info@bnkcuracao.com", zin: ZIN_BIEB },
  { naam: "Biblioteca Nacional Aruba", email: "info@bibliotecanacional.aw", zin: ZIN_BIEB },
  { naam: "Philipsburg Jubilee Library", email: "info@sxmlibrary.org", zin: ZIN_BIEB },
  { naam: "EOZ Bonaire", email: "info@eoz-bonaire.org", zin: ZIN_NGO },
  { naam: "Jong Bonaire", email: "info@jongbonaire.org", zin: ZIN_NGO },
  { naam: "Kid's College Bonaire", email: "kidscollegebonaire@gmail.com", zin: ZIN_NGO },
  { naam: "CEDE Aruba", email: "info@cedearuba.org", zin: ZIN_NGO },
  { naam: "Basisschool De Pelikaan", email: "info@bsdepelikaan.com", zin: ZIN_SCHOOL },
  { naam: "Basisschool Aquamarin", email: "basisschoolaquamarin@hotmail.com", zin: ZIN_SCHOOL },
  { naam: "IKC San Bernardo", email: "adm.ksb@birgenmaria.org", zin: ZIN_SCHOOL },
  { naam: "IKC San Luis Bertran", email: "adm.kslb@birgenmaria.org", zin: ZIN_SCHOOL },
  { naam: "IKC Kristu Bon Wardador", email: "adm.kkbw@birgenmaria.org", zin: ZIN_SCHOOL },
  { naam: "Skol Amplio Papa Cornes", email: "adm.sapc@birgenmaria.org", zin: ZIN_SCHOOL },
  { naam: "Kolegio Rayo di Solo", email: "rayodisolo@stichtingoob.com", zin: ZIN_SCHOOL },
  { naam: "Kolegio Strea Briante", email: "streabriante@stichtingoob.com", zin: ZIN_SCHOOL },
  { naam: "het Ministerie van OWCS Curaçao", email: "OWCS.Communicatie@gobiernu.cw", zin: "" },
  { naam: "Departamento di Enseñansa Aruba", email: "info@ea.aw", zin: "" },
];

const tekstE = ({ naam, zin }) => `Beste team van ${naam},

Mijn naam is Mark Smulders. Ik ben operator bij Sonac in Vuren (Nederland), en in mijn vrije tijd bouwde ik Leerkwartier: een gratis leer-app waarmee kinderen (±9-12 jaar) elke dag een kwartier oefenen met rekenen, taal en begrijpend lezen — met uitleg die simpeler wordt zolang het kwartje nog niet valt.

Voor kinderen bij wie Nederlands wél de schooltaal maar niet de thuistaal is, is de app juist gebouwd: uitleg op drie niveaus (basis, simpeler, nog simpeler), korte zinnen en een voorleesknop. De app werkt zonder account, is licht qua data, en er zijn printbare werkbladen voor gezinnen met beperkt internet.

Er zijn gelukkig al organisaties in Nederland die met ons meedoen — wie dat zijn ziet u op leerkwartier.app/bedankt.html.

Mijn vraag is klein: zou u leerkwartier.app willen noemen richting de gezinnen en kinderen die u helpt — in een nieuwsbrief, op een poster of gewoon mondeling? Ik maak alles kosteloos op maat, ook met uw logo.${zin}

Er zit geen addertje onder het gras: gratis in 2026, geen account nodig, geen reclame.

Meer over ons: leerkwartier.app/voor-organisaties.html · linkedin.com/company/leerkwartier

Hartelijke groet,
Mark Smulders — leerkwartier.app`;

/* ── Variant EN — Engelstalig Saba/Statia/SXM (do 20 aug) ── */
const ENGELSTALIG = [
  { naam: "Sacred Heart School", email: "info.shs@sabalearns.org" },
  { naam: "Saba Comprehensive School", email: "administration@learningsaba.com" },
  { naam: "EC2 Saba", email: "director.ec2@sabalearns.org" },
  { naam: "Queen Wilhelmina Library", email: "info@qwlsaba.com" },
  { naam: "Gwendoline van Putten School", email: "gvpschool@yahoo.com" },
  { naam: "Governor de Graaff School", email: "govdegraaff@hotmail.com" },
  { naam: "Gertrude Judson Bicentennial Public Library", email: "publiclibrary.steustatius@gmail.com" },
  { naam: "St. Maarten Academy", email: "info@stmaartenacademy.com" },
  { naam: "SMDF", email: "info@smdf.sx" },
];

const tekstEN = ({ naam }) => `Dear team of ${naam},

My name is Mark Smulders. I work as an operator at a factory in the Netherlands, and in my free time I built Leerkwartier ("Quarter-hour of learning"): a free Dutch-language practice app where children practise maths, Dutch language and reading comprehension for fifteen minutes a day — with explanations that get simpler until the penny drops (three levels), plus a read-aloud button.

For your students, the app can be especially useful for the subject of Dutch: short sentences, simple Dutch, and audio support for children who don't speak Dutch at home. It runs in the browser without an account, uses little data, and free printable worksheets are available.

In the Netherlands, food banks and children's charities already point families to the app (see leerkwartier.app/bedankt.html).

My question is a small one: would you consider mentioning leerkwartier.app to your teachers, students or families — in a newsletter or a short message? I'll gladly make a one-page flyer with your logo, free of charge.

No strings attached: free in 2026, no account needed, no ads.

More about us: leerkwartier.app/voor-organisaties.html · linkedin.com/company/leerkwartier

Kind regards,
Mark Smulders — leerkwartier.app`;

/* ── Variant S — Suriname (vr 21 aug, --suriname) ──
   NB: de zin "Sinds deze maand… Caribisch gebied" is WEGGELATEN — batch 1 heeft
   nog geen positieve reactie (eerlijk blijven, zie doc-noot). */
const SURINAME_LIJST = [
  { naam: "het secretariaat van de Minister van Onderwijs (MinOWC)", email: "minister@minowc.sr", wie: "uw scholen" },
  { naam: "de directie Algemeen Vormend Onderwijs (MinOWC)", email: "directeur-avo@minowc.sr", wie: "uw scholen" },
  { naam: "de Ontwikkelingsdienst (MinOWC)", email: "onderdirecteur-ods@minowc.sr", wie: "uw scholen" },
  { naam: "het RKBO", email: "secretariaat@rkbo.sr", wie: "uw scholen" },
  { naam: "de SOEBGS", email: "info@soebgs.sr", wie: "uw scholen" },
  { naam: "Sanatan Dharm Maha Sabha", email: "sanatandharmsurinamehb@gmail.com", wie: "uw scholen" },
  { naam: "de Arya Dewaker scholengemeenschap", email: "stg.scholengem.aryadewaker@gmail.com", wie: "uw scholen" },
  { naam: "de SIS", email: "sis.secretariaat@yahoo.com", wie: "uw scholen" },
  { naam: "de CCS — Algemene Openbare Bibliotheek", email: "stgcss@yahoo.com", wie: "uw lezers" },
  { naam: "Stichting Boekenportaal Suriname", email: "info@boekenportaal.sr", wie: "uw lezers" },
  { naam: "Stichting Projekta", email: "projekta@sr.net", wie: "de gezinnen die u helpt" },
  { naam: "Kansrijk Suriname", email: "secretaris.ks@gmail.com", wie: "de gezinnen die u helpt" },
  { naam: "Villa Zapakara", email: "info@villazapakara.com", wie: "uw bezoekers en gezinnen" },
  { naam: "SchoolTV.sr", email: "education@dragon1.com", wie: "uw kijkers en scholen" },
];

const tekstS = ({ naam, wie }) => `Beste team van ${naam},

Mijn naam is Mark Smulders. Ik ben operator bij Sonac in Vuren (Nederland), en in mijn vrije tijd bouwde ik Leerkwartier: een gratis leer-app waarmee kinderen van ongeveer 9 tot 12 jaar elke dag een kwartier oefenen met rekenen, taal en begrijpend lezen — in het Nederlands, met uitleg die simpeler wordt zolang het kwartje nog niet valt (drie niveaus: basis, simpeler, nog simpeler), en een voorleesknop.

Belangrijk voor Suriname: de app werkt in de browser zónder account, is bewust licht gehouden (weinig data nodig, ook op een eenvoudige telefoon) en er zijn gratis printbare werkbladen voor kinderen zonder goed internet thuis.

Er zijn gelukkig al organisaties in Nederland die met ons meedoen — wie dat zijn ziet u op leerkwartier.app/bedankt.html.

Mijn vraag is klein: zou u leerkwartier.app willen noemen richting ${wie} — in een nieuwsbrief, een oudergroep of op een poster? Leerkrachten kunnen er bovendien gratis oefen-lijstjes mee klaarzetten voor hun klas (leerkwartier.app/leerkracht-takenlijst.html). Ik maak alles kosteloos op maat, ook met uw logo.

Er zit geen addertje onder het gras: gratis in 2026, geen account nodig, geen reclame, geen verkooppraatje erachter.

Meer over ons: leerkwartier.app/voor-organisaties.html · linkedin.com/company/leerkwartier

Hartelijke groet,
Mark Smulders — leerkwartier.app`;

/* ── versturen ── */
const BATCHES = SURINAME
  ? [{ label: "Suriname (Variant S)", lijst: SURINAME_LIJST, tekst: tekstS, onderwerp: "Gratis Nederlandstalige oefen-app voor rekenen, taal en lezen" }]
  : [
      { label: "Eilanden-NL (Variant E)", lijst: EILANDEN_NL, tekst: tekstE, onderwerp: "Gratis Nederlandse oefen-app voor de kinderen die u helpt" },
      { label: "Engelstalig (Variant EN)", lijst: ENGELSTALIG, tekst: tekstEN, onderwerp: "Free Dutch-language practice app for your students" },
    ];

let ok = 0, fout = 0, totaal = 0;
for (const b of BATCHES) {
  const doel = PROEF ? [{ ...b.lijst[0], email: "marksmulders1973@gmail.com" }] : b.lijst;
  console.log(`\n── ${b.label} (${doel.length}) ──`);
  for (const s of doel) {
    totaal++;
    try {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "Mark Smulders — Leerkwartier <hallo@leerkwartier.app>",
          to: [s.email],
          reply_to: "marksmulders1973@gmail.com",
          subject: b.onderwerp,
          text: b.tekst(s),
        }),
      });
      const j = await r.json().catch(() => ({}));
      if (r.ok) { ok++; console.log(`OK  ${s.naam} <${s.email}>`); }
      else { fout++; console.log(`FOUT ${s.naam} <${s.email}> ${r.status}: ${JSON.stringify(j).slice(0, 140)}`); }
    } catch (e) { fout++; console.log(`FOUT ${s.naam}: ${e.message}`); }
    await new Promise((res) => setTimeout(res, 1300));
  }
}
console.log(`\nKlaar: ${ok} verstuurd, ${fout} mislukt (van ${totaal}).`);
