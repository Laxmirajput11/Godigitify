"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

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
// ...existing imports...
function Hero() {
  return (
    <div className='min-h-screen bg-white'>
      <section 
        id="home" 
        className="relative min-h-screen w-full flex items-center bg-white overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white to-[#f3e5f5] opacity-90"></div>
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating dots */}
          <motion.div
            className="absolute left-1/4 top-1/4 w-12 h-12 rounded-full bg-[#e1bee7] opacity-50 z-0"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute right-1/3 bottom-1/4 w-16 h-16 rounded-full bg-[#f3e5f5] opacity-50 z-0"
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIG9wYWNpdHk9IjAuMiI+PHBhdGggZD0iTTAgMEg0MFY0MCIvPjwvc3ZnPg==')]"></div>
          </div>
        </div>
        {/* Content container */}
        <div className="relative z-10 mx-auto w-full">
          {/* Responsive grid: image first on mobile, text first on desktop */}
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-[60px] items-center w-11/12 mx-auto">
            {/* Left content (text) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="py-10 lg:py-12 w-full"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-block text-white bg-[#9c27b0] px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Digital Excellence
                </span>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="block">We Build here</span>
                <motion.span 
                  className="text-[#9c27b0] block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Future Ready Solution
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Transform your vision into high-performing digital experiences with our expert team of strategists, designers, and developers.
              </motion.p>

              {/* Three small cards */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex-1 bg-white border border-[#e1bee7] rounded-lg shadow-sm p-4 flex items-center gap-3">
                  <Code className="w-6 h-6 text-[#9c27b0]" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Modern Tech</div>
                    <div className="text-xs text-gray-500">React, Next.js, and more</div>
                  </div>
                </div>
                <div className="flex-1 bg-white border border-[#e1bee7] rounded-lg shadow-sm p-4 flex items-center gap-3">
                  <Palette className="w-6 h-6 text-[#9c27b0]" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Creative Design</div>
                    <div className="text-xs text-gray-500">UI/UX that converts</div>
                  </div>
                </div>
                <div className="flex-1 bg-white border border-[#e1bee7] rounded-lg shadow-sm p-4 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-[#9c27b0]" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Growth Focused</div>
                    <div className="text-xs text-gray-500">Results that matter</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <Button 
                  asChild
                  size="lg" 
                  className="bg-[#9c27b0] hover:bg-[#7b1fa2] text-white shadow-lg shadow-[#9c27b0]/20 transition-all"
                >
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-gray-300 hover:bg-white text-gray-700"
                >
                  <Link href="#portfolio">
                    View Work
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right image (first on mobile) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex items-center justify-center"
            >
              <img
                src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumPEix1FZ89C4GnNKHTXFvruVyAOm6ZwU2Sibo"
                alt="Digital solutions"
                className="object-cover rounded-2xl w-full h-full max-h-[400px] sm:max-h-[500px] md:max-h-[600px]"
                style={{ minHeight: "220px" }}
              />
              {/* Floating card effect */}
              <motion.div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:-bottom-8 sm:-left-8 bg-white p-6 rounded-xl shadow-lg w-64"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#e1bee7] rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#9c27b0]" />
                  </div>
                  <h3 className="font-medium text-gray-900">Trusted by 500+ businesses</h3>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Subtle decorative elements */}
        <motion.div 
          className="absolute bottom-20 left-10 w-8 h-8 rounded-full bg-[#9c27b0] opacity-10"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </section>
    </div>
  )
}

export default Hero
