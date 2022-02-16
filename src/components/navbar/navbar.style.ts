import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Logo = styled.div`
  width: fit-content;
  background-color: transparent;
  border-radius: 22px;
  transition: 300ms;
  cursor: pointer;
  user-select: none;

  span {
    transition: 300ms;
    font-family: "Akaya Telivigala", cursive;
    font-size: 28px;
    color: #fff;
  }
`;

export const NavRoutes = styled.div`
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
      color: #b0b2ff;
    }
  }
`;

export const IconSearch = styled(SearchIcon)`
  cursor: pointer;
  color: #fff;
  transition: 200ms;

  &:hover {
    color: #b0b2ff;
  }
`;

export const IconSetting = styled(SettingsIcon)`
  cursor: pointer;
  color: #fff;
  transition: 200ms;

  &:hover {
    color: #b0b2ff;
  }
`;

export const IconMenu = styled(MenuIcon)`
  cursor: pointer;
  color: #fff;
  transition: 200ms;

  &:hover {
    color: #b0b2ff;
  }
`;

export const IconUser = styled(AccountCircleIcon)`
  cursor: pointer;
  color: #fff;
  transition: 200ms;

  &:hover {
    color: #b0b2ff;
  }
`;
