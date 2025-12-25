'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PageHero from '../../../components/PageHero'

export default function SchoolShowcase() {
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
        title="Simple, Secure Guest Wi-Fi for Schools"
        subtitle="Clear guidance for non-technical staff with light technical reassurance"
        backgroundImage="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        showLogo={false}
      />

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-lg text-gray-green leading-relaxed space-y-8 font-text">
              <p>
                FreshPass transforms your school's guest Wi-Fi from a daily headache into a seamless experience. No more shared passwords, no more troubleshooting failed logins, no more security concerns about who has access to your network.
              </p>

              <div>
                <h3 className="text-2xl font-bold text-dark-gray mb-4 font-display">The Problem with Current Guest Wi-Fi</h3>
                <p>
                  Most schools rely on shared passwords ("SchoolGuest123") or Google sign-in systems that frequently fail. Shared passwords get passed around, never expire, and create security risks. Google logins confuse visitors and waste staff time troubleshooting.
                </p>
                <p className="mt-4">
                  <strong>FreshPass eliminates these problems entirely.</strong> Each visitor gets their own secure, time-limited access that expires automatically. No shared passwords, no failed logins, no security gaps.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-dark-gray mb-4 font-display">How It Works (Simple for Everyone)</h3>
                <p>
                  Visitors approach reception and scan a QR code on your tablet. Their device connects instantly—no typing passwords, no creating accounts, no technical knowledge required. It works on phones, tablets, and laptops equally well.
                </p>
                <p className="mt-4">
                  For your staff, it's even simpler: the system runs itself. No password management, no troubleshooting visitor connection issues, no explaining complicated login processes.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-dark-gray mb-4 font-display">Security Benefits You Can Trust</h3>
                <p>
                  FreshPass uses Meraki's enterprise-grade Identity PSK technology. This means:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li><strong>Individual credentials:</strong> Each visitor gets unique access—no shared passwords</li>
                  <li><strong>Automatic expiration:</strong> Access expires when the visit ends (you control the timing)</li>
                  <li><strong>Network isolation:</strong> Guests can't see or access school devices or data</li>
                  <li><strong>Audit trail:</strong> You know exactly who connected and when</li>
                  <li><strong>Instant revocation:</strong> Remove access immediately if needed</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-dark-gray mb-4 font-display">How Guests Use It</h3>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Visitor approaches reception</li>
                  <li>Scan FreshPass QR code on reception tablet</li>
                  <li>Device connects automatically</li>
                  <li>Laptop users enter displayed code or photograph it</li>
                </ol>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-dark-gray mb-4 font-display">Dramatically Reduced Staff Workload</h3>
                <p>
                  Your reception and IT staff will immediately notice the difference:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>No more "What's the Wi-Fi password?" questions</li>
                  <li>No troubleshooting failed Google logins</li>
                  <li>No explaining complex splash page processes</li>
                  <li>No worrying about shared passwords spreading to students</li>
                  <li>No manual password changes or resets</li>
                </ul>
                <p className="mt-4">
                  The system handles everything automatically, freeing your staff to focus on more important tasks.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-dark-gray mb-4 font-display">Perfect for All School Visitors</h3>
                <p>
                  Whether it's parents for meetings, Ofsted inspectors, visiting teachers, partner schools, maintenance contractors, or delivery drivers—everyone gets the same simple, secure experience.
                </p>
                <p className="mt-4">
                  <strong>No technical knowledge required.</strong> If they can use a smartphone camera, they can connect to your Wi-Fi. Visual guides and simple instructions are provided for your reception staff.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-dark-gray mb-4 font-display">Tablet Placement and Control</h3>
                <p>
                  The FreshPass tablet stays at your reception desk where staff can supervise its use. Position it out of students' reach to prevent misuse. The tablet is locked to the FreshPass application—visitors can't browse the internet or access other functions.
                </p>
              </div>

              <div className="bg-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-gray mb-3 font-display">Showcase School Benefits</h3>
                <p className="text-sm">
                  As a showcase school, the service may be provided at no cost with updates and monitoring included. Participation can be withdrawn at any time. No impact on student or staff networks.
                </p>
              </div>
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
              Ready to Simplify Guest Wi-Fi?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-text">
              Transform your school's guest Wi-Fi experience with secure, simple access that works for everyone.
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