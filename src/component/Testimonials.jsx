import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: "/images/samson.jpg",
      text: "I worked with Benjamin on a project during our training. He communicates clearly and always delivers his part on time.",
      name: "Samson Apochi",
      role: "Frontend Developer (Classmate)"
    },
    {
      id: 2,
      image: "/images/profile2.jpg", // Add more images to your folder
      text: "A very dedicated developer who pays great attention to UI details and clean code. Highly recommended!",
      name: "Jane Doe",
      role: "Project Manager"
    },
    {
      id: 3,
      image: "/images/profile3.jpg",
      text: "Benjamin is a fast learner and a great team player. His problem-solving skills are impressive.",
      name: "John Smith",
      role: "Senior Engineer"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigation Logic
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, testimonials.length]);

  // Auto-slide effect (every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [nextSlide]);

  return (
    <section className="bg-[#0b1120] py-20 px-6 text-center overflow-hidden">
      <h2 className="text-[#38bdf8] text-4xl font-bold mb-16">Testimonials</h2>

      <div className="max-w-4xl mx-auto relative group">
        
        {/* Left Arrow */}
        <button 
          onClick={prevSlide}
          className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 z-10 p-2 text-[#38bdf8] hover:scale-125 transition-transform"
        >
          <ChevronLeft size={40} />
        </button>

        {/* Testimonial Card */}
        <div className="bg-[#1e293b]/50 border border-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl transition-all duration-500 ease-in-out">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full border-4 border-gray-700 overflow-hidden">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="text-gray-300 text-lg md:text-xl italic leading-relaxed mb-8 min-h-[100px]">
            "{testimonials[currentIndex].text}"
          </p>

          <h3 className="text-[#38bdf8] text-xl font-semibold">
            {testimonials[currentIndex].name}
          </h3>
          <p className="text-gray-500 text-sm mt-1">
            {testimonials[currentIndex].role}
          </p>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextSlide}
          className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 z-10 p-2 text-[#38bdf8] hover:scale-125 transition-transform"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-[#38bdf8] w-8' : 'bg-gray-600 w-3'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
