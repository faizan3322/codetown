import React from 'react'
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <div>
        <div className="max-w-7xl mx-auto text-center">
        <img src="Code_towns_hero.png" width={'150px'} className='mt-5 '/>
        
        
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-6 mb-10"
        >
          
          <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
          <SocialLink href="mailto:alex@example.com" icon={<Mail />} />
        </motion.div>
        <hr className='mb-9'></hr> */}
        <p style={{color:'#22d3ee',letterSpacing:'3px'}} className='mb-5'>© 2025 Code Towns. All Rights Reserved</p>
      </div>
    </div>
  )
}
const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="text-gray-300 hover:text-cyan-400 transition-colors"
    >
      {icon}
    </motion.a>
  );
