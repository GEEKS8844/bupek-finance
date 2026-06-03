'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function HeroSection() {
  const floatingStats = [
    { value: '15K+', label: 'Active Clients' },
    { value: '98%', label: 'Approval Rate' },
    { value: '$50M+', label: 'Disbursed' },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0F2D52] via-[#1a3f63] to-[#0F2D52] pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-[#D4AF37] opacity-5 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 bg-[#2563EB] opacity-5 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 lg:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <motion.h1
              variants={item}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight"
            >
              Empowering <span className="text-[#D4AF37]">Businesses</span> and
              Communities
            </motion.h1>

            <motion.p
              variants={item}
              className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-300 leading-relaxed"
            >
              Providing flexible financing, business growth opportunities, and
              trusted financial support for individuals and enterprises across
              Tanzania.
            </motion.p>

            {/* Quick Trust Indicators */}
            <motion.div variants={item} className="space-y-2 md:space-y-3">
              {[
                'Fast Loan Processing',
                'Competitive Interest Rates',
                'Transparent & Secure',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-200">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
            >
              <Button
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#c99a2e] text-[#0F2D52] font-semibold group text-sm sm:text-base"
              >
                Apply for Loan
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 text-sm sm:text-base"
              >
                Explore Services
              </Button>
            </motion.div>
          </div>

          {/* Right Floating Stats */}
          <motion.div variants={item} className="relative h-64 sm:h-80 md:h-96 lg:h-full hidden md:block">
            {floatingStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                className={`absolute bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 md:p-8 text-center text-white
                  ${
                    index === 0
                      ? 'top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48'
                      : index === 1
                        ? 'top-1/2 right-0 sm:right-12 md:right-1/4 w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 -translate-y-1/2'
                        : 'bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48'
                  }
                `}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#D4AF37] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Decorative Element */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F2D52] pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2 text-[#D4AF37]">
          <span className="text-xs sm:text-sm">Scroll to explore</span>
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}