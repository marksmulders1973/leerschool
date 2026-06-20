# Zookwartier — 3D-modellen: bronnen & licenties

Alle modellen zijn ingeladen glTF/GLB-bestanden. Allemaal **CC0** (publiek domein,
commercieel bruikbaar — veilig voor een betaald kinderproduct).

## Dieren — `animals/`
**Quaternius — "Ultimate Animated Animals"** (quaternius.com) · **CC0 1.0**
Vertex-colored low-poly (geen losse textuur → worden nooit "wit").
Fox, Deer, Stag, Alpaca, Cow, Donkey, Horse, Husky, ShibaInu, Wolf.

## Dino's — `dinos/`
**Quaternius — "Animated Dinosaurs"** (quaternius.com) · **CC0 1.0**
T-Rex, Triceratops, Stegosaurus, Velociraptor, Apatosaurus, Parasaurolophus.
Geanimeerd (Walk/Idle/Run). FBX→GLB geconverteerd met `fbx2gltf` (binair, geen
data:-URI → werkt met de productie-CSP).

## Natuur — `nature/`
**Kenney — "Nature Kit"** (kenney.nl) · **CC0 1.0**
tree_default, tree_oak, tree_palm, flower_redA/yellowA/purpleA, grass, mushroom_redGroup,
fence_simple, fence_corner, fence_gate.

## Figuurtje (poppetje)
Voorlopig zelf-gebouwd (ParkProps.jsx) — geen losse textuur, wordt nooit "wit".
Kenney "Blocky Characters" gebruikt een externe textuur-atlas en gaf laad-/cache-
problemen; later evt. een vertex-colored model.

## Oud / niet meer gebruikt
- `fox/Fox.glb` — Khronos-vos (CC-BY); was het pijplijn-bewijs in stap 1, nu
  vervangen door de Quaternius-vos. Mag verwijderd worden.

## Nog te doen
- **Draaimolen / attracties**: Kenney/Quaternius hebben geen kermis-pack; de
  draaimolen is voorlopig zelf-gebouwd (ParkProps.jsx). Later evt. los CC0-model.
