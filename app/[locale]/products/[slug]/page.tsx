import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { productsList } from "../../../../src/constants";
import { routing } from "../../../../src/i18n/routing";
import { Link } from "../../../../src/i18n/navigation";
import Navbar from "../../../../src/components/Navbar";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    productsList.map((p) => ({ locale, slug: p.slug }))
  );
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const product = productsList.find((p) => p.slug === slug);
  if (!product) notFound();
  const t = await getTranslations("products");

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white font-popin">
      <Navbar />
      {/* Breadcrumb */}
      <div className="pt-16 border-b border-gray-200 dark:border-neutral-700 px-6 py-3 flex items-center gap-2 text-sm bg-white dark:bg-neutral-900">
        <Link href="/" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
          Home
        </Link>
        <span className="text-gray-400 dark:text-neutral-600">/</span>
        <Link href="/products" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
          {t("title")}
        </Link>
        <span className="text-gray-400 dark:text-neutral-600">/</span>
        <span className="text-neutral-900 dark:text-white font-medium">{product.name}</span>
      </div>

      {/* Hero */}
      <section className="py-20 px-6 text-center bg-gray-50 dark:bg-neutral-800 border-b border-gray-200 dark:border-neutral-700">
        <p className="text-neutral-500 dark:text-neutral-400 text-sm tracking-widest uppercase mb-2">Our Product</p>
        <h1 className="text-4xl lg:text-6xl font-semibold mb-4">{product.name}</h1>
        <p className="text-neutral-600 dark:text-neutral-300 text-lg max-w-2xl mx-auto">{product.shortDesc}</p>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        {/* Main Image */}
        <div className="rounded-xl overflow-hidden bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700">
          <img
            src={product.image}
            alt={product.name}
            className="w-full object-contain max-h-[480px] p-8"
          />
        </div>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-center">{t("keyFeatures")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-neutral-800 rounded-xl p-6 flex items-start gap-4 border border-gray-200 dark:border-neutral-700 hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="w-8 h-8 rounded-full bg-neutral-900/10 dark:bg-white/10 flex items-center justify-center shrink-0 text-sm font-bold">
                  {idx + 1}
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-6">{t("techStack")}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {product.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 px-4 py-2 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Screenshots */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-center">{t("screenshots")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.screenshots.map((src, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700"
              >
                <img
                  src={src}
                  alt={`${product.name} screenshot ${idx + 1}`}
                  className="w-full object-contain p-4 max-h-44"
                />
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gray-50 dark:bg-neutral-800 rounded-2xl py-14 px-6 border border-gray-200 dark:border-neutral-700">
          <h2 className="text-2xl font-semibold mb-3">{t("interested")} {product.name}?</h2>
          <p className="text-neutral-500 dark:text-neutral-400 mb-8 max-w-md mx-auto">
            {t("interestedDesc")}
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold px-8 py-3 rounded hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors duration-200"
          >
            {t("contactUs")}
          </Link>
        </section>
      </main>
    </div>
  );
}
