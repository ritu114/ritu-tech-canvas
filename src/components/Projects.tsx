
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'StellPay',
      description: 'A comprehensive payment solution with modern UI/UX and secure transaction processing.',
      tech: ['React', 'Node.js', 'MySQL', 'Payment APIs'],
      gradient: 'from-purple-500 to-pink-500',
      image: 'SP'
    },
    {
      title: 'Credit Card Fraud Detection',
      description: 'Machine learning model to detect fraudulent credit card transactions with high accuracy.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Data Analysis'],
      gradient: 'from-cyan-500 to-blue-500',
      image: 'FD'
    },
    {
      title: 'Calculator',
      description: 'Feature-rich calculator application with scientific functions and modern design.',
      tech: ['JavaScript', 'HTML', 'CSS', 'Responsive Design'],
      gradient: 'from-green-500 to-teal-500',
      image: 'CA'
    },
    {
      title: 'SpendTrack',
      description: 'Personal finance tracker to monitor expenses, set budgets, and analyze spending patterns.',
      tech: ['React', 'Chart.js', 'Local Storage', 'PWA'],
      gradient: 'from-orange-500 to-red-500',
      image: 'ST'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical skills and creative problem-solving
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={project.title} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 right-4 w-32 h-32 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full"></div>
                </div>
                <span className="text-6xl font-bold text-white relative z-10">{project.image}</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-medium hover:scale-105 transition-transform duration-300">
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
