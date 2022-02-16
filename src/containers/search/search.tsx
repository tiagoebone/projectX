import Card from "../../components/card/card";
import { IconSearch, InputStyled } from "./search.style";

const Search = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ padding: "24px 0px" }}>
        <InputStyled>
          <div className="startAdorment">
            <IconSearch />
          </div>
          <input type="text" placeholder="Search" autoFocus />
        </InputStyled>
      </div>
      <div style={{ display: "flex", width: "85vw", marginBottom: "16px" }}>
        <span style={{ fontSize: "22px", color: "#fff" }}>
          Results for "search"
        </span>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default Search;
