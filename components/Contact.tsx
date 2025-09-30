"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-red-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your healthcare organization with AI? Let&apos;s discuss how RedTest AI
            can help you achieve your goals.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="p-4 bg-red-100 rounded-xl w-fit mb-4">
                  <Mail className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Email</h4>
                <p className="text-gray-600 mb-2">contact@redtest.ai</p>
                <p className="text-gray-600">support@redtest.ai</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="p-4 bg-red-100 rounded-xl w-fit mb-4">
                  <Phone className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Phone</h4>
                <p className="text-gray-600 mb-2">+1 (555) 123-4567</p>
                <p className="text-gray-600">Mon-Fri 9AM-6PM EST</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="p-4 bg-red-100 rounded-xl w-fit mb-4">
                  <MapPin className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Office</h4>
                <p className="text-gray-600 mb-2">123 Innovation Drive</p>
                <p className="text-gray-600">San Francisco, CA 94105</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}