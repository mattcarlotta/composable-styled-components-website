import { compose, setDisplayName } from "composable-styled-components";

const Logo = compose.div(setDisplayName("Logo"))`
  font-family: "Amoreiza", sans-serif;
  font-size: 24px;
  letter-spacing: 4px;
  color: #f1f1f1;
  font-weight: bold;
`;

export default Logo;
