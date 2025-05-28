"use client"

import Link from "next/link";
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
   const [showMegaMenu, setShowMegaMenu] = useState(false)
  const pathname = usePathname()
  const servicesList = [
    { label: "Web Development", href: "/services/web-development" },
    { label: "App Development", href: "/services/app-development" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
    { label: "Branding", href: "/services/branding" },
    { label: "SEO & Marketing", href: "/services/seo-marketing" },
    { label: "Cloud Solutions", href: "/services/cloud" },
    { label: "E-Commerce", href: "/services/ecommerce" },
    { label: "Consulting", href: "/services/consulting" },
  ]
  // Add scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Navigation items
  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "services", label: "Services", href: "/services" },
    
    { id: "about", label: "About", href: "/about" },
    { id: "contact", label: "Contact", href: "/contact" },
  ]

  // Helper to check if nav item is active
  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

return (
    <div className="w-full bg-white">
        <nav
            className={`fixed top-0 py-3 w-full z-50 transition-all duration-300 ${
                scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
            }`}
        >
            <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <div className="">
                            <img
                                src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumYL4YWSbtjEUG1hRlbryNkzHodgPJ7acmI8ue"
                                alt="Adaddictz Logo"
                                width={140}
                                height={40}
                                className="object-contain "
                                priority
                            />
                        </div>
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) =>
                                item.id === "services" ? (
                                    <div
                                        key={item.id}
                                        className="relative"
                                        onMouseEnter={() => setShowMegaMenu(true)}
                                        onMouseLeave={() => setShowMegaMenu(false)}
                                    >
                                        <button
                                            className={`
                                                relative px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-1
                                                ${isActive(item.href)
                                                    ? "bg-purple-600 text-white shadow-md scale-105"
                                                    : "text-semibold hover:bg-purple-50 hover:text-purple-600"}
                                            `}
                                            style={{
                                                boxShadow: isActive(item.href)
                                                    ? "0 4px 16px 0 rgba(156,39,176,0.10)"
                                                    : undefined,
                                            }}
                                            onClick={() => setShowMegaMenu((v) => !v)}
                                            type="button"
                                        >
                                            <span className={`transition-all duration-300 ${isActive(item.href) ? "font-semibold" : ""}`}>
                                                {item.label}
                                            </span>
                                            <ChevronDown className="w-4 h-4 ml-1" />
                                        </button>
                                        {/* Mega Menu */}
                                        {showMegaMenu && (
  <div
    className="absolute left-0 mt-3 w-[420px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50"
    onMouseEnter={() => setShowMegaMenu(true)}
    onMouseLeave={() => setShowMegaMenu(false)}
  >
    <Link
      href="/services"
      className="block px-3 py-2 mb-2 rounded-lg font-semibold text-purple-700 hover:bg-purple-50 transition-colors text-center border-b border-gray-100"
      onClick={() => setShowMegaMenu(false)}
    >
      View All Services
    </Link>
    <div className="grid grid-cols-2 gap-4 mt-2">
      {servicesList.map((service) => (
        <Link
          key={service.href}
          href={service.href}
          className="block px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-700 transition-colors font-medium text-gray-800"
          onClick={() => setShowMegaMenu(false)}
        >
          {service.label}
        </Link>
      ))}
    </div>
  </div>
)}
                                    </div>
                                    ) : (
                                    <Link
                                        key={item.id}
                                        href={item.href}
                                        className={`
                                            relative px-4 py-2 rounded-full font-medium transition-all duration-300
                                            ${isActive(item.href)
                                                ? "bg-purple-600 text-white shadow-md scale-105"
                                                : "text-semibold hover:bg-purple-50 hover:text-purple-600"}
                                        `}
                                        style={{
                                            boxShadow: isActive(item.href)
                                                ? "0 4px 16px 0 rgba(156,39,176,0.10)"
                                                : undefined,
                                        }}
                                    >
                                        <span className={`transition-all duration-300 ${isActive(item.href) ? "font-semibold" : ""}`}>
                                            {item.label}
                                        </span>
                                    </Link>
                                )
                            )}
                        </div>
                    </div>


                    <Link href="/contact">
                    <div className="hidden md:block cursor-pointer">
                        <Button className="bg-purple-500 hover:bg-purple-600 text-white">Get Started</Button>
                    </div>
                    </Link>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-black hover:text-purple-600 transition-colors duration-200"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                className={`
                                    block px-3 py-2 rounded-full transition-all duration-300
                                    ${
                                        isActive(item.href)
                                            ? "bg-purple-100 text-purple-700"
                                            : "text-black hover:bg-purple-50 hover:text-purple-600"
                                    }
                                `}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    </div>
)
}

export default Navbar
