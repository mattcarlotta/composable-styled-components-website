import { compose, setDisplayName } from "composable-styled-components";
import Preview from "~components/Body/Preview";
import Note from "~components/Body/Note";
import OutsideLink from "~components/Navigation/OutsideLink";
import { FC } from "~types";

const NamedButton = compose.button(setDisplayName("NamedButton"))`
  background: #dc004e;
  border-radius: 3px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 5px;
  transition: background 200ms ease-in-out;

  &:hover {
    background: #9a0036;
  }

  &:focus {
    outline: 0;
  }
`;

export const exampleCode = `const NamedButton = compose.button(
  setDisplayName("NamedButton")
)\`
  background: #dc004e;
  border-radius: 3px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding: 5px;
  transition: background 200ms ease-in-out;

  &:hover {
    background: #9a0036;
  }

  &:focus {
    outline: 0;
  }
\`

render(<NamedButton />)
`;

const SetDisplayNameExample: FC = () => (
  <>
    <Preview code={exampleCode}>
      <NamedButton data-testid="display-name-button">pink button</NamedButton>
    </Preview>
    <Note>
      The display name will not be applied to the class name! Instead, in order
      to view the display name, you must have&nbsp;
      <OutsideLink
        data-testid="react-dev-tools"
        href="https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html"
      >
        React Dev Tools
      </OutsideLink>
      &nbsp;installed, open your browser console and select the "Components"
      tab. For example:
      <br />
      <img
        css="width: 100%;max-width: 629px;"
        src="/setDisplayNameExample.png"
        alt="setDisplayNameExample.png"
      />
    </Note>
  </>
);

export default SetDisplayNameExample;
