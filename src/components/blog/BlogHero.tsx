'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function BlogHero() {
  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden bg-gradient-to-br from-[#0F2D52] via-[#1a3f63] to-[#0F2D52] pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-[#D4AF37] opacity-5 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-[#D4AF37] font-semibold uppercase tracking-wider mb-4">Knowledge Hub</p>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Blog & <span className="text-[#D4AF37]">Insights</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Financial education, entrepreneurship tips, and company updates
          </p>
        </motion.div>
      </div>
    </section>
  );
}