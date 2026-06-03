'use client';

import { motion } from 'framer-motion';
import { Users, TrendingUp, Target, Award } from 'lucide-react';

export function CompanyIntroduction() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  };

  const highlights = [
    { icon: Award, value: '10+', label: 'Years of Experience' },
    { icon: Users, value: '15K+', label: 'Clients Served' },
    { icon: TrendingUp, value: '$50M+', label: 'Funds Disbursed' },
    { icon: Target, value: '100%', label: 'Mission-Driven' },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            {...fadeInUp}
            className="space-y-8"
          >
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-[#D4AF37] font-semibold uppercase tracking-wider"
              >
                About BUPEK Finance
              </motion.p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0F2D52] mt-3">
                Building Trust, Enabling Growth
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              BUPEK Finance Limited stands as a beacon of financial inclusion,
              dedicated to empowering entrepreneurs, SMEs, farmers, and growing
              businesses across Tanzania. With over a decade of experience in
              microfinance, we've transformed the lives of thousands through
              accessible, flexible, and transparent lending solutions.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission goes beyond loans—we're committed to fostering economic
              growth, supporting community development, and creating sustainable
              opportunities for business expansion at every level.
            </p>

            {/* Core Values Preview */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {['Trust', 'Innovation', 'Impact', 'Excellence'].map((value, i) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#F8FAFC] rounded-lg p-4 border-l-4 border-[#D4AF37]"
                >
                  <p className="font-semibold text-[#0F2D52]">{value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Highlights */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl p-8 border border-gray-100 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="inline-block p-3 bg-[#D4AF37]/10 rounded-lg mb-4 group-hover:bg-[#D4AF37]/20 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-[#D4AF37]" />
                  </motion.div>
                  <p className="text-3xl font-bold text-[#0F2D52] mb-2">
                    {item.value}
                  </p>
                  <p className="text-gray-600 text-sm">{item.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}