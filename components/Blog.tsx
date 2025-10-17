'use client'

//  Blog Component
import { motion } from 'framer-motion'

const posts = [
  {
    title: 'WPA3: Still Not Enough for Enterprise Security',
    excerpt: 'While WPA3 improves on WPA2, shared credentials remain a fundamental vulnerability. Time-limited access is the real solution.',
    date: 'March 15, 2024'
  },
  {
    title: 'Wi-Fi 7 vs 5G: The Connectivity Battle Heats Up',
    excerpt: 'Wi-Fi 7 promises 46Gbps speeds, but 5G is everywhere. Which technology will dominate the next refresh cycle?',
    date: 'March 12, 2024'
  },
  {
    title: 'Why Cafés Still Need Wi-Fi in the 5G Era',
    excerpt: 'Despite ubiquitous cellular, customers expect free Wi-Fi. But shared passwords create liability nightmares for businesses.',
    date: 'March 10, 2024'
  },
  {
    title: 'The Hidden Cost of Guest Network Breaches',
    excerpt: 'A single compromised guest password can expose your entire network. Learn why isolation isn\'t enough.',
    date: 'March 8, 2024'
  },
  {
    title: 'Enterprise Wi-Fi: Speed vs Security Trade-offs',
    excerpt: 'Faster speeds mean nothing if your network is compromised. How to achieve both performance and protection.',
    date: 'March 5, 2024'
  },
  {
    title: 'Captive Portals: User Experience Nightmare',
    excerpt: 'Nobody likes captive portals, but are they necessary? Exploring seamless authentication alternatives.',
    date: 'March 1, 2024'
  }
]

export default function Blog() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">Wi-Fi Security Insights</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <article className="p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">{post.title}</h3>
              <p className="text-slate-600 mb-4">{post.excerpt}</p>
              <span className="text-sm text-slate-500">{post.date}</span>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}