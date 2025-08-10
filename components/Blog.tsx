'use client'

// Shababu Blog Component
import { motion } from 'framer-motion'

const posts = [
  {
    title: 'The Future of Web Design',
    excerpt: 'Exploring emerging trends and technologies shaping digital experiences.',
    date: 'Coming Soon'
  },
  {
    title: 'Building Scalable Applications',
    excerpt: 'Best practices for creating robust, maintainable web applications.',
    date: 'Coming Soon'
  },
  {
    title: 'User Experience Principles',
    excerpt: 'Core principles that drive exceptional user experiences.',
    date: 'Coming Soon'
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">Insights</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
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