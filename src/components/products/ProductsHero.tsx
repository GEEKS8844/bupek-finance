'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function ProductsHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0F2D52] via-[#1a3f63] to-[#0F2D52] pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-[#D4AF37] opacity-5 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-[#D4AF37] font-semibold uppercase tracking-wider mb-4">Our Products</p>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Tailored <span className="text-[#D4AF37]">Loan Solutions</span> for Every Business
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
            Explore our comprehensive range of financing options designed to meet your specific needs.
          </p>
          <Button size="lg" className="bg-[#D4AF37] hover:bg-[#c99a2e] text-[#0F2D52] font-semibold">
            Apply Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}