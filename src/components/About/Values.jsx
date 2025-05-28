"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Values = () => {
  return (
    <section className="relative py-12 bg-gradient-to-br from-purple-50 via-white to-purple-100 overflow-hidden flex items-center justify-center">
      {/* Animated background blobs */}
      <motion.div
        className="absolute -top-24 -left-24 w-80 h-80 bg-purple-200 rounded-full opacity-30 blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1], x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full opacity-10 blur-3xl z-0"
        animate={{ scale: [1, 1.08, 1], x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Subtle animated grid pattern */}
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none z-0"
        animate={{ opacity: [0.1, 0.23, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIG9wYWNpdHk9IjAuMTUiPjxwYXRoIGQ9Ik0wIDBIND
BWNDAiLz48L3N2Zz4=')]"></div>
      </motion.div>
      {/* Value Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Ready to Elevate Your Digital Presence?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Let’s work together to build something amazing. Reach out to our team and start your journey to digital excellence today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white cursor-pointer px-8 py-4 text-lg rounded-full shadow-lg transition-all flex items-center gap-2"
            >
              Connect With Us
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;