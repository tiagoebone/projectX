import React from "react";
import Card from "../../components/card/card";
import {
  CardsContainer,
  IconClear,
  IconSearch,
  InputStyled,
} from "./search.style";
import Grid from "@mui/material/Grid";
import useElementScroll from "../../hooks/useElementScroll";

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

  const [cardWrapperRef, { scrollDirectionY, scrollTop }] = useElementScroll();

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
        <div
          style={{
            width: "100%",
            marginTop:
              scrollDirectionY === "down" && scrollTop > 299
                ? "-134px"
                : "00px",
            opacity: scrollDirectionY === "down" && scrollTop > 299 ? 0 : 1,
            transition: "400ms",
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
          )}
        </div>
        {!!searchText && (
          <Grid item xs={12}>
            <CardsContainer
              container
              spacing={2}
              ref={cardWrapperRef}
              style={{
                height:
                  scrollDirectionY === "down" && scrollTop > 299
                    ? "calc(100vh - 148px)"
                    : "calc(100vh - 282px)",
              }}
            >
              {cardTest.map((it) => (
                <Grid item xs={12} key={it}>
                  <Card />
                </Grid>
              ))}
            </CardsContainer>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Search;
