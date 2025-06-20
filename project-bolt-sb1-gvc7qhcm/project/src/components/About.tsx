import React from 'react';
import { Shield, Target, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated cybersecurity professional with a passion for protecting organizations 
            from evolving digital threats and building robust security frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey in Cybersecurity</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                With a strong foundation in cybersecurity principles and hands-on experience in 
                security operations, I specialize in threat detection, incident response, and 
                security framework implementation. My approach combines technical expertise with 
                strategic thinking to deliver comprehensive security solutions.
              </p>
              <p>
                I'm passionate about staying ahead of emerging threats and continuously learning 
                new technologies and methodologies. My goal is to help organizations build 
                resilient security postures that protect their most valuable digital assets.
              </p>
              <p>
                When I'm not analyzing security logs or responding to incidents, I enjoy 
                participating in cybersecurity communities, contributing to open-source security 
                projects, and mentoring newcomers to the field.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Security First</h4>
              <p className="text-gray-600 text-sm">
                Every solution designed with security at its core
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Precision</h4>
              <p className="text-gray-600 text-sm">
                Accurate threat detection and risk assessment
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h4>
              <p className="text-gray-600 text-sm">
                Working effectively with cross-functional teams
              </p>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6 text-center">
              <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-gray-600 text-sm">
                Committed to continuous improvement and learning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;