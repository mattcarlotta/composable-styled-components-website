import {
  compose,
  extend,
  setDisplayName,
  withStyles
} from "composable-styled-components";
// import PropTypes from "prop-types";
import FlexSpaceBetween from "~components/Body/FlexSpaceBetween";
import SyntaxHighlighter from "~components/Body/SyntaxHighlighter";

const SyntaxContainer = compose.div(setDisplayName("Preview"))`
  @media (max-width: 976px) {
    width: 100%;
  }

  height: 350px;
  width: 433px;
  margin-right: 8px;
`;

const OutputContainer = extend(
  setDisplayName("Output"),
  withStyles(`
    @media (max-width: 976px) {
      margin-top: 10px;
    }
    
    overflow: auto;
    padding: 10px;
    border-radius: 4px;
    background: #f7f7f7;
    margin-right: 0px;
    border: 1px solid #0f7ae5;
  `)
)(SyntaxContainer);

const Preview = ({ children, code }) => (
  <FlexSpaceBetween style={{ marginTop: 10 }}>
    <SyntaxContainer>
      <SyntaxHighlighter preStyles={{ margin: "0 0 20px", height: "100%" }}>
        {code}
      </SyntaxHighlighter>
    </SyntaxContainer>
    <OutputContainer>{children}</OutputContainer>
  </FlexSpaceBetween>
);

// Preview.propTypes = {
//   children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
//   code: PropTypes.string.isRequired
// };

export default Preview;
