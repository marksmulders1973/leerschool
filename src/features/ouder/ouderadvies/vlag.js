// 🧭 Vlag voor het ouderadvies-prototype: alleen zichtbaar na /ouderadvies?proto=1
// (blijft dan op dit apparaat aan; ?proto=0 zet hem weer uit). Los bestand,
// zodat App.jsx de vlag kan lezen zonder het prototype zelf in te laden.
const VLAG = "lk_proto_ouderadvies";
export function ouderadviesZichtbaar() {
  try {
    const sp = new URLSearchParams(window.location.search);
    if (sp.get("proto") === "1") localStorage.setItem(VLAG, "1");
    if (sp.get("proto") === "0") localStorage.removeItem(VLAG);
    return localStorage.getItem(VLAG) === "1";
  } catch { return false; }
}
