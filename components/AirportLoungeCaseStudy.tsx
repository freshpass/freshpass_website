'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PageHero from './PageHero'

export default function AirportLoungeCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6">
        <Link href="/" className="inline-block">
          <img 
            src="/Icon-Dark.svg" 
            alt="FreshPass Logo" 
            className="w-12 h-12 hover:scale-105 transition-transform"
          />
        </Link>
      </nav>

      <PageHero 
        title="Seamless Airport Lounge Wi-Fi Beyond SIM Limitations"
        subtitle="How FreshPass bridges connectivity gaps for international travelers using enterprise-grade infrastructure"
        backgroundImage="https://picsum.photos/2000/800?random=2"
        showLogo={false}
      />

      {/* Problem Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-8 font-display">
              The International Connectivity Crisis
            </h2>
            <div className="text-lg text-gray-green leading-relaxed space-y-6 font-text">
              <p>
                <strong>Airport lounges serve travelers caught between SIM providers and laptop connectivity needs.</strong> International business travelers often face expensive roaming charges, incompatible SIM cards, or devices without cellular capability entirely.
              </p>
              <p>
                Traditional lounge Wi-Fi relies on shared passwords posted on walls or printed cards—creating security vulnerabilities and poor user experience. Staff spend valuable time distributing credentials while travelers struggle with connection issues during critical work periods.
              </p>
              <p>
                <strong>FreshPass transforms lounge connectivity into a competitive advantage.</strong> Integrating seamlessly with enterprise infrastructure (Meraki, Aruba, Juniper Mist, Fortinet, Extreme Networks), FreshPass delivers individual, secure credentials through multiple touchpoints—from QR codes to e-paper displays.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Details */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-8 font-display">
              Challenges and Deployment Options
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-dark-gray mb-4 font-display">Critical Problems</h3>
                  <ul className="text-gray-green space-y-2 font-text">
                    <li>• Expensive international roaming charges</li>
                    <li>• Laptops without cellular connectivity</li>
                    <li>• Shared passwords compromise security</li>
                    <li>• Staff burden distributing credentials</li>
                    <li>• Poor experience during critical work time</li>
                  </ul>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-dark-gray mb-4 font-display">FreshPass Solutions</h3>
                  <ul className="text-gray-green space-y-2 font-text">
                    <li>• QR codes at check-in and seating areas</li>
                    <li>• Receipt-printed credentials at F&B outlets</li>
                    <li>• E-paper displays with physical buttons</li>
                    <li>• Enterprise infrastructure integration</li>
                    <li>• Time-limited individual credentials</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-8 font-display">
              FreshPass in Airport Lounges
            </h2>
            <div className="text-lg text-gray-green leading-relaxed space-y-6 font-text">
              <p>
                <strong>Check-in Integration:</strong> Lounge staff scan boarding passes and instantly generate personalized QR codes valid for the traveler's layover duration. No more hunting for passwords or asking staff—credentials are ready before travelers reach their seats.
              </p>
              <p>
                <strong>Unobtrusive E-Paper Displays:</strong> Strategically placed e-paper screens with simple buttons allow travelers to generate fresh credentials without staff interaction. Perfect for quiet work areas where QR code scanning might be disruptive. Credentials appear instantly and expire after use.
              </p>
              <p>
                <strong>F&B Receipt Integration:</strong> Coffee shops and restaurants within lounges print QR credentials directly on receipts. Travelers order their meal and receive Wi-Fi access simultaneously—transforming a transaction into a seamless connectivity experience.
              </p>
              <p>
                <strong>Enterprise Infrastructure Compatibility:</strong> FreshPass integrates with existing enterprise wireless systems—Meraki, Aruba, Juniper Mist, Fortinet, and Extreme Networks. No infrastructure replacement required, just enhanced credential management that works with your current investment.
              </p>
              <p>
                <strong>Traveler Lifeline:</strong> For international business travelers facing SIM compatibility issues or laptop connectivity gaps, FreshPass becomes essential infrastructure—ensuring productivity during critical layover periods.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-8 font-display">
              Outcomes
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-freshpass-green mb-2 font-display">Zero</div>
                  <div className="text-gray-green font-text">Staff Wi-Fi Requests</div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-freshpass-green mb-2 font-display">Instant</div>
                  <div className="text-gray-green font-text">Connectivity Access</div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-freshpass-green mb-2 font-display">Individual</div>
                  <div className="text-gray-green font-text">Secure Credentials</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-dark-gray text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
              Ready to Transform Lounge Connectivity?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-text">
              From check-in to departure gate—FreshPass ensures your travelers stay connected and productive throughout their journey.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Link 
                href="/#contact"
                className="inline-block bg-freshpass-green text-dark-gray px-8 py-4 rounded-full text-lg font-medium hover:bg-freshpass-green-70 transition-colors font-text"
              >
                Get in Touch
              </Link>
              <Link 
                href="/"
                className="inline-block border border-gray-300 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-green transition-colors font-text"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}