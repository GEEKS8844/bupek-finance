'use client';

import { motion } from 'framer-motion';
import { Globe, Leaf, Users, Heart } from 'lucide-react';

export function CorporateResponsibility() {
  const initiatives = [
    {
      icon: Leaf,
      title: 'Environmental Sustainability',
      description: 'Committed to carbon-neutral operations and supporting green business initiatives',
    },
    {
      icon: Users,
      title: 'Community Development',
      description: 'Investing in education, skills training, and youth entrepreneurship programs',
    },
    {
      icon: Heart,
      title: 'Social Impact',
      description: 'Supporting vulnerable communities through special lending programs and mentorship',
    },
    {
      icon: Globe,
      title: 'Economic Growth',
      description: 'Creating sustainable employment and supporting local economic development',
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
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF37] font-semibold uppercase tracking-wider mb-3">
            Impact & Responsibility
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F2D52] mb-4">
            Our Corporate Responsibility
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beyond finance, we're committed to building a better future for communities and the planet
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl p-8 border border-gray-100 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="inline-block p-4 bg-[#D4AF37]/10 rounded-xl mb-6 group-hover:bg-[#D4AF37] transition-colors"
                >
                  <Icon className="w-8 h-8 text-[#D4AF37] group-hover:text-white transition-colors" />
                </motion.div>

                <h3 className="text-xl font-bold text-[#0F2D52] mb-3">{initiative.title}</h3>
                <p className="text-gray-600 leading-relaxed">{initiative.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8 bg-[#F8FAFC] rounded-2xl p-12"
        >
          {[
            { stat: '5,000+', label: 'Jobs Created' },
            { stat: '2,000+', label: 'Youth Trained' },
            { stat: '50K+', label: 'Lives Impacted' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-[#D4AF37] mb-2">{item.stat}</p>
              <p className="text-gray-600 font-semibold">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}