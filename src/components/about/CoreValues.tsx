'use client';

import { motion } from 'framer-motion';
import { Heart, Zap, Users, Award } from 'lucide-react';

export function CoreValues() {
  const values = [
    {
      icon: Heart,
      title: 'Trust',
      description: 'We build relationships on honesty, transparency, and reliability. Our clients trust us with their dreams.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously evolve our products and services to meet changing customer needs and market demands.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in the power of community and work together to create shared prosperity and sustainable growth.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We pursue excellence in everything we do, from customer service to financial management and impact.',
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
    <section className="py-20 lg:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF37] font-semibold uppercase tracking-wider mb-3">
            Our Foundation
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F2D52] mb-4">
            Core Values That Drive Us
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 group text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="inline-block p-4 bg-[#D4AF37]/10 rounded-xl mb-6 group-hover:bg-[#D4AF37] transition-colors"
                >
                  <Icon className="w-8 h-8 text-[#D4AF37] group-hover:text-white transition-colors" />
                </motion.div>

                <h3 className="text-2xl font-bold text-[#0F2D52] mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}