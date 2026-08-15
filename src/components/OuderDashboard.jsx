import Header from "./Header.jsx";
import OuderInzicht from "../features/ouder/OuderInzicht.jsx";

// Dunne pagina-wrapper (14 aug): de ouder-functionaliteit zelf leeft in het
// gedeelde <OuderInzicht> (ook ingebouwd op /mijn). Hier alleen de pagina-
// chrome: Header + achtergrond. Zo blijven /ouder en /mijn één codebase.
export default function OuderDashboard({ onBack, onHome, authUser, subscription, onUpgrade, onLogin, onRondleiding, onKlaarzetten }) {
  return (
    <div style={{ minHeight: "100dvh", background: "linear-gradient(135deg, #0a0f1e 0%, #0d1a2e 100%)" }}>
      <Header title="Thuis-overzicht 👨‍👩‍👧" subtitle="Voor ouders en verzorgers — volg de voortgang van je kind" onBack={onBack} onHome={onHome} />
      <OuderInzicht
        authUser={authUser}
        subscription={subscription}
        onUpgrade={onUpgrade}
        onLogin={onLogin}
        onRondleiding={onRondleiding}
        onKlaarzetten={onKlaarzetten}
      />
    </div>
  );
}
