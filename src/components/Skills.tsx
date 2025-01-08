import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Settings } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';

const skills = [
  {
    category: 'Wordpress',
    icon: <FontAwesomeIcon icon={faWordpress} size='2x' />,
    items: ["We provide top-notch WordPress development services tailored to meet your unique needs. Whether you're looking to build a stunning portfolio, a business website, or an e-commerce platform, our team specializes in creating professional, responsive, and user-friendly WordPress websites."]
  },
  {
    category: 'Web Development',
    icon: <Code />,
    items: ["We provide Responsive and attractive web development services whether you're looking to specialize in crafting visually stunning and highly functional websites using HTML, CSS, JavaScript, and React projects. Our team is dedicated to creating custom web solutions that align perfectly with your goals."]
  },
  {
    category: 'Web Development',
    icon: <Code />,
    items: ["We provide Responsive and attractive web development services whether you're looking to specialize in crafting visually stunning and highly functional websites using HTML, CSS, JavaScript, and React projects. Our team is dedicated to creating custom web solutions that align perfectly with your goals."]
  },
  {
    category: 'Web Development',
    icon: <Code />,
    items: ["We provide Responsive and attractive web development services whether you're looking to specialize in crafting visually stunning and highly functional websites using HTML, CSS, JavaScript, and React projects. Our team is dedicated to creating custom web solutions that align perfectly with your goals."]
  },
  {
    category: 'Web Development',
    icon: <Code />,
    items: ["We provide Responsive and attractive web development services whether you're looking to specialize in crafting visually stunning and highly functional websites using HTML, CSS, JavaScript, and React projects. Our team is dedicated to creating custom web solutions that align perfectly with your goals."]
  },
  {
    category: 'Web Development',
    icon: <Code />,
    items: ["HTML", "CSS", "Javascript", "React.JS"]
  },
  
];

export const Skills = () => {
  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Skills & Services
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-700 p-6 rounded-lg "
            >
              <div className="flex items-center mb-4">
                <span className="text-cyan-400 mr-3">{skill.icon}</span>
                <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
              </div>

              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <motion.li
                    key={item}
                    className="text-gray-300"
                    whileHover={{ x: 5 }}
                  >
                    <ul><li>{item}</li></ul>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};