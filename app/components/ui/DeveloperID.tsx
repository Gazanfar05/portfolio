'use client';

import React from 'react';

export default function DeveloperID() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6 w-80 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gray-400">// DEVELOPER ID</p>
          <h4 className="mt-2 text-lg font-semibold text-white">GAZANFAR MOIN</h4>
          <p className="text-xs text-gray-400 mt-1">CSE Student · Full Stack Developer</p>
          <p className="text-xs text-gray-400">AI/ML Enthusiast · Blockchain Developer</p>
        </div>

        <div className="ml-auto flex-shrink-0">
          <div className="h-16 w-16 rounded-xl border border-white/8 bg-gradient-to-br from-white/6 to-transparent flex items-center justify-center">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-300/30 to-amber-300/18 backdrop-blur-sm flex items-center justify-center text-sm">⚙️</div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-black/30 p-2 text-center">
          <p className="text-xs text-gray-300">STATUS</p>
          <p className="text-sm font-semibold text-teal-300">ONLINE</p>
        </div>
        <div className="rounded-lg bg-black/30 p-2 text-center">
          <p className="text-xs text-gray-300">CGPA</p>
          <p className="text-sm font-semibold text-amber-300">9.26</p>
        </div>
      </div>
    </div>
  );
}
