import React from 'react'
import Hero from '@/components/Home/Hero'
import About from '@/components/Home/About'
import WhyUs from '@/components/Home/WhyUs'
import Services from '@/components/Home/Services'
import Faq from '@/components/Home/Faq'
import Stats from '@/components/Home/Stats'
import Portfolio from '@/components/Home/Portfolio'
import Process from '@/components/Home/Process'
import Testimonials from '@/components/Home/Testimonials'
import Technology from '@/components/Home/Technology'
function page() {
  return (
    <div>
      <Hero/>
      <Stats/>
      <About/>
      <Services/>
      <WhyUs/>
       <Portfolio/>
      <Process/>
      <Technology/>
      <Faq/>
      <Testimonials/>


    </div>
  )
}

export default page
