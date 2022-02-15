import React from "react";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { IconSearch, InputSearch, Logo, NavRoutes } from "./navbar.style";
import useGlobalStates from "../../contexts/globalStates/hook/useGlobalStates";

const Navbar = () => {
  const navigate = useNavigate();
  const { searchedState } = useGlobalStates();

  const [showSearch, setShowSearch] = React.useState(false);

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
            alignItems: "center",
          }}
        >
          <Grid container spacing={3}>
            <NavRoutes item xs={6} onClick={() => navigate("/home")}>
              <span>Home</span>
            </NavRoutes>
            <NavRoutes item xs={6} onClick={() => navigate("/about")}>
              <span>About</span>
            </NavRoutes>
          </Grid>
        </Grid>
        <Grid
          item
          style={{
            marginLeft: "24px",
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => setShowSearch(true)}
        >
          <IconSearch />
          {showSearch && (
            <InputSearch
              name="search"
              placeholder="Search"
              color="primary"
              autoFocus
              fullWidth
              onBlur={() => setShowSearch(false)}
              onChange={(vl) => searchedState.setSearched(vl.target.value)}
            />
          )}
        </Grid>
      </Grid>
    </nav>
  );
};

export default Navbar;
