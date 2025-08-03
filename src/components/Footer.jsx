import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:georgebrodox@gmail.com',
      color: 'hover:text-red-500'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: '#',
      color: 'hover:text-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: '#',
      color: 'hover:text-blue-600'
    }
  ]

  return (
    <footer className="bg-blue-700 text-white">
      <div className="container-width px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">BRODOX GEORGE</h3>
            <p className="text-blue-100 mb-4">
              Empowering businesses through smart tech solutions. 
              From web development to cybersecurity, I'm here to help.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-blue-200 transition-colors ${link.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Quick Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-blue-100">
              <li>• Web Development</li>
              <li>• Cybersecurity Basics</li>
              <li>• Software Installation</li>
              <li>• Computer Repair</li>
              <li>• IT Support</li>
              <li>• Networking Setup</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-blue-100">
              <p>Email: georgebrodox@gmail.com</p>
              <p>Phone: +254700868913</p>
              <p>Location: Mombasa, Kenya</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-blue-600 mt-8 pt-8 text-center"
        >
          <p className="text-blue-100">
            © {currentYear} Brodox George. All rights reserved. Made with{' '}
            <Heart className="inline w-4 h-4 text-red-400" />
            {' '}using React
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 