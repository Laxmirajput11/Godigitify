"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
            {/* Animated background blobs */}
            <motion.div
                className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-purple-100 rounded-full opacity-30 blur-2xl z-0"
                animate={{ scale: [1, 1.15, 1], x: [0, 40, 0], y: [0, 30, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl z-0"
                animate={{ scale: [1, 1.08, 1], x: [0, -40, 0], y: [0, -30, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute left-1/2 top-1/4 w-16 h-16 rounded-full bg-purple-50 opacity-40 blur-xl z-0"
                animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-15">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIG9wYWNpdHk9IjAuMiI+PHBhdGggZD0iTTAgMEg0MFY0MCIvPjwvc3ZnPg==')]"></div>
            </div>

            {/* Centered Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4 lg:py-1 py-20">
                <motion.span
                    className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-base font-medium mb-2 mt-4 shadow"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Contact Us
                </motion.span>
                <motion.h1
                    className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <span className="block">Get in Touch</span>
                    <span className="text-purple-600 block">We're Here to Help</span>
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    Have a question, project, or partnership in mind? Reach out to us and our team will respond as soon as possible. We look forward to connecting with you!
                </motion.p>
                {/* Contact Highlights */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 mb-10 w-full max-w-2xl justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <div className="flex-1 bg-white/80 border border-purple-100 rounded-lg shadow-sm p-4 flex items-center gap-3 justify-center">
                        <Mail className="w-6 h-6 text-purple-500" />
                        <div>
                            <div className="font-semibold text-gray-900 text-sm">Email</div>
                            <div className="text-xs text-gray-500">info@godigitify.com</div>
                        </div>
                    </div>
                    <div className="flex-1 bg-white/80 border border-purple-100 rounded-lg shadow-sm p-4 flex items-center gap-3 justify-center">
                        <Phone className="w-6 h-6 text-purple-500" />
                        <div>
                            <div className="font-semibold text-gray-900 text-sm">Phone</div>
                            <div className="text-xs text-gray-500">+91 6204991247</div>
                        </div>
                    </div>
                    <div className="flex-1 bg-white/80 border border-purple-100 rounded-lg shadow-sm p-4 flex items-center gap-3 justify-center">
                        <MapPin className="w-6 h-6 text-purple-500" />
                        <div>
                            <div className="font-semibold text-gray-900 text-sm">Location</div>
                            <div className="text-xs text-gray-500">Patiala Punjab, India</div>
                        </div>
                    </div>
                </motion.div>
                {/* Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    <Button
                        asChild
                        size="lg"
                        className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/20 transition-all"
                    >
                        <a href="#form">
                            Send a Message
                        </a>
                    </Button>
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-gray-300 hover:bg-white text-gray-700"
                    >
                        <Link href="/about">
                            Learn More About Us
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
