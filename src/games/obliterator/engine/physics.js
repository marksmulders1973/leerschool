// Pure physics + collision-resolutie. Geen render, geen state-mutatie buiten
// de player-object dat als argument wordt meegegeven.

export const PHYSICS = {
  gravity: 0.7,
  jumpVelocity: -13,
  groundY: 480, // bottom van de play area in canvas-coordinaten
  playerSize: 30,
  playerX: 80,
  obliterateWindow: 8, // frames na een tap waarin je nog kunt obliterenen
};

export function updatePlayer(player, input) {
  // Tap-edge → spring
  if (input.tapped && player.onGround) {
    player.vy = PHYSICS.jumpVelocity;
    player.onGround = false;
    player.didTap = true;
    player.tapAge = 0;
  }
  // Gravity
  player.vy += PHYSICS.gravity;
  player.y += player.vy;
  // Land op grond
  if (player.y >= PHYSICS.groundY - PHYSICS.playerSize) {
    player.y = PHYSICS.groundY - PHYSICS.playerSize;
    player.vy = 0;
    player.onGround = true;
  }
  // Tap-window verlopen
  if (player.didTap) {
    player.tapAge++;
    if (player.tapAge > PHYSICS.obliterateWindow) {
      player.didTap = false;
      player.tapAge = 0;
    }
  }
}

/**
 * Resolve collision tussen player en obstakel. Returns:
 *   "hit"        — overlap detected
 *   "obliterate" — obstakel net gepasseerd, speler is in lucht én tapte recent
 *   "jump"       — obstakel net gepasseerd zonder obliterate-condities
 *   null         — niets gebeurd
 *
 * Het obstakel-object wordt niet gemuteerd hier; de caller markeert
 * `obstacle.scored = true` om dubbele score te voorkomen.
 */
export function resolveCollision(player, obstacle) {
  const px = PHYSICS.playerX;
  const py = player.y;
  const pw = PHYSICS.playerSize;
  const ph = PHYSICS.playerSize;
  // AABB-test
  const overlapX = px + pw > obstacle.x && px < obstacle.x + obstacle.w;
  const overlapY = py + ph > obstacle.y && py < obstacle.y + obstacle.h;
  if (overlapX && overlapY) return "hit";
  // Net gepasseerd?
  if (!obstacle.scored && obstacle.x + obstacle.w < px) {
    if (player.didTap && player.tapAge <= PHYSICS.obliterateWindow && !player.onGround) {
      return "obliterate";
    }
    return "jump";
  }
  return null;
}

/**
 * Pickup-collision voor power-ups en sterren — wordt opgepakt bij overlap,
 * geen "passeren" check.
 */
export function pickupCollision(player, item) {
  const px = PHYSICS.playerX;
  const py = player.y;
  const pw = PHYSICS.playerSize;
  const ph = PHYSICS.playerSize;
  return (
    px + pw > item.x &&
    px < item.x + item.w &&
    py + ph > item.y &&
    py < item.y + item.h
  );
}

export function makePlayer() {
  return {
    y: PHYSICS.groundY - PHYSICS.playerSize,
    vy: 0,
    onGround: true,
    didTap: false,
    tapAge: 0,
  };
}
