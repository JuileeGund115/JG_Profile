import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      date: '2023',
      status: 'Current',
      description: 'Foundation-level security skills and knowledge validation',
      verificationId: 'SEC+2023789',
    },
    {
      name: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      date: '2023',
      status: 'Current',
      description: 'Ethical hacking methodologies and penetration testing',
      verificationId: 'CEH2023456',
    },
    {
      name: 'GCIH: GIAC Certified Incident Handler',
      issuer: 'SANS/GIAC',
      date: '2022',
      status: 'Current',
      description: 'Incident handling and computer forensics skills',
      verificationId: 'GCIH123789',
    },
    {
      name: 'CompTIA CySA+',
      issuer: 'CompTIA',
      date: '2022',
      status: 'Current',
      description: 'Cybersecurity analyst skills and threat detection',
      verificationId: 'CYSA+456123',
    },
    {
      name: 'CISSP',
      issuer: 'ISC²',
      date: 'In Progress',
      status: 'Pursuing',
      description: 'Advanced security concepts and enterprise security architecture',
      verificationId: 'Expected 2024',
    },
    {
      name: 'CISM',
      issuer: 'ISACA',
      date: 'In Progress',
      status: 'Pursuing',
      description: 'Information security management and governance',
      verificationId: 'Expected 2024',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Current':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Pursuing':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-recognized certifications demonstrating expertise and commitment 
            to professional development in cybersecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(cert.status)}`}>
                  {cert.status}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
              <p className="text-blue-600 font-semibold mb-2">{cert.issuer}</p>
              <p className="text-gray-700 text-sm mb-4">{cert.description}</p>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{cert.date}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium mr-2">ID:</span>
                  <span className="font-mono text-xs">{cert.verificationId}</span>
                </div>
              </div>
              
              {cert.status === 'Current' && (
                <button className="mt-4 flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  <span className="text-sm">Verify Certificate</span>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Professional Development */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continuous Learning</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">40+</div>
              <div className="text-gray-700">Hours of Training Annually</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-gray-700">Active Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-gray-700">Certifications in Progress</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;