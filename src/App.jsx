import React, { useState } from 'react'
import SmoothScroll from './components/SmoothScroll'
import Navbar from './components/Navbar'
import Loader from './components/Loader.jsx'
import Hero from './sections/Hero'
import WhatIDo from './sections/WhatIDo'
import Timeline from './sections/Timeline'
import Projects from './sections/Projects'
import Footer from './sections/Footer'
import InteractiveBackground from './components/InteractiveBackground'


function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {/* Site content always renders behind */}
      <InteractiveBackground />
      <SmoothScroll>
        <Navbar />
        <main>
          <Hero />
          <WhatIDo />
          <Timeline />
          <Projects />
        </main>
        <Footer />
      </SmoothScroll>

      {/* Loader on top - window reveals site behind */}
      {loading && <Loader onComplete={() => setLoading(false)} />}
    </>
  )
}

export default App
