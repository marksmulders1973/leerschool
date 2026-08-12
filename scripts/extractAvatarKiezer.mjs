// Eenmalig: haalt de base64-plaatjes uit Mark's claude.ai-artifact
// (Desktop\AvatarKiezer (1).jsx) en schrijft ze als echte bestanden
// naar public/avatars/kiezer/ (tekening .jpg + masker .png).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BRON = "C:/Users/mark-/Desktop/AvatarKiezer (1).jsx";
const DOEL = new URL("../public/avatars/kiezer/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
mkdirSync(DOEL, { recursive: true });

const tekst = readFileSync(BRON, "utf8");
const re = /id: "(\w+)"[\s\S]*?src: "data:image\/jpeg;base64,([^"]+)"[\s\S]*?mask: "data:image\/png;base64,([^"]+)"/g;
let m, n = 0;
while ((m = re.exec(tekst))) {
  const [, id, jpg, png] = m;
  writeFileSync(join(DOEL, `${id}.jpg`), Buffer.from(jpg, "base64"));
  writeFileSync(join(DOEL, `${id}-masker.png`), Buffer.from(png, "base64"));
  console.log(`${id}: ${jpg.length} b64 jpg, ${png.length} b64 png`);
  n++;
}
console.log(`Klaar: ${n} avatars → ${DOEL}`);
