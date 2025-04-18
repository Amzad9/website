import Head from 'next/head';

interface SeoHeadProps {
    title: string;
    description: string;
    keywords: string;
    ogImage?: string;
    canonicalUrl?: string;
    icon: string;
}

const SeoHead = ({ title, description, keywords,icon, ogImage = '/og-image.jpg', canonicalUrl }: SeoHeadProps) => {
    const siteUrl = 'https://yourwebsite.com'; // Replace with your actual website URL

    return (
        <Head>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="icon" type="image/png" sizes="32x32" href={icon} />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${siteUrl}${ogImage}`} />
            <meta property="og:url" content={canonicalUrl || siteUrl} />
            <meta property="og:type" content="website" />
            
            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
            
            {/* Canonical URL */}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
            
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Your Company Name",
                        "url": siteUrl,
                        "logo": `${siteUrl}/logo.png`,
                        "description": description,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Your Street Address",
                            "addressLocality": "Your City",
                            "addressRegion": "Your Region",
                            "postalCode": "Your Postal Code",
                            "addressCountry": "BD"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+880-Your-Phone",
                            "contactType": "customer service",
                            "areaServed": "BD",
                            "availableLanguage": ["English", "Bengali"]
                        }
                    })
                }}
            />
        </Head>
    );
};

export default SeoHead; 