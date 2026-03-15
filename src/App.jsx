import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Services from "./components/sections/Services"
import Practitioners from "./components/sections/Practitioners"
import Training from "./components/sections/Training"
import TestimonialsPreview from "./components/sections/TestimonialsPreview"
import FAQ from "./components/sections/FAQ"
import Contact from "./components/sections/Contact"

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fcfaf7] text-slate-800">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Practitioners />
        <Training />
        <TestimonialsPreview />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}