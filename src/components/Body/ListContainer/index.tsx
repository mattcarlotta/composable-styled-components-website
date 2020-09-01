import { compose, setDisplayName } from "composable-styled-components";

const ListContainer = compose.div(setDisplayName("ListContainer"))`
  border-bottom: 1px solid #adc2dd;
`;

export default ListContainer;
