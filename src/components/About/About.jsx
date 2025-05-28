"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  ArrowRight,
  Users,
  Target,
  Zap,
  Code,
  Palette,
  Smartphone,
  TrendingUp,
  Award,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react"
function About() {
  //  const team = [
  //   {
  //     name: "Rahees Nagra",
  //     role: "Creative Director",
  //     image: "https://scontent.fixc14-1.fna.fbcdn.net/v/t39.30808-1/458327616_8718640654834912_7648174148667860625_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=zpJ6GG0mNsUQ7kNvwHMkL9E&_nc_oc=AdmjNmhL4O7cVaOVH5K79KIVg5EkogWe_mVhXsWdY8pmsTWlWejffajN8bMWcfTezd8&_nc_zt=24&_nc_ht=scontent.fixc14-1.fna&_nc_gid=oHSoiNdy7CB4Z8Zb-dbszg&oh=00_AfJSl4Q778JL6nj_vfVbQFJI3_ibls1W6yStdaKFjgj9lA&oe=683D472F",
  //     bio: "10+ years of experience in digital design and strategy",
  //   },
  //   {
  //     name: "Niraj Gupta",
  //     role: "Lead Developer",
  //     image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumIDzjDWxR21jqluvKkFoRaDpPfCGTtxewIs74",
  //     bio: "Full-stack developer specializing in modern web technologies",
  //   },
  //   {
  //     name: "Mike Rodriguez",
  //     role: "UX Designer",
  //     image: "/placeholder.svg?height=300&width=300",
  //     bio: "User experience expert with a passion for human-centered design",
  //   },
  //   {
  //     name: "Emily Davis",
  //     role: "Project Manager",
  //     image: "/placeholder.svg?height=300&width=300",
  //     bio: "Agile project management specialist ensuring timely delivery",
  //   },
  // ]
  const about = [
  {
    name: "Our Vision",
    role: "Driving Digital Innovation",
    // Image of abstract technology or a future concept
    image: "https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061967.jpg?uid=R202189392&ga=GA1.1.997402308.1733712430&semt=ais_items_boosted&w=740",
    bio: "Empowering businesses with cutting-edge digital solutions.",
  },
  {
    name: "Our Mission",
    role: "Client-Centric Solutions",
    // Image showing a collaborative meeting or happy clients
    image: "https://img.freepik.com/free-vector/live-collaboration-concept-illustration_114360-633.jpg?uid=R202189392&ga=GA1.1.997402308.1733712430&semt=ais_items_boosted&w=740",
    bio: "Delivering tailored solutions that foster growth and build lasting relationships.",
  },
  {
    name: "Our Expertise",
    role: "Web, Graphic & Digital",
    // Image representing a mix of digital skills (coding, design, marketing elements)
    image: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?uid=R202189392&ga=GA1.1.997402308.1733712430&semt=ais_items_boosted&w=740",
    bio: "Specializing in web app development, graphic design, and digital marketing.",
  },
  {
    name: "Our Approach",
    role: "Collaborative & Transparent",
    // Image showing a team working together or a clear process
    image: "https://img.freepik.com/free-vector/team-concept-illustration_114360-688.jpg?uid=R202189392&ga=GA1.1.997402308.1733712430&semt=ais_items_boosted&w=740",
    bio: "Working closely with clients to deliver projects on time and to high standards.",
  },
];
  return (
    <div className='min-h-screen bg-white '>
       <section id="about" className="py-20 bg-purple-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <Badge className="bg-purple-100 text-purple-700 mb-4">About Us</Badge>
                    <h2 className="text-2xl md:text-5xl font-bold text-black mb-6">
                      We're Passionate About Digital Excellence
                    </h2>
                    <p className="lg:text-xl text-lg text-gray-600 mb-8">
                      With over 5 years of experience, we've helped businesses of all sizes achieve their digital goals
                      through innovative design and development solutions.
                    </p>
      
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mb-8">
                      <div className="flex items-center">
                        <Users className="w-8 h-8 text-purple-500 mr-3" />
                        <div>
                          <div className="font-bold text-black">Expert Team</div>
                          <div className="text-gray-600 text-sm">Skilled professionals</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Target className="w-8 h-8 text-purple-500 mr-3" />
                        <div>
                          <div className="font-bold text-black">Goal Oriented</div>
                          <div className="text-gray-600 text-sm">Results-driven approach</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Zap className="w-8 h-8 text-purple-500 mr-3" />
                        <div>
                          <div className="font-bold text-black">Fast Delivery</div>
                          <div className="text-gray-600 text-sm">Quick turnaround</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-8 h-8 text-purple-500 mr-3" />
                        <div>
                          <div className="font-bold text-black">Quality Work</div>
                          <div className="text-gray-600 text-sm">Premium standards</div>
                        </div>
                      </div>
                    </div>
      
                    <Button className="bg-purple-500 hover:bg-purple-600 text-white">Learn More About Us</Button>
                  </div>
      
                  <div className="relative">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                      {about.map((member, index) => (
                        <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0">
                          <CardContent className="px-4 ">
                            <img
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              className="w-full h-28 object-cover rounded-lg mb-2 group-hover:scale-105 transition-transform duration-300"
                            />
                            <h4 className="font-bold text-black text-sm">{member.name}</h4>
                            <p className="text-purple-500 text-xs mb-2">{member.role}</p>
                            <p className="text-gray-600 text-xs">{member.bio}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
    </div>
  )
}

export default About
