"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"
import Link from "next/link"
function Services() {
      const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Website Development",
      description: "Responsive, SEO-ready, and user-friendly sites that convert visitors into customers.",
      features: ["Custom Design", "Mobile Responsive", "SEO Optimized", "Fast Loading"],
      link: "/services/web-development",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"],
      link: "/services/app-development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Media Handling",
      description: "Complete social media management and content creation for your brand.",
      features: ["Content Creation", "Community Management", "Brand Voice", "Analytics"],
      link: "/services/social-media-handling",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Social Media Marketing",
      description: "Data-driven campaigns to grow your online presence and engagement.",
      features: ["Paid Campaigns", "Audience Targeting", "ROI Tracking", "A/B Testing"],
      link: "/services/social-media-marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Designing",
      description: "Creative visual designs that capture your brand essence and engage your audience.",
      features: ["Brand Identity", "Print Design", "Digital Graphics", "Logo Design"],
      link: "/services/graphic-designing",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Comprehensive digital strategies for business growth and online success.",
      features: ["SEO", "PPC Advertising", "Email Marketing", "Content Strategy"],
      link: "/services/digital-marketing",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop",
    },
  ]

    
  return (
    <div>
       <section className="py-20 bg-white w-full">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white overflow-hidden"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg">
                    <div className="text-purple-500">{service.icon}</div>
                  </div>
                </div>
                <CardContent className="px-6">
                  <h3 className="text-xl font-bold text-black mb-1">{service.title}</h3>
                  <p className="text-gray-600 mb-2">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.link}>
                    <Button className="w-full cursor-pointer bg-purple-500 hover:bg-purple-600 text-white group">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
