import Link from "next/link";
import { productsList } from "../../src/constants";

const EGIcon = "/assets/eg-icon.png";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white font-popin">
      {/* Header */}
      <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-gray-200 dark:border-neutral-700 px-6 py-4 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src={EGIcon} className="w-8" alt="EG Icon" />
          <span className="font-semibold tracking-wide text-sm">EliteTech DEV</span>
        </Link>
        <span className="text-gray-400 dark:text-neutral-600 mx-1">/</span>
        <span className="text-neutral-500 dark:text-neutral-400 text-sm">Products</span>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-neutral-500 dark:text-neutral-400 text-sm tracking-widest uppercase mb-2">What We Build</p>
          <h1 className="text-4xl lg:text-5xl font-semibold">Our Products</h1>
          <p className="mt-4 text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">
            Explore our flagship software products designed to solve real business challenges.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {productsList.map((product) => (
            <div
              key={product.slug}
              className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-200 shadow-sm dark:shadow-lg"
            >
              <div className="h-56 bg-gray-100 dark:bg-neutral-700 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4">{product.shortDesc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-block bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold text-sm px-5 py-2 rounded hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/#contact"
            className="inline-block border border-gray-300 dark:border-neutral-400 text-neutral-600 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-white hover:text-neutral-900 dark:hover:text-white px-8 py-3 rounded transition-colors duration-200"
          >
            Have a product idea? Contact Us
          </Link>
        </div>
      </main>
    </div>
  );
}
