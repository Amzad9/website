import React from "react";
import Head from "next/head";
import dynamic from 'next/dynamic';
import Image from "next/image";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white font-poppins" role="main">
      <Head>
        <title>Privacy Policy - Weblibron</title>
        <meta name="description" content="Learn about how Weblibron protects your privacy and handles your data. Our comprehensive privacy policy outlines our data collection, usage, and protection practices." />
        <meta name="keywords" content="Weblibron privacy policy, data protection, user privacy, data security, GDPR compliance, privacy rights" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://weblibron.com/privacy" />
        <meta property="og:title" content="Privacy Policy - Weblibron" />
        <meta property="og:description" content="Learn about how Weblibron protects your privacy and handles your data. Our comprehensive privacy policy outlines our data collection, usage, and protection practices." />
        <meta property="og:image" content="https://weblibron.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://weblibron.com/privacy" />
        <meta property="twitter:title" content="Privacy Policy - Weblibron" />
        <meta property="twitter:description" content="Learn about how Weblibron protects your privacy and handles your data. Our comprehensive privacy policy outlines our data collection, usage, and protection practices." />
        <meta property="twitter:image" content="https://weblibron.com/og-image.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://weblibron.com/privacy" />
      </Head>
      
      {/* Banner Section */}
      <header className="relative w-full h-[300px]" role="banner">
        <Image
          src="/images/privacy-banner.jpg"
          alt="Privacy Policy Banner"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-center">Privacy Policy</h1>
        </div>
      </header>

      <main className="p-8">
        <div className="max-w-full">
          <p className="text-xl mb-8 text-gray-300">Effective Date: March 2024</p>
          <p className="text-xl leading-relaxed mb-8">
            At Weblibron, we are committed to protecting your privacy and ensuring
            the security of your personal information. This Privacy Policy explains
            how we collect, use, and protect your information when you use our
            website, mobile application, or any other services provided by us.
          </p>

          <section aria-labelledby="information-collection">
            <h2 id="information-collection" className="text-4xl font-bold mb-6 mt-12">1. Information Collection</h2>
            <h3 className="text-3xl font-semibold mb-4">Personal Information</h3>
            <p className="text-xl mb-6">
              We may collect the following types of personal information from you:
            </p>
            <ul className="list-disc list-inside text-xl space-y-3 mb-8" role="list">
              <li role="listitem">Name</li>
              <li role="listitem">Email address</li>
              <li role="listitem">Phone number</li>
              <li role="listitem">Physical address</li>
              <li role="listitem">Payment information (if applicable)</li>
              <li role="listitem">Any other information you voluntarily provide to us</li>
            </ul>

            <h3 className="text-3xl font-semibold mb-4">Non-Personal Information</h3>
            <p className="text-xl mb-6">
              We may also collect non-personal information, such as:
            </p>
            <ul className="list-disc list-inside text-xl space-y-3 mb-8" role="list">
              <li role="listitem">Browser type and version</li>
              <li role="listitem">Operating system</li>
              <li role="listitem">IP address</li>
              <li role="listitem">Referring website</li>
              <li role="listitem">Date and time of your visit</li>
            </ul>
          </section>

          <section aria-labelledby="information-usage">
            <h2 id="information-usage" className="text-4xl font-bold mb-6 mt-12">2. Use of Information</h2>
            <h3 className="text-3xl font-semibold mb-4">Personal Information</h3>
            <p className="text-xl mb-6">
              We use the personal information you provide to:
            </p>
            <ul className="list-disc list-inside text-xl space-y-3 mb-8" role="list">
              <li role="listitem">Provide and manage your account and access to our services</li>
              <li role="listitem">Process and fulfill your orders or requests</li>
              <li role="listitem">Send you important updates, notifications, and announcements</li>
              <li role="listitem">Personalize your experience on our website or application</li>
              <li role="listitem">Respond to your inquiries or support requests</li>
              <li role="listitem">Improve our services and develop new features</li>
            </ul>

            <h3 className="text-3xl font-semibold mb-4">Non-Personal Information</h3>
            <p className="text-xl mb-6">We use non-personal information to:</p>
            <ul className="list-disc list-inside text-xl space-y-3 mb-8" role="list">
              <li role="listitem">Analyze trends and usage patterns</li>
              <li role="listitem">Administer and optimize our website or application</li>
              <li role="listitem">Monitor and improve the performance and security of our services</li>
              <li role="listitem">Conduct research and analysis to enhance user experience</li>
            </ul>
          </section>

          <section aria-labelledby="information-protection">
            <h2 id="information-protection" className="text-4xl font-bold mb-6 mt-12">3. Information Protection</h2>
            <p className="text-xl mb-6">
              We take appropriate measures to protect your personal information from
              unauthorized access, disclosure, alteration, or destruction. These
              measures include:
            </p>
            <ul className="list-disc list-inside text-xl space-y-3 mb-8" role="list">
              <li role="listitem">Secure Socket Layer (SSL) technology to encrypt data transmissions</li>
              <li role="listitem">Regular security audits and vulnerability assessments</li>
              <li role="listitem">Access controls and restricted access to sensitive information</li>
              <li role="listitem">Physical and electronic security measures to protect against unauthorized access</li>
            </ul>
          </section>

          <section aria-labelledby="information-sharing">
            <h2 id="information-sharing" className="text-4xl font-bold mb-6 mt-12">4. Information Sharing</h2>
            <h3 className="text-3xl font-semibold mb-4">Third-Party Service Providers</h3>
            <p className="text-xl mb-6">
              We may share your personal information with third-party service
              providers who perform services on our behalf, such as:
            </p>
            <ul className="list-disc list-inside text-xl space-y-3 mb-8" role="list">
              <li role="listitem">Payment processors</li>
              <li role="listitem">Email marketing services</li>
              <li role="listitem">Analytics providers</li>
              <li role="listitem">Customer support platforms</li>
            </ul>
            <p className="text-xl mb-8">
              These third parties are required to use your information only for the
              purposes specified and are obligated to maintain the confidentiality and
              security of your data.
            </p>

            <h3 className="text-3xl font-semibold mb-4">Legal Requirements</h3>
            <p className="text-xl mb-8">
              We may disclose your personal information if required to do so by law or
              in response to valid requests by public authorities (e.g., a court order
              or subpoena).
            </p>

            <h3 className="text-3xl font-semibold mb-4">Business Transfers</h3>
            <p className="text-xl mb-8">
              In the event of a merger, acquisition, or sale of all or a portion of
              our assets, your personal information may be transferred as part of the
              transaction. You will be notified via email and/or a prominent notice on
              our website of any such change in ownership or control of your personal
              information.
            </p>
          </section>

          <section aria-labelledby="cookies-tracking">
            <h2 id="cookies-tracking" className="text-4xl font-bold mb-6 mt-12">5. Cookies and Tracking Technologies</h2>
            <h3 className="text-3xl font-semibold mb-4">Cookies</h3>
            <p className="text-xl mb-8">
              We use cookies to enhance your user experience and to collect
              information about your use of our website. Cookies are small text files
              that are stored on your device and can be used to recognize your browser
              or device when you visit our website again.
            </p>

            <h3 className="text-3xl font-semibold mb-4">Tracking Technologies</h3>
            <p className="text-xl mb-6">
              We may also use other tracking technologies, such as web beacons,
              pixels, and local storage, to collect information about your
              interactions with our website and emails. These technologies help us to:
            </p>
            <ul className="list-disc list-inside text-xl space-y-3 mb-8" role="list">
              <li role="listitem">Remember your preferences and settings</li>
              <li role="listitem">Track the effectiveness of our marketing campaigns</li>
              <li role="listitem">Provide personalized content and recommendations</li>
            </ul>
            <p className="text-xl mb-8">
              You can manage your cookie preferences through your browser settings or
              by using our cookie consent tool (if applicable).
            </p>
          </section>

          <section aria-labelledby="third-party-links">
            <h2 id="third-party-links" className="text-4xl font-bold mb-6 mt-12">6. Links to Third-Party Sites</h2>
            <p className="text-xl mb-8">
              Our website may contain links to third-party websites or services that
              are not owned or controlled by Weblibron. We are not responsible for the
              privacy practices or content of these third-party sites. We encourage
              you to review the privacy policies of these sites before providing any
              personal information.
            </p>
          </section>

          <section aria-labelledby="children-privacy">
            <h2 id="children-privacy" className="text-4xl font-bold mb-6 mt-12">7. Children's Privacy</h2>
            <p className="text-xl mb-8">
              Our website and services are not intended for use by children under the
              age of 13. We do not knowingly collect personal information from
              children under 13. If we become aware that we have collected personal
              information from a child under 13, we will take steps to delete that
              information as soon as possible.
            </p>
          </section>

          <section aria-labelledby="user-rights">
            <h2 id="user-rights" className="text-4xl font-bold mb-6 mt-12">8. Your Rights and Choices</h2>
            <h3 className="text-3xl font-semibold mb-4">Access and Correction</h3>
            <p className="text-xl mb-8">
              You have the right to access and correct the personal information we
              hold about you. You can do this by contacting us at [Your Contact
              Information].
            </p>

            <h3 className="text-3xl font-semibold mb-4">Opt-Out</h3>
            <p className="text-xl mb-8">
              You can opt-out of receiving marketing communications from us by
              following the unsubscribe instructions in any email you receive from us
              or by contacting us directly.
            </p>

            <h3 className="text-3xl font-semibold mb-4">Deletion</h3>
            <p className="text-xl mb-8">
              You can request the deletion of your personal information by contacting
              us at [Your Contact Information]. Please note that certain information
              may be retained as required by law or for legitimate business purposes.
            </p>
          </section>

          <section aria-labelledby="policy-updates">
            <h2 id="policy-updates" className="text-4xl font-bold mb-6 mt-12">9. Policy Updates</h2>
            <p className="text-xl mb-8">
              We may update this Privacy Policy from time to time to reflect changes
              in our practices or for other operational, legal, or regulatory reasons.
              We will notify you of any material changes by posting the updated
              Privacy Policy on our website and, where appropriate, by email. Your
              continued use of our website or services after the effective date of the
              updated Privacy Policy constitutes your acceptance of the changes.
            </p>
          </section>

          <section aria-labelledby="contact-us">
            <h2 id="contact-us" className="text-4xl font-bold mb-6 mt-12">10. Contact Us</h2>
            <p className="text-xl mb-6">
              If you have any questions or concerns about this Privacy Policy or our
              privacy practices, please contact us at:
            </p>
            <address className="text-xl space-y-2 not-italic">
              <p>Weblibron</p>
              <p><a href="tel:+918178614811" className="hover:text-primary transition-colors duration-300">+91 8178614811</a></p>
              <p><a href="mailto:info@weblibron.com" className="hover:text-primary transition-colors duration-300">info@weblibron.com</a></p>
              <p>Ajnara Gen X, Gaziabad, Uttar Pradesh, India</p>
            </address>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
