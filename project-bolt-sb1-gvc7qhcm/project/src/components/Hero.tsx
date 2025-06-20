import React from 'react';
import { Download, Mail, Linkedin, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:50px_50px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-4xl font-bold text-white">
              JG
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block">Cybersecurity</span>
            <span className="block text-blue-400">Professional</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Protecting digital assets through threat analysis, security operations, 
            and proactive risk management. Passionate about building secure, resilient systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:juileegund115@gmail.com"
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </a>
            
            <a
              href="https://www.linkedin.com/in/juilee-gund/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn Profile
            </a>
            
            <button className="inline-flex items-center px-8 py-3 border-2 border-gray-400 hover:border-white hover:text-white text-gray-300 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </button>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">Security Operations</h3>
              <p className="text-gray-300">SOC operations, incident response, and threat monitoring</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">Risk Management</h3>
              <p className="text-gray-300">Vulnerability assessment and security framework implementation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">Compliance</h3>
              <p className="text-gray-300">Regulatory compliance and security policy development</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-6 w-6 text-white" />
      </button>
    </section>
  );
};

export default Hero;