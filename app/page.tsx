import Link from "next/link"
import { ArrowRight, Star, Users, Award, Zap, Sparkles } from "lucide-react"
import ScrollReveal from "@/components/animations/scroll-reveal"
import Typewriter from "@/components/animations/typewriter"

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-20 min-h-[100vh] flex items-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary rounded-full opacity-10 floating delay-100"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gold rounded-full opacity-10 floating delay-300"></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-primary rounded-full opacity-10 floating delay-500"></div>
          <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-gold rounded-full opacity-10 floating delay-200"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="text-center">
            <div className="animate-slide-in-top">
              <h1 className="text-4xl md:text-7xl font-bold mb-6 text-shadow-lg">
                Powering Luxembourg with
                <span className="gradient-text block mt-2 pulse-glow">
                  <Typewriter
                    texts={["Technology", "Energy", "Service", "Innovation"]}
                    speed={150}
                    deleteSpeed={100}
                    delayBetween={2000}
                  />
                </span>
              </h1>
            </div>

            <ScrollReveal delay={300}>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
                Your trusted partner for cutting-edge electronics, sustainable solar solutions, and reliable repair
                services across Luxembourg.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/brands/electronics" className="btn-primary group flex items-center justify-center">
                  <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="btn-secondary group">
                  Get In Touch
                  <div className="ml-2 w-2 h-2 bg-white rounded-full group-hover:animate-ping"></div>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Welcome to <span className="gradient-text">Electro-Center Group</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                As Luxembourg's leading technology and energy solutions provider, we bring together three specialized
                divisions under one trusted brand, delivering excellence across electronics retail, solar energy, and
                repair services.
              </p>
            </div>
          </ScrollReveal>

          {/* Animated Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            {[
              { icon: Users, number: "10,000+", label: "Happy Customers", color: "bg-primary", delay: 100 },
              { icon: Award, number: "15+", label: "Years Experience", color: "bg-gold", delay: 200 },
              { icon: Zap, number: "500+", label: "Solar Installations", color: "bg-primary", delay: 300 },
              { icon: Star, number: "4.9/5", label: "Customer Rating", color: "bg-gold", delay: 400 },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={stat.delay} direction="scale">
                <div className="text-center group">
                  <div
                    className={`w-20 h-20 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 pulse-glow`}
                  >
                    <stat.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2 group-hover:scale-105 transition-transform">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Brands Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="gradient-text">Brands</span>
              </h2>
              <p className="text-xl text-gray-600">Three specialized divisions, one commitment to excellence</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Electronics */}
            <ScrollReveal delay={100} direction="left">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover group">
                <div className="h-64 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="text-center text-white z-10">
                    <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-4xl">📱</span>
                    </div>
                    <h3 className="text-3xl font-bold">Electronics</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    Premium electronics retail store offering the latest TVs, laptops, smartphones, and home appliances
                    from top global brands.
                  </p>
                  <ul className="text-gray-500 mb-8 space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Latest Technology Products
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Top Global Brands
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Expert Product Advice
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Competitive Pricing
                    </li>
                  </ul>
                  <Link href="/brands/electronics" className="btn-primary w-full text-center block group">
                    Visit Electronics Store
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Solar */}
            <ScrollReveal delay={200} direction="up">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover group">
                <div className="h-64 bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="text-center text-white z-10">
                    <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-4xl">☀️</span>
                    </div>
                    <h3 className="text-3xl font-bold">Solar</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    Sustainable solar energy solutions with professional PV system installation and government-backed
                    benefits for Luxembourg residents.
                  </p>
                  <ul className="text-gray-500 mb-8 space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      Professional Installation
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      Government Incentives
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      Energy Independence
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      Long-term Savings
                    </li>
                  </ul>
                  <Link href="/brands/solar" className="btn-secondary w-full text-center block group">
                    Explore Solar Solutions
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Repairs */}
            <ScrollReveal delay={300} direction="right">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover group">
                <div className="h-64 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="text-center text-white z-10">
                    <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-4xl">🔧</span>
                    </div>
                    <h3 className="text-3xl font-bold">Repairs</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    Expert repair services for smartphones, computers, appliances, and electronics with quick turnaround
                    times and quality parts.
                  </p>
                  <ul className="text-gray-500 mb-8 space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Quick Turnaround
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Quality Parts
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Expert Technicians
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Warranty Included
                    </li>
                  </ul>
                  <Link href="/brands/repairs" className="btn-primary w-full text-center block group">
                    Get Repair Service
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Our <span className="gradient-text">Customers Say</span>
              </h2>
              <p className="text-xl text-gray-600">Trusted by thousands across Luxembourg</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Excellent service from Electro-Center Electronics! Found the perfect TV for our home and the staff was incredibly helpful with setup.",
                name: "Marie Dubois",
                role: "Electronics Customer",
                delay: 100,
              },
              {
                text: "Our solar installation exceeded expectations. Professional team, great results, and we're already seeing savings on our energy bills!",
                name: "Jean-Claude Weber",
                role: "Solar Customer",
                delay: 200,
              },
              {
                text: "Quick and reliable phone repair service. My iPhone was fixed the same day and works perfectly. Highly recommend!",
                name: "Sophie Martinez",
                role: "Repair Customer",
                delay: 300,
              },
            ].map((review, index) => (
              <ScrollReveal key={index} delay={review.delay} direction="up">
                <div className="bg-gray-50 rounded-2xl p-8 card-hover group">
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 text-yellow-400 fill-current group-hover:scale-110 transition-transform"
                        style={{ transitionDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed italic">"{review.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">{review.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{review.name}</div>
                      <div className="text-sm text-gray-500">{review.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-red-700"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full floating delay-100"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full floating delay-300"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full floating delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Excellence?</h2>
            <p className="text-2xl mb-10 text-red-100">Join thousands of satisfied customers across Luxembourg</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5 inline group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 group"
              >
                Learn More About Us
                <Sparkles className="ml-2 h-5 w-5 inline group-hover:animate-spin" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
