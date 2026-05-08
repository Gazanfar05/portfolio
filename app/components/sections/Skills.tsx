'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

type SkillGroup = {
  title: string;
  label: string;
  tone: string;
  skills: string[];
  description: string;
};

const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    label: 'Core Syntax Systems',
    tone: 'from-cyan-400/25 to-transparent',
    skills: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'Solidity'],
    description: 'Low-level logic, scripting, and contract development across multiple environments.',
  },
  {
    title: 'Frontend',
    label: 'Interactive Interfaces',
    tone: 'from-emerald-400/25 to-transparent',
    skills: ['React', 'Three.js', 'Framer Motion', 'GSAP', 'HTML', 'CSS'],
    description: 'Cinematic UI systems, motion-heavy interfaces, and immersive web experiences.',
  },
  {
    title: 'Backend',
    label: 'Application Systems',
    tone: 'from-violet-400/25 to-transparent',
    skills: ['Node.js', 'Flask', 'SQL', 'APIs', 'Git'],
    description: 'Server-side logic, API orchestration, and data-backed product workflows.',
  },
  {
    title: 'AI / ML',
    label: 'Model Intelligence',
    tone: 'from-amber-400/25 to-transparent',
    skills: ['TensorFlow', 'CNN', 'Jupyter Notebook', 'Heatmaps', 'Model Training'],
    description: 'Applied machine learning with a focus on explainability and practical deployment.',
  },
  {
    title: '3D + Product',
    label: 'Immersive Design',
    tone: 'from-slate-200/20 to-transparent',
    skills: ['Unity', 'Figma', 'Motion Design', 'UX Systems'],
    description: 'Designing immersive and cinematic experiences with product-level polish.',
  },
  {
    title: 'Blockchain',
    label: 'Trust Layers',
    tone: 'from-teal-400/25 to-transparent',
    skills: ['Smart Contracts', 'ethers.js', 'Wallet Integration', 'Web3'],
    description: 'Decentralized workflows, wallet-based flows, and on-chain interaction design.',
  },
];

const orbitSkills = [
  'Python', 'Java', 'C', 'C++', 'JavaScript', 'Solidity', 'React', 'Node.js',
  'SQL', 'Flask', 'TensorFlow', 'Three.js', 'Framer Motion', 'GSAP', 'Unity', 'Figma',
];

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState(skillGroups[0].title);

  const orbitNodes = useMemo(() => {
    return orbitSkills.map((skill, index) => {
      const angle = (index / orbitSkills.length) * Math.PI * 2 - Math.PI / 2;
      const ring = index % 2 === 0 ? 31 : 18;
      const x = 50 + Math.cos(angle) * ring;
      const y = 50 + Math.sin(angle) * ring;
      return { skill, x, y, delay: index * 0.08 };
    });
  }, []);

  const active = skillGroups.find((group) => group.title === activeGroup) ?? skillGroups[0];

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" id="skills">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/5 w-[28rem] h-[28rem] rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="space-y-4 mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-0.5 bg-gradient-to-r from-violet-400 to-transparent" />
            <h2 className="text-sm md:text-base font-light uppercase tracking-widest text-violet-300">
              Technical Laboratory
            </h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold">Orbiting Skill Systems</h3>
          <p className="text-gray-400 text-lg max-w-3xl">
            A futuristic skill lab built around floating tech nodes, concentric systems, and dynamic product thinking instead of flat progress bars.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 xl:gap-12 items-start">
          <motion.div
            className="relative min-h-[34rem] rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 md:p-6 overflow-hidden backdrop-blur-md"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(13,148,136,0.08),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(180,83,9,0.07),transparent_35%)]" />
            <div className="relative h-full min-h-[31rem]">
              <div className="absolute inset-4 rounded-[1.75rem] border border-dashed border-white/10" />
              <div className="absolute inset-10 rounded-full border border-teal-400/20" />
              <div className="absolute inset-20 rounded-full border border-white/10" />
              <motion.div
                className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-300/30 bg-black/35 shadow-[0_0_80px_rgba(13,148,136,0.18)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              >
                <div className="flex h-full w-full items-center justify-center text-center p-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-teal-200/80">System Core</p>
                    <p className="mt-3 text-2xl font-semibold text-white">16</p>
                    <p className="text-xs text-gray-400">Primary Tools</p>
                  </div>
                </div>
              </motion.div>

              {orbitNodes.map((node) => (
                <motion.div
                  key={node.skill}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: node.delay, duration: 0.45 }}
                  whileHover={{ scale: 1.08, y: -3 }}
                >
                  <div className="rounded-full border border-white/10 bg-black/45 px-4 py-2 text-sm text-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md">
                    {node.skill}
                  </div>
                </motion.div>
              ))}

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[26rem] w-[26rem] rounded-full border border-teal-400/10 animate-rotate-slow" />
            </div>
          </motion.div>

          <div className="space-y-5">
            <motion.div
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 md:p-6 backdrop-blur-md"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500">Active Group</p>
                  <h4 className="mt-2 text-2xl font-semibold text-white">{active.title}</h4>
                </div>
                <div className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.35em] text-gray-300">
                  Hover the lab
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">{active.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {active.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {skillGroups.map((group, index) => (
                <motion.button
                  key={group.title}
                  type="button"
                  onClick={() => setActiveGroup(group.title)}
                  className={`text-left rounded-[1.6rem] border p-5 transition-all ${activeGroup === group.title ? 'border-teal-400/40 bg-teal-400/[0.07]' : 'border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.04]'}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.35em] text-gray-500">{group.label}</p>
                      <h5 className="mt-2 text-lg font-semibold text-white">{group.title}</h5>
                    </div>
                    <span className={`h-3 w-3 rounded-full bg-gradient-to-br ${group.tone}`} />
                  </div>
                  <p className="mt-3 text-sm text-gray-400">{group.description}</p>
                </motion.button>
              ))}
            </div>

            <motion.div
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 md:p-6 backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500">Developer Stats</p>
                  <h4 className="mt-2 text-2xl font-semibold text-white">Operating Dashboard</h4>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-semibold text-teal-300">9.26</p>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-500">CGPA</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { label: 'Projects Built', value: '5+' },
                  { label: 'Technologies Used', value: '20+' },
                  { label: 'Leadership Roles', value: '2' },
                  { label: 'Hackathons', value: '2+' },
                  { label: 'Focus Areas', value: 'AI / Web3 / ARVR' },
                  { label: 'Current Mode', value: 'Build + Ship' },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-white/10 bg-black/30 p-4">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">{item.label}</p>
                    <p className="mt-3 text-sm font-semibold text-white">{item.value}</p>
                    <div className="mt-4 h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-[72%] bg-gradient-to-r from-teal-300 via-teal-400 to-amber-300" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
