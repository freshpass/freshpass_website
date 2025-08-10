'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-cream py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-freshpass-green text-xl font-bold mb-4 font-display">FreshPass</h3>
            <p className="text-sm">
              Fast. Simpler. Secure.
            </p>
          </div>
          
          <div>
            <h4 className="text-freshpass-green font-semibold mb-4 font-display">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-freshpass-green transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-freshpass-green transition-colors">Terms of Service</Link></li>
              <li><Link href="/legal" className="hover:text-freshpass-green transition-colors">Legal Information</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-freshpass-green font-semibold mb-4 font-display">Contact</h4>
            <p className="text-sm">
              <a href="mailto:hello@freshpass.today" className="hover:text-freshpass-green transition-colors">
                hello@freshpass.today
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-green pt-8 text-sm text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 FreshPass Today. All rights reserved.</p>
            <p>Secure Wi-Fi Solutions</p>
          </div>
        </div>
      </div>
    </footer>
  )
}