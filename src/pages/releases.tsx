import Subtitle from "~components/Body/Subtitle";
import Title from "~components/Body/Title";
import Head from "~components/Navigation/Head";
import V001 from "~components/Releases/V001";
import V0011 from "~components/Releases/V0011";
import V0012 from "~components/Releases/V0012";
import V0017 from "~components/Releases/V0017";

const Releases = () => (
  <>
    <Head
      title="Releases"
      url="/releases"
      description="Information on new releases for composable-styled-components"
      name="Releases"
    />
    <Title data-testid="title">Releases</Title>
    <Subtitle textalign="center">
      You can find the latest releases and any change logs here.
    </Subtitle>
    <V0017 />
    <V0012 />
    <V0011 />
    <V001 />
  </>
);

export default Releases;
