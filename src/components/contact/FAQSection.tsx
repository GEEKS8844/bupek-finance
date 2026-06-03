'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is the minimum loan amount I can apply for?',
      answer: 'The minimum loan amount is TZS 500,000. However, this may vary depending on your eligibility and business type. Contact our loan officers for specific information.',
    },
    {
      question: 'How long does loan approval take?',
      answer: 'Our average approval time is 24-48 hours. We pride ourselves on fast processing with minimal documentation requirements.',
    },
    {
      question: 'What documents do I need to provide?',
      answer: 'Typically, you need: National ID, business registration, 3 months bank statements, proof of residence, and collateral documentation. Requirements may vary by loan type.',
    },
    {
      question: 'What are your current interest rates?',
      answer: 'Interest rates range from 12% to 24% per annum depending on loan type, amount, and repayment period. We offer competitive rates in the industry.',
    },
    {
      question: 'Can I apply online?',
      answer: 'Yes! You can start your application through our mobile app or website. However, final approval requires a visit to one of our branches.',
    },
    {
      question: 'What happens if I miss a payment?',
      answer: 'We understand that circumstances change. Contact us immediately if you anticipate missing a payment. We offer flexible restructuring options.',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#F8FAFC]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF37] font-semibold uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F2D52] mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-[#D4AF37] transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between hover:bg-[#F8FAFC] transition-colors"
              >
                <span className="text-lg font-semibold text-[#0F2D52] text-left">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-[#D4AF37]" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-gray-100"
              >
                <p className="p-6 text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}