import { compose, setDisplayName } from "composable-styled-components";

const Subtitle = compose.p(setDisplayName("Subtitle"))`
  margin-bottom: 30px;
  word-wrap: break-word;
  font-size: 16px;
  text-align: ${({ textalign }) => textalign || "center"};
`;

export default Subtitle;
