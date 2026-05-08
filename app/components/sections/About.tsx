'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/app/hooks/useInView';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -left-96 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-0.5 bg-gradient-to-r from-teal-400 to-transparent" />
              <h2 className="text-sm md:text-base font-light uppercase tracking-widest text-teal-400">
                About Me
              </h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold">Profile Overview</h3>
          </motion.div>

          {/* About grid */}
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 md:gap-12">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  I’m a Computer Science Engineering student at B.M.S. Institute of Technology and Management focused on building futuristic and interactive digital systems. My interests include AI/ML, blockchain, full-stack development, immersive interfaces, and AR/VR technologies. I enjoy combining functionality with cinematic user experiences to create projects that feel modern, intelligent, and engaging.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Leadership',
                    description: 'Technical team leadership, event coordination, and cross-team collaboration.',
                  },
                  {
                    title: 'Interests',
                    description: 'AI/ML, blockchain, AR/VR, futuristic UI design, immersive web experiences, and football.',
                  },
                ].map((item) => (
                  <div key={item.title} className="p-5 border border-gray-800 rounded-lg hover:border-teal-400/30 transition-all bg-white/[0.03]">
                    <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              {[
                {
                  title: 'B.M.S. Institute of Technology and Management',
                  subtitle: 'Bachelor of Engineering in Computer Science and Engineering',
                  meta: '2024 – Present · CGPA: 9.26',
                },
                {
                  title: 'St. Thomas Boys School',
                  subtitle: 'Class 12 — 89.7%',
                  meta: 'Class 10 — 92%',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="p-5 md:p-6 border border-gray-800 hover:border-teal-400/30 transition-all rounded-lg group bg-white/[0.02]"
                  whileHover={{ y: -5 }}
                >
                  <h4 className="font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400">{item.subtitle}</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mt-3">{item.meta}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="grid sm:grid-cols-3 gap-4 mt-8">
            {[
              'AR/VR exploration',
              'Cinematic interface design',
              'AI + blockchain product thinking',
            ].map((item) => (
              <div key={item} className="p-4 border border-gray-800 rounded-lg text-sm text-gray-400 bg-white/[0.02]">
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
