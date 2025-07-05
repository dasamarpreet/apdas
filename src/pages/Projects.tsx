import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Genhance.ai',
      description: 'Worked on Frontend & Backend Dev of this webapp which is purpose-built for the GenAI era, offering comprehensive GEO(GenAI Engine Optimization) solutions.',
      image: '/apdas/genhance_ai.jpg',
      technologies: ['Python - flask', 'React - Next.js', 'OpenAI API', 'OpenRouter', 'AWS - EC2, RDS, S3, SQS'],
      category: ['Full Stack Platforms', 'AI & Automation', 'Industry Projects'],
      github: '',
      live: 'https://genhance.ai/'
    },
    {
      id: 2,
      title: 'Patibl',
      description: 'Led full-stack development, built secure authentication using OAuth/JWT and session control via Next-Auth for rolebased dashboards.',
      image: '/apdas/patibl.png',
      technologies: ['Django (DRF)', 'Next.js', 'MongoDB', 'Stripe', 'AWS - EC2', 'BigQuery'],
      category: ['Full Stack Platforms', 'Industry Projects'],
      github: '',
      live: 'http://patibl.com/'
    },
    {
      id: 3,
      title: 'AI ChatBot',
      description: 'Deployed an OpenAI-powered chatbot\'s backend on serverless architecture - AWS Lambda for a UK client, enabling real-time support.',
      image: '/apdas/ondemandassesment_chatbot.png',
      technologies: ['Python', 'AWS Lambda', 'DynamoDB', 'S3'],
      category: ['AI & Automation', 'Industry Projects', 'Backend Engineering'],
      github: '',
      live: 'https://ondemandassessment.com/'
    },
    {
      id: 4,
      title: 'Modified Text Editor',
      description: 'Designed a Windows Text Editing software using Python. Include following features - Text box, menu bar, tool & status bar, font formattings, scroll bar, etc.',
      image: '/apdas/modified_text_editor.webp',
      technologies: ['Python3', 'Tkinter'],
      category: ['Backend Engineering', 'Personal Projects'],
      github: 'https://github.com/dasamarpreet/Modified_Text_Editor',
      live: ''
    },
    {
      id: 5,
      title: 'CollabNest',
      description: 'Secure mobile banking application with biometric authentication, transaction history, and budget tracking features.',
      image: '/apdas/collabnest.png',
      technologies: ['MERN Stack', 'Node.js', 'React.js', 'Express.js', 'MongoDB'],
      category: ['Personal Projects', 'Full Stack Platforms',],
      github: 'https://github.com/dasamarpreet/CollabNest',
      live: ''
    },
    {
      id: 6,
      title: 'Ongoing Personal Project',
      description: 'I\'m currently working on a new self-paced project to enhance my backend & frontend development skills.',
      image: '/apdas/personal_assistant.png',
      technologies: [],
      category: ['AI & Automation', 'Personal Projects'],
      github: '',
      live: ''
    }
  ];

  const categories = ['All', 'Backend Engineering', 'Full Stack Platforms', 'AI & Automation', 'Personal Projects', 'Industry Projects'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));
  
  const openModal = (image: any) => {
    console.log('opennnnnnnnn');
    setSelectedImage(image);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleBackdropClick = (e: any) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4 py-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-6">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here's a collection of some of the industrial & personal projects I've worked on, showcasing my skills in 
            backend & frontend development, GenAI tools, and emerging technologies.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Filter size={28} className="text-white mr-2" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white'
                  : 'glass-effect text-gray-300 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-xl overflow-hidden hover-lift group cursor-pointer"
              onClick={() => openModal(project.image)} // Open modal on image click
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.github && 
                    <a
                      href={project.github}
                      target='_blank'
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                      onClick={(e) => {e.preventDefault();}}
                    >
                      <Github size={18} />
                      Code
                    </a>
                  }
                  {project.live && 
                    <a
                      href={project.live}
                      target='_blank'
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                      onClick={(e) => {e.preventDefault();}}
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  }
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-400 text-lg">No projects found for this category.</p>
          </motion.div>
        )}
      </div>

      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleBackdropClick} // Close modal if clicking outside
        >
          <motion.div 
            className="relative max-w-3xl w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 p-4 text-white text-xl"
            >
              X
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged Project"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default Projects;