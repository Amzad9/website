import dynamic from 'next/dynamic';
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import LogoWhite from "@/assets/whiteLogo.png";
import { useRouter } from "next/router";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import { poppins, inter } from "@/utils/fonts";

// Dynamically import components with no SSR
const Header = dynamic(() => import("@/components/header/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer/Footer"), { ssr: false });
// const Contact = dynamic(() => import("@/components/contact/Contact"), { ssr: false });
import Contact from "@/components/contact/Contact";

declare global {
  interface Window {
    trackingFunctions: {
      onLoad: (config: { appId: string }) => void;
    };
    dataLayer: Array<{ [key: string]: unknown }>;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [logo] = useState(LogoWhite);
useEffect(() => {
  console.log("Contact component mounted");
}, []);
  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      <div className={`${poppins.variable} ${inter.variable}`}>
        <Head>
          {/* Basic Meta Tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="English" />
          <meta name="author" content="Weblibron" />
          <meta name="theme-color" content="#000000" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* Favicon */}
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          
          {/* Primary Meta Tags */}
          <title>Weblibron - Premium Digital Solutions for Web and App</title>
          <meta name="title" content="Premium Digital Solutions for Web and App Development" />
          <meta name="description" content="Weblibron offers premium digital solutions, including web and app development, UI/UX design, and branding services. Transform your online presence with Weblibron." />
          <meta name="keywords" content="Weblibron, web development, app development, design, fast websites, SEO, stunning web solutions, branding, website, design, UI design, UX research" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://weblibron.com/" />
          <meta property="og:title" content="Weblibron - Web Solution" />
          <meta property="og:description" content="Elevate your online presence with Weblibron swift, stunning web solutions. Specializing in web development, app development, and design." />
          <meta property="og:image" content="https://weblibron.com/preview.jpg" />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://weblibron.com/" />
          <meta property="twitter:title" content="Weblibron - Web Solution" />
          <meta property="twitter:description" content="Elevate your online presence with Weblibron swift, stunning web solutions." />
          <meta property="twitter:image" content="https://weblibron.com/priview.jpg" />
          
          {/* Additional Meta Tags */}
          <meta name="application-name" content="Weblibron" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Weblibron" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-tap-highlight" content="no" />
        </Head>

        <SpeedInsights />
        {isLoading && <Loader />}
        <Header logo={logo} />
        <Component {...pageProps} />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
