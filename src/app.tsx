import { Typography } from "@material-ui/core";
import { Outlet, Link } from "react-router-dom";
import "./app.css";

export default function App() {
  return (
    <div className="App">
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            backgroundColor: "#777777",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "16px",
          }}
        >
          <Link to="/sobre">
            <Typography variant="h6">Sobre</Typography>
          </Link>
        </div>
        <div
          style={{
            backgroundColor: "#777777",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "16px",
          }}
        >
          <Link to="/inicial">
            <Typography variant="h6">Inicial</Typography>
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
