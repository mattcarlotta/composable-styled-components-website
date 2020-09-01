import { compose, setDisplayName } from "composable-styled-components";

const NavContainer = compose.div(setDisplayName("NavContainer"))`
  @media (max-width: 1100px) {
    height: 90px;
    display: block;

    .right-nav {
      display: block;
      width: 220px;
      margin-top: 10px;
      margin-right: auto;
      margin-left: auto;
    }

    .left-nav {
      width: 500px;
      margin: 0 auto;
    }
  }

  position: fixed;
  top: 0;
  height: 50px;
  background: #222222;
  padding: 0 40px;
  color: #f1f1f1;
  z-index: 1000;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export default NavContainer;
