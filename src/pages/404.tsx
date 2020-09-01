import Head from "next/head";
import Center from "~components/Body/Center";
import Flex from "~components/Body/Flex";
import Link from "~components/Navigation/Link";

const NotFound = () => (
  <Flex
    data-testid="not-found-page"
    justify="center"
    style={{ height: "70vh" }}
  >
    <Head>
      <title>Not Found - Composable Styled Components</title>
    </Head>
    <Center>
      <div
        data-testid="status-code"
        css="font-size: 40px;margin-bottom: 0;padding: 0px;"
      >
        404
      </div>
      <div
        data-testid="page-response"
        css="font-size: 20px;font-weight: bold;margin-top: -5px;margin-bottom: 20px;letter-spacing: 2px;"
      >
        Uh Oh! Page not found!
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
