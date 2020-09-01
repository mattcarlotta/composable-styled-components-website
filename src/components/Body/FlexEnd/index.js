import { compose, setDisplayName } from "composable-styled-components";

const FlexEnd = compose.div(setDisplayName("FlexEnd"))`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export default FlexEnd;
