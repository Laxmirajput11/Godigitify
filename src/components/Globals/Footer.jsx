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
function Footer() {
return (
    <div className=''>
        <footer className="bg-white text-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        {/* Logo with suitable height and width */}
                        <div className="">
                            <img
                                src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumYL4YWSbtjEUG1hRlbryNkzHodgPJ7acmI8ue"
                                alt="Adaddictz Logo"
                                width={120}
                                height={20}
                                className="object-contain "
                                priority
                            />
                        </div>
                        <p className="text-gray-600 mb-4 ">
                            Creating digital experiences that inspire and engage your audience.
                        </p>
                        <div className="flex space-x-4">
                            <Button size="icon" variant="ghost" className="text-gray-600 hover:text-purple-600">
                                <Twitter className="w-4 h-4" />
                            </Button>
                            <Button size="icon" variant="ghost" className="text-gray-600 hover:text-purple-600">
                                <Linkedin className="w-4 h-4" />
                            </Button>
                            <Button size="icon" variant="ghost" className="text-gray-600 hover:text-purple-600">
                                <Github className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li>
                                <a href="/services/web-development" className="hover:text-purple-600 transition-colors">
                                    Web Development
                                </a>
                            </li>
                            <li>
                                <a href="/services/App-development" className="hover:text-purple-600 transition-colors">
                                    App Development
                                </a>
                            </li>
                            <li>
                                <a href="/services/graphic-designing" className="hover:text-purple-600 transition-colors">
                                    Graphic Designing
                                </a>
                            </li>
                            <li>
                                <a href="/services/digital-marketing" className="hover:text-purple-600 transition-colors">
                                    Digital Marketing
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li>
                                <a href="/about" className="hover:text-purple-600 transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-purple-600 transition-colors">
                                    Our Team
                                </a>
                            </li>
                            <li>
                                <a href="services" className="hover:text-purple-600 transition-colors">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="contact" className="hover:text-purple-600 transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Newsletter</h4>
                        <p className="text-gray-600 mb-4">
                            Subscribe to get updates on our latest projects and insights.
                        </p>
                        <div className="flex">
                            <Input placeholder="Your email" className="rounded-r-none" />
                            <Button className="bg-purple-600 hover:bg-purple-700 rounded-l-none text-white">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Agency. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
)
}

export default Footer
