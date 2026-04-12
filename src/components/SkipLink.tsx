export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-white text-black px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
    >
      Skip to main content
    </a>
  );
}
