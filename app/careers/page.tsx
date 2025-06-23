import Link from "next/link"
import { Users, TrendingUp, Heart, Award, MapPin, Euro, Mail } from "lucide-react"

export default function Careers() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 relative">
  <img src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1500&q=80" alt="Careers Hero" className="absolute inset-0 w-full h-full object-cover object-center opacity-30 z-0 rounded-xl" style={{pointerEvents:'none'}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build your career with Luxembourg's leading technology and energy solutions provider. We're always looking
              for passionate individuals to join our growing team.
            </p>
            <Link href="#openings" className="btn-primary">
              View Open Positions
              <TrendingUp className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
  {/* Office/Teamwork Image */}
  <div className="hidden lg:block mb-12">
    <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1000&q=80" alt="Teamwork" className="w-full h-80 object-cover object-center rounded-xl shadow-lg" />
  </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Electro-Center?</h2>
            <p className="text-lg text-gray-600">
              Join a company that values innovation, growth, and work-life balance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Career Growth</h3>
              <p className="text-gray-600">
                Clear advancement paths with ongoing training and professional development opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Great Team</h3>
              <p className="text-gray-600">
                Work alongside passionate professionals in a collaborative and supportive environment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Work-Life Balance</h3>
              <p className="text-gray-600">
                Flexible schedules, generous vacation time, and a culture that values personal well-being.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Be part of Luxembourg's technology future with cutting-edge projects and solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="openings" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Job Openings</h2>
            <p className="text-lg text-gray-600">Join our team and help shape the future of technology in Luxembourg</p>
          </div>

          <div className="space-y-8">
            {/* Electronics Division Jobs */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-50 px-6 py-4 border-b">
                <h3 className="text-xl font-bold text-gray-900">Electro-Center Electronics</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">Sales Associate</h4>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Full-time</span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Help customers find the perfect electronics while providing expert product knowledge and
                      exceptional service.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>Luxembourg City</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Euro className="h-4 w-4" />
                        <span>€35,000 - €45,000</span>
                      </div>
                    </div>
                    <Link href="/contact" className="text-primary hover:underline font-semibold">
                      Apply Now →
                    </Link>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">Store Manager</h4>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Full-time</span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Lead our electronics retail team and drive sales performance while ensuring excellent customer
                      experience.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>Luxembourg City</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Euro className="h-4 w-4" />
                        <span>€50,000 - €65,000</span>
                      </div>
                    </div>
                    <Link href="/contact" className="text-primary hover:underline font-semibold">
                      Apply Now →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Solar Division Jobs */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-yellow-50 px-6 py-4 border-b">
                <h3 className="text-xl font-bold text-gray-900">Electro-Center Solar</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">Solar Installation Technician</h4>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Full-time</span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Install and maintain solar PV systems for residential and commercial customers across Luxembourg.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>Luxembourg</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Euro className="h-4 w-4" />
                        <span>€45,000 - €55,000</span>
                      </div>
                    </div>
                    <Link href="/contact" className="text-primary hover:underline font-semibold">
                      Apply Now →
                    </Link>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">Solar Sales Consultant</h4>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Full-time</span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Consult with customers on solar solutions and help them transition to renewable energy.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>Luxembourg City</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Euro className="h-4 w-4" />
                        <span>€40,000 - €60,000</span>
                      </div>
                    </div>
                    <Link href="/contact" className="text-primary hover:underline font-semibold">
                      Apply Now →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Repairs Division Jobs */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-green-50 px-6 py-4 border-b">
                <h3 className="text-xl font-bold text-gray-900">Electro-Center Repairs</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">Electronics Repair Technician</h4>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Full-time</span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Repair smartphones, tablets, laptops, and other electronic devices with precision and expertise.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>Luxembourg City</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Euro className="h-4 w-4" />
                        <span>€38,000 - €48,000</span>
                      </div>
                    </div>
                    <Link href="/contact" className="text-primary hover:underline font-semibold">
                      Apply Now →
                    </Link>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">Customer Service Representative</h4>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Full-time</span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Provide excellent customer service and support for repair services and warranty claims.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>Luxembourg City</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Euro className="h-4 w-4" />
                        <span>€32,000 - €42,000</span>
                      </div>
                    </div>
                    <Link href="/contact" className="text-primary hover:underline font-semibold">
                      Apply Now →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 text-red-100">
            Send us your CV and let's discuss how you can contribute to our success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Apply Now
            </Link>
            <a
              href="mailto:careers@electro-center.lu"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
            >
              Email HR Department
              <Mail className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
