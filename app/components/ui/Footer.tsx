'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold">GAZANFAR MOIN</h3>
            <p className="text-gray-500 text-sm">
              Computer Science Engineering student building immersive systems across AI, blockchain, and AR/VR.
            </p>
            <div className="flex gap-4 pt-4">
              {[
                { icon: '𝕏', href: 'https://twitter.com/gazanfar_dev' },
                { icon: '🐙', href: 'https://github.com/gazanfar' },
                { icon: '💼', href: 'https://linkedin.com/in/gazanfar' },
                { icon: '📧', href: 'mailto:hello@gazanfar.dev' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-teal-400 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              {[
                { label: 'Home', href: '#' },
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Experience', href: '#experience' },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              {[
                { label: 'Email', href: 'mailto:gazanfarmoin05@gmail.com' },
                { label: 'GitHub', href: '#contact' },
                { label: 'LinkedIn', href: '#contact' },
                { label: 'Contact', href: '#contact' },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>© {currentYear} Gazanfar Moin. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Crafted with</span>
            <span className="text-pink-400">♥</span>
            <span>using React, Next.js & Three.js</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
