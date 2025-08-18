import SmoothScroll from '../components/SmoothScroll'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Hero />
      <Services />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}