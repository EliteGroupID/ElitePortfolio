"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { productsList } from "../constants";

const OurProductSection = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating || index === current) return;
      setAnimating(true);
      setCurrent(index);
      setTimeout(() => setAnimating(false), 400);
    },
    [animating, current]
  );

  const prev = () => goTo((current - 1 + productsList.length) % productsList.length);
  const next = useCallback(
    () => goTo((current + 1) % productsList.length),
    [current, goTo]
  );

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const product = productsList[current];

  return (
    <section id="products" className="w-full bg-neutral-800 font-popin py-16 px-4 md:px-10 lg:px-24">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-neutral-400 text-sm tracking-widest uppercase mb-1">Portfolio</p>
        <h2 className="text-2xl lg:text-3xl font-semibold">Software Products</h2>
        <p className="text-neutral-400 mt-2">Elevate Your Business Growth with Our Exceptional Products!</p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-5xl mx-auto">
        {/* Slide */}
        <div
          key={current}
          className="flex flex-col-reverse xl:flex-row items-center gap-10 transition-opacity duration-400"
          style={{ opacity: animating ? 0 : 1, transition: "opacity 0.4s ease" }}
        >
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <div className="bg-neutral-700/50 rounded-2xl p-6 w-full max-w-md border border-neutral-600">
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-contain max-h-72"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center xl:text-left">
            <span className="text-xs text-neutral-400 uppercase tracking-widest">
              Product {current + 1} of {productsList.length}
            </span>
            <h3 className="text-3xl font-semibold mt-2 mb-4">{product.name}</h3>
            <p className="text-neutral-300 mb-4">{product.shortDesc}</p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 justify-center xl:justify-start mb-8">
              {product.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href={`/products/${product.slug}`}
              className="inline-block bg-white text-neutral-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors duration-200"
            >
              View Details →
            </Link>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-10 bg-neutral-700 hover:bg-neutral-600 border border-neutral-600 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 text-white"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-10 bg-neutral-700 hover:bg-neutral-600 border border-neutral-600 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 text-white"
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-10">
        {productsList.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`rounded-full transition-all duration-300 ${
              idx === current
                ? "w-8 h-2 bg-white"
                : "w-2 h-2 bg-neutral-600 hover:bg-neutral-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default OurProductSection;
