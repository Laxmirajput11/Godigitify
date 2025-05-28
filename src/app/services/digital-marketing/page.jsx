"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Target, BarChart3, CheckCircle, Globe, Mail, MousePointer } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import Link from "next/link"
import Values from "@/components/About/Values"

export default function DigitalMarketingPage() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Search Engine Optimization",
      description: "Improve your search rankings and organic visibility",
    },
    {
      icon: <MousePointer className="w-6 h-6" />,
      title: "Pay-Per-Click Advertising",
      description: "Targeted Google Ads and social media advertising campaigns",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Marketing",
      description: "Automated email campaigns that nurture leads and drive sales",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics & Reporting",
      description: "Comprehensive tracking and performance analysis",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Conversion Optimization",
      description: "Optimize your website and campaigns for maximum conversions",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Content Marketing",
      description: "Strategic content creation to attract and engage your audience",
    },
  ]

  const benefits = [
    "Increase website traffic and online visibility",
    "Generate more qualified leads and sales",
    "Improve return on marketing investment",
    "Build brand authority and credibility",
    "Reach customers at every stage of the buying journey",
    "Scale your business with data-driven strategies",
  ]

  const process = [
    {
      step: "01",
      title: "Audit & Analysis",
      description: "We analyze your current digital presence, competitors, and market opportunities.",
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Our team creates a comprehensive digital marketing strategy tailored to your goals.",
    },
    {
      step: "03",
      title: "Implementation",
      description: "We execute campaigns across multiple channels with continuous monitoring and optimization.",
    },
    {
      step: "04",
      title: "Reporting & Growth",
      description: "Regular reporting and strategy refinement to maximize ROI and drive sustainable growth.",
    },
  ]

  const technologies = [
    { name: "Google Ads", logo: "/placeholder.svg?height=40&width=40" },
    { name: "Google Analytics", logo: "/placeholder.svg?height=40&width=40" },
    { name: "Facebook Ads", logo: "/placeholder.svg?height=40&width=40" },
    { name: "Mailchimp", logo: "/placeholder.svg?height=40&width=40" },
    { name: "SEMrush", logo: "/placeholder.svg?height=40&width=40" },
    { name: "HubSpot", logo: "/placeholder.svg?height=40&width=40" },
  ]

  const portfolio = [
    {
      title: "E-commerce Growth Campaign",
      description: "Multi-channel campaign driving 400% revenue growth",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      features: ["SEO Optimization", "PPC Campaigns", "Email Marketing"],
    },
    {
      title: "B2B Lead Generation",
      description: "LinkedIn and Google Ads campaign for SaaS company",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      features: ["Lead Generation", "Content Marketing", "Marketing Automation"],
    },
    {
      title: "Local Business Marketing",
      description: "Local SEO and advertising for service-based business",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      features: ["Local SEO", "Google My Business", "Review Management"],
    },
  ]

  const faqs = [
    {
      question: "How long does it take to see results from digital marketing?",
      answer:
        "Results vary by channel and strategy. PPC campaigns can show immediate results, while SEO typically takes 3-6 months to see significant improvements. We provide regular reports to track progress and adjust strategies for optimal performance.",
    },
    {
      question: "What's the difference between SEO and PPC?",
      answer:
        "SEO (Search Engine Optimization) focuses on improving organic search rankings for long-term visibility, while PPC (Pay-Per-Click) involves paid advertising for immediate visibility. Both are important components of a comprehensive digital marketing strategy.",
    },
    {
      question: "How do you measure digital marketing success?",
      answer:
        "We track key performance indicators (KPIs) such as website traffic, conversion rates, cost per acquisition, return on ad spend (ROAS), and overall ROI. We provide detailed monthly reports with actionable insights and recommendations.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pb-20 pt-40 bg-gradient-to-br from-purple-50 to-white">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-purple-100 text-purple-700 mb-4">Digital Marketing</Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
                Comprehensive Digital Marketing Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Drive growth and maximize ROI with our data-driven digital marketing strategies. We help businesses
                reach their target audience and achieve measurable results across all digital channels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-50">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                alt="Digital marketing"
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
              Our digital marketing service includes all the essential components to build a strong online presence and
              drive business growth.
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
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Why Digital Marketing is Essential</h2>
              <p className="text-lg text-gray-600 mb-8">
                In today's digital-first world, effective digital marketing is crucial for business success. It helps
                you reach your target audience where they spend their time and drives measurable results. Here's how it
                can benefit your business:
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                alt="Digital marketing benefits"
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
              Our proven 4-step process ensures your digital marketing campaigns deliver measurable results and maximum
              ROI.
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

      {/* Tools Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">Tools & Platforms</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Tools We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use industry-leading tools and platforms to execute, monitor, and optimize your digital marketing
              campaigns.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {technologies.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center group hover:scale-110 transition-transform duration-300"
              >
                <div className="w-16 h-16 mb-3 flex items-center justify-center bg-white rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <img src={tool.logo || "/placeholder.svg"} alt={tool.name} className="w-10 h-10" />
                </div>
                <span className="text-sm font-medium text-gray-600">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">Case Studies</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Recent Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent digital marketing campaigns and the results we achieved for our clients.
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
                    <Button className="bg-purple-500 hover:bg-purple-600 text-white">View Case Study</Button>
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
              Find answers to our most frequently asked questions about digital marketing.
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
