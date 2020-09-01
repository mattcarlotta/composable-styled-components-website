import ReleaseNotes from "~components/Body/ReleaseNotes";
import AnchorTitle from "~components/Navigation/AnchorTitle";
import { FC } from "~types";

const V0019: FC = () => (
  <>
    <AnchorTitle color="#0366d6" ariaLabel="Release 0.0.19" id="0.0.19">
      v0.0.19
    </AnchorTitle>
    <ReleaseNotes>
      <li>Fix broken logo in README</li>
    </ReleaseNotes>
  </>
);

export default V0019;
