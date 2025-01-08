import { useState } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';


export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch("https://backend-j9pv591e7-byte-catalyst.vercel.app", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setName(""); // Clear the form fields after successful submission
        setEmail("");
        setMessage("");
      } else {
        const errorData = await response.json();
        alert("Error: " + errorData.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form.");
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-4xl mx-auto">
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
              <span className='text-2xl' style={{ letterSpacing: '2px' }}>codetowns@gmail.com</span>
              
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              
              <Phone className="text-cyan-400 " />
              <span className='text-2xl' style={{ letterSpacing: '2px' }}>+1(214)8964872</span>
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
              <SocialLink href="mailto:codetowns@gmail.com" icon={<Mail />} />
              
              
            </motion.div>
         
        </div>
      </div>
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