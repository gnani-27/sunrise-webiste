import React from 'react';
import { companyInfo, navLinks } from '../data/mock';
import { Sun, Mail, Phone, MapPin, ArrowUpRight, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121212] border-t border-white/10">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#00FFD1] flex items-center justify-center">
                <Sun className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-semibold text-white">
                {companyInfo.name}
              </span>
            </a>
            <p className="text-white/60 max-w-md mb-6 leading-relaxed">
              We transform ideas into powerful digital solutions. Expert web design, development, and mobile applications that drive business growth.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-[#00FFD1] hover:text-black transition-all duration-300 text-white/60"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-[#00FFD1] hover:text-black transition-all duration-300 text-white/60"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-[#00FFD1] hover:text-black transition-all duration-300 text-white/60"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#00FFD1] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-white/60 hover:text-[#00FFD1] transition-colors duration-300 flex items-start gap-3"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-white/60 hover:text-[#00FFD1] transition-colors duration-300 flex items-start gap-3"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <span className="text-white/60 flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  {companyInfo.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
