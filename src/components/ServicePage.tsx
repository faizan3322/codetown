import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Globe, Code2, Megaphone, Search, Share2 } from 'lucide-react';

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

function ServicePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <motion.button
            onClick={() => navigate('/')}
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            whileHover={{ x: -10 }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <motion.div 
        className="max-w-7xl mx-auto px-4 py-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          onClick={() => navigate('/')}
          className="flex items-center text-cyan-400 hover:text-blue-300 transition-colors mb-12"
          whileHover={{ x: -10 }}
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10">
              <motion.div 
                className="bg-cyan-500 w-20 h-20 rounded-lg flex items-center justify-center mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                {service.icon}
              </motion.div>
              <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
              <p className="text-xl text-blue-100 mb-8">{service.fullDescription}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10">
              <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="bg-cyan-400/20 p-1 rounded-full">
                      <Check className="w-4 h-4 text-cyan-500" />
                    </div>
                    <span className="text-blue-100">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ServicePage;