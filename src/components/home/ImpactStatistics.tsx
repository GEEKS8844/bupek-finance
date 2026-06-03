'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export function ImpactStatistics() {
  const stats = [
    { end: 15000, label: 'Active Clients', suffix: '+' },
    { end: 50, label: 'Million Disbursed (TZS)', suffix: 'M+' },
    { end: 98, label: 'Approval Success Rate', suffix: '%' },
    { end: 12, label: 'Branches Nationwide', suffix: '+' },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#0F2D52] to-[#1a3f63] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-[#D4AF37] opacity-5 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF37] font-semibold uppercase tracking-wider mb-3">
            Our Impact
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Transforming Lives & Businesses
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                className="text-5xl lg:text-6xl font-bold text-[#D4AF37] mb-2"
              >
                <CountUp
                  end={stat.end}
                  duration={2.5}
                  useEasing={true}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  suffix={stat.suffix}
                />
              </motion.div>
              <p className="text-gray-200 text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              metric: 'Customer Satisfaction',
              value: '4.8/5',
              description: 'Average rating from clients',
            },
            {
              metric: 'Loan Repayment Rate',
              value: '96%',
              description: 'Industry-leading performance',
            },
            {
              metric: 'Average Loan Size',
              value: 'TZS 3.3M',
              description: 'Accessible to all business sizes',
            },
          ].map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#D4AF37]/10 to-white/5 border border-[#D4AF37]/30 rounded-xl p-6 text-center"
            >
              <p className="text-[#D4AF37] text-2xl font-bold mb-1">
                {metric.value}
              </p>
              <p className="text-white font-semibold mb-2">{metric.metric}</p>
              <p className="text-gray-300 text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}