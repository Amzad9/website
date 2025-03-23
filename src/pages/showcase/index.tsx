// import Header from "@/components/header/Header"
import Showcase from "@/components/showcase/showcase"
import Head from "next/head"
// import Logo from "@/assets/logoBlack.png";



const ShowCase = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Weblibron - Portfolio | Web Development & Mobile Apps</title>
        <meta name="title" content="Weblibron - Portfolio | Web Development & Mobile Apps" />
        <meta name="description" content="Explore our portfolio of innovative web and mobile applications. Specializing in React, Next.js, Vue.js, and React Native development with modern UI/UX design." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://weblibron.com/showcase" />
        <meta property="og:title" content="Weblibron - Portfolio | Web Development & Mobile Apps" />
        <meta property="og:description" content="Explore our portfolio of innovative web and mobile applications. Specializing in React, Next.js, Vue.js, and React Native development with modern UI/UX design." />
        <meta property="og:image" content="/1.jpeg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://weblibron.com/showcase" />
        <meta property="twitter:title" content="Weblibron - Portfolio | Web Development & Mobile Apps" />
        <meta property="twitter:description" content="Explore our portfolio of innovative web and mobile applications. Specializing in React, Next.js, Vue.js, and React Native development with modern UI/UX design." />
        <meta property="twitter:image" content="/1.jpeg" />

        {/* Additional Meta Tags */}
        <meta name="keywords" content="web development, mobile apps, React, Next.js, Vue.js, React Native, UI/UX design, portfolio, software development, frontend development, backend development" />
        <meta name="author" content="Weblibron" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://weblibron.com/showcase" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <div className="bg-white container xl:container mx-auto">
        <Showcase />
      </div>
    </>
  )
}

export default ShowCase