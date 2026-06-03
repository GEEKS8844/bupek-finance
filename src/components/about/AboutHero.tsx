'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function AboutHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0F2D52] via-[#1a3f63] to-[#0F2D52] pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-[#D4AF37] opacity-5 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#D4AF37] font-semibold uppercase tracking-wider mb-4"
          >
            Our Story
          </motion.p>

          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Empowering Africa's <span className="text-[#D4AF37]">Financial Growth</span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
            Since our founding, BUPEK Finance has been committed to democratizing access to capital across Tanzania. We believe that every entrepreneur, farmer, and business owner deserves the opportunity to grow, regardless of their background or size.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#D4AF37] hover:bg-[#c99a2e] text-[#0F2D52] font-semibold">
              Our Mission
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}