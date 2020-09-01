import SearchForm from "~components/Body/SearchForm";
import HeaderTabs from "~components/Navigation/HeaderTabs";
import NavContainer from "~components/Navigation/NavContainer";
import { FC } from "~types";

const Header: FC = () => (
  <NavContainer>
    <HeaderTabs />
    <SearchForm />
  </NavContainer>
);

export default Header;
