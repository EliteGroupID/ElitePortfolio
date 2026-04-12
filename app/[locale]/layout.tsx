import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../src/i18n/routing";
import { Navbar } from "../../src/components/Navbar";
import { SplashScreen } from "../../src/components/SplashScreen";
import { GoogleAnalyticsScript } from "../../src/components/GoogleAnalytics";
import "../globals.css";

export const metadata: Metadata = {
  title: "EliteTech Dev",
  description: "High-Quality Software Development Services",
  icons: { icon: "/eg.png" },
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
      </body>
    </html>
  );
}
