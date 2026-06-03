'use client';

import { motion } from 'framer-motion';
import { Briefcase, Leaf, AlertCircle, Users, Truck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function ProductDetails() {
  const products = [
    {
      icon: Briefcase,
      title: 'Business Loans',
      amount: 'TZS 500K - 50M',
      duration: '6-36 months',
      rate: '14-20%',
      description: 'Flexible financing for business expansion, working capital, and operational needs.',
      features: [
        'Flexible repayment terms',
        'Quick 24-48 hour approval',
        'Minimal documentation',
        'Dedicated loan officer support',
      ],
    },
    {
      icon: Briefcase,
      title: 'SME Financing',
      amount: 'TZS 500K - 30M',
      duration: '12-36 months',
      rate: '15-22%',
      description: 'Tailored solutions for small and medium enterprises looking to grow.',
      features: [
        'Growth-focused terms',
        'Competitive rates',
        'Industry-specific solutions',
        'Business mentorship included',
      ],
    },
    {
      icon: Leaf,
      title: 'Agricultural Loans',
      amount: 'TZS 1M - 20M',
      duration: 'Seasonal (3-12 months)',
      rate: '12-18%',
      description: 'Supporting farmers and agricultural businesses with seasonal financing.',
      features: [
        'Seasonal flexibility',
        'Harvest-based repayment',
        'Equipment financing',
        'Input financing available',
      ],
    },
    {
      icon: AlertCircle,
      title: 'Emergency Loans',
      amount: 'TZS 500K - 10M',
      duration: '3-12 months',
      rate: '18-24%',
      description: 'Quick access to funds for unexpected business or personal emergencies.',
      features: [
        'Instant 24-hour approval',
        'Minimal paperwork',
        'Fast disbursement',
        'No collateral required*',
      ],
    },
    {
      icon: Users,
      title: 'Group Lending',
      amount: 'TZS 1M - 25M',
      duration: '12-36 months',
      rate: '13-19%',
      description: 'Community-based lending for cooperative and group businesses.',
      features: [
        'Lower rates for groups',
        'Peer support system',
        'Joint guarantee model',
        'Community development focus',
      ],
    },
    {
      icon: Truck,
      title: 'Asset Financing',
      amount: 'TZS 2M - 100M',
      duration: '12-60 months',
      rate: '12-19%',
      description: 'Finance equipment, vehicles, and machinery for business operations.',
      features: [
        'Equipment as security',
        'Extended repayment terms',
        'Insurance included',
        'Tax deductible interest',
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
          <p className="text-[#D4AF37] font-semibold uppercase tracking-wider mb-3">Comprehensive Range</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F2D52] mb-4">Our Loan Products</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl p-8 border border-gray-100 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="p-3 bg-[#D4AF37]/10 rounded-xl group-hover:bg-[#D4AF37] transition-colors"
                  >
                    <Icon className="w-6 h-6 text-[#D4AF37] group-hover:text-white transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#0F2D52]">{product.title}</h3>
                </div>

                <p className="text-gray-600 text-sm mb-6">{product.description}</p>

                <div className="bg-[#F8FAFC] rounded-lg p-4 mb-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Loan Amount:</span>
                    <span className="font-semibold text-[#0F2D52]">{product.amount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-[#0F2D52]">{product.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Interest Rate:</span>
                    <span className="font-semibold text-[#D4AF37]">{product.rate}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6 flex-grow">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  size="sm"
                  className="w-full bg-[#D4AF37] hover:bg-[#c99a2e] text-[#0F2D52] font-semibold"
                >
                  Apply for This Loan
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}