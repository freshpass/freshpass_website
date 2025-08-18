import CaseStudyContent from '../../../components/CaseStudyContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hotel Wi-Fi Case Study - FreshPass Secure Guest Access',
  description: 'How FreshPass transforms hotel guest Wi-Fi with secure QR codes using Meraki IPSK. No shared passwords, no captive portals.',
  robots: 'noindex, nofollow'
}

export default function HotelWiFiCase() {
  return <CaseStudyContent />
}