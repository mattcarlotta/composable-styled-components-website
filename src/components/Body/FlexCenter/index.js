import { compose, setDisplayName } from "composable-styled-components";

const FlexCenter = compose.div(setDisplayName("FlexCenter"))`
  flex-direction: ${({ direction }) => direction || "row"};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "100%"};
  ${({ floating }) =>
    floating ? "top: 0;left: 0;position: absolute;" : undefined};
`;

export default FlexCenter;
