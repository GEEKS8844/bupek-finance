'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Users, Shield, Clock, Lightbulb } from 'lucide-react';
import { ServiceCard } from '@/components/service-card';
import { Statistic } from '@/components/statistic';
import { TestimonialCard } from '@/components/testimonial-card';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-navy rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="container-custom relative z-10 py-20 md:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 variants={itemVariants} className="heading-lg mb-6 gradient-text">
              Empowering Businesses Through Accessible Financial Solutions
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Providing flexible financing and trusted financial support for entrepreneurs, SMEs, and growing businesses across Tanzania.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="px-8 py-4 bg-gradient-to-r from-primary-navy to-accent text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all font-semibold text-lg flex items-center justify-center gap-2"
              >
                Apply for Loan <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/products"
                className="px-8 py-4 border-2 border-primary-navy dark:border-accent text-primary-navy dark:text-accent rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all font-semibold text-lg"
              >
                Explore Services
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 md:gap-8 mt-16"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">5000+</div>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-2">Active Clients</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">50B+</div>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-2">Loans Disbursed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">98%</div>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-2">Repayment Rate</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-slate-50 dark:bg-slate-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-md mb-4">Why Choose BUPEK Finance</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We're committed to providing premium financial services with trust, transparency, and excellence.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Zap,
                title: 'Fast Loan Processing',
                description: 'Quick approval and disbursement',
                features: ['3-5 day approval', 'Same-day processing', 'Online application'],
              },
              {
                icon: TrendingUp,
                title: 'Flexible Repayment',
                description: 'Plans tailored to your needs',
                features: ['Custom terms', 'Seasonal options', 'Early repayment allowed'],
              },
              {
                icon: Shield,
                title: 'Transparent Terms',
                description: 'No hidden charges',
                features: ['Clear pricing', 'Full disclosure', 'Competitive rates'],
              },
            ].map((feature, i) => (
              <ServiceCard
                key={i}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                features={feature.features}
                index={i}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-gradient-to-r from-primary-navy to-accent text-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Our Impact
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-5 gap-8"
          >
            <Statistic value={5000} label="Active Clients" index={0} />
            <Statistic value={50} label="Loans Disbursed" suffix="B" index={1} />
            <Statistic value={3} label="Branches" index={2} />
            <Statistic value={98} label="Success Rate" suffix="%" index={3} />
            <Statistic value={15} label="Years Experience" suffix="+" index={4} />
          </motion.div>
        </div>
      </section>

      {/* Loan Products */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-md mb-4">Our Loan Products</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Tailored financial solutions for your business needs.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { emoji: '🏢', name: 'Business Loans', desc: 'Flexible funding for growth' },
              { emoji: '📊', name: 'SME Financing', desc: 'Solutions for small enterprises' },
              { emoji: '🌾', name: 'Agricultural Loans', desc: 'Financing for farmers' },
              { emoji: '🆘', name: 'Emergency Loans', desc: 'Quick funding for urgent needs' },
              { emoji: '👥', name: 'Group Lending', desc: 'Collective borrowing solutions' },
              { emoji: '🚜', name: 'Asset Financing', desc: 'Equipment and machinery' },
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 md:p-8 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-accent hover:shadow-xl transition-all text-center card-hover"
              >
                <div className="text-5xl mb-4">{product.emoji}</div>
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{product.desc}</p>
                <Link href="/products" className="text-accent hover:text-primary-navy font-semibold text-sm">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-slate-50 dark:bg-slate-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-md mb-4">Success Stories</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Real stories from businesses we've helped grow.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: 'Amina Hassan',
                role: 'Agriculture Entrepreneur',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
                content: 'BUPEK Finance helped expand my farm operations with perfect seasonal terms.',
                rating: 5,
              },
              {
                name: 'James Mwangi',
                role: 'Business Owner',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
                content: 'Fast approval and excellent support. My business has grown 3x since the loan.',
                rating: 5,
              },
              {
                name: 'Grace Patel',
                role: 'SME Owner',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
                content: 'Professional team, transparent process, and affordable rates. Highly recommended!',
                rating: 5,
              },
            ].map((testimonial, i) => (
              <TestimonialCard
                key={i}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                content={testimonial.content}
                rating={testimonial.rating}
                index={i}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-navy to-accent text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container-custom text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Take the first step towards financial success with BUPEK Finance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="px-8 py-4 bg-white text-primary-navy rounded-lg hover:shadow-lg hover:scale-105 transition-all font-semibold"
            >
              Apply Today
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary-navy transition-all font-semibold"
            >
              Contact Team
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
