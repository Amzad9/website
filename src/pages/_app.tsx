import dynamic from 'next/dynamic';
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import LogoWhite from "@/assets/whiteLogo.png";
import { useRouter } from "next/router";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

// Dynamically import components with no SSR
const Header = dynamic(() => import("@/components/header/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer/Footer"), { ssr: false });
const Contact = dynamic(() => import("@/components/contact/Contact"), { ssr: false });

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
  const logo = router.pathname === "/" ? LogoWhite : LogoWhite;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });

    // Track page views
    const handleRouteChange = (url: string) => {
      window.dataLayer.push({
        event: 'pageview',
        page: url
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Handle page loading
    const handleStart = () => setIsLoading(true);
    const handleEnd = () => setIsLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleEnd);

    // Initial page load
    const timer = setTimeout(() => setIsLoading(false), 1000);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleEnd);
      clearTimeout(timer);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Weblibron" />
        <meta name="theme-color" content="#000000" />
        
        {/* Favicon */}
        <link rel="icon" href="/wl.jpg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Primary Meta Tags */}
        <title>Weblibron - Web Solution</title>
        <meta name="title" content="Weblibron - Web Solution" />
        <meta name="description" content="Elevate your online presence with Weblibron's swift, stunning web solutions. Specializing in web development, app development, and design." />
        <meta name="keywords" content="Weblibron, web development, app development, design, fast websites, SEO, stunning web solutions" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://weblibron.com/" />
        <meta property="og:title" content="Weblibron - Web Solution" />
        <meta property="og:description" content="Elevate your online presence with Weblibron's swift, stunning web solutions. Specializing in web development, app development, and design." />
        <meta property="og:image" content="https://weblibron.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://weblibron.com/" />
        <meta property="twitter:title" content="Weblibron - Web Solution" />
        <meta property="twitter:description" content="Elevate your online presence with Weblibron's swift, stunning web solutions. Specializing in web development, app development, and design." />
        <meta property="twitter:image" content="https://weblibron.com/og-image.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="application-name" content="Weblibron" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Weblibron" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Apollo Tracking Script */}
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
      {isLoading && <Loader />}
      <Header logo={logo} />
      <Component {...pageProps} />
      <Contact />
      <Footer />
    </>
  );
}
