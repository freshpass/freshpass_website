import AirportLoungeCaseStudy from '../../../components/AirportLoungeCaseStudy'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Airport Lounge Wi-Fi Case Study - FreshPass Enterprise Connectivity',
  description: 'How FreshPass solves international traveler connectivity challenges in airport lounges with enterprise-grade infrastructure integration.',
  robots: 'noindex, nofollow'
}

export default function AirportLoungeCase() {
  return <AirportLoungeCaseStudy />
}