'use client';

import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: 'EmpireX',
    subtitle: '3rd Place — Entrepreneurship Cell of BMSIT&M',
    detail: 'Built and presented a solution under competitive pressure.',
    badge: '🏆',
  },
  {
    title: 'Smart India Hackathon',
    subtitle: 'Reached Round 2 — 2024',
    detail: 'Advanced through a national-scale innovation challenge.',
    badge: '🚀',
  },
  {
    title: 'Football Tournament',
    subtitle: 'Inter-College Winner',
    detail: 'Won the tournament hosted by CMR Institute of Technology and Management.',
    badge: '⚽',
  },
];

export default function Achievements() {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-amber-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-transparent" />
            <h2 className="text-sm md:text-base font-light uppercase tracking-widest text-amber-400">Achievement Archive</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold">Unlocked Milestones</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="relative overflow-hidden rounded-2xl border border-gray-800 bg-white/[0.03] p-6 md:p-7"
              initial={{ opacity: 0, y: 24, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.01 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-teal-500/5 opacity-0 hover:opacity-100 transition-opacity" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{achievement.badge}</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-gray-500">Achievement</span>
                </div>
                <h4 className="text-2xl font-semibold text-white">{achievement.title}</h4>
                <p className="text-sm text-amber-400 uppercase tracking-widest">{achievement.subtitle}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{achievement.detail}</p>
                <div className="flex items-center gap-2 pt-2 text-xs text-gray-500">
                  <span className="inline-flex h-2 w-2 rounded-full bg-amber-400" />
                  Unlock status complete
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}