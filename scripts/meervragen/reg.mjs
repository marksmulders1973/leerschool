// node --import ./scripts/meervragen/reg.mjs … — laat leerpaden met .jsx-imports laden (alleen data).
import { register } from "node:module";
register(new URL("./jsx-loader.mjs", import.meta.url));
