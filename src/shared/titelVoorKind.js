// 🧒 Titel voor het kind (Mark 26 okt 2026, test geschiedenis groep 8: "er stond groep 6/8 bij — ik heb
// liever dat er echt groep 8 staat bij 8, 7 bij 7"). Leerpad-titels dragen een bereik ("… groep 6-8",
// "(groep 5-8, Doorstroomtoets-stof)"). Zit het kind in dat bereik, dan tonen we zijn eigen groep.
// Buiten het bereik (of zonder groep) blijft de titel zoals hij is — dan is het bereik juist informatie.

const BEREIK = /groep\s*(\d)\s*(?:-|–|—|t\/m|tot en met)\s*(\d)/gi;

export function titelVoorKind(titel, groep) {
  const g = Number(groep);
  const t = String(titel ?? "");
  if (!(g >= 1 && g <= 8) || !t) return t;
  return t.replace(BEREIK, (heel, a, b) => {
    const lo = Number(a), hi = Number(b);
    return lo <= g && g <= hi ? `groep ${g}` : heel;
  });
}
