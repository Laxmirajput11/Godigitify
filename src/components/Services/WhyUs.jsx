"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import {
    Users,
    Zap,
    Award,
    Clock,
    DollarSign,
} from "lucide-react"

function WhyUs() {
    const whyChooseUs = [
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Timely Delivery",
            description: "We respect deadlines and deliver projects on time, every time.",
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Scalable & Modern Tech",
            description: "Using cutting-edge technologies that grow with your business.",
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Dedicated Support",
            description: "24/7 support and maintenance to keep your digital assets running smoothly.",
        },
        {
            icon: <DollarSign className="w-8 h-8" />,
            title: "Affordable Pricing",
            description: "Premium quality services at competitive and transparent pricing.",
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Client-Centric Approach",
            description: "Your success is our priority. We work as partners in your growth.",
        },
    ]

    return (
        <section className="relative py-20 bg-gradient-to-br from-purple-50 via-white to-purple-100 overflow-hidden">
            {/* Decorative blurred circles */}
            <motion.div
                className="absolute -top-16 -left-16 w-56 h-56 bg-purple-100 rounded-full opacity-30 blur-2xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-3xl"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <Badge className="bg-purple-100 text-purple-700 mb-4 text-base px-4 py-2 shadow-sm">
                        Why Choose Us
                    </Badge>
                    <h2 className="text-2xl md:text-5xl font-bold text-black mb-6 tracking-tight">
                        What Sets Us Apart
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We combine expertise, innovation, and dedication to deliver exceptional results for our clients.
                    </p>
                </div>
                {/* Two column layout */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                    {/* Left: Image */}
                    <div className="w-full lg:h-[60vh] md:w-1/2 flex justify-center items-center">
                        <img
                            src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumPEix1FZ89C4GnNKHTXFvruVyAOm6ZwU2Sibo"
                            alt="Why Choose Us"
                            className="rounded-2xl "
                        />
                    </div>
                    {/* Right: Timeline/Content */}
                    <div className="w-full md:w-1/2 flex flex-col items-center">
                        <div className=" w-full max-w-2xl z-10">
                            {whyChooseUs.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="relative flex items-center gap-6 group"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: index * 0.12, type: "spring" }}
                                    viewport={{ once: true }}
                                >
                                    {/* Icon with vertical line below */}
                                    <div className="flex flex-col items-center relative z-10">
                                        <motion.div
                                            className="flex-shrink-0 w-16 h-16 rounded-full bg-white border-4 border-purple-100 flex items-center justify-center shadow-lg group-hover:bg-purple-50 transition-colors duration-300"
                                            whileHover={{ scale: 1.1, rotate: 8 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <span className="text-purple-500">{item.icon}</span>
                                        </motion.div>
                                        {/* Vertical line below icon, only */}
                                        {index !== whyChooseUs.length - 1 && (
                                            <div className="w-1 h-8 bg-gradient-to-b from-purple-200 to-purple-400 opacity-40 rounded-full mt-2" />
                                        )}
                                    </div>
                                    {/* Content */}
                                    <div className="bg-white/80 backdrop-blur-md rounded-xl px-6 py-4 mt-4 shadow-md border border-purple-50 w-full group-hover:bg-purple-50/60 transition-colors duration-300">
                                        <h3 className="text-lg md:text-lg font-bold text-black mb-1 group-hover:text-purple-600 transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-base ">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs