import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
// import LogoBlack from "@/assets/logoBlack.png";
import LogoWhite from "@/assets/whiteLogo.png";
import { useRouter } from "next/router";
import { SpeedInsights } from "@vercel/speed-insights/next"
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const logo = router.pathname === "/" ? LogoWhite : LogoWhite;

  return (
    <>
      <Head>
        <link rel="icon" href="/wl.jpg" />
        <title>Weblibron</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <SpeedInsights />
      <Header logo={logo} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
