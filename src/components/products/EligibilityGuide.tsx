'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export function EligibilityGuide() {
  const eligibility = [
    {
      title: 'General Requirements',
      requirements: [
        'Tanzanian national or business entity',
        'Minimum age 18 years',
        'Registered business (if applicable)',
        'Active bank account',
        'Valid national ID or passport',
      ],
    },
    {
      title: 'Business Loans',
      requirements: [
        'Registered business for 6+ months',
        'Business registration certificate',
        '3 months bank statements',
        'Business plan or proposal',
        'Tax registration number (TIN)',
      ],
    },
    {
      title: 'Agricultural Loans',
      requirements: [
        'Proof of land/farm ownership/lease',
        'Agricultural business registration',
        'Crop/farming plan for season',
        'Land title deed or lease agreement',
        'Proof of agricultural activity',
      ],
    },
    {
      title: 'Group Lending',
      requirements: [
        'Group registration (minimum 5 members)',
        'Group bank account',
        'Member list with ID copies',
        'Group bylaws/constitution',
        'Minutes from group meetings',
      ],
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
          <p className="text-[#D4AF37] font-semibold uppercase tracking-wider mb-3">Eligibility</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F2D52] mb-4">Loan Eligibility Guide</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check what documents and requirements you need for each loan product
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {eligibility.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl p-8 border border-gray-100 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-[#0F2D52] mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.requirements.map((req, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{req}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}