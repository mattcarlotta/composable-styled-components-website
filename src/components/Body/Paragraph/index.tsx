import { compose, setDisplayName } from "composable-styled-components";

const Paragraph = compose.div(setDisplayName("Paragraph"))`
  margin-top: 5px;
  margin-bottom: 30px;
  word-wrap: normal;
  white-space: pre-wrap;
  line-height: 26px;
`;

export default Paragraph;
