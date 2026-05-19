// Rondleidings-pagina "Hoe werkt Leerkwartier?" — v1, slug /hoe-werkt-leerkwartier.
// Doel: nieuwe ouder / leerkracht / leerling snapt in 60 sec wat de app kan.
// Strikt sober — geen game-vormen, geen video, geen 3D, geen losse screenshots
// (die roesten weg bij UI-refactors). Vier secties: hero / USP / voor-wie / FAQ.
// Linkbaar vanuit OuderDashboard- en LeerkrachtDashboard-footer.
//
// Critic-advies (10-agent-review 2026-05-19): niet uitbreiden tot brochure.
// Houd v1 binnen ~1 viewport scroll-lengte. Geen nav-entry: het is een
// support-pagina, geen feature.

import { useEffect } from "react";
import Card from "../shared/ui/Card.jsx";
import Button from "../shared/ui/Button.jsx";
import { BRAND } from "../brand.js";

const FAQ = [
  {
    q: "Wanneer is de Doorstroomtoets?",
    a: "Voor groep 8: derde week van januari (sinds 2024 heet de Cito-eindtoets officieel Doorstroomtoets). Leerkwartier helpt vanaf groep 6, dus geen stress in groep 8.",
  },
  {
    q: "Kost het iets?",
    a: "Nee. De kern is gratis te gebruiken — alle leerpaden, oefenen, examenvragen. Géén reclame, géén abonnement-verplichting. Later (vanaf 2027) komt er optioneel een Pro-pakket met extra AI-uitleg.",
  },
  {
    q: "Werkt het echt?",
    a: "We meten dat nog (de app is jong). Wat we wel weten: kinderen die 1 fout maken en doorklikken naar de 'simpeler'-uitleg, begrijpen het concept achteraf bovengemiddeld vaak. Dat is het verschil met snel-doorklikken op een ander oefenplatform.",
  },
  {
    q: "Hoeveel tijd per dag?",
    a: "Een leerkwartier = ongeveer 15 minuten. Genoeg om één onderwerp af te ronden zonder dat het kind moe wordt. Dagelijks 15 min is beter dan één keer per week een uur.",
  },
  {
    q: "Is het veilig voor mijn kind?",
    a: "Ja. Geen advertenties, geen tracking voor reclame, geen externe analytics-tools die data verkopen. Alleen het noodzakelijke voor voortgang-bewaren. Voldoet aan de AVG.",
  },
  {
    q: "Wat als mijn kind iets fout doet?",
    a: "Dan opent een korte uitleg — eerst een hint, dan een uitleg op normaal niveau, en als het nog onduidelijk is een nóg simpelere versie met voorbeeld. Daarna mag het kind de vraag opnieuw proberen.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function RondleidingPage({ setPage } = {}) {
  // SEO meta + FAQPage-schema in document.head bij mount.
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Hoe werkt Leerkwartier? Doorstroomtoets-oefenen in 15 min";
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content =
      "Zo helpt Leerkwartier groep 6-8 bij de Doorstroomtoets: leerpaden van 15 minuten, echte examenvragen en uitleg in drie niveaus. Gratis proberen.";
    document.head.appendChild(meta);

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.textContent = JSON.stringify(FAQ_SCHEMA);
    document.head.appendChild(schema);

    return () => {
      document.title = prevTitle;
      document.head.removeChild(meta);
      document.head.removeChild(schema);
    };
  }, []);

  const go = (target) => {
    if (typeof setPage === "function") setPage(target);
  };

  return (
    <div
      style={{
        maxWidth: 880,
        margin: "0 auto",
        padding: "var(--space-5) var(--space-4) var(--space-6)",
        color: "var(--color-text)",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* HERO */}
      <header style={{ marginBottom: "var(--space-6)" }}>
        <h1
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            lineHeight: 1.2,
            margin: "0 0 var(--space-3) 0",
            fontFamily: "var(--font-heading, var(--font-body))",
          }}
        >
          Hoe werkt Leerkwartier?
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.5,
            color: "var(--color-text-muted, #99a3b4)",
            margin: "0 0 var(--space-4) 0",
          }}
        >
          Doorstroomtoets in januari — vijftien minuten per dag is genoeg, als
          ze écht begrijpen wat ze doen. Geen drilloefeningen. Geen reclame.
          Drie uitleg-niveaus tot het kwartje valt.
        </p>
        <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
          <Button onClick={() => go("learn-paths-hub")}>
            Probeer een leerpad
          </Button>
          <Button variant="ghost" onClick={() => go("cito")}>
            Doorstroomtoets-onderdelen
          </Button>
        </div>
      </header>

      {/* USP's */}
      <section style={{ marginBottom: "var(--space-6)" }}>
        <h2 style={sectionH2}>Waarom Leerkwartier?</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "var(--space-3)",
            marginTop: "var(--space-3)",
          }}
        >
          <Card padding="lg">
            <h3 style={uspH3}>Uitleg in drie niveaus</h3>
            <p style={uspBody}>
              Maakt je kind iets fout? Dan opent een korte uitleg. Snapt het 'm
              nog niet, dan een{" "}
              <em>simpelere</em> versie. Daarna een{" "}
              <em>nóg simpelere</em> met voorbeeld. Geen kant-en-klaar antwoord
              — wel ruimte om het zelf te ontdekken.
            </p>
          </Card>
          <Card padding="lg">
            <h3 style={uspH3}>Echte examenvragen mét uitleg</h3>
            <p style={uspBody}>
              VMBO-examens van examenblad.nl, geen verzonnen oefenvragen. Elke
              examenvraag is gekoppeld aan een leerpad-stap die het concept
              eerst rustig uitlegt. Gele bron-banner laat zien welk examen en
              welke vraag.
            </p>
          </Card>
          <Card padding="lg">
            <h3 style={uspH3}>Kwartier per dag, klaar</h3>
            <p style={uspBody}>
              Elk leerpad is op ongeveer 15 minuten ontworpen. Past tussen
              school en avondeten. Dagelijks een leerkwartier werkt beter dan
              één keer per week een uur — en het is haalbaar.
            </p>
          </Card>
        </div>
      </section>

      {/* VOOR WIE */}
      <section style={{ marginBottom: "var(--space-6)" }}>
        <h2 style={sectionH2}>Voor wie is het?</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "var(--space-3)",
            marginTop: "var(--space-3)",
          }}
        >
          <Card variant="ghost" padding="lg">
            <h3 style={uspH3}>Ouder</h3>
            <p style={uspBody}>
              Koppel je kind met een korte code en zie welke onderwerpen
              vooruitgaan. Geen rapportages doorspitten — alleen wat je echt
              wilt weten.
            </p>
            <Button
              variant="ghost"
              onClick={() => go("ouder-dashboard")}
              style={{ marginTop: "var(--space-2)" }}
            >
              Ouder-dashboard →
            </Button>
          </Card>
          <Card variant="ghost" padding="lg">
            <h3 style={uspH3}>Leerkracht</h3>
            <p style={uspBody}>
              Zie hoe je klas vordert en stuur een leerpad door naar één
              leerling of de hele klas. Zonder gedoe met inlogcodes uitprinten.
            </p>
            <Button
              variant="ghost"
              onClick={() => go("teacher-home")}
              style={{ marginTop: "var(--space-2)" }}
            >
              Leerkracht-portaal →
            </Button>
          </Card>
          <Card variant="ghost" padding="lg">
            <h3 style={uspH3}>Leerling</h3>
            <p style={uspBody}>
              Kies een vak, doe een leerkwartier, klik door als je vastloopt.
              Een dagelijks ritme dat blijft. Geen volwassenen die over je
              schouder hangen.
            </p>
            <Button
              variant="ghost"
              onClick={() => go("student-home")}
              style={{ marginTop: "var(--space-2)" }}
            >
              Begin als leerling →
            </Button>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: "var(--space-6)" }}>
        <h2 style={sectionH2}>Veelgestelde vragen</h2>
        <div style={{ marginTop: "var(--space-3)" }}>
          {FAQ.map(({ q, a }, i) => (
            <details
              key={i}
              style={{
                background: "var(--color-bg-elevated)",
                border: "1px solid var(--color-border-soft)",
                borderRadius: "var(--radius-md)",
                padding: "var(--space-3) var(--space-4)",
                marginBottom: "var(--space-2)",
              }}
            >
              <summary
                style={{
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "1rem",
                  listStyle: "revert",
                }}
              >
                {q}
              </summary>
              <p style={{ marginTop: "var(--space-2)", lineHeight: 1.6 }}>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* EIND-CTA */}
      <section
        style={{
          textAlign: "center",
          padding: "var(--space-5)",
          background: "var(--color-bg-elevated)",
          border: "1px solid var(--color-border-soft)",
          borderRadius: "var(--radius-md)",
        }}
      >
        <h2 style={{ ...sectionH2, marginBottom: "var(--space-3)" }}>
          Begin met een leerkwartier
        </h2>
        <p style={{ color: "var(--color-text-muted, #99a3b4)", marginBottom: "var(--space-4)" }}>
          Geen account nodig om te proberen. Voortgang bewaren kan later met
          een e-mailadres.
        </p>
        <div style={{ display: "flex", gap: "var(--space-3)", justifyContent: "center", flexWrap: "wrap" }}>
          <Button onClick={() => go("learn-paths-hub")}>
            Bekijk de leerpaden
          </Button>
          <Button variant="ghost" onClick={() => go("examens")}>
            Of bekijk de examens
          </Button>
        </div>
        <p style={{ marginTop: "var(--space-4)", fontSize: "0.85rem", color: "var(--color-text-muted, #99a3b4)" }}>
          {BRAND.slogan}
        </p>
      </section>
    </div>
  );
}

const sectionH2 = {
  fontSize: "1.4rem",
  margin: "0",
  fontFamily: "var(--font-heading, var(--font-body))",
};

const uspH3 = {
  fontSize: "1.05rem",
  margin: "0 0 var(--space-2) 0",
  fontFamily: "var(--font-heading, var(--font-body))",
};

const uspBody = {
  margin: 0,
  lineHeight: 1.55,
  color: "var(--color-text-muted, #ccd2dd)",
  fontSize: "0.95rem",
};
