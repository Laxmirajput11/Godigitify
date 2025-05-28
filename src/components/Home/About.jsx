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
  const about = [
  {
    name: "Our Vision",
    role: "Driving Digital Innovation",
    image: "https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061967.jpg?uid=R202189392&ga=GA1.1.997402308.1733712430&semt=ais_items_boosted&w=740",
    bio: "Empowering businesses with cutting-edge digital solutions.",
  },
  {
    name: "Our Mission",
    role: "Client-Centric Solutions",
    image: "https://img.freepik.com/free-vector/live-collaboration-concept-illustration_114360-633.jpg?uid=R202189392&ga=GA1.1.997402308.1733712430&semt=ais_items_boosted&w=740",
    bio: "Delivering tailored solutions that foster growth and build lasting relationships.",
  },
  {
    name: "Our Expertise",
    role: "Web, Graphic & Digital",
    image: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?uid=R202189392&ga=GA1.1.997402308.1733712430&semt=ais_items_boosted&w=740",
    bio: "Specializing in web app development, graphic design, and digital marketing.",
  },
  {
    name: "Our Approach",
    role: "Collaborative & Transparent",
    image: "https://img.freepik.com/free-vector/team-concept-illustration_114360-688.jpg?uid=R202189392&ga=GA1.1.997402308.1733712430&semt=ais_items_boosted&w=740",
    bio: "Working closely with clients to deliver projects on time and to high standards.",
  },
];
  return (
    <div className='min-h-screen bg-white '>
       <section id="about" className="py-20" style={{ backgroundColor: "#f3e5f5" }}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <Badge className="mb-4" style={{ backgroundColor: "#e1bee7", color: "#6a1b9a" }}>About Us</Badge>
                    <h2 className="text-2xl md:text-5xl font-bold text-black mb-6">
                      We're Passionate About Digital Excellence
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      With over 3 years of experience, we've helped businesses of all sizes achieve their digital goals
                      through innovative design and development solutions.
                    </p>
      
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                      <div className="flex items-center">
                        <Users className="w-8 h-8 mr-3" style={{ color: "#9c27b0" }} />
                        <div>
                          <div className="font-bold text-black">Expert Team</div>
                          <div className="text-gray-600 text-sm">Skilled professionals</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Target className="w-8 h-8 mr-3" style={{ color: "#9c27b0" }} />
                        <div>
                          <div className="font-bold text-black">Goal Oriented</div>
                          <div className="text-gray-600 text-sm">Results-driven approach</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Zap className="w-8 h-8 mr-3" style={{ color: "#ab47bc" }} />
                        <div>
                          <div className="font-bold text-black">Fast Delivery</div>
                          <div className="text-gray-600 text-sm">Quick turnaround</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-8 h-8 mr-3" style={{ color: "#8e24aa" }} />
                        <div>
                          <div className="font-bold text-black">Quality Work</div>
                          <div className="text-gray-600 text-sm">Premium standards</div>
                        </div>
                      </div>
                    </div>
      
                    <Button className="text-white" style={{ backgroundColor: "#9c27b0" , borderColor: "#8e24aa" }}>Learn More About Us</Button>
                  </div>
      
                  <div className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {about.map((member, index) => (
                        <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0" style={{ backgroundColor: "#fff" }}>
                          <CardContent className="px-4 ">
                            <img
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              className="w-full h-28 !z-100 object-cover rounded-lg mb-2 group-hover:scale-105 transition-transform duration-300"
                            />
                            <h4 className="font-bold text-black text-sm">{member.name}</h4>
                            <p className="mb-2 text-xs" style={{ color: "#9c27b0" }}>{member.role}</p>
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
