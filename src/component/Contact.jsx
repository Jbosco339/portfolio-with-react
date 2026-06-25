import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
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
    <section id="contact" className="py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-blue-400 font-medium mb-2">
            CONTACT
          </p>

          <h2 className="text-4xl font-bold">
            Let's Work Together
          </h2>

          <p className="text-slate-400 mt-4">
            Have a project in mind or an opportunity to discuss?
            Send me a message.
          </p>
        </div>

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
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-400"
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
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-400"
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
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-400"
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
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-400 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-400 disabled:opacity-60 disabled:cursor-not-allowed px-8 py-4 rounded-xl font-medium transition"
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
    </section>
  );
}

export default Contact;