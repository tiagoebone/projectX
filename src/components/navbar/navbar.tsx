import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { IconSearch, Logo, NavRoutes } from "./navbar.style";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#343746",
        padding: "16px",
        boxShadow: "0px 3px 10px 2px rgba(0,0,0,0.3)",
        zIndex: 9999,
      }}
    >
      <Grid container>
        <Grid item style={{ display: "flex", alignItems: "center" }}>
          <Logo onClick={() => navigate("/")}>
            <span>which is</span>
          </Logo>
        </Grid>
        <Grid
          item
          style={{
            marginLeft: "48px",
            display: "flex",
          }}
        >
          <Grid container>
            <NavRoutes item onClick={() => navigate("/home")}>
              <span>Home</span>
            </NavRoutes>
            <NavRoutes
              item
              style={{ marginLeft: "16px" }}
              onClick={() => navigate("/about")}
            >
              <span>Rankings</span>
            </NavRoutes>
            <NavRoutes
              item
              style={{ marginLeft: "16px" }}
              onClick={() => navigate("/about")}
            >
              <span>Vote</span>
            </NavRoutes>
            <NavRoutes
              item
              style={{ marginLeft: "16px" }}
              onClick={() => navigate("/about")}
            >
              <span>About</span>
            </NavRoutes>
            <NavRoutes
              item
              style={{ marginLeft: "16px" }}
              onClick={() => navigate("/search")}
            >
              <IconSearch />
            </NavRoutes>
          </Grid>
        </Grid>
      </Grid>
    </nav>
  );
};

export default Navbar;
