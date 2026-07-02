import { useEffect, useState } from "react";

const Hero = () => {
  const fullText = `I AM BENJAMIN ADAKOLE,\n A Full Stack Developer`;

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting) {
      if (displayText.length < fullText.length) {
        timer = setTimeout(
          () => setDisplayText(fullText.slice(0, displayText.length + 1)),
          120,
        );
      } else {
        timer = setTimeout(() => setIsDeleting(true), 1500);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(
          () => setDisplayText(fullText.slice(0, displayText.length - 1)),
          40,
        );
      } else {
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, fullText, isDeleting]);

  const [name = "", role = ""] = displayText.split("\\n");

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat pt-12"
      style={{ backgroundImage: "url('/images/bg2.webp')" }}
    >
      <div className="absolute inset-0 bg-black/85"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm md:text-base text-blue-300 font-medium tracking-widest uppercase mb-4">
          Hi, Welcome
        </p>

        <h1 className="text-2xl sm:text-6xl md:text-5xl font-extrabold text-white leading-tight">
          {name}
          {displayText.length > 0 && (
            <span className="animate-pulse text-blue-300">|</span>
          )}
        </h1>

        <h2 className="text-xl md:text-xl font-semibold text-blue-300 mt-2">
          {role}
        </h2>

        <p className="text-gray-300 text-base md:text-xl leading-8 max-w-3xl mx-auto mt-6">
          I specialize in developing modern, responsive web applications using
          React, Node.js, Express, and MongoDB. I create experiences that are
          fast, secure, and designed with users in mind.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
          <a
            href="#projects"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-lg"
          >
            View My Projects
          </a>

          <a
            href="/Ben_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-white/40 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            className="animate-bounce text-gray-200 hover:text-blue-300 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
