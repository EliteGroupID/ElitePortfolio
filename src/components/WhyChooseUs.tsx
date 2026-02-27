const reasons = [
  {
    icon: "🏆",
    title: "Expert Team",
    description:
      "Our team consists of highly skilled professionals with years of industry experience delivering exceptional software solutions across diverse domains.",
  },
  {
    icon: "⏱️",
    title: "On-Time Delivery",
    description:
      "We pride ourselves on meeting deadlines without compromising quality, ensuring your project launches on schedule and within budget.",
  },
  {
    icon: "🛎️",
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to address any issues and keep your systems running smoothly at all times.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-neutral-800 py-24 px-6 lg:px-20 xl:px-32 font-popin">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-neutral-400 text-sm tracking-widest uppercase mb-2">
            Our Advantages
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-white">
            Why Choose Us
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-neutral-700 rounded-xl p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-200"
            >
              <span className="text-5xl mb-4">{r.icon}</span>
              <h3 className="text-white font-semibold text-xl mb-3">
                {r.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
