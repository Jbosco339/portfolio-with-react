import { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Cherie",
    role: "Founder, Apex Workforce",
    message:
      "Benjamin delivered an outstanding website that exceeded our expectations. His attention to detail, technical expertise, and professionalism made the entire process seamless.",
  },
  {
    name: "Esther Johnson",
    role: "Director, Edee Diamond Academy",
    message:
      "Working with Benjamin was a fantastic experience. He transformed our ideas into a modern, responsive platform that has greatly improved our online presence.",
  },
  {
    name: "Eneh Ifeanyichukwu",
    role: "CEO, Ramto Global",
    message:
      "Reliable, skilled, and committed to excellence. The project was delivered on schedule, and the quality of work was exceptional.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Clients Say
          </h2>

          <p className="text-slate-400 mt-3">
            Feedback from clients I've had the privilege of working with.
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center transition-all duration-500">
            <FaQuoteLeft className="text-blue-500 text-4xl mx-auto mb-6" />

            <p className="text-slate-300 text-lg leading-8 italic max-w-3xl mx-auto">
              "{testimonials[current].message}"
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold">
                {testimonials[current].name}
              </h3>

              <p className="text-slate-400 mt-1">
                {testimonials[current].role}
              </p>
            </div>
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 -left-5 w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-500 transition flex items-center justify-center"
          >
            <FaChevronLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 -right-5 w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-500 transition flex items-center justify-center"
          >
            <FaChevronRight />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition ${
                  current === index
                    ? "bg-blue-500"
                    : "bg-slate-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;