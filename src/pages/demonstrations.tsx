import ComposeExample from "~components/Examples/ComposeExample";
import CSSExample from "~components/Examples/CSSExample";
import ExtendExample from "~components/Examples/ExtendExample";
import GettingStartedExample from "~components/Examples/GettingStartedExample";
import SetDisplayNameExample from "~components/Examples/SetDisplayNameExample";
import WithAttributesExample from "~components/Examples/WithAttributesExample";
import WithDefaultPropsExample from "~components/Examples/WithDefaultPropsExample";
import WithPropsExample from "~components/Examples/WithPropsExample";
import WithPropTypesExample from "~components/Examples/WithPropTypesExample";
import WithStylesExample from "~components/Examples/WithStylesExample";
import Paragraph from "~components/Body/Paragraph";
import Subtitle from "~components/Body/Subtitle";
import Title from "~components/Body/Title";
import AnchorTitle from "~components/Navigation/AnchorTitle";
import Head from "~components/Navigation/Head";
import Link from "~components/Navigation/Link";
import OutsideLink from "~components/Navigation/OutsideLink";

const Demonstrations = () => (
  <>
    <Head
      title="Demonstrations"
      url="/demonstrations"
      description="Learn how to use composable-styled-components"
      name="Demonstrations"
    />
    <Title data-testid="title">Demonstrations</Title>
    <Subtitle>
      From simple to complex, this page aims to cover the&nbsp;
      <Link
        ariaLabel="Navigate to API"
        dataTestId="api-link"
        dark
        nomargin
        nopadding
        href="/documentation#api"
      >
        API
      </Link>
      &nbsp;functions and how they can be utilized.
    </Subtitle>
    <AnchorTitle ariaLabel="Compose" id="compose">
      compose
    </AnchorTitle>
    <Paragraph>
      The default export of composable-styled-components that is a factory
      function to initially build a styled-component.
      <ComposeExample />
    </Paragraph>
    <AnchorTitle ariaLabel="CSS" id="css">
      css
    </AnchorTitle>
    <Paragraph>
      A named export&nbsp;
      <OutsideLink
        data-testid="styled-components-css"
        href="https://styled-components.com/docs/api#css"
      >
        helper function
      </OutsideLink>
      &nbsp;from the styled-components package that interpolates styles from
      props within&nbsp;
      <Link
        ariaLabel="Navigate to With Styles function"
        dataTestId="withStyles-link"
        dark
        nomargin
        nopadding
        href="/demonstrations#withStyles"
      >
        withStyles
      </Link>
      .
      <CSSExample />
    </Paragraph>
    <AnchorTitle ariaLabel="Extend" id="extend">
      extend
    </AnchorTitle>
    <Paragraph>
      A named export factory function to extend a styled-component with
      composable functions.
      <ExtendExample />
    </Paragraph>
    <AnchorTitle ariaLabel="Nest" id="nest">
      nest
    </AnchorTitle>
    <Paragraph>
      A named export factory function that nests each node from the left with
      any successive nodes to the right.
      <GettingStartedExample />
    </Paragraph>
    <AnchorTitle ariaLabel="Set Display Name" id="setDisplayName">
      setDisplayName
    </AnchorTitle>
    <Paragraph>
      A named export composable function that sets the display name of a
      component.
      <SetDisplayNameExample />
    </Paragraph>
    <AnchorTitle ariaLabel="With Attributes" id="withAttributes">
      withAttributes
    </AnchorTitle>
    <Paragraph>
      A named export composable function that can either explicitly (via an
      object) or conditionally (via a function returning an object) append
      DOM-specific attributes to the node.
      <WithAttributesExample />
    </Paragraph>
    <AnchorTitle ariaLabel="With Default Props" id="withDefaultProps">
      withDefaultProps
    </AnchorTitle>
    <Paragraph>
      A named export composable function that explicitly (via an object) appends
      default props to the node.
      <WithDefaultPropsExample />
    </Paragraph>
    <AnchorTitle ariaLabel="With Props" id="withProps">
      withProps
    </AnchorTitle>
    <Paragraph>
      A named export composable function that can either explicitly (via an
      object) or conditionally (via a function returning an object) appends
      props to the node.
      <WithPropsExample />
    </Paragraph>
    <AnchorTitle ariaLabel="With Prop Types" id="withPropTypes">
      withPropTypes
    </AnchorTitle>
    <Paragraph>
      A named export composable function that explicitly (via an object) appends
      appends prop types to the node.
      <WithPropTypesExample />
    </Paragraph>
    <AnchorTitle ariaLabel="With Styles" id="withStyles">
      withStyles
    </AnchorTitle>
    <Paragraph>
      A named export composable function that can either explicitly (via an
      object) or conditionally (via a function returning an object or
      interpolating props using the&nbsp;
      <Link
        ariaLabel="Navigate to css helper function"
        dataTestId="css-demo-link"
        dark
        nomargin
        nopadding
        href="/demonstrations#css"
      >
        css
      </Link>
      &nbsp;helper) append styles to the node.
      <WithStylesExample />
    </Paragraph>
  </>
);

export default Demonstrations;
