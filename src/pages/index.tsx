import { FaGithub } from "react-icons/fa";
import { GiBookmark } from "react-icons/gi";
import Button from "~components/Body/Button";
import Subtitle from "~components/Body/Subtitle";
import Title from "~components/Body/Title";
import HomeExample from "~components/Examples/HomeExample";
import Head from "~components/Navigation/Head";
import Link from "~components/Navigation/Link";
import OutsideLink from "~components/Navigation/OutsideLink";
import { CSSProperties } from "~types";

const iconStyle: CSSProperties = {
  position: "relative",
  top: 2,
  marginRight: 8
};

const App = () => (
  <div css="text-align: center;">
    <Head title="Home" />
    <Title data-testid="title">
      C<span css="letter-spacing: -3px;margin-right: 15px;">{`(</>)`}</span>
      mposable
    </Title>
    <Subtitle>
      A lightweight composable wrapper for&nbsp;
      <OutsideLink
        data-testid="styled-components"
        href="https://styled-components.com/"
      >
        styled-components
      </OutsideLink>
      .
    </Subtitle>
    <div css="margin-bottom: 20px;">
      <OutsideLink
        data-testid="github-link"
        href="https://github.com/mattcarlotta/composable-styled-components"
      >
        <Button margin="0 20px;">
          <FaGithub style={iconStyle} />
          Github
        </Button>
      </OutsideLink>
      <Link
        ariaLabel="Navigate to documentation"
        dataTestId="documentation-link"
        hover={false}
        light
        href="/documentation"
      >
        <Button>
          <GiBookmark style={iconStyle} />
          Documentation
        </Button>
      </Link>
    </div>
    <HomeExample />
  </div>
);

export default App;
