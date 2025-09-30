"use client";

import { motion } from 'framer-motion';
import {
  Brain,
  Award,
  GraduationCap,
  Briefcase,
  Globe,
  Heart,
  Lightbulb,
  Target,
  Linkedin,
  Twitter,
  Mail,
  Quote,
  ChevronRight,
  Sparkles,
  Network,
  Database,
  Shield
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FounderPage() {
  const achievements = [
    { icon: Brain, label: "Biomedical", desc: "Engineering Background" },
    { icon: GraduationCap, label: "IT & Systems", desc: "Architecture Expert" },
    { icon: Briefcase, label: "Design", desc: "UI/UX & Branding" },
    { icon: Globe, label: "Global", desc: "Ecosystem Explorer" }
  ];

  const abdurrahmaanAchievements = [
    { icon: GraduationCap, label: "UC Berkeley", desc: "Integrative Human Biology" },
    { icon: Brain, label: "Research", desc: "Infectious Disease & Transplant" },
    { icon: Award, label: "Published", desc: "COVID-19 & Monkeypox Studies" },
    { icon: Target, label: "Systems", desc: "Health Information Architecture" }
  ];

  const milestones = [
    { year: "Early", title: "Biomedical Engineering", desc: "Built foundation in diagnostic workflows and health tech systems" },
    { year: "IT Era", title: "Systems Architecture", desc: "Gained expertise in Microsoft technologies and enterprise IT" },
    { year: "Creative", title: "Design Ventures", desc: "Founded creative ventures in branding and UI/UX" },
    { year: "Global", title: "International Exploration", desc: "From Sydney to London, Guangzhou to Tokyo—exploring global healthcare" },
    { year: "2024", title: "RedTest.ai", desc: "Founded AI-powered diagnostic platform for global health equity" },
    { year: "Future", title: "Vision Ahead", desc: "Building portable diagnostic kits for underserved communities worldwide" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Health Equity",
      desc: "Every patient deserves clarity—from London care homes to Bangladeshi villages"
    },
    {
      icon: Lightbulb,
      title: "Human-Centered Design",
      desc: "Technology that communicates clearly with patients, doctors, and partners"
    },
    {
      icon: Target,
      title: "Global Accessibility",
      desc: "Making diagnostics accessible, intelligent, and interoperable worldwide"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-50">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-96 h-96 bg-red-200 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-red-300 rounded-full opacity-20 blur-3xl animate-pulse-slow delay-1000"></div>
          </div>

          <div className="container mx-auto px-6 pt-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-5xl mx-auto"
            >
              <span className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Sparkles className="h-4 w-4" />
                <span>Meet Our Visionary Team</span>
              </span>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                The Visionary Behind{' '}
                <span className="gradient-text">RedTest.ai</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Reshaping how diagnostics are delivered and understood across the globe,
                combining technical precision with human-centered design for health equity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founder Profile Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-red-100 to-red-200 p-1">
                    <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center">
                      <div className="text-center">
                        <Brain className="h-32 w-32 text-red-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800">Hamza Ahmed</h3>
                        <p className="text-gray-600">Founder & Visionary</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-red-600 text-white rounded-2xl p-6 shadow-xl">
                    <Quote className="h-8 w-8 mb-2" />
                    <p className="text-sm italic">
                      &ldquo;Early diagnostics save lives — but only if they are accessible, trusted, and adaptable&rdquo;
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold text-gray-800">
                  Hamza Ahmed
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A technologist, designer, and entrepreneur dedicated to reshaping how diagnostics are delivered
                  and understood across the globe. With a background that bridges biomedical engineering, IT, and
                  creative product design, Hamza brings a unique perspective to healthcare innovation—combining
                  technical precision with human-centered design.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  As the founder of RedTest.ai, Hamza&apos;s mission is clear: to make diagnostics accessible,
                  intelligent, and globally interoperable. He envisions a future where communities, from metropolitan
                  hospitals to rural villages, can access accurate diagnostic insights powered by AI and delivered
                  through portable, connected systems.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-gray-50 rounded-xl p-4 hover:bg-red-50 transition-colors"
                    >
                      <achievement.icon className="h-8 w-8 text-red-600 mb-2" />
                      <div className="font-bold text-gray-800">{achievement.label}</div>
                      <div className="text-sm text-gray-600">{achievement.desc}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4">
                  <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-red-100 transition-colors">
                    <Linkedin className="h-5 w-5 text-gray-700 hover:text-red-600" />
                  </a>
                  <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-red-100 transition-colors">
                    <Twitter className="h-5 w-5 text-gray-700 hover:text-red-600" />
                  </a>
                  <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-red-100 transition-colors">
                    <Mail className="h-5 w-5 text-gray-700 hover:text-red-600" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                A Multidisciplinary <span className="text-red-600">Journey</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From biomedical engineering to global healthcare ecosystems, every step has been guided by
                a mission to make diagnostics universally accessible.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-200"></div>

              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center justify-between mb-12 ${
                    index % 2 === 0 ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-5/12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-5/12 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-red-600 font-bold text-2xl mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Co-Founder Profile Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6 lg:order-2"
              >
                <h2 className="text-4xl font-bold text-gray-800">
                  Abdurrahmaan Mahmoud
                </h2>
                <p className="text-lg font-semibold text-red-600">
                  Co-Founder & Chief Health Information Officer
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Building the infrastructure that turns diagnostic data into decisions—reliably, repeatably,
                  and at scale. Abdurrahmaan leads the clinical and informatics architecture that makes AI
                  diagnostics work in the real world, from metropolitan hospitals to remote villages.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With research experience at UC Berkeley in infectious disease and at UC Irvine in transplant
                  outcomes and telemedicine, he identified a critical gap: clinical innovations stop at the lab
                  door because nobody builds the connective tissue between discovery and delivery.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  His approach is first-principles: treat the health system like a differential diagnosis—map
                  every failure point between &ldquo;AI output&rdquo; and &ldquo;patient impact,&rdquo; and solve for the true constraints.
                  The work is unglamorous—data standards, validation protocols, quality metrics—but it&apos;s the
                  difference between AI diagnostics as a demo and as a tool that saves lives at scale.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  {abdurrahmaanAchievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-gray-50 rounded-xl p-4 hover:bg-red-50 transition-colors"
                    >
                      <achievement.icon className="h-8 w-8 text-red-600 mb-2" />
                      <div className="font-bold text-gray-800">{achievement.label}</div>
                      <div className="text-sm text-gray-600">{achievement.desc}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4">
                  <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-red-100 transition-colors">
                    <Linkedin className="h-5 w-5 text-gray-700 hover:text-red-600" />
                  </a>
                  <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-red-100 transition-colors">
                    <Twitter className="h-5 w-5 text-gray-700 hover:text-red-600" />
                  </a>
                  <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-red-100 transition-colors">
                    <Mail className="h-5 w-5 text-gray-700 hover:text-red-600" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:order-1"
              >
                <div className="relative">
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-red-100 to-red-200 p-1">
                    <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center">
                      <div className="text-center">
                        <Network className="h-32 w-32 text-red-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800">Abdurrahmaan Mahmoud</h3>
                        <p className="text-gray-600">Co-Founder & CHIO</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-red-600 text-white rounded-2xl p-6 shadow-xl">
                    <Quote className="h-8 w-8 mb-2" />
                    <p className="text-sm italic">
                      &ldquo;Where you live shouldn&apos;t determine the quality—or usefulness—of your diagnostics&rdquo;
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Vision & <span className="text-red-600">Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Guided by principles that put humanity at the center of technological advancement.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 border border-red-100 hover:shadow-xl transition-all"
                >
                  <value.icon className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-white text-center"
            >
              <h3 className="text-3xl font-bold mb-4">Building an Ecosystem of Health Equity</h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Not just building a product—building a global mission. By fusing cutting-edge AI with
                human-centric design, RedTest.ai is becoming a trusted partner in the fight for more
                inclusive, preventative, and intelligent healthcare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2">
                  <span>Join Our Mission</span>
                  <ChevronRight className="h-5 w-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}