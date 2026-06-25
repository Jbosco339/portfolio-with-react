function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-20 flex justify-between items-center">

          <h1 className="text-lg font-semibold tracking-wide">
            Benjamin Adakole
          </h1>

          <ul className="hidden md:flex gap-8 text-slate-400">
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;