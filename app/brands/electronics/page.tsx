import Link from "next/link"
import { Tv, Laptop, Smartphone, Home, ShoppingCart, MapPin, Clock, Award } from "lucide-react"

export default function Electronics() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 relative">
  <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80" alt="Electronics Hero" className="absolute inset-0 w-full h-full object-cover object-center opacity-30 z-0 rounded-xl" style={{pointerEvents:'none'}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Electro-Center <span className="text-blue-300">Electronics</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Your premier destination for cutting-edge electronics, featuring the latest TVs, laptops, smartphones, and
              home appliances from world-renowned brands.
            </p>
            <Link
              href="#products"
              className="bg-primary hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
            >
              Shop Now
              <ShoppingCart className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Store Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  {/* Product/Showroom Image */}
  <div className="hidden lg:block">
    <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" alt="Showroom" className="w-full h-80 object-cover object-center rounded-xl shadow-lg" />
  </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Luxembourg's Premier Electronics Destination
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Since 2008, Electro-Center Electronics has been Luxembourg's trusted source for premium electronics and
                home appliances. Our showroom features the latest technology from leading global brands, backed by
                expert advice and exceptional customer service.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're upgrading your home entertainment system, need a powerful laptop for work, or looking for
                smart home solutions, our knowledgeable team is here to help you find the perfect technology for your
                lifestyle.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-primary" />
                  <span className="text-gray-700">Authorized Dealer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <span className="text-gray-700">Expert Support</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Competitive pricing with price-match guarantee</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Expert product consultation and setup assistance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Extended warranty options and after-sales support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Free delivery and installation services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-lg text-gray-600">Explore our comprehensive range of electronics and appliances</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Tv className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">TVs & Entertainment</h3>
              <p className="text-gray-600 mb-4">4K/8K Smart TVs, Sound Systems, Gaming Consoles, Streaming Devices</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Samsung, LG, Sony TVs</li>
                <li>• Premium Sound Systems</li>
                <li>• PlayStation & Xbox</li>
                <li>• Apple TV, Chromecast</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Laptop className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Computers & Laptops</h3>
              <p className="text-gray-600 mb-4">Gaming PCs, Business Laptops, MacBooks, Accessories</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Apple MacBooks</li>
                <li>• Dell, HP, Lenovo</li>
                <li>• Gaming Laptops</li>
                <li>• Keyboards, Mice, Monitors</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Smartphones & Tablets</h3>
              <p className="text-gray-600 mb-4">Latest iPhones, Android Phones, iPads, Accessories</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• iPhone 15 Series</li>
                <li>• Samsung Galaxy</li>
                <li>• iPad & Android Tablets</li>
                <li>• Cases, Chargers, AirPods</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Home className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Home Appliances</h3>
              <p className="text-gray-600 mb-4">Kitchen Appliances, Washing Machines, Smart Home Devices</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Refrigerators, Ovens</li>
                <li>• Washing Machines</li>
                <li>• Smart Home Systems</li>
                <li>• Small Kitchen Appliances</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Top Brands */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top Electronics Brands</h2>
            <p className="text-lg text-gray-600">We partner with the world's leading technology brands</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              "Apple",
              "Samsung",
              "Sony",
              "LG",
              "Dell",
              "HP",
              "Lenovo",
              "Nintendo",
              "Bosch",
              "Siemens",
              "Philips",
              "Panasonic",
            ].map((brand) => (
              <div
                key={brand}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm">{brand.slice(0, 2)}</span>
                </div>
                <h3 className="font-semibold text-gray-900">{brand}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Location */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Visit Our Showroom</h2>
              <p className="text-lg text-gray-600 mb-8">
                Experience our products firsthand in our modern showroom located in the heart of Luxembourg City. Our
                expert staff is ready to help you find the perfect technology solutions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      123 Avenue de la Liberté
                      <br />
                      L-1931 Luxembourg City
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Opening Hours</h3>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p>Interactive Store Map</p>
                <p className="text-sm">Visit us in Luxembourg City</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Upgrade Your Tech?</h2>
          <p className="text-xl mb-8 text-red-100">Visit our showroom or browse our online catalog today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://shop.electro-center.lu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Visit Online Store
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Our Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
