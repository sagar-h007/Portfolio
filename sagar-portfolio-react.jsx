import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// Main Portfolio Component
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio">
      <Navigation 
        activeSection={activeSection} 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Hero opacity={opacity} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ScrollProgress scrollYProgress={scrollYProgress} />
    </div>
  );
}

// Navigation Component
function Navigation({ activeSection, isMenuOpen, setIsMenuOpen }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg z-50 border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
          >
            SAGAR
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-indigo-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4"
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-slate-300 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

// Hero Section
function Hero({ opacity }) {
  const phrases = [
    "Backend Developer",
    "Systems Architect",
    "Open Source Contributor",
    "Tool Builder"
  ];
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ opacity }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm uppercase tracking-widest text-slate-400 mb-4"
          >
            Software Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Sagar
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="h-16 mb-8"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentPhrase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl text-indigo-400 font-medium"
              >
                {phrases[currentPhrase]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Specializing in backend systems, distributed architectures, and developer
            tooling. Building robust, scalable solutions that solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg font-semibold shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/70 transition-shadow"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-lg font-semibold hover:bg-slate-700 transition-colors"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20 pt-20 border-t border-slate-800"
          >
            {[
              { value: '3+', label: 'Years Experience' },
              { value: '10+', label: 'Projects' },
              { value: '5K+', label: 'Commits' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-3 bg-indigo-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-16">
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              This is me.
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Hi, I'm Sagar.</h3>
              <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                <p>
                  I'm a software developer dedicated to crafting efficient solutions for
                  complex technical challenges. I specialize in backend development,
                  distributed systems, and creating tools that empower other developers.
                </p>
                <p>
                  My approach focuses on building scalable, high-performing applications
                  that solve real-world problems. I have extensive experience working with
                  Python, C++, JavaScript, and various modern frameworks.
                </p>
                <p>
                  I believe in continuous learning and collaboration. The developer
                  community has taught me so much, and I'm committed to giving back
                  through open source contributions and knowledge sharing.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm"
            >
              <h4 className="text-xl font-semibold text-indigo-400 mb-6">
                Core Principles
              </h4>
              <ul className="space-y-4">
                {[
                  { icon: '⚡', text: 'Problem-Solving First' },
                  { icon: '🚀', text: 'Performance Matters' },
                  { icon: '🤝', text: 'Open Collaboration' },
                  { icon: '📚', text: 'Continuous Learning' }
                ].map((principle, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center space-x-4 text-slate-300"
                  >
                    <span className="text-2xl">{principle.icon}</span>
                    <span className="text-lg">{principle.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Skills Section
function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'C++', 'JavaScript', 'TypeScript', 'Dart', 'SQL', 'Bash']
    },
    {
      title: 'Frontend',
      skills: ['React', 'HTML5', 'CSS3', 'Flutter', 'Tailwind', 'Redux']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'FastAPI', 'Flask', 'REST APIs', 'GraphQL']
    },
    {
      title: 'Database',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
    },
    {
      title: 'DevOps',
      skills: ['Docker', 'Git', 'GitHub Actions', 'Linux', 'AWS']
    },
    {
      title: 'Learning',
      skills: ['Rust', 'Kubernetes', 'WebAssembly', 'ML/AI']
    }
  ];

  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-16">
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              My Tech Stack
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 backdrop-blur-sm hover:border-indigo-500/50 transition-all"
              >
                <h3 className="text-indigo-400 font-semibold uppercase tracking-wider mb-4 text-sm">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-sm font-medium text-slate-300 hover:bg-indigo-500/20 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Projects Section
function Projects() {
  const projects = [
    {
      number: '01',
      title: 'Medical Report System',
      description: 'A comprehensive TypeScript-based medical reporting platform designed to streamline healthcare documentation and analysis with focus on data integrity and security.',
      tech: ['TypeScript', 'Node.js', 'MongoDB', 'React', 'Docker'],
      icon: '📊',
      github: 'https://github.com/sagar-h007/Medical-report',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'Package Dependency Visualizer',
      description: 'A powerful Python CLI tool that analyzes and visualizes local package dependencies, helping developers understand complex dependency trees and identify circular dependencies.',
      tech: ['Python', 'NetworkX', 'Matplotlib', 'CLI'],
      icon: '🔍',
      github: 'https://github.com/sagar-h007/Local-Package-Dependancy-Visualizer',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      title: 'WASM Inspector CLI',
      description: 'A sophisticated C++ command-line tool for inspecting, analyzing, and debugging WebAssembly modules. Provides deep insights into WASM binaries for optimization and debugging.',
      tech: ['C++', 'WABT', 'CMake', 'WebAssembly'],
      icon: '⚙️',
      github: 'https://github.com/sagar-h007/WASM-inspector-cli',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-16">
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Selected Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-indigo-500/50 transition-all"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl`}>
                  {project.icon}
                </div>
                <div className="p-6">
                  <div className="text-xs text-slate-500 font-mono mb-2">
                    _{project.number}.
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs font-mono text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium text-sm group-hover:translate-x-2 transition-transform"
                  >
                    View on GitHub
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Experience Section (New)
function Experience() {
  const experiences = [
    {
      role: 'Software Developer',
      company: 'Freelance / Open Source',
      period: 'Jan 2022 - Present',
      description: 'Developed and maintained multiple open-source projects with focus on developer tooling. Built full-stack applications using modern JavaScript frameworks and Python.',
      highlights: [
        'Created tools used by 500+ developers',
        'Contributed to 15+ open-source repositories',
        'Mentored junior developers'
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-16">
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              My Experience
            </span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm hover:border-indigo-500/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-indigo-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-slate-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-slate-300 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start text-slate-400">
                      <span className="text-indigo-400 mr-2">▸</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Have a project in mind?
            </span>
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Let's build something amazing together
          </p>

          <motion.a
            href="mailto:sagar@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block text-3xl md:text-4xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors mb-12"
          >
            sagar@example.com
          </motion.a>

          <div className="flex justify-center gap-6 mt-12">
            {[
              { name: 'GitHub', url: 'https://github.com/sagar-h007', icon: 'github' },
              { name: 'LinkedIn', url: 'https://linkedin.com/in/sagar-dev', icon: 'linkedin' },
              { name: 'Twitter', url: 'https://twitter.com/sagar_codes', icon: 'twitter' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center hover:bg-indigo-500 hover:border-indigo-500 transition-all"
                title={social.name}
              >
                <span className="text-xl">{social.icon === 'github' ? '⚡' : social.icon === 'linkedin' ? '💼' : '🐦'}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-slate-400">
          Design & Built by Sagar • 2026
        </p>
        <p className="text-slate-500 mt-2">
          <a
            href="https://github.com/sagar-h007"
            className="hover:text-indigo-400 transition-colors"
          >
            @sagar-h007
          </a>
        </p>
      </div>
    </footer>
  );
}

// Scroll Progress Indicator
function ScrollProgress({ scrollYProgress }) {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform-origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
