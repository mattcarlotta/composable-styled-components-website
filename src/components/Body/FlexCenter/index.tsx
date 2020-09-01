import { compose, setDisplayName } from "composable-styled-components";

const FlexCenter = compose.div(setDisplayName("FlexCenter"))`
  flex-direction: ${(props: any) => props.direction || "row"};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props: any) => props.width || "auto"};
  height: ${(props: any) => props.height || "100%"};
  ${(props: any) =>
    props.floating ? "top: 0;left: 0;position: absolute;" : undefined};
`;

export default FlexCenter;
