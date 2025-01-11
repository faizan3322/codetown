import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <img src="/src/Idea To Leads Coloured & Light.png" width={'150px'} alt="" />
            
          </div>
          
          <div className="flex space-x-6">
           
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Idea To lead. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;