"use client";

import { motion } from 'framer-motion';
import { Brain, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Company: ['About Us', 'Careers', 'Press', 'Partners'],
    Solutions: ['Medical Imaging', 'Clinical Support', 'EHR Systems', 'Analytics'],
    Resources: ['Documentation', 'API Reference', 'Case Studies', 'Blog'],
    Legal: ['Privacy Policy', 'Terms of Service', 'HIPAA Compliance', 'Security'],
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold">
                <span className="text-red-500">Red</span>
                <span className="text-white">Test</span>
                <span className="text-red-400">.ai</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Revolutionizing healthcare through artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 text-white">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 RedTest AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-red-500 transition-colors">Privacy</a>
              <span>•</span>
              <a href="#" className="hover:text-red-500 transition-colors">Terms</a>
              <span>•</span>
              <a href="#" className="hover:text-red-500 transition-colors">Cookies</a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            Proud creator of{' '}
            <span className="text-red-500 font-semibold">Lebn AI</span> -
            Your intelligent health companion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}