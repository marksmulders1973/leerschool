// PvP MVP — match-creatie + Realtime channel-helpers.
//
// Architectuur (kort):
//   - Match-rij in `pvp_matches` houdt metadata + finale scores.
//   - Tijdens spel zijn we voornamelijk afhankelijk van Supabase Realtime
//     broadcast events op channel `pvp:<matchId>`. Lockstep met dezelfde
//     seed → identieke obstakel-spawns zonder coördinatie.
//   - Elke client is authoritative voor eigen speler. 20Hz tick-broadcast.

import supabase from "../../supabase.js";
import { getCurrentUserId } from "../../auth.js";

const CODE_ALPHABET = "abcdefghjkmnpqrstuvwxyz23456789"; // geen 0/O/1/l/i
const CODE_LENGTH = 6;

export function generateMatchCode() {
  let code = "";
  for (let i = 0; i < CODE_LENGTH; i++) {
    code += CODE_ALPHABET[Math.floor(Math.random() * CODE_ALPHABET.length)];
  }
  return code;
}

// Genereer 32-bit seed. Beide clients gebruiken dezelfde Mulberry32-RNG
// → identieke spawns van obstakels/powerups.
function generateSeed() {
  return Math.floor(Math.random() * 0x7fffffff);
}

/**
 * Host maakt een nieuwe match. Returnt { match, error }.
 * Probeert max 3× bij code-collision (zou bijna nooit moeten gebeuren).
 */
export async function createMatch({ hostName }) {
  const userId = await getCurrentUserId();
  for (let attempt = 0; attempt < 3; attempt++) {
    const code = generateMatchCode();
    const { data, error } = await supabase
      .from("pvp_matches")
      .insert({
        id: code,
        seed: generateSeed(),
        status: "lobby",
        host_user_id: userId,
        host_name: hostName,
      })
      .select()
      .single();
    if (!error) return { match: data, error: null };
    // 23505 = unique_violation
    if (error.code !== "23505") return { match: null, error };
  }
  return { match: null, error: { message: "Kon geen unieke code maken, probeer opnieuw" } };
}

/**
 * Haal match op via code. Returnt null als niet gevonden of verlopen.
 */
export async function fetchMatch(code) {
  const { data, error } = await supabase
    .from("pvp_matches")
    .select("*")
    .eq("id", code)
    .maybeSingle();
  if (error || !data) return null;
  if (data.expires_at && new Date(data.expires_at) < new Date()) return null;
  return data;
}

/**
 * Guest neemt deel. Werkt alleen als de match nog 'lobby' is en geen guest heeft.
 */
export async function joinMatch({ code, guestName }) {
  const userId = await getCurrentUserId();
  const { data, error } = await supabase
    .from("pvp_matches")
    .update({
      guest_user_id: userId,
      guest_name: guestName,
      status: "ready",
    })
    .eq("id", code)
    .eq("status", "lobby")
    .is("guest_name", null)
    .select()
    .single();
  if (error) return { match: null, error };
  return { match: data, error: null };
}

/**
 * Update finale resultaat na de match. Idempotent — blijft schrijven gaat.
 */
export async function finalizeMatch({ code, hostScore, guestScore, winner }) {
  await supabase
    .from("pvp_matches")
    .update({
      status: "finished",
      host_score: hostScore,
      guest_score: guestScore,
      host_alive: false,
      guest_alive: false,
      winner,
      finished_at: new Date().toISOString(),
    })
    .eq("id", code);
}

/**
 * Subscribe op Realtime channel voor een match. Returnt {channel, unsub}.
 *
 * Handlers:
 *   - onTick({from, y, vy, score, alive, weapon})
 *   - onLaser({from, y})
 *   - onHit({from, to})
 *   - onStart({startsAt})
 *   - onEnd({winner, scores})
 *   - onPresence({hostOnline, guestOnline})
 *   - onReact({from, emoji})
 */
export function subscribeMatch({ code, role, name, handlers = {} }) {
  const channel = supabase.channel(`pvp:${code}`, {
    config: {
      broadcast: { self: false }, // ontvang eigen events niet
      presence: { key: role },    // 'host' of 'guest' als presence-key
    },
  });

  channel.on("broadcast", { event: "tick" }, ({ payload }) => {
    handlers.onTick?.(payload);
  });
  channel.on("broadcast", { event: "laser" }, ({ payload }) => {
    handlers.onLaser?.(payload);
  });
  channel.on("broadcast", { event: "hit" }, ({ payload }) => {
    handlers.onHit?.(payload);
  });
  channel.on("broadcast", { event: "start" }, ({ payload }) => {
    handlers.onStart?.(payload);
  });
  channel.on("broadcast", { event: "end" }, ({ payload }) => {
    handlers.onEnd?.(payload);
  });
  channel.on("broadcast", { event: "react" }, ({ payload }) => {
    handlers.onReact?.(payload);
  });

  channel.on("presence", { event: "sync" }, () => {
    const state = channel.presenceState();
    handlers.onPresence?.({
      hostOnline: !!state.host,
      guestOnline: !!state.guest,
    });
  });

  channel.subscribe(async (status) => {
    if (status === "SUBSCRIBED") {
      await channel.track({ role, name, joinedAt: Date.now() });
    }
  });

  return {
    channel,
    /** Verstuur eigen tick. Side meegegeven zodat ander weet wie. */
    sendTick(payload) {
      channel.send({ type: "broadcast", event: "tick", payload: { from: role, ...payload } });
    },
    sendLaser(y) {
      channel.send({ type: "broadcast", event: "laser", payload: { from: role, y } });
    },
    sendHit(to) {
      channel.send({ type: "broadcast", event: "hit", payload: { from: role, to } });
    },
    sendStart(startsAt) {
      channel.send({ type: "broadcast", event: "start", payload: { startsAt } });
    },
    sendEnd(winner, scores) {
      channel.send({ type: "broadcast", event: "end", payload: { winner, scores } });
    },
    sendReact(emoji) {
      channel.send({ type: "broadcast", event: "react", payload: { from: role, emoji } });
    },
    unsub() {
      channel.unsubscribe();
      supabase.removeChannel(channel);
    },
  };
}

/**
 * WhatsApp deelbaar bericht + URL. Detecteert mobiel vs desktop voor optimale
 * prefix; je belandt altijd in WhatsApp Web of native app.
 */
export function whatsappShareLink(matchCode, hostName) {
  const url = `${window.location.origin}/duel/${matchCode}`;
  // OBLITERATOR voorop, gebruikersnaam ondergeschikt. *bold* werkt in WhatsApp.
  const text = `🎮 *OBLITERATOR* ⚔️\n\nJe wordt uitgedaagd voor een duel door ${hostName}!\n\nTik op de link om mee te spelen:\n${url}`;
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}
