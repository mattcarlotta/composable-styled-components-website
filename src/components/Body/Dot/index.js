import { compose, setDisplayName } from "composable-styled-components";

const ComposedDot = compose.span(setDisplayName("Dot"))`
  color: #9a9a9a;
`;

const Dot = () => <ComposedDot>&nbsp;&#9900;&nbsp;</ComposedDot>;

export default Dot;
