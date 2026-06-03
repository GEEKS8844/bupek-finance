'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+255 22 2 123 456', '+255 787 654 321'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@bupekfinance.co.tz', 'support@bupekfinance.co.tz'],
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['+255 787 654 321'],
    },
    {
      icon: MapPin,
      title: 'Head Office',
      details: ['Samora Avenue', 'Dar es Salaam, Tanzania'],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0F2D52] via-[#1a3f63] to-[#0F2D52] pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-[#D4AF37] opacity-5 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF37] font-semibold uppercase tracking-wider mb-4">
            Get in Touch
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            We're Here to Help
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions? Our dedicated team is ready to assist you with any inquiries.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="inline-block p-4 bg-[#D4AF37]/10 rounded-xl mb-6 group-hover:bg-[#D4AF37] transition-colors"
                >
                  <Icon className="w-8 h-8 text-[#D4AF37] group-hover:text-white transition-colors" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-4">{method.title}</h3>
                <div className="space-y-2">
                  {method.details.map((detail, i) => (
                    <p key={i} className="text-gray-300 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}