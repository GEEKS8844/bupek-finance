'use client';

import { motion } from 'framer-motion';

export function GrowthTimeline() {
  const timeline = [
    { year: '2014', title: 'Founded', description: 'BUPEK Finance established with vision of financial inclusion' },
    { year: '2016', title: '5,000 Clients', description: 'Reached 5,000 active clients across Tanzania' },
    { year: '2018', title: 'TZS 10M Disbursed', description: 'Milestone of 10 million in total disbursements' },
    { year: '2019', title: 'Multi-Branch Expansion', description: 'Opened branches in 6 major cities' },
    { year: '2021', title: 'License Upgrade', description: 'Upgraded to full Microfinance Bank license' },
    { year: '2023', title: '15K+ Clients', description: 'Serving over 15,000 active clients nationwide' },
    { year: '2024', title: 'Digital Innovation', description: 'Launched mobile app for seamless lending experience' },
    { year: '2025', title: 'Regional Growth', description: 'Expanding to neighboring East African countries' },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF37] font-semibold uppercase tracking-wider mb-3">
            Journey
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F2D52] mb-4">
            Our Growth Timeline
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#D4AF37] to-[#2563EB]" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#D4AF37] hover:shadow-lg transition-all"
                  >
                    <p className="text-[#D4AF37] font-bold text-lg mb-2">{item.year}</p>
                    <h3 className="text-xl font-bold text-[#0F2D52] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <div className="w-0 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className="w-4 h-4 bg-[#D4AF37] rounded-full border-4 border-white shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}