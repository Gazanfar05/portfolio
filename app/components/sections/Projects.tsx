 'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  details: string[];
  note: string;
  actionLabel: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Blockchain Ticketing System',
      description: 'Secure blockchain-based ticketing system built with smart contract logic and a React frontend.',
      tags: ['Blockchain', 'React', 'Web3', 'Solidity'],
      details: [
        'Smart contract integration',
        'Wallet authentication',
        'QR-code ticket generation',
        'One-ticket-per-user logic',
        'Interactive frontend using React + ethers.js',
      ],
      note: 'A trust-first event platform designed to prevent ticket fraud and simplify verification.',
      actionLabel: 'Launch Project',
    },
    {
      id: 2,
      title: 'Brain Tumor Detection using CNN',
      description: 'AI healthcare system for tumor classification with an interpretable CNN pipeline and reporting workflow.',
      tags: ['AI', 'CNN', 'Flask', 'Healthcare'],
      details: [
        'CNN model with 88% accuracy',
        'Classified tumors across 4 categories',
        'Trained on 9,641+ MRI scans',
        'Heatmap visualization for interpretability',
        'Flask-based analysis system',
        'Authentication + PDF report generation',
      ],
      note: 'Built to make medical image analysis feel practical, transparent, and accessible.',
      actionLabel: 'Open Simulation',
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Responsive weather application with live data fetching and dynamic UI states.',
      tags: ['Frontend', 'API', 'JavaScript'],
      details: [
        'Real-time weather fetching',
        'OpenWeatherMap API integration',
        'Dynamic weather-based UI',
        'Error handling + loading states',
        'Responsive design',
      ],
      note: 'Focused on fast feedback, smooth interactions, and clear weather state visualization.',
      actionLabel: 'View System',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Interactive portfolio with layered animations, theme switching, and responsive architecture.',
      tags: ['Frontend', 'UI/UX', 'Animation'],
      details: [
        'Interactive UI',
        'Dynamic animations',
        'Theme switching',
        'Smooth transitions',
        'Responsive architecture',
      ],
      note: 'This experience-first portfolio is designed to feel like a cinematic product launch.',
      actionLabel: 'Access Module',
    },
    {
      id: 5,
      title: 'Java Task Manager',
      description: 'Command-line task manager built with OOP principles and a clean modular structure.',
      tags: ['Java', 'OOP'],
      details: [
        'Command-line task manager',
        'OOP principles implementation',
        'Modular architecture',
        'Task tracking system',
        'Scalable structure',
      ],
      note: 'A compact systems project focused on structure, clarity, and maintainability.',
      actionLabel: 'Open Simulation',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" id="projects">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-transparent" />
            <h2 className="text-sm md:text-base font-light uppercase tracking-widest text-amber-400">
              Mission Control
            </h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold">Main Portfolio Assets</h3>
        </motion.div>

        {/* Projects grid (balanced) */}
        <motion.div
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <div key={project.id} className="col-span-1">
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                details={project.details}
                actionLabel={project.actionLabel}
              />
            </div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800/50 border border-gray-700 text-white rounded hover:border-amber-500/30 hover:bg-gray-800 transition-all"
          >
            GitHub Links Available in Contact <span className="text-amber-400">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
