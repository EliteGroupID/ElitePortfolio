const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Working with EliteTech DEV was a game-changer for our business. Their attention to detail and commitment to quality is truly unmatched.",
    name: "Robert Chen",
    company: "TechVentures Inc.",
  },
  {
    quote:
      "Excepteur sint occaecat cupidatat non proident. The team delivered our project on time and exceeded our expectations at every stage of development. Highly professional.",
    name: "Sarah Williams",
    company: "DigitalFirst Co.",
  },
  {
    quote:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Highly recommend EliteTech for any software project — they just get it done.",
    name: "David Park",
    company: "Innovate Solutions",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 dark:bg-neutral-900 py-24 px-6 lg:px-20 xl:px-32 font-popin">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-neutral-500 dark:text-neutral-400 text-sm tracking-widest uppercase mb-2">
            What Clients Say
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 dark:text-white">
            Testimonials
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl p-8 flex flex-col shadow-sm"
            >
              <div className="text-yellow-400 text-xl mb-4 tracking-wider">
                ★★★★★
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-neutral-900 dark:text-white font-semibold">{t.name}</p>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
