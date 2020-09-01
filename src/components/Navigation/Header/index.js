import SearchForm from "~components/Body/SearchForm";
import HeaderTabs from "~components/Navigation/HeaderTabs";
import NavContainer from "~components/Navigation/NavContainer";

const Header = () => (
  <NavContainer>
    <HeaderTabs />
    <SearchForm />
  </NavContainer>
);

export default Header;
