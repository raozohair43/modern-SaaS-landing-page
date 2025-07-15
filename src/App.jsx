import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Pricing from './components/sections/Pricing'
import Testimonials from './components/sections/Testimonials'
import CTA from './components/sections/CTA'
import Footer from './components/layout/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
