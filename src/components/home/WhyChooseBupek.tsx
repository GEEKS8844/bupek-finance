'use client';

import { motion } from 'framer-motion';
import {
  Zap,
  Percent,
  Headphones,
  MapPin,
  Lock,
  Clock,
} from 'lucide-react';

export function WhyChooseBupek() {
  const features = [
    {
      icon: Zap,
      title: 'Fast Loan Processing',
      description:
        'Quick approval process with minimal documentation. Get funded in as little as 24-48 hours.',
    },
    {
      icon: Percent,
      title: 'Competitive Interest Rates',
      description:
        'Industry-leading rates designed to maximize your business growth without excessive burden.',
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description:
        'Expert financial advisors and 24/7 customer support to guide you through every step.',
    },
    {
      icon: MapPin,
      title: 'Multiple Locations',
      description:
        'Accessible branches across Tanzania with online services for your convenience.',
    },
    {
      icon: Lock,
      title: 'Transparent Process',
      description:
        'No hidden fees. Clear terms and conditions with complete transparency in all transactions.',
    },
    {
      icon: Clock,
      title: 'Flexible Repayment',
      description:
        'Customizable repayment schedules tailored to your business cash flow.',
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
            Our Advantages
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F2D52] mb-4">
            Why Choose BUPEK Finance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Industry-leading solutions designed to support your financial growth
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#D4AF37] hover:shadow-2xl transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className="inline-block p-4 bg-[#D4AF37]/10 rounded-xl mb-6 group-hover:bg-[#D4AF37] transition-colors duration-300"
                >
                  <Icon className="w-7 h-7 text-[#D4AF37] group-hover:text-white transition-colors" />
                </motion.div>

                <h3 className="text-xl font-bold text-[#0F2D52] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={false}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Certification Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="bg-white rounded-full px-8 py-4 border-2 border-[#D4AF37] flex items-center gap-3 shadow-lg">
            <div className="w-3 h-3 bg-[#16A34A] rounded-full animate-pulse" />
            <span className="text-[#0F2D52] font-semibold">
              Licensed & Regulated Microfinance Institution
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}