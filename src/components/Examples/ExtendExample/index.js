import * as React from "react";
import {
  compose,
  extend,
  setDisplayName,
  withProps,
  withAttributes
} from "composable-styled-components";
import Preview from "~components/Body/Preview";

const Button = compose.button(
  setDisplayName("Button"),
  withAttributes({ type: "button" }),
  withProps(props => ({
    ...props,
    onClick: props.type === "button" ? () => alert("Default Button") : null
  }))
)`
  background: #1f1f1f;
  border: 0;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  display: block;
  padding: 8px 16px;
  margin-bottom: 10px;
  text-decoration: none;

  &:hover {
    color: #ebebeb;
  }

  &:focus {
    outline: 0;
  }
`;

const SubmitButton = extend(
  setDisplayName("Submit Button"),
  withAttributes({ type: "submit" })
)(Button);

const exampleCode = `const Button = compose.button(
  setDisplayName("Button"),
  withAttributes({ type: "button" }),
  withProps(props => ({
    ...props,
    onClick: props.type === "button" 
      ? () => alert("Button") 
      : null
  })),
)\`
  background: #1f1f1f;
  border: 0;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  display: block;
  padding: 8px 16px;
  margin-bottom: 10px;
  text-decoration: none;

  &:hover {
    color: #ebebeb;
  }

  &:focus {
    outline: 0;
  }
\`;

const SubmitButton = extend(
  setDisplayName("Submit Button"),
  withAttributes({ type: "submit" })
)(Button);

const Example = () => {
  const handleSubmit = useCallback(e => {
    e.preventDefault();
    alert("Submit Button");
  }, []);

  return (
    <form>
      <Button>Default</Button>
      <SubmitButton>Submit</SubmitButton>
    </form>
  )
}


render(<Example />);
`;

const ExtendExample = () => {
  const handleSubmit = React.useCallback(e => {
    e.preventDefault();
    alert("Submit Button");
  }, []);

  return (
    <Preview code={exampleCode}>
      <form onSubmit={handleSubmit}>
        <Button data-testid="extend-default-button">Default</Button>
        <SubmitButton data-testid="extend-submit-button">Submit</SubmitButton>
      </form>
    </Preview>
  );
};

export default ExtendExample;
