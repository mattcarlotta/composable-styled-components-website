import {
  compose,
  extend,
  setDisplayName,
  withProps
} from "composable-styled-components";
import Preview from "~components/Body/Preview";
import { FC } from "~types";

const Button = compose.button(
  setDisplayName("Button"),
  withProps({
    onClick: () => alert("Alert")
  })
)`
  cursor: pointer;
  background: transparent;
  border: 4px solid #ff6c47;
  border-radius: 10px;
  display: block;
  font-size: 14px;
  line-height: 38px;
  margin-bottom: 10px;
  padding: 0 30px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 100ms ease-in-out;

  &:hover {
    border-color: #555;
  }

  &:focus {
    outline: 0;
    border-color: #ff6c47;
  }
`;

const ExtendedButton = extend(
  setDisplayName("ExtendedButton"),
  withProps((props: any) => ({
    ...props,
    onClick: props.alert ? props.onClick : null
  }))
)(Button);

const exampleCode = `const Button = compose.button(
  setDisplayName("Button"),
  withProps({
    onClick: () => alert("Alert") 
  })
)\`
  background: transparent;
  border: 4px solid #ff6c47;
  border-radius: 10px;
  cursor: pointer;
  display: block;
  font-size: 14px;
  line-height: 38px;
  margin-bottom: 10px;
  padding: 0 30px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 100ms ease-in-out;

  &:hover {
    border-color: #555;
  }

  &:focus {
    outline: 0;
    border-color: #ff6c47;
  }
\`;

const ExtendedButton = extend(
  setDisplayName("ExtendedButton"),
  withProps(props => ({
    ...props,
    onClick: props.alert 
      ? props.onClick 
      : null
  }))
)(Button);

render(
  <>
    <Button>Alert</Button>
    <ExtendedButton>
      No Alert
    </ExtendedButton>
    <ExtendedButton alert>
      Alert
    </ExtendedButton>
  </>
);`;

const WithPropsExample: FC = () => (
  <Preview code={exampleCode}>
    <Button data-testid="with-props-default-button">Alert</Button>
    <ExtendedButton data-testid="with-props-noalert-button">
      No Alert
    </ExtendedButton>
    <ExtendedButton data-testid="with-props-alert-button" alert>
      Alert
    </ExtendedButton>
  </Preview>
);

export default WithPropsExample;
