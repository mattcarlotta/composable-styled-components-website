import { compose, setDisplayName } from "composable-styled-components";

const Flex = compose.div(setDisplayName("Flex"))`
  @media (max-width: 976px) {
    display: block;
    margin: 0 auto;
  }
  
  flex-direction: ${(props: any) => props.direction || "row"};
  display: flex;
  justify-content: ${(props: any) => props.justify || "center"};
  align-items: ${(props: any) => props.align || "center"};
  margin: ${(props: any) => props.margin || "0px"};
  width: ${(props: any) => props.width || "100%"};
  height: ${(props: any) => props.height || "auto"};
`;

export default Flex;
