import * as React from "react";
import { FaSearch } from "react-icons/fa";
import Router from "next/router";
import Button from "~components/Body/Button";
import FlexEnd from "~components/Body/FlexEnd";
import SearchBox from "~components/Body/SearchBox";
import Form from "./Form";
import { FC } from "~types";

const { NODE_ENV } = process.env;

type inputProps = {
  close: () => void;
  destroy: () => void;
  getVal: () => void;
  getWrapper: () => void;
  open: () => void;
  setVal: () => void;
};

type suggestionProps = {
  url: string;
};

const SearchForm: FC = () => {
  const inputRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    window.docsearch({
      apiKey: "87fbefd9926b69909e3b806c4c9eb26a",
      indexName: "mattcarlotta_composable",
      inputSelector: '[id="search-docs"]',
      debug: NODE_ENV !== "production",
      handleSelected: (
        input: inputProps,
        event: MouseEvent,
        { url }: suggestionProps
      ) => {
        event.stopPropagation();
        input.close();
        inputRef?.current?.blur();
        Router.push(url.replace(/^.+.sh/, ""));
      }
    });
  }, []);

  return (
    <FlexEnd className="right-nav">
      <Form>
        <Button
          aria-label="Search website button"
          margin="0 8px 0"
          padding="0px 4px"
          htmlFor="search-docs"
        >
          <FaSearch style={{ fontSize: 15 }} />
        </Button>
        <SearchBox ref={inputRef} className="doc-search" />
      </Form>
    </FlexEnd>
  );
};

export default SearchForm;
