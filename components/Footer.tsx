'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">FreshPass</h3>
            <p className="text-sm">
              Fast. Simpler. Secure.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/legal" className="hover:text-white transition-colors">Legal Information</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm">
              <a href="mailto:hello@freshpass.today" className="hover:text-white transition-colors">
                hello@freshpass.today
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 text-sm text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 FreshPass Today. All rights reserved.</p>
            <p>Secure Wi-Fi Solutions</p>
          </div>
        </div>
      </div>
    </footer>
  )
}