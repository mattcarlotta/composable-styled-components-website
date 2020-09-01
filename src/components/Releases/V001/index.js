import ReleaseNotes from "~components/Body/ReleaseNotes";
import AnchorTitle from "~components/Navigation/AnchorTitle";
import OutsideLink from "~components/Navigation/OutsideLink";

const V001 = () => (
  <>
    <AnchorTitle color="#0366d6" ariaLabel="Release 0.0.1" id="0.0.1">
      v0.0.1
    </AnchorTitle>
    <ReleaseNotes>
      <li>
        Registered and published to&nbsp;
        <OutsideLink href="https://www.npmjs.com/package/composable-styled-components">
          NPM
        </OutsideLink>
      </li>
      <li>Added documentation website</li>
      <li>Added Jest unit testing for library</li>
      <li>Added Cypress e2e testing for website</li>
      <li>Integrated with Github actions for library CI</li>
      <li>Integrated with Vercel for documentation CI</li>
      <li>
        ⬆️&nbsp;
        <OutsideLink href="https://github.com/styled-components/jest-styled-components/issues/338">
          Upstream Issue
        </OutsideLink>
        &#58;&nbsp;temporary inlined toHaveStyleRule because of invalid 'sc-'
        selectors
      </li>
    </ReleaseNotes>
  </>
);

export default V001;
