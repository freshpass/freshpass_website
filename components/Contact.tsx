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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display">Request a Demo</h2>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-xl text-cream mb-12 font-text">
            See FreshPass in action. Chat with us to schedule a personalized demo for your Wi-Fi infrastructure.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-gray-green p-8 rounded-2xl mb-12 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-freshpass-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-dark-gray" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 font-display">Start a Conversation</h3>
            <p className="mb-6 font-text">
              Click the chat bubble in the bottom right to discuss secure guest Wi-Fi needs. We'll help you understand how FreshPass works with Meraki, Mist, Aruba, and other enterprise platforms.
            </p>
            <div className="text-sm opacity-80 font-text space-y-1">
              <p>💬 Instant responses during business hours</p>
              <p>📅 Schedule demos directly through chat</p>
              <p>🔧 Technical questions welcome</p>
            </div>
            <div className="mt-6 pt-6 border-t border-cream border-opacity-20">
              <a 
                href="mailto:hello@freshpass.today"
                className="inline-flex items-center gap-2 text-freshpass-green hover:underline font-text"
              >
                <Mail className="w-4 h-4" />
                hello@freshpass.today
              </a>
            </div>
          </div>
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