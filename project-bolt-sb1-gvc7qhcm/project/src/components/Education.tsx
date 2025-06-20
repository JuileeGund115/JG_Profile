import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Master of Science in Cybersecurity',
      school: 'University of Technology',
      location: 'Boston, MA',
      period: '2018 - 2020',
      gpa: '3.8/4.0',
      honors: 'Magna Cum Laude',
      relevantCourses: [
        'Network Security',
        'Digital Forensics',
        'Cryptography',
        'Incident Response',
        'Risk Management',
        'Security Architecture',
      ],
      projects: [
        'Malware Analysis Research Project',
        'Network Intrusion Detection System',
        'Blockchain Security Implementation',
      ],
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'State University',
      location: 'New York, NY',
      period: '2014 - 2018',
      gpa: '3.6/4.0',
      honors: 'Cum Laude',
      relevantCourses: [
        'Computer Networks',
        'Operating Systems',
        'Database Security',
        'Software Engineering',
        'Algorithms & Data Structures',
        'Computer Ethics',
      ],
      projects: [
        'Secure Chat Application',
        'Database Encryption System',
        'Network Monitoring Tool',
      ],
    },
  ];

  const additionalEducation = [
    {
      title: 'SANS Security Training',
      provider: 'SANS Institute',
      courses: ['SEC401: Security Essentials', 'SEC504: Hacker Tools', 'FOR508: Digital Forensics'],
      year: '2021-2023',
    },
    {
      title: 'Cloud Security Specialization',
      provider: 'Coursera',
      courses: ['AWS Security', 'Azure Security', 'GCP Security'],
      year: '2022',
    },
    {
      title: 'Ethical Hacking Bootcamp',
      provider: 'Cybrary',
      courses: ['Penetration Testing', 'Web Application Security', 'Mobile Security'],
      year: '2021',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strong academic foundation in cybersecurity and computer science, 
            complemented by continuous professional development.
          </p>
        </div>

        {/* Formal Education */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-start">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <GraduationCap className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-2">{edu.school}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 text-sm space-y-1 sm:space-y-0 sm:space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0 flex flex-col items-start lg:items-end">
                  <div className="flex items-center mb-2">
                    <Award className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-semibold text-gray-700">{edu.honors}</span>
                  </div>
                  <span className="text-sm text-gray-600">GPA: {edu.gpa}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Relevant Coursework</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {edu.relevantCourses.map((course, courseIndex) => (
                      <div key={courseIndex} className="bg-gray-50 rounded px-3 py-2">
                        <span className="text-sm text-gray-700">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Notable Projects</h4>
                  <ul className="space-y-2">
                    {edu.projects.map((project, projectIndex) => (
                      <li key={projectIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Training */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Training & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalEducation.map((training, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{training.title}</h4>
                <p className="text-blue-600 font-medium mb-3">{training.provider}</p>
                <div className="space-y-1 mb-3">
                  {training.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="text-sm text-gray-700">
                      • {course}
                    </div>
                  ))}
                </div>
                <div className="text-xs text-gray-500 font-medium">{training.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;