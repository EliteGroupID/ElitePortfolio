"use client";

import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "../../../src/i18n/navigation";
import { JsonLd, generateWebPageJsonLd, generateBreadcrumbJsonLd } from "../../../src/lib/seo";

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us via email. This may include your name, email address, company name, and the content of your messages.",
      "We also automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed. This is collected through standard server logs and analytics tools.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "We use the information we collect to respond to your inquiries and provide the services you request, send you project updates, proposals, and relevant communications, improve our website and services based on usage patterns, and comply with legal obligations.",
      "We do not sell, rent, or share your personal information with third parties for their own marketing purposes.",
    ],
  },
  {
    title: "3. Cookies and Tracking Technologies",
    content: [
      "Our website uses cookies and similar tracking technologies to enhance your browsing experience. We use essential cookies necessary for the website to function, analytics cookies to understand how visitors interact with our site, and preference cookies to remember your settings.",
      "You can control cookie settings through your browser preferences. Disabling certain cookies may affect the functionality of our website.",
    ],
  },
  {
    title: "4. Data Security",
    content: [
      "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. This includes encrypted data transmission (HTTPS), secure server infrastructure, and restricted access to personal data.",
      "However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.",
    ],
  },
  {
    title: "5. Data Retention",
    content: [
      "We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including satisfying any legal, accounting, or reporting requirements.",
      "When your data is no longer needed, we securely delete or anonymize it in accordance with applicable data protection laws.",
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      "Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data, the right to object to or restrict processing, and the right to data portability.",
      "To exercise any of these rights, please contact us at hello@elitetech.dev. We will respond to your request within 30 days.",
    ],
  },
  {
    title: "7. Third-Party Services",
    content: [
      "Our website may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties and encourage you to review their privacy policies.",
      "We may use third-party analytics providers (such as Google Analytics) to help understand website usage. These providers may collect information about your use of our site.",
    ],
  },
  {
    title: "8. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of significant changes by updating the 'Last Updated' date at the top of this page.",
      "Your continued use of our website after any changes constitutes your acceptance of the updated Privacy Policy.",
    ],
  },
  {
    title: "9. Contact Us",
    content: [
      "If you have any questions about this Privacy Policy or our data practices, please contact us at hello@elitetech.dev. We take privacy seriously and will respond to all inquiries promptly.",
    ],
  },
];

export function PrivacyPageMetadata() {
  return (
    <>
      <JsonLd
        data={generateWebPageJsonLd({
          name: "Privacy Policy",
          description: "ELITECH ID Privacy Policy. Learn how we collect, use, and protect your personal information. We are committed to transparency and data security.",
          url: "https://elitetech.dev/privacy",
        })}
      />
      <JsonLd
        data={generateBreadcrumbJsonLd([
          { name: "Home", item: "https://elitetech.dev" },
          { name: "Privacy Policy", item: "https://elitetech.dev/privacy" },
        ])}
      />
    </>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <PrivacyPageMetadata />
      <main className="bg-[#050505] text-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-20 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[20vw] font-black tracking-tighter text-white/[0.02] leading-none">
            PRIVACY
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/"
            className="group inline-flex items-center space-x-2 text-sm text-neutral-500 hover:text-white transition-colors duration-300 mb-12"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="uppercase tracking-widest">Back to Home</span>
          </Link>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-widest text-neutral-500 mb-6 font-medium"
          >
            Legal
          </motion.p>

          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]"
            >
              Privacy
              <br />
              <span className="text-neutral-500 italic font-light">Policy.</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-neutral-500 font-light"
          >
            Last updated: January 1, 2025
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-neutral-300 font-light leading-relaxed"
          >
            At ELITECH ID, we are committed to protecting your privacy and handling your personal
            information with transparency and care. This Privacy Policy explains how we collect,
            use, and protect your information when you visit our website or engage with our services.
          </motion.p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="space-y-16">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
              >
                <h2 className="text-xl font-semibold tracking-tight mb-6 text-white">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-neutral-400 font-light leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom */}
      <section className="border-t border-white/5 py-16">
        <div className="container mx-auto px-6 max-w-3xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-neutral-500 font-light text-sm">
            Questions about this policy?{" "}
            <a
              href="mailto:hello@elitetech.dev"
              className="text-white hover:text-neutral-300 transition-colors border-b border-white/20 pb-0.5"
            >
              hello@elitetech.dev
            </a>
          </p>
          <div className="flex items-center space-x-6 text-sm text-neutral-600">
            <Link href="/privacy" className="text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
