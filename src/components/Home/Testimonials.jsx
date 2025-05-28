"use client";

import React from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  GraduationCap, 
  Briefcase, 
  Monitor,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote
} from "lucide-react";
import Image from "next/image";

const colors = {
   primary: "#9c27b0",     // purple
  dark: "#111827",        // Gray-900
  light: "#f9fafb",       // Gray-50
  gray: "#f3f4f6",        // Gray-100
  primaryLight: "#ce93d8"  // purple-100
};

const testimonialData = {
  webAndAppDevelopment: [
    {
      name: "Ronit Prakash", // Client Name
      role: "Operations Director", // Adjusted role for a client
      image: "https://media.licdn.com/dms/image/v2/D5603AQFewlI7VW09Fg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708280686326?e=1750896000&v=beta&t=0R4Hv32FtHwwVjasXKxKdfRdrRIjmG-WsS3WtPzXrbk",
      testimonial: "The web application Godigitify developed for our transport company has revolutionized our booking and tracking system. It's incredibly robust and user-friendly, streamlining our entire operation.",
      rating: 5,
      highlight: "Transformative Web Solutions"
    },
    {
      name: "Naveen Jaiswal", // Client Name
      role: "Manager", // Adjusted role for a client
      image: "https://media.licdn.com/dms/image/v2/D5603AQHVwXFQ1mWrtA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710089176344?e=1750896000&v=beta&t=aHOisuhFveYFq6GRDuF14B0vIfq5DvWZAgTK0zK_qQU",
      testimonial: "Our new mobile app for electric item services and sales is a huge success, thanks to [Your Agency Name]. The functionality is flawless, and it has significantly boosted our customer engagement.",
      rating: 5,
      highlight: "Innovative Mobile App"
    },
    {
      name: "Parveen Jaiswal", // Client Name
      role: "Community Lead", // Adjusted role for a client
      image: "https://media.licdn.com/dms/image/v2/D5603AQFnP2LqKHK4Tg/profile-displayphoto-shrink_400_400/B56ZXRMoqbGsAk-/0/1742971506111?e=1750896000&v=beta&t=YpcZyttRFoUJDxr-s0uaEkHz7azUendwExwEos5ITXQ",
      testimonial: "The community engagement platform built by [Your Agency Name] has truly connected our members. Its intuitive design and powerful features have made a huge difference.",
      rating: 5,
      highlight: "Engaging Platform Development"
    }
  ],
  brandingAndDesign: [
    {
      name: "Amit Kumar", // Client Name
      role: "Director", // Adjusted role for a client
      image: "https://randomuser.me/api/portraits/men/22.jpg", // Kept randomuser as it was in original 'digitalMarketing'
      testimonial: "[Your Agency Name] completely revamped our institution's branding. Their creative vision and graphic design expertise gave us a fresh, modern identity that truly stands out.",
      rating: 5,
      highlight: "Exceptional Brand Refresh"
    },
    {
      name: "Priya Sharma", // Client Name
      role: "Marketing Head", // Adjusted role for a client
      image: "https://randomuser.me/api/portraits/women/29.jpg", // Kept randomuser as it was in original 'digitalMarketing'
      testimonial: "The team at [Your Agency Name] delivered stunning branding for our cafe, from our logo to our menu designs. Their attention to detail and artistic flair are unmatched.",
      rating: 5,
      highlight: "Captivating Cafe Branding"
    },
    {
      name: "Neha Gupta", // Client Name
      role: "Founder", // Adjusted role for a client
      image: "https://randomuser.me/api/portraits/women/65.jpg", // Kept randomuser as it was in original 'digitalMarketing'
      testimonial: "We needed a strong visual identity for our fencing company, and [Your Agency Name] exceeded our expectations. Their branding work perfectly captures our dynamic spirit.",
      rating: 5,
      highlight: "Dynamic Visual Identity"
    }
  ],
  digitalMarketing: [ // New category for digital marketing focus
    {
      name: "Dr. Rajesh Sharma", // Client Name
      role: "E-commerce Manager", // Adjusted role for a client
      image: "https://randomuser.me/api/portraits/men/42.jpg", // Kept randomuser as it was in original 'brandingAndDesign'
      testimonial: "The digital marketing strategies implemented by [Your Agency Name] have significantly boosted our online traffic and conversion rates. Their data-driven approach is truly impressive.",
      rating: 5,
      highlight: "Results-Driven Marketing"
    },
    {
      name: "Prof. Anita Desai", // Client Name
      role: "Startup Mentor", // Adjusted role for a client
      image: "https://randomuser.me/api/portraits/women/45.jpg", // Kept randomuser as it was in original 'brandingAndDesign'
      testimonial: "As a mentor, I often recommend [Your Agency Name] to startups. Their comprehensive digital marketing and branding services are essential for new businesses looking to establish a strong online presence.",
      rating: 5,
      highlight: "Strategic Digital Growth"
    },
    {
      name: "Prof. Sunita Patel", // Client Name
      role: "Client Relations Lead", // Adjusted role for a client
      image: "https://randomuser.me/api/portraits/women/68.jpg", // Kept randomuser as it was in original 'brandingAndDesign'
      testimonial: "Our collaboration with [Your Agency Name] on various digital campaigns has consistently yielded excellent results. Their understanding of market trends is top-notch.",
      rating: 5,
      highlight: "Market Insight & Execution"
    }
  ]
};

const TestimonialCard = ({ image, name, role, testimonial, rating = 5, highlight, delay = 0 }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [30, 0, 0, 30]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale, y }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all duration-300 relative h-full"
    >
      {/* Quote icon decoration */}
      <div className="absolute top-4 right-4 text-purple-100">
        <Quote className="w-8 h-8" />
      </div>
      
      {/* Highlight badge */}
      {highlight && (
        <div className="absolute -top-3 left-6 py-1 px-3 rounded-full text-xs font-medium bg-purple-600 text-white">
          {highlight}
        </div>
      )}
      
      {/* Star rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'fill-purple-500 text-purple-500' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial}"</p>
      
      <div className="flex items-center pt-4 border-t border-gray-100">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const sections = ['webAndAppDevelopment', 'brandingAndDesign', 'digitalMarketing'];
  const activeSection = sections[page % sections.length];
  
  const sectionIcons = {
    'webAndAppDevelopment': <GraduationCap className="w-4 h-4" />,
    'brandingAndDesign': <Briefcase className="w-4 h-4" />,
    'digitalMarketing': <Monitor className="w-4 h-4" />
  };
  
  const sectionTitles = {
    webAndAppDevelopment: "Student Success Stories",
    brandingAndDesign: "brandingAndDesign Perspectives",
    digitalMarketing: "Industry Recognition"
  };

  const sectionDescriptions = {
    webAndAppDevelopment: "Hear from our alumni who have successfully launched their careers through our programs",
    brandingAndDesign: "Academic digitalMarketing share their insights on the impact of our training",
    digitalMarketing: "Industry leaders discuss the quality and preparedness of our graduates"
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setPage(([prevPage]) => [prevPage + 1]);
        setTimeout(() => setIsAnimating(false), 700);
      }
    }, 8000);

    return () => clearInterval(timer);
  }, [isAnimating]);

  const paginate = (newDirection) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setPage([page + newDirection, newDirection]);
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-16 h-16 bg-purple-100 rounded-full opacity-20"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
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
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Quote className="w-4 h-4 mr-2" />
            Testimonials
          </motion.span>
          
          <AnimatePresence mode="wait">
            <motion.div key={activeSection + "header"}>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
              >
                {sectionTitles[activeSection]}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-lg text-gray-600 max-w-2xl mx-auto"
              >
                {sectionDescriptions[activeSection]}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Testimonial cards */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {testimonialData[activeSection].map((testimonial, index) => (
                <TestimonialCard
                  key={`${activeSection}-${index}`}
                  {...testimonial}
                  delay={index * 0.1}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button 
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-purple-600 hover:bg-purple-50 transition-all z-10"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-purple-600 hover:bg-purple-50 transition-all z-10"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Category selector */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex bg-white rounded-full shadow-sm p-1">
            {sections.map((section, index) => {
              const isActive = page % sections.length === index;
              return (
                <motion.button
                  key={section}
                  onClick={() => {
                    if (!isAnimating && !isActive) {
                      setIsAnimating(true);
                      setPage([index, index > page % sections.length ? 1 : -1]);
                      setTimeout(() => setIsAnimating(false), 700);
                    }
                  }}
                  className={`px-4 py-2 rounded-full flex items-center text-sm font-medium transition-all ${isActive ? 'bg-purple-600 text-white' : 'text-gray-600 hover:text-purple-600'}`}
                  whileHover={!isActive ? { scale: 1.05 } : {}}
                >
                  <span className="mr-2">
                    {React.cloneElement(sectionIcons[section], {
                      className: `w-4 h-4 ${isActive ? 'text-white' : 'text-purple-600'}`
                    })}
                  </span>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center mt-6 space-x-2 ">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating && page % sections.length !== index) {
                  setIsAnimating(true);
                  setPage([index, index > page % sections.length ? 1 : -1]);
                  setTimeout(() => setIsAnimating(false), 700);
                }
              }}
              className="w-2 h-2 rounded-full transition-all"
              style={{
                backgroundColor: page % sections.length === index ? colors.primary : colors.gray,
                opacity: page % sections.length === index ? 1 : 0.5
              }}
              aria-label={`Go to testimonial set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}