import React from "react";
import Card from "../../components/card/card";
import {
  BottomGradient,
  IconClear,
  IconSearch,
  InputStyled,
} from "./search.style";
import Grid from "@mui/material/Grid";

const Search = () => {
  const [searchText, setSearchText] = React.useState<string>("");

  const searchInputRef = React.useRef<HTMLInputElement>(null);

  const handleClearSearchClick = React.useCallback(() => {
    setSearchText("");
    if (!!searchInputRef && !!searchInputRef.current) {
      searchInputRef.current.value = "";
      searchInputRef.current.focus();
    }
  }, [searchInputRef]);

  const cardTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 16px",
      }}
    >
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "768px",
        }}
      >
        <Grid item xs={12} style={{ padding: "24px 0px" }}>
          <InputStyled title="Clear search">
            <div className="startAdorment">
              <IconSearch />
            </div>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search"
              autoFocus
              onChange={(e) => setSearchText(e.currentTarget.value)}
            />
            {!!searchText && (
              <div className="endAdorment" onClick={handleClearSearchClick}>
                <IconClear />
              </div>
            )}
          </InputStyled>
        </Grid>
        {!!searchText && (
          <>
            <Grid
              item
              xs={12}
              style={{
                marginBottom: "16px",
              }}
            >
              <span style={{ fontSize: "22px", color: "#fff" }}>
                Results for "{searchText}"
              </span>
            </Grid>
            <Grid item xs={12}>
              <BottomGradient />
              <Grid
                container
                spacing={2}
                style={{ overflow: "auto", height: "calc(100vh - 250px)" }}
              >
                {cardTest.map((it) => (
                  <Grid item xs={12} key={it}>
                    <Card />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
};

export default Search;
