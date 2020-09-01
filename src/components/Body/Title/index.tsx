import { compose, setDisplayName } from "composable-styled-components";

const Title = compose.h1(setDisplayName("Title"))`
  font-family: "Amoreiza", sans-serif;
  text-transform: uppercase;
  letter-spacing: 15px;
  text-align: center;
  font-size: 68px;
  margin-bottom: 10px;
`;

export default Title;
