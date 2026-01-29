import React from 'react';
import { services } from '../data/mock';
import { Palette, Code2, Smartphone, Layers, ArrowRight } from 'lucide-react';

const iconMap = {
  Palette: Palette,
  Code2: Code2,
  Smartphone: Smartphone,
  Layers: Layers,
};

const ServicesSection = () => {
  return (
    <section id="services" className="bg-black section-spacing relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00FFD1]/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#00FFD1] text-sm font-medium uppercase tracking-wider mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white leading-tight mb-6">
            Services That Drive <br />Digital Excellence
          </h2>
          <p className="text-lg text-white/70">
            From concept to deployment, we deliver end-to-end digital solutions that transform businesses and create lasting impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-[#121212] border border-white/10 p-8 lg:p-10 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[#00FFD1]/10 flex items-center justify-center mb-6 group-hover:bg-[#00FFD1]/20 transition-colors duration-300">
                  <IconComponent className="w-7 h-7 text-[#00FFD1]" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#00FFD1] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/60">
                      <span className="w-1.5 h-1.5 bg-[#00FFD1]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#00FFD1] font-medium hover:gap-4 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
