function About() {
  return (
    <section id="about" className="py-18 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/images/newBen.png"
              alt="Benjamin Adakole"
              className="w-80 md:w-96 rounded-3xl  border-slate-700 shadow-2xl object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-blue-400 font-semibold uppercase tracking-widest mb-4 block">
              About Me
            </span>

            <p className="text-slate-300 text-lg leading-8 mb-6">
              I'm <span className="font-semibold text-white">Benjamin Adakole</span>,
              a Full Stack Developer dedicated to building fast, secure, and
              scalable web applications. I enjoy turning ideas into polished
              digital products that provide exceptional user experiences and
              solve real-world problems.
            </p>

            <p className="text-slate-400 text-lg leading-8">
              My expertise spans modern frontend technologies like React and
              Tailwind CSS, alongside powerful backend technologies including
              Node.js, Express, MongoDB, and RESTful APIs. I'm passionate about
              writing clean, maintainable code and continuously learning new
              technologies that help me deliver better solutions.
            </p>

       
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;