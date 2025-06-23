import Link from "next/link"
import { Smartphone, Laptop, Wrench, Clock, CheckCircle, Star, Phone, Calendar } from "lucide-react"

export default function ServiceCenter() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Electro-Center <span className="text-green-300">Service Center</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
              Expert service center services for smartphones, computers, appliances, and electronics. Quick turnaround times
              with quality parts and professional service.
            </p>
            <Link
              href="#services"
              className="bg-primary hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
            >
              Book Service Center
              <Wrench className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Electronics Service Center Services
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Electro-Center Service Center is Luxembourg's trusted destination for professional electronics service center services.
                Our certified technicians specialize in fixing smartphones, tablets, laptops, computers, and home
                appliances with precision and care.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We use only genuine or high-quality compatible parts, offer competitive pricing, and provide warranties
                on all our service center work. Most service centers are completed the same day, getting your devices back to you
                quickly.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Clock className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Same-Day Service</h3>
                  <p className="text-sm text-gray-600">Most service centers completed within hours</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Quality Guarantee</h3>
                  <p className="text-sm text-gray-600">90-day warranty on all service centers</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Repair Service?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Certified technicians with years of experience</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Genuine and high-quality replacement parts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Transparent pricing with no hidden fees</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Free diagnostic and service center estimates</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Walk-in service and appointment scheduling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Center Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Service Center Services</h2>
            <p className="text-lg text-gray-600">Professional service center solutions for all your electronic devices</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80" alt="Smartphone & Tablet" className="w-full h-28 object-cover rounded-lg mb-4" />
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Smartphone & Tablet Repair</h3>
              <p className="text-gray-600 mb-4">
                Expert service center services for all smartphone and tablet brands and models.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-6">
                <li>• Screen replacement (LCD/OLED)</li>
                <li>• Battery replacement</li>
                <li>• Camera and speaker service center</li>
                <li>• Water damage restoration</li>
                <li>• Charging port service center</li>
                <li>• Software troubleshooting</li>
              </ul>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600">
                  Starting from <span className="font-bold text-gray-900">€29</span>
                </p>
                <p className="text-xs text-gray-500">Most service centers completed in 1-2 hours</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" alt="Laptop & Computer" className="w-full h-28 object-cover rounded-lg mb-4" />
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Laptop className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Computer & Laptop Repair</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive computer service center services for both hardware and software issues.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-6">
                <li>• Hardware diagnostics & service center</li>
                <li>• Screen and keyboard replacement</li>
                <li>• Hard drive and SSD upgrades</li>
                <li>• RAM and motherboard service center</li>
                <li>• Virus removal & OS installation</li>
                <li>• Data recovery services</li>
              </ul>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600">
                  Starting from <span className="font-bold text-gray-900">€49</span>
                </p>
                <p className="text-xs text-gray-500">Turnaround time: 1-3 business days</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Home Appliance" className="w-full h-28 object-cover rounded-lg mb-4" />
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Wrench className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Home Appliance Repair</h3>
              <p className="text-gray-600 mb-4">Professional service center services for kitchen and home appliances.</p>
              <ul className="text-sm text-gray-500 space-y-2 mb-6">
                <li>• Washing machine service center</li>
                <li>• Refrigerator & freezer service center</li>
                <li>• Dishwasher troubleshooting</li>
                <li>• Microwave and oven service center</li>
                <li>• Small appliance service center</li>
                <li>• Warranty service support</li>
              </ul>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600">
                  Starting from <span className="font-bold text-gray-900">€69</span>
                </p>
                <p className="text-xs text-gray-500">On-site service available</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80" alt="Gaming Console" className="w-full h-28 object-cover rounded-lg mb-4" />
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gaming Console Repair</h3>
              <p className="text-gray-600 mb-4">Specialized service center services for gaming consoles and accessories.</p>
              <ul className="text-sm text-gray-500 space-y-2 mb-6">
                <li>• PlayStation service center (PS4/PS5)</li>
                <li>• Xbox service center (One/Series X/S)</li>
                <li>• Nintendo Switch service center</li>
                <li>• Controller service center & replacement</li>
                <li>• HDMI port service center</li>
                <li>• Overheating issues</li>
              </ul>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600">
                  Starting from <span className="font-bold text-gray-900">€39</span>
                </p>
                <p className="text-xs text-gray-500">Same-day service available</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="TV & Audio" className="w-full h-28 object-cover rounded-lg mb-4" />
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📺</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">TV & Audio Repair</h3>
              <p className="text-gray-600 mb-4">Expert service center services for televisions and audio equipment.</p>
              <ul className="text-sm text-gray-500 space-y-2 mb-6">
                <li>• LED/OLED TV screen service center</li>
                <li>• Smart TV software issues</li>
                <li>• Sound system service center</li>
                <li>• Remote control replacement</li>
                <li>• HDMI and connectivity issues</li>
                <li>• Power supply problems</li>
              </ul>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600">
                  Starting from <span className="font-bold text-gray-900">€59</span>
                </p>
                <p className="text-xs text-gray-500">In-store and on-site service</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Accessories & Parts" className="w-full h-28 object-cover rounded-lg mb-4" />
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Accessories & Parts</h3>
              <p className="text-gray-600 mb-4">Quality accessories and replacement parts for all your devices.</p>
              <ul className="text-sm text-gray-500 space-y-2 mb-6">
                <li>• Phone cases and screen protectors</li>
                <li>• Chargers and cables</li>
                <li>• Headphones and earbuds</li>
                <li>• Computer accessories</li>
                <li>• Replacement batteries</li>
                <li>• Small electronics</li>
              </ul>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600">
                  Starting from <span className="font-bold text-gray-900">€9</span>
                </p>
                <p className="text-xs text-gray-500">Wide selection in stock</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Center Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Service Center Process</h2>
            <p className="text-lg text-gray-600">Simple, transparent, and efficient service center service</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bring Your Device</h3>
              <p className="text-gray-600">
                Walk in or schedule an appointment. We accept all brands and models for diagnosis.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Diagnosis</h3>
              <p className="text-gray-600">
                Our technicians perform a thorough diagnosis and provide a detailed service center estimate.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Repair</h3>
              <p className="text-gray-600">
                Once approved, we perform the service center using quality parts and professional techniques.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Testing</h3>
              <p className="text-gray-600">
                Thorough testing ensures your device works perfectly before pickup with warranty included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Trusted by thousands for reliable service center services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "My iPhone screen was completely shattered, but they fixed it in just 2 hours! Looks brand new and the
                price was very reasonable."
              </p>
              <div className="font-semibold text-gray-900">Emma Laurent</div>
              <div className="text-sm text-gray-500">iPhone Screen Repair</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Excellent laptop service center service! They recovered all my important files and fixed the hardware issue.
                Professional and trustworthy."
              </p>
              <div className="font-semibold text-gray-900">Marc Hoffmann</div>
              <div className="text-sm text-gray-500">Laptop Repair & Data Recovery</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Quick and efficient washing machine service center. The technician was knowledgeable and fixed the problem on
                the first visit. Highly recommend!"
              </p>
              <div className="font-semibold text-gray-900">Sarah Müller</div>
              <div className="text-sm text-gray-500">Appliance Repair</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Walk-ins Welcome</h2>
              <p className="text-lg text-gray-600 mb-6">
                No appointment necessary! Bring your device to our service center center and we'll provide a free diagnostic
                assessment. Most common service centers can be completed while you wait.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Hours</h3>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 8:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Repair Timeline</h3>
                    <div className="text-gray-600">
                      <p>Screen service centers: 1-2 hours</p>
                      <p>Battery replacement: 30-60 minutes</p>
                      <p>Computer service centers: 1-3 business days</p>
                      <p>Appliance service centers: Same day or next day</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Repair Warranty</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">90-day warranty on all service centers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Genuine and compatible parts only</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Free re-service center if issue persists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">No-fix, no-fee guarantee</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Emergency Repair Service</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Need urgent service center? We offer priority service for critical business devices and emergency situations.
                </p>
                <Link href="tel:+352123456789" className="text-primary font-semibold hover:underline">
                  Call for Emergency Service: +352 123 456 789
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Repair? We're Here to Help!</h2>
          <p className="text-xl mb-8 text-red-100">
            Professional service center services with same-day turnaround and quality guarantee
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
            >
              Visit Repair Center
              <Calendar className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+352123456789"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
            >
              Call Now: +352 123 456 789
              <Phone className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
