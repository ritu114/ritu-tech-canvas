
import React from 'react';
import { Download, Linkedin, ChevronDown, Github } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    // Create resume content as HTML
    const resumeContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Ritu Singh - Resume</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; color: #333; }
          .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 20px; }
          .name { font-size: 28px; font-weight: bold; margin-bottom: 10px; }
          .contact { margin: 10px 0; }
          .section { margin: 20px 0; }
          .section-title { font-size: 18px; font-weight: bold; color: #6366f1; margin-bottom: 10px; border-bottom: 1px solid #ccc; }
          .item { margin: 10px 0; }
          .item-title { font-weight: bold; }
          .item-subtitle { color: #666; font-style: italic; }
          .skills { display: flex; flex-wrap: wrap; gap: 10px; }
          .skill { background: #f0f0f0; padding: 5px 10px; border-radius: 5px; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="name">Ritu Singh</div>
          <div class="contact">B.Tech CSE Student | O.P. Jindal University</div>
          <div class="contact">Email: ritu.singh@opju.ac.in | Phone: +91-8888464899</div>
          <div class="contact">Location: Raigarh, Chhattisgarh</div>
          <div class="contact">LinkedIn: linkedin.com/in/ritu-singh-11r10s04</div>
        </div>

        <div class="section">
          <div class="section-title">PROFESSIONAL SUMMARY</div>
          <p>Motivated and innovative aspiring Software Engineer with a solid background in programming and software development. Known for being adaptive, a fast learner, and a creative problem solver with a strong sense of integrity. Eager to contribute to impactful projects and grow within a dynamic and forward-thinking development team.</p>
        </div>

        <div class="section">
          <div class="section-title">EDUCATION</div>
          <div class="item">
            <div class="item-title">Bachelor of Technology - Computer Science & Engineering</div>
            <div class="item-subtitle">O.P Jindal University, Raigarh, Chhattisgarh (Expected May 2026)</div>
            <div>Cumulative GPA: 7.7</div>
          </div>
          <div class="item">
            <div class="item-title">XII (CBSE) - PCM with Physics, Chemistry, Maths</div>
            <div class="item-subtitle">INDIAN SCHOOL, Raigarh, Chhattisgarh (April 2021-May 2022)</div>
            <div>Cumulative GPA: 6.6</div>
          </div>
          <div class="item">
            <div class="item-title">X (CBSE)</div>
            <div class="item-subtitle">GURU GOBIND SINGH PUBLIC SCHOOL, Bokaro Steel City, Jharkhand (April 2019-March 2020)</div>
            <div>Cumulative GPA: 7.4</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">TECHNICAL SKILLS</div>
          <div class="item">
            <div class="item-title">Programming Languages:</div>
            <div class="skills">
              <span class="skill">C</span>
              <span class="skill">Python</span>
              <span class="skill">JavaScript</span>
            </div>
          </div>
          <div class="item">
            <div class="item-title">Web Technologies:</div>
            <div class="skills">
              <span class="skill">HTML</span>
              <span class="skill">CSS</span>
              <span class="skill">React.js</span>
              <span class="skill">Responsive Web Design</span>
              <span class="skill">UI/UX Design</span>
            </div>
          </div>
          <div class="item">
            <div class="item-title">Backend/Database:</div>
            <div class="skills">
              <span class="skill">MySQL</span>
              <span class="skill">Supabase</span>
            </div>
          </div>
          <div class="item">
            <div class="item-title">Tools & Version Control:</div>
            <div class="skills">
              <span class="skill">Git</span>
              <span class="skill">GitHub</span>
              <span class="skill">VS Code</span>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">KEY PROJECTS</div>
          <div class="item">
            <div class="item-title">Credit Card Fraud Detection</div>
            <div>Built a fraud detection system using machine learning (regression model) with a web-based frontend to identify fraudulent transactions.</div>
            <div class="item-subtitle">Technologies: Python, Machine Learning</div>
          </div>
          <div class="item">
            <div class="item-title">StellPay - Stellar Wallet</div>
            <div>Developed a blockchain-based crypto wallet in a hackathon team using Stellar, React Native, and Supabase for secure transactions.</div>
            <div class="item-subtitle">Technologies: React Native, Stellar, Supabase</div>
          </div>
          <div class="item">
            <div class="item-title">Portfolio Website</div>
            <div>Developing a responsive personal portfolio website using modern web technologies to showcase development skills and UI/UX principles.</div>
            <div class="item-subtitle">Technologies: HTML, CSS, JavaScript, React</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">CERTIFICATIONS</div>
          <ul>
            <li>Completed React.js Course from Coursera</li>
            <li>Completed JavaScript Course from Coursera</li>
            <li>Completed HTML5 Course from Coursera</li>
            <li>CISCO Certification in Cybersecurity Essentials</li>
            <li>Certified in Machine Learning and Deep Learning Basics from ITIL Fee</li>
            <li>Certified in IoT from ITIL Fee</li>
          </ul>
        </div>
      </body>
      </html>
    `;

    // Create and download the file
    const blob = new Blob([resumeContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Ritu_Singh_Resume.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

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
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/9e0e5c99-07d3-4b9c-8dd4-a93da4d1502f.png" 
                  alt="Ritu Singh"
                  className="w-full h-full object-cover rounded-full"
                />
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
            <button 
              onClick={handleDownloadResume}
              className="group bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
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

            <a 
              href="https://github.com/ritusinghritu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/20 border border-white/20"
            >
              <div className="flex items-center gap-2">
                <Github size={20} />
                <span>GitHub</span>
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
