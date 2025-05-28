"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Eye, Layers, ImageIcon, CheckCircle, Zap, Award } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import Link from "next/link"
import Values from "@/components/About/Values"

export default function GraphicDesignPage() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const features = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Brand Identity Design",
      description: "Complete brand identity packages including logos, colors, and guidelines",
    },
    {
      icon: <ImageIcon className="w-6 h-6" />,
      title: "Print & Digital Design",
      description: "High-quality designs for both print and digital media",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Visual Storytelling",
      description: "Compelling visual narratives that engage your audience",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Multi-format Delivery",
      description: "Designs delivered in all required formats and resolutions",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick Turnaround",
      description: "Fast delivery without compromising on quality",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Award-winning Design",
      description: "Creative excellence recognized by industry professionals",
    },
  ]

  const benefits = [
    "Establish a strong and memorable brand identity",
    "Increase brand recognition and customer trust",
    "Stand out from competitors with unique designs",
    "Improve marketing effectiveness and ROI",
    "Create consistent visual communication",
    "Enhance professional credibility and perception",
  ]

  const process = [
    {
      step: "01",
      title: "Brief & Research",
      description: "We understand your brand, target audience, and design requirements through detailed consultation.",
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Our designers create initial concepts and mood boards to establish the visual direction.",
    },
    {
      step: "03",
      title: "Design & Refinement",
      description: "We develop the chosen concept into polished designs with your feedback and revisions.",
    },
    {
      step: "04",
      title: "Delivery & Support",
      description: "Final designs delivered in all formats with brand guidelines and ongoing support.",
    },
  ]

  const technologies = [
    {
      name: "Adobe Creative Suite",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Sketch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg" },
    {
      name: "Illustrator",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
    },
    { name: "InDesign", logo: "/placeholder.svg?height=40&width=40" },
    { name: "After Effects", logo: "/placeholder.svg?height=40&width=40" },
  ]

  const portfolio = [
    {
      title: "Tech Startup Branding",
      description: "Complete brand identity for innovative tech company",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      features: ["Logo Design", "Brand Guidelines", "Business Cards"],
    },
    {
      title: "Restaurant Menu Design",
      description: "Elegant menu design for upscale dining establishment",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
      features: ["Menu Layout", "Food Photography", "Print Design"],
    },
    {
      title: "Event Poster Campaign",
      description: "Eye-catching poster series for music festival",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      features: ["Poster Design", "Social Media", "Digital Banners"],
    },
  ]

  const faqs = [
    {
      question: "What's included in a brand identity package?",
      answer:
        "A complete brand identity package includes logo design, color palette, typography selection, brand guidelines, business card design, and letterhead. We also provide all files in various formats for different uses.",
    },
    {
      question: "How many design revisions do I get?",
      answer:
        "We include up to 3 rounds of revisions in our standard packages. This ensures we can refine the design to perfectly match your vision while maintaining project efficiency.",
    },
    {
      question: "Do you provide print-ready files?",
      answer:
        "Yes, we provide all designs in print-ready formats including high-resolution PDFs, CMYK color profiles, and proper bleed settings. We also coordinate with printers when needed.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pb-20 pt-40 bg-gradient-to-br from-purple-50 to-white">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-purple-100 text-purple-700 mb-4">Graphic Design</Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">Creative Graphic Design Services</h1>
              <p className="text-xl text-gray-600 mb-8">
                Bring your brand to life with stunning visual designs. We create compelling graphics that communicate
                your message and captivate your audience across all platforms.
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
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
                alt="Graphic design"
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
              Our graphic design service includes all the essential elements to create a strong visual identity for your
              brand.
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
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Why Great Design Matters</h2>
              <p className="text-lg text-gray-600 mb-8">
                Professional graphic design is crucial for business success. It helps you communicate effectively and
                build trust with your audience. Here's how great design can benefit your business:
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
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop"
                alt="Design benefits"
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
              Our proven 4-step design process ensures your project is delivered on time and exceeds expectations.
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
            <Badge className="bg-purple-100 text-purple-700 mb-4">Design Tools</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Tools We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use industry-leading design software and tools to create professional, high-quality graphics.
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
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Recent Design Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent graphic design projects and see the quality of our creative work.
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
              Find answers to our most frequently asked questions about graphic design services.
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
