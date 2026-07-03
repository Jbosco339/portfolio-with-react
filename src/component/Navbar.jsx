import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-20 flex justify-between items-center">
            <a href="#" className="text-lg md:text-xl font-semibold tracking-wide text-white">
              Benjamin Adakole
            </a>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8 text-slate-300">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-blue-400 transition">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-blue-400 transition">
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  className="hover:text-blue-400 transition"
                >
                  Testimonials
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="/Ben_Resume.pdf"
                  className="border border-slate-700 px-5 py-2 rounded-lg hover:border-blue-400 transition"
                >
                  Resume
                </a>
              </li>
            </ul>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-2xl text-white"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-slate-950 border-r border-slate-800 z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-slate-800">
          <h2 className="font-bold text-xl">Menu</h2>

          <button
            onClick={closeMenu}
            className="text-2xl text-white"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="flex flex-col p-6 gap-6 text-lg">
          <a
            href="#"
            onClick={closeMenu}
            className="hover:text-blue-400 transition"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={closeMenu}
            className="hover:text-blue-400 transition"
          >
            About
          </a>

          <a
            href="#skills"
            onClick={closeMenu}
            className="hover:text-blue-400 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
            className="hover:text-blue-400 transition"
          >
            Projects
          </a>

          <a
            href="#testimonials"
            onClick={closeMenu}
            className="hover:text-blue-400 transition"
          >
            Testimonials
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="hover:text-blue-400 transition"
          >
            Contact
          </a>

          <a
            href="/Ben_Resume.pdf"
            onClick={closeMenu}
            className="mt-4 inline-block text-center border border-slate-700 rounded-lg py-3 hover:border-blue-400 transition"
          >
            Download Resume
          </a>

          
        </nav>
      </aside>
    </>
  );
};

export default Navbar;