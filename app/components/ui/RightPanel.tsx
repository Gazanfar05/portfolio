'use client';

import React from 'react';
import DeveloperID from './DeveloperID';

const tech = [
  'React', 'Next.js', 'Node.js', 'Python', 'Solidity', 'MongoDB', 'MySQL', 'TensorFlow', 'Three.js', 'Docker'
];

export default function RightPanel() {
  return (
    <aside className="fixed right-8 top-24 z-20 hidden xl:block w-96">
      <div className="space-y-6">
        <DeveloperID />

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.55)]">
          <p className="text-xs uppercase tracking-widest text-gray-400">CORE TECH STACK</p>
          <div className="grid grid-cols-4 gap-3 mt-4">
            {tech.map((t) => (
              <div key={t} className="rounded-lg p-2 bg-black/30 flex items-center justify-center text-xs text-gray-200">{t}</div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md">
          <blockquote className="text-gray-200 italic text-sm">“Growth is not just about climbing higher, but building impact at every level.”</blockquote>
          <p className="mt-3 text-xs text-gray-400">— Gazanfar Moin</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-md flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest">SYSTEM STATUS</p>
            <p className="text-sm font-semibold text-teal-300">ALL SYSTEMS OPERATIONAL</p>
          </div>
          <div className="text-xs text-gray-400">BENGALURU, INDIA</div>
        </div>
      </div>
    </aside>
  );
}
