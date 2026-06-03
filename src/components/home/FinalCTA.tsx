'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Phone } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-[#0F2D52] to-[#1a3f63] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37] opacity-5 rounded-full blur-3xl"
          animate={{ y: [-50, 50, -50], x: [50, -50, 50] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-[#2563EB] opacity-5 rounded-full blur-3xl"
          animate={{ y: [50, -50, 50], x: [-50, 50, -50] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold text-white leading-tight"
          >
            Ready to Grow Your <span className="text-[#D4AF37]">Business</span>?
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Take the first step towards financial success. Our team is ready to help
            you find the perfect financing solution for your business goals.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button
              size="lg"
              className="bg-[#D4AF37] hover:bg-[#c99a2e] text-[#0F2D52] font-bold group"
            >
              Apply for Loan Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 font-bold group flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Contact Our Team
            </Button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10"
          >
            {[
              { emoji: '⏱️', text: 'Quick 24-48 Hour Approval' },
              { emoji: '📋', text: 'Minimal Paperwork Required' },
              { emoji: '💬', text: '24/7 Support Available' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-white"
              >
                <div className="text-3xl mb-2">{item.emoji}</div>
                <p className="text-sm lg:text-base">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}