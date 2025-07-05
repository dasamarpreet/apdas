import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, Code2, Bot, Brain, Atom } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const downloadResume = () => {
    window.open('/apdas/resume.pdf', '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="text-gradient">Amar Preet Das</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Software Development Engineer
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto text-justify"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Experienced in building scalable microservices and SaaS platforms. Proven track record of optimizing backend performance, reducing API latency, and implementing clean database-driven architectures. Skilled in cloud deployments and production-grade AI integration.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                to="/apdas/projects"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 hover-lift"
              >
                View My Work
              </Link>
              <button className="px-8 py-3 glass-effect text-white rounded-lg hover-lift flex items-center gap-2" onClick={downloadResume}>
                <Download size={20} />
                Download Resume
              </button>
            </motion.div>

            <motion.div 
              className="flex justify-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a href="https://github.com/dasamarpreet/" target='_blank' className="text-gray-400 hover:text-white transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/dasamarpreet/" target='_blank' className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <Link to="/apdas/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Mail size={24} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.button
            onClick={scrollToNext}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-blue-400 transition-colors duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={24} />
          </motion.button>
        </div>
      </section>

      {/* Quick Sections Overview */}
      <section className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What I Do
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Backend Development',
                description: 'Python, Node.js, MySQL, PostgreSQL, MongoDB',
                icon: <Code2 className="h-8 w-8 text-blue-400" />,
                link: '/projects'
              },
              {
                title: 'Frontend Development',
                description: 'ReactJs via NextJs (TypeScript)',
                icon: <Atom className="h-8 w-8 text-blue-400" />,
                link: '/projects'
              },
              {
                title: 'ChatBot & GenAI Tool Integrations',
                description: 'OpenAI API, Perplexity API, Google\'s AI Mode',
                icon: <Bot className="h-8 w-8 text-blue-400" />,
                link: '/projects'
              },
              {
                title: 'Browser Automation',
                description: 'Using Python Libraries - Playwright & Browser-Use',
                icon: <Brain className="h-8 w-8 text-blue-400" />,
                link: '/projects'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl p-6 hover-lift cursor-pointer"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/apdas/about"
              className="inline-block px-8 py-3 glass-effect text-white rounded-lg hover-lift"
            >
              Learn More About Me
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;