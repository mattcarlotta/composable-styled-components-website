import { compose, setDisplayName } from "composable-styled-components";

const Flex = compose.div(setDisplayName("Flex"))`
  @media (max-width: 976px) {
    display: block;
    margin: 0 auto;
  }

  flex-direction: ${({ direction }) => direction || "row"};
  display: flex;
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  margin: ${({ margin }) => margin || "0px"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
`;

export default Flex;
