import { compose, setDisplayName } from "composable-styled-components";

const FlexSpaceBetween = compose.div(setDisplayName("FlexSpaceBetween"))`
  @media (max-width: 976px) {
    display: block;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export default FlexSpaceBetween;
