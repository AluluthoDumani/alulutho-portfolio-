import React, { useState, useEffect } from 'react';
import { Code, User, Briefcase, Award, Mail, Sparkles, ChevronRight, Moon, Sun, Menu, X, Github, Linkedin, Phone, MapPin, Calendar, ExternalLink, Star } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
  };

  const sections = [
    { id: 'home', icon: Sparkles, label: 'Start Application', question: 'Welcome! Ready to begin?' },
    { id: 'about', icon: User, label: 'About', question: 'Tell me about yourself' },
    { id: 'projects', icon: Code, label: 'Projects', question: 'What have you built?' },
    { id: 'skills', icon: Briefcase, label: 'Skills', question: 'What are your technical skills?' },
    { id: 'achievements', icon: Award, label: 'Achievements', question: 'What are you proud of?' },
    { id: 'contact', icon: Mail, label: 'Contact', question: 'How can we reach you?' }
  ];

  const renderContent = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="text-center space-y-8 animate-slideUp">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Developer Application Portal
              </h1>
              <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} animate-fadeIn`}>
                Alulutho Dumani - Junior Software Developer
              </p>
            </div>
            <div className={`max-w-2xl mx-auto ${darkMode ? 'bg-gray-800 border-blue-400' : 'bg-white border-blue-500'} p-6 sm:p-8 rounded-xl shadow-2xl border-2 animate-scaleIn transition-all duration-300`}>
              <h2 className={`text-xl sm:text-2xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                Application Form
              </h2>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 text-sm sm:text-base`}>
                Welcome to my interactive portfolio! Navigate through each section to learn more about my journey as a developer.
              </p>
              <button 
                onClick={() => {
                  setActiveSection('about');
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 group"
              >
                Begin Application 
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="space-y-6 animate-slideUp">
            <div className={`${darkMode ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-400' : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-600'} p-4 sm:p-6 rounded-xl border-l-4 transition-all duration-300`}>
              <h2 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'} mb-2`}>
                Q1: Tell me about yourself
              </h2>
              <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} flex items-center gap-2`}>
                <Calendar size={14} />
                Response submitted on: Oct 18, 2025
              </p>
            </div>
            
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 sm:p-8 rounded-xl shadow-2xl space-y-6 animate-fadeIn transition-all duration-300`}>
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold flex-shrink-0 animate-pulse-slow mx-auto sm:mx-0">
                  AD
                </div>
                <div className="flex-1 w-full">
                  <h3 className={`text-lg sm:text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'} mb-2`}>
                    Response:
                  </h3>
                  <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-3 text-sm sm:text-base`}>
                    <p className="leading-relaxed">
                      Hi, I’m a full-stack developer passionate about turning ideas into impactful digital experiences. 
          I love building solutions that are intuitive, responsive, and purposeful. 
                    </p>
                    <p className="leading-relaxed">
                      Born and raised in Queenstown, South Africa, I had limited access to tech — but that never stopped me from dreaming big. 
          My journey into tech is self-driven, fueled by determination to create, solve problems, and empower others.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 pt-4 border-t border-gray-200">
                      <div className={`${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'} p-3 rounded-lg hover:scale-105 transition-transform`}>
                        <p className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-800'} flex items-center gap-2`}>
                          <MapPin size={14} /> Location
                        </p>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>Cape Town, South Africa</p>
                      </div>
                      <div className={`${darkMode ? 'bg-purple-900/30' : 'bg-purple-50'} p-3 rounded-lg hover:scale-105 transition-transform`}>
                        <p className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-800'} flex items-center gap-2`}>
                          <Award size={14} /> Education
                        </p>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}> National Certificate Level 6 - Management Assistant </p>
                      </div>
                      <div className={`${darkMode ? 'bg-green-900/30' : 'bg-green-50'} p-3 rounded-lg hover:scale-105 transition-transform`}>
                        <p className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-green-300' : 'text-green-800'} flex items-center gap-2`}>
                          <Briefcase size={14} /> Experience
                        </p>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>1.5 Years</p>
                      </div>
                      <div className={`${darkMode ? 'bg-orange-900/30' : 'bg-orange-50'} p-3 rounded-lg hover:scale-105 transition-transform`}>
                        <p className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-orange-300' : 'text-orange-800'} flex items-center gap-2`}>
                          <Star size={14} /> Passion
                        </p>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>Full-Stack Dev</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-6 animate-slideUp">
            <div className={`${darkMode ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-400' : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-600'} p-4 sm:p-6 rounded-xl border-l-4 transition-all duration-300`}>
              <h2 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'} mb-2`}>
                Q2: What have you built?
              </h2>
              <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Portfolio of work</p>
            </div>
            
            <div className="space-y-4">
              {[
                { 
                  name: 'Hype E-commerce',  
                  tech: ['Vue ', 'Node.js', 'MySQL'],
                  desc: 'E-commerce platform with catalog, cart, and payments.',
                  status: 'Completed',
                  color: 'blue',
                  url:'https://hype-module-3-project-witv.vercel.app/'
                },
                { 
                  name: 'Personal Portfolio Website', 
                  tech: ['Wordpress ', 'Elementor'],
                  desc: 'Responsive portfolio site to showcase projects.',
                  status: 'Completed',
                  color: 'blue',
                  url:'https://aluluthomihlalidumani.fwh.is/'
                },
                {
                  name: 'Visio Landing Page', 
                  tech: ['HTML5', 'CSS','JQuery'],
                  desc: 'HTML, CSS & jQuery responsive challenge task.',
                  status: 'Completed',
                  color: 'blue',
                  url:"https://elemental-challenge.vercel.app/"
                },
                {
                  name: 'Price Pulse', 
                  tech: ['Flutter (Dart)', 'Python','Firebase'],
                  desc: 'Price comparison app showing cheapest products across retailers.',
                  status: 'Completed',
                  color: 'blue',
                  url:'https://github.com/keanan557/Price-Pulse'
                },
                {
                  name: 'Iliso - Employee Management', 
                  tech: ['HTML', 'CSS', 'JS', 'Python', 'PHP', 'MySQL'],
                  desc: 'Digital employee tracking system with NFC cards, safety tracking',
                  status: 'Completed',
                  color: 'blue',
                  url:'https://atracker.lcstudio-incubate.co.za/'
                },
                {
                  name: 'Social Media Expert', 
                  tech: ['React', 'Tailwind', 'Firebase'],
                  desc: 'A modern platform for social media expertise and influencer growth strategies. Built with responsive design and interactive UI features.',
                  status: 'Completed',
                  color: 'blue',
                  url:'https://social-media-expert-alu.vercel.app/'
                },
                { 
                  name: 'WeatherWise - Weather Dashboard', 
                  tech: ['C++', 'OpenWeather API'],
                  desc: 'Interactive weather forecasting app with location-based data and 7-day predictions',
                  status: 'In Progress',
                  color: 'green',
                  url:''
                }
                
              ].map((project, idx) => (
                <div key={idx} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border hover:scale-102 animate-fadeIn group`} style={{animationDelay: `${idx * 100}ms`}}>
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <Code size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                      <h3 className={`text-base sm:text-lg font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                        {project.name}
                      </h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.color === 'blue' ? (darkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700') :
                      project.color === 'green' ? (darkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-700') :
                      (darkMode ? 'bg-orange-900/50 text-orange-300' : 'bg-orange-100 text-orange-700')
                    } flex items-center gap-1`}>
                      {project.status}
                    </span>
                  </div>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-3 text-sm sm:text-base`}>{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className={`px-2 sm:px-3 py-1 ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'} rounded-lg text-xs sm:text-sm hover:scale-110 transition-transform`}>
                        {tech}
                      </span>
                    ))}
                   <a 
  href={project.url}
  target="_blank"
  rel="noopener noreferrer"
  className={`ml-auto ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} flex items-center gap-1 text-sm font-semibold group-hover:translate-x-1 transition-transform`}
>
  View <ExternalLink size={14} />
</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-6 animate-slideUp">
            <div className={`${darkMode ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-400' : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-600'} p-4 sm:p-6 rounded-xl border-l-4 transition-all duration-300`}>
              <h2 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'} mb-2`}>
                Q3: What are your technical skills?
              </h2>
              <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Skill assessment results</p>
            </div>
            
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 sm:p-8 rounded-xl shadow-2xl space-y-6 transition-all duration-300`}>
              {[
                { category: 'Frontend', skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind'], level: 100, color: 'blue' },
                { category: 'Backend', skills: ['Node.js', 'Python', 'Express', 'REST APIs'], level: 100, color: 'green' },
                { category: 'Database', skills: ['MongoDB', 'PostgreSQL', 'Firebase'], level: 100, color: 'purple' },
                { category: 'Tools', skills: ['Git', 'VS Code', 'Docker', 'Postman'], level: 100, color: 'orange' }
              ].map((skill, idx) => (
                <div key={idx} className="space-y-3 animate-fadeIn" style={{animationDelay: `${idx * 150}ms`}}>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <div className="flex-1">
                      <h3 className={`font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'} text-base sm:text-lg`}>
                        {skill.category}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {skill.skills.map((s, i) => (
                          <span key={i} className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {s}{i < skill.skills.length - 1 ? ' •' : ''}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className={`text-xl sm:text-2xl font-bold ${
                      skill.color === 'blue' ? (darkMode ? 'text-blue-400' : 'text-blue-600') :
                      skill.color === 'green' ? (darkMode ? 'text-green-400' : 'text-green-600') :
                      skill.color === 'purple' ? (darkMode ? 'text-purple-400' : 'text-purple-600') :
                      (darkMode ? 'text-orange-400' : 'text-orange-600')
                    }`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-3 overflow-hidden`}>
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${
                        skill.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                        skill.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                        skill.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                        'bg-gradient-to-r from-orange-500 to-orange-600'
                      }`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'achievements':
        return (
          <div className="space-y-6 animate-slideUp">
            <div className={`${darkMode ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-400' : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-600'} p-4 sm:p-6 rounded-xl border-l-4 transition-all duration-300`}>
              <h2 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'} mb-2`}>
                Q4: What are you proud of?
              </h2>
              <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Notable accomplishments</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { 
                  icon: Award, 
                  title: 'Mobile App Developer', 
                  desc: ' Code Challenge 2025',
                  date: 'Jul 2024',
                  color: 'yellow'
                },
                { 
                  icon: Star, 
                  title: ' Software Development Certified', 
                  desc: 'Life Choice Academy - Full-Stack Development Course',
                  date: 'Apr 2025',
                  color: 'orange'
                },
                { 
                  icon: Star, 
                  title: 'Open Source Contributor', 
                  desc: 'Contributed to 5+ popular repositories',
                  date: 'Ongoing',
                  color: 'purple'
                },
                { 
                  icon: Star, 
                  title: 'Cisco Networking Academy', 
                  desc: 'C++ Essential, Python Programming,Cybersecurity, IT Essentials,Data Science',
                  date: '2023',
                  color: 'blue'
                }
              ].map((achievement, idx) => {
                const Icon = achievement.icon;
                return (
                  <div key={idx} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border animate-fadeIn group`} style={{animationDelay: `${idx * 100}ms`}}>
                    <Icon size={36} className={`mb-3 ${
                      achievement.color === 'yellow' ? (darkMode ? 'text-yellow-400' : 'text-yellow-500') :
                      achievement.color === 'orange' ? (darkMode ? 'text-orange-400' : 'text-orange-500') :
                      achievement.color === 'purple' ? (darkMode ? 'text-purple-400' : 'text-purple-500') :
                      (darkMode ? 'text-blue-400' : 'text-blue-500')
                    } group-hover:scale-110 transition-transform`} />
                    <h3 className={`font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'} mb-2 text-base sm:text-lg`}>
                      {achievement.title}
                    </h3>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-2`}>{achievement.desc}</p>
                    <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'} flex items-center gap-1`}>
                      <Calendar size={12} /> {achievement.date}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-6 animate-slideUp">
            <div className={`${darkMode ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-400' : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-600'} p-4 sm:p-6 rounded-xl border-l-4 transition-all duration-300`}>
              <h2 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'} mb-2`}>
                Q5: How can we reach you?
              </h2>
              <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Contact information</p>
            </div>
            
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 sm:p-8 rounded-xl shadow-2xl space-y-6 transition-all duration-300`}>
              <div className="text-center space-y-4">
                <h3 className={`text-xl sm:text-2xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                  Let's Connect!
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm sm:text-base`}>
                  I'm always open to new opportunities and collaborations
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {[
                  { label: 'Email', value: 'aluluthodumani99@gmail.com', icon: Mail, color: 'blue' },
                  { label: 'Phone', value: '+27 (0) 616 543 230', icon: Phone, color: 'green' },
                  { label: 'LinkedIn', value: 'www.linkedin.com/in/alulutho-mihlali-dumani-7209332ba', icon: Linkedin, color: 'blue' },
                  { label: 'GitHub', value: 'https://github.com/AluluthoDumani', icon: Github, color: 'purple' }
                ].map((contact, idx) => {
                  const Icon = contact.icon;
                  return (
                    <div key={idx} className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 ${
                      contact.color === 'blue' ? (darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200') :
                      contact.color === 'green' ? (darkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200') :
                      (darkMode ? 'bg-purple-900/30 border-purple-700' : 'bg-purple-50 border-purple-200')
                    } rounded-lg border hover:scale-102 transition-all duration-300 animate-fadeIn`} style={{animationDelay: `${idx * 100}ms`}}>
                      <Icon size={24} className={
                        contact.color === 'blue' ? (darkMode ? 'text-blue-400' : 'text-blue-600') :
                        contact.color === 'green' ? (darkMode ? 'text-green-400' : 'text-green-600') :
                        (darkMode ? 'text-purple-400' : 'text-purple-600')
                      } />
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {contact.label}
                        </p>
                        <p className={`${darkMode ? 'text-gray-100' : 'text-gray-800'} text-sm sm:text-base truncate`}>
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-gray-200 text-center">
                <a 
  href="/Alulutho_Dumani_Resume.pdf" 
  download="Alulutho_Dumani_Resume.pdf"
  className="inline-block w-full sm:w-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-3 px-8 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
>
  Download Resume
</a>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}>
      <style>{`
        * {
          font-family: 'Montserrat', sans-serif;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
          }
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>

      {/* Mobile Header */}
      <div className={`lg:hidden fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b shadow-lg transition-colors duration-300`}>
        <div className="flex items-center justify-between p-4">
          <h1 className={`text-lg font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Alulutho Dumani</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-300 ${darkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${darkMode ? 'bg-gray-700 text-gray-100 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50 animate-fadeIn" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile Sidebar */}
      <div className={`lg:hidden fixed top-16 right-0 bottom-0 w-72 z-40 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl transform transition-transform duration-300 overflow-y-auto ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="p-4 space-y-2">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg scale-105'
                    : darkMode 
                      ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                <div className="flex-1 text-left">
                  <p className="font-semibold text-sm">{section.label}</p>
                  <p className={`text-xs ${activeSection === section.id ? 'text-white/80' : darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {section.question}
                  </p>
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="flex min-h-screen pt-16 lg:pt-0">
        {/* Desktop Sidebar Navigation */}
        <div className={`hidden lg:block w-80 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl p-6 overflow-y-auto transition-colors duration-300`}>
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className={`text-lg font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'} mb-2`}>Application Sections</h2>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Navigate through the form</p>
              </div>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 ${darkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
          
          <nav className="space-y-2">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg scale-105'
                      : darkMode 
                        ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} />
                  <div className="flex-1 text-left">
                    <p className="font-semibold text-sm">{section.label}</p>
                    <p className={`text-xs ${activeSection === section.id ? 'text-white/80' : darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {section.question}
                    </p>
                  </div>
                </button>
              );
            })}
          </nav>

          <div className={`mt-8 p-4 ${darkMode ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30' : 'bg-gradient-to-br from-blue-50 to-purple-50'} rounded-lg transition-colors duration-300`}>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} text-center`}>
              Interactive Portfolio Application v1.0
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}