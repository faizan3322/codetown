import React from 'react'
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css'
import { Link } from 'react-router-dom';
import Back from './Back';

const projects = [
    {
      title: 'Virtual Security',
      description: 'A modern Virtual Security Website for a client build with wordpress',
      image: 'https://www.knownhost.com/blog/wp-content/uploads/2023/12/Virtualized-Security-1024x447.jpeg.webp',
      
      live: 'https://virtualsec.org/',
      tags: ['Wordpress', 'PHP']
    },
    {
        title: 'Deecypher',
        description: 'Website of Cyber Security for a client',
        image: 'https://deecypher.ca/wp-content/uploads/2023/02/blog-details-1.jpg',
        
        live: 'http://Deecypher.ca',
        tags: ['Wordpress']
      },
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with React and Node.js',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      
      live: 'https://faizan3322.github.io/Ecommerce/',
      tags: ['Javascript', 'Node.js', 'Css']
    },
    {
      title: 'Medical Login System',
      description: 'Medical Login System Based on Vanilla Javascript, HTML, CSS',
      image: 'https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_23724_16812965322203423.jpg',
      
      live: 'dayansalman404.pythonanywhere.com',
      tags: ['Javascript', 'Python', 'Css']
    },
    {
      title: 'Duct Cleaning',
      description: 'Duct Cleaning Website for US based Client build on React.JS',
      image: 'https://img1.wsimg.com/isteam/stock/1360/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1447,h:1000,cg:true',
      github: 'https://github.com',
      live: 'https://eliteducts.com/',
      tags: ['React', 'Tailwind']
    },
    {
      title: 'Global Cyber Security Speaker',
      description: 'Portfolio Website of a Cyber Security Speaker Build On Wordpress',
      image: 'https://ubaidjafri.com/wp-content/uploads/2024/11/1732104753180-768x512.jpg',
      github: 'https://github.com',
      live: 'https://ubaidjafri.com/',
      tags: [ 'Wordpress']
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather tracking with interactive maps',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
      github: 'https://github.com',
      live: 'https://faizan-weather-website.netlify.app',
      tags: ['TypeScript', 'React', 'OpenWeather API']
    },
    {
      title: 'Gradient Generator',
      description: 'Real-time weather tracking with interactive maps',
      image: 'https://indieground.net/wp-content/uploads/2023/03/Freebie-GradientTextures-Preview-06.jpg',
      github: 'https://github.com',
      live: 'https://faizan-weather-website.netlify.app',
      tags: ['Vanila Javascript', 'HTML']
    },
    {
      title: 'Shopping Website',
      description: 'Premium Inks And Toner Specialist Website',
      image: 'https://www.arzaan.pk/cdn/shop/articles/online-shopping-in-Pakistan.jpg?v=1633035087',
      github: 'https://github.com',
      live: 'https://fabulous-paprenjak-f4e2a4.netlify.app/',
      tags: ['TypeScript', 'React', 'penWeather API']
    },
  
  ];
export default function Allprojects() {
  return (
    <section className="py-20 px-4 bg-gray-900">
        <Back />
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          All Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
     
    </section>
  )
}

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
          {/* <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-300 hover:text-cyan-400"
          >
            <Github size={20} />
          </motion.a> */}
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
