import React, { useState } from 'react';
import { testimonials } from '../data/mock';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-black section-spacing relative">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00FFD1]/5 blur-[100px] -translate-y-1/2 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00FFD1] text-sm font-medium uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white leading-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#121212] border border-white/10 p-8 lg:p-12">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-20">
              <Quote className="w-16 h-16 text-[#00FFD1]" />
            </div>

            {/* Content */}
            <div className="min-h-[200px] flex flex-col justify-center">
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-8 italic">
                "{testimonials[activeIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#00FFD1] flex items-center justify-center text-black font-semibold text-lg">
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-white/60">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/10">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-[#00FFD1] w-8'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
