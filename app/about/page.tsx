import { Users, Target, Eye, Award, Calendar, MapPin } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 relative">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80" alt="About Electro-Center" className="absolute inset-0 w-full h-full object-cover object-center opacity-30 z-0 rounded-xl" style={{ pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-primary">Electro-Center</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Building Luxembourg's technological future through innovation, sustainability, and exceptional service since 2008.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Company/Team Image */}
            <div className="hidden lg:block">
              <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80" alt="Our Team" className="w-full h-80 object-cover object-center rounded-xl shadow-lg" />
            </div>

            {/* Our Story */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2008, Electro-Center Group began as a small electronics retailer with a vision to bring cutting-edge technology to Luxembourg families and businesses. Over the years, we've evolved into a trusted provider of sustainable energy solutions, advanced electronics, and comprehensive repair services.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">10,000+</h3>
                  <p className="text-gray-600">Customers</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">3</h3>
                  <p className="text-gray-600">Locations</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">15+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                To empower Luxembourg's communities with innovative technology solutions, sustainable energy alternatives, and reliable repair services that enhance daily life while contributing to a greener, more connected future.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                To be Luxembourg's leading integrated technology and energy solutions provider, recognized for excellence in customer service, innovation in sustainable practices, and commitment to building stronger communities through technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎯', title: 'Excellence', desc: 'We strive for excellence in every product, service, and customer interaction.' },
              { icon: '🌱', title: 'Sustainability', desc: 'Committed to environmental responsibility through solar energy and sustainable practices.' },
              { icon: '🤝', title: 'Trust', desc: 'Building lasting relationships through transparency, reliability, and honest service.' },
              { icon: '💡', title: 'Innovation', desc: 'Embracing new technologies and creative solutions to better serve our customers.' },
            ].map((value, index) => (
              <div className="text-center" key={index}>
                <div className={`w-20 h-20 ${index % 2 === 0 ? 'bg-primary' : 'bg-gold'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl text-white">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Message</h2>
          </div>

          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl">👨‍💼</span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">Alexandre Müller</h3>
                  <p className="text-gold font-semibold">Founder & CEO</p>
                </div>
              </div>

              <div className="lg:col-span-2">
                <blockquote className="text-lg text-gray-600 italic mb-6">
                  "When I founded Electro-Center in 2008, my vision was simple: to bring the best technology solutions to Luxembourg families and businesses while building a company that truly cares about its community."
                </blockquote>
                <p className="text-gray-600 mb-4">
                  "Today, I'm proud to see how we've grown from a small electronics store into Luxembourg's trusted technology and energy partner. Our three divisions work together seamlessly to provide comprehensive solutions that make life better for our customers."
                </p>
                <p className="text-gray-600">
                  "As we look to the future, we remain committed to innovation, sustainability, and the exceptional service that has made Electro-Center a household name in Luxembourg. Thank you for being part of our journey."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">Key milestones in our growth story</p>
          </div>

          <div className="space-y-8">
            {[
              { year: '2008', title: 'Company Founded', desc: 'Electro-Center opens its first electronics retail store in Luxembourg City.' },
              { year: '2012', title: 'Repair Services Launch', desc: 'Expanded services to include professional electronics and device repair services.' },
              { year: '2016', title: 'Solar Division Created', desc: 'Launched Electro-Center Solar to provide sustainable energy solutions.' },
              { year: '2020', title: 'Digital Transformation', desc: 'Launched online platforms and enhanced digital customer experience.' },
              { year: '2023', title: '10,000+ Customers', desc: 'Reached milestone of serving over 10,000 satisfied customers across Luxembourg.' },
            ].map((milestone, index) => (
              <div className="flex items-center space-x-6" key={index}>
                <div className={`w-16 h-16 ${index % 2 === 0 ? 'bg-primary' : 'bg-gold'} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold">{milestone.year}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
