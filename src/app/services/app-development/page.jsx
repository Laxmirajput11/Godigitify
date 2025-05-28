"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Zap, Shield, Globe, CheckCircle, Database, Bell } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import Link from "next/link"
import Values from "@/components/About/Values"

export default function AppDevelopmentPage() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const features = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Cross-Platform Development",
      description: "Build once, deploy everywhere - iOS, Android, and Web",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High Performance",
      description: "Optimized for speed and smooth user experience",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Architecture",
      description: "Enterprise-grade security and data protection",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cloud Integration",
      description: "Seamless integration with cloud services and APIs",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Real-time Data",
      description: "Live data synchronization and offline capabilities",
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Push Notifications",
      description: "Engage users with targeted push notifications",
    },
  ]

  const benefits = [
    "Reach customers on their preferred mobile devices",
    "Increase user engagement and retention",
    "Generate new revenue streams",
    "Improve customer service and support",
    "Gain valuable user insights and analytics",
    "Stay competitive in the mobile-first market",
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your app requirements, target audience, and create detailed wireframes and user flows.",
    },
    {
      step: "02",
      title: "UI/UX Design",
      description:
        "Our designers create intuitive and engaging user interfaces that provide excellent user experience.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your app using modern frameworks and conduct thorough testing across devices.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "App store submission, launch support, and ongoing maintenance to ensure optimal performance.",
    },
  ]

  const technologies = [
    { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
    { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    {
      name: "AWS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain.svg",
    },
  ]

  const portfolio = [
    {
      title: "E-commerce Mobile App",
      description: "Feature-rich shopping app with payment integration",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      features: ["Payment Gateway", "Push Notifications", "User Reviews"],
    },
    {
      title: "Fitness Tracking App",
      description: "Health and fitness app with wearable integration",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      features: ["Activity Tracking", "Social Features", "Health Analytics"],
    },
    {
      title: "Food Delivery App",
      description: "On-demand food delivery with real-time tracking",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      features: ["GPS Tracking", "Payment Integration", "Order Management"],
    },
  ]

  const faqs = [
    {
      question: "How long does it take to develop a mobile app?",
      answer:
        "A simple app typically takes 3-6 months, while complex apps with advanced features can take 6-12 months. We'll provide a detailed timeline based on your specific requirements and features.",
    },
    {
      question: "Do you develop for both iOS and Android?",
      answer:
        "Yes, we develop native apps for both iOS and Android, as well as cross-platform apps using React Native or Flutter that work on both platforms.",
    },
    {
      question: "Will you help with app store submission?",
      answer:
        "We handle the entire app store submission process for both Apple App Store and Google Play Store, including compliance with their guidelines and requirements.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pb-20 pt-40 bg-gradient-to-br from-purple-50 to-white">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-purple-100 text-purple-700 mb-4">App Development</Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">Custom Mobile App Development</h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your business with powerful mobile applications. We create native and cross-platform apps that
                deliver exceptional user experiences and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-50">
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
                alt="Mobile app development"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">What's Included</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Everything You Need</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our app development service includes all the essential features to make your mobile app successful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 bg-gray-50 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-purple-500 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-purple-50">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-purple-100 text-purple-700 mb-4">Benefits</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Why Your Business Needs a Mobile App</h2>
              <p className="text-lg text-gray-600 mb-8">
                Mobile apps are essential for modern businesses to connect with customers and stay competitive. Here's
                how a mobile app can benefit your business:
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-purple-500 mr-3" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
                alt="Mobile app benefits"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-white">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">Our Process</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step process ensures your mobile app is delivered on time and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card
                key={index}
                className="border-0 bg-gray-50 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-500 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">Technology Stack</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge technologies to build modern, scalable, and high-performance mobile applications.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center group hover:scale-110 transition-transform duration-300"
              >
                <div className="w-16 h-16 mb-3 flex items-center justify-center bg-white rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <img src={tech.logo || "/placeholder.svg"} alt={tech.name} className="w-10 h-10" />
                </div>
                <span className="text-sm font-medium text-gray-600">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">Portfolio</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Recent App Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent mobile app development projects and see the quality of our work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-purple-500 hover:bg-purple-600 text-white">View Project</Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-16 h-16 bg-purple-100 rounded-full opacity-20"
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-10"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center justify-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <HelpCircle className="w-5 h-5 mr-2" />
              <span className="font-medium">FAQs</span>
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Common Questions
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Find answers to our most frequently asked questions about app development.
            </motion.p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <motion.div animate={{ rotate: activeIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-5 h-5 text-purple-500" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-gray-600">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Values />
    </div>
  )
}
