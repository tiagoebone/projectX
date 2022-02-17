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

export const NavRoutes = styled.div<{ selected?: boolean }>`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  flex-direction: column;

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

  :after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: ${({ selected }) =>
      !!selected ? "#fff" : "transparent"};
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

export const RightGradient = styled.div`
  transition: 400ms;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 30px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0), #343746);
`;

export const LeftGradient = styled.div`
  transition: 400ms;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 30px;
  background: linear-gradient(-90deg, rgba(255, 255, 255, 0), #343746);
`;

export const NavRoutesDivInside = styled.div`
  padding: 16px 0px 16px 0px;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
