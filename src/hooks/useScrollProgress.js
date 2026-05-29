import { useEffect } from "react";

export default function useScrollProgress() {
  useEffect(() => {
    const bars = document.querySelectorAll("[data-progress]");

    const handleScroll = () => {
      bars.forEach((bar) => {
        const rect = bar.getBoundingClientRect();

        if (rect.top < window.innerHeight - 50) {
          bar.style.width = bar.dataset.progress + "%";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}