import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Security Operations',
      skills: [
        { name: 'SIEM Tools', level: 90 },
        { name: 'Incident Response', level: 85 },
        { name: 'Threat Hunting', level: 80 },
        { name: 'SOC Operations', level: 88 },
      ],
    },
    {
      title: 'Technical Skills',
      skills: [
        { name: 'Network Security', level: 85 },
        { name: 'Vulnerability Assessment', level: 82 },
        { name: 'Penetration Testing', level: 75 },
        { name: 'Digital Forensics', level: 78 },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Splunk', level: 85 },
        { name: 'Wireshark', level: 80 },
        { name: 'Nessus', level: 78 },
        { name: 'Python', level: 75 },
      ],
    },
    {
      title: 'Frameworks & Compliance',
      skills: [
        { name: 'NIST Framework', level: 85 },
        { name: 'ISO 27001', level: 80 },
        { name: 'GDPR Compliance', level: 82 },
        { name: 'Risk Assessment', level: 88 },
      ],
    },
  ];

  const certifications = [
    'Security+',
    'CISSP (Pursuing)',
    'CEH',
    'GCIH',
    'CySA+',
    'CISM (Pursuing)',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set covering all aspects of cybersecurity, 
            from technical implementation to strategic planning.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-blue-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center hover:bg-blue-100 transition-colors duration-200"
              >
                <span className="text-blue-700 font-semibold text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;