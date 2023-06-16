import { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-50 p-2 rounded-full bg-black text-white transition-opacity duration-300 ${
        showButton ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <FaArrowCircleUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;
