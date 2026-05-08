// Focus-trap voor modals — sprint-3 G3a (audit-3 2026-05-08).
//
// Gebruik:
//   const ref = useFocusTrap(open, { onEsc: () => setOpen(false) });
//   <div ref={ref} role="dialog" aria-modal="true">...</div>
//
// Gedrag:
//   - Bij open: focus de eerste interactieve element (autoFocus respecteren).
//   - Tab/Shift-Tab cycleren binnen de modal.
//   - Escape triggert onEsc (als opgegeven).
//   - Bij close: focus terug naar het element dat open zette.

import { useEffect, useRef } from "react";

const FOCUSABLE = [
  'a[href]:not([disabled])',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'textarea:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export default function useFocusTrap(active, { onEsc } = {}) {
  const containerRef = useRef(null);
  const restoreRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const container = containerRef.current;
    if (!container) return;

    // Onthoud de huidige focus om later te herstellen.
    restoreRef.current = document.activeElement;

    // Focus eerste interactieve element (of element met autofocus-attr).
    const focusables = () => Array.from(container.querySelectorAll(FOCUSABLE)).filter((el) => !el.hidden && el.offsetParent !== null);
    const list = focusables();
    const autoEl = container.querySelector("[autofocus]");
    (autoEl || list[0])?.focus();

    const onKey = (e) => {
      if (e.key === "Escape" && typeof onEsc === "function") {
        e.stopPropagation();
        onEsc();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) {
        e.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    container.addEventListener("keydown", onKey);
    return () => {
      container.removeEventListener("keydown", onKey);
      // Herstel focus naar opener.
      try { restoreRef.current?.focus?.(); } catch {}
    };
  }, [active, onEsc]);

  return containerRef;
}
