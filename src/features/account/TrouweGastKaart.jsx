// 🌟 Kaartje voor de trouwe gast (idee H, 16 sep 2026): één scherm, geen
// voordeur. Verschijnt alleen als trouweGast.js zegt dat het mag (gast, ≥5
// bezoekdagen, ooit een kwartier). Stap 1: naam kiezen. Stap 2 (optioneel):
// de bestaande koppelcode-banner, zodat iemand thuis of op school kan meekijken.
// "Liever niet" = overslaan, komt pas na 5 nieuwe bezoekdagen terug.
import { useEffect, useRef, useState } from "react";
import Card from "../../shared/ui/Card.jsx";
import Button from "../../shared/ui/Button.jsx";
import KoppelcodeBanner from "../../components/KoppelcodeBanner.jsx";
import { track } from "../../utils.js";
import { trouweGastKaartTonen, trouweGastGetoond, trouweGastOvergeslagen, trouweGastKlaar } from "./trouweGast.js";

export default function TrouweGastKaart({ userName, onNaamInvullen, plek = "mijn" }) {
  const [stand] = useState(() => trouweGastKaartTonen(userName));
  const [naam, setNaam] = useState("");
  const [fout, setFout] = useState("");
  const [gekozen, setGekozen] = useState("");
  const [weg, setWeg] = useState(false);
  const gemeld = useRef(false);

  useEffect(() => {
    if (!stand.tonen || gemeld.current) return;
    gemeld.current = true;
    trouweGastGetoond();
    try { track("trouwe_gast_kaart", { actie: "toon", dagen: stand.dagen, plek }); } catch { /* */ }
  }, [stand, plek]);

  if (!stand.tonen || weg) return null;

  const bewaar = (e) => {
    e?.preventDefault?.();
    const n = naam.trim();
    if (n.length < 2) { setFout("Vul even je naam in (minstens 2 letters)."); return; }
    if (/^speler$/i.test(n)) { setFout("Kies een naam die van jou is — 'Speler' kan iedereen zijn."); return; }
    setFout("");
    trouweGastKlaar();
    try { track("trouwe_gast_kaart", { actie: "naam", dagen: stand.dagen, plek, name_length: n.length }); } catch { /* */ }
    try { onNaamInvullen?.(n); } catch { /* */ }
    setGekozen(n);
  };

  const later = () => {
    trouweGastOvergeslagen();
    try { track("trouwe_gast_kaart", { actie: "overgeslagen", dagen: stand.dagen, plek }); } catch { /* */ }
    setWeg(true);
  };

  const kop = { fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 17, margin: "0 0 6px" };
  const tekst = { fontFamily: "var(--font-body)", fontSize: 14, color: "var(--color-text-muted)", margin: "0 0 10px", lineHeight: 1.45 };

  if (gekozen) {
    return (
      <Card variant="study" padding="md" style={{ marginBottom: 12 }}>
        <div style={kop}>🎉 Vanaf nu heet je {gekozen} hier</div>
        <p style={tekst}>Je scores en je kwartieren krijgen je naam. Heb je een koppelcode van thuis of van school? Dan kunnen zij zien hoe het gaat en krijgen ze elke week een berichtje.</p>
        <KoppelcodeBanner userName={gekozen} />
        <Button variant="ghost" size="sm" onClick={() => setWeg(true)}>Klaar</Button>
      </Card>
    );
  }

  return (
    <Card variant="study" padding="md" style={{ marginBottom: 12 }}>
      <div style={kop}>🌟 Je bent hier al {stand.dagen} dagen geweest!</div>
      <p style={tekst}>Knap. Wil je bewaren waar je staat? Kies een naam, dan houden we het voor je bij — en kan iemand thuis of op school meekijken als jij dat wilt.</p>
      <form onSubmit={bewaar} style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
        <input
          value={naam}
          onChange={(e) => { setNaam(e.target.value); if (fout) setFout(""); }}
          placeholder="Je voornaam"
          maxLength={24}
          autoComplete="off"
          aria-label="Je voornaam"
          style={{ flex: "1 1 160px", minWidth: 0, padding: "10px 12px", borderRadius: 10, border: `1px solid ${fout ? "var(--color-danger, #ff7676)" : "var(--color-border-soft)"}`, background: "var(--color-bg-surface)", color: "var(--color-text)", fontFamily: "var(--font-body)", fontSize: 15 }}
        />
        <Button type="submit">Bewaar mijn voortgang</Button>
      </form>
      {fout && <div role="alert" style={{ fontSize: 13, color: "var(--color-danger, #ff7676)", marginTop: 6 }}>{fout}</div>}
      <div style={{ marginTop: 8 }}>
        <button type="button" onClick={later} style={{ background: "none", border: "none", padding: 0, color: "var(--color-text-muted)", fontFamily: "var(--font-body)", fontSize: 13, textDecoration: "underline", cursor: "pointer" }}>Liever niet</button>
      </div>
    </Card>
  );
}
