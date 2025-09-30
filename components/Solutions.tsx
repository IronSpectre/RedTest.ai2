"use client";

import { motion } from 'framer-motion';
import {
  Microscope,
  Stethoscope,
  FileText,
  BarChart3,
  Brain,
  Activity,
  Pill,
  ArrowRight
} from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      icon: Microscope,
      title: 'Medical Imaging Analysis',
      description: 'AI-powered analysis of X-rays, MRIs, and CT scans with 99.9% accuracy for early disease detection.',
      features: ['Automated detection', 'Real-time results', '3D visualization'],
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Stethoscope,
      title: 'Clinical Decision Support',
      description: 'Intelligent systems that assist healthcare providers in making informed treatment decisions.',
      features: ['Evidence-based recommendations', 'Risk assessment', 'Treatment optimization'],
      color: 'from-red-600 to-red-700',
    },
    {
      icon: FileText,
      title: 'Electronic Health Records',
      description: 'Smart EHR systems with AI-driven insights and predictive analytics for better patient care.',
      features: ['Automated documentation', 'Pattern recognition', 'Predictive alerts'],
      color: 'from-red-400 to-red-500',
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Advanced algorithms that predict patient outcomes and identify high-risk cases early.',
      features: ['Risk stratification', 'Outcome prediction', 'Resource optimization'],
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Pill,
      title: 'Drug Discovery & Development',
      description: 'Accelerating pharmaceutical research with AI-driven molecular analysis and testing.',
      features: ['Molecular modeling', 'Clinical trial optimization', 'Safety prediction'],
      color: 'from-red-600 to-red-700',
    },
    {
      icon: Activity,
      title: 'Remote Patient Monitoring',
      description: 'Continuous health monitoring with AI-powered anomaly detection and alert systems.',
      features: ['24/7 monitoring', 'Automated alerts', 'Trend analysis'],
      color: 'from-red-400 to-red-500',
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-red-600">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI-powered healthcare solutions designed to improve patient outcomes,
            streamline operations, and accelerate medical research.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${solution.color}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-red-50 rounded-xl group-hover:bg-red-100 transition-colors">
                    <solution.icon className="h-8 w-8 text-red-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-4">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <ArrowRight className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="text-red-600 font-semibold flex items-center space-x-2 hover:space-x-3 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-white text-center"
        >
          <Brain className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">Lebn AI Platform</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our flagship platform that integrates all our AI solutions into a unified,
            powerful system for comprehensive healthcare management.
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2">
            <span>Explore Lebn AI</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}