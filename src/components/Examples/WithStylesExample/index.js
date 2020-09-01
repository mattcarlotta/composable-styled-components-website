import {
  compose,
  css,
  extend,
  setDisplayName,
  withStyles
} from "composable-styled-components";
import Note from "~components/Body/Note";
import Preview from "~components/Body/Preview";

const Button = compose.button(setDisplayName("DefaultButton"))`
  background: transparent;
  border: 2px solid #888;
  border-radius: 10px;
  cursor: pointer;
  color: #888;
  display: block;
  font-size: 14px;
  line-height: 38px;
  margin: 0 0 10px;
  padding: 0 30px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 100ms ease-in-out;
  width: 150px;

  &:hover {
    border-color: #555;
    color: #555;
  }

  &:focus {
    border-color: #888;
    color: #888;
    outline: 0;
  }
`;

const DisabledButton = extend(
  setDisplayName("DisabledButton"),
  withStyles({
    cursor: "not-allowed",
    backgroundColor: "#ebebeb",
    borderColor: "#ebebeb",
    color: "#555",
    "&:hover": {
      borderColor: "#ebebeb"
    },
    "&:focus": {
      borderColor: "#ebebeb"
    }
  })
)(Button);

const PrimaryButton = extend(
  setDisplayName("PrimaryButton"),
  withStyles(props => ({
    cursor: "pointer",
    backgroundColor: props.primary ? "#03a9f3" : "transparent",
    borderColor: "#03a9f3",
    color: props.primary ? "#eee" : "#03a9f3",
    "&:hover": {
      backgroundColor: props.primary ? "#0f7ae5" : "transparent",
      borderColor: props.primary ? "transparent" : "#0f7ae5",
      color: props.primary ? "#fff" : "#0f7ae5"
    },
    " &:focus": {
      color: props.primary ? "#eee" : "#03a9f3",
      borderColor: "#03a9f3"
    }
  }))
)(Button);

const SecondaryButton = extend(
  setDisplayName("SecondaryButton"),
  withStyles(css`
    background: ${props => (props.danger ? "palevioletred" : "transparent")};
    border-color: palevioletred;
    color: ${props => (props.danger ? "#eee" : "palevioletred")};

    &:hover {
      background: ${props => (props.danger ? "#ca5c80" : "transparent")};
      border-color: ${props => (props.danger ? "transparent" : "#ca5c80")};
      color: ${props => (props.danger ? "#fff" : "#ca5c80")};
    }

    &:focus {
      color: ${props => (props.danger ? "#eee" : "palevioletred")};
      border-color: palevioletred;
    }
  `)
)(Button);

const exampleCode = `const Button = compose.button(
  setDisplayName("DefaultButton")
)\`
  background: transparent;
  border: 2px solid #888;
  border-radius: 10px;
  color: #888;
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
  width: 100%;

  &:hover {
    border-color: #555;
    color: #555;
  }

  &:focus {
    border-color: #888;
    color: #888;
    outline: 0;
  }
\`;

const PrimaryButton = extend(
  setDisplayName("PrimaryButton"),
  withStyles(props => ({
    cursor: "pointer",
    backgroundColor: 
      props.primary 
        ? "#03a9f3" 
        : "transparent",
    borderColor: "#03a9f3",
    color: 
      props.primary 
        ? "#eee" 
        : "#03a9f3",
    "&:hover": {
      backgroundColor: 
        props.primary 
          ? "#0f7ae5" 
          : "transparent",
      borderColor: 
        props.primary 
          ? "transparent" 
          : "#0f7ae5",
      color: 
        props.primary 
          ? "#fff" 
          : "#0f7ae5"
    },
    " &:focus": {
      color: 
        props.primary 
          ? "#eee" 
          : "#03a9f3",
      borderColor: "#03a9f3"
    }
  }))
)(Button);

const SecondaryButton = extend(
  setDisplayName("SecondaryButton"),
  withStyles(CSS\`
    background: \$\{props =>
      props.danger
        ? "palevioletred" 
        : "transparent"
    };
    border-color: palevioletred;
    color: \$\{props => (
      props.danger 
        ? "#eee" 
        : "palevioletred"
    )};

    &:hover {
      background: \$\{props => (
        props.danger 
          ? "#ca5c80" 
          : "transparent"
      )};
      border-color: \$\{props => (
        props.danger 
          ? "transparent" 
          : "#ca5c80"
      )};
      color: \$\{props => (
        props.danger 
          ? "#fff" 
          : "#ca5c80"
      )};
    }

    &:focus {
      color: \$\{props => (
        props.danger 
          ? "#eee" 
          : "palevioletred"
      )};
      border-color: palevioletred;
    }
  \`)
)(Button);

render(
  <>
    <Button>Default</Button>
    <DisabledButton>
      Disabled
    </DisabledButton>
    <PrimaryButton>Default</PrimaryButton>
    <PrimaryButton primary>
      Primary
    </PrimaryButton>
    <SecondaryButton>
      Default
    </SecondaryButton>
    <SecondaryButton danger>
      Danger
    </SecondaryButton>
  </>
);`;

const WithStyledExample = () => (
  <>
    <Preview code={exampleCode}>
      <Button data-testid="with-styles-default-button">Default</Button>
      <DisabledButton data-testid="with-styles-disabled-button">
        Disabled
      </DisabledButton>
      <PrimaryButton data-testid="with-styles-default-primary-button">
        Default
      </PrimaryButton>
      <PrimaryButton data-testid="with-styles-primary-button" primary>
        Primary
      </PrimaryButton>
      <SecondaryButton data-testid="with-styles-default-secondary-button">
        Default
      </SecondaryButton>
      <SecondaryButton data-testid="with-styles-secondary-danger-button" danger>
        Danger
      </SecondaryButton>
    </Preview>
    <Note>
      Due to the syntax highlighter used on this page interpolating its own css
      styles using the "css" helper function, the example above uses "CSS" as a
      workaround. This naming convention is only used for&nbsp;
      <strong>demonstration purposes</strong>.
    </Note>
  </>
);

export default WithStyledExample;
