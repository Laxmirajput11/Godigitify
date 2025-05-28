"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MessageSquare, Users, CheckCircle, Clock, Camera, Heart } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import Link from "next/link"
import Values from "@/components/About/Values"

export default function SocialMediaHandlingPage() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Content Scheduling",
      description: "Strategic posting schedule optimized for maximum engagement",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Daily Engagement",
      description: "Active community management and customer interaction",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Content Creation",
      description: "Fresh, engaging posts, stories, and visual content daily",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Follower Growth",
      description: "Organic strategies to grow your audience and reach",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Brand Voice Management",
      description: "Consistent brand personality across all platforms",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Monitoring",
      description: "Round-the-clock monitoring and quick response times",
    },
  ]

  const benefits = [
    "Maintain consistent daily social media presence",
    "Build authentic relationships with your audience",
    "Save time while growing your online community",
    "Increase brand awareness and engagement rates",
    "Professional content that reflects your brand values",
    "Quick response to customer inquiries and comments",
  ]

  const process = [
    {
      step: "01",
      title: "Account Setup & Audit",
      description: "We optimize your profiles and analyze current performance to establish baseline metrics.",
    },
    {
      step: "02",
      title: "Content Strategy",
      description: "Develop a content calendar and posting strategy aligned with your brand and audience.",
    },
    {
      step: "03",
      title: "Daily Management",
      description: "Execute daily posting, engagement, and community management activities.",
    },
    {
      step: "04",
      title: "Growth & Optimization",
      description: "Continuous optimization based on performance data and audience feedback.",
    },
  ]

  const technologies = [
    { name: "Instagram", logo: "/placeholder.svg?height=40&width=40" },
    { name: "Facebook", logo: "/placeholder.svg?height=40&width=40" },
    { name: "Twitter", logo: "/placeholder.svg?height=40&width=40" },
    { name: "LinkedIn", logo: "/placeholder.svg?height=40&width=40" },
    { name: "TikTok", logo: "/placeholder.svg?height=40&width=40" },
    { name: "Pinterest", logo: "/placeholder.svg?height=40&width=40" },
  ]

  const portfolio = [
    {
      title: "Boutique Fashion Store",
      description: "Daily Instagram management with lifestyle content",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      features: ["Daily Posts", "Story Management", "Customer Engagement"],
    },
    {
      title: "Local Restaurant Chain",
      description: "Multi-platform daily management and customer service",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
      features: ["Food Photography", "Customer Reviews", "Event Updates"],
    },
    {
      title: "Fitness Studio",
      description: "Motivational content and community building",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      features: ["Workout Tips", "Client Features", "Class Schedules"],
    },
  ]

  const faqs = [
    {
      question: "How often will you post on my social media accounts?",
      answer:
        "We typically post 1-2 times daily on Instagram, 3-5 times per week on Facebook, and daily on Twitter. The exact frequency depends on your package and platform best practices. We also manage Stories and other content formats regularly.",
    },
    {
      question: "Will you respond to comments and messages?",
      answer:
        "Yes, we actively monitor and respond to comments, messages, and mentions throughout the day. We maintain your brand voice and escalate important inquiries to you when necessary. Response times are typically within 2-4 hours during business hours.",
    },
    {
      question: "Do you create original content or repost existing content?",
      answer:
        "We create a mix of original content tailored to your brand and curate relevant content from other sources (with proper attribution). All content goes through our approval process and aligns with your brand guidelines and messaging strategy.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pb-20 pt-40 bg-gradient-to-br from-purple-50 to-white">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-purple-100 text-purple-700 mb-4">Social Media Handling</Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">Professional Social Media Management</h1>
              <p className="text-xl text-gray-600 mb-8">
                Let us handle your daily social media presence while you focus on running your business. We create
                engaging content, manage your community, and grow your online following authentically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-50">
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
                alt="Social media management"
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
              Our social media handling service includes all the daily management tasks to keep your social presence
              active and engaging.
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
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Why Professional Social Media Handling Matters
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Consistent, professional social media management is essential for building brand trust and community.
                Let our experts handle the day-to-day tasks while you focus on your core business. Here's how it
                benefits you:
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
                src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop"
                alt="Social media benefits"
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
              Our proven 4-step process ensures your social media accounts are professionally managed and consistently
              growing.
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

      {/* Platforms Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">Platforms</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Platforms We Manage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide daily management and content creation across all major social media platforms.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {technologies.map((platform, index) => (
              <div
                key={index}
                className="flex flex-col items-center group hover:scale-110 transition-transform duration-300"
              >
                <div className="w-16 h-16 mb-3 flex items-center justify-center bg-white rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <img src={platform.logo || "/placeholder.svg"} alt={platform.name} className="w-10 h-10" />
                </div>
                <span className="text-sm font-medium text-gray-600">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">Our Work</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Recent Management Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of the social media accounts we manage and the engaging content we create daily.
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
                    <Button className="bg-purple-500 hover:bg-purple-600 text-white">View Account</Button>
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
              Find answers to our most frequently asked questions about social media handling.
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
