import {
  compose,
  setDisplayName,
  withPropTypes,
  withAttributes
} from "composable-styled-components";
import PropTypes from "prop-types";

const OutsideLink = compose.a(
  setDisplayName("Outside Link"),
  withAttributes({
    rel: "noopener noreferrer",
    target: "_blank"
  }),
  withPropTypes({
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
      .isRequired,
    style: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    )
  })
)`
  color: #036ef3;
  white-space: nowrap;
  text-decoration: none;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #0f7ae5;
    text-decoration: underline;
  }

  &:focus {
    color: #036ef3;
    outline: none;
    border: 0;
  }
`;

export default OutsideLink;
