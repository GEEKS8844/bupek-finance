'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Briefcase, Leaf, AlertCircle, Users, Truck } from 'lucide-react';

export function LoanProductsShowcase() {
  const products = [
    {
      icon: Briefcase,
      title: 'Business Loans',
      description: 'Flexible financing for business expansion, working capital, and operational needs.',
      benefits: ['Up to TZS 50M', 'Flexible terms', '12-36 month tenure'],
    },
    {
      icon: Briefcase,
      title: 'SME Financing',
      description: 'Tailored solutions for small and medium enterprises looking to grow.',
      benefits: ['Competitive rates', 'Quick approval', 'Minimal documentation'],
    },
    {
      icon: Leaf,
      title: 'Agricultural Loans',
      description: 'Supporting farmers and agricultural businesses with seasonal financing.',
      benefits: ['Seasonal flexibility', 'Harvest-based terms', 'Equipment financing'],
    },
    {
      icon: AlertCircle,
      title: 'Emergency Loans',
      description: 'Quick access to funds for unexpected business or personal emergencies.',
      benefits: ['24-hour approval', 'Minimal paperwork', 'Instant disbursement'],
    },
    {
      icon: Users,
      title: 'Group Lending',
      description: 'Community-based lending program for cooperative and group businesses.',
      benefits: ['Lower rates', 'Group guarantees', 'Peer support'],
    },
    {
      icon: Truck,
      title: 'Asset Financing',
      description: 'Finance equipment, vehicles, and machinery for business operations.',
      benefits: ['Equipment security', 'Flexible terms', 'Tax benefits'],
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
          <p className="text-[#D4AF37] font-semibold uppercase tracking-wider mb-3">
            Our Services
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F2D52] mb-4">
            Loan Products & Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Diverse financing options designed to meet your unique business needs
          </p>
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
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-[#2563EB]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Card Content */}
                <div className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#D4AF37] transition-all duration-300 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="inline-block w-14 h-14 bg-[#D4AF37]/10 rounded-xl p-3 mb-6 group-hover:bg-[#D4AF37] transition-colors duration-300"
                  >
                    <Icon className="w-8 h-8 text-[#D4AF37] group-hover:text-white transition-colors" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#0F2D52] mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-6 space-y-2 flex-grow">
                    {product.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-[#D4AF37] hover:text-[#0F2D52] hover:bg-[#D4AF37]/10 group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Not sure which product is right for you?
          </p>
          <Button
            size="lg"
            className="bg-[#D4AF37] hover:bg-[#c99a2e] text-[#0F2D52] font-semibold"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}