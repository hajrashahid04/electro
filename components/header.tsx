"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import LanguageSwitcher from "./language-switcher"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBrandsOpen, setIsBrandsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsBrandsOpen(false)
    }

    if (isBrandsOpen) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isBrandsOpen])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white shadow-lg border-b-2 border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img src="/electro-center-logo.png" alt="Electro-Center Logo" className="h-14 w-auto drop-shadow-md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Brands Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsBrandsOpen(!isBrandsOpen)
                }}
                className="flex items-center text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group"
              >
                Our Brands
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-all duration-300 ${isBrandsOpen ? "rotate-180" : ""}`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>

              {isBrandsOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 animate-slide-in-top">
                  <Link
                    href="/brands/electronics"
                    className="block px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-primary transition-all duration-300 border-b border-gray-100 group"
                    onClick={() => setIsBrandsOpen(false)}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                        <span className="text-blue-600">📱</span>
                      </div>
                      <div>
                        <div className="font-medium">Electro-Center Electronics</div>
                        <div className="text-sm text-gray-500">Premium electronics retail</div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/brands/solar"
                    className="block px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-primary transition-all duration-300 border-b border-gray-100 group"
                    onClick={() => setIsBrandsOpen(false)}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                        <span className="text-yellow-600">☀️</span>
                      </div>
                      <div>
                        <div className="font-medium">Electro-Center Solar</div>
                        <div className="text-sm text-gray-500">Solar energy solutions</div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/brands/service-center"
                    className="block px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-primary transition-all duration-300 group"
                    onClick={() => setIsBrandsOpen(false)}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                        <span className="text-green-600">🔧</span>
                      </div>
                      <div>
                        <div className="font-medium">Electro-Center Service Center</div>
                        <div className="text-sm text-gray-500">Expert service center</div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/careers"
              className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Careers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <LanguageSwitcher />
</nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 group"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
            ) : (
              <Menu className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-slide-in-top">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary transition-colors font-medium py-2 hover:bg-gray-50 px-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary transition-colors font-medium py-2 hover:bg-gray-50 px-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="pl-4 space-y-2">
                <Link
                  href="/brands/electronics"
                  className="block text-gray-600 hover:text-primary transition-colors py-2 hover:bg-gray-50 px-2 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  📱 Electro-Center Electronics
                </Link>
                <Link
                  href="/brands/solar"
                  className="block text-gray-600 hover:text-primary transition-colors py-2 hover:bg-gray-50 px-2 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ☀️ Electro-Center Solar
                </Link>
                <Link
                  href="/brands/repairs"
                  className="block text-gray-600 hover:text-primary transition-colors py-2 hover:bg-gray-50 px-2 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  🔧 Electro-Center Repairs
                </Link>
              </div>
              <Link
                href="/careers"
                className="text-gray-700 hover:text-primary transition-colors font-medium py-2 hover:bg-gray-50 px-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-primary transition-colors font-medium py-2 hover:bg-gray-50 px-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
