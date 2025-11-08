'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PageHero from './PageHero'

export default function CaseStudyContent() {
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
        title="Frictionless Hotel Wi-Fi With Secure QR Codes"
        subtitle="How FreshPass enables seamless Wi-Fi onboarding in hospitality using Meraki IPSK—no RADIUS required"
        backgroundImage="https://picsum.photos/2000/800?random=1"
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
              The Shared Password Security Problem
            </h2>
            <div className="text-lg text-gray-green leading-relaxed space-y-6 font-text">
              <p>
                <strong>Shared Wi-Fi passwords fundamentally break encryption.</strong> When everyone uses "HotelGuest123", WPA2/WPA3 encryption becomes meaningless—any guest can decrypt any other guest's traffic using the same shared key.
              </p>
              <p>
                Hotels face an impossible choice: secure individual credentials (complex RADIUS setup) or convenient shared passwords (zero real security). Captive portals attempt a middle ground but fail frequently, frustrating guests and staff alike.
              </p>
              <p>
                <strong>FreshPass solves this with individual credentials that are simple to deploy.</strong> Using Meraki's IPSK feature (no RADIUS required), each guest receives their own unique, time-limited Wi-Fi credentials via branded QR codes—managed through an intuitive staff interface.
              </p>
              <p className="text-sm italic text-gray-500">
                Note: This solution is currently built on Meraki IPSK. A fully working Juniper Mist implementation also exists. EnGenius support is planned when API access becomes available.
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
              Challenges and Use Cases
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-dark-gray mb-4 font-display">Problems</h3>
                  <ul className="text-gray-green space-y-2 font-text">
                    <li>• Shared passwords reused indefinitely</li>
                    <li>• Captive portals prone to failure</li>
                    <li>• Staff manually distributing credentials</li>
                    <li>• No branding or guest experience control</li>
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
                  <h3 className="text-xl font-semibold text-dark-gray mb-4 font-display">Deployment Scenarios</h3>
                  <ul className="text-gray-green space-y-2 font-text">
                    <li>• Lobby tablets generating per-guest QR codes</li>
                    <li>• Printed QR codes on café receipts</li>
                    <li>• In-room TV displays with rotating credentials</li>
                    <li>• Admin dashboard with expiration controls</li>
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
              FreshPass in Hospitality
            </h2>
            <div className="text-lg text-gray-green leading-relaxed space-y-6 font-text">
              <p>
                <strong>Front Desk & Lobby:</strong> A branded tablet invites guests to tap and instantly generate a personalized QR code. Each code contains unique Wi-Fi credentials valid for their stay duration. The QR code expires visually after 10–15 seconds, preventing screenshots or sharing, but the underlying credentials remain active for the configured period (typically 4-24 hours).
              </p>
              <p>
                <strong>Café & Restaurant Integration:</strong> Staff can instantly print QR credentials directly on receipts, eliminating the "What's the Wi-Fi password?" conversation entirely. Guests simply scan their receipt to connect. This transforms a staff burden into a branded touchpoint that enhances the customer experience.
              </p>
              <p>
                <strong>In-Room Experience:</strong> Smart TVs can display rotating QR codes that refresh every 15-20 minutes, providing the ultimate in security. Guests scan once per device and stay connected throughout their visit, while the dynamic rotation prevents credential sharing between rooms.
              </p>
              <p>
                <strong>Administrative Control:</strong> Hotel managers set credential lifespans, monitor active connections, and can instantly revoke access if needed. The system integrates seamlessly with existing Meraki infrastructure without requiring complex RADIUS servers or network changes.
              </p>
              <p className="text-sm italic text-gray-500">
                FreshPass currently supports full admin access from desktop. Dedicated tablet and mobile staff interfaces are in development.
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
                  <div className="text-3xl font-bold text-freshpass-green mb-2 font-display">0</div>
                  <div className="text-gray-green font-text">Shared Passwords</div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-freshpass-green mb-2 font-display">100%</div>
                  <div className="text-gray-green font-text">Branded Guest Experience</div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-freshpass-green mb-2 font-display">Dynamic</div>
                  <div className="text-gray-green font-text">Credential Expiry Management</div>
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
              Ready to Modernize Guest Wi-Fi?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-text">
              Whether at reception, in-room, or at the café counter—FreshPass makes Wi-Fi access secure, scannable, and simple.
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