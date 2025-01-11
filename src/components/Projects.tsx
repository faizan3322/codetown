import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink,  } from 'lucide-react';
import './Projects.css'
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Virtual Security',
    description: 'A modern Virtual Security Website for a client build with wordpress',
    image: 'https://www.knownhost.com/blog/wp-content/uploads/2023/12/Virtualized-Security-1024x447.jpeg.webp',
    github: 'https://github.com',
    live: 'https://virtualsec.org/',
    tags: ['Wordpress', 'PHP']
  },
  {
    title: 'Deecypher',
    description: 'Website of Cyber Security for a client',
    image: 'https://deecypher.ca/wp-content/uploads/2023/02/blog-details-1.jpg',
    github: 'https://github.com',
    live: 'http://Deecypher.ca',
    tags: ['Wordpress']
  },
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    
    live: 'https://ecommerce-eta-seven-27.vercel.app/',
    tags: ['Javascript', 'Node.js', 'Css']
  },
];

export const Projects = () => {
  return (
    <section id='projects' className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <button className='bg-gray-800 rounded-lg p-5 mt-5 text-align-center'><Link className='pro-btn' to="projects">More Projects</Link ></button>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    className="bg-gray-800 rounded-lg overflow-hidden"
  >
    <img 
      src={project.image} 
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag: string) => (
          <span key={tag} className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-4">
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-gray-300 hover:text-cyan-400"
        >
          
        </motion.a>
        <motion.a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-gray-300 hover:text-cyan-400"
        >
          <ExternalLink size={20} />
        </motion.a>
      </div>
    </div>
    
  </motion.div>
);