// Bruggetje voor Mark's AvatarKiezer (claude.ai-artifact, 12 aug):
// het artifact gebruikt window.storage (bestaat alleen binnen claude.ai).
// Hier wordt dat localStorage, zodat het programma ONGEWIJZIGD draait.
// AvatarKiezer.jsx zelf nooit aanpassen — dat is Mark's exacte bestand.
if (typeof window !== "undefined" && !window.storage) {
  window.storage = {
    async get(sleutel) {
      const v = localStorage.getItem(sleutel);
      return v == null ? null : { key: sleutel, value: v };
    },
    async set(sleutel, waarde) {
      localStorage.setItem(sleutel, String(waarde));
      return { key: sleutel, value: String(waarde) };
    },
    async delete(sleutel) {
      localStorage.removeItem(sleutel);
      return true;
    },
  };
}
