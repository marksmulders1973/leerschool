// 👥 Medespelers in een gedeeld park (8 sep 2026): de poppetjes van de andere
// kinderen die met dezelfde parkcode binnen zijn. Posities komen 2×/s binnen
// via parkRoom.js (peersRef: Map clientId → {x,z,yaw,m,t,name,avatar}); hier
// lopen ze er soepel naartoe (interpolatie), met een naamkaartje (alleen de
// voornaam die het kind zelf koos). Zelfde CharacterModel als bezoekers/speler.
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import CharacterModel from "./CharacterModel";

const STANDAARD_AVATAR = "blocky:blokJoep";

function MedeSpeler({ id, peersRef, heightRef }) {
  const g = useRef();
  const moving = useRef(0);
  const st = useRef({ x: null, z: null, yaw: 0 });
  const [naam, setNaam] = useState("");
  const [avatar, setAvatar] = useState(STANDAARD_AVATAR);
  useFrame((s, dtRaw) => {
    const dt = Math.min(0.05, dtRaw);
    const p = peersRef.current?.get(id); const n = g.current; if (!p || !n) return;
    if (p.name !== naam) setNaam(p.name || "");
    if ((p.avatar || STANDAARD_AVATAR) !== avatar) setAvatar(p.avatar || STANDAARD_AVATAR);
    if (p.x == null) return;
    const o = st.current;
    if (o.x == null) { o.x = p.x; o.z = p.z; o.yaw = p.yaw || 0; }
    // soepel naar de laatst ontvangen positie (aankomst in ~0,4 s)
    const k = Math.min(1, dt * 6);
    const dx = p.x - o.x, dz = p.z - o.z;
    o.x += dx * k; o.z += dz * k;
    let dy = (p.yaw || 0) - o.yaw; while (dy > Math.PI) dy -= Math.PI * 2; while (dy < -Math.PI) dy += Math.PI * 2;
    o.yaw += dy * Math.min(1, dt * 8);
    const y = heightRef?.current ? heightRef.current(o.x, o.z) : 0;
    n.position.set(o.x, y, o.z);
    n.rotation.y = o.yaw;
    // loopt hij? (bewoog de laatste 0,8 s of zender zegt 'm')
    moving.current = (Math.hypot(dx, dz) > 0.15 || (p.m && Date.now() - (p.t || 0) < 800)) ? 1 : 0;
  });
  return (
    <group ref={g}>
      <CharacterModel key={avatar} url={avatar} movingRef={moving} targetHeight={1.55} />
      {naam ? (
        <Html position={[0, 2.05, 0]} center distanceFactor={10} zIndexRange={[5, 0]} style={{ pointerEvents: "none" }}>
          <div style={{ background: "rgba(255,255,255,.92)", borderRadius: 999, padding: "2px 9px", font: "800 12px system-ui", color: "#2a3340", whiteSpace: "nowrap", boxShadow: "0 2px 6px rgba(0,0,0,.25)" }}>👥 {naam}</div>
        </Html>
      ) : null}
    </group>
  );
}

export default function MedeSpelers({ peersRef, heightRef }) {
  const [ids, setIds] = useState([]);
  // welke poppetjes bestaan er: 2×/s vergelijken (mount/unmount is React-werk)
  useEffect(() => {
    const t = setInterval(() => {
      const m = peersRef?.current; const nieuw = m ? [...m.keys()].filter((k) => m.get(k)?.x != null) : [];
      setIds((oud) => (oud.length === nieuw.length && oud.every((k, i) => k === nieuw[i]) ? oud : nieuw));
    }, 500);
    return () => clearInterval(t);
  }, [peersRef]);
  return <group>{ids.map((id) => <MedeSpeler key={id} id={id} peersRef={peersRef} heightRef={heightRef} />)}</group>;
}
