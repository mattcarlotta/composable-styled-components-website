import * as React from "react";
import { FaSearch } from "react-icons/fa";
import Router from "next/router";
import Button from "~components/Body/Button";
import FlexEnd from "~components/Body/FlexEnd";
import SearchBox from "~components/Body/SearchBox";
import Form from "./Form";

const { NODE_ENV } = process.env;

const SearchForm = () => {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    docsearch({
      apiKey: "87fbefd9926b69909e3b806c4c9eb26a",
      indexName: "mattcarlotta_composable",
      inputSelector: '[id="search-docs"]',
      debug: NODE_ENV !== "production",
      handleSelected: (input, event, { url }) => {
        event.stopPropagation();
        input.close();
        inputRef.current.blur();
        Router.push(url.replace(/^.+.sh/, ""));
      }
    });
  }, []);

  return (
    <FlexEnd className="right-nav">
      <Form>
        <Button margin="0 8px 0" padding="0px 4px" htmlFor="search-docs">
          <FaSearch style={{ fontSize: 15 }} />
        </Button>
        <SearchBox ref={inputRef} className="doc-search" />
      </Form>
    </FlexEnd>
  );
};

export default SearchForm;
