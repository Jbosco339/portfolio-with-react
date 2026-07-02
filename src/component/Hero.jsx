import { useEffect, useState } from "react";

const Hero = () => {
  const fullText = `I AM BENJAMIN ADAKOLE
A Full Stack Developer`;

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting) {
      if (displayText.length < fullText.length) {
        timer = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  const [name = "", role = ""] = displayText.split("\n");

  return (
    <section className="min-h-screen flex items-center pt-30 lg:pt-0">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-3xl">HI,</h1>

            <h1 className="text-4xl md:text-6xl font-bold min-h-[72px]">
              {name}
              {displayText.length > 0 && (
                <span className="animate-pulse text-blue-500">|</span>
              )}
            </h1>

            <p className="text-blue-400 font-medium text-xl mt-4 h-8">
              {role}
            </p>

            <h1 className="text-2xl md:text-4xl font-bold leading-tight mt-6">
              I Build clean and scalable web applications.
            </h1>

            <p className="text-slate-400 mt-8 text-lg max-w-xl">
              I specialize in React, Node.js, Express and MongoDB,
              creating modern user experiences and reliable backend systems.
            </p>

            <div className="flex gap-4 mt-10">
              <a
                href="#projects"
                className="bg-blue-500 hover:bg-blue-400 px-6 py-3 rounded-xl font-medium transition"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                className="border border-slate-700 px-6 py-3 rounded-xl hover:border-blue-400 transition"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/newBen.png"
              alt="Profile"
              className="w-95 h-100 object-cover border border-slate-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;