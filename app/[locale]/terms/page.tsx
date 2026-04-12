"use client";

import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "../../../src/i18n/navigation";
import { JsonLd, generateWebPageJsonLd, generateBreadcrumbJsonLd } from "../../../src/lib/seo";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using the ELITECH ID website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
      "These terms apply to all visitors, users, and clients who access or use our services. We reserve the right to update these terms at any time, and your continued use constitutes acceptance of any changes.",
    ],
  },
  {
    title: "2. Services",
    content: [
      "ELITECH ID provides web development, UI/UX design, performance optimization, and system integration services. The specific scope, deliverables, timeline, and pricing for each project are defined in a separate written agreement or proposal.",
      "We reserve the right to refuse service to anyone for any reason at any time, and to modify or discontinue our services without notice.",
    ],
  },
  {
    title: "3. Client Responsibilities",
    content: [
      "As a client, you are responsible for providing accurate and complete information required for the project, providing timely feedback and approvals to keep the project on schedule, ensuring you have the rights to any materials, content, or assets you provide to us, and making payments on time as agreed in the project contract.",
      "Delays caused by the client's failure to meet these responsibilities may result in project timeline adjustments or additional fees.",
    ],
  },
  {
    title: "4. Intellectual Property",
    content: [
      "Upon full payment of all fees, the client receives ownership of the final deliverables created specifically for their project. ELITECH ID retains ownership of all proprietary tools, frameworks, methodologies, and pre-existing code used in the development process.",
      "We reserve the right to display completed work in our portfolio and marketing materials unless explicitly agreed otherwise in writing. Third-party assets (fonts, stock images, plugins) are subject to their respective licenses.",
    ],
  },
  {
    title: "5. Payment Terms",
    content: [
      "Payment terms are specified in each individual project agreement. Typically, projects require a deposit before work begins, with remaining payments tied to project milestones or delivery.",
      "Late payments may result in work stoppage and late fees. We reserve the right to withhold final deliverables until all outstanding payments are received.",
    ],
  },
  {
    title: "6. Confidentiality",
    content: [
      "Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the engagement. This includes business strategies, technical specifications, financial information, and any other information marked as confidential.",
      "This obligation of confidentiality survives the termination of any agreement between the parties.",
    ],
  },
  {
    title: "7. Limitation of Liability",
    content: [
      "ELITECH ID's total liability for any claim arising from our services shall not exceed the total fees paid by the client for the specific project giving rise to the claim.",
      "We are not liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, even if advised of the possibility of such damages.",
    ],
  },
  {
    title: "8. Warranties and Disclaimers",
    content: [
      "We warrant that our services will be performed in a professional and workmanlike manner consistent with industry standards. We provide a 30-day bug fix warranty on all delivered work for issues directly attributable to our code.",
      "Beyond this, our services are provided 'as is' without warranty of any kind. We do not guarantee specific business results, search engine rankings, or third-party service performance.",
    ],
  },
  {
    title: "9. Termination",
    content: [
      "Either party may terminate a project engagement with written notice. Upon termination, the client is responsible for payment of all work completed up to the termination date. Deposits are non-refundable unless otherwise specified in the project agreement.",
      "Upon termination, we will provide all completed work and deliverables to the client within 14 business days of receiving final payment.",
    ],
  },
  {
    title: "10. Governing Law",
    content: [
      "These Terms of Service are governed by and construed in accordance with the laws of Indonesia. Any disputes arising from these terms or our services shall be resolved through good-faith negotiation.",
      "If negotiation fails, disputes will be submitted to binding arbitration in accordance with the applicable arbitration rules. Each party waives any right to a jury trial.",
    ],
  },
  {
    title: "11. Contact",
    content: [
      "For questions about these Terms of Service, please contact us at hello@elitetech.dev. We aim to respond to all legal inquiries within 5 business days.",
    ],
  },
];

export function TermsPageMetadata() {
  return (
    <>
      <JsonLd
        data={generateWebPageJsonLd({
          name: "Terms of Service",
          description: "ELITECH ID Terms of Service. Read our terms and conditions for web development, UI/UX design, and digital services.",
          url: "https://elitetech.dev/terms",
        })}
      />
      <JsonLd
        data={generateBreadcrumbJsonLd([
          { name: "Home", item: "https://elitetech.dev" },
          { name: "Terms of Service", item: "https://elitetech.dev/terms" },
        ])}
      />
    </>
  );
}

export default function TermsPage() {
  return (
    <>
      <TermsPageMetadata />
      <main className="bg-[#050505] text-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-20 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[20vw] font-black tracking-tighter text-white/[0.02] leading-none">
            TERMS
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
              Terms of
              <br />
              <span className="text-neutral-500 italic font-light">Service.</span>
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
            These Terms of Service govern your use of the ELITECH ID website and any services we
            provide. Please read these terms carefully before engaging with us. By using our
            services, you acknowledge that you have read, understood, and agreed to these terms.
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
            Questions about these terms?{" "}
            <a
              href="mailto:hello@elitetech.dev"
              className="text-white hover:text-neutral-300 transition-colors border-b border-white/20 pb-0.5"
            >
              hello@elitetech.dev
            </a>
          </p>
          <div className="flex items-center space-x-6 text-sm text-neutral-600">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white">Terms of Service</Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
