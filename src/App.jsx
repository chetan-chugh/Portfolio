import useReveal from './hooks/useReveal'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'

export default function App() {
  useReveal()

  return (
    <>
      {/* Noise texture overlay */}
      <div className="fixed inset-0 noise-overlay pointer-events-none z-[1] opacity-[0.025]" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        {/* <Contact /> */}
      </main>

      <Footer />
    </>
  )
}