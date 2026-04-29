// <Card> — herbruikbare container. Tokens uit shared/tokens.css.
//
// Varianten:
//   study     — Lesinhoud, leerpad-stappen. Rustig, soft border.
//   exercise  — Quiz-vraag. 2px primary-border voor focus-aandacht.
//   game      — OBLITERATOR HUD. Glow + game-energy border. ALLEEN in game.
//   ghost     — List-items, transparant met soft border.
//
// Padding: md (16px, default) · sm (12px, compact lijst) · lg (24px, hero).

import { forwardRef } from "react";

const VARIANTS = {
  study: {
    background: "var(--color-bg-elevated)",
    border: "1px solid var(--color-border-soft)",
    boxShadow: "var(--shadow-sm)",
  },
  exercise: {
    background: "var(--color-bg-elevated)",
    border: "2px solid var(--color-brand-primary)",
    boxShadow: "var(--shadow-sm)",
  },
  game: {
    background: "var(--color-bg-overlay)",
    border: "2px solid var(--color-game-energy)",
    boxShadow: "var(--shadow-glow-game)",
  },
  ghost: {
    background: "transparent",
    border: "1px solid var(--color-border-soft)",
    boxShadow: "none",
  },
};

const PADDING = {
  sm: "var(--space-3)",
  md: "var(--space-4)",
  lg: "var(--space-5)",
};

const Card = forwardRef(function Card(
  { variant = "study", padding = "md", as = "div", children, style: extraStyle, ...props },
  ref
) {
  const Tag = as;
  const v = VARIANTS[variant] || VARIANTS.study;
  return (
    <Tag
      ref={ref}
      style={{
        ...v,
        padding: PADDING[padding] || PADDING.md,
        borderRadius: "var(--radius-md)",
        color: "var(--color-text)",
        fontFamily: "var(--font-body)",
        ...extraStyle,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
});

export default Card;
