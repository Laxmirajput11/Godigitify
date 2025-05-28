import Hero from '@/components/Services/Hero'
import WhyUs from '@/components/Services/WhyUs'
import React from 'react'
import Services from '@/components/Services/Services'
import Faq from '@/components/Services/Faq'
import Values from '@/components/About/Values'
import Process from '@/components/Services/Process'
function page() {
  return (
    <div>
      <Hero />
      <Services/>
      <WhyUs/>
      <Process/>
      <Faq/>
      <Values/>

    </div>
  )
}

export default page


