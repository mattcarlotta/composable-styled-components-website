import ReleaseNotes from "~components/Body/ReleaseNotes";
import AnchorTitle from "~components/Navigation/AnchorTitle";

const V0012 = () => (
  <>
    <AnchorTitle color="#0366d6" ariaLabel="Release 0.0.12" id="0.0.12">
      v0.0.12
    </AnchorTitle>
    <ReleaseNotes>
      <li>Updated README to include imgshield tags</li>
      <li>Updated README to include package exports documentation link</li>
      <li>Updated documentation website to include package exports</li>
      <li>Added e2e tests to include package exports</li>
      <li>Removed unused exports from library bundle</li>
    </ReleaseNotes>
  </>
);

export default V0012;
