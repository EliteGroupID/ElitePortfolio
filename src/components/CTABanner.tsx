"use client";

const CTABanner = () => {
  const handleClick = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-r from-neutral-800 to-neutral-700 py-24 px-6 font-popin">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-4 tracking-wide">
          Ready to Build Something Great?
        </h2>
        <p className="text-neutral-300 text-lg mb-10">
          Let&apos;s turn your idea into reality.
        </p>
        <button
          onClick={handleClick}
          className="px-10 py-4 bg-white text-neutral-900 font-semibold rounded-full hover:bg-neutral-200 active:bg-neutral-300 transition-colors duration-200 tracking-wide"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default CTABanner;
