import {
  compose,
  extend,
  setDisplayName,
  withAttributes
} from "composable-styled-components";
import Preview from "~components/Body/Preview";
import { FC } from "~types";

const UsernameTextBox = compose.input(
  setDisplayName("UsernameTextBox"),
  withAttributes({
    type: "text",
    placeholder: "Enter username..."
  })
)`
  background: transparent;
  border: 1px solid #555;
  border-radius: 4px;
  font-size: 14px;
  line-height: 38px;
  margin-bottom: 10px;
  padding-left: 10px;
  transition: all 300ms ease-in-out;
  width: 100%;

  ::placeholder {
    color: #bbb;
  }

  &:hover {
    border-color: #0f7ae5;
  }

  &:focus {
    border-color: #1e87f0;
    box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
    outline: 0;
  }
`;

const TextBox = extend(
  setDisplayName("TextBox"),
  withAttributes((props: any) => ({
    type: props.password ? "password" : props.type,
    placeholder: props.password ? "Enter password..." : props.placeholder
  }))
)(UsernameTextBox);

const exampleCode = `const UsernameTextBox = compose.input(
  setDisplayName("UsernameTextBox"),
  withAttributes({
    type: "text",
    placeholder: "Enter username..."
  })
)\`
  background: transparent;
  border: 1px solid #555;
  border-radius: 4px;
  font-size: 14px;
  line-height: 38px;
  margin-bottom: 10px;
  padding-left: 10px;
  transition: all 300ms ease-in-out;

  ::placeholder {
    color: #bbb;
  }

  &:hover {
    border-color: #0f7ae5;
  }

  &:focus {
    border-color: #1e87f0;
    box-shadow: 
      0px 3px 3px -2px rgba(0,0,0,0.2), 
      0px 3px 4px 0px rgba(0,0,0,0.14), 
      0px 1px 8px 0px rgba(0,0,0,0.12);
    outline: 0;
  }
\`;

const TextBox = extend(
  setDisplayName("TextBox"),
  withAttributes(props => ({
    type: 
      props.password 
        ? "password" 
        : props.type,
    placeholder: 
      props.password 
        ? "Enter password..." 
        : props.placeholder
  }))
)(UsernameTextBox);

render(
  <>
    <UsernameTextBox />
    <TextBox />
    <TextBox password />
  </>
);`;

const WithAttributesExample: FC = () => (
  <Preview code={exampleCode}>
    <UsernameTextBox data-testid="attributes-username-input" />
    <TextBox data-testid="attributes-textbox-text" />
    <TextBox data-testid="attributes-textbox-password" password />
  </Preview>
);

export default WithAttributesExample;
