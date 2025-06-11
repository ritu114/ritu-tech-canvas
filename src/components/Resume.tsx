
import React, { useState } from 'react';
import { Download, MapPin, Mail, Phone, Calendar, Award, Code, Database, Globe, Brain, Users, BookOpen, ExternalLink } from 'lucide-react';

const Resume = () => {
  const [activeSection, setActiveSection] = useState('summary');

  const sections = [
    { id: 'summary', label: 'Summary', icon: Users },
    { id: 'education', label: 'Education', icon: BookOpen },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Globe },
    { id: 'certifications', label: 'Certifications', icon: Award }
  ];

  const skills = {
    'Programming Languages': ['C', 'Python', 'JavaScript'],
    'Web Technologies': ['HTML', 'CSS', 'React.js', 'Responsive Web Design', 'UI/UX Design', 'Cross-Platform Development'],
    'Backend/Database': ['MySQL', 'Supabase'],
    'Tools & Version Control': ['Git', 'GitHub', 'VS Code'],
    'Basic Knowledge': ['Machine Learning', 'Data Analysis & Visualization', 'Graphic Designing'],
    'Core Competencies': ['Logical Reasoning', 'Analytical Thinking', 'Problem-Solving', 'Agile Methodologies', 'Team Collaboration']
  };

  const projects = [
    {
      title: 'Credit Card Fraud Detection',
      description: 'Built a fraud detection system using machine learning (regression model) with a web-based frontend to identify fraudulent transactions.',
      tech: ['Python', 'Machine Learning']
    },
    {
      title: 'StellPay - Stellar Wallet',
      description: 'Developed a blockchain-based crypto wallet in a hackathon team using Stellar, React Native, and Supabase for secure transactions.',
      tech: ['React Native', 'Stellar', 'Supabase']
    },
    {
      title: 'Netflix Login Page Clone',
      description: 'Cloned Netflix\'s login page using HTML, CSS, and JavaScript to practice responsive UI design and frontend development.',
      tech: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Simple Calculator App',
      description: 'Created a basic calculator app in React focusing on clean design and real-time arithmetic operations.',
      tech: ['React', 'JavaScript']
    },
    {
      title: 'Portfolio Website (Current Project)',
      description: 'Developing a responsive personal portfolio website using HTML, CSS, and JavaScript to showcase web development skills and latest UI/UX principles.',
      tech: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      title: 'SpendTrack - Expense Tracker App',
      description: 'Currently working on the React Native App with Supabase for authentication to help users track and manage expenses efficiently.',
      tech: ['React Native', 'Supabase']
    }
  ];

  const certifications = [
    'Completed React.js Course from Coursera',
    'Completed JavaScript Course from Coursera',
    'Completed HTML5 Course from Coursera',
    'CISCO Certification in Cybersecurity Essentials',
    'Certified in Machine Learning and Deep Learning Basics from ITIL Fee',
    'Certified in IoT from ITIL Fee'
  ];

  const education = [
    {
      institution: 'O.P Jindal University',
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      location: 'Raigarh, Chhattisgarh',
      duration: 'Expected May 2026',
      gpa: 'Cumulative GPA: 7.7'
    },
    {
      institution: 'INDIAN SCHOOL',
      degree: 'XII (CBSE)',
      field: 'PCM with Physics, Chemistry, Maths',
      location: 'Raigarh, Chhattisgarh',
      duration: 'April 2021-May2022',
      gpa: 'Cumulative GPA: 6.6'
    },
    {
      institution: 'GURU GOBIND SINGH PUBLIC SCHOOL',
      degree: 'X (CBSE)',
      location: 'Bokaro Steel City, Jharkhand',
      duration: 'April 2019-March 2020',
      gpa: 'Cumulative GPA: 7.4'
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'summary':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-cyan-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Professional Summary</h3>
              <p className="text-gray-600 leading-relaxed">
                Motivated and innovative aspiring Software Engineer with a solid background in programming and software development. Known 
                for being adaptive, a fast learner, and a creative problem solver with a strong sense of integrity. Eager to contribute to impactful 
                projects and grow within a dynamic and forward-thinking development team.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md border border-purple-100">
                <Mail className="w-6 h-6 text-purple-600 mb-2" />
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-semibold text-gray-800">singhritu63645@gmail.com</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border border-cyan-100">
                <Phone className="w-6 h-6 text-cyan-600 mb-2" />
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-semibold text-gray-800">+91-8839464899</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border border-pink-100">
                <MapPin className="w-6 h-6 text-pink-600 mb-2" />
                <p className="text-sm text-gray-600">Location</p>
                <p className="font-semibold text-gray-800">Raigarh, Chhattisgarh</p>
              </div>
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                    <p className="text-purple-600 font-semibold">{edu.field}</p>
                    <p className="text-gray-600">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{edu.location}</p>
                    <p className="text-sm font-medium text-cyan-600">{edu.duration}</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-cyan-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">{edu.gpa}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  {category === 'Programming Languages' && <Code className="w-5 h-5 mr-2 text-purple-600" />}
                  {category === 'Backend/Database' && <Database className="w-5 h-5 mr-2 text-cyan-600" />}
                  {category === 'Web Technologies' && <Globe className="w-5 h-5 mr-2 text-green-600" />}
                  {category === 'Basic Knowledge' && <Brain className="w-5 h-5 mr-2 text-orange-600" />}
                  {category === 'Core Competencies' && <Users className="w-5 h-5 mr-2 text-pink-600" />}
                  {category === 'Tools & Version Control' && <Code className="w-5 h-5 mr-2 text-blue-600" />}
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-cyan-100 text-gray-700 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'certifications':
        return (
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex items-center">
                <Award className="w-6 h-6 text-yellow-500 mr-4 flex-shrink-0" />
                <p className="text-gray-700 font-medium">{cert}</p>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto mb-8"></div>
          <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2 mx-auto">
            <Download size={20} />
            <span>Download PDF Resume</span>
          </button>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center mb-8 bg-white rounded-xl p-2 shadow-lg">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg scale-105'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                  }`}
                >
                  <IconComponent size={18} />
                  <span className="hidden sm:inline">{section.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="animate-fade-in">
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
