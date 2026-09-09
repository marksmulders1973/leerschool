// 🎈 Af-spelers varen mee in de bedank-zeppelins van de partners (Mark 9 sep 2026:
// "met zeppelin bedoelde ik de dank/ere-zeppelins die we al hadden"). Geen eigen
// schip dus: we lenen de vloot uit ParkProps (Zeppelins) en zetten wie af is op
// het gondeldek; de eigen camera hangt achter dat dek en kijkt naar het park.
import { zeppelinVlootActief, zeppelinPositie } from "../ParkProps.jsx";

const DEK = [1.2, -1.65, 0];          // bovenkant van de gondel (lokaal in het schip)
const PLEK_X = [-0.7, 0, 0.7];        // drie plekjes naast elkaar op het dek

/** welk schip + welk plekje voor af-speler nummer idx (0..) */
function schipVoor(idx) {
  const vloot = zeppelinVlootActief();
  const schepen = vloot.length > 1 ? vloot.slice(1) : vloot;   // het witte schip laten we leeg
  const n = Math.max(0, idx);
  return { data: schepen[n % schepen.length], plek: PLEK_X[Math.floor(n / schepen.length) % PLEK_X.length] };
}

/** wereldpositie van af-speler idx op tijd t; yaw = kijkt naar het parkmidden */
export function zepPositie(t, idx = 0) {
  const { data, plek } = schipVoor(idx);
  const p = zeppelinPositie(data, t, [DEK[0] + plek, DEK[1], DEK[2]]);
  return { x: p.x, y: p.y, z: p.z, yaw: Math.atan2(-p.x, -p.z), ry: p.ry };
}

/** camera-standpunt voor af-speler idx: net achter en boven het dek, blik richting park */
export function zepCamera(t, idx = 0) {
  const { data } = schipVoor(idx);
  const dek = zeppelinPositie(data, t, DEK);
  const achter = zeppelinPositie(data, t, [DEK[0] - 7.5, DEK[1] + 0.9, DEK[2] + 3.6]);
  return { pos: achter, kijk: { x: dek.x * 0.55, y: dek.y - 14, z: dek.z * 0.55 } };
}

export const ZEP_HOOGTE = 40;
export function Zeppelin() { return null; }   // de vloot zelf staat al in het park
