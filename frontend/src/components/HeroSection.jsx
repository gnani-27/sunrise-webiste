import React, { Suspense } from 'react';
import { companyInfo, stats } from '../data/mock';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen pt-20">
          {/* Left Content */}
          <div className="flex-1 py-16 lg:py-0">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 mb-8 animate-fade-in-up">
                <span className="w-2 h-2 bg-[#00FFD1] rounded-full animate-pulse" />
                <span className="text-white/80 text-sm">IT Software Consulting</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[66px] font-semibold text-white leading-[1.1] tracking-[-0.62px] mb-6 animate-fade-in-up delay-100">
                {companyInfo.tagline}
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-10 animate-fade-in-up delay-200">
                {companyInfo.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up delay-300">
                <a href="#contact" className="btn-primary">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#portfolio" className="btn-secondary">
                  View Our Work
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 animate-fade-in-up delay-400">
                {stats.map((stat) => (
                  <div key={stat.id} className="text-left">
                    <div className="text-3xl sm:text-4xl font-semibold text-[#00FFD1] brand-glow mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - 3D Spline */}
          <div className="flex-1 relative h-[500px] lg:h-[700px] w-full lg:w-auto">
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-[#00FFD1] border-t-transparent animate-spin" />
                </div>
              }
            >
              <div className="w-full h-full overflow-visible relative">
                <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
              </div>
            </Suspense>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <a href="#services" className="text-white/40 hover:text-white/80 transition-colors">
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
