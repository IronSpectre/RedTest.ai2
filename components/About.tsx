"use client";

import { motion } from 'framer-motion';
import { Target, Lightbulb, Shield, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Committed to revolutionizing healthcare through innovative AI solutions that save lives and improve patient outcomes.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Pushing the boundaries of what\'s possible in medical AI, constantly researching and developing breakthrough technologies.',
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Ensuring the highest standards of data privacy, security, and compliance with healthcare regulations worldwide.',
    },
    {
      icon: Users,
      title: 'Patient-Centered',
      description: 'Every innovation we create is designed with patients and healthcare providers in mind, ensuring practical and impactful solutions.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-red-600">RedTest AI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a pioneering healthcare technology company leveraging the power of artificial intelligence
            to create a healthier future for everyone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800">
              Transforming Healthcare Through Intelligence
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded by a team of healthcare professionals, AI researchers, and technology experts,
              RedTest AI is at the forefront of medical innovation. We believe that artificial intelligence
              has the power to democratize healthcare and make quality medical services accessible to everyone.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our flagship product, <span className="font-semibold text-red-600">Lebn AI</span>, represents
              our commitment to creating practical, life-saving solutions that integrate seamlessly into
              existing healthcare workflows while delivering unprecedented accuracy and efficiency.
            </p>
            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-red-600">2020</div>
                <div className="text-gray-600">Founded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">100K+</div>
                <div className="text-gray-600">Lives Impacted</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">50+</div>
                <div className="text-gray-600">Healthcare Partners</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 h-full flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4">
                {['AI Research', 'Medical Imaging', 'Predictive Analytics', 'Clinical Decision Support'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-red-600 font-semibold">{item}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 hover:bg-red-50 transition-colors duration-300"
            >
              <value.icon className="h-10 w-10 text-red-600 mb-4" />
              <h4 className="text-xl font-bold mb-2 text-gray-800">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}