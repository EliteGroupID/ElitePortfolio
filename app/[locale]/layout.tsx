import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../src/i18n/routing";
import { Navbar } from "../../src/components/Navbar";
import { SplashScreen } from "../../src/components/SplashScreen";
import { GoogleAnalyticsScript } from "../../src/components/GoogleAnalytics";
import { JsonLd, generateOrganizationJsonLd } from "../../src/lib/seo";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "ELITECH ID. - Premium Software Development Services",
    template: "%s | ELITECH ID.",
  },
  description: "ELITECH ID is a premium digital product studio specializing in web development, UI/UX design, performance optimization, and IoT solutions. We transform ideas into exceptional digital experiences.",
  keywords: [
    "web development",
    "UI/UX design",
    "software development",
    "IoT solutions",
    "performance optimization",
    "system integration",
    "Indonesia software agency",
    "custom software",
    "digital product studio",
  ],
  authors: [{ name: "ELITECH ID" }],
  creator: "ELITECH ID",
  publisher: "ELITECH ID",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://elitetech.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    siteName: "ELITECH ID.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@elitetechdev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "id")) notFound();
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              const saved = localStorage.getItem("theme");
              const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
              if (saved === "dark" || (!saved && prefersDark)) {
                document.documentElement.classList.add("dark");
              } else {
                document.documentElement.classList.remove("dark");
              }
            })();`,
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <SplashScreen />
          <Navbar />
          {children}
        </NextIntlClientProvider>
        <GoogleAnalyticsScript />
        <JsonLd
          data={generateOrganizationJsonLd({
            name: "ELITECH ID.",
            url: "https://elitetech.dev",
            logo: "https://elitetech.dev/og-image.png",
            description: "Premium digital product studio specializing in web development, UI/UX design, and IoT solutions.",
            contactPoint: {
              email: "hello@elitetech.dev",
              contactType: "customer service",
              areaServed: "Indonesia",
            },
          })}
        />
      </body>
    </html>
  );
}
