/* eslint-disable react/button-has-type */
import {
  compose,
  setDisplayName,
  withDefaultProps,
  withPropTypes
} from "composable-styled-components";
import PropTypes from "prop-types";

const ComposedButton = compose.button(
  setDisplayName("Button"),
  withPropTypes({
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
      .isRequired,
    disabled: PropTypes.bool,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onContextMenu: PropTypes.func,
    onFocus: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseOver: PropTypes.func,
    onTouchStart: PropTypes.func,
    onTouchEnd: PropTypes.func,
    style: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    type: PropTypes.string
  }),
  withDefaultProps({
    disabled: false,
    type: "button",
    onClick: () => {}
  })
)`
  text-align: center;
  transition: all 200ms ease-in-out;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  outline: none;
  cursor: pointer;
  padding: ${(props: any) => props.padding || "12px 18px"};
  font-size: 15px;
  border-radius: 4px;
  border:1px solid #222;
  background: #222;
  color: #03a9f3;
  margin: ${(props: any) => props.margin};

  &:hover {
    color: #f1f1f1;
    border-color: #222;
    background: #222;
  }
`;

export default ComposedButton;
