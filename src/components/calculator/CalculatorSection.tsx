'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function CalculatorSection() {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(16);
  const [duration, setDuration] = useState(12);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);

  useEffect(() => {
    // Calculate monthly payment using standard loan formula
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = duration;
    
    if (monthlyRate === 0) {
      setMonthlyPayment(loanAmount / numberOfPayments);
      setTotalInterest(0);
    } else {
      const monthly =
        (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      setMonthlyPayment(monthly);
      setTotalRepayment(monthly * numberOfPayments);
      setTotalInterest(monthly * numberOfPayments - loanAmount);
    }
  }, [loanAmount, interestRate, duration]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'TZS',
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF37] font-semibold uppercase tracking-wider mb-3">Financial Planning</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0F2D52] mb-4">Loan Calculator</h1>
          <p className="text-lg text-gray-600">Calculate your monthly payment and total loan cost</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-[#0F2D52] mb-8">Loan Details</h2>

            {/* Loan Amount */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-[#0F2D52]">Loan Amount</label>
                <span className="text-lg font-bold text-[#D4AF37]">{formatCurrency(loanAmount)}</span>
              </div>
              <input
                type="range"
                min="500000"
                max="100000000"
                step="100000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-2">
                <span>TZS 500K</span>
                <span>TZS 100M</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-[#0F2D52]">Annual Interest Rate</label>
                <span className="text-lg font-bold text-[#D4AF37]">{interestRate.toFixed(2)}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-2">
                <span>5%</span>
                <span>30%</span>
              </div>
            </div>

            {/* Duration */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-[#0F2D52]">Loan Duration</label>
                <span className="text-lg font-bold text-[#D4AF37]">{duration} months</span>
              </div>
              <input
                type="range"
                min="3"
                max="60"
                step="1"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-2">
                <span>3 months</span>
                <span>60 months</span>
              </div>
            </div>

            <Button size="lg" className="w-full bg-[#D4AF37] hover:bg-[#c99a2e] text-[#0F2D52] font-semibold">
              Apply for This Loan
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#0F2D52] to-[#1a3f63] rounded-2xl p-8 text-white shadow-lg"
            >
              <p className="text-gray-300 text-sm mb-2">Monthly Payment</p>
              <h3 className="text-4xl lg:text-5xl font-bold text-[#D4AF37] mb-4">
                {formatCurrency(monthlyPayment)}
              </h3>
              <p className="text-gray-400 text-sm">
                Your fixed monthly payment amount
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#D4AF37]"
              >
                <p className="text-gray-600 text-sm mb-2">Total Interest</p>
                <h4 className="text-2xl font-bold text-[#0F2D52]">
                  {formatCurrency(totalInterest)}
                </h4>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#2563EB]"
              >
                <p className="text-gray-600 text-sm mb-2">Total Repayment</p>
                <h4 className="text-2xl font-bold text-[#0F2D52]">
                  {formatCurrency(loanAmount + totalInterest)}
                </h4>
              </motion.div>
            </div>

            {/* Breakdown Table */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h4 className="font-bold text-[#0F2D52] mb-4">Loan Summary</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Principal Amount</span>
                  <span className="font-semibold text-[#0F2D52]">{formatCurrency(loanAmount)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Interest</span>
                  <span className="font-semibold text-[#D4AF37]">{formatCurrency(totalInterest)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between">
                  <span className="font-semibold text-[#0F2D52]">Total Repayment</span>
                  <span className="font-bold text-lg text-[#0F2D52]">
                    {formatCurrency(loanAmount + totalInterest)}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}