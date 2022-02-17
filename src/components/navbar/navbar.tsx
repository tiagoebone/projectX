import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import useElementScrollLeft from "../../hooks/useElementScrollLeft";
import {
  IconMenu,
  IconSearch,
  IconUser,
  LeftGradient,
  Logo,
  NavRoutes,
  RightGradient,
} from "./navbar.style";

const Navbar = () => {
  const navigate = useNavigate();

  const [navRoutesWrapperRef, navRoutesWrapperScroll] = useElementScrollLeft();

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
        style={{
          width: "100%",
          maxWidth: "1174px",
          padding: "8px 16px",
        }}
      >
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
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
        <Grid
          item
          xs={12}
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LeftGradient
            style={{
              opacity: navRoutesWrapperScroll.scrollLeft > 2 ? 1 : 0,
            }}
          />
          <RightGradient
            style={{
              opacity: navRoutesWrapperScroll.scrollRight > 2 ? 1 : 0,
            }}
          />

          <div
            ref={navRoutesWrapperRef}
            style={{
              padding: "4px 0px",
              display: "flex",
              flexDirection: "row",
              whiteSpace: "nowrap",
              overflow: "auto",
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
