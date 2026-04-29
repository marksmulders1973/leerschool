// <Button> — design-system primary action. Tokens uit shared/tokens.css.
//
// Varianten:
//   primary   — Studiebol-groen. Hoofdactie. Eén per scherm.
//   secondary — Studie-blauw. Voor leerpad-CTA.
//   ghost     — Transparant + border. Cancel/back/secundair.
//   danger    — Rood. Verwijderen, verlaten.
//   game      — Oranje glow. ALLEEN in OBLITERATOR; niet in leer-UI.
//
// Sizes: sm (32px) · md (44px tap-target) · lg (52px primary CTA)
//
// Hover lift -2px, pressed scale 0.98, focus ring blauw.

import { forwardRef } from "react";

const VARIANTS = {
  primary: {
    background: "var(--color-brand-primary)",
    color: "var(--color-text-strong)",
    border: "1px solid var(--color-brand-primary-700)",
    boxShadow: "var(--shadow-sm)",
  },
  secondary: {
    background: "var(--color-brand-secondary)",
    color: "var(--color-text-strong)",
    border: "1px solid var(--color-brand-secondary-700)",
    boxShadow: "var(--shadow-sm)",
  },
  ghost: {
    background: "transparent",
    color: "var(--color-text)",
    border: "1px solid var(--color-border)",
    boxShadow: "none",
  },
  danger: {
    background: "var(--color-danger)",
    color: "var(--color-text-strong)",
    border: "1px solid #b71c1c",
    boxShadow: "var(--shadow-sm)",
  },
  game: {
    background: "var(--color-game-energy)",
    color: "var(--color-text-strong)",
    border: "1px solid #d84315",
    boxShadow: "var(--shadow-glow-game)",
    fontFamily: "var(--font-display)",
    letterSpacing: "0.5px",
  },
};

const SIZES = {
  sm: { padding: "6px 12px", fontSize: "var(--font-size-sm)", minHeight: 32 },
  md: { padding: "10px 16px", fontSize: "var(--font-size-md)", minHeight: "var(--tap-target-min)" },
  lg: { padding: "14px 24px", fontSize: "var(--font-size-lg)", minHeight: 52 },
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
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;

  // Eigen interactie-handlers die ook props-handlers doorgeven.
  const { onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, disabled, ...rest } = props;
  const handleEnter = (e) => {
    if (!disabled) {
      e.currentTarget.style.transform = "translateY(-2px)";
      if (variant === "game") {
        e.currentTarget.style.boxShadow = "var(--shadow-glow-game), var(--shadow-md)";
      } else if (variant !== "ghost") {
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
      }
    }
    onMouseEnter?.(e);
  };
  const handleLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = v.boxShadow;
    onMouseLeave?.(e);
  };
  const handleDown = (e) => {
    if (!disabled) e.currentTarget.style.transform = "scale(0.98)";
    onMouseDown?.(e);
  };
  const handleUp = (e) => {
    if (!disabled) e.currentTarget.style.transform = "translateY(-2px)";
    onMouseUp?.(e);
  };

  return (
    <button
      ref={ref}
      data-variant={variant}
      disabled={disabled}
      style={{
        ...v,
        ...s,
        width: fullWidth ? "100%" : "auto",
        borderRadius: "var(--radius-md)",
        fontFamily: v.fontFamily || "var(--font-display)",
        fontWeight: "var(--font-weight-bold)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--space-2)",
        transition:
          "transform var(--motion-fast) var(--ease-out), box-shadow var(--motion-fast) var(--ease-out)",
        ...extraStyle,
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      {...rest}
    >
      {leftIcon && <span aria-hidden="true">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
    </button>
  );
});

export default Button;
