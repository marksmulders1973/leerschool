// FabelWezen — zeldzame fabeldieren als parkbewoners (Mark 2 jul): een draak
// of feniks die écht rondvliegt boven je park (cirkelbaan + vleugelslag), een
// eenhoorn die rondwandelt en een elf die rondloopt. Niet te koop — alleen te
// SPAREN door te leren (mijlpalen in unlocks.js), net als de grote dino's.
// Hergebruikt de bestaande maatjes-lijfjes (Draakje/Eenhoorn/Fenix) + het
// blok-poppetje voor de elf → nul extra bestanden, past bij de parkstijl.
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Draakje, Eenhoorn, Fenix } from "./Buddy.jsx";
import BlockyCharacter from "./BlockyCharacter.jsx";

const KLEUREN = {
  draak: { kleur: "#3ba55d", kleur2: "#2b7a44", accent: "#ffd23a" },
  fenix: { kleur: "#ff7a3c", kleur2: "#e8451e", accent: "#ffd23a" },
  eenhoorn: { kleur: "#fdfbff", kleur2: "#ead7f5", accent: "#ff8fcf" },
};

export default function FabelWezen({ soort, position }) {
  const g = useRef();
  const flapRef = useRef([]);
  const movingRef = useRef(2); // elf: altijd rustig wandelen
  const fase = useMemo(() => Math.random() * Math.PI * 2, []);
  const vliegt = soort === "draak" || soort === "fenix";
  const [ax, ay, az] = position; // ankerpunt (het gekozen vakje)

  useFrame((s) => {
    const node = g.current;
    if (!node) return;
    const t = s.clock.elapsedTime;
    if (vliegt) {
      // Cirkelbaan boven het park: straal ~6, hoogte golft mee; neus in
      // vliegrichting; vleugels klapperen.
      const w = soort === "draak" ? 0.28 : 0.36;
      const hoek = fase + t * w;
      const r = 6;
      node.position.set(ax + Math.sin(hoek) * r, ay + 6.5 + Math.sin(t * 0.7 + fase) * 1.1, az + Math.cos(hoek) * r);
      node.rotation.y = hoek + Math.PI / 2 + (soort === "draak" ? Math.PI : Math.PI); // tangent aan de cirkel
      node.rotation.z = Math.sin(t * 1.4 + fase) * 0.06;
      const flap = Math.sin(t * (soort === "draak" ? 7 : 9)) * 0.7;
      if (flapRef.current[0]) flapRef.current[0].rotation.z = 0.5 + flap;
      if (flapRef.current[1]) flapRef.current[1].rotation.z = -0.5 - flap;
    } else {
      // Wandelaars: rustig rondje om het ankerpunt, neus in looprichting.
      const w = 0.22;
      const hoek = fase + t * w;
      const r = 3.5;
      node.position.set(ax + Math.sin(hoek) * r, ay, az + Math.cos(hoek) * r);
      node.rotation.y = hoek + Math.PI / 2;
      if (soort === "eenhoorn") node.position.y = ay + Math.abs(Math.sin(t * 4 + fase)) * 0.06; // lichte trippel
    }
  });

  return (
    <group ref={g} position={position}>
      {soort === "draak" && <group scale={1.7} position={[0, 0.8, 0]}><Draakje c={KLEUREN.draak} flapRef={flapRef} /></group>}
      {soort === "fenix" && <group scale={1.35} position={[0, 0.7, 0]}><Fenix c={KLEUREN.fenix} flapRef={flapRef} /></group>}
      {soort === "eenhoorn" && <group scale={1.25} position={[0, 0.55, 0]}><Eenhoorn c={KLEUREN.eenhoorn} /></group>}
      {soort === "elf" && <BlockyCharacter palette={{ huid: "#f2d2b0", haar: "#3f7d46", shirt: "#3ba55d", broek: "#6a4a2c", schoen: "#3f2f1e", pet: true }} movingRef={movingRef} targetHeight={1.45} />}
    </group>
  );
}
