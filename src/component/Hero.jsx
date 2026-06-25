function Hero() {
  return (
    <section className="min-h-screen flex items-center">

      <div className="max-w-6xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-blue-400 font-medium mb-4">
              Full Stack Developer
            </p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Building clean and scalable web applications.
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
                className="border border-slate-700 px-6 py-3 rounded-xl hover:border-blue-400"
              >
                Resume
              </a>

            </div>

          </div>

          <div className="flex justify-center">

            <img
              src="/images/newBen.png"
              alt="Profile"
              className="w-[380px] h-[480px] object-cover rounded-3xl border border-slate-800"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;