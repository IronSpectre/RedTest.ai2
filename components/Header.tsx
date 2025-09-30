"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Brain, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '/#about' },
    { label: 'Founders', href: '/founder' },
    { label: 'Solutions', href: '/#solutions' },
    { label: 'Technology', href: '/#technology' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <Brain className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold">
              <span className="text-red-600">Red</span>
              <span className="text-gray-800">Test</span>
              <span className="text-red-400">.ai</span>
            </span>
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="/#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-all duration-200 flex items-center space-x-2 group"
            >
              <span>Get Started</span>
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-red-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="/#contact" className="mt-4 w-full bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors block text-center">
              Get Started
            </a>
          </motion.div>
        )}
      </nav>
    </header>
  );
}