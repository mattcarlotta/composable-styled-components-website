import { compose, setDisplayName } from "composable-styled-components";
import Preview from "~components/Body/Preview";
import { FC } from "~types";

const Button = compose.button(setDisplayName("Button"))`
  background: palevioletred;
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 16px;
  padding: 5px;
`;

export const exampleCode = `const Button = compose.button(
  setDisplayName("Button")
)\`
  background: palevioletred;
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 16px;
  padding: 5px;
\`;

render(
  <Button>
    pink button
  </Button>
);`;

const ComposeExample: FC = () => (
  <Preview code={exampleCode}>
    <Button data-testid="compose-pink-button">pink button</Button>
  </Preview>
);

export default ComposeExample;
