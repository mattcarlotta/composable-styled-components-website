import { compose, setDisplayName } from "composable-styled-components";

const Form = compose.form(setDisplayName("SearchForm"))`
  @media (min-width: 768px)
  .algolia-docsearch-suggestion--subcategory-column {
    display: block;
  }

  @media (max-width: 1000px) {
    span.algolia-autocomplete {
      display: block;
    }
    span.ds-dropdown-menu::before {
      display: none;
    }
  }

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 0 0 auto;
`;

export default Form;
