"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does a typical web development project take?",
    answer: "Project timelines vary based on complexity. A basic website takes 4-6 weeks, while complex web applications may require 3-6 months. We provide a detailed timeline after our initial consultation."
  },
  {
    question: "Do you offer ongoing maintenance after launch?",
    answer: "Yes, we provide flexible maintenance packages including security updates, content changes, and performance optimization. Our team remains available to support your digital product long-term."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We work with modern stacks including React/Next.js, Node.js, Python/Django, and headless CMS solutions. Our team stays current with industry standards to deliver cutting-edge solutions."
  },
  {
    question: "How do you ensure our website is secure?",
    answer: "We implement multiple security layers including HTTPS, regular vulnerability scans, secure authentication, and ongoing monitoring. Security is built into every phase of our development process."
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answer: "Absolutely. Our services include technical SEO implementation, content strategy, and performance marketing. We ensure your site is optimized for visibility and conversions from day one."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Color palette based on #9c27b0 and its variants
  const purpleMain = "#9c27b0";
  const purpleLight = "#e1bee7";
  const purpleLighter = "#f3e5f5";
  const purpleDark = "#7b1fa2";
  const purpleDarker = "#4a148c";

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: `linear-gradient(to bottom, white, ${purpleLighter})` }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-16 h-16 rounded-full opacity-20"
          style={{ background: purpleLight }}
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
          className="absolute bottom-20 right-10 w-24 h-24 rounded-full opacity-10"
          style={{ background: purpleMain }}
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center px-4 py-2 rounded-full mb-4"
            style={{ background: purpleLight, color: purpleDark }}
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <HelpCircle className="w-5 h-5 mr-2" />
            <span className="font-medium">FAQs</span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: purpleDarker }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Common Questions
          </motion.h2>
          <motion.p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: purpleDark }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Find answers to our most frequently asked questions below.
          </motion.p>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-sm border overflow-hidden"
              style={{ borderColor: purpleLight }}
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
                <h3 className="text-lg font-medium" style={{ color: purpleDarker }}>{faq.question}</h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" style={{ color: purpleMain }} />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0" style={{ color: purpleDark }}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="mb-6" style={{ color: purpleDark }}>
            Still have questions? We're happy to help.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg shadow-md transition-all"
            style={{
              background: purpleMain,
              color: "white",
              boxShadow: `0 2px 8px 0 ${purpleLight}`,
            }}
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}