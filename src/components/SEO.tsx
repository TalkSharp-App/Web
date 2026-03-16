import { Helmet } from "react-helmet";
import logo from "@/assets/logo_w_bg.png"

type SEOProps = {
  title: string;
  description: string;
  image?: string;
  url?: string;
  structuredData?: any;
};

const siteUrl = "https://talksharp.co/";

const defaultImg = `https://talksharp.co/assets/tsbanner.png`

// Default SEO values
const defaultSEO = {
  siteName: "TalkSharp",
  siteUrl: siteUrl,
  defaultImage: defaultImg,
  defaultStructuredDataProvider: {
    "@type": "Organization",
    name: "TalkSharp",
    url: siteUrl
  }
};

function SEO({
  title,
  description,
  image,
  url, structuredData
}: SEOProps) {

    // Merge defaults
    const seo = {
        title,
        description,
        image: image || defaultSEO.defaultImage,
        url: url || defaultSEO.siteUrl,
        siteName: defaultSEO.siteName
    };

    // Merge structured data defaults
    const finalStructuredData = structuredData
        ? { ...structuredData, provider: { ...defaultSEO.defaultStructuredDataProvider, ...structuredData.provider } }
        : undefined;
    console.log(defaultImg, 'Imagx')
    return (
        <Helmet>
            {/* Title & Description */}
            <title>{seo.title} | {seo.siteName}</title>
            <meta name="description" content={seo.description} />

            {/* Open Graph */}
            <meta property="og:title" content={`${seo.title} | ${seo.siteName}`} />
            <meta property="og:description" content={seo.description} />
            {seo.image && <meta property="og:image" content={seo.image} />}
            {seo.url && <meta property="og:url" content={seo.url} />}
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`${seo.title} | ${seo.siteName}`} />
            <meta name="twitter:description" content={seo.description} />
            {seo.image && <meta name="twitter:image" content={seo.image} />}

            {/* Canonical */}
            {seo.url && <link rel="canonical" href={seo.url} />}

            {/* Structured Data */}
            {finalStructuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(finalStructuredData)}
                </script>
            )}
        </Helmet>
    );
}

export default SEO;