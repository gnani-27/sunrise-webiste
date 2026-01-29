import React, { useState } from 'react';
import { companyInfo } from '../data/mock';
import { Send, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (mock)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Message sent successfully! We\'ll be in touch soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="bg-black section-spacing relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#00FFD1]/5 blur-[120px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div>
            <span className="text-[#00FFD1] text-sm font-medium uppercase tracking-wider mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-white leading-tight mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h4 className="text-sm text-white/40 uppercase tracking-wider mb-2">Email</h4>
                <a href={`mailto:${companyInfo.email}`} className="text-xl text-white hover:text-[#00FFD1] transition-colors duration-300">
                  {companyInfo.email}
                </a>
              </div>
              <div>
                <h4 className="text-sm text-white/40 uppercase tracking-wider mb-2">Phone</h4>
                <a href={`tel:${companyInfo.phone}`} className="text-xl text-white hover:text-[#00FFD1] transition-colors duration-300">
                  {companyInfo.phone}
                </a>
              </div>
              <div>
                <h4 className="text-sm text-white/40 uppercase tracking-wider mb-2">Address</h4>
                <p className="text-xl text-white">
                  {companyInfo.address}
                </p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-[#121212] border border-white/10 p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/60 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-[#00FFD1] transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-white/60 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-[#00FFD1] transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm text-white/60 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-[#00FFD1] transition-colors duration-300"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-white/60 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-black border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-[#00FFD1] transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-black border-t-transparent animate-spin rounded-full" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="w-5 h-5" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
