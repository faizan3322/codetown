import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Globe, Code2, Megaphone, Search, Share2, ArrowRight, Phone, Mail, Linkedin, Twitter, Instagram, Facebook, Clock, Award, Users } from 'lucide-react';


export const Contact = () => {
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

  return (
    <section id='contact' className="py-20 px-4 bg-gray-900">
      {/* <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
           

            <div className="flex items-center space-x-4 text-gray-300" style={{marginTop:"20px"}}>
              <a href='mailto:codetowns@gmail.com'>
              <Mail className="text-cyan-400 " />
              </a>
              <span className='text-2xl' style={{ letterSpacing: '2px' }}>ideatolead@gmail.com</span>
              
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              
              <Phone className="text-cyan-400 " />
              <span className='text-2xl' style={{ letterSpacing: '2px' }}>(214) 896-4872</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              
              <MapPin className="text-cyan-400 " />
              <span className='text-2xl' style={{ letterSpacing: '2px' }}>Dallas, TX</span>
            </div>

          </motion.div>


         
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center items-center space-x-7 text-6xl"
            >

              <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
              <SocialLink href="mailto:ideatolead@gmail.com" icon={<Mail />} />
              
              
            </motion.div>
         
        </div>
      </div> */}
      {/* Contact Section */}
      <motion.div
          className=""
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-16  text-white  bg-clip-text"
            variants={itemVariants}
          >
            Get in Touch
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left side (Contact Information) */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10">
                <h3 className="text-2xl text-white font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center space-x-4"
                    whileHover={{ x: 10 }}
                  >
                    <div className="bg-gradient-to-br from-blue-500 to-green-500 p-3 rounded-lg">
                      <a href="sms:+12148964872"><Phone className="w-6 h-6" /></a>
                    </div>
                    <div>
                      <p className="font-medium text-white">Phone</p>
                      <p className="text-blue-200 ">+1 (214) 896-4872</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center space-x-4"
                    whileHover={{ x: 10 }}
                  >
                    <div className="bg-gradient-to-br from-blue-500 to-green-500 p-3 rounded-lg">
                    <a href="mailto:ideatolead@gmail.com"><Mail className="w-6 h-6" /></a>  
                    </div>
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <p className="text-blue-200">ideatolead@gmail.com</p>
                    </div>
                  </motion.div>

                  <div className="pt-6">
                    <p className="font-medium mb-4 text-white">Contact Us</p>
                    <div className="flex space-x-4">
                      <motion.a
                        href="https://www.linkedin.com/company/idea-to-lead"
                        className="bg-gradient-to-br from-blue-500 to-green-500 p-3 rounded-lg"
                        whileHover={{ y: -5 }}
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href="mailto:ideatolead@gmail.com"
                        className="bg-gradient-to-br from-blue-500 to-green-500 p-3 rounded-lg"
                        whileHover={{ y: -5 }}
                      >
                        <Mail className="w-5 h-5" />
                      </motion.a>
                     
                      
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side (Company Information) */}
            <motion.div
              variants={itemVariants}
              className="hidden md:flex space-y-8 justify-center items-center"
            >
              <img src="Idea To Leads Coloured & Light.png" height={"20px"} style={{height:"100px"}} alt="logo" />

              
            </motion.div>
          </div>
        </motion.div>

        
        
    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.9 }}
  whileTap={{ scale: 1 }}
  className="text-6xl text-gray-300 hover:text-cyan-700 transition-colors"
>
  {icon}
</motion.a>
);