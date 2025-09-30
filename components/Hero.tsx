"use client";

import { motion } from 'framer-motion';
import { Activity, Heart, Brain, Dna, ChevronRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-red-50 to-white">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-300 rounded-full opacity-20 blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
              <Sparkles className="h-4 w-4" />
              <span>Pioneering AI-Driven Healthcare Solutions</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Transforming Healthcare with{' '}
            <span className="gradient-text">Artificial Intelligence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            RedTest AI is revolutionizing medical diagnostics and patient care through cutting-edge AI technology,
            making healthcare more accurate, efficient, and accessible for everyone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a href="/#solutions" className="bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-all duration-200 flex items-center justify-center space-x-2 group text-lg font-semibold shadow-lg hover:shadow-xl">
              <span>Explore Our Solutions</span>
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://lebn.ai" target="_blank" rel="noopener noreferrer" className="bg-white text-red-600 px-8 py-4 rounded-full border-2 border-red-600 hover:bg-red-50 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl">
              Learn More About Lebn AI
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: Heart, label: 'Patient Care', value: '99.9%', desc: 'Accuracy' },
              { icon: Activity, label: 'Diagnostics', value: '10x', desc: 'Faster' },
              { icon: Brain, label: 'AI Models', value: '50+', desc: 'Deployed' },
              { icon: Dna, label: 'Data Points', value: '1M+', desc: 'Analyzed' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <stat.icon className="h-8 w-8 text-red-600 mb-2 mx-auto" />
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="h-6 w-6 text-red-600 rotate-90" />
      </div>
    </section>
  );
}