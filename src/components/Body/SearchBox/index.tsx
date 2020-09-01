import {
  compose,
  setDisplayName,
  withAttributes
} from "composable-styled-components";

const SearchBox = compose.input(
  setDisplayName("SearchDocs"),
  withAttributes({
    id: "search-docs",
    placeholder: "Search...",
    type: "search",
    "aria-label": "Search website input box"
  })
)`
  height: 30px;
  border-radius: 4px;
  border: 1px solid transparent;
  padding-left: 10px;
  background: #ebebeb;
  color: #000;
  font-size: 15px;
  width: 250px;
  
  ::-webkit-search-cancel-button {
    background-color: white;
    cursor: pointer;
    border: white;
    color: white;
  }

  &:focus {
    outline: 0;
  }

  ::placeholder {
    color: #888;
    font-size: 15px;
  }
`;

export default SearchBox;
