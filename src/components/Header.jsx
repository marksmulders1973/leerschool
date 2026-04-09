import styles from "../styles.js";

export default function Header({ title, subtitle, onBack, onHome }) {
  return (
    <div style={styles.header}>
      <button style={styles.headerBack} onClick={onBack}>←</button>
      <div style={{ flex: 1 }}>
        <h2 style={styles.headerTitle}>{title}</h2>
        {subtitle && <p style={styles.headerSubtitle}>{subtitle}</p>}
      </div>
      {onHome && (
        <button style={{ ...styles.headerBack, fontSize: 18 }} onClick={onHome} title="Naar beginpagina">🏠</button>
      )}
    </div>
  );
}
