import React, { useState, useEffect } from 'react';
import {
  Shield,
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  Award,
  Users,
  FileText,
  Target,
  Lock,
  Database,
  Globe,
  Code,
  CheckCircle,
  BookOpen,
  Trophy,
  MapPin,
  ChevronDown,
  Eye,
  Zap,
  Brain,
  Server,
  Network,
  Bug,
  AlertTriangle,
  Search,
  Menu,
  X,
  Download,
  Calendar,
  GraduationCap,
  Sword,
  ShieldCheck,
  Settings,
  Radar,
  Activity,
  Cpu,
} from 'lucide-react';

import {
  FaBug,
  FaNetworkWired,
  FaPython,
  FaLinux,
  FaWindows,
  FaUbuntu,
  FaDocker,
  FaAws,
  FaMicrosoft,
  FaCode,
  FaCloud,
  FaShieldAlt,
  FaSearch,
  FaTerminal,
} from 'react-icons/fa';
import {
  SiKaliLinux,
  SiPostman,
  SiBurpsuite,
  SiZaproxy,
  SiNmap,
  SiWireshark,
  SiMetasploit,
  SiSqlite,
  SiPowerShell,
  SiJavascript,
  SiAzure,
  SiKubernetes,
  SiSplunk,
  SiBash,
} from 'react-icons/si';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        'about',
        'skills',
        'experience',
        'certifications',
        'contact',
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };
  const SkillItem = ({ icon: Icon, name }) => (
    <li className="flex items-center space-x-2">
      <Icon className="text-blue-600 w-4 h-4" />
      <span>{name}</span>
    </li>
  );

  const skills = [
    { name: 'Kali Linux', icon: 'kalilinux' },
    { name: 'Windows AD', icon: 'windows' },
    { name: 'Ubuntu Server', icon: 'ubuntu' },

    { name: 'Python', icon: 'python' },
    { name: 'Bash', icon: 'gnubash' },
    { name: 'PowerShell', icon: 'powershell' },
    { name: 'JavaScript', icon: 'javascript' },


    
    { name: 'Burp Suite', icon: 'burpsuite' },
    { name: 'Metasploit', icon: 'metasploit' },
    { name: 'Nmap', icon: 'nmap' },
    { name: 'SQLmap', icon: 'sqlite' }, // closest
    { name: 'Hydra', icon: 'gnuprivacyguard' }, // placeholder

    { name: 'OWASP ZAP', icon: 'owasp' },
    { name: 'Postman', icon: 'postman' },

    { name: 'AWS', icon: 'amazonaws' },
    { name: 'Azure', icon: 'microsoftazure' },
    { name: 'Docker', icon: 'docker' },
    { name: 'Kubernetes', icon: 'kubernetes' },

    { name: 'Splunk', icon: 'splunk' },
    { name: 'Wireshark', icon: 'wireshark' },
  ];

  const projects = [
    {
      title: 'Advanced SOC Monitoring & Threat Detection',
      description:
        'Implemented comprehensive SIEM-based threat detection system with real-time monitoring, incident triage, and forensic investigation capabilities aligned with MITRE ATT&CK framework.',
      icon: Eye,
      gradient: 'from-blue-600 to-purple-700',
      tags: ['SIEM', 'EDR', 'Wireshark', 'MITRE ATT&CK', 'Incident Response'],
      highlights: [
        'Real-time threat detection',
        'Automated incident triage',
        'Forensic investigation workflows',
      ],
    },
    {
      title: 'Automated Vulnerability Assessment Framework',
      description:
        'Developed sophisticated fuzz testing framework using AFL++ for web API security testing, integrated with DevSecOps pipelines for continuous security validation.',
      icon: Bug,
      gradient: 'from-green-600 to-teal-700',
      tags: ['AFL++', 'API Security', 'DevSecOps', 'Automation', 'Fuzzing'],
      highlights: [
        'Input validation testing',
        'CI/CD integration',
        'Automated reporting',
      ],
    },
    {
      title: 'Enterprise GRC & Compliance Audit',
      description:
        'Conducted comprehensive risk assessments and compliance audits for financial sector client using multiple frameworks, delivering actionable risk treatment strategies.',
      icon: AlertTriangle,
      gradient: 'from-orange-600 to-red-700',
      tags: ['ISO 27001', 'NIST', 'SOC 2', 'Risk Assessment', 'Compliance'],
      highlights: [
        'Multi-framework compliance',
        'Risk treatment planning',
        'Audit documentation',
      ],
    },
    {
      title: 'IoT Device Security Assessment',
      description:
        'Performed comprehensive penetration testing on smart home devices, uncovering critical vulnerabilities in wireless communications and providing detailed remediation strategies.',
      icon: Network,
      gradient: 'from-indigo-600 to-pink-700',
      tags: [
        'IoT Security',
        'Aircrack-ng',
        'Bettercap',
        'Wireless Security',
        'Device Testing',
      ],
      highlights: [
        'Network layer testing',
        'Wireless penetration',
        'Security remediation',
      ],
    },
  ];

  const certifications = [
    {
      name: 'Google Cybersecurity Professional Certificate',
      status: 'Completed',
      icon: Shield,
      color: 'text-green-600',
    },
    {
      name: 'CompTIA Security+',
      status: 'In Progress',
      icon: Award,
      color: 'text-blue-600',
    },
    {
      name: 'Ethical Hacking from Scratch',
      status: 'Completed',
      icon: Target,
      color: 'text-green-600',
    },
    {
      name: 'Programming Certifications (C, Python, Java)',
      status: 'Completed',
      icon: Code,
      color: 'text-green-600',
    },
  ];

  const experiences = [
    {
      title: 'QA Specialist – Security & Compliance',
      company: 'Tata Consultancy Services',
      period: 'Mar 2021 – Mar 2023',
      location: 'Mumbai, India',
      icon: Shield,
      description:
        'Focused on security and compliance testing for blockchain applications, developing test strategies and supporting cross-functional audits.',
      achievements: [
        'Led QA for blockchain-based systems with a focus on security and compliance',

        'Designed test strategies to identify vulnerabilities and improve detection rates',

        'Conducted security audits and reduced compliance issues across teams',

        'Built automation frameworks to enhance security and efficiency in delivery pipelines',

        'Performed manual and automated testing of web apps and APIs for flaws',
      ],
    },
    {
      title: "Master's Candidate – Cybersecurity & Risk Management",
      company: 'University of Birmingham',
      period: 'Sep 2023 – Sep 2024',
      location: 'Birmingham, UK',
      icon: GraduationCap,
      description:
        'Conducted advanced research in cyber-risk assessment and application security testing, gaining hands-on experience with industry-standard security tools and frameworks.',
      achievements: [
        'Applied SIEM implementation strategies for real-world threat scenarios',
        'Gained expertise with Nmap, Metasploit, Burp Suite security tools',
        'Developed frameworks for incident detection and response',
        'Designed secure network architectures and compliance policies',
        'Completed penetration testing labs and CTF challenges',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">
                Juilee Gund
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                'About',
                'Skills',
                'Experience',
                'Certifications',
                'Contact',
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  'About',
                  'Skills',
                  'Experience',

                  'Certifications',
                  'Contact',
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Floating Icons - Aligned Left Near Profile Image */}
        <div className="absolute top-0 left-0 h-full w-1/2 overflow-visible pointer-events-none">
          <Shield className="absolute top-1/4 right-20 w-8 h-8 text-blue-400/30 animate-spin-slow" />
          <Lock className="absolute top-1/3 left-10 w-6 h-6 text-purple-400/30 animate-spin-reverse" />
          <Target className="absolute bottom-1/3 left-16 w-7 h-7 text-cyan-400/30 animate-spin-slow" />
          <Globe className="absolute bottom-20 right-32 w-9 h-9 text-indigo-400/30 animate-spin-reverse" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Profile Image on Left */}
            <div className="flex-shrink-0">
              <div className="w-100 h-50 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-gradient-to-br from-blue-500 to-purple-600 transition-all duration-300">
                <img
                  src="https://raw.githubusercontent.com/JuileeGund115/Cybersecurity-Portfolio/main/juist.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content on Right */}
            <div className="text-left">
              <h1 className="text-6xl md:text-8xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                  Juilee Gund
                </span>
              </h1>
              <p className="text-4xl md:text-2xl text-blue-200 mb-4 font-light">
                Cybersecurity Engineer
              </p>

              <p className="text-lg text-blue-100/80 mb-8 max-w-xl leading-relaxed">
                I protect what others build, preventing threats before they even
                begin.
              </p>

              <div className="flex flex-wrap gap-4">
                {/* LinkedIn Icon */}
                <a
                  href="https://www.linkedin.com/in/juilee-gund"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>

                {/* GitHub Icon */}
                <a
                  href="https://github.com/JuileeGund115"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          {/* Two Centered Intro Lines */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-2">
              Cybersecurity Specialist with 2+ years of experience securing
              systems, breaking vulnerabilities, and building defenses across
              enterprise. From blockchain threat modeling to SIEM analysis and
              pentesting, I work across offensive and defensive domains to
              protect what matters.
            </p>
          </div>

          {/* Main Two-Column Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left Column */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                My journey into cybersecurity began in the real world, at Tata
                Consultancy Services (TCS), leading security testing for
                blockchain platforms, running vulnerability assessments, and
                driving compliance reviews. That hands-on exposure got me hooked
                - not just on finding flaws, but truly understanding how to
                prevent them.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                To deepen my expertise, I pursued a Master’s in Cybersecurity at
                the University of Birmingham, focusing on offensive and
                defensive security: IoT
                hardening, web app pentesting and SIEM-based threat hunting. Since then, I’ve stayed
                active through CTFs, TryHackMe labs, and independent security
                research.
              </p>
            </div>

            {/* Stats/Visual - Right Column */}
            {/* Stats/Visual - Right Column */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  {/* Offensive Security */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Sword className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900">
                      Offensive Security
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Penetration testing, vulnerability assessment, and web
                      application exploitation
                    </p>
                  </div>

                  {/* Defensive Security */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <ShieldCheck className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900">
                      Defensive Security
                    </h3>
                    <p className="text-gray-600 text-sm">
                      SIEM-based threat detection, incident response, and
                      security hardening
                    </p>
                  </div>

                  {/* Application Security */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900">
                      Application Security
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Manual and automated testing of web apps, APIs, and mobile
                      apps for OWASP Top 10 vulnerabilities
                    </p>
                  </div>

                  {/* Active Directory */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Network className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900">
                      Active Directory
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Testing Windows domain environments for common weaknesses
                      like misconfigurations, Kerberos attacks, and privilege
                      escalation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tools & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key tools and environments I work with across offensive testing,
              scripting, cloud security, and monitoring.
            </p>
          </div>

          {/* Unified Skills Container */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-10 rounded-3xl shadow-xl">
            <div className="grid md:grid-cols-2 font-bold lg:grid-cols-3 gap-10">
              {/* One box per category */}
              {[
                {
                  title: 'Penetration Testing',
                  tools: [
                    'Burp Suite',
                    'Metasploit',
                    'Nmap',
                    'SQLmap',
                    'Hydra',
                  ],
                  color: 'from-blue-500 to-blue-600',
                  emoji: '🛠️',
                },
                {
                  title: 'Operating Systems',
                  tools: ['Kali Linux', 'Windows AD', 'Ubuntu Server'],
                  color: 'from-gray-500 to-gray-600',
                  emoji: '💻',
                },
                {
                  title: 'Scripting & Programming',
                  tools: ['Python', 'Bash', 'PowerShell', 'JavaScript'],
                  color: 'from-green-500 to-green-600',
                  emoji: '💡',
                },
                {
                  title: 'App & Web Security',
                  tools: ['OWASP ZAP', 'Postman'],
                  color: 'from-yellow-500 to-yellow-600',
                  emoji: '🌐',
                },
                {
                  title: 'Cloud & Containers',
                  tools: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
                  color: 'from-purple-500 to-purple-600',
                  emoji: '☁️',
                },
                {
                  title: 'Monitoring & Logging',
                  tools: ['Splunk', 'Wireshark'],
                  color: 'from-indigo-500 to-indigo-600',
                  emoji: '📊',
                },
              ].map((category, idx) => (
                <div key={idx} className="text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                  >
                    <span className="text-white text-2xl">
                      {category.emoji}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900">{category.title}</h3>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    {category.tools.map((tool) => (
                      <li
                        key={tool}
                        className="flex items-center justify-center gap-2"
                      >
                        <img
                          src={`https://cdn.simpleicons.org/${tool
                            .toLowerCase()
                            .replace(/ /g, '')
                            .replace(/[^a-z0-9]/g, '')}/000000`}
                          alt={tool}
                          className="w-4 h-4"
                          onError={(e) =>
                            (e.currentTarget.style.display = 'none')
                          }
                        />
                        <span>{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-lg font-semibold text-blue-600 mb-1">
                              {exp.company}
                            </p>
                            <div className="flex items-center space-x-4 text-gray-600">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div
                              key={achIndex}
                              className="flex items-start space-x-2"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-sm">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Certifications & Learning
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Continuous professional development through certifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <IconComponent className={`w-8 h-8 ${cert.color}`} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm leading-tight">
                    {cert.name}
                  </h3>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      cert.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Continuous Learning Stats */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">
                Continuous Learning Journey
              </h3>
              <p className="text-blue-100">
                Staying current with evolving cybersecurity landscape
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">40+</div>
                <div className="text-blue-100">TryHackMe Rooms</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">4</div>
                <div className="text-blue-100">Active Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2</div>
                <div className="text-blue-100">In Progress</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to discuss cybersecurity opportunities and collaborate on
              securing digital assets
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always interested in discussing cybersecurity challenges,
                  sharing knowledge, and exploring new opportunities in the
                  field. Whether you're looking for a cybersecurity professional
                  or want to collaborate on security projects, I'd love to hear
                  from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:juileegund115@gmail.com"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      juileegund115@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a
                      href="tel:+447767940680"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      +44 7767940680
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/juilee-gund"
                      className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-1"
                    >
                      <span>Juilee-Gund</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Github</p>
                    <a
                      href="https://github.com/JuileeGund115"
                      className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-1"
                    >
                      <span>Git-Juilee-Gund</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form
                action="https://formspree.io/f/xnnvbawz"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-blue-400" />
              <span className="font-semibold">
                Juilee Gund - Cybersecurity Engineer
              </span>
            </div>
            <div className="text-sm">
              © 2024 Juilee Gund. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
