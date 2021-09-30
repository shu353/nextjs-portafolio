import "bootswatch/dist/flatly/bootstrap.min.css";
import "../global.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-dark">
      <Head>
        <title>My Portafolio</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
