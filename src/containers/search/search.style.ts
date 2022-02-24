import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import Grid from "@mui/material/Grid";

export const IconSearch = styled(SearchIcon)`
  cursor: pointer;
  color: #343746;
  transition: 200ms;
`;

export const IconClear = styled(ClearIcon)`
  cursor: pointer;
  color: #343746;
  transition: 200ms;

  @media (hover: hover) {
    &:hover {
      color: #b0b2ff;
    }
  }
`;

export const InputStyled = styled.div`
  max-width: 768px;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 3px 10px 2px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  border: none;
  padding: 4px;
  background-color: #fff;

  .startAdorment {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
  }

  .endAdorment {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
  }

  input {
    width: 100%;
    height: 48px;
    font-size: 18px;
    padding: 0 4px;
    text-overflow: 14px;
    outline: none;
    border: none;
  }
`;

export const CardsContainer = styled(Grid)`
  height: calc(100vh - 250px);
  overflow: auto;

  @media screen and (max-width: 1920px) {
    padding: 0 8px 0 0;
  }

  @media screen and (max-width: 600px) {
    ::-webkit-scrollbar {
      display: none;
    }
    padding: 0;
  }
`;
