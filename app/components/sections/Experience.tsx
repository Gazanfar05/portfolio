'use client';

import React from 'react';
import { motion } from 'framer-motion';

type ExperienceItem = {
  year: string;
  title: string;
  role: string;
  description: string;
  achievements: string[];
  icon: string;
};

const experiences: ExperienceItem[] = [
  {
    year: 'Sept 2025 – Present',
    title: 'ARVR HUB',
    role: 'Tech Team Lead',
    description: 'Leading immersive AR/VR project development and coordinating technical workflows for emerging-tech initiatives.',
    achievements: [
      'Led development of immersive AR/VR projects',
      'Worked on innovative emerging-tech ideas',
      'Managed technical workflows and implementations',
    ],
    icon: '◉',
  },
  {
    year: 'July 2025 – Present',
    title: 'Rotaract Club of Bangalore Golden Rock',
    role: 'International Service Director',
    description: 'Coordinating sustainability-focused programs and representing the club in international service contexts.',
    achievements: [
      'Chaired Trek to Educate 3.0',
      'Coordinated multiple collaborating clubs',
      'Represented the club at an international sustainability event',
    ],
    icon: '◆',
  },
  {
    year: '2024 – Present',
    title: 'B.M.S. Institute of Technology and Management',
    role: 'Computer Science Engineering',
    description: 'Building a strong foundation in software engineering, systems thinking, and emerging technologies.',
    achievements: [
      'Maintained a 9.26 CGPA',
      'Focused on AI/ML, blockchain, and immersive interfaces',
      'Built projects across web, systems, and AR/VR domains',
    ],
    icon: '△',
  },
  {
    year: 'Schooling',
    title: 'St. Thomas Boys School',
    role: 'Academic Foundation',
    description: 'Completed schooling with strong academic results that prepared the path for technical specialization.',
    achievements: [
      'Class 12 — 89.7%',
      'Class 10 — 92%',
    ],
    icon: '✦',
  },
];

export default function Experience() {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" id="experience">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[26rem] h-[26rem] bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/5 w-[24rem] h-[24rem] bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="absolute left-1/2 top-24 bottom-24 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="space-y-4 mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-0.5 bg-gradient-to-r from-green-400 to-transparent" />
            <h2 className="text-sm md:text-base font-light uppercase tracking-widest text-green-300">
              Journey Map
            </h2>
          </div>
          <h3 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-[0.95]">Experience & Growth</h3>
          <p className="text-gray-400 text-lg max-w-3xl">
            A cinematic timeline of the roles, responsibilities, and milestones that shaped the portfolio.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-12 top-24 bottom-24 w-0.5 bg-gradient-to-b from-transparent via-green-400/40 to-transparent" />

          <div className="space-y-8 md:space-y-10 pl-32">
            {experiences.map((experience, idx) => (
              <motion.div
                key={experience.title}
                className="relative"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.06 }}
              >
                <div className="absolute left-0 top-2 lg:left-8">
                  <div className="flex items-center flex-col">
                    <div className="h-10 w-10 rounded-full border border-green-400/40 bg-black/30 flex items-center justify-center text-green-300 shadow-[0_6px_20px_rgba(34,197,94,0.06)]">{experience.icon}</div>
                    {idx !== experiences.length - 1 && (
                      <div className="h-24 w-px bg-gradient-to-b from-green-400/60 to-transparent mt-3" />
                    )}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-7 backdrop-blur-md hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.35em] text-gray-400">{experience.year}</p>
                      <h4 className="mt-2 text-2xl font-semibold text-white">{experience.title}</h4>
                      <p className="mt-2 text-sm uppercase tracking-[0.3em] text-teal-300">{experience.role}</p>
                    </div>
                    <div className="ml-4 text-sm text-gray-300">{/* right small icon area */}</div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-gray-400">{experience.description}</p>

                  <div className="mt-5 grid gap-3">
                    {experience.achievements.map((ach) => (
                      <div key={ach} className="grid grid-cols-[18px_1fr] gap-3 items-start text-sm text-gray-300">
                        <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_16px_rgba(180,83,9,0.12)]" />
                        <span className="leading-6">{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 grid md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          {[
            { label: 'CGPA', value: '9.26' },
            { label: 'Projects', value: '5+' },
            { label: 'Leadership Roles', value: '2' },
            { label: 'Hackathons', value: '2+' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.35em] text-gray-500">{stat.label}</p>
              <p className="mt-3 text-3xl font-semibold text-white">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
