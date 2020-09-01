import { compose, setDisplayName } from "composable-styled-components";

const List = compose.ul(setDisplayName("List"))`
  padding-left: 30px;
  list-style-type: circle;
  margin-bottom: 30px;

  li {
    margin: 10px 0;
  }
`;

export default List;
