import {
  compose,
  setDisplayName,
  withDefaultProps
} from "composable-styled-components";
import Preview from "~components/Body/Preview";
import { FC } from "~types";

const Button = compose.button(
  setDisplayName("Button"),
  withDefaultProps({
    children: "Hi",
    onClick: () => alert("Hi")
  })
)`
  background: transparent;
  border: 2px solid #888;
  border-radius: 0;
  cursor: pointer;
  display: block;
  font-size: 14px;
  line-height: 38px;
  margin-bottom: 10px;
  padding: 0 30px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 200ms ease-in-out;

  &:hover {
    border-color: #555;
  }

  &:focus {
    outline: 0;
    border-color: #888;
  }
`;

const exampleCode = `const Button = compose.button(
  setDisplayName("Button"),
  withDefaultProps({
    children: "Hi",
    onClick: () => alert("Hi")
  })
)\`
  background: transparent;
  border: 2px solid #888;
  border-radius: 0;
  cursor: pointer;
  display: block;
  font-size: 14px;
  line-height: 38px;
  margin-bottom: 10px;
  padding: 0 30px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 200ms ease-in-out;

  &:hover {
    border-color: #555;
  }

  &:focus {
    outline: 0;
    border-color: #888;
  }
\`;

render(
  <>
    <Button />
    <Button onClick={() => alert("bye")}>
      bye
    </Button>
  </>
);`;

const WithDefaultPropsExample: FC = () => (
  <Preview code={exampleCode}>
    <Button data-testid="default-props-button" />
    <Button
      data-testid="default-props-override-button"
      onClick={() => alert("bye")}
    >
      bye
    </Button>
  </Preview>
);

export default WithDefaultPropsExample;
