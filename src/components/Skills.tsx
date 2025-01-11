// import React from 'react';
// import { motion } from 'framer-motion';
// import { Code, Database, Layout, Settings } from 'lucide-react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { faWordpress } from '@fortawesome/free-brands-svg-icons';

// const skills = [
//   {
//     category: 'Wordpress',
//     icon: <FontAwesomeIcon icon={faWordpress} size='2x' />,
//     items: ["We provide top-notch WordPress development services tailored to meet your unique needs. Whether you're looking to build a stunning portfolio, a business website, or an e-commerce platform, our team specializes in creating professional, responsive, and user-friendly WordPress websites."]
//   },
//   {
//     category: 'Web Development',
//     icon: <Code />,
//     items: ["We provide Responsive and attractive web development services whether you're looking to specialize in crafting visually stunning and highly functional websites using HTML, CSS, JavaScript, and React projects. Our team is dedicated to creating custom web solutions that align perfectly with your goals."]
//   },
//   {
//     category: 'Web Development',
//     icon: <Code />,
//     items: ["We provide Responsive and attractive web development services whether you're looking to specialize in crafting visually stunning and highly functional websites using HTML, CSS, JavaScript, and React projects. Our team is dedicated to creating custom web solutions that align perfectly with your goals."]
//   },
//   {
//     category: 'Web Development',
//     icon: <Code />,
//     items: ["We provide Responsive and attractive web development services whether you're looking to specialize in crafting visually stunning and highly functional websites using HTML, CSS, JavaScript, and React projects. Our team is dedicated to creating custom web solutions that align perfectly with your goals."]
//   },
//   {
//     category: 'Web Development',
//     icon: <Code />,
//     items: ["We provide Responsive and attractive web development services whether you're looking to specialize in crafting visually stunning and highly functional websites using HTML, CSS, JavaScript, and React projects. Our team is dedicated to creating custom web solutions that align perfectly with your goals."]
//   },
//   {
//     category: 'Web Development',
//     icon: <Code />,
//     items: ["HTML", "CSS", "Javascript", "React.JS"]
//   },
  
// ];

// export const Skills = () => {
//   return (
//     <section id="skills" className="py-20 px-4 bg-gray-800">
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl font-bold text-white mb-12 text-center"
//         >
//           Skills & Services
//         </motion.h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={skill.category}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2 }}
//               className="bg-gray-700 p-6 rounded-lg "
//             >
//               <div className="flex items-center mb-4">
//                 <span className="text-cyan-400 mr-3">{skill.icon}</span>
//                 <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
//               </div>

//               <ul className="space-y-2">
//                 {skill.items.map((item) => (
//                   <motion.li
//                     key={item}
//                     className="text-gray-300"
//                     whileHover={{ x: 5 }}
//                   >
//                     <ul><li>{item}</li></ul>
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Globe, Code2, Megaphone, Search, Share2, ArrowRight } from 'lucide-react';

export function Skills() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const servicesData = [
    { 
      id: 'wordpress',
      icon: <Globe className="w-6 h-6" />, 
      title: "WordPress Development",
      description: "Custom WordPress solutions tailored to your business needs, from blogs to e-commerce platforms.",
      fullDescription: "Our WordPress development services provide end-to-end solutions for businesses of all sizes. From custom theme development to plugin integration and e-commerce solutions, we ensure your WordPress site stands out and performs optimally.",
      features: [
        "Custom Theme Development",
        "Plugin Development & Integration",
        "WooCommerce Solutions",
        "Performance Optimization",
        "Security Implementation",
        "Regular Maintenance & Updates"
      ]
    },
    { 
      id: 'webdev',
      icon: <Code2 className="w-6 h-6" />, 
      title: "Web Development",
      description: "Building responsive, modern websites that deliver exceptional user experiences.",
      fullDescription: "Our web development team creates cutting-edge, responsive websites that combine stunning design with powerful functionality. We use the latest technologies to ensure your website is fast, secure, and scalable.",
      features: [
        "Custom Web Applications",
        "Responsive Design",
        "Frontend Development",
        "Backend Development",
        "API Integration",
        "Performance Optimization"
      ]
    },
    { 
      id: 'digital-marketing',
      icon: <Megaphone className="w-6 h-6" />, 
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns that drive growth and engagement.",
      fullDescription: "Our digital marketing strategies are designed to increase your online presence and drive meaningful results. We combine data-driven insights with creative solutions to reach and engage your target audience.",
      features: [
        "Marketing Strategy Development",
        "Content Marketing",
        "Email Marketing",
        "PPC Advertising",
        "Analytics & Reporting",
        "Conversion Optimization"
      ]
    },
    { 
      id: 'seo',
      icon: <Search className="w-6 h-6" />, 
      title: "SEO",
      description: "Data-driven SEO strategies to improve your visibility and rankings in search results.",
      fullDescription: "Our SEO services focus on improving your website's visibility in search engine results through proven techniques and strategies. We conduct thorough analysis and implement both on-page and off-page optimization.",
      features: [
        "Keyword Research & Analysis",
        "On-Page Optimization",
        "Technical SEO",
        "Content Strategy",
        "Link Building",
        "Local SEO"
      ]
    },
    { 
      id: 'social-media',
      icon: <Share2 className="w-6 h-6" />, 
      title: "Social Media Marketing",
      description: "Engaging social media campaigns that build brand awareness and community.",
      fullDescription: "Our social media marketing services help you build and maintain a strong presence across all relevant social platforms. We create engaging content and manage your social media presence to build meaningful connections with your audience.",
      features: [
        "Social Media Strategy",
        "Content Creation",
        "Community Management",
        "Paid Social Advertising",
        "Influencer Marketing",
        "Analytics & Reporting"
      ]
    }
  ];

  return (
    <div id='skills' className="min-h-screen bg-gray-800 text-white">
      <motion.div 
        className="max-w-7xl mx-auto px-4 py-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          variants={itemVariants}
        >
         
          <motion.h1 
            className="text-6xl  font-bold mb-6   "
          >
            Skills & Services
          </motion.h1>
          <motion.p className="text-2xl  mb-8 max-w-3xl mx-auto">
            Transforming Ideas into Digital Excellence
          </motion.p>
          <motion.div 
            className="bg-white/10 backdrop-blur-lg p-8 rounded-xl mb-12"
            variants={itemVariants}
          >
            <p className="text-lg text-blue-100 leading-relaxed">
              At Idea To Lead, we bridge the gap between imagination and implementation. 
              Our comprehensive digital solutions empower businesses to thrive in the modern digital landscape, 
              delivering results that matter through innovative strategies and cutting-edge technology.
            </p>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10 hover:border-blue-400/50 transition-colors"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="bg-cyan-600 from-blue-500 to-purple-500  w-14 h-14 rounded-lg flex items-center justify-center mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-blue-100 mb-6">{service.description}</p>
              <motion.button
                onClick={() => navigate(`/service/${service.id}`)}
                className="flex items-center text-cyan-400 hover:text-blue-300 transition-colors"
                whileHover={{ x: 10 }}
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skills;