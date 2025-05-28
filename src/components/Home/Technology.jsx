"use client"
import { Badge } from "@/components/ui/badge"
function Technology() {
  const techStack = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  ]
  return (
    <div>
   <section className="py-20 bg-white">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <Badge className="mb-4" style={{ backgroundColor: "#f3e5f5", color: "#9c27b0" }}>Technology</Badge>
      <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#9c27b0" }}>Tools We Master</h2>
      <p className="text-xl" style={{ color: "#7b1fa2" }}>
        We work with cutting-edge technologies to deliver modern, scalable solutions that stand the test of time.
      </p>
    </div>

    <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
      {techStack.map((tech, index) => (
        <div
       key={index}
       className="flex flex-col items-center group hover:scale-110 transition-transform duration-300"
        >
       <div
         className="w-16 h-16 mb-3 flex items-center justify-center rounded-xl transition-colors duration-300 shadow-md group-hover:shadow-lg"
         style={{
        backgroundColor: "#f3e5f5",
         }}
       >
         <img src={tech.logo || "/placeholder.svg"} alt={tech.name} className="w-10 h-10" />
       </div>
       <span
         className="text-sm font-medium transition-colors duration-300"
         style={{
        color: "#6d4c91",
         }}
       >
         {tech.name}
       </span>
        </div>
      ))}
    </div>
     </div>
   </section>
    </div>
  )
}

export default Technology
