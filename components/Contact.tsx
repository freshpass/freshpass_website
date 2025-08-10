'use client'

import { motion } from 'framer-motion'
import { Mail, Twitter, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Get Started</h2>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-xl text-slate-300 mb-12">
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
            className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-100 transition-colors mb-12"
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
            {[Twitter, Github, Linkedin].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, y: -5 }}
              >
                <a
                  href="#"
                  className="p-3 rounded-full border border-slate-700 hover:border-slate-500 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}