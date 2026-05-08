'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-800/50' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-xl font-bold tracking-tighter hover:text-teal-400 transition-colors flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-teal-400/20 to-amber-300/10 flex items-center justify-center border border-white/6">G</div>
          GAZANFAR
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3 bg-white/[0.02] border border-white/6 rounded-full px-4 py-2">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="text-sm text-gray-300 hover:text-teal-300 px-3 py-1 rounded-full transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <motion.a
            href="#contact"
            className="magnetic inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-teal-400/10 to-amber-300/6 border border-teal-400/20 text-teal-300 rounded-full text-sm"
            whileHover={{ scale: 1.03 }}
          >
            Connect +
          </motion.a>
          <motion.a
            href="#projects"
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/8 bg-white/[0.02] text-gray-200 rounded-full text-sm"
          >
            View on GitHub ↗
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-full h-full">
            <motion.div
              className="absolute w-full h-0.5 bg-white"
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute w-full h-0.5 bg-white top-1/2 -translate-y-1/2"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute w-full h-0.5 bg-white bottom-0"
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-black/95 backdrop-blur-md border-b border-gray-800/50 p-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-4">
            {navItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                className="block text-sm text-gray-400 hover:text-teal-400 transition-colors"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 10 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="block px-4 py-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 rounded text-sm text-center hover:bg-teal-500/20 transition-all mt-4"
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.05 }}
            >
              Connect
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
