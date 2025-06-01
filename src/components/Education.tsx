
import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Education & <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mr-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Bachelor of Technology</h3>
                <p className="text-lg text-purple-600 font-semibold">Computer Science & Engineering</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Institution</h4>
                <p className="text-gray-600">O.P. Jindal University</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Duration</h4>
                <p className="text-gray-600 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  2022 - 2026 (Expected)
                </p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-cyan-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Key Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {['Data Structures', 'Algorithms', 'Database Systems', 'Web Development', 'Machine Learning', 'Software Engineering'].map((course) => (
                  <span key={course} className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Certifications</h3>
                <p className="text-gray-600">Professional development and skill validation</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'Python Programming Certification', issuer: 'HackerRank', year: '2023' },
                { name: 'JavaScript Algorithms and Data Structures', issuer: 'freeCodeCamp', year: '2023' },
                { name: 'React Developer Certification', issuer: 'Meta', year: '2024' },
                { name: 'MySQL Database Certification', issuer: 'Oracle', year: '2024' }
              ].map((cert, index) => (
                <div key={cert.name} className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors duration-300">
                  <h4 className="font-semibold text-gray-800 mb-1">{cert.name}</h4>
                  <p className="text-sm text-gray-600 mb-1">{cert.issuer}</p>
                  <p className="text-sm text-purple-600 font-medium">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
