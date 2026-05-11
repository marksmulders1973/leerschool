// Doorstroomtoets-logo (waterring + pijl).
// Mark's eigen ontwerp 2026-05-11; voortaan overal waar "Doorstroomtoets" in UI staat.
// PNG ligt in /public/logo-doorstroomtoets.png met transparante achtergrond.
export default function DoorstroomtoetsLogo({ size = 24, style }) {
  return (
    <img
      src="/logo-doorstroomtoets.png"
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      style={{ display: "inline-block", verticalAlign: "middle", objectFit: "contain", ...style }}
    />
  );
}
