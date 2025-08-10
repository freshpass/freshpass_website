'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-dark-gray font-display">The Problem</h2>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-xl text-gray-green leading-relaxed font-text">
            Shared Wi-Fi passwords are a security risk. FreshPass replaces them with unique, time-limited credentials for every device — stopping credential leaks before they happen. No captive portals. No weak guest passwords. Just a safer, cleaner way to connect.
            
            From cafés to classrooms, offices to hotels, FreshPass keeps networks locked tight while making access effortless. The future? Stale passwords disappear — and so do the threats they carry.
          </p>
        </motion.div>
      </div>
    </section>
  )
}