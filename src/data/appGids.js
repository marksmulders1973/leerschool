// 📖 APP-GIDS — één bron van waarheid over "hoe werkt de app" (Mark 1 sep 2026,
// Charley-plan laag 2). Doel: dezelfde antwoorden voeden straks (a) de
// "Vraag Charley"-tab in de MaatjePocket, (b) llms.txt/AI-vindbaarheid, en
// (c) eventueel een crawlbare hulp-pagina. Eén plek bijwerken = overal goed.
//
// Schrijfregels: B1-taal, "ouder of verzorger", geen dev-jargon, antwoorden
// kort en feitelijk (2-4 zinnen), rol = voor wie de vraag vooral is.

export const APP_GIDS = [
  {
    id: "koppelcode",
    rol: "ouder",
    vraag: "Hoe koppel ik mijn kind?",
    antwoord: "Ga naar je thuis-overzicht (leerkwartier.app/ouder) en log in. Tik op \"Voeg je kind toe\" — je krijgt één korte code. Je kind voert die code in op het eigen toestel (bij \"Koppel met ouder\") en bevestigt. Daarna zie je de voortgang vanzelf.",
  },
  {
    id: "koppeling-werkt-niet",
    rol: "ouder",
    vraag: "De koppeling werkt niet of mijn kind heeft een nieuw toestel — wat nu?",
    antwoord: "Tik bij je gekoppelde kind op \"🔗 koppeling werkt niet?\" voor een verse code. Laat je kind die invoeren op het toestel dat het nú gebruikt — de koppeling verhuist dan automatisch mee, je hoeft niets te verwijderen. Tip: laat je kind inloggen met Google, dan werkt het op elk toestel vanzelf.",
  },
  {
    id: "voortgang",
    rol: "ouder",
    vraag: "Waar zie ik precies wat mijn kind goed en fout deed?",
    antwoord: "Tik in je thuis-overzicht op de naam van je kind (of de knop \"📊 overzicht\"). Je ziet dan alles per vak, wat al sterk is, en per toets een vraag-voor-vraag-verslag met het gegeven en het juiste antwoord — plus een knop om samen de uitleg te bekijken. Je kunt het overzicht ook naar jezelf mailen.",
  },
  {
    id: "klaarzetten",
    rol: "ouder",
    vraag: "Kan ik oefeningen voor mijn kind klaarzetten?",
    antwoord: "Ja. Tik bij je gekoppelde kind op \"💛 zet lessen klaar\" en blader door de app — elke les die je aantikt verschijnt bij je kind onder \"💛 voor jou klaargezet\". Je ziet daarna ook of de les gedaan is. Leerkrachten kunnen hetzelfde voor een leerling.",
  },
  {
    id: "weekmail",
    rol: "ouder",
    vraag: "Krijg ik vanzelf bericht over de voortgang?",
    antwoord: "Ja — elke maandag krijg je per gekoppeld kind een weekrapport in je mail: wat er geoefend is, het sterkste onderwerp en één aandachtspunt. Aan of uit te zetten per kind, en je kunt een tweede adres (partner of medeverzorger) toevoegen.",
  },
  {
    id: "printen",
    rol: "beide",
    vraag: "Zijn er printbare oefeningen?",
    antwoord: "Ja, veel! Op leerkwartier.app/printen staat alles bij elkaar: oefenpakketten met antwoordsleutel, tafel-werkbladen, het oefenboekje op maat (gebouwd uit wat je kind lastig vond) en printbare diploma's. Fijn voor aan de keukentafel, zonder scherm.",
  },
  {
    id: "partner-code",
    rol: "ouder",
    vraag: "Ik heb een code van een organisatie (flyer/QR) — wat krijg ik daarmee?",
    antwoord: "Met zo'n code krijgt je gezin alle Familie-extra's gratis, heel 2027 lang. Scan de QR of typ de code in de balk op de beginpagina. Oefenen zelf is sowieso voor iedereen gratis — de code geeft de extra's, zoals het ouder-dashboard en de examen-simulatie.",
  },
  {
    id: "doorstroomtoets",
    rol: "beide",
    vraag: "Wanneer is de Doorstroomtoets en hoe oefen ik ervoor?",
    antwoord: "De Doorstroomtoets is in de eerste twee weken van februari (groep 8). In de app kun je per onderdeel oefenen mét uitleg op 3 niveaus, of een hele proeftoets doen. Een kwartier per dag vanaf november is genoeg — korte sessies werken beter dan lange.",
  },
  {
    id: "leesladder",
    rol: "beide",
    vraag: "Mijn kind vindt lezen lastig — waar begin ik?",
    antwoord: "Probeer de Leesladder (leerkwartier.app/leesladder): korte teksten die stap voor stap moeilijker worden, met vragen erbij. Begin makkelijk, klim omhoog. Werkt ook als vervolg op een voorleestraject, en zonder account.",
  },
  {
    id: "account-nodig",
    rol: "beide",
    vraag: "Heb ik een account nodig?",
    antwoord: "Oefenen kan altijd zonder account. Een account is alleen nodig voor het thuis-overzicht van ouders, en handig voor kinderen om voortgang op elk toestel mee te nemen. De basis — oefenen en uitleg — is gratis, gegarandeerd t/m 2031.",
  },
  {
    id: "voorlezen",
    rol: "kind",
    vraag: "Kan de app voorlezen?",
    antwoord: "Ja — bij blokken met meerdere zinnen staat een voorlees-knop. Handig als lezen nog lastig is, of gewoon fijn om mee te luisteren.",
  },
  {
    id: "park",
    rol: "kind",
    vraag: "Wat is het park?",
    antwoord: "Het park is je eigen plek die meegroeit als je oefent: maatjes zoals Charley, kramen, gebouwen en verrassingen. Leren verdient het park — en vanuit het park kun je zo weer een les in.",
  },
];

export default APP_GIDS;
