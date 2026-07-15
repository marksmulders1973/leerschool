// Meelees-weergave (Mark 15 jul): tijdens het voorlezen licht het woord op dat
// de stem nú uitspreekt — karaoke-stijl. Rendert alleen **vet** (meer markdown
// gebruiken de buddy's zelden); na het voorlezen neemt de normale weergave het
// weer over. Woord-telling MOET gelijk lopen met maakMeeleesPlan in
// shared/spraakTekst.js: beide tellen elk niet-witruimte-token.
export default function MeeleesTekst({ tekst, actief, accent = "#5bbf5a" }) {
  const stukken = String(tekst ?? "").split(/(\s+)/);
  let woordIdx = -1;
  let vet = false;
  return (
    <>
      {stukken.map((stuk, i) => {
        if (!stuk) return null;
        if (/^\s+$/.test(stuk)) return stuk; // pre-wrap bewaart enters
        woordIdx += 1;
        const dit = woordIdx;
        const delen = stuk.split("**");
        const inhoud = delen.map((d, j) => {
          const stijl = vet ? { fontWeight: 700 } : undefined;
          if (j < delen.length - 1) vet = !vet;
          return d ? <span key={j} style={stijl}>{d}</span> : null;
        });
        return (
          <span
            key={i}
            style={dit === actief ? {
              background: accent,
              color: "#04121f",
              borderRadius: 4,
              padding: "0 3px",
              margin: "0 -3px",
              transition: "background 0.1s",
            } : undefined}
          >
            {inhoud}
          </span>
        );
      })}
    </>
  );
}
