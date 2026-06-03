'use client';

import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

export function MissionVision() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  };

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mission */}
          <motion.div {...fadeInUp} className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#D4AF37]/10 rounded-lg">
                <Target className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F2D52]">Our Mission</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              To provide accessible, affordable, and transparent financial solutions that empower entrepreneurs, SMEs, farmers, and growing businesses to achieve their full potential and create sustainable economic growth across Tanzania.
            </p>

            <div className="space-y-3 pt-4">
              {[
                'Financial Inclusion for all business sizes',
                'Transparent and fair lending practices',
                'Community-driven development',
                'Sustainable business growth',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#2563EB]/10 rounded-lg">
                <Eye className="w-8 h-8 text-[#2563EB]" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F2D52]">Our Vision</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              To be the most trusted and customer-centric microfinance institution in East Africa, recognized for innovation, excellence, and positive impact on millions of lives through economic empowerment and sustainable development.
            </p>

            <div className="space-y-3 pt-4">
              {[
                'Pan-African financial impact',
                'Digital-first lending solutions',
                'Economic empowerment at scale',
                'Award-winning customer service',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-[#2563EB] rounded-full" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}