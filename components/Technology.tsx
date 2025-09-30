"use client";

import { motion } from 'framer-motion';
import { Cpu, Database, Shield, Zap, Cloud, Lock, GitBranch, Layers } from 'lucide-react';

export default function Technology() {
  const technologies = [
    {
      icon: Cpu,
      title: 'Deep Learning Models',
      description: 'State-of-the-art neural networks trained on millions of medical records',
    },
    {
      icon: Database,
      title: 'Big Data Processing',
      description: 'Scalable infrastructure handling petabytes of medical data',
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Distributed computing power for real-time analysis',
    },
    {
      icon: Shield,
      title: 'HIPAA Compliance',
      description: 'Full regulatory compliance and data protection',
    },
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'Military-grade encryption for all patient data',
    },
    {
      icon: GitBranch,
      title: 'API Integration',
      description: 'Seamless integration with existing healthcare systems',
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Instant results and insights for critical decisions',
    },
    {
      icon: Layers,
      title: 'Modular Architecture',
      description: 'Flexible and scalable system design',
    },
  ];

  return (
    <section id="technology" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-red-600">Technology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built on cutting-edge AI infrastructure and designed with security, scalability,
            and reliability at its core.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-gradient-to-br from-gray-50 to-red-50 rounded-xl p-6 hover:from-red-50 hover:to-red-100 transition-all duration-300"
            >
              <tech.icon className="h-10 w-10 text-red-600 mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">{tech.title}</h3>
              <p className="text-sm text-gray-600">{tech.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Advanced AI Architecture</h3>
              <p className="text-gray-300 mb-6">
                Our proprietary AI models are built using the latest advances in machine learning,
                including transformer architectures, federated learning, and multi-modal analysis.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-300">99.9% uptime guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-300">Sub-second response times</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-300">Continuous model improvement</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl p-8 backdrop-blur">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-red-400">1M+</div>
                    <div className="text-sm text-gray-400">API Calls/Day</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-400">50ms</div>
                    <div className="text-sm text-gray-400">Avg Response</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-400">99.9%</div>
                    <div className="text-sm text-gray-400">Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}