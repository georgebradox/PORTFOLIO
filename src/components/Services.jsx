import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Code, Shield, Download, Wrench, HelpCircle, Wifi, Star, Clock, CheckCircle, ArrowRight } from 'lucide-react'

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -30])

  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'I build modern, responsive websites using HTML, CSS, JavaScript and Frameworks like TailWind CSS.',
      icon: Code,
      image: '/img5.jpg',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      features: ['Responsive Design', 'Modern UI/UX', 'Performance Optimization', 'Cross-browser Compatibility'],
      price: 'From $500',
      duration: '2-4 weeks'
    },
    {
      id: 2,
      title: 'Cybersecurity Basics',
      description: 'Help securing your devices and accounts with basic firewall setups, antivirus, and secure password practices.',
      icon: Shield,
      image: '/img6.jpg',
      color: 'green',
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-emerald-50',
      features: ['Security Audits', 'Password Management', 'Firewall Setup', 'Security Best Practices'],
      price: 'From $300',
      duration: '1-2 weeks'
    },
    {
      id: 3,
      title: 'Software Installation',
      description: 'Installation and setup of essential apps and software, from OS installs to productivity tools.',
      icon: Download,
      image: '/img10.jpg',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-pink-50',
      features: ['OS Installation', 'Driver Updates', 'Software Configuration', 'System Optimization'],
      price: 'From $200',
      duration: '1-3 days'
    },
    {
      id: 4,
      title: 'Computer Repair & Maintenance',
      description: 'Quick fixes for hardware and software issues, plus routine system maintenance to keep devices running smoothly.',
      icon: Wrench,
      image: '/img8.jpg',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-red-50',
      features: ['Hardware Diagnostics', 'Software Troubleshooting', 'System Maintenance', 'Performance Tuning'],
      price: 'From $150',
      duration: 'Same day'
    },
    {
      id: 5,
      title: 'IT Support & Troubleshooting',
      description: 'Quick fixes for hardware and software issues, plus routine system maintenance to keep devices running smoothly.',
      icon: HelpCircle,
      image: '/img7.jpg',
      color: 'red',
      gradient: 'from-red-500 to-red-600',
      bgGradient: 'from-red-50 to-pink-50',
      features: ['Technical Support', 'Problem Resolution', 'User Training', 'Documentation'],
      price: 'From $100',
      duration: '24/7 Support'
    },
    {
      id: 6,
      title: 'Networking & Setup',
      description: 'I set up and troubleshoot home or small office networks, routers, LAN, and Wi-Fi configurations.',
      icon: Wifi,
      image: '/img11.jpg',
      color: 'indigo',
      gradient: 'from-indigo-500 to-indigo-600',
      bgGradient: 'from-indigo-50 to-blue-50',
      features: ['Network Setup', 'Wi-Fi Configuration', 'Router Configuration', 'Network Security'],
      price: 'From $250',
      duration: '1-2 weeks'
    }
  ]

  const testimonials = [
    {
      name: "Devlyn",
      role: "Small Business Owner",
      content: "Brodox helped me set up my business website and it looks absolutely professional. Highly recommended!",
      rating: 5
    },
    {
      name: "Ruth",
      role: "Tech Startup Founder",
      content: "Excellent IT support and quick response times. Saved us from a major system crash.",
      rating: 5
    },
    {
      name: "Benedict",
      role: "Freelance Designer",
      content: "The cybersecurity setup he provided gave me peace of mind. Very knowledgeable and professional.",
      rating: 5
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <motion.section
        style={{ y }}
        className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Professional IT Services
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Services I <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Comprehensive tech solutions to help you navigate the digital world with confidence. 
            From web development to cybersecurity, I've got you covered.
          </motion.p>
        </div>
      </motion.section>

      <section className="section-padding">
        <div className="container-width px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Service Header */}
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-4 right-4 p-3 rounded-full bg-gradient-to-r ${service.gradient} text-white shadow-lg`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                    <div className="flex items-center space-x-4 text-white/90 text-sm">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </span>
                      <span className="font-semibold">{service.price}</span>
                    </div>
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: hoveredService === service.id ? 'auto' : 0,
                      opacity: hoveredService === service.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`mt-6 w-full py-3 px-4 rounded-xl text-white font-medium transition-all duration-300 flex items-center justify-center bg-gradient-to-r ${service.gradient} hover:shadow-lg`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Clients Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don't just take my word for it. Here's what my clients have to say about my services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-3xl text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how I can help you with your tech needs. 
                Whether it's building a website, securing your devices, or troubleshooting issues, 
                I'm here to help!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Me Today
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Services 