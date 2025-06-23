import Link from "next/link"
import { Sun, Zap, Home, TrendingUp, Award, Phone, CheckCircle } from "lucide-react"

export default function Solar() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-600 to-orange-600 text-white py-20 relative">
  <img src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1500&q=80" alt="Solar Hero" className="absolute inset-0 w-full h-full object-cover object-center opacity-30 z-0 rounded-xl" style={{pointerEvents:'none'}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Electro-Center <span className="text-yellow-200">Solar</span>
            </h1>
            <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto mb-8">
              Harness the power of the sun with professional solar energy solutions. Government-backed incentives make
              solar more affordable than ever in Luxembourg.
            </p>
            <Link
              href="#consultation"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
            >
              Get Free Consultation
              <Sun className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solar Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Your Path to Energy Independence</h2>
              <p className="text-lg text-gray-600 mb-6">
                Electro-Center Solar specializes in designing and installing high-quality photovoltaic (PV) systems for
                residential and commercial properties across Luxembourg. Our certified installers ensure maximum
                efficiency and long-term reliability.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With Luxembourg's generous government incentives and our expert installation services, switching to
                solar has never been more attractive. Start saving on your energy bills while contributing to a
                sustainable future.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Certified Installers</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">25-Year Warranty</h3>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Solar Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <TrendingUp className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Reduce Energy Bills</h4>
                    <p className="text-gray-600">Save up to 90% on your electricity costs</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Home className="h-6 w-6 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Increase Property Value</h4>
                    <p className="text-gray-600">Solar installations boost home resale value</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Sun className="h-6 w-6 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Environmental Impact</h4>
                    <p className="text-gray-600">Reduce your carbon footprint significantly</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-purple-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Energy Independence</h4>
                    <p className="text-gray-600">Generate your own clean electricity</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PV Systems */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Solar Solutions</h2>
            <p className="text-lg text-gray-600">Comprehensive PV systems tailored to your energy needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Home className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Residential Solar</h3>
              <p className="text-gray-600 mb-4">
                Complete home solar solutions designed for maximum efficiency and savings.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-6">
                <li>• Rooftop installations</li>
                <li>• Battery storage options</li>
                <li>• Smart monitoring systems</li>
                <li>• Grid-tie capabilities</li>
              </ul>
              <div className="text-center">
                <span className="text-2xl font-bold text-gray-900">From €8,000</span>
                <p className="text-sm text-gray-500">After government incentives</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-yellow-400">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-center mb-2">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Solar Plus</h3>
              <p className="text-gray-600 mb-4">
                Advanced solar system with battery storage and smart home integration.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-6">
                <li>• High-efficiency panels</li>
                <li>• Tesla Powerwall battery</li>
                <li>• Smart home integration</li>
                <li>• 25-year warranty</li>
              </ul>
              <div className="text-center">
                <span className="text-2xl font-bold text-gray-900">From €15,000</span>
                <p className="text-sm text-gray-500">After government incentives</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial Solar</h3>
              <p className="text-gray-600 mb-4">
                Large-scale solar installations for businesses and industrial facilities.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-6">
                <li>• Custom design solutions</li>
                <li>• Commercial-grade equipment</li>
                <li>• Fleet monitoring</li>
                <li>• Tax incentive optimization</li>
              </ul>
              <div className="text-center">
                <span className="text-2xl font-bold text-gray-900">Custom Quote</span>
                <p className="text-sm text-gray-500">Based on energy needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Luxembourg Government Solar Benefits</h2>
            <p className="text-lg text-gray-600">
              Take advantage of generous government incentives to make solar more affordable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold">€</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Installation Grants</h3>
              <p className="text-gray-600 mb-4">
                Receive up to €5,000 in direct grants for residential solar installations.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Up to €500 per kWp installed</li>
                <li>• Maximum €5,000 per household</li>
                <li>• Direct payment to installer</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold">%</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tax Credits</h3>
              <p className="text-gray-600 mb-4">Benefit from reduced VAT rates and income tax deductions.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• 3% VAT instead of 17%</li>
                <li>• Income tax deductions</li>
                <li>• Accelerated depreciation</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-yellow-600 font-bold">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Feed-in Tariff</h3>
              <p className="text-gray-600 mb-4">Sell excess energy back to the grid at guaranteed rates.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Guaranteed 20-year contract</li>
                <li>• Competitive rates per kWh</li>
                <li>• Automatic grid connection</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Combined Savings: Up to 70% Off Installation Costs!</h3>
            <p className="text-yellow-100 mb-6">
              With government grants, tax benefits, and feed-in tariffs, your solar investment pays for itself faster
              than ever.
            </p>
            <Link
              href="#consultation"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Calculate Your Savings
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-lg text-gray-600">Real results from real Luxembourg families and businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Home className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">The Weber Family</h3>
                  <p className="text-sm text-gray-500">Residential - 8kW System</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Our monthly electricity bill went from €180 to just €25! The installation was professional and the
                system works perfectly."
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <span className="text-2xl font-bold text-green-600">85%</span>
                  <p className="text-sm text-gray-500">Bill Reduction</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-blue-600">6.2</span>
                  <p className="text-sm text-gray-500">Years Payback</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Luxembourg Bakery</h3>
                  <p className="text-sm text-gray-500">Commercial - 25kW System</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Solar has transformed our business. We're saving €400 monthly and our customers love our commitment to
                sustainability."
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <span className="text-2xl font-bold text-green-600">€4,800</span>
                  <p className="text-sm text-gray-500">Annual Savings</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-blue-600">5.8</span>
                  <p className="text-sm text-gray-500">Years Payback</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <Sun className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Villa Moderne</h3>
                  <p className="text-sm text-gray-500">Premium - 12kW + Battery</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Complete energy independence! Even during cloudy days, our battery keeps us powered. Best investment
                we've made."
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <span className="text-2xl font-bold text-green-600">95%</span>
                  <p className="text-sm text-gray-500">Energy Independence</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-blue-600">7.1</span>
                  <p className="text-sm text-gray-500">Years Payback</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Installation Process</h2>
            <p className="text-lg text-gray-600">From consultation to activation in just a few simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Consultation</h3>
              <p className="text-gray-600">
                Site assessment and custom system design based on your energy needs and roof specifications.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Permits & Approvals</h3>
              <p className="text-gray-600">
                We handle all paperwork, permits, and government incentive applications on your behalf.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Installation</h3>
              <p className="text-gray-600">
                Certified technicians install your system with minimal disruption, typically completed in 1-2 days.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">System Activation</h3>
              <p className="text-gray-600">
                Grid connection, system testing, and monitoring setup. Start saving immediately!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section id="consultation" className="py-16 bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Go Solar?</h2>
            <p className="text-xl text-yellow-100 mb-8">Get your free consultation and custom quote today</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">What You'll Get:</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-yellow-200" />
                  <span>Free site assessment and energy audit</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-yellow-200" />
                  <span>Custom system design and 3D visualization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-yellow-200" />
                  <span>Detailed savings analysis and ROI calculation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-yellow-200" />
                  <span>Government incentive optimization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-yellow-200" />
                  <span>No-obligation detailed quote</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6">Schedule Your Free Consultation</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                  <option>Monthly Electricity Bill</option>
                  <option>Under €100</option>
                  <option>€100 - €200</option>
                  <option>€200 - €300</option>
                  <option>Over €300</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Get My Free Solar Quote
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4 text-center">
                No spam, no sales pressure. Just honest advice and transparent pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Questions About Solar?</h2>
          <p className="text-xl text-gray-600 mb-8">Our solar experts are here to help you make the right decision</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Contact Solar Experts
              <Phone className="ml-2 h-5 w-5" />
            </Link>
            <a href="tel:+352123456789" className="btn-secondary inline-flex items-center">
              Call Now: +352 123 456 789
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
