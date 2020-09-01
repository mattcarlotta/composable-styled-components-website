import {
  compose,
  setDisplayName,
  withPropTypes
} from "composable-styled-components";
import PropTypes from "prop-types";
import Note from "~components/Body/Note";
import Preview from "~components/Body/Preview";
import OutsideLink from "~components/Navigation/OutsideLink";
import { FC } from "~types";

const Button = compose.button(
  setDisplayName("Button"),
  withPropTypes({
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
      .isRequired,
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func
  })
)`
  background: #888;
  border: 2px solid transparent;
  border-radius: 2px;
  color: #eee;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 10px;
  transition: all 200ms ease-in-out;

  &:hover {
    background: #555;
  }

  &:focus {
    border-color: #888;
    color: #eee;
    outline: 0;
  }
`;

const exampleCode = `const Button = compose.button(
  setDisplayName("Button"),
  withPropTypes({
    children: PropTypes.oneOfType(
      [PropTypes.node, PropTypes.string]
    ).isRequired,
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  })
)\`
  background: #888;
  border: 2px solid transparent;
  border-radius: 2px;
  color: #eee;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 10px;
  transition: all 200ms ease-in-out;

  &:hover {
    background: #555;
  }

  &:focus {
    border-color: #888;
    color: #eee;
    outline: 0;
  }
\`;

render(
  <Button 
    type="button" 
    onClick={() => alert("Hello")}
  >
    With PropTypes
  </Button>
);`;

const WithPropTypesExample: FC = () => (
  <>
    <Preview code={exampleCode}>
      <Button
        data-testid="with-prop-types-button"
        type="button"
        onClick={() => alert("Hello")}
      >
        With PropTypes
      </Button>
    </Preview>
    <Note>
      In order to use the composable "withPropTypes" function, the&nbsp;
      <OutsideLink
        data-testid="prop-types"
        href="https://github.com/facebook/prop-types"
      >
        PropTypes
      </OutsideLink>
      &nbsp;package is required to be installed.
    </Note>
  </>
);

export default WithPropTypesExample;
