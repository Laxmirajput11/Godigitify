"use client";

import { useState, useEffect, useRef } from "react";
import {
  CheckCircle,
  FileSearch,
  Rocket,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Settings,
  User,
  Code,
  Award,
  Calendar,
  MapPin,
} from "lucide-react";

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [developerVisible, setDeveloperVisible] = useState(false);
  const waveRef = useRef(null);
  const developerRef = useRef(null);

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Set up resize listener
    window.addEventListener("resize", checkMobile);

    // Set visibility for animations
    setIsVisible(true);

    // Auto-rotate steps
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6000);

    // Intersection Observer for developer section
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDeveloperVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (developerRef.current) {
      observer.observe(developerRef.current);
    }

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, []);

  // Scroll to active card on mobile
  useEffect(() => {
    if (isMobile && waveRef.current) {
      // Check if the waveRef is visible in viewport
      const rect = waveRef.current.getBoundingClientRect();
      const inView =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth);

      if (inView) {
        const cards = waveRef.current.querySelectorAll(".step-card");
        if (cards[activeStep]) {
          cards[activeStep].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }
      }
    }
  }, [activeStep, isMobile]);

   const primaryColor = "#9c27b0"; // Purple-500
  const secondaryColor = "#f3e5f5"; // Purple-100 (light variant)
  const darkColor = "#4a148c"; // Purple-900 (dark variant)

  const steps = [
    {
      id: 1,
      title: "Discovery & Analysis",
      description:
        "We conduct comprehensive research and stakeholder interviews to fully understand your business objectives and technical requirements.",
      icon: <FileSearch className="w-5 h-5" />,
      color: primaryColor,
    },
    {
      id: 2,
      title: "Solution Development",
      description:
        "Our certified experts architect and implement robust solutions using industry best practices and cutting-edge technologies.",
      icon: <CheckCircle className="w-5 h-5" />,
      color: primaryColor,
    },
    {
      id: 3,
      title: "Testing & Quality Assurance",
      description:
        "Rigorous testing protocols ensure your solution meets the highest standards of performance, security, and reliability.",
      icon: <Settings className="w-5 h-5" />,
      color: primaryColor,
    },
    {
      id: 4,
      title: "Deployment & Optimization",
      description:
        "We ensure seamless implementation with comprehensive documentation, training, and continuous performance monitoring.",
      icon: <Rocket className="w-5 h-5" />,
      color: primaryColor,
    },
  ];

  const skills = [
    { name: "React/Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 88 },
    { name: "Python", level: 85 },
    { name: "AWS/Cloud", level: 82 },
    { name: "UI/UX Design", level: 78 },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-white">
      {/* Timeline Section */}
      <section className="w-11/12 mx-auto py-20 md:py-24 relative overflow-hidden ">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-50 rounded-full opacity-20 translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

        <header className="text-center mb-20">
          <div className="inline-block mb-3">
            <span className="px-3 py-1 bg-purple-50 text-purple-800 text-sm font-medium rounded-full">
              Enterprise Methodology
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
            Our <span style={{ color: primaryColor }}>Strategic Process</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 ">
            A structured approach to delivering measurable business outcomes
            through technology excellence
          </p>
        </header>

        {/* Mobile View: Horizontal Scrolling Cards */}
        <div
          className={`md:hidden relative mb-8 ${
            isVisible ? "opacity-100" : "opacity-0"
          } transition-opacity duration-700`}
        >
          <div
            ref={waveRef}
            className="flex overflow-x-auto pb-8 pt-4 px-4 -mx-4 snap-x snap-mandatory hide-scrollbar"
          >
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`step-card flex-shrink-0 w-[85%] snap-center mr-4 transition-all duration-300 ${
                  activeStep === index ? "scale-[1.02]" : "scale-100"
                }`}
                style={{ scrollSnapAlign: "center" }}
              >
                <div
                  className={`bg-white rounded-lg shadow-md overflow-hidden border-2 transition-all duration-300 h-full ${
                    activeStep === index
                      ? "border-purple-400"
                      : "border-transparent"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Card Header with Number */}
                  <div className="flex items-center p-4 border-b border-gray-100">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-sm"
                      style={{ backgroundColor: primaryColor }}
                    >
                      {step.id}
                    </div>
                    <h3 className="text-base font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>

                  {/* Card Content */}
                  <div className="p-4">
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>

                  {/* Card Footer */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 mt-auto">
                    <div className="flex items-center">
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center mr-2"
                        style={{
                          backgroundColor: `${primaryColor}15`,
                          color: primaryColor,
                        }}
                      >
                        {step.icon}
                      </span>
                      <span className="text-xs font-medium text-gray-500">
                        Phase {step.id}
                      </span>
                    </div>

                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <ChevronRight className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Indicator Dots */}
          <div className="flex justify-center mt-2 space-x-2">
            {steps.map((_, idx) => (
              <button
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeStep === idx ? "bg-purple-500" : "bg-gray-300"
                }`}
                onClick={() => setActiveStep(idx)}
                aria-label={`Go to step ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop View: Wave Path with Cards */}
        <div className="hidden md:block relative mb-12 md:mb-16">
          {/* The wave path SVG */}
          <div className="relative h-[300px] md:h-[250px] my-40">
            {/* Background wave path */}
            <svg
              className="w-full h-full absolute  left-0"
              viewBox="0 0 1200 300"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Shadow effect for the wave */}
              <filter
                id="wave-shadow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="2" result="offsetblur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.2" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Main wave path for background depth */}
              <path
                d="M0,150 C100,50 200,250 300,150 C400,50 500,250 600,150 C700,50 800,250 900,150 C1000,50 1100,250 1200,150"
                stroke="#f3f4f6"
                strokeWidth="12"
                strokeLinecap="round"
                filter="url(#wave-shadow)"
                className="wave-path-bg"
              />

              {/* Animated wave path overlay */}
              <path
                d="M0,150 C100,50 200,250 300,150 C400,50 500,250 600,150 C700,50 800,250 900,150 C1000,50 1100,250 1200,150"
                stroke={primaryColor}
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="1500"
                strokeDashoffset="1500"
                className={`wave-path-progress ${
                  isVisible ? "animate-wave-dash" : ""
                }`}
              />

              {/* Dotted line effect following the same path */}
              <path
                d="M0,150 C100,50 200,250 300,150 C400,50 500,250 600,150 C700,50 800,250 900,150 C1000,50 1100,250 1200,150"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="5 15"
                className="wave-path-dots"
              />
            </svg>

            {/* Cards positioned along the wave */}
            <div className="absolute ml-40 top-0 w-full h-full">
              {steps.map((step, index) => {
                // Calculate positions along the wave for 4 cards
                const xPercent = (index / (steps.length - 1)) * 75;

                // Alternate cards above and below the wave
                const isAbove = index % 2 === 0;
                const yPosition = isAbove ? "-60%" : "60%";

                return (
                  <div
                    key={step.id}
                    className={`absolute transition-all duration-700 ease-in-out ${
                      activeStep === index ? "z-20 scale-105" : "z-10 scale-100"
                    }`}
                    style={{
                      left: `${xPercent}%`,
                      top: yPosition,
                      transform: "translateX(-50%)",
                      opacity: isVisible ? 1 : 0,
                      transitionDelay: `${index * 150}ms`,
                    }}
                  >
                    {/* Card */}
                    <div
                      className={`w-[240px] sm:w-[280px] md:w-[300px] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 ${
                        activeStep === index ? "ring-2" : "hover:shadow-xl"
                      }`}
                      style={{
                        borderColor: primaryColor,
                        boxShadow:
                          activeStep === index
                            ? `0 8px 20px -5px ${primaryColor}40`
                            : "",
                      }}
                      onClick={() => setActiveStep(index)}
                    >
                      {/* Card Header with Number */}
                      <div className="flex items-center p-4 border-b border-gray-100">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-sm"
                          style={{ backgroundColor: primaryColor }}
                        >
                          {step.id}
                        </div>
                        <h3 className="text-base font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>

                      {/* Card Content */}
                      <div className="p-3">
                        <p className="text-gray-600 text-xs sm:text-sm">
                          {step.description}
                        </p>
                      </div>

                      {/* Card Footer */}
                      <div className="flex items-center justify-between p-3 bg-gray-50">
                        <div className="flex items-center">
                          <span
                            className="w-6 h-6 rounded-full flex items-center justify-center mr-2"
                            style={{
                              backgroundColor: `${primaryColor}15`,
                              color: primaryColor,
                            }}
                          >
                            {step.icon}
                          </span>
                          <span className="text-xs font-medium text-gray-500">
                            Phase {step.id}
                          </span>
                        </div>

                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: primaryColor }}
                        >
                          <ChevronRight className="w-3 h-3 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Connector Line to Wave */}
                    <div
                      className="absolute left-1/2 transform -translate-x-1/2 w-1"
                      style={{
                        top: isAbove ? "100%" : "auto",
                        bottom: isAbove ? "auto" : "100%",
                        height: "40px",
                        backgroundColor: primaryColor,
                      }}
                    ></div>

                    {/* Dot on the Wave */}
                    <div
                      className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full"
                      style={{
                        top: isAbove ? "calc(100% + 40px)" : "auto",
                        bottom: isAbove ? "auto" : "calc(100% + 40px)",
                        backgroundColor: primaryColor,
                        boxShadow: `0 0 0 3px white, 0 0 0 5px ${primaryColor}40`,
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Step Detail Card */}
        <div
          className={`max-w-3xl mx-auto mt-8 md:mt-40 transition-all duration-500 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <div
            className="bg-white rounded-lg shadow-lg border overflow-hidden"
            style={{ borderColor: primaryColor }}
          >
            <div className="md:flex">
              <div className="md:w-2/5 h-48 md:h-auto relative bg-gradient-to-br from-purple-50 to-purple-100">
                <div
                  className="absolute top-0 left-0 w-full h-full opacity-10"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <div
                  className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow-md bg-white"
                  style={{ color: primaryColor }}
                >
                  {steps[activeStep].icon}
                </div>
                <div
                  className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded-full shadow-sm text-xs font-medium"
                  style={{ color: primaryColor }}
                >
                  Step {steps[activeStep].id} of {steps.length}
                </div>
              </div>

              <div className="p-4 md:p-5 md:w-3/5">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: primaryColor }}
                  >
                    {steps[activeStep].id}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">
                    {steps[activeStep].title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  {steps[activeStep].description}
                </p>

                <div className="mt-5 flex justify-between items-center">
                  <button
                    className="px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1 border hover:bg-gray-50 transition-colors"
                    onClick={() =>
                      setActiveStep(
                        (prev) => (prev - 1 + steps.length) % steps.length
                      )
                    }
                  >
                    <ChevronLeft className="w-3 h-3" />
                    Previous
                  </button>

                  <div className="hidden md:flex gap-1.5">
                    {steps.map((_, idx) => (
                      <button
                        key={idx}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          activeStep === idx
                            ? "bg-purple-500"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        onClick={() => setActiveStep(idx)}
                        aria-label={`Go to step ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-white shadow-sm transition-colors flex items-center gap-1 hover:opacity-90"
                    style={{ backgroundColor: primaryColor }}
                    onClick={() =>
                      setActiveStep((prev) => (prev + 1) % steps.length)
                    }
                  >
                    Next
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-10">
          <div className="text-center max-w-2xl mb-6">
            <p className="text-gray-700 text-sm md:text-base">
              Our methodology has been refined through years of experience
              delivering enterprise solutions across industries. Each phase is
              carefully designed to maximize value and minimize risk.
            </p>
          </div>

          <a href="/contact/#form">
            <button
              className="px-5 py-2.5 cursor-pointer rounded-lg text-sm font-medium text-white shadow-sm transition-colors hover:shadow-md hover:opacity-90 flex items-center gap-2 group"
              style={{ backgroundColor: primaryColor }}
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </a>
        </div>
      </section>

      {/* Developer Profile Section */}
      {/* Developer Profile Section */}
      <section
        ref={developerRef}
        className="w-11/12 mx-auto h-auto relative overflow-hidden bg-white flex items-center py-5"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-white w-full h-full"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full opacity-30 -translate-y-1/2 translate-x-1/2 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-50 rounded-full opacity-40 translate-y-1/2 -translate-x-1/2 blur-2xl animate-pulse"></div>
        <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-purple-300 rounded-full opacity-15 animate-pulse"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-purple-400 rotate-45 opacity-20 animate-spin-slow"></div>
        <div className="absolute bottom-32 right-20 w-4 h-4 bg-purple-500 rounded-full opacity-25 animate-bounce"></div>

        <div className="relative z-10 w-full h-full flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 h-full items-center">
              {/* Left Side - Image with One Card */}

              {/* Left Side - Image with One Card */}
              <div
                className={`transition-all duration-1000 flex items-center justify-center ${
                  developerVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                // Make left side take full height of right side content
                style={{ height: "100%" }}
              >
                <div className="relative flex items-center h-full w-full">
                  {/* Main Profile Image */}
                  <div className="relative w-full max-w-[350px] aspect-[3/4] flex items-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl rotate-3 opacity-50"></div>
                    <img
                      src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumIDzjDWxR21jqluvKkFoRaDpPfCGTtxewIs74"
                      alt="Lead Developer"
                      className="relative w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white"
                    />

                    {/* Single Card - Experience */}
                    <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg p-3 border border-purple-100 animate-float">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Code className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            3+ Years
                          </p>
                          <p className="text-xs text-gray-500">Experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - All Content Compact */}
              <div
                className={`transition-all duration-1000 delay-300 h-full flex flex-col justify-center ${
                  developerVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                <div className="space-y-6 max-h-full overflow-y-auto pr-4">
                  {/* Header */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      Niraj Gupta
                    </h3>
                    <p className="text-lg text-purple-600 font-semibold mb-2">
                      Full-Stack Web & App Developer
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Passionate about creating scalable web applications with
                      8+ years of experience in modern JavaScript frameworks,
                      cloud architecture, and user experience design.
                    </p>
                  </div>

                  {/* Skills Section - Compact */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4 text-purple-600" />
                      Skills
                    </h4>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                      {skills.map((skill, index) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2 bg-transparent p-0 m-0"
                        >
                          <span className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-purple-500 bg-white">
                            <CheckCircle className="w-3 h-3 text-purple-500" />
                          </span>
                          <span className="text-gray-900 text-xs font-medium">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Projects Section - Compact */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Rocket className="w-4 h-4 text-purple-600" />
                      Featured Projects
                    </h4>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
                      {[
                        {
                          title: "E-Commerce Platform",
                          description:
                            "Full-stack solution with React, Node.js, MongoDB",
                          tech: ["React", "Node.js"],
                        },
                        {
                          title: "Healthcare Dashboard",
                          description:
                            "Real-time analytics with advanced visualization",
                          tech: ["Vue.js", "Python"],
                        },
                        {
                          title: "Mobile Banking App",
                          description:
                            "Secure banking with biometric authentication",
                          tech: ["React Native", "AWS"],
                        },
                      ].map((project, index) => (
                        <div
                          key={project.title}
                          className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 hover:shadow-md transition-all duration-300"
                        >
                          <div className="h-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-md mb-2 flex items-center justify-center">
                            <Code className="w-6 h-6 text-purple-600" />
                          </div>
                          <h5 className="font-semibold text-gray-900 text-xs mb-1">
                            {project.title}
                          </h5>
                          <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-1.5 py-0.5 bg-purple-50 text-purple-700 text-xs font-medium rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements Section - Compact */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-purple-600" />
                      Achievements
                    </h4>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
                      {[
                        {
                          icon: <Award className="w-5 h-5 text-purple-600" />,
                          title: "Best Developer 2023",
                          description: "Top performer recognition",
                        },
                        {
                          icon: <User className="w-5 h-5 text-purple-600" />,
                          title: "Mentor of the Year",
                          description: "Mentored 15+ developers",
                        },

                        {
                          icon: <Rocket className="w-5 h-5 text-purple-600" />,
                          title: "Innovation Award",
                          description: "60% efficiency improvement",
                        },
                      ].map((achievement, index) => (
                        <div
                          key={achievement.title}
                          className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                        >
                          <div className="flex items-start gap-2">
                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              {achievement.icon}
                            </div>
                            <div className="min-w-0">
                              <h5 className="font-semibold text-gray-900 text-xs mb-1">
                                {achievement.title}
                              </h5>
                              <p className="text-gray-600 text-xs">
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact CTA - Compact */}
                  <div className="pt-2">
                    <a
                      href="https://www.linkedin.com/in/niraj-gupta-04b3ba255/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="w-full mb-4 cursor-pointer px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm group">
                        <User className="w-4 h-4" />
                        Connect with Niraj
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .wave-path-bg {
          animation: float 8s ease-in-out infinite;
        }

        .wave-path-dots {
          animation: float 8s ease-in-out infinite reverse;
        }

        .animate-wave-dash {
          animation: dash 2.5s ease-in-out forwards,
            pulse 4s ease-in-out infinite;
        }

        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Hide scrollbar for Chrome, Safari and Opera */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
}
