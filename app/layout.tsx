import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "../src/components/ThemeProvider";

export const metadata: Metadata = {
  title: "EliteTech Dev",
  description: "High-Quality Software Development Services and Product for Your Business",
  icons: { icon: "/eg.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
