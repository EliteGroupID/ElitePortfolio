import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesList, devIconURL } from "../../../src/constants";

const EGIcon = "/assets/eg-icon.png";

export function generateStaticParams() {
  return servicesList.map((s) => ({ slug: s.slug }));
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = servicesList.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <div className="min-h-screen bg-neutral-900 text-white font-popin">
      {/* Header */}
      <div className="bg-neutral-900/80 backdrop-blur-md border-b border-neutral-700 px-6 py-4 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src={EGIcon} className="w-8" alt="EG Icon" />
          <span className="font-semibold tracking-wide text-sm">EliteTech DEV</span>
        </Link>
        <span className="text-neutral-600 mx-1">/</span>
        <Link href="/#services" className="text-neutral-400 text-sm hover:text-white transition-colors">
          Services
        </Link>
        <span className="text-neutral-600 mx-1">/</span>
        <span className="text-neutral-400 text-sm">{service.title}</span>
      </div>

      {/* Hero */}
      <section className="py-20 px-6 text-center bg-neutral-800 border-b border-neutral-700">
        <div className="flex justify-center mb-6">
          <img
            src={`${devIconURL}${service.icon}`}
            alt={service.title}
            className="w-20 h-20 object-contain"
          />
        </div>
        <p className="text-neutral-400 text-sm tracking-widest uppercase mb-2">Our Service</p>
        <h1 className="text-4xl lg:text-6xl font-semibold mb-4">{service.title}</h1>
        <p className="text-neutral-300 text-lg max-w-2xl mx-auto">{service.description}</p>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        {/* What We Offer */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-center">What We Offer</h2>
          <ul className="space-y-4 max-w-2xl mx-auto">
            {service.whatWeOffer.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-4 bg-neutral-800 rounded-xl p-5 border border-neutral-700"
              >
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-neutral-300">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-neutral-700 text-neutral-200 px-4 py-2 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-center">Why Choose Us for {service.title}</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {service.whyUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-neutral-800 rounded-xl p-6 border border-neutral-700 text-center hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 text-xl">
                  {idx === 0 ? "🏆" : idx === 1 ? "⚡" : "🛡️"}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-neutral-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-neutral-800 rounded-2xl py-14 px-6 border border-neutral-700">
          <h2 className="text-2xl font-semibold mb-3">Ready to Start a Project?</h2>
          <p className="text-neutral-400 mb-8 max-w-md mx-auto">
            Let&apos;s talk about your goals and build something great together.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-white text-neutral-900 font-semibold px-8 py-3 rounded hover:bg-neutral-200 transition-colors duration-200"
          >
            Start a Project
          </Link>
        </section>
      </main>
    </div>
  );
}
