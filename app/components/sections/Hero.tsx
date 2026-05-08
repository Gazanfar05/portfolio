'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [pointer, setPointer] = useState({ x: 50, y: 36 });

  const roles = [
    'CSE Student',
    'Full Stack Developer',
    'Blockchain Developer',
    'AI/ML Enthusiast',
    'AR/VR Tech Lead',
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden pt-24 pb-20 md:pt-28"
      id="home"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setPointer({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
        });
      }}
      onMouseLeave={() => setPointer({ x: 50, y: 36 })}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 transition-[background] duration-300"
          style={{
            background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(13,148,136,0.12), transparent 24%), radial-gradient(circle at 82% 34%, rgba(180,83,9,0.09), transparent 20%)`,
          }}
        />
        <div className="absolute top-0 left-1/4 w-[32rem] h-[32rem] bg-teal-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/5 w-[28rem] h-[28rem] bg-amber-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" />
        <div className="absolute inset-0 opacity-6">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(13, 148, 136, 0.1) 25%, rgba(13, 148, 136, 0.1) 26%, transparent 27%, transparent 74%, rgba(13, 148, 136, 0.1) 75%, rgba(13, 148, 136, 0.1) 76%, transparent 77%, transparent),
                              linear-gradient(90deg, transparent 24%, rgba(13, 148, 136, 0.1) 25%, rgba(13, 148, 136, 0.1) 26%, transparent 27%, transparent 74%, rgba(13, 148, 136, 0.1) 75%, rgba(13, 148, 136, 0.1) 76%, transparent 77%, transparent)`,
            backgroundSize: '56px 56px',
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-[1.12fr_0.88fr] gap-10 xl:gap-14 items-start lg:items-start min-h-[calc(100vh-6rem)]"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
        >
          <div className="space-y-8 lg:space-y-10 text-left">
            <motion.div
              className="text-xs md:text-sm tracking-[0.45em] text-teal-400 uppercase font-light"
              variants={itemVariants}
            >
              {'> Initializing Digital Identity...'}
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 max-w-3xl">
              <div className="flex items-center gap-3 text-xs md:text-sm uppercase tracking-[0.3em] text-gray-500">
                <span className="inline-flex h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                System online
              </div>
              <h1 className="text-5xl sm:text-6xl xl:text-[5.75rem] font-bold tracking-[-0.05em] leading-[0.9] xl:whitespace-nowrap">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3f0ea] to-slate-400">
                  GAZANFAR MOIN
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl leading-relaxed">
                Computer Science Engineering student passionate about immersive UI/UX, AI systems, blockchain applications, and futuristic digital experiences.
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3 max-w-3xl pt-2">
                {roles.map((role, index) => (
                  <span
                    key={role}
                    className="px-3 py-1 text-xs md:text-sm border border-gray-700/80 text-gray-300 rounded-full bg-white/5 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    {role}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 px-7 py-4 bg-teal-500/10 border border-teal-500/30 text-teal-300 rounded-lg hover:bg-teal-500/18 hover:border-teal-400/50 transition-all"
                >
                  <span>Inspect Missions</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-4 border border-gray-700 bg-white/[0.03] text-gray-200 rounded-lg hover:border-gray-500 hover:bg-white/[0.06] transition-all"
                >
                  Contact Terminal
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 max-w-3xl">
              {[
                { label: 'CGPA', value: '9.26' },
                { label: 'Projects', value: '5+' },
                { label: 'Leadership', value: '2' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-gray-800 bg-white/[0.03] p-4 md:p-5 backdrop-blur-sm">
                  <p className="text-2xl md:text-4xl font-semibold text-white">{stat.value}</p>
                  <p className="text-[11px] md:text-xs uppercase tracking-[0.3em] text-gray-500 mt-2">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative lg:mt-6">
            <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_0_80px_rgba(13,148,136,0.08)] backdrop-blur-md" />
            <div className="relative overflow-hidden rounded-[2rem] p-5 md:p-6 lg:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(13,148,136,0.08),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(180,83,9,0.08),transparent_38%)]" />

              <div className="relative grid gap-4 md:gap-5">
                <div className="rounded-2xl border border-white/10 bg-black/35 p-5 md:p-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-gray-500 mb-4">
                    <span>Identity Panel</span>
                    <span className="text-teal-300">Live</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-[0.35em]">Name</p>
                      <p className="text-white text-2xl font-semibold mt-2">Gazanfar Moin</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        ['Focus', 'AI / Blockchain / ARVR'],
                        ['Mode', 'Build / Learn / Ship'],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">{label}</p>
                          <p className="text-sm text-gray-200 mt-2">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: 'System Status', value: 'Online', tone: 'text-teal-300' },
                    { title: 'Active Missions', value: '5', tone: 'text-amber-300' },
                    { title: 'Toolchain', value: '16 Core Tools', tone: 'text-slate-200' },
                    { title: 'Next Target', value: 'Immersive Systems', tone: 'text-white' },
                  ].map((item) => (
                    <div key={item.title} className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">{item.title}</p>
                      <p className={`text-lg font-semibold mt-3 ${item.tone}`}>{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-teal-400/20 bg-teal-400/[0.06] p-4 md:p-5">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-teal-200/80 mb-3">
                    <span>Developer Readiness</span>
                    <span>92%</span>
                  </div>
                  <div className="h-2 rounded-full bg-black/35 overflow-hidden">
                    <div className="h-full w-[92%] bg-gradient-to-r from-teal-300 via-teal-400 to-amber-300" />
                  </div>
                  <p className="text-xs text-gray-400 mt-3">
                    Focused on cinematic UI, AI systems, blockchain workflows, and AR/VR-led product thinking.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-gray-500">
          <span className="inline-flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          Scroll to navigate the system
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
