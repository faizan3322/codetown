import React from 'react';
import { Shield } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Globe, Code2, Megaphone, Search, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    const navigate = useNavigate();
  return (
    
    <div id='privacy' className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <motion.button
          onClick={() => navigate('/')}
          className="flex items-center text-cyan-400 hover:text-blue-300 transition-colors mb-12"
          whileHover={{ x: -10 }}
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </motion.button>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Shield className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="bg-white/5 shadow-lg rounded-lg overflow-hidden">
          <div className="p-8 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">1. Information We Collect and Use</h2>
              <p className="text-gray-400">While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
              <ul className="list-disc pl-6 text-gray-400 space-y-2">
                <li>Email address</li>
                <li>First Name and last Name</li>
                <li>Phone Number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">2. How We Use Your Information</h2>
              <p className="text-gray-400">We use the collected information to:</p>
              <ul className="list-disc pl-6 text-gray-400 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>For the performance of a contract</li>
                <li>Process and complete transactions</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Analyze usage patterns to enhance user experience</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">3. Information Sharing</h2>
              <p className="text-gray-400">We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
              <ul className="list-disc pl-6 text-gray-400 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Professional advisers and consultants</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">4. Data Security</h2>
              <p className="text-gray-400">We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">5. Your Rights</h2>
              <p className="text-gray-400">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-400 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">6. Contact Us</h2>
              <p className="text-gray-400">If you have any questions about this Privacy Policy, please contact us at:</p>
              <div className="text-gray-400 p-4 rounded-lg">
                <p className="text-gray-400">Email: ideatolead@gmail.com</p>
                <p className="text-gray-400">Phone: +1 (214) 896-4872</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;