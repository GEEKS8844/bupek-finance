'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Products',
      links: [
        { label: 'Business Loans', href: '/products' },
        { label: 'SME Financing', href: '/products' },
        { label: 'Agricultural Loans', href: '/products' },
        { label: 'Emergency Loans', href: '/products' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Blog & News', href: '/blog' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Loan Agreement', href: '#' },
        { label: 'Security Policy', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-[#0F2D52] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">BUPEK</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering businesses and communities through accessible financial solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37]" />
                <a href="tel:+255222123456" className="text-sm hover:text-[#D4AF37] transition-colors">
                  +255 22 2 123 456
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37]" />
                <a href="mailto:info@bupekfinance.co.tz" className="text-sm hover:text-[#D4AF37] transition-colors">
                  info@bupekfinance.co.tz
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] mt-1" />
                <p className="text-sm">Samora Avenue, Dar es Salaam, Tanzania</p>
              </div>
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 1) * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for financial tips and updates</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-[#D4AF37] text-[#0F2D52] font-semibold hover:bg-[#c99a2e] transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-gray-400 text-sm">
            © {currentYear} BUPEK Finance Limited. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0F2D52] transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}