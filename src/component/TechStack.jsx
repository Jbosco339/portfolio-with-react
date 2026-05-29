export default function TechStack() {
  const core = [
    { name: "HTML", img: "/image/html-5 small.png" },
    { name: "CSS", img: "/image/css-3.png" },
    { name: "JavaScript", img: "/image/java-script.png" },
  ];

  const frameworks = [
    { name: "React", img: "/image/programing.png" },
    { name: "Bootstrap", img: "/image/bootstrap.png" },
    { name: "TailwindCss", img: "/image/tailwindLogo.png" },
  ];

  const tools = [
    { name: "Github", img: "/image/git red.png" },
    { name: "Netlify", img: "/image/netlify.png" },
    { name: "Vercel", img: "/image/vercel3.png" },
    { name: "Vs Code", img: "/image/vs code.png" },
  ];

  const renderGroup = (title, items) => (
    <div className="grid md:grid-cols-4 gap-6 items-center mb-10">
      
      {/* LEFT TITLE */}
      <h3 className="text-lg font-semibold text-gray-300">
        {title}
      </h3>

      {/* ITEMS */}
      <div className="col-span-3 flex flex-wrap gap-10">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <img
              src={item.img}
              alt={item.name}
              className="w-10 h-10 object-contain"
            />
            <p className="text-gray-400 text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="bg-[#0f172a] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ABOUT TEXT */}
        <p className="text-gray-400 leading-relaxed mb-16 max-w-3xl">
          Hello! I'm Benjamin, a motivated Frontend Developer transitioning into Full Stack development with a solid foundation in computer science. I have completed my frontend training and am currently taking backend courses to expand my skills. I have gained experience through internships and handled several projects, building efficient, user-friendly applications while growing through collaboration and new challenges daily.
        </p>

        {/* TITLE */}
        <h2 className="text-center text-3xl font-bold mb-16">
          Tech Stack
        </h2>

        {/* GROUPS */}
        {renderGroup("Core Technologies:", core)}
        {renderGroup("Frameworks & Libraries:", frameworks)}
        {renderGroup("Tools and Platforms:", tools)}
      </div>
    </section>
  );
}