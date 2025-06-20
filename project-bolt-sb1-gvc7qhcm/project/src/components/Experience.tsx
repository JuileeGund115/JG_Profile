import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Cybersecurity Analyst',
      company: 'SecureTech Solutions',
      location: 'Remote',
      period: '2023 - Present',
      type: 'Full-time',
      achievements: [
        'Led incident response team for critical security events, reducing mean time to resolution by 40%',
        'Implemented SIEM solution that improved threat detection capabilities by 60%',
        'Developed security playbooks and procedures for SOC operations',
        'Conducted security awareness training for 200+ employees',
      ],
    },
    {
      title: 'Cybersecurity Specialist',
      company: 'DataGuard Technologies',
      location: 'New York, NY',
      period: '2021 - 2023',
      type: 'Full-time',
      achievements: [
        'Performed vulnerability assessments and penetration testing for client networks',
        'Managed compliance initiatives for HIPAA and PCI-DSS requirements',
        'Collaborated with development teams to implement secure coding practices',
        'Reduced security incidents by 35% through proactive monitoring and threat hunting',
      ],
    },
    {
      title: 'Junior Security Analyst',
      company: 'CyberShield Corp',
      location: 'San Francisco, CA',
      period: '2020 - 2021',
      type: 'Full-time',
      achievements: [
        'Monitored security events using SIEM tools and analyzed potential threats',
        'Assisted in forensic investigations and malware analysis',
        'Created documentation for security procedures and best practices',
        'Supported security audits and compliance assessments',
      ],
    },
    {
      title: 'IT Security Intern',
      company: 'TechFlow Systems',
      location: 'Boston, MA',
      period: '2019 - 2020',
      type: 'Internship',
      achievements: [
        'Gained hands-on experience with network security tools and technologies',
        'Assisted in security policy development and risk assessments',
        'Learned incident response procedures and threat analysis techniques',
        'Completed certification training in CompTIA Security+',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A progressive career journey in cybersecurity, building expertise across 
            various domains and industries.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <div className="md:ml-16">
                  <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                        <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex flex-col lg:items-end text-sm text-gray-600 mt-2 lg:mt-0">
                        <div className="flex items-center mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center mb-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{exp.location}</span>
                        </div>
                        <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start">
                          <ChevronRight className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;