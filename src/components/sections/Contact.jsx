import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { RevealOnScroll } from './RevealOnScroll';

export const Contact = () => {
        const [formData, setFormData] = useState({
            name: "",
            email: "",
            message: "",
            });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
        alert('Message Sent!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => 
        alert("Oops! something went wrong. Please try again."));
      };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>
      <div className="px-4 max-w-xl w-full">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Get In Touch
        </h2>
         <p className="max-w-xl mx-auto mb-8 text-lg">
        Have a question, collaboration idea, or just want to say hi? I’d love to hear from you!
        Whether it's a freelance opportunity or a full-time role — my inbox is always open.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white"
            placeholder="Name..."
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white"
            placeholder="example@gmail.com"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            name="message"
            required
            value={formData.message}
            rows={5}
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white"
            placeholder="Your Message..."
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Send Message
          </button>
        </form>
      </div>
      </RevealOnScroll>
    </section>
  );
};
