import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <h1 style={{ padding: "8px" }}>Projeto-X</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          padding: "1rem",
        }}
      >
        <Link to="/sobre">Sobre</Link> | <Link to="/inicial">Inicial</Link>
      </nav>
      <Outlet />
    </div>
  );
}
