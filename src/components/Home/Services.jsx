"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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
function Services() {
                const services = [
        {
            icon: <Code className="w-8 h-8" />,
            title: "Website Development",
            description: "Responsive, SEO-ready, and user-friendly sites that convert visitors into customers.",
            features: ["Custom Design", "Mobile Responsive", "SEO Optimized", "Fast Loading"],
            link: "/services/web-development",
            
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "App Development",
            description: "Native and cross-platform mobile applications for iOS and Android.",
            features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"],
            link: "/services/app-development",
     
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Social Media Handling",
            description: "Complete social media management and content creation for your brand.",
            features: ["Content Creation", "Community Management", "Brand Voice", "Analytics"],
            link: "/services/social-media-handling",
            
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Social Media Marketing",
            description: "Data-driven campaigns to grow your online presence and engagement.",
            features: ["Paid Campaigns", "Audience Targeting", "ROI Tracking", "A/B Testing"],
            link: "/services/social-media-marketing",
         
        },
        {
            icon: <Palette className="w-8 h-8" />,
            title: "Graphic Designing",
            description: "Creative visual designs that capture your brand essence and engage your audience.",
            features: ["Brand Identity", "Print Design", "Digital Graphics", "Logo Design"],
            link: "/services/graphic-designing",
            
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Digital Marketing",
            description: "Comprehensive digital strategies for business growth and online success.",
            features: ["SEO", "PPC Advertising", "Email Marketing", "Content Strategy"],
            link: "/services/digital-marketing",
            
        },
    ]

return (
        <div className='min-h-screen bg-white'>
                <section id="services" className="py-20 bg-gray-50 w-full">
                        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="text-center mb-16">
                                        <Badge className="bg-[#ede7f6] text-[#9c27b0] mb-4">Our Services</Badge>
                                        <h2 className="text-2xl md:text-5xl font-bold text-[#2d033b] mb-6">What We Do Best</h2>
                                        <p className="text-lg text-[#6d4c90] max-w-3xl mx-auto">
                                                We offer comprehensive digital solutions to help your business thrive in the modern world.
                                        </p>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {services.map((service, index) => (
                                                <Card
                                                        key={index}
                                                        className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white"
                                                >
                                                        <CardContent className="px-8">
                                                                <div className="text-[#9c27b0] mb-4 group-hover:scale-110 transition-transform duration-300">
                                                                        {service.icon}
                                                                </div>
                                                                <h3 className="text-xl font-bold text-[#2d033b] mb-3">{service.title}</h3>
                                                                <p className="text-[#6d4c90] mb-4">{service.description}</p>
                                                                <ul className="space-y-2">
                                                                        {service.features.map((feature, idx) => (
                                                                                <li key={idx} className="flex items-center text-sm text-[#9575cd]">
                                                                                        <CheckCircle className="w-4 h-4 text-[#9c27b0] mr-2" />
                                                                                        {feature}
                                                                                </li>
                                                                        ))}
                                                                </ul>
                                                                <Link href={service.link}>
                                                                        <Button
                                                                                className="mt-4 cursor-pointer bg-[#9c27b0] hover:bg-[#7b1fa2] text-white lg:px-12 px-6 py-2 rounded-lg shadow-md transition-all duration-200 text-[16px]"
                                                                        >
                                                                                Explore More
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
