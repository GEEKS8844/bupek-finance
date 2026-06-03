'use client';

import { motion } from 'framer-motion';

export function ProductComparison() {
  const comparisonData = [
    { feature: 'Min Loan Amount', business: 'TZS 500K', sme: 'TZS 500K', agric: 'TZS 1M', emergency: 'TZS 500K', group: 'TZS 1M', asset: 'TZS 2M' },
    { feature: 'Max Loan Amount', business: 'TZS 50M', sme: 'TZS 30M', agric: 'TZS 20M', emergency: 'TZS 10M', group: 'TZS 25M', asset: 'TZS 100M' },
    { feature: 'Interest Rate Range', business: '14-20%', sme: '15-22%', agric: '12-18%', emergency: '18-24%', group: '13-19%', asset: '12-19%' },
    { feature: 'Repayment Duration', business: '6-36 months', sme: '12-36 months', agric: '3-12 months', emergency: '3-12 months', group: '12-36 months', asset: '12-60 months' },
    { feature: 'Approval Time', business: '24-48 hours', sme: '24-48 hours', agric: '2-3 days', emergency: '24 hours', group: '3-5 days', asset: '2-3 days' },
    { feature: 'Collateral Required', business: 'Yes', sme: 'Yes', agric: 'Flexible', emergency: 'No*', group: 'Group Guarantee', asset: 'Asset Based' },
  ];

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
          <p className="text-[#D4AF37] font-semibold uppercase tracking-wider mb-3">Quick Comparison</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F2D52] mb-4">Product Comparison</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">See how our products compare at a glance</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
            <thead className="bg-gradient-to-r from-[#0F2D52] to-[#1a3f63]">
              <tr>
                <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                <th className="px-6 py-4 text-center text-white font-semibold">Business</th>
                <th className="px-6 py-4 text-center text-white font-semibold">SME</th>
                <th className="px-6 py-4 text-center text-white font-semibold">Agriculture</th>
                <th className="px-6 py-4 text-center text-white font-semibold">Emergency</th>
                <th className="px-6 py-4 text-center text-white font-semibold">Group</th>
                <th className="px-6 py-4 text-center text-white font-semibold">Asset</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`border-t border-gray-100 hover:bg-[#F8FAFC] transition-colors ${
                    index % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'
                  }`}
                >
                  <td className="px-6 py-4 font-semibold text-[#0F2D52]">{row.feature}</td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">{row.business}</td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">{row.sme}</td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">{row.agric}</td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">{row.emergency}</td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">{row.group}</td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">{row.asset}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}