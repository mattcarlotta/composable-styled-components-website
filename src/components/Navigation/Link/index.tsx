import PropTypes from "prop-types";
import Link from "next/link";
import {
  css,
  extend,
  setDisplayName,
  withDefaultProps,
  withPropTypes,
  withStyles
} from "composable-styled-components";
import { LinkComponentProps } from "~interfaces";
import { FC } from "~types";

const LinkComponent: FC<LinkComponentProps> = ({
  ariaLabel,
  asHref,
  className,
  children,
  dataTestId,
  href,
  id,
  style,
  target
}) => (
  <Link href={href} as={asHref} passHref>
    <a
      data-testid={dataTestId}
      aria-label={ariaLabel}
      id={id}
      style={style}
      className={className}
      target={target}
    >
      {children}
    </a>
  </Link>
);

const CustomLink = extend(
  setDisplayName("Link"),
  withDefaultProps({
    href: "",
    asHref: "",
    onClick: () => {}
  }),
  withPropTypes({
    asHref: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
      .isRequired,
    dataTestId: PropTypes.string,
    href: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    stopPropagation: PropTypes.bool,
    style: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    target: PropTypes.string
  }),
  withStyles(css`
    color: ${(props: any) => {
      if (props.dark) return "#036ef3";
      if (props.light) return "#03a9f3";
      return "#000000a6";
    }};
    white-space: nowrap;
    text-decoration: none;
    text-transform: ${(props: any) => props.texttransform || "none"};
    margin: ${(props: any) =>
      props.nomargin ? "0px" : props.margin || "0 10px"};
    transition: all 200ms ease-in-out;
    padding: ${(props: any) => (props.nopadding ? "0" : "4px 8px")};
    border-radius: 2px;
    cursor: pointer;
    ${(props: any) =>
      props.active &&
      `
      color: #f1f1f1;
      background: #0f7ae5;
    `};

    &:hover {
      color: ${(props: any) =>
        props.hover && props.light ? "#f1f1f1" : "#0f7ae5"};
      background: ${(props: any) =>
        props.hover && props.light ? "#0f7ae5" : "transparent"};
      text-decoration: ${(props: any) => !props.light && "underline"};
    }

    &:focus {
      color: ${(props: any) => {
        if (props.dark) return "#0f7ae5";
        if (props.light) return "#f1f1f1";
        return "#000000a6";
      }};
      outline: none;
      border: 0;
    }
  `)
)(LinkComponent);

export default CustomLink;
