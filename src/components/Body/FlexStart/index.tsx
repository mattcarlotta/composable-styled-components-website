import { compose, setDisplayName } from "composable-styled-components";

const FlexStart = compose.div(setDisplayName("FlexStart"))`
  display: flex;
  justify-content: flex-start;
  align-items: ${(props: any) => props.align || "center"};
  flex-direction: ${(props: any) => props.direction || "row"};
  width: ${(props: any) => props.width || "100%"};
`;

export default FlexStart;
