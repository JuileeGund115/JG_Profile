import React from 'react';
import { ExternalLink, Github, Lock, Network, Shield, Search } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Enterprise SIEM Implementation',
      description: 'Designed and deployed a comprehensive SIEM solution for a Fortune 500 company, integrating multiple data sources and creating custom correlation rules for threat detection.',
      technologies: ['Splunk', 'Python', 'PowerShell', 'Windows Event Log', 'Syslog'],
      features: [
        'Real-time threat monitoring dashboard',
        'Automated incident response workflows',
        'Custom correlation rules for APT detection',
        'Compliance reporting automation',
      ],
      icon: Shield,
      category: 'Security Operations',
    },
    {
      title: 'Network Security Assessment Tool',
      description: 'Developed an automated network vulnerability scanner that identifies misconfigurations, weak passwords, and potential entry points in corporate networks.',
      technologies: ['Python', 'Nmap', 'Metasploit', 'Burp Suite', 'JSON'],
      features: [
        'Automated vulnerability discovery',
        'Risk scoring and prioritization',
        'Detailed remediation reports',
        'Integration with ticketing systems',
      ],
      icon: Network,
      category: 'Penetration Testing',
    },
    {
      title: 'Incident Response Playbook Platform',
      description: 'Created a digital platform for incident response teams to access playbooks, track investigations, and collaborate during security incidents.',
      technologies: ['React', 'Node.js', 'MongoDB', 'REST API', 'Docker'],
      features: [
        'Interactive incident response playbooks',
        'Evidence tracking and chain of custody',
        'Team collaboration tools',
        'Metrics and reporting dashboard',
      ],
      icon: Search,
      category: 'Incident Response',
    },
    {
      title: 'Threat Intelligence Aggregator',
      description: 'Built a system that aggregates threat intelligence from multiple sources and provides actionable insights for security operations teams.',
      technologies: ['Python', 'APIs', 'Elasticsearch', 'Kibana', 'STIX/TAXII'],
      features: [
        'Multi-source threat intelligence feeds',
        'IOC correlation and enrichment',
        'Threat hunting query suggestions',
        'Integration with security tools',
      ],
      icon: Lock,
      category: 'Threat Intelligence',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hands-on cybersecurity projects demonstrating technical expertise 
            and practical problem-solving skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </button>
                    <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;