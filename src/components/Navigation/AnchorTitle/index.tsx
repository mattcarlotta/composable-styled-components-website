import { GoLink } from "react-icons/go";
import {
  compose,
  setDisplayName,
  withPropTypes,
  withAttributes
} from "composable-styled-components";
import PropTypes from "prop-types";
import Link from "~components/Navigation/Link";
import { AnchorTitleProps } from "~interfaces";
import { FC } from "~types";

const Anchor = compose.h1(
  setDisplayName("Anchor"),
  withAttributes((props: any) => ({
    id: props.id
  })),
  withPropTypes({
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
      .isRequired,
    id: PropTypes.string.isRequired
  })
)`
  margin-top: 75px;
  margin-bottom: 20px;
  letter-spacing: 2px;
  color: ${(props: any) => props.color || "black"};

  a {
    opacity: 0;
  }

  &:hover {
    a {
      opacity: 1;
    }
  }
`;

const AnchorTitle: FC<AnchorTitleProps> = ({
  ariaLabel,
  id,
  children,
  color
}) => (
  <Anchor color={color} id={id}>
    {children}
    <Link
      ariaLabel={`${ariaLabel} anchor`}
      dataTestId={`${id}-anchor`}
      nomargin
      href={`#${id}`}
    >
      <GoLink style={{ fontSize: 18 }} />
    </Link>
  </Anchor>
);

export default AnchorTitle;
