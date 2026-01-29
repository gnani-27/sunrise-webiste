import React, { useState } from 'react';
import { projects } from '../data/mock';
import { ExternalLink, ArrowRight } from 'lucide-react';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="bg-black section-spacing">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="text-[#00FFD1] text-sm font-medium uppercase tracking-wider mb-4 block">
              Our Portfolio
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-white leading-tight mb-6">
              Featured Work
            </h2>
            <p className="text-lg text-white/70">
              Explore our recent projects that showcase our expertise in delivering exceptional digital solutions.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-[#00FFD1] text-black'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden bg-[#121212] border border-white/10 card-hover"
            >
              {/* Project Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <span className="inline-block px-3 py-1 bg-[#00FFD1]/20 text-[#00FFD1] text-xs font-medium mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/60 mb-4 text-sm lg:text-base line-clamp-2">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#00FFD1] font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a href="#contact" className="btn-secondary inline-flex">
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
