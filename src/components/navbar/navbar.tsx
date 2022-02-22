import Grid from "@mui/material/Grid";
import {
  useNavigate,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";
import useElementScrollLeft from "../../hooks/useElementScroll";
import {
  HeaderRightOptions,
  // IconMenu,
  IconSearch,
  IconUser,
  LeftGradient,
  Logo,
  NavRoutes,
  NavRoutesDivInside,
  RightGradient,
} from "./navbar.style";

const Navbar = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [navRoutesWrapperRef, navRoutesWrapperScroll] = useElementScrollLeft();

  const pushRoute = (
    pathname: string,
    queryTitle: string,
    queryString: string
  ) => {
    navigate({
      pathname: pathname,
      search: `?${createSearchParams({
        [queryTitle]: queryString,
      })}`,
    });
  };

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
          padding: "8px 16px 0 16px",
        }}
      >
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 0px 6px 0px",
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
            {/* <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconMenu />
            </div> */}

            <Logo onClick={() => navigate("/")}>
              <span>which is</span>
            </Logo>
          </div>
          <HeaderRightOptions>
            <div onClick={() => navigate("/search")}>
              <IconSearch />
            </div>
            <div onClick={() => alert("open user/login")}>
              <IconUser />
            </div>
          </HeaderRightOptions>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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

          <NavRoutesDivInside ref={navRoutesWrapperRef} id="routes_wrapper">
            <NavRoutes
              selected={searchParams.get("topic") === "trending"}
              onClick={() => pushRoute("home", "topic", "trending")}
            >
              <span>Trending</span>
            </NavRoutes>
            <NavRoutes
              selected={searchParams.get("topic") === "all"}
              style={{ marginLeft: "16px" }}
              onClick={() => pushRoute("home", "topic", "all")}
            >
              <span>All</span>
            </NavRoutes>
            <NavRoutes
              selected={searchParams.get("topic") === "games"}
              style={{ marginLeft: "16px" }}
              onClick={() => pushRoute("home", "topic", "games")}
            >
              <span>Games</span>
            </NavRoutes>
            <NavRoutes
              selected={searchParams.get("topic") === "celebrities"}
              style={{ marginLeft: "16px" }}
              onClick={() => pushRoute("home", "topic", "celebrities")}
            >
              <span>Celebrities</span>
            </NavRoutes>
            <NavRoutes
              selected={searchParams.get("topic") === "movies"}
              style={{ marginLeft: "16px" }}
              onClick={() => pushRoute("home", "topic", "movies")}
            >
              <span>Movies</span>
            </NavRoutes>
            <NavRoutes
              selected={searchParams.get("topic") === "general"}
              style={{ marginLeft: "16px" }}
              onClick={() => pushRoute("home", "topic", "general")}
            >
              <span>General</span>
            </NavRoutes>
            <NavRoutes
              selected={searchParams.get("topic") === "custom"}
              style={{ marginLeft: "16px" }}
              onClick={() => pushRoute("home", "topic", "custom")}
            >
              <span>Custom</span>
            </NavRoutes>
            <NavRoutes
              style={{ marginLeft: "16px" }}
              onClick={() => navigate("/about")}
            >
              <span>About</span>
            </NavRoutes>
          </NavRoutesDivInside>
        </Grid>
      </Grid>
    </nav>
  );
};

export default Navbar;
