import React from 'react';
import { companyInfo } from '../data/mock';
import { CheckCircle2, Zap, Shield, Users } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Agile Development',
    description: 'Fast-paced, iterative approach that delivers results quickly.'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous testing ensures reliable, bug-free solutions.'
  },
  {
    icon: Users,
    title: 'Dedicated Team',
    description: 'Expert professionals committed to your project success.'
  },
  {
    icon: CheckCircle2,
    title: 'On-Time Delivery',
    description: 'We meet deadlines without compromising on quality.'
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-[#121212] section-spacing relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00FFD1]/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-[#00FFD1] text-sm font-medium uppercase tracking-wider mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-white leading-tight mb-6">
              Why Choose <span className="text-[#00FFD1]">{companyInfo.name}</span>?
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              We are a passionate team of developers, designers, and strategists dedicated to building digital products that make a difference. With years of experience and a commitment to excellence, we transform complex challenges into elegant solutions.
            </p>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Our approach combines technical expertise with creative thinking, ensuring every project we deliver exceeds expectations and drives real business value.
            </p>
            
            <a href="#contact" className="btn-primary">
              Work With Us
            </a>
          </div>

          {/* Right - Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-black/50 border border-white/10 p-6 card-hover group"
              >
                <div className="w-12 h-12 bg-[#00FFD1]/10 flex items-center justify-center mb-4 group-hover:bg-[#00FFD1]/20 transition-colors duration-300">
                  <benefit.icon className="w-6 h-6 text-[#00FFD1]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
