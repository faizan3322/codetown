import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Settings } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: <Layout />,
    items: ['React.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap']
  },
  {
    category: 'Backend',
    icon: <Database />,
    items: ['Node.js', 'Python', 'MongoDB', 'Express.js']
  },
  {
    category: 'Services',
    icon: <Settings />,
    items: ['MERN stack Development', 'Wordpress', 'SEO', 'Web ReDesign']
  }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-700 p-6 rounded-lg"
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
                    {item}
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