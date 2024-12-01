import { useState } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

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
      const response = await fetch("https://byte-catalyst-portfolio-website-9jni6upq7-byte-catalyst.vercel.app/api/submit-form", {
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
            <h3 className="text-2xl font-semibold text-white mb-4">
              Contact Information
            </h3>

            <div className="flex items-center space-x-4 text-gray-300">
              <Mail className="text-cyan-400" />
              <span>bytesolutions@gmail.com</span>
            </div>

            <div className="flex items-center space-x-4 text-gray-300">
              <Phone className="text-cyan-400" />
              <span>+1 (555) 123-4567</span>
            </div>

            <div className="flex items-center space-x-4 text-gray-300">
              <MapPin className="text-cyan-400" />
              <span>San Francisco, CA</span>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg"
            >
              Submit
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
