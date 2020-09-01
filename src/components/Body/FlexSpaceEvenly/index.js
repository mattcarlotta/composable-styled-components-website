import { compose, setDisplayName } from "composable-styled-components";

const FlexSpaceEvenly = compose.div(setDisplayName("FlexSpaceEvenly"))`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export default FlexSpaceEvenly;
