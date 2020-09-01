import Head from "next/head";
import Container from "~components/Body/Container";
import GlobalStylesheet from "~styles/globalStylesheet";
import Header from "~components/Navigation/Header";
import { AppProps, FC } from "~types";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <GlobalStylesheet />
    <Header />
    <Container>
      <Component {...pageProps} />
    </Container>
  </>
);

export default App;
