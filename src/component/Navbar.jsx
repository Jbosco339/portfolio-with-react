import { Download } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 z-50 bg-black">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 text-white">
        
        {/* Logo */}
        <h2 className="font-bold text-lg">
          Benjamin Adakole
        </h2>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          <li><a href="#" className="hover:text-white">Home</a></li>
          <li><a href="#" className="hover:text-white">About</a></li>
          <li><a href="#" className="hover:text-white">Skills</a></li>
          <li><a href="#" className="hover:text-white">Projects</a></li>
          <li><a href="#" className="hover:text-white">Contacts</a></li>
        </ul>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-black px-4 py-2 rounded-md font-semibold"
          download
        >
          Resume <Download size={16} />
        </a>
      </nav>
    </header>
  );
}