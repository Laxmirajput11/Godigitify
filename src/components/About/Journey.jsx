"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Lightbulb, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"

function Journey() {
  const timeline = [
    {
       label: "Foundation",
      title: "The Beginning",
      description: "Started as a freelance developer with a vision to help small businesses go digital.",
      icon: <Lightbulb className="w-5 h-5 text-purple-500" />
    },
    {
      label: "Growth Phase",
      title: "Initial Partnerships & Milestones",
      description: "Landed our first enterprise client and delivered a complete digital transformation.",
      icon: <Target className="w-5 h-5 text-purple-500" />
    },
    {
      label: "Team Evolution",
      title: "Expanding Our Collective Expertise",
      description: "Grew the team to include designers, developers, and marketing specialists.",
      icon: <Users className="w-5 h-5 text-purple-500" />
    },
    {
       label: "Project Success",
      title: "Achieving Significant Project Volume",
      description: "Reached the milestone of 100 successful projects across various industries.",
      icon: <Badge className="bg-purple-500 text-white">100+</Badge>
    },
    {
      label: "Recognition", // Replaced 'year' with 'label'
    title: "Industry Acknowledgement & Client Trust",
      description: "Received 'Best Digital Agency' award from the local business community.",
      icon: <Heart className="w-5 h-5 text-purple-500" />
    },
    {
     label: "Future Forward", // Replaced 'year' with 'label'
    title: "Expanding Our Global Footprint",
      description: "Expanded services globally, serving clients across 15+ countries.",
      icon: (
        <svg className="w-5 h-5 text-purple-500" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16C9.79 16 8 14.21 8 12Z" fill="currentColor"/>
        </svg>
      )
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative SVG elements */}
      <motion.svg 
        className="absolute top-0 left-0 w-32 h-32 text-purple-50"
        viewBox="0 0 200 200"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <path 
          fill="currentColor" 
          d="M100,0 C155.228,0 200,44.772 200,100 C200,155.228 155.228,200 100,200 C44.772,200 0,155.228 0,100 C0,44.772 44.772,0 100,0 Z M100,180 C155.228,180 200,135.228 200,80 C200,24.772 155.228,-20 100,-20 C44.772,-20 0,24.772 0,80 C0,135.228 44.772,180 100,180 Z"
        />
      </motion.svg>
      
      <motion.div 
        className="mt-20 relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <div className="text-center mb-16">
                    <Badge className="bg-purple-100 text-purple-700 mb-4">Our Journey</Badge>
                    <h2 className="lg:text-4xl text-2xl md:text-5xl font-bold text-black mb-6">What We Do Best</h2>
                    <p className="lg:text-xl text-lg text-gray-600 max-w-3xl mx-auto">
                        We offer comprehensive digital solutions to help your business thrive in the modern world.
                    </p>
                </div>
        
        {/* Timeline connector */}
        <div className="hidden lg:block absolute left-1/2 top-60 bottom-40 w-1 bg-purple-100 rounded-full -translate-x-1/2"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 px-4 w-11/12 mx-auto">
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="relative"
              whileHover={{ y: -5 }}
            >
              {/* Connector dots for desktop */}
              {/* <div className="hidden lg:block absolute -left-10 top-8 w-4 h-4 bg-purple-500 rounded-full -translate-x-1/2"></div> */}
              
              <Card className="border-0 bg-gray-50 hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-2xl font-bold text-purple-500">{item.label}</div>
                    <div className="flex-1 h-px bg-purple-100"></div>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-50">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-black mb-3">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        
      </motion.div>
      
      {/* Decorative SVG elements */}
      <motion.svg 
        className="absolute bottom-0 right-0 w-40 h-40 text-purple-50"
        viewBox="0 0 200 200"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <path 
          fill="currentColor" 
          d="M100,0 C155.228,0 200,44.772 200,100 C200,155.228 155.228,200 100,200 C44.772,200 0,155.228 0,100 C0,44.772 44.772,0 100,0 Z M20,100 C20,56.2 56.2,20 100,20 C143.8,20 180,56.2 180,100 C180,143.8 143.8,180 100,180 C56.2,180 20,143.8 20,100 Z"
        />
      </motion.svg>
    </section>
  )
}

export default Journey