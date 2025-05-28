import React from 'react'
import Hero from '@/components/About/Hero'
import Journey from '@/components/About/Journey'
import About from '@/components/About/About'
import Vision from '@/components/About/Vision'
import Process from '@/components/About/Process'
import Values from '@/components/About/Values'
function page() {
  return (
    <div>
      <Hero/>
      <About/>
      <Journey/>
      <Vision/>
      <Process/>
      <Values/>
    </div>
  )
}

export default page
