import Head from "next/head";
import PropTypes from "prop-types";

const { LOCALHOST } = process.env;

const Header = ({
  children,
  description,
  keywords,
  name,
  title,
  type,
  url
}) => (
  <Head>
    <title>{title} - Composable Styled Components</title>
    <link rel="canonical" href={`${LOCALHOST}${url}`} />
    {keywords && <meta name="keywords" content={keywords} />}
    {name && (
      <meta name="name" content={`composable-styled-components: ${name}`} />
    )}
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={`${LOCALHOST}${url}`} />
    <meta property="og:type" content={type} />
    {children}
  </Head>
);

Header.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  keywords: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  type: PropTypes.string
};

Header.defaultProps = {
  description: "A lightweight composable wrapper for styled-components.",
  type: "website",
  url: ""
};

export default Header;
