
import React from 'react';
import { Code, Brain, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Computer Science Engineering student at O.P. Jindal University, 
              driven by curiosity and a love for problem-solving through code. My journey in 
              technology has been fueled by the desire to create innovative solutions and 
              contribute to the ever-evolving digital landscape.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              With expertise spanning multiple programming languages and frameworks, I enjoy 
              building projects that bridge the gap between complex technical concepts and 
              user-friendly applications. From fraud detection systems to financial tracking 
              tools, I'm always exploring new ways to leverage technology for real-world impact.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors duration-300">
                <Code className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Full Stack</h3>
                <p className="text-sm text-gray-600">End-to-end development</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-cyan-50 hover:bg-cyan-100 transition-colors duration-300">
                <Brain className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Problem Solver</h3>
                <p className="text-sm text-gray-600">Analytical thinking</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-pink-50 hover:bg-pink-100 transition-colors duration-300">
                <Lightbulb className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Innovator</h3>
                <p className="text-sm text-gray-600">Creative solutions</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-2xl p-1">
              <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">RS</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Ritu Singh</h3>
                  <p className="text-gray-600">CSE Student & Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
