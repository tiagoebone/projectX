import React from "react";
import Card from "../../components/card/card";
import { IconClear, IconSearch, InputStyled } from "./search.style";
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
              <Card />
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
};

export default Search;
