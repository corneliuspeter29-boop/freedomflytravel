export default function Navbar() {
  return (
    <nav style={{
      padding: "20px",
      background: "#0a3d62",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h2>Freedom Fly Travel</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a>
        <a href="/about" style={{ color: "white", textDecoration: "none" }}>About</a>
        <a href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
      </div>
    </nav>
  );
}
