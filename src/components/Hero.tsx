
import React from 'react';
import { Download, Linkedin, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 p-1 animate-scale-in">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                <span className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  RS
                </span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ritu Singh
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            B.Tech CSE Student
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            O.P. Jindal University • Passionate Developer • Tech Enthusiast
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="flex items-center gap-2">
                <Download size={20} />
                <span>Download Resume</span>
              </div>
            </button>
            
            <a 
              href="https://www.linkedin.com/in/ritu-singh-11r10s04" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/20 border border-white/20"
            >
              <div className="flex items-center gap-2">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
