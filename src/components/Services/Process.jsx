"use client"
import React from "react"
import { useState, useEffect } from "react"
import {
  Code,
  Smartphone,
  Users,
  TrendingUp,
  Palette,
  Target,
  CheckCircle,
  ArrowRight,
  Zap,
  Award,
  Clock,
  DollarSign,
  Sparkles,
  Star,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const ProcessStep = ({ step, index, isActive, onClick }) => (
  <div
    className={`relative cursor-pointer transition-all duration-500 ${isActive ? "scale-105" : "hover:scale-100"}`}
    onClick={() => onClick(index)}
  >
    <Card
      className={`border-0 text-center transition-all duration-500 ${
        isActive ? "bg-gradient-to-br from-purple-50 to-white shadow-2xl" : "bg-gray-50 hover:shadow-lg"
      }`}
    >
      <CardContent className="px-3">
        {/* Step Number with Animation */}
        <div
          className={`relative mx-auto mb-6 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
            isActive
              ? "bg-purple-500 text-white shadow-lg shadow-purple-500/50"
              : "bg-purple-100 text-purple-600 hover:bg-purple-200"
          }`}
        >
          <span className="text-2xl font-bold">{step.step}</span>
          {isActive && <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-20"></div>}
        </div>

        {/* Icon */}
        {/* <div
          className={`text-purple-500 mb-4 flex justify-center transition-transform duration-300 ${
            isActive ? "scale-110" : ""
          }`}
        >
          {step.icon}
        </div> */}

        {/* Content */}
        <h3
          className={`text-lg font-bold mb-3 transition-colors duration-300 ${
            isActive ? "text-purple-600" : "text-black"
          }`}
        >
          {step.title}
        </h3>
        <p className="text-[16px] text-gray-600">{step.description}</p>

        {/* Active Indicator */}
        {isActive && (
          <div className="mt-4 flex items-center justify-center text-purple-500 animate-fade-in-up">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Contact Us</span>
          </div>
        )}
      </CardContent>
    </Card>
  </div>
)
function Process() {
    const [activeProcess, setActiveProcess] = useState(0)
  // Auto-rotate process steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % process.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
     const process = [
    {
      step: "01",
      title: "Understand Requirements",
      description: "We start by deeply understanding your business goals, target audience, and project requirements.",
      icon: <Users className="w-8 h-8" />,
    },
    {


      step: "02",
      title: "Design & Prototype",
      description: "Our designers create wireframes and prototypes to visualize the final product.",
      icon: <Palette className="w-8 h-8" />,
    },
    {
      step: "03",
      title: "Develop & Test",
      description: "Our developers bring designs to life with clean code and thorough testing.",
      icon: <Code className="w-8 h-8" />,
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your project and provide ongoing support and maintenance.",
      icon: <Target className="w-8 h-8" />,
    },
  ]

  return (
    <div>
      <section className="py-16 bg-white relative overflow-hidden ">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float animation-delay-4000"></div>
        </div>

        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">Our Process</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step process ensures successful project delivery and client satisfaction with clear
              communication at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <ProcessStep
                key={index}
                step={step}
                index={index}
                isActive={activeProcess === index}
                onClick={setActiveProcess}
              />
            ))}
          </div>

          {/* Process Connection Lines */}
          {/* <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 transform -translate-y-1/2 opacity-10 "></div> */}
        </div>
      </section>
    </div>
  )
}

export default Process
