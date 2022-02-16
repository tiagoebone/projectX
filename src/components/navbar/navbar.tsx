import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import {
  IconMenu,
  IconSearch,
  IconUser,
  Logo,
  NavRoutes,
} from "./navbar.style";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav
      style={{
        position: "fixed",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#343746",
        boxShadow: "0px 3px 10px 2px rgba(0,0,0,0.3)",
        zIndex: 9999,
      }}
    >
      <Grid
        container
        style={{ width: "100%", maxWidth: "1174px", padding: "8px 16px" }}
      >
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconMenu />
            </div>

            <div style={{ marginLeft: "16px" }}>
              <Logo onClick={() => navigate("/")}>
                <span>which is</span>
              </Logo>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "60px",
              justifyContent: "space-between",
            }}
          >
            <NavRoutes onClick={() => navigate("/search")}>
              <IconSearch />
            </NavRoutes>
            <NavRoutes onClick={() => alert("open user/login")}>
              <IconUser />
            </NavRoutes>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            height: "11px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 3px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#d4d4d4",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <div
            style={{
              justifyContent: "center",
              padding: "4px 0px",
              overflow: "auto",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <NavRoutes onClick={() => navigate("/home")}>
              <span>All</span>
            </NavRoutes>
            <NavRoutes
              style={{ marginLeft: "16px" }}
              onClick={() => navigate("/home")}
            >
              <span>Games</span>
            </NavRoutes>
            <NavRoutes
              style={{ marginLeft: "16px" }}
              onClick={() => navigate("/home")}
            >
              <span>Celebrities</span>
            </NavRoutes>
            <NavRoutes
              style={{ marginLeft: "16px" }}
              onClick={() => navigate("/home")}
            >
              <span>Movies</span>
            </NavRoutes>
            <NavRoutes
              style={{ marginLeft: "16px" }}
              onClick={() => navigate("/home")}
            >
              <span>General</span>
            </NavRoutes>
            <NavRoutes
              style={{ marginLeft: "16px" }}
              onClick={() => navigate("/home")}
            >
              <span>Custom</span>
            </NavRoutes>
            <NavRoutes
              style={{ marginLeft: "16px" }}
              onClick={() => navigate("/about")}
            >
              <span>About</span>
            </NavRoutes>
          </div>
        </Grid>
      </Grid>
    </nav>
  );
};

export default Navbar;
