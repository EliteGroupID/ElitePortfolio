"use client";

const EGIcon = "/assets/eg-icon.png";

const navLinks = [
  { label: "About", href: "about" },
  { label: "Services", href: "services" },
  { label: "Products", href: "products" },
  { label: "Team", href: "team" },
  { label: "Contact", href: "contact" },
];

const Navbar = () => {
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-md border-b border-neutral-700 font-popin">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={EGIcon} className="w-8" alt="EG Icon" />
          <span className="font-semibold tracking-wide text-white text-sm">
            EliteTech DEV
          </span>
        </div>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleClick(link.href)}
                className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm tracking-wide"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
