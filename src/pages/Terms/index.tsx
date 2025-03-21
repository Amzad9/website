import Head from "next/head";
import Image from "next/image";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-black text-white font-poppins">
      <Head>
        <title>Terms and Conditions - Weblibron</title>
        <meta
          name="description"
          content="Terms and Conditions for Weblibron - Learn about our terms of service"
        />
      </Head>

      {/* Banner Section */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/images/terms-banner.jpg"
          alt="Terms and Conditions Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-center">Terms and Conditions</h1>
        </div>
      </div>

      <div className="p-8">
        <div className="max-w-full">
          <p className="text-xl mb-8 text-gray-300">Effective Date: March 2024</p>
          <p className="text-xl leading-relaxed mb-8">
            Welcome to Weblibron! These Terms and Conditions (&quot;Terms&quot;)
            govern your access to and use of our website, mobile application, and
            any other services provided by us (collectively, the
            &quot;Services&quot;). By using our Services, you agree to be bound by
            these Terms and our Privacy Policy.
          </p>

          <h2 className="text-4xl font-bold mb-6 mt-12">1. Acceptance of Terms</h2>
          <p className="text-xl mb-8">
            By accessing or using our Services, you acknowledge that you have
            read, understood, and agree to be bound by these Terms. If you do not
            agree to these Terms, you must not use our Services.
          </p>

          <h2 className="text-4xl font-bold mb-6 mt-12">2. User Conduct</h2>
          <p className="text-xl mb-6">
            You agree to use our Services only for lawful purposes and in
            accordance with these Terms. You must not:
          </p>
          <ul className="list-disc list-inside text-xl space-y-3 mb-8">
            <li>
              Use our Services in any way that could harm or impair the Services
              or the experience of other users.
            </li>
            <li>
              Use our Services to transmit or store any material that is unlawful,
              harmful, threatening, abusive, defamatory, or otherwise
              objectionable.
            </li>
            <li>
              Attempt to gain unauthorized access to our Services, other
              users&apos; accounts, or any related systems or networks.
            </li>
          </ul>

          <h2 className="text-4xl font-bold mb-6 mt-12">3. Intellectual Property Rights</h2>
          <p className="text-xl mb-8">
            All content on our Services, including text, graphics, logos, images,
            and software, is the property of Weblibron or its licensors
            and is protected by copyright, trademark, and other intellectual
            property laws. You may not use or reproduce any content from our
            Services without our prior written consent.
          </p>

          <h2 className="text-4xl font-bold mb-6 mt-12">4. Account and Security</h2>
          <p className="text-xl mb-8">
            If you create an account with us, you are responsible for maintaining
            the confidentiality of your account and password and for restricting
            access to your account. You agree to immediately notify us of any
            unauthorized use of your account or any other breach of security.
          </p>

          <h2 className="text-4xl font-bold mb-6 mt-12">5. Disclaimer of Warranties</h2>
          <p className="text-xl mb-8">
            Our Services are provided &quot;as is&quot; and &quot;as
            available.&quot; We make no representations or warranties of any kind,
            express or implied, as to the operation of our Services or the
            information, content, materials, or products included on our Services.
            You expressly agree that your use of our Services is at your sole
            risk.
          </p>

          <h2 className="text-4xl font-bold mb-6 mt-12">6. Limitation of Liability</h2>
          <p className="text-xl mb-8">
            To the fullest extent permissible by law, Weblibron will not
            be liable for any damages, including but not limited to direct,
            indirect, incidental, consequential, or punitive damages, arising out
            of your use or inability to use our Services.
          </p>

          <h2 className="text-4xl font-bold mb-6 mt-12">7. Indemnification</h2>
          <p className="text-xl mb-8">
            You agree to indemnify and hold Weblibron, its affiliates,
            officers, directors, employees, and agents harmless from any claim or
            demand, including reasonable attorneys&apos; fees, made by any third
            party due to or arising out of your breach of these Terms or your
            violation of any law or the rights of a third party.
          </p>

          <h2 className="text-4xl font-bold mb-6 mt-12">8. Changes to Terms</h2>
          <p className="text-xl mb-8">
            We reserve the right to update or modify these Terms at any time
            without prior notice. Your continued use of our Services after any
            such changes constitutes your acceptance of the new Terms.
          </p>

          <h2 className="text-4xl font-bold mb-6 mt-12">9. Governing Law</h2>
          <p className="text-xl mb-8">
            These Terms are governed by and construed in accordance with the laws
            of India, without regard to its conflict of law
            provisions.
          </p>

          <h2 className="text-4xl font-bold mb-6 mt-12">10. Contact Us</h2>
          <p className="text-xl mb-6">
            If you have any questions or concerns about these Terms, please
            contact us at:
          </p>
          <div className="text-xl space-y-2">
            <p>Weblibron</p>
            <p>+91 8178614811</p>
            <p>info@weblibron.com</p>
            <p>Ajnara Gen X, Gaziabad, Uttar Pradesh, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
