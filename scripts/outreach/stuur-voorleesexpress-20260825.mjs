// VoorleesExpress — 150 locaties, 25 aug 2026 (Mark-akkoord op concept
// "akkoord, verstuur deel 1"). Adressen: docs/outreach/voorleesexpress.md
// (20 aug site-geverifieerd op voorleesexpress.nl/onze-locaties/).
// Haak: voorlezen thuis + gratis oefenen = zelfde missie; Leesladder als brug.
// Dedup (5 geskipt, 145 verzendbaar):
//   - Haaksbergen = zelfde adres als Enschede (voorleesexpress@bibliotheekenschede.nl)
//   - Rijswijk = zelfde adres als Leidschendam-Voorburg (voorleesexpress@bibliotheekaandevliet.nl)
//   - Halderberge = zelfde projectleider (Elkie Adams) als Etten-Leur, landelijk domein
//   - Overbetuwe = zelfde projectleider (Antonin van Bergen) als Berg & Dal, zelfde org (obgz)
//   - Goes = zelfde projectleider (Marije Rozendaal) als Borsele, zelfde org (Oosterschelde)
// Resend free tier 100/dag → DEEL 1 = 49 (t/m Noord-Brabant/Dongen) vandaag,
// --deel2 = 48 (Drimmelen t/m Losser), --deel3 = 48 (Nijverdal t/m Zoetermeer).
// Route: Resend/hallo@, reply-to Mark's Gmail. --dry = alleen lijst tonen.

import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const env = readFileSync(join(homedir(), ".claude", "resend-lokaal.env"), "utf8");
const KEY = env.match(/RESEND_API_KEY=(\S+)/)?.[1];
if (!KEY) { console.error("Geen RESEND_API_KEY"); process.exit(1); }

const DEEL2 = process.argv.includes("--deel2");
const DEEL3 = process.argv.includes("--deel3");
const DRY = process.argv.includes("--dry");
const PROEF = process.argv.includes("--proef");

// Deel 1 — 49 (Drenthe t/m Noord-Brabant/Dongen; Overbetuwe geskipt)
const DEEL_1 = [
  { plaats: "Borger-Odoorn en Coevorden", email: "voorleesexpress@biblionetdrenthe.nl", aanhef: "Beste Marleen" },
  { plaats: "Emmen", email: "voorleesexpress@facet-emmen.nl", aanhef: "Beste Cathy" },
  { plaats: "Almere", email: "voorleesexpress@denieuwebibliotheek.nl", aanhef: "Beste Frieda" },
  { plaats: "Lelystad", email: "lelystad@voorleesexpress.nl", aanhef: "Beste Bojoura" },
  { plaats: "Noordoostpolder", email: "voorleesexpressnop@flevomeerbibliotheek.nl", aanhef: "Beste Esther" },
  { plaats: "Zeewolde", email: "voorleesexpresszeewolde@flevomeerbibliotheek.nl", aanhef: "Beste Anita" },
  { plaats: "Leeuwarden", email: "voorleesexpress@dbieb.nl", aanhef: "Beste Maaike" },
  { plaats: "Aalten en Oude IJsselstreek", email: "voorleesexpress@achterhoeksepoort.nl", aanhef: "Beste Raffaela" },
  { plaats: "Apeldoorn", email: "voorleesexpress@coda-apeldoorn.nl", aanhef: "Beste team van de VoorleesExpress Apeldoorn" },
  { plaats: "Arnhem", email: "voorleesexpress@rozet.nl", aanhef: "Beste Niesje" },
  { plaats: "Barneveld", email: "barneveld@voorleesexpress.nl", aanhef: "Beste Milou" },
  { plaats: "Berg & Dal", email: "voorleesexpressbergendal@obgz.nl", aanhef: "Beste Antonin" },
  { plaats: "Beuningen", email: "voorleesexpressbeuningen@obgz.nl", aanhef: "Beste Juliet" },
  { plaats: "Brummen en Voorst", email: "brummenvoorst@voorleesexpress.nl", aanhef: "Beste Fiona" },
  { plaats: "Doetinchem", email: "doetinchem@voorleesexpress.nl", aanhef: "Beste Jacqueline" },
  { plaats: "Ede", email: "voorleesexpress@cultura-ede.nl", aanhef: "Beste Riikka" },
  { plaats: "Epe", email: "epe@voorleesexpress.nl", aanhef: "Beste Mariska" },
  { plaats: "Lingewaard", email: "voorleesexpresslingewaard@obgz.nl", aanhef: "Beste Thelma en Martine" },
  { plaats: "Montferland", email: "montferland@voorleesexpress.nl", aanhef: "Beste Liesbeth" },
  { plaats: "Nijkerk", email: "voorleesexpress@bibliotheeknijkerk.nl", aanhef: "Beste Evanne" },
  { plaats: "Nijmegen", email: "nijmegen@voorleesexpress.nl", aanhef: "Beste Floor, Anita en Marjolijn" },
  { plaats: "Noord Veluwe", email: "noordveluwe@voorleesexpress.nl", aanhef: "Beste Geraldine" },
  { plaats: "Noordwest Veluwe", email: "voorleesexpress@bnwv.nl", aanhef: "Beste Ilona" },
  { plaats: "Oost-Achterhoek", email: "voorleesexpress@oostachterhoek.nl", aanhef: "Beste Danita" },
  { plaats: "Rivierenland", email: "voorleesexpress@bibliotheekrivierenland.nl", aanhef: "Beste Mirjam" },
  { plaats: "Scherpenzeel", email: "voorleesexpress@bibliotheekscherpenzeel.nl", aanhef: "Beste Alfred" },
  { plaats: "Veluwezoom", email: "voorleesexpress@dezoomerij.nl", aanhef: "Beste Margje" },
  { plaats: "Wageningen", email: "voorleesexpress@bblthk.nl", aanhef: "Beste Barbara" },
  { plaats: "Wijchen", email: "wijchen@voorleesexpress.nl", aanhef: "Beste Marieke" },
  { plaats: "Zevenaar", email: "voorleesexpress@liemerskunstwerk.nl", aanhef: "Beste Marjolein" },
  { plaats: "Zutphen en Lochem", email: "voorleesexpresszl@bijdebieb.nl", aanhef: "Beste Charise en Gwendolyn" },
  { plaats: "Eemsdelta", email: "voorleesexpresseemsdelta@biblionetgroningen.nl", aanhef: "Beste Mignon" },
  { plaats: "Stadskanaal", email: "voorleesexpress-stadskanaal@biblionetgroningen.nl", aanhef: "Beste Heleen" },
  { plaats: "Westerwolde", email: "voorleesexpresswesterwolde@biblionetgroningen.nl", aanhef: "Beste Tjitske" },
  { plaats: "Beekdaelen", email: "voorleesexpress@oblb.nl", aanhef: "Beste Daniella" },
  { plaats: "Heerlen", email: "voorleesexpress@schunck.nl", aanhef: "Beste Ilhame en Meryem" },
  { plaats: "Kerkrade", email: "voorleesexpress@mijnstreekbibliotheek.nl", aanhef: "Beste team van de VoorleesExpress Kerkrade" },
  { plaats: "Landgraaf", email: "voorleesexpress@bibliotheeklandgraaf.nl", aanhef: "Beste Katja" },
  { plaats: "Maastricht", email: "voorleesexpress@maastricht.nl", aanhef: "Beste Eric" },
  { plaats: "Meerssen", email: "voorleesexpress@bibliotheekmeerssen.nl", aanhef: "Beste Ilona" },
  { plaats: "Valkenburg", email: "voorleesexpress@heuvellandbibliotheken.nl", aanhef: "Beste Maartje" },
  { plaats: "'s-Hertogenbosch", email: "voorleesexpress@huis73.nl", aanhef: "Beste Charlotte" },
  { plaats: "Altena", email: "voorleesexpress@bibliotheekaltena.nl", aanhef: "Beste Marianne" },
  { plaats: "Bergen op Zoom", email: "britt.koopman@wijzijn.nl", aanhef: "Beste Britt" },
  { plaats: "Bernheze", email: "voorleesexpressbernheze@nobb.nl", aanhef: "Beste Hanneke" },
  { plaats: "Breda", email: "breda@voorleesexpress.nl", aanhef: "Beste Tamara" },
  { plaats: "De Kempen", email: "voorleesexpress@bibliotheekdekempen.nl", aanhef: "Beste Pascale" },
  { plaats: "Deurne", email: "voorleesexpressdeurne@levgroep.nl", aanhef: "Beste Marieke" },
  { plaats: "Dongen", email: "voorleesexpress.dongen@theek5.nl", aanhef: "Beste Ilonka" },
];

// Deel 2 — 48 (Drimmelen t/m Losser; Halderberge + Haaksbergen geskipt)
const DEEL_2 = [
  { plaats: "Drimmelen", email: "voorleesexpress.drimmelen@theek5.nl", aanhef: "Beste Yvonne" },
  { plaats: "Etten-Leur en Halderberge", email: "ettenleur@voorleesexpress.nl", aanhef: "Beste Elkie" },
  { plaats: "Geldrop", email: "voorleesexpress@bibliotheekdommeldal.nl", aanhef: "Beste Ashley" },
  { plaats: "Gemert-Bakel", email: "voorleesexpress@bibliotheekdlb.nl", aanhef: "Beste team van de VoorleesExpress Gemert-Bakel" },
  { plaats: "Helmond", email: "voorleesexpress@levgroep.nl", aanhef: "Beste Marjolein" },
  { plaats: "Heusden", email: "voorleesexpress@bibliotheekheusden.nl", aanhef: "Beste Joyce" },
  { plaats: "Land van Cuijk & Maasduinen", email: "m.arts@biblioplus.nl", aanhef: "Beste Moni" },
  { plaats: "Maashorst", email: "vlemaashorst@nobb.nl", aanhef: "Beste team van de VoorleesExpress Maashorst" },
  { plaats: "Oosterhout", email: "voorleesexpress.oosterhout@theek5.nl", aanhef: "Beste Joanne" },
  { plaats: "Oss", email: "voorleesexpressoss@nobb.nl", aanhef: "Beste Marina" },
  { plaats: "Roosendaal en Rucphen", email: "voorleesexpress@wijzijn.nl", aanhef: "Beste Angela" },
  { plaats: "Sint-Michielsgestel", email: "voorleesexpressgestel@huis73.nl", aanhef: "Beste Marianne" },
  { plaats: "Sint-Oedenrode en Schijndel", email: "voorleesexpress@sociaalwerkmeierijstad.nl", aanhef: "Beste Kira" },
  { plaats: "Someren en Asten", email: "taal@oniswelzijn.nl", aanhef: "Beste Judith en Saskia" },
  { plaats: "Steenbergen", email: "s.oomen@bibliotheekwb.nl", aanhef: "Beste Steffy" },
  { plaats: "Veghel", email: "vleveghel@nobb.nl", aanhef: "Beste Ivonne" },
  { plaats: "Veldhoven", email: "voorleesexpress@bibliotheekveldhoven.nl", aanhef: "Beste Imke" },
  { plaats: "Vught", email: "voorleesexpressvught@huis73.nl", aanhef: "Beste Karin" },
  { plaats: "Alkmaar", email: "voorleesexpress.nkl@humanitas.nl", aanhef: "Beste team van de VoorleesExpress Alkmaar" },
  { plaats: "Amstelland", email: "amstelland@voorleesexpress.nl", aanhef: "Beste Frederike" },
  { plaats: "Amsterdam", email: "amsterdam@voorleesexpress.nl", aanhef: "Beste team van de VoorleesExpress Amsterdam" },
  { plaats: "Beverwijk", email: "voorleesexpress@obijmond.nl", aanhef: "Beste Lilian" },
  { plaats: "Bloemendaal", email: "voorleesexpress@sterkbloemendaalheemstede.nl", aanhef: "Beste Johan" },
  { plaats: "Diemen", email: "voorleesexpress-diemen@diversion.nl", aanhef: "Beste Kimberly" },
  { plaats: "Dijk en Waard", email: "l.weering@humanitas.nl", aanhef: "Beste Leonie" },
  { plaats: "Purmerend/Waterland", email: "voorleesexpress@bibliotheekwaterland.nl", aanhef: "Beste Ilonca" },
  { plaats: "Gooiplus", email: "voorleesexpress@bibliotheekgooiplus.nl", aanhef: "Beste Iris" },
  { plaats: "Haarlem", email: "voorleesexpress@bibliotheekzuidkennemerland.nl", aanhef: "Beste Esmee" },
  { plaats: "Haarlemmermeer", email: "voorleesexpress@meerwaarde.nl", aanhef: "Beste Florentyna" },
  { plaats: "Heemstede", email: "heemstede@voorleesexpress.nl", aanhef: "Beste Els" },
  { plaats: "Heiloo", email: "voorleesexpress@bibliotheekheiloo.nl", aanhef: "Beste Marianne" },
  { plaats: "Hilversum", email: "hilversum@voorleesexpress.nl", aanhef: "Beste Henrieke" },
  { plaats: "Kop van Noord-Holland", email: "voorleesexpress.kopnh@humanitas.nl", aanhef: "Beste Daniek" },
  { plaats: "Opmeer en Koggenland", email: "voorleesexpress@westfriesebibliotheken.nl", aanhef: "Beste Karianne" },
  { plaats: "Velsen", email: "voorleesexpress@bibliotheekvelsen.nl", aanhef: "Beste Nadine" },
  { plaats: "Westfriesland", email: "voorleesexpress@vrijwilligerspunt.com", aanhef: "Beste Precilla" },
  { plaats: "Almelo", email: "voorleesexpress@bibliotheekalmelo.nl", aanhef: "Beste Chantel" },
  { plaats: "Borne", email: "voorleesexpress@bibliotheekborne.nl", aanhef: "Beste Nicole" },
  { plaats: "Dalfsen", email: "voorleesexpress@bibliotheekdalfsen.nl", aanhef: "Beste Dewia" },
  { plaats: "Deventer", email: "voorleesexpress@bibliotheekdeventer.nl", aanhef: "Beste Jutta, Jonne en Caroline" },
  { plaats: "Dinkelland", email: "voorleesexpress@bibliotheekdinkelland.nl", aanhef: "Beste Nanne" },
  { plaats: "Enschede en Haaksbergen", email: "voorleesexpress@bibliotheekenschede.nl", aanhef: "Beste Elske en Rolien" },
  { plaats: "Hardenberg", email: "voorleesexpress@bibliotheekhardenberg.nl", aanhef: "Beste Daniëlle" },
  { plaats: "Hengelo", email: "l.salemink@bibliotheektwente.nl", aanhef: "Beste Linda" },
  { plaats: "Hof van Twente", email: "d.ruiter@bibliotheektwente.nl", aanhef: "Beste Demi" },
  { plaats: "Kampen", email: "voorleesexpress@bibliotheekkampen.nl", aanhef: "Beste Monique" },
  { plaats: "Kop van Overijssel", email: "voorleesexpress@bibliotheekkopvanoverijssel.nl", aanhef: "Beste Nynke" },
  { plaats: "Losser", email: "voorleesexpress@fundamentlosser.nl", aanhef: "Beste Karen" },
];

// Deel 3 — 48 (Nijverdal t/m Zoetermeer; Goes + Rijswijk geskipt)
const DEEL_3 = [
  { plaats: "Nijverdal", email: "voorleesexpress@zinin.com", aanhef: "Beste Anita" },
  { plaats: "Oldenzaal", email: "d.bekkers@bibliotheektwente.nl", aanhef: "Beste Danielle" },
  { plaats: "Rijssen-Holten", email: "voorleesexpress@bibliotheekrijssenholten.nl", aanhef: "Beste Abigaïl" },
  { plaats: "Salland", email: "voorleesexpress@bibliotheeksalland.nl", aanhef: "Beste Nicole en Jolyn" },
  { plaats: "Staphorst", email: "voorleesexpress@bibliotheekstaphorst.nl", aanhef: "Beste Nynke" },
  { plaats: "Tubbergen", email: "voorleesexpress@bibliothekentubbergen.nl", aanhef: "Beste Nanne" },
  { plaats: "Twenterand", email: "voorleesexpress@bibliotheektwenterand.nl", aanhef: "Beste Ria" },
  { plaats: "Wierden", email: "voorleesexpress@bibliotheekwierden.nl", aanhef: "Beste Nicole" },
  { plaats: "Zwartewaterland", email: "voorleesexpress@bibliotheekzwartewaterland.nl", aanhef: "Beste Nynke" },
  { plaats: "Zwolle", email: "voorleesexpress@stadkamer.nl", aanhef: "Beste Annemieke" },
  { plaats: "Bilthoven", email: "bilthoven@voorleesexpress.nl", aanhef: "Beste Lisette" },
  { plaats: "Eemland", email: "voorleesexpress@bibliotheekeemland.nl", aanhef: "Beste Bianca" },
  { plaats: "Leusden", email: "voorleesexpress@gildeleusden.nl", aanhef: "Beste Ineke" },
  { plaats: "Lek & IJssel", email: "lekijssel@voorleesexpress.nl", aanhef: "Beste Mignon" },
  { plaats: "Nieuwegein", email: "voorleesexpress@bibliotheeknieuwegein.nl", aanhef: "Beste Zoë" },
  { plaats: "Soest", email: "soest@voorleesexpress.nl", aanhef: "Beste Marjolijn" },
  { plaats: "Utrecht", email: "voorleesexpress@taaldoetmeer.nl", aanhef: "Beste Sasja" },
  { plaats: "Utrechtse Heuvelrug", email: "voorleesexpress@bibliotheekzout.nl", aanhef: "Beste Annelijn" },
  { plaats: "Veenendaal", email: "voorleesexpress.nederrijn@humanitas.nl", aanhef: "Beste team van de VoorleesExpress Veenendaal" },
  { plaats: "Zeist", email: "zeist@voorleesexpress.nl", aanhef: "Beste Andrea" },
  { plaats: "Borsele en Goes", email: "vleborsele@bibliotheekoosterschelde.nl", aanhef: "Beste Marije" },
  { plaats: "Kapelle", email: "voorleesexpress@bibliotheekoosterschelde.nl", aanhef: "Beste Milou" },
  { plaats: "Reimerswaal", email: "vlereimerswaal@bibliotheekoosterschelde.nl", aanhef: "Beste Meriam" },
  { plaats: "Schouwen-Duiveland", email: "vleschouwenduiveland@bibliotheekoosterschelde.nl", aanhef: "Beste Imke" },
  { plaats: "Tholen", email: "vletholen@bibliotheekoosterschelde.nl", aanhef: "Beste Alyssa" },
  { plaats: "Vlissingen-Middelburg", email: "voorleesexpress@dezb.nl", aanhef: "Beste Marielja" },
  { plaats: "Zeeuws-Vlaanderen", email: "voorleesexpress@biebzvl.nl", aanhef: "Beste Marleen" },
  { plaats: "Alblasserdam", email: "voorleesexpressalblasserdam@bibliotheekaanzet.nl", aanhef: "Beste Jenny" },
  { plaats: "Bodegraven", email: "bodegraven@voorleesexpress.nl", aanhef: "Beste Naziha" },
  { plaats: "Bollenstreek", email: "voorleesexpress@bibliotheekbollenstreek.nl", aanhef: "Beste Esther" },
  { plaats: "Capelle en Krimpen a/d IJssel", email: "voorleesexpress@bibliotheekaandenijssel.nl", aanhef: "Beste Mariella" },
  { plaats: "Delft", email: "voorleesexpress@dok.info", aanhef: "Beste Angela" },
  { plaats: "Den Haag", email: "denhaag@voorleesexpress.nl", aanhef: "Beste team van de VoorleesExpress Den Haag" },
  { plaats: "Gouda", email: "gouda@voorleesexpress.nl", aanhef: "Beste Najlae" },
  { plaats: "Hardinxveld", email: "voorleesexpresshardinxveld@debibliotheekaanzet.nl", aanhef: "Beste Marieke" },
  { plaats: "Katwijk", email: "voorleesexpresskatwijk@jesrijnland.nl", aanhef: "Beste team van de VoorleesExpress Katwijk" },
  { plaats: "Krimpenerwaard", email: "voorleesexpress@debibliotheekkrimpenerwaard.nl", aanhef: "Beste Joyce" },
  { plaats: "Leiden", email: "voorleesexpress@jesrijnland.nl", aanhef: "Beste Renske" },
  { plaats: "Leidschendam-Voorburg en Rijswijk", email: "voorleesexpress@bibliotheekaandevliet.nl", aanhef: "Beste Mirona" },
  { plaats: "Maassluis - Midden-Delfland", email: "voorleesexpress@debibliotheekdeplataan.nl", aanhef: "Beste Liesbeth en Belinda" },
  { plaats: "Oostland", email: "voorleesexpress@bibliotheekoostland.nl", aanhef: "Beste Susanne" },
  { plaats: "Rijn en Venen", email: "voorleesexpress@bibliotheekrijnenvenen.nl", aanhef: "Beste Tineke" },
  { plaats: "Rotterdam", email: "voorleesexpress@bibliotheek.rotterdam.nl", aanhef: "Beste Katarina" },
  { plaats: "Voorne-Putten en Goeree-Overflakkee", email: "voorleesexpress@bibliotheekzhe.nl", aanhef: "Beste Irene, Stephanie en Vera" },
  { plaats: "Voorschoten en Wassenaar", email: "voorleesexpress@obvw.nl", aanhef: "Beste Hanneke" },
  { plaats: "Waddinxveen - Zuidplas", email: "voorleesexpress@bibliotheekdegroenevenen.nl", aanhef: "Beste team van de VoorleesExpress Waddinxveen-Zuidplas" },
  { plaats: "Westland", email: "voorleesexpress@bibliotheekwestland.nl", aanhef: "Beste Sanderijn en Jesse" },
  { plaats: "Zoetermeer", email: "zoetermeer@voorleesexpress.nl", aanhef: "Beste team van de VoorleesExpress Zoetermeer" },
];

const ONDERWERP = "Gratis vervolg op het voorleestraject — de Leesladder van Leerkwartier";

const tekst = (s) => `${s.aanhef},

Mijn naam is Mark Smulders. Ik ben operator bij Sonac in Vuren en in mijn vrije tijd bouwde ik Leerkwartier: een gratis leer-app waar kinderen elke dag een kwartier oefenen met lezen, taal en rekenen. Elk stukje tekst heeft een voorleesknop, en de uitleg wordt steeds simpeler tot het kwartje valt.

Ik mail u omdat wij volgens mij hetzelfde willen: kinderen thuis plezier laten krijgen in taal. Speciaal voor het lezen is er de Leesladder: korte teksten die stapje voor stapje moeilijker worden, met vragen erbij — een fijn vervolg voor gezinnen bij wie het voorleestraject is afgerond, of om tussendoor samen te lezen. Alles werkt in de browser, zonder account en zonder reclame. Oefenen blijft gratis, gegarandeerd t/m 2031.

Mijn vraag is klein: zou u leerkwartier.app willen noemen aan de gezinnen en voorlezers in uw traject — bijvoorbeeld in een nieuwsbrief of bij het afsluiten van een traject? Speciaal hiervoor staat alles op één pagina: leerkwartier.app/voorlezen.html — met uitleg voor gezinnen én een kant-en-klaar tekstblokje dat u zo in uw nieuwsbrief kunt overnemen. Posters of een flyer op maat met uw logo maak ik kosteloos.

De app is nog jong — ik verbeter hem elke week. Tips of wensen van u of uw voorlezers zijn dus heel welkom; vaak kan ik iets binnen een week aanpassen.

Hartelijke groet,
Mark Smulders — leerkwartier.app
Voor organisaties: leerkwartier.app/voor-organisaties.html`;

const lijst = DEEL3 ? DEEL_3 : DEEL2 ? DEEL_2 : DEEL_1;
const naam = DEEL3 ? "deel 3" : DEEL2 ? "deel 2" : "deel 1";

// Vangnet: geen dubbele adressen binnen én tussen de delen
const alle = [...DEEL_1, ...DEEL_2, ...DEEL_3].map((s) => s.email.toLowerCase());
const dubbel = alle.filter((e, i) => alle.indexOf(e) !== i);
if (dubbel.length) { console.error("DUBBELE ADRESSEN:", dubbel); process.exit(1); }

if (DRY) {
  lijst.forEach((s, i) => console.log(`${String(i + 1).padStart(2)} ${s.plaats} <${s.email}> — ${s.aanhef}`));
  console.log(`\n${naam}: ${lijst.length} mails (dry-run, niets verstuurd). Totaal alle delen: ${alle.length}.`);
  process.exit(0);
}

const doel = PROEF ? [{ ...lijst[0], email: "marksmulders1973@gmail.com" }] : lijst;

let ok = 0, fout = 0;
for (const s of doel) {
  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "Mark Smulders — Leerkwartier <hallo@leerkwartier.app>",
        to: [s.email],
        reply_to: "marksmulders1973@gmail.com",
        subject: ONDERWERP,
        text: tekst(s),
      }),
    });
    const j = await r.json().catch(() => ({}));
    if (r.ok) { ok++; console.log(`OK  ${s.plaats} <${s.email}>`); }
    else { fout++; console.log(`FOUT ${s.plaats} <${s.email}> ${r.status}: ${JSON.stringify(j).slice(0, 140)}`); }
  } catch (e) { fout++; console.log(`FOUT ${s.plaats}: ${e.message}`); }
  await new Promise((res) => setTimeout(res, 1300));
}
console.log(`\nKlaar (${naam}): ${ok} verstuurd, ${fout} mislukt (van ${doel.length}).`);
