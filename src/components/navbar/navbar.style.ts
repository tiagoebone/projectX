import Grid from "@mui/material/Grid";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";

export const Logo = styled.div`
  width: fit-content;
  background-color: transparent;
  padding: 4px 8px;
  border-radius: 22px;
  border: 2px solid #efefef;
  transition: 300ms;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #efefef;
    span {
      color: #343746;
    }
  }

  span {
    transition: 300ms;
    font-family: "Akaya Telivigala", cursive;
    font-size: 28px;
    color: #fff;
  }
`;

export const NavRoutes = styled(Grid)`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;

  span {
    transition: 200ms;
    font-size: 18px;
    color: #fff;
  }

  &:hover {
    span {
      color: #cbf;
    }
  }
`;

export const IconSearch = styled(SearchIcon)`
  cursor: pointer;
  color: #fff;
  transition: 200ms;

  &:hover {
    color: #cbf;
  }
`;

export const InputSearch = styled(Input)`
  color: #dddddd;
  font-size: 14px;
  font-weight: 200;
  :after {
    border-bottom: 1px solid #fff;
    content: "";
  }
`;
