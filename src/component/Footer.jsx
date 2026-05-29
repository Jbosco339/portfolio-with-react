import  { useState } from 'react';

const Footer = () => {
  // 1. Create state to hold form data
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  // 2. Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.placeholder.toLowerCase()]: e.target.value });
  };

  // 3. The WhatsApp Submission Function
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your actual phone number (include country code, no +)
    const phoneNumber = "2348100000000"; 
    
    // Format the message for the URL
    const text = `Hi, I am ${formData.name}. %0A%0A${formData.message}`;
    
    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me{phoneNumber}?text=${encodeURIComponent(text)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <footer className="bg-[#0f172a] text-white py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Section: Contact Form */}
        <div>
          <h2 className="text-gray-400 text-lg font-medium mb-2">
            Let's make something amazing together
          </h2>
          <h1 className="text-3xl font-bold mb-8">
            Start by <span className="underline decoration-white underline-offset-8">saying hi</span>
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              required
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-3 bg-white text-gray-800 rounded-md focus:outline-none"
            />
            <textarea
              required
              placeholder="Enter your message"
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full p-3 bg-white text-gray-800 rounded-md focus:outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="px-8 py-2 bg-[#00c2a8] hover:bg-[#00a892] text-white font-semibold rounded-md transition-colors active:scale-95"
            >
              Submit to WhatsApp
            </button>
          </form>
        </div>

        {/* ... Right Section (Contact Info) remains the same ... */}
        <div className="flex flex-col justify-start">
          <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
          <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
            I'm currently open to new opportunities and collaborations. Whether you have a 
            project in mind, a question, or just want to say hi, my inbox is always open. 
            I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="text-gray-500 font-semibold mb-1">Informations</h4>
              <p className="text-gray-300 italic">
                Elioparanwo, By Ada-George Port-Harcourt Rivers State.
              </p>
            </div>
            <p className="text-gray-300">benjaminadakole20@gmail.com</p>
          </div>
        </div>
      </div>

      {/* ... Bottom Socials Bar remains the same ... */}
    </footer>
  );
};

export default Footer;
