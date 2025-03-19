import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
// import LogoBlack from "@/assets/logoBlack.png";
import LogoWhite from "@/assets/whiteLogo.png";
import { useRouter } from "next/router";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Contact from "@/components/contact/Contact";

declare global {
  interface Window {
    trackingFunctions: {
      onLoad: (config: { appId: string }) => void;
    };
  }
}
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const logo = router.pathname === "/" ? LogoWhite : LogoWhite;

  return (
    <>
      <Head>
        <link rel="icon" href="/wl.jpg" />
        <title>Weblibron</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script dangerouslySetInnerHTML={{ __html: `
          function initApollo() {
            var n = Math.random().toString(36).substring(7),
                o = document.createElement("script");
            o.src = "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" + n;
            o.async = true;
            o.defer = true;
            o.onload = function() {
              window.trackingFunctions.onLoad({ appId: "67d8fae9d38b9d0011ee8a51" });
            };
            document.head.appendChild(o);
          }
          initApollo();
        ` }} />
      </Head>
      <SpeedInsights />
      <Header logo={logo} />
      <Component {...pageProps} />
      <Contact />
      <Footer />
    </>
  );
}
