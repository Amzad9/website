import Footer from "@/components/footer/Footer";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return(<>
      <Head>
        <link rel="icon" href="/wl.jpg" />
        <title>Weblibron</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
     <Component {...pageProps} />
      <Footer />
</>)
}
