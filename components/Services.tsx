'use client'

import { motion } from 'framer-motion'
import { Palette, Code, Zap } from 'lucide-react'

const services = [
  {
    icon: Zap,
    title: 'Fast',
    description: 'Instant access without captive portals or complex setup',
  },
  {
    icon: Code,
    title: 'Simple',
    description: 'One-click connection for users, easy deployment for admins',
  },
  {
    icon: Palette,
    title: 'Secure',
    description: 'Unique, time-limited credentials eliminate password sharing risks',
  },
]

export default function Services() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
            Why FreshPass?
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const getInitialPosition = () => {
              if (index === 0) return { opacity: 0, x: -100 }; // Left card slides from left
              if (index === 2) return { opacity: 0, x: 100 };  // Right card slides from right
              return { opacity: 0, y: 30 }; // Center card fades in from below
            };
            
            return (
              <motion.div
                key={service.title}
                initial={getInitialPosition()}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                whileHover={{ y: -10 }}
              >
              <div className="text-center p-8 rounded-2xl hover:shadow-xl transition-shadow">
              <service.icon className="w-12 h-12 mx-auto mb-6 text-slate-700" />
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">
                {service.title}
              </h3>
              <p className="text-slate-600">{service.description}</p>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
