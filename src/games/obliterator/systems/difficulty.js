// Level → spel-parameters. Curves zijn handgekozen zodat het écht moeilijker
// wordt zonder onspeelbaar te worden. Snelheids-cap op level 10 omdat de
// menselijke reactietijd dan op is (~250ms minimum).

export function levelFromScore(score) {
  return Math.min(10, Math.max(1, Math.floor(score / 1000) + 1));
}

export function speedFor(level) {
  // 4 px/frame baseline → 7.6 op level 10 (60fps × 7.6 = 456 px/sec).
  return 4 + (level - 1) * 0.4;
}

export function spawnIntervalFor(level) {
  // ms tussen obstakel-spawns. Snel level → korter interval.
  // Tuning 2026-04-29: -30% obstakels (interval × 1/0.7 = 1.43) zodat
  // de tweede-kans-flow ademruimte heeft en het spel minder grindy voelt.
  // Voor: 1500→700ms. Nu: 2150→1000ms.
  return Math.max(1000, 2150 - (level - 1) * 130);
}

export function obstacleVarietyFor(level) {
  if (level >= 7) return ["block", "spike", "wall", "moving", "double"];
  if (level >= 4) return ["block", "spike", "wall", "moving"];
  if (level >= 2) return ["block", "spike", "wall"];
  return ["block", "spike"];
}

export function powerupChanceFor(level) {
  // 5% bij level 1, 18% cap bij level 9. Genoeg om het ritme op te schudden.
  return Math.min(0.18, 0.05 + (level - 1) * 0.015);
}
