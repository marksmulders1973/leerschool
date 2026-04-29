// Header — page top-bar met back/home + titel/subtitel.
// Design-system v1: tokens + tap-target ≥ 44px.

const ICON_BTN = {
  width: "var(--tap-target-min)",
  height: "var(--tap-target-min)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid var(--color-border-soft)",
  background: "var(--color-bg-elevated)",
  color: "var(--color-text)",
  borderRadius: "var(--radius-md)",
  cursor: "pointer",
  fontFamily: "var(--font-display)",
  fontSize: "var(--font-size-lg)",
  fontWeight: "var(--font-weight-bold)",
  flexShrink: 0,
  transition: "background var(--motion-fast) var(--ease-out)",
};

export default function Header({ title, subtitle, onBack, onHome }) {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        padding: "var(--space-4) var(--space-4) var(--space-3)",
      }}
    >
      {onBack && (
        <button
          type="button"
          aria-label="Terug"
          style={ICON_BTN}
          onClick={onBack}
        >
          ←
        </button>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--font-size-display-md)",
            fontWeight: "var(--font-weight-bold)",
            color: "var(--color-text-strong)",
            margin: 0,
            lineHeight: "var(--line-height-tight)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--font-size-sm)",
              color: "var(--color-text-muted)",
              margin: "2px 0 0",
              lineHeight: "var(--line-height-snug)",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
      {onHome && (
        <button
          type="button"
          aria-label="Naar beginpagina"
          title="Naar beginpagina"
          style={ICON_BTN}
          onClick={onHome}
        >
          🏠
        </button>
      )}
    </header>
  );
}
