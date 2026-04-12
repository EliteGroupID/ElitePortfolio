import { Metadata } from "next";

export interface SEOConfig {
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
  canonical?: string;
}

const SITE_NAME = "ELITECH ID.";
const SITE_URL = "https://elitetech.dev";
const DEFAULT_OG_IMAGE = "/og-image.png";

export function generateMetadata(config: SEOConfig, locale: string = "en"): Metadata {
  const { title, description, image, noindex, canonical } = config;

  const fullTitle = `${title} | ${SITE_NAME}`;
  const fullImage = image ? `${SITE_URL}${image}` : `${SITE_URL}${DEFAULT_OG_IMAGE}`;
  const url = canonical ? `${SITE_URL}${canonical}` : `${SITE_URL}/${locale}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/en`,
        id: `${SITE_URL}/id`,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [fullImage],
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export interface OrganizationJsonLd {
  name: string;
  url: string;
  logo: string;
  description: string;
  contactPoint?: {
    email: string;
    contactType: string;
    areaServed: string;
  };
}

export function generateOrganizationJsonLd(data: OrganizationJsonLd) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.name,
    url: data.url,
    logo: data.logo,
    description: data.description,
    contactPoint: data.contactPoint,
  };
}

export interface WebPageJsonLd {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}

export function generateWebPageJsonLd(data: WebPageJsonLd) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: data.name,
    description: data.description,
    url: data.url,
    datePublished: data.datePublished,
    dateModified: data.dateModified,
  };
}

export interface BreadcrumbItem {
  name: string;
  item?: string;
}

export function generateBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.item && { item: item.item }),
    })),
  };
}

export interface ServiceJsonLd {
  name: string;
  description: string;
  provider: string;
  areaServed: string;
}

export function generateServiceJsonLd(data: ServiceJsonLd) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.description,
    provider: {
      "@type": "Organization",
      name: data.provider,
    },
    areaServed: {
      "@type": "Place",
      name: data.areaServed,
    },
  };
}

export interface ProductJsonLd {
  name: string;
  description: string;
  image: string;
  category: string;
  offers?: {
    price: string;
    priceCurrency: string;
    availability: string;
  };
}

export function generateProductJsonLd(data: ProductJsonLd) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: data.name,
    description: data.description,
    image: data.image,
    category: data.category,
    offers: data.offers,
  };
}

export interface CreativeWorkJsonLd {
  name: string;
  description: string;
  image: string;
  creator: string;
  dateCreated: string;
  keywords?: string[];
}

export function generateCreativeWorkJsonLd(data: CreativeWorkJsonLd) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: data.name,
    description: data.description,
    image: data.image,
    creator: {
      "@type": "Organization",
      name: data.creator,
    },
    dateCreated: data.dateCreated,
    keywords: data.keywords,
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
