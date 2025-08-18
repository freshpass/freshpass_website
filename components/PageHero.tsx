'use client'

import { motion } from 'framer-motion'

interface PageHeroProps {
  title: string
  subtitle: string
  backgroundImage?: string
  showLogo?: boolean
}

export default function PageHero({ title, subtitle, backgroundImage, showLogo = false }: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-cream overflow-hidden">
      {backgroundImage && (
        <motion.div 
          initial={{ scale: 1.1, filter: "blur(8px)" }}
          animate={{ scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        </motion.div>
      )}
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {showLogo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <img 
                src="/Icon-Dark.svg" 
                alt="FreshPass Logo" 
                className="w-16 h-16 mx-auto"
              />
            </div>
          </motion.div>
        )}
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-dark-gray mb-6 font-display">
            {title}
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <p className="text-xl md:text-2xl text-gray-green max-w-3xl mx-auto font-text drop-shadow-sm">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  )
}