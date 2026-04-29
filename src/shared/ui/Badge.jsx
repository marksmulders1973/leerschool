// <Badge> — pill voor labels, mastery-niveaus, status-tags.
//
// Tones:
//   neutral / info / success / warning / danger        — generieke status
//   bronze / silver / gold / unmeasured                — mastery-niveaus
//
// Sizes: sm (20px) · md (24px, default).

const TONES = {
  neutral:    { bg: "var(--color-bg-elevated)", color: "var(--color-text-muted)",   border: "1px solid var(--color-border-soft)" },
  info:       { bg: "var(--color-info-soft)",   color: "var(--color-info)",         border: "1px solid var(--color-info)" },
  success:    { bg: "var(--color-success-soft)",color: "var(--color-success)",      border: "1px solid var(--color-success)" },
  warning:    { bg: "var(--color-warning-soft)",color: "var(--color-warning)",      border: "1px solid var(--color-warning)" },
  danger:     { bg: "var(--color-danger-soft)", color: "var(--color-danger)",       border: "1px solid var(--color-danger)" },
  bronze:     { bg: "rgba(205,127,50,0.15)",    color: "var(--color-mastery-bronze)",     border: "1px solid var(--color-mastery-bronze)" },
  silver:     { bg: "rgba(192,192,192,0.15)",   color: "var(--color-mastery-silver)",     border: "1px solid var(--color-mastery-silver)" },
  gold:       { bg: "rgba(255,215,0,0.15)",     color: "var(--color-mastery-gold)",       border: "1px solid var(--color-mastery-gold)" },
  unmeasured: { bg: "rgba(107,120,150,0.15)",   color: "var(--color-mastery-unmeasured)", border: "1px solid var(--color-mastery-unmeasured)" },
};

const SIZES = {
  sm: { height: 20, padding: "0 8px", fontSize: "var(--font-size-xs)" },
  md: { height: 24, padding: "0 10px", fontSize: "var(--font-size-sm)" },
};

export default function Badge({ tone = "neutral", size = "md", icon, children, style: extraStyle, ...props }) {
  const t = TONES[tone] || TONES.neutral;
  const s = SIZES[size] || SIZES.md;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        background: t.bg,
        color: t.color,
        border: t.border,
        borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-body)",
        fontWeight: "var(--font-weight-bold)",
        ...s,
        ...extraStyle,
      }}
      {...props}
    >
      {icon && <span aria-hidden="true">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
