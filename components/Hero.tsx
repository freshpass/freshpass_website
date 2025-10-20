'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-6">
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              <img 
                src="/Icon-Dark.svg" 
                alt="FreshPass Logo" 
                className="w-24 h-24 md:w-32 md:h-32 mb-4 mx-auto block"
              />
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-bold text-dark-gray mb-6 font-display">
              FreshPass
            </h1>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-gray-green mb-8 max-w-2xl mx-auto font-text">
            Fast. Simple. Secure. Today. Everyday
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button 
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-freshpass-green text-dark-gray px-8 py-4 rounded-full text-lg font-medium hover:bg-freshpass-green-70 transition-colors font-text"
          >
            Request Demo
          </button>
        </motion.div>
      </div>
    </section>
  )
}