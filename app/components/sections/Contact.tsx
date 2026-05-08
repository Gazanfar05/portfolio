'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);

    setIsSubmitting(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" id="contact">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="space-y-4 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-pink-400" />
            <h2 className="text-sm md:text-base font-light uppercase tracking-widest text-pink-400">
              Communication Protocol
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-pink-400" />
          </div>
          <h3 className="text-4xl md:text-5xl font-bold">Contact the System</h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Open to collaborations, internships, and product ideas. Send a transmission and let’s build something futuristic.
          </p>
        </motion.div>

        {/* Contact info + Form */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Quick contacts */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-6">Direct Channels</h3>

              {[
                {
                  icon: '📧',
                  label: 'Email',
                  value: 'gazanfarmoin05@gmail.com',
                  href: 'mailto:gazanfarmoin05@gmail.com',
                },
                {
                  icon: '💼',
                  label: 'LinkedIn Profile',
                  value: 'Available on request',
                },
                {
                  icon: '🐙',
                  label: 'GitHub Profile',
                  value: 'Available on request',
                },
              ].map((item, i) => {
                const Wrapper = item.href ? motion.a : motion.div;
                return (
                  <Wrapper
                    key={i}
                    {...(item.href ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-start gap-4 p-4 border border-gray-800 rounded-lg hover:border-pink-400/30 transition-all"
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 uppercase tracking-wider">{item.label}</p>
                      <p className="text-white font-medium group-hover:text-pink-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                    <span className="text-gray-500 group-hover:text-pink-400 transition-colors">→</span>
                  </Wrapper>
                );
              })}
            </div>

            {/* Response time */}
            <div className="p-6 bg-pink-500/5 border border-pink-500/20 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Average Response Time</p>
              <p className="text-2xl font-bold text-pink-400">
                <span className="inline-block w-2 h-2 bg-pink-400 rounded-full mr-2 animate-pulse" />
                &lt;24 hours
              </p>
              <p className="text-xs text-gray-500 mt-2">Usually faster during business hours</p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div variants={itemVariants} className="relative">
            {/* Form background */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 rounded-lg pointer-events-none" />

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative z-10 space-y-4 p-6 md:p-8 border border-gray-800 rounded-lg"
            >
              {/* Name */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-pink-400 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </motion.div>

              {/* Email */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-pink-400 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </motion.div>

              {/* Subject */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-pink-400 focus:outline-none transition-colors"
                  placeholder="Internship, collaboration, or project idea"
                />
              </motion.div>

              {/* Message */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-pink-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me what you want to build, ship, or explore..."
                />
              </motion.div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || submitted}
                className="w-full px-6 py-3 bg-pink-500/10 border border-pink-500/30 text-pink-400 font-medium rounded-lg hover:bg-pink-500/20 hover:border-pink-500/50 disabled:opacity-50 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="inline-block w-4 h-4 border-2 border-pink-400 border-t-transparent rounded-full animate-spin" />
                    Transmitting...
                  </span>
                ) : submitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <span>✓ Transmission Sent</span>
                  </span>
                ) : (
                  <span>Send Transmission</span>
                )}
              </motion.button>

              {/* Success message */}
              {submitted && (
                <motion.div
                  className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  Thanks for reaching out. I’ll respond as soon as possible.
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
