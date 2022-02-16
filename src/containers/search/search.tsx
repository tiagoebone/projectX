import { IconSearch, InputStyled } from "./search.style";

const Search = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ marginTop: "24px" }}>
        <InputStyled>
          <div className="startAdorment">
            <IconSearch />
          </div>
          <input type="text" placeholder="Search" autoFocus />
        </InputStyled>
      </div>
    </div>
  );
};

export default Search;
