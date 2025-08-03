import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { GraduationCap, Code, Shield, Globe, BookOpen, Users, Award, Calendar, MapPin, Mail, Phone } from 'lucide-react'

const About = () => {
  const [activeTab, setActiveTab] = useState('education')
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -30])

  const tabs = [
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'interests', label: 'Interests', icon: BookOpen }
  ]

  const tabContent = {
    education: {
      title: 'Educational Journey',
      content: (
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 p-3 rounded-full mr-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Technical University of Mombasa
                </h3>
                <p className="text-blue-600 font-medium">2022 - Present</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Bachelor of Science in Information Technology</h4>
                <p className="text-gray-600">Currently pursuing my degree with focus on web development, cybersecurity, and software engineering.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Key Courses</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Web Development & Design</li>
                    <li>• Database Management</li>
                    <li>• Network Security</li>
                    <li>• Software Engineering</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Achievements</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Dean's List Recognition</li>
                    <li>• Academic Excellence Award</li>
                    <li>• Student Leadership Role</li>
                    <li>• Research Project Lead</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )
    },
    skills: {
      title: 'Technical Expertise',
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 p-2 rounded-lg mr-3">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Web Development</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">HTML/CSS</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">JavaScript</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">React.js</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Tailwind CSS</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100"
          >
            <div className="flex items-center mb-4">
              <div className="bg-green-600 p-2 rounded-lg mr-3">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Cybersecurity</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Security Principles</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Password Management</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Firewall Setup</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Security Best Practices</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100"
          >
            <div className="flex items-center mb-4">
              <div className="bg-purple-600 p-2 rounded-lg mr-3">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Programming</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Python</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Problem Solving</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Algorithms</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Data Structures</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-100"
          >
            <div className="flex items-center mb-4">
              <div className="bg-orange-600 p-2 rounded-lg mr-3">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">IT Support</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Hardware Troubleshooting</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Software Installation</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Network Setup</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">System Maintenance</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )
    },
    interests: {
      title: 'Passions & Goals',
      content: (
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="w-6 h-6 text-blue-600 mr-3" />
              Current Interests
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Learning new technologies and frameworks</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Solving real-world problems through code</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Building user-friendly digital solutions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Contributing to open-source projects</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Exploring AI and machine learning</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Cybersecurity research and practice</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Mobile app development</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Cloud computing and DevOps</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Calendar className="w-6 h-6 text-green-600 mr-3" />
              Future Goals
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Become a full-stack developer</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Specialize in cybersecurity</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Build innovative web applications</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Help others learn technology</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Launch a tech startup</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Contribute to major open-source projects</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Mentor aspiring developers</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Achieve industry certifications</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate about technology and committed to creating innovative digital solutions that make a difference.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Profile Section */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8"
                  >
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full transform rotate-6 scale-105 opacity-20"></div>
                      <img 
                        src="/img2.jpg" 
                        alt="Brodox George" 
                        className="relative rounded-full shadow-2xl w-48 h-48 object-cover mx-auto"
                      />
                    </div>
                  </motion.div>
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Brodox George</h3>
                    <p className="text-blue-600 font-medium">Full-Stack Developer & IT Specialist</p>
                    <p className="text-gray-600 text-sm mt-2">Mombasa, Kenya</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">georgebrodox@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">+254700868913</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Mombasa, Kenya</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">Quick Facts</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Experience:</span>
                        <span className="font-medium">2+ Years</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Projects:</span>
                        <span className="font-medium">50+ Completed</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Languages:</span>
                        <span className="font-medium">English, Swahili</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Availability:</span>
                        <span className="font-medium text-green-600">Open to Work</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 mb-8">
                  {tabs.map((tab) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2 ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <tab.icon className="w-5 h-5" />
                      <span className="font-medium">{tab.label}</span>
                    </motion.button>
                  ))}
                </div>

                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    {tabContent[activeTab].title}
                  </h3>
                  {tabContent[activeTab].content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default About 