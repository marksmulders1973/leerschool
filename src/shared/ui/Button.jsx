// <Button> — eerste herbruikbaar component van het design system (P1.5).
//
// Drie varianten:
//   - "primary" (groen): hoofdactie. Eén per scherm.
//   - "ghost" (transparant): secundaire actie.
//   - "alert" (rood): destructieve actie.
//
// Gebruik tokens uit shared/tokens.css ipv inline kleuren. Geen gradient
// per default — gradients zijn opt-in voor speciale acties (mastery-CTA).
//
// Vervangt langzamerhand de honderden inline-style buttons in de codebase.
// Migreer per pagina, niet alles tegelijk.

import { forwardRef } from "react";

const VARIANT_STYLES = {
  primary: {
    background: "var(--color-primary)",
    color: "var(--color-text-strong)",
    border: "1px solid var(--color-primary-dark)",
    boxShadow: "var(--shadow-sm)",
  },
  ghost: {
    background: "transparent",
    color: "var(--color-text)",
    border: "1px solid var(--color-border)",
    boxShadow: "none",
  },
  alert: {
    background: "var(--color-alert)",
    color: "var(--color-text-strong)",
    border: "1px solid #b71c1c",
    boxShadow: "var(--shadow-sm)",
  },
};

const SIZE_STYLES = {
  sm: { padding: "6px 12px", fontSize: "var(--font-size-sm)" },
  md: { padding: "10px 16px", fontSize: "var(--font-size-md)" },
  lg: { padding: "14px 24px", fontSize: "var(--font-size-lg)" },
};

const Button = forwardRef(function Button(
  {
    variant = "primary",
    size = "md",
    fullWidth = false,
    leftIcon = null,
    rightIcon = null,
    children,
    style: extraStyle,
    ...props
  },
  ref
) {
  const variantStyle = VARIANT_STYLES[variant] || VARIANT_STYLES.primary;
  const sizeStyle = SIZE_STYLES[size] || SIZE_STYLES.md;
  return (
    <button
      ref={ref}
      style={{
        ...variantStyle,
        ...sizeStyle,
        width: fullWidth ? "100%" : "auto",
        borderRadius: "var(--radius-lg)",
        fontFamily: "var(--font-display)",
        fontWeight: "var(--font-weight-bold)",
        cursor: props.disabled ? "not-allowed" : "pointer",
        opacity: props.disabled ? 0.5 : 1,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--space-2)",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
        ...extraStyle,
      }}
      {...props}
    >
      {leftIcon && <span aria-hidden="true">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
    </button>
  );
});

export default Button;
