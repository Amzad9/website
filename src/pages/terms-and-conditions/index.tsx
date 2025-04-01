import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { poppins } from "@/utils/fonts";

// Pre-render the page at build time
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    // Revalidate every 24 hours
    revalidate: 86400
  };
};

const TermsAndConditions = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions - Weblibron</title>
        <meta name="description" content="Read Weblibron terms and conditions to understand our service usage policies, user responsibilities, and legal agreements." />
        <meta name="keywords" content="Weblibron terms, terms and conditions, service agreement" />
        
        {/* Open Graph tags */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://weblibron.com/terms" />
        <meta property="og:title" content="Terms and Conditions - Weblibron" />
        <meta property="og:description" content="Read Weblibron terms and conditions to understand our service usage policies." />
        <meta property="og:image" content="https://weblibron.com/preview.jpg" />
        
        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms and Conditions - Weblibron" />
        <meta name="twitter:description" content="Read Weblibron terms and conditions." />
        <meta name="twitter:image" content="https://weblibron.com/preview.jpg" />
        
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://weblibron.com/terms" />
      </Head>
      
      <div className={`min-h-screen bg-black text-white ${poppins.variable}`}>
        {/* Banner Section - Simplified gradient for better performance */}
        <header className="relative w-full h-[300px] bg-gradient-to-r from-blue-900 to-purple-900" role="banner">
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-white font-poppins">
              Terms and Conditions
            </h1>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-base text-gray-400 mb-8">
              Effective Date: March 2024
            </p>
            
            {/* Welcome text */}
            <p className="text-base leading-relaxed mb-8 text-gray-200">
              Welcome to Weblibron! These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of our website, mobile application, and any other services provided by us (collectively, the &quot;Services&quot;). By using our Services, you agree to be bound by these Terms and our Privacy Policy.
            </p>

            {/* Terms sections */}
            <section aria-labelledby="acceptance-terms" className="mb-12">
              <h2 id="acceptance-terms" className="text-xl md:text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2 font-poppins">
                1. Acceptance of Terms
              </h2>
              <p className="text-base text-gray-200">
                By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you don&apos;t agree to these Terms, you must not use our Services.
              </p>
            </section>

            <section aria-labelledby="user-conduct" className="mb-12">
              <h2 id="user-conduct" className="text-xl md:text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2 font-poppins">
                2. User Conduct
              </h2>
              <p className="text-base text-gray-200 mb-4">
                You agree to use our Services only for lawful purposes and in accordance with these Terms. You must not:
              </p>
              <ul className="list-disc pl-6 text-gray-200 space-y-2">
                <li>Use our Services in any way that could harm or impair the Services or the experience of other users.</li>
                <li>Use our Services to transmit or store any material that is unlawful, harmful, threatening, abusive, defamatory, or otherwise objectionable.</li>
                <li>Attempt to gain unauthorized access to our Services, other users&apos; accounts, or any related systems or networks.</li>
              </ul>
            </section>

            <section aria-labelledby="intellectual-property" className="mb-12">
              <h2 id="intellectual-property" className="text-xl md:text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2 font-poppins">
                3. Intellectual Property Rights
              </h2>
              <p className="text-base text-gray-200">
                All content on our Services, including text, graphics, logos, images, and software, is the property of Weblibron or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not use or reproduce any content from our Services without our prior written consent.
              </p>
            </section>

            <section aria-labelledby="account-security" className="mb-12">
              <h2 id="account-security" className="text-xl md:text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2 font-poppins">
                4. Account and Security
              </h2>
              <p className="text-base text-gray-200">
                If you create an account with us, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to immediately notify us of any unauthorized use of your account or any other breach of security.
              </p>
            </section>

            <section aria-labelledby="disclaimer" className="mb-12">
              <h2 id="disclaimer" className="text-xl md:text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2 font-poppins">
                5. Disclaimer of Warranties
              </h2>
              <p className="text-base text-gray-200">
                Our Services are provided &quot;as is&quot; and &quot;as available.&quot; We make no representations or warranties of any kind, express or implied, as to the operation of our Services or the information, content, materials, or products included on our Services. You expressly agree that your use of our Services is at your sole risk.
              </p>
            </section>

            <section aria-labelledby="limitation" className="mb-12">
              <h2 id="limitation" className="text-xl md:text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2 font-poppins">
                6. Limitation of Liability
              </h2>
              <p className="text-base text-gray-200">
                To the fullest extent permissible by law, Weblibron will not be liable for any damages, including but not limited to direct, indirect, incidental, consequential, or punitive damages, arising out of your use or inability to use our Services.
              </p>
            </section>

            <section aria-labelledby="indemnification" className="mb-12">
              <h2 id="indemnification" className="text-xl md:text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2 font-poppins">
                7. Indemnification
              </h2>
              <p className="text-base text-gray-200">
                You agree to indemnify and hold Weblibron, its affiliates, officers, directors, employees, and agents harmless from any claim or demand, including reasonable attorneys&apos; fees, made by any third party due to or arising out of your breach of these Terms or your violation of any law or the rights of a third party.
              </p>
            </section>

            <section aria-labelledby="changes" className="mb-12">
              <h2 id="changes" className="text-xl md:text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2 font-poppins">
                8. Changes to Terms
              </h2>
              <p className="text-base text-gray-200">
                We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of our Services after any such changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section aria-labelledby="governing-law" className="mb-12">
              <h2 id="governing-law" className="text-xl md:text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2 font-poppins">
                9. Governing Law
              </h2>
              <p className="text-base text-gray-200">
                These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
            </section>

            <section aria-labelledby="contact-us" className="mb-12">
              <h2 id="contact-us" className="text-xl md:text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2 font-poppins">
                10. Contact Us
              </h2>
              <p className="text-base text-gray-200 mb-4">
                If you have any questions or concerns about these Terms, please contact us at:
              </p>
              <address className="text-base space-y-2 not-italic text-gray-200">
                <p>Weblibron</p>
                <p><a href="tel:+918178614811" className="hover:text-primary transition-colors duration-300">+91 8178614811</a></p>
                <p><a href="mailto:info@weblibron.com" className="hover:text-primary transition-colors duration-300">info@weblibron.com</a></p>
                <p>Ajnara Gen X, Gaziabad, Uttar Pradesh, India</p>
              </address>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default TermsAndConditions;
