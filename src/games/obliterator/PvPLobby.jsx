// PvP Lobby — host-flow (maak match + deel link) en guest-flow (join-bevestiging).
// Sluit naadloos aan op ObliteratorV2: zodra status="ready" + beide presence,
// callback `onMatchReady(match)` wordt aangeroepen met de actieve match.
//
// Design-system v1: game-shell stijl (oranje glow), tokens.

import { useEffect, useRef, useState } from "react";
import {
  createMatch,
  fetchMatch,
  joinMatch,
  subscribeMatch,
  whatsappShareLink,
} from "./pvp.js";
import { getCurrentUserId } from "../../auth.js";

const TEAM_HOST = { name: "Blauw", color: "#42a5f5", emoji: "🔵" };
const TEAM_GUEST = { name: "Rood", color: "#ff5252", emoji: "🔴" };

export default function PvPLobby({ playerName, mode: initialMode, code, onMatchReady, onClose }) {
  // mode: "host" (maak nieuwe match) of "guest" (join bestaande via code)
  // Kan switchen van guest → host als ik (logged-in user) de host blijk te zijn
  // van de match die ik probeer te joinen — dat gebeurt als je je eigen
  // gedeelde link op dezelfde browser opent.
  const [mode, setMode] = useState(initialMode);
  const [phase, setPhase] = useState("loading"); // loading | error | waiting | ready
  const [match, setMatch] = useState(null);
  const [error, setError] = useState(null);
  const [bothPresent, setBothPresent] = useState(false);
  const subRef = useRef(null);

  // ── Init: host maakt match, guest joint bestaande ──────────
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        if (mode === "host") {
          const { match: m, error: err } = await createMatch({ hostName: playerName });
          if (cancelled) return;
          if (err) {
            setError(err.message || "Kon match niet aanmaken");
            setPhase("error");
            return;
          }
          setMatch(m);
          setPhase("waiting");
        } else {
          // Guest: eerst checken of match bestaat
          const existing = await fetchMatch(code);
          if (cancelled) return;
          if (!existing) {
            setError("Match niet gevonden of verlopen");
            setPhase("error");
            return;
          }
          if (existing.status === "finished") {
            setError("Deze match is al afgelopen");
            setPhase("error");
            return;
          }
          // Slim: ben ik de host? Dat gebeurt als je je eigen gedeelde link
          // opent op hetzelfde apparaat. Switch naar host-view, geen
          // dubbele guest-join nodig.
          const myUid = await getCurrentUserId();
          if (myUid && existing.host_user_id === myUid) {
            setMode("host");
            setMatch(existing);
            setPhase("waiting");
            return;
          }
          // Probeer te joinen (alleen als nog geen guest)
          if (!existing.guest_name) {
            const { match: joined, error: joinErr } = await joinMatch({
              code,
              guestName: playerName,
            });
            if (cancelled) return;
            if (joinErr || !joined) {
              setError("Iemand anders is je voor — of je was al ingelogd onder die naam");
              setPhase("error");
              return;
            }
            setMatch(joined);
          } else if (existing.guest_name === playerName || existing.guest_user_id === myUid) {
            // We zijn de guest, herverbind
            setMatch(existing);
          } else {
            setError("Match is al vol");
            setPhase("error");
            return;
          }
          setPhase("waiting");
        }
      } catch (e) {
        if (!cancelled) {
          setError(e.message || "Onbekende fout");
          setPhase("error");
        }
      }
    })();
    return () => { cancelled = true; };
  }, [mode, code, playerName]);

  // ── Subscribe op channel zodra we een match hebben ─────────
  useEffect(() => {
    if (!match || phase !== "waiting") return;
    const role = mode === "host" ? "host" : "guest";
    const sub = subscribeMatch({
      code: match.id,
      role,
      name: playerName,
      handlers: {
        onPresence: ({ hostOnline, guestOnline }) => {
          setBothPresent(hostOnline && guestOnline);
        },
        onStart: ({ startsAt }) => {
          // Beide kanten triggeren onMatchReady nu
          onMatchReady?.(match, sub, role, startsAt);
        },
      },
    });
    subRef.current = sub;
    return () => {
      sub.unsub();
      subRef.current = null;
    };
  }, [match, phase, mode, playerName]);

  // ── Host: zodra beide aanwezig → start countdown ───────────
  const handleStart = () => {
    if (!subRef.current || !match) return;
    const startsAt = Date.now() + 3000; // 3s countdown
    subRef.current.sendStart(startsAt);
    onMatchReady?.(match, subRef.current, "host", startsAt);
  };

  // ── Renders ────────────────────────────────────────────────
  return (
    <div style={overlayStyle}>
      <div style={cardStyle}>
        <div style={titleRowStyle}>
          <span style={eyebrowStyle}>⚔️ DUEL</span>
          <button
            type="button"
            onClick={onClose}
            style={closeBtnStyle}
            aria-label="Sluiten"
          >
            ✕
          </button>
        </div>

        {phase === "loading" && (
          <div style={centerStyle}>
            <div style={{ fontSize: 36, marginBottom: 8 }} aria-hidden="true">⏳</div>
            <div style={mutedStyle}>
              {mode === "host" ? "Match aanmaken…" : "Match openen…"}
            </div>
          </div>
        )}

        {phase === "error" && (
          <div style={centerStyle}>
            <div style={{ fontSize: 32, marginBottom: 6 }} aria-hidden="true">😔</div>
            <div style={{ ...mutedStyle, color: "var(--color-danger)", marginBottom: 14 }}>
              {error}
            </div>
            <button type="button" onClick={onClose} style={ghostBtnStyle}>
              Sluiten
            </button>
          </div>
        )}

        {phase === "waiting" && match && mode === "host" && (
          <HostWaitingPanel
            match={match}
            playerName={playerName}
            bothPresent={bothPresent}
            onStart={handleStart}
            onCancel={onClose}
          />
        )}

        {phase === "waiting" && match && mode === "guest" && (
          <GuestWaitingPanel
            match={match}
            playerName={playerName}
            bothPresent={bothPresent}
          />
        )}
      </div>
    </div>
  );
}

// ─── Host-paneel: code + WhatsApp-knop + start ─────────────────
function HostWaitingPanel({ match, playerName, bothPresent, onStart, onCancel }) {
  const [copied, setCopied] = useState(false);
  const [polledGuestName, setPolledGuestName] = useState(match.guest_name || null);
  const [waitSeconds, setWaitSeconds] = useState(0);
  const url = `${window.location.origin}/duel/${match.id}`;

  // Polling: check elke 3s of er een guest in de DB-rij is verschenen.
  // Realtime presence is sneller maar pas actief als guest in zelfde channel
  // zit. DB-update gebeurt al bij joinMatch, dus dit geeft eerder signaal.
  useEffect(() => {
    if (polledGuestName) return; // al gevonden
    let cancelled = false;
    const id = setInterval(async () => {
      try {
        const m = await fetchMatch(match.id);
        if (!cancelled && m?.guest_name) setPolledGuestName(m.guest_name);
      } catch {}
    }, 3000);
    return () => { cancelled = true; clearInterval(id); };
  }, [match.id, polledGuestName]);

  // Tikker voor "wacht-tijd" zodat we hint kunnen tonen na 60 sec
  useEffect(() => {
    if (polledGuestName || bothPresent) return;
    const id = setInterval(() => setWaitSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [polledGuestName, bothPresent]);

  const opponentSeen = polledGuestName || bothPresent;
  const guestNaam = polledGuestName || match.guest_name;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <div>
      <div style={teamLineStyle}>
        <span style={{ ...teamBadgeStyle, background: TEAM_HOST.color }}>
          {TEAM_HOST.emoji} {playerName} (Blauw)
        </span>
        <span style={vsStyle}>VS</span>
        <span style={{ ...teamBadgeStyle, background: opponentSeen ? TEAM_GUEST.color : "#444" }}>
          {opponentSeen ? `${TEAM_GUEST.emoji} ${guestNaam || "Klaar"}` : "⏳ Wachten…"}
        </span>
      </div>

      <div style={shareIntroStyle}>
        Stuur je vriend de uitnodiging — hij hoeft niks in te typen,
        de link doet de rest.
      </div>

      <a
        href={whatsappShareLink(match.id, playerName)}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          ...primaryBtnStyle,
          background: "#25d366",
          borderColor: "#128c7e",
          textDecoration: "none",
          fontSize: 16,
          padding: "14px 16px",
          minHeight: 52,
        }}
      >
        📱 Deel via WhatsApp
      </a>
      <button type="button" onClick={copyLink} style={{ ...ghostBtnStyle, marginTop: 8 }}>
        {copied ? "✓ Link gekopieerd" : "📋 Of kopieer link voor andere chat"}
      </button>

      <div
        style={{
          marginTop: 10,
          padding: "8px 10px",
          borderRadius: 8,
          background: "rgba(0,0,0,0.3)",
          fontSize: 11,
          color: "var(--color-text-muted)",
          fontFamily: "var(--font-mono)",
          textAlign: "center",
          wordBreak: "break-all",
        }}
      >
        {url}
      </div>

      <div style={statusStyle}>
        {opponentSeen ? (
          <span style={{ color: "var(--color-success)", fontFamily: "var(--font-display)" }}>
            ✓ {guestNaam ? `${guestNaam} is binnen` : "Tegenstander gezien"} — klaar om te starten!
          </span>
        ) : waitSeconds > 60 ? (
          <span style={{ color: "var(--color-warning)" }}>
            Geen reactie na {Math.floor(waitSeconds / 60)} min — link niet aangekomen?
            Probeer opnieuw te delen of stuur de URL hierboven via een andere chat.
          </span>
        ) : (
          <span style={{ color: "var(--color-text-muted)" }}>
            Wacht tot je vriend de link opent… ({waitSeconds}s)
          </span>
        )}
      </div>

      <button
        type="button"
        onClick={onStart}
        disabled={!opponentSeen}
        style={{
          ...primaryBtnStyle,
          marginTop: 14,
          opacity: opponentSeen ? 1 : 0.45,
          cursor: opponentSeen ? "pointer" : "not-allowed",
        }}
      >
        ⚔️ START DUEL
      </button>
      <button type="button" onClick={onCancel} style={{ ...ghostBtnStyle, marginTop: 8 }}>
        Annuleren
      </button>
    </div>
  );
}

// ─── Guest-paneel: wachten op host ─────────────────────────────
function GuestWaitingPanel({ match, playerName, bothPresent }) {
  return (
    <div>
      <div style={teamLineStyle}>
        <span style={{ ...teamBadgeStyle, background: TEAM_HOST.color }}>
          {TEAM_HOST.emoji} {match.host_name} (Blauw)
        </span>
        <span style={vsStyle}>VS</span>
        <span style={{ ...teamBadgeStyle, background: TEAM_GUEST.color }}>
          {TEAM_GUEST.emoji} {playerName} (Rood)
        </span>
      </div>

      <div style={statusStyle}>
        <div style={{ fontSize: 36, marginBottom: 8 }} aria-hidden="true">
          {bothPresent ? "✅" : "⏳"}
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--color-text-strong)" }}>
          {bothPresent
            ? `Klaar — ${match.host_name} start zo de match`
            : `Verbinding maken met ${match.host_name}…`}
        </div>
        <div style={{ ...mutedStyle, marginTop: 6 }}>
          {bothPresent ? "" : "Een momentje…"}
        </div>
      </div>
    </div>
  );
}

// ─── Styles (game-stijl, oranje glow) ──────────────────────────
const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0, 0, 0, 0.85)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 12,
  zIndex: 200,
};

const cardStyle = {
  width: "100%",
  maxWidth: 420,
  background: "var(--color-bg-overlay)",
  border: "2px solid var(--color-game-energy)",
  borderRadius: "var(--radius-lg)",
  padding: "var(--space-5)",
  boxShadow: "var(--shadow-glow-game), var(--shadow-lg)",
  fontFamily: "var(--font-body)",
  color: "var(--color-text)",
};

const titleRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 16,
};

const eyebrowStyle = {
  fontFamily: "var(--font-display)",
  fontSize: 16,
  fontWeight: 800,
  color: "var(--color-game-energy)",
  letterSpacing: 1.5,
};

const closeBtnStyle = {
  width: 32,
  height: 32,
  border: "none",
  background: "transparent",
  color: "var(--color-text-muted)",
  fontSize: 18,
  cursor: "pointer",
  borderRadius: 999,
};

const centerStyle = {
  textAlign: "center",
  padding: "20px 0",
};

const mutedStyle = {
  color: "var(--color-text-muted)",
  fontSize: 14,
};

const teamLineStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 6,
  marginBottom: 16,
};

const teamBadgeStyle = {
  flex: 1,
  padding: "8px 10px",
  borderRadius: 12,
  fontFamily: "var(--font-display)",
  fontSize: 12,
  fontWeight: 700,
  color: "#fff",
  textAlign: "center",
  minWidth: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

const vsStyle = {
  fontFamily: "var(--font-display)",
  fontSize: 14,
  fontWeight: 800,
  color: "var(--color-game-power)",
  flexShrink: 0,
};

const shareIntroStyle = {
  fontSize: 13,
  color: "var(--color-text-muted)",
  textAlign: "center",
  marginBottom: 12,
  lineHeight: 1.4,
  fontFamily: "var(--font-body)",
};

const statusStyle = {
  textAlign: "center",
  padding: "14px 0 4px",
  fontSize: 13,
};

const primaryBtnStyle = {
  display: "block",
  width: "100%",
  padding: "12px 16px",
  border: "1px solid #d84315",
  borderRadius: 12,
  background: "var(--color-game-energy)",
  color: "var(--color-text-strong)",
  fontFamily: "var(--font-display)",
  fontSize: 15,
  fontWeight: 800,
  cursor: "pointer",
  textAlign: "center",
  letterSpacing: 0.5,
  minHeight: 48,
  lineHeight: "24px",
};

const ghostBtnStyle = {
  width: "100%",
  padding: "10px 16px",
  border: "1px solid var(--color-border)",
  borderRadius: 12,
  background: "transparent",
  color: "var(--color-text)",
  fontFamily: "var(--font-display)",
  fontSize: 14,
  fontWeight: 700,
  cursor: "pointer",
  minHeight: 44,
};
