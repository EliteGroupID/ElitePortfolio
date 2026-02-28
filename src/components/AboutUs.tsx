const AboutUs = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-neutral-900 py-24 px-6 lg:px-20 xl:px-32 font-popin"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm tracking-widest uppercase mb-2">
            Who We Are
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 dark:text-white mb-6">
            About Us
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className="text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-neutral-900 dark:text-white font-semibold mb-3">Our Mission</h3>
              <ul className="text-neutral-500 dark:text-neutral-400 text-sm space-y-2">
                <li>• Deliver high-quality software solutions</li>
                <li>• Empower businesses through technology</li>
                <li>• Foster long-term client relationships</li>
              </ul>
            </div>
            <div>
              <h3 className="text-neutral-900 dark:text-white font-semibold mb-3">Our Vision</h3>
              <ul className="text-neutral-500 dark:text-neutral-400 text-sm space-y-2">
                <li>• Be a global leader in tech innovation</li>
                <li>• Create impactful digital experiences</li>
                <li>• Shape the future of software</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-neutral-700 rounded-2xl h-80 lg:h-full min-h-[24rem] flex items-center justify-center">
          <span className="text-neutral-400 dark:text-neutral-500 text-sm">Image Placeholder</span>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
