import { compose, setDisplayName } from "composable-styled-components";

const MiniTitle = compose.div(setDisplayName("MiniTitle"))`
  margin: 10px 0 0;
  word-wrap: break-word;
  font-size: 17px;
  font-weight: bold;
`;

export default MiniTitle;
