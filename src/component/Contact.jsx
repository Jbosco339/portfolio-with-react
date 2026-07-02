import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("success");
        setLoading(false);
        form.current.reset();
      })
      .catch((error) => {
        console.error("EMAILJS ERROR:", error);
        console.error("STATUS:", error.status);
        console.error("TEXT:", error.text);

        setStatus("error");
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-[4px] font-semibold">
            CONTACT
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Let's Work Together
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            Have a project in mind, need a developer, or simply want to connect?
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-white mb-6">Get In Touch</h3>

            <p className="text-slate-400 leading-8 mb-10">
              I'm available for freelance projects, internships, collaborations,
              and full-time opportunities. Feel free to contact me using any of
              the details below.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-blue-500/20 p-3 rounded-xl">
                  <FaMapMarkerAlt className="text-blue-400 text-xl" />
                </div>

                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-slate-400">
                    Port Harcourt, Rivers State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-blue-500/20 p-3 rounded-xl">
                  <FaPhoneAlt className="text-blue-400 text-xl" />
                </div>

                <div>
                  <h4 className="text-white font-semibold">Phone</h4>

                  <a
                    href="tel:+2348000000000"
                    className="text-slate-400 hover:text-blue-400 transition"
                  >
                    +2348067030126
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-blue-500/20 p-3 rounded-xl">
                  <FaEnvelope className="text-blue-400 text-xl" />
                </div>

                <div>
                  <h4 className="text-white font-semibold">Email</h4>

                  <a
                    href="mailto:benjaminadakole20@gmail.com"
                    className="text-slate-400 hover:text-blue-400 transition"
                  >
                    benjaminadakole20@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2 text-slate-300">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 text-slate-300">
                Subject
              </label>

              <input
                type="text"
                name="title"
                required
                placeholder="Project Inquiry"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-slate-300">
                Message
              </label>

              <textarea
                name="message"
                rows="6"
                required
                placeholder="Tell me about your project..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed py-4 rounded-xl font-semibold transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-400 font-medium">
                ✓ Message sent successfully.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 font-medium">
                ✕ Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
