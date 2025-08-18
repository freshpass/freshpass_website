'use client'

import { motion } from 'framer-motion'
import { Mail, X, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-dark-gray text-cream">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display">Get Started</h2>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-xl text-cream mb-12 font-text">
            Ready to secure your network? Contact us to learn more about FreshPass deployment.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <a 
            href="mailto:hello@freshpass.today"
            className="inline-flex items-center gap-3 bg-freshpass-green text-dark-gray px-8 py-4 rounded-full text-lg font-medium hover:bg-freshpass-green-70 transition-colors mb-12 font-text"
          >
            <Mail className="w-5 h-5" />
            hello@freshpass.today
          </a>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex justify-center gap-6">
            <motion.div whileHover={{ scale: 1.2, y: -5 }}>
              <a
                href="https://x.com/freshpasstoday"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-green hover:border-freshpass-green transition-colors"
              >
                <X className="w-6 h-6" />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, y: -5 }}>
              <a
                href="https://github.com/freshpass"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-green hover:border-freshpass-green transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, y: -5 }}>
              <a
                href="https://www.linkedin.com/in/petermears"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-green hover:border-freshpass-green transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}