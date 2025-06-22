import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      title: 'Software Development Engineer',
      company: 'Zestminds Technologies Pvt. Ltd.',
      period: 'July 2024 - Present',
      location: 'Mohali, India',
      description: 'I currently work as a Software Development Engineer where I design and develop scalable SaaS platforms and backend microservices using Python (Flask, Django) and JavaScript/TypeScript (Next.js). I actively integrate and manage AWS services like S3, SQS, Lambda, and EC2 to ensure high availability and performance. On the frontend, I implemented functionalities that includes calling APIs to post & fetch data, Netx-Auth for storing user session & role-based access. I also work with authentication flows, payment gateway integrations, and automation tools like Playwright and Workato. My responsibilities include optimizing API performance, implementing clean database-driven architectures, and deploying AI-powered features into production systems.'
    },
    {
      title: 'Apprenticeship - Software Developer Associate',
      company: 'PMKVY',
      period: 'Aug 2023 - Feb 2024',
      location: 'CU, Mohali, India',
      description: 'I was a Trainee at PMKVY in the sector of "IT-ITes Sector Skills Council NASSCOM" for the Software Developer Associate.'
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      school: 'Chandigarh University',
      period: '2022 - 2024',
      location: 'Mohali, India',
      // description: 'Focused on software engineering, algorithms, and web development. Graduated Summa Cum Laude.'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      school: 'Chandigarh University',
      period: '2019 - 2022',
      location: 'Mohali, India',
      // description: 'Focused on software engineering, algorithms, and web development. Graduated Summa Cum Laude.'
    }
  ];

  const skills = [
    { category: 'Backend Development', items: ['Python', 'Node.js', 'MySQLs', 'PostgreSQL', 'MongoDB', 'AWS RDS'] },
    { category: 'API & Frameworks', items: ['Django', 'Flask', 'Fast API', 'Next.js (TypeScript)'] },
    { category: 'Frontend Development', items: ['JavaScript', 'ReactJs', 'JQuery'] },
    { category: 'Tools', items: ['AWS EC2', 'AWS Lambda', 'AWS SQS', 'AWS S3', 'Git VCS', 'Playwright'] }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4 py-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-6">About Me</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-justify">
            I'm a passionate Software Developer with hands-on experience in building scalable microservices and SaaS platforms using Python (Django, Flask, and Fast API) and JavaScript/TypeScript (Next.js). Proven track record of optimizing backend performance, reducing API latency, and implementing clean database-driven architectures. Experienced with cloud deployments on AWS and integrating AI-based systems into production-grade applications.<br/>
            RHCSA-certified with strong Linux expertise.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6 hover-lift"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Timeline */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6 hover-lift"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-4 text-gray-400 text-sm mt-2 md:mt-0">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6 hover-lift"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <p className="text-blue-400 font-medium">{edu.school}</p>
                  </div>
                  <div className="flex items-center gap-4 text-gray-400 text-sm mt-2 md:mt-0">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {edu.location}
                    </div>
                  </div>
                </div>
                {/* <p className="text-gray-300">{edu.description}</p> */}
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default About;