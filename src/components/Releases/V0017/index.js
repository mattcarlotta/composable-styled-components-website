import ReleaseNotes from "~components/Body/ReleaseNotes";
import AnchorTitle from "~components/Navigation/AnchorTitle";
import OutsideLink from "~components/Navigation/OutsideLink";

const V0017 = () => (
  <>
    <AnchorTitle color="#0366d6" ariaLabel="Release 0.0.12" id="0.0.12">
      v0.0.17
    </AnchorTitle>
    <ReleaseNotes>
      <li>Updated README to remove documentation under construction</li>
      <li>Implemented Algolia search within documentation website</li>
      <li>
        ⬆️&nbsp;
        <OutsideLink href="https://github.com/styled-components/styled-components/issues/3238">
          Upstream Issue
        </OutsideLink>
        &#58;&nbsp;styled-components throws prop mismatch warnings in
        development when using a SSR framework
      </li>
    </ReleaseNotes>
  </>
);

export default V0017;
