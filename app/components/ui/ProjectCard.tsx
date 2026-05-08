'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  title: string;
  description: string;
  tags: string[];
  details: string[];
  actionLabel?: string;
};

export default function ProjectCard({ title, description, tags, details, actionLabel = 'Explore' }: Props) {
  return (
    <motion.article
      className="relative group perspective-1000"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-8 transform-gpu will-change-transform"
        whileHover={{ rotateX: -6, rotateY: 6, translateZ: 0 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute -top-6 -right-6 opacity-80">
          <div className="rounded-full bg-gradient-to-br from-teal-400 to-amber-300 p-3 shadow-[0_12px_30px_rgba(13,148,136,0.08)] text-sm">UI</div>
        </div>

        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-black/30 border border-white/6 text-gray-200">
              {t}
            </span>
          ))}
        </div>

        <div className="grid gap-2">
          {details.slice(0, 3).map((d) => (
            <div key={d} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(180,83,9,0.22)]" />
              <span>{d}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <a href="#contact" className="magnetic inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-sm">
            {actionLabel}
          </a>
          <div className="text-xs text-gray-500">Live</div>
        </div>
      </motion.div>
    </motion.article>
  );
}
