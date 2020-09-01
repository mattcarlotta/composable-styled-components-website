import Head from "next/head";
import { HeaderProps } from "~interfaces";
import { FC } from "~types";

const { LOCALHOST } = process.env;

const Header: FC<HeaderProps> = ({
  children,
  description = "A lightweight composable wrapper for styled-components.",
  name,
  title,
  type = "website",
  url = ""
}) => (
  <Head>
    <title>{title} - Composable Styled Components</title>
    <link rel="canonical" href={`${LOCALHOST}${url}`} />
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

export default Header;
