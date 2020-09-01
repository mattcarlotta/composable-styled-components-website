import { compose, setDisplayName } from "composable-styled-components";

const Container = compose.main(setDisplayName("Container"))`
  @media (max-width: 1100px) {
    padding-top: 95px;
  }

  @media (min-width: 976px) {
    margin: 0 auto 40px;
    padding-left: 0;
    padding-right: 0;
    max-width: 875px;
  }

  width: 100%;
  padding-top: 65px;
  padding-left: 30px;
  padding-right: 30px;
`;

export default Container;
