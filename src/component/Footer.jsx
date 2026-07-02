import {
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-500 transition duration-300 text-2xl"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-600 transition duration-300 text-2xl"
          >
            <FaFacebook />
          </a>

          <a
            href="https://wa.me/2348012345678"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-green-500 transition duration-300 text-2xl"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition duration-300 text-2xl"
          >
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>

        {/* Powered By */}
        <div className="text-center text-slate-500 text-sm mt-2">
          Powered by{" "}
          <span className="font-semibold text-cyan-400">
            Amatech Global
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;