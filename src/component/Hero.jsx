import useTypewriter from "../hooks/useTypewriter";

export default function Hero() {
  const text = useTypewriter([
    "I love turning ideas into interactive designs.",
    "I'm focused on growth,"
  ]);

  return (
    <section className="min-h-screen bg-[#0f172a] text-white flex items-center pt-24">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 px-6 items-start">
        
        {/* LEFT */}
        <div className="flex-1">
          <p className="text-gray-400 mb-2">Hi! my name is,</p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Benjamin
          </h1>

          {/* ✅ Stable Typewriter Text */}
          <p className="text-gray-400 text-lg w-full max-w-125 h-16 leading-relaxed overflow-hidden">
            {text}
            <span className="ml-1 animate-pulse">|</span>
          </p>

          {/* Floating Card */}
          <div className="mt-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 w-full max-w-md shadow-lg">
            
            <h3 className="text-center text-sm mb-4 text-gray-300">
              Current Projects
            </h3>

            {[
              { name: "Cherie Give Resultz Website", value: 80 },
              { name: "Trueminds Project (Phase 2)", value: 40 },
              { name: "Favsman Artistry Website", value: 85 },
              { name: "Deployment", value: 70 },
            ].map((item, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>{item.name}</span>
                  <span className="text-cyan-400">{item.value}%</span>
                </div>

                <div className="w-full h-1 bg-gray-700 rounded">
                  <div
                    className="h-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end shrink-0">
          <div className="w-[320px] h-80 md:w-105 md:h-105 rounded-full overflow-hidden border border-gray-700 shadow-lg">
            <img
              src="/image/newBen.png"
              alt="Benjamin"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}