import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../src/i18n/routing";
import { Navbar } from "../../src/components/Navbar";
import { SplashScreen } from "../../src/components/SplashScreen";
import { GoogleAnalyticsScript } from "../../src/components/GoogleAnalytics";
import { WebVitals } from "../../src/components/WebVitals";
import { SkipLink } from "../../src/components/SkipLink";
import { JsonLd, generateOrganizationJsonLd } from "../../src/lib/seo";
import "../globals.css";

// Optimized font loading with next/font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});

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
  authors: [{ name: "ELITECH ID", url: "https://elitetech.dev" }],
  creator: "ELITECH ID",
  publisher: "ELITECH ID",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://elitetech.dev"),
  icons: {
    icon: [
      { url: "/assets/eg-icon.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/eg-icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/assets/eg-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "ELITECH ID.",
    statusBarStyle: "default",
  },
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
    <html
      lang={locale}
      suppressHydrationWarning
      className={poppins.variable}
    >
      <head>
        {/* Theme script for preventing flash of unstyled content */}
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
      <body className={poppins.className}>
        <SkipLink />
        <NextIntlClientProvider messages={messages}>
          <SplashScreen />
          <Navbar />
          <div id="main-content">{children}</div>
        </NextIntlClientProvider>
        <GoogleAnalyticsScript />
        <WebVitals />
        <JsonLd
          data={generateOrganizationJsonLd({
            name: "ELITECH ID.",
            url: "https://elitetech.dev",
            logo: "https://elitetech.dev/assets/eg-icon.png",
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
