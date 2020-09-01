import ReleaseNotes from "~components/Body/ReleaseNotes";
import AnchorTitle from "~components/Navigation/AnchorTitle";
import OutsideLink from "~components/Navigation/OutsideLink";
import { FC } from "~types";

const V0018: FC = () => (
  <>
    <AnchorTitle color="#0366d6" ariaLabel="Release 0.0.18" id="0.0.18">
      v0.0.18
    </AnchorTitle>
    <ReleaseNotes>
      <li>
        Separated documentation website into its own&nbsp;
        <OutsideLink href="https://github.com/mattcarlotta/composable-styled-components-website">
          repository
        </OutsideLink>
      </li>
      <li>Implemented Github actions for continuous NPM publishing</li>
      <li>Updated and removed any unused devDependencies</li>
    </ReleaseNotes>
  </>
);

export default V0018;
