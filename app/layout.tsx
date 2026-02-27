import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
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
      <body>{children}</body>
    </html>
  );
}
