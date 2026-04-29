// <Input> — text/number input met label. Tokens uit shared/tokens.css.
//
// Layout: label boven (xs muted), input (44px tap-target), helper of error onder.
// Focus-ring via CSS-token --color-border-focus.

import { forwardRef, useId } from "react";

const Input = forwardRef(function Input(
  { label, helper, error, id, style: extraStyle, onFocus, onBlur, ...props },
  ref
) {
  const auto = useId();
  const inputId = id || auto;
  const describedBy = error ? `${inputId}-error` : helper ? `${inputId}-helper` : undefined;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontSize: "var(--font-size-sm)",
            fontWeight: "var(--font-weight-bold)",
            fontFamily: "var(--font-body)",
            color: "var(--color-text)",
          }}
        >
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        aria-describedby={describedBy}
        aria-invalid={error ? "true" : undefined}
        style={{
          minHeight: "var(--tap-target-min)",
          padding: "10px 14px",
          borderRadius: "var(--radius-sm)",
          border: `1px solid ${error ? "var(--color-danger)" : "var(--color-border)"}`,
          background: "var(--color-bg-surface)",
          color: "var(--color-text-strong)",
          fontFamily: "var(--font-body)",
          fontSize: "var(--font-size-md)",
          outline: "none",
          transition: "border-color var(--motion-fast) var(--ease-out), box-shadow var(--motion-fast) var(--ease-out)",
          ...extraStyle,
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = error
            ? "var(--color-danger)"
            : "var(--color-border-focus)";
          e.currentTarget.style.boxShadow = error
            ? "0 0 0 3px var(--color-danger-soft)"
            : "0 0 0 3px var(--color-info-soft)";
          onFocus?.(e);
        }}
        onBlur={(e) => {
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.borderColor = error ? "var(--color-danger)" : "var(--color-border)";
          onBlur?.(e);
        }}
        {...props}
      />
      {error && (
        <span
          id={`${inputId}-error`}
          style={{
            fontSize: "var(--font-size-xs)",
            color: "var(--color-danger)",
            fontFamily: "var(--font-body)",
          }}
        >
          {error}
        </span>
      )}
      {!error && helper && (
        <span
          id={`${inputId}-helper`}
          style={{
            fontSize: "var(--font-size-xs)",
            color: "var(--color-text-muted)",
            fontFamily: "var(--font-body)",
          }}
        >
          {helper}
        </span>
      )}
    </div>
  );
});

export default Input;
