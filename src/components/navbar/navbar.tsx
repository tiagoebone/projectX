import { useNavigate } from "react-router-dom";
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

  return (
    <nav
      style={{
        position: "fixed",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#343746",
        boxShadow: "0px 3px 10px 2px rgba(0,0,0,0.3)",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1174px",
          margin: "8px 16px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
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
        </div>
        <div
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
        </div>
        <div style={{ position: "relative" }}>
          <RightGradient />
          <LeftGradient />
          <div
            style={{
              justifyContent: "center",
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
