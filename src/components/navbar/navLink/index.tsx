import {
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";
import { NavLinkWrapper } from "./styles";
import { NavLinkProps } from "./types";

const NavLink = ({ label, param }: NavLinkProps) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

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
    <NavLinkWrapper
      selected={searchParams.get("topic") === param}
      onClick={() => pushRoute("home", "topic", param)}
    >
      <span>{label}</span>
    </NavLinkWrapper>
  );
};

export default NavLink;
