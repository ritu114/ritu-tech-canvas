
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'C', level: 90, color: 'from-blue-500 to-blue-600' },
    { name: 'Python', level: 85, color: 'from-green-500 to-green-600' },
    { name: 'JavaScript', level: 88, color: 'from-yellow-500 to-yellow-600' },
    { name: 'HTML', level: 95, color: 'from-red-500 to-red-600' },
    { name: 'CSS', level: 92, color: 'from-blue-400 to-blue-500' },
    { name: 'React', level: 80, color: 'from-cyan-500 to-cyan-600' },
    { name: 'MySQL', level: 75, color: 'from-orange-500 to-orange-600' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proficient in multiple programming languages and technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={skill.name} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
                <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ 
                    width: `${skill.level}%`,
                    animationDelay: `${index * 100}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
          {['Frontend', 'Backend', 'Database', 'Tools'].map((category, index) => (
            <div key={category} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${
                index === 0 ? 'from-purple-500 to-pink-500' :
                index === 1 ? 'from-cyan-500 to-blue-500' :
                index === 2 ? 'from-green-500 to-teal-500' :
                'from-orange-500 to-red-500'
              } flex items-center justify-center`}>
                <span className="text-white font-bold text-lg">{category[0]}</span>
              </div>
              <h4 className="font-semibold text-gray-800">{category}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
