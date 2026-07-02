import { useEffect, useState } from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/2348012345678" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>

      {/* Scroll To Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        >
          <FaArrowUp className="text-white text-xl" />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;