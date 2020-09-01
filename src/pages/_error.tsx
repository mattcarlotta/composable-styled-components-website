import Head from "next/head";
import Center from "~components/Body/Center";
import Flex from "~components/Body/Flex";
import Link from "~components/Navigation/Link";

const NotFound = () => (
  <Flex justify="center" style={{ height: "70vh" }}>
    <Head>
      <title>Server Error - Matt Carlotta</title>
    </Head>
    <Center>
      <div css="font-size: 40px;margin-bottom: 0;padding: 0px;">500</div>
      <div css="font-size: 20px;font-weight: bold;margin-top: -5px;margin-bottom: 20px;letter-spacing: 2px;">
        Uh Oh! The server encountered an error!
      </div>
      <Link
        ariaLabel="Navigate to back to home"
        dataTestId="go-home"
        dark
        nomargin
        nopadding
        href="/"
      >
        Go Home
      </Link>
    </Center>
  </Flex>
);

export default NotFound;
