'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { CheckCircle, ChevronRight, Upload } from 'lucide-react';

const stepSchemas = [
  z.object({
    firstName: z.string().min(2, 'First name required'),
    lastName: z.string().min(2, 'Last name required'),
    email: z.string().email('Invalid email'),
    phone: z.string().min(10, 'Invalid phone'),
    dob: z.string().min(1, 'Date of birth required'),
    nationalId: z.string().min(1, 'National ID required'),
  }),
  z.object({
    businessName: z.string().min(2, 'Business name required'),
    businessType: z.string().min(1, 'Business type required'),
    registrationNumber: z.string().min(1, 'Registration number required'),
    yearsInBusiness: z.string().min(1, 'Years in business required'),
    businessAddress: z.string().min(5, 'Address required'),
  }),
  z.object({
    loanAmount: z.string().min(1, 'Loan amount required'),
    loanPurpose: z.string().min(1, 'Loan purpose required'),
    repaymentPeriod: z.string().min(1, 'Repayment period required'),
    expectedRevenue: z.string().min(1, 'Expected revenue required'),
  }),
  z.object({
    documents: z.array(z.string()).min(1, 'At least one document required'),
  }),
];

type FormData = z.infer<typeof z.union([stepSchemas[0], stepSchemas[1], stepSchemas[2], stepSchemas[3]]>>;

export function ApplicationWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submittedData, setSubmittedData] = useState<Partial<FormData> | null>(null);

  const { register, handleSubmit, formState: { errors }, trigger } = useForm<FormData>({
    resolver: zodResolver(stepSchemas[currentStep]),
  });

  const steps = [
    { title: 'Personal Information', icon: '👤' },
    { title: 'Business Information', icon: '🏢' },
    { title: 'Loan Details', icon: '💰' },
    { title: 'Document Upload', icon: '📄' },
    { title: 'Review & Submit', icon: '✓' },
  ];

  const onNext = async () => {
    const isValid = await trigger();
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const onPrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = (data: FormData) => {
    setSubmittedData(data);
    setCurrentStep(steps.length - 1);
  };

  if (submittedData && currentStep === steps.length - 1) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto px-6 lg:px-8 py-20"
      >
        <div className="bg-white rounded-2xl p-12 text-center shadow-xl">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="w-20 h-20 bg-[#16A34A] rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>

          <h2 className="text-3xl font-bold text-[#0F2D52] mb-4">Application Submitted!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for applying. Our team will review your application and contact you within 24 hours.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Application Reference: #BUPEK{Math.random().toString(36).substring(7).toUpperCase()}
          </p>

          <Button
            onClick={() => window.location.href = '/'}
            size="lg"
            className="bg-[#D4AF37] hover:bg-[#c99a2e] text-[#0F2D52] font-semibold"
          >
            Back to Home
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center flex-1"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-3 cursor-pointer transition-all ${
                  index <= currentStep
                    ? 'bg-[#D4AF37] text-[#0F2D52]'
                    : 'bg-gray-200 text-gray-600'
                }`}
                onClick={() => index < currentStep && setCurrentStep(index)}
              >
                {index < currentStep ? '✓' : step.icon}
              </motion.div>
              <p className={`text-xs font-semibold text-center line-clamp-2 ${
                index <= currentStep ? 'text-[#0F2D52]' : 'text-gray-500'
              }`}>
                {step.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Progress Line */}
        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#D4AF37] to-[#0F2D52]"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Form Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-2xl p-8 shadow-lg"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <motion.div key="step0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                <h2 className="text-2xl font-bold text-[#0F2D52]">Personal Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#0F2D52] mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      {...register('firstName')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F2D52] mb-2">Last Name</label>
                    <input
                      type="text"
                      placeholder="Mwangi"
                      {...register('lastName')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#0F2D52] mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      {...register('email')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F2D52] mb-2">Phone</label>
                    <input
                      type="tel"
                      placeholder="+255 7XX XXX XXX"
                      {...register('phone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#0F2D52] mb-2">Date of Birth</label>
                    <input
                      type="date"
                      {...register('dob')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                    {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F2D52] mb-2">National ID</label>
                    <input
                      type="text"
                      placeholder="Your National ID"
                      {...register('nationalId')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                    {errors.nationalId && <p className="text-red-500 text-sm mt-1">{errors.nationalId.message}</p>}
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                <h2 className="text-2xl font-bold text-[#0F2D52]">Business Information</h2>
                <div>
                  <label className="block text-sm font-semibold text-[#0F2D52] mb-2">Business Name</label>
                  <input
                    type="text"
                    placeholder="Your Business Name"
                    {...register('businessName')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                  {errors.businessName && <p className="text-red-500 text-sm mt-1">{errors.businessName.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0F2D52] mb-2">Business Type</label>
                  <select
                    {...register('businessType')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                  >
                    <option value="">Select a business type</option>
                    <option value="retail">Retail</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="services">Services</option>
                    <option value="technology">Technology</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.businessType && <p className="text-red-500 text-sm mt-1">{errors.businessType.message}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#0F2D52] mb-2">Registration Number</label>
                    <input
                      type="text"
                      placeholder="Business Registration"
                      {...register('registrationNumber')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                    {errors.registrationNumber && <p className="text-red-500 text-sm mt-1">{errors.registrationNumber.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F2D52] mb-2">Years in Business</label>
                    <input
                      type="number"
                      placeholder="2"
                      {...register('yearsInBusiness')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                    {errors.yearsInBusiness && <p className="text-red-500 text-sm mt-1">{errors.yearsInBusiness.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0F2D52] mb-2">Business Address</label>
                  <input
                    type="text"
                    placeholder="Full business address"
                    {...register('businessAddress')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                  {errors.businessAddress && <p className="text-red-500 text-sm mt-1">{errors.businessAddress.message}</p>}
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                <h2 className="text-2xl font-bold text-[#0F2D52]">Loan Details</h2>
                <div>
                  <label className="block text-sm font-semibold text-[#0F2D52] mb-2">Loan Amount (TZS)</label>
                  <input
                    type="number"
                    placeholder="5,000,000"
                    {...register('loanAmount')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                  {errors.loanAmount && <p className="text-red-500 text-sm mt-1">{errors.loanAmount.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0F2D52] mb-2">Loan Purpose</label>
                  <select
                    {...register('loanPurpose')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                  >
                    <option value="">Select loan purpose</option>
                    <option value="expansion">Business Expansion</option>
                    <option value="working-capital">Working Capital</option>
                    <option value="equipment">Equipment Purchase</option>
                    <option value="inventory">Inventory</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.loanPurpose && <p className="text-red-500 text-sm mt-1">{errors.loanPurpose.message}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#0F2D52] mb-2">Repayment Period (Months)</label>
                    <input
                      type="number"
                      placeholder="12"
                      {...register('repaymentPeriod')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                    {errors.repaymentPeriod && <p className="text-red-500 text-sm mt-1">{errors.repaymentPeriod.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F2D52] mb-2">Expected Monthly Revenue (TZS)</label>
                    <input
                      type="number"
                      placeholder="1,000,000"
                      {...register('expectedRevenue')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                    {errors.expectedRevenue && <p className="text-red-500 text-sm mt-1">{errors.expectedRevenue.message}</p>}
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                <h2 className="text-2xl font-bold text-[#0F2D52]">Upload Documents</h2>
                <p className="text-gray-600 text-sm">Upload the following documents for verification</p>

                <div className="space-y-4">
                  {['National ID Copy', 'Business Registration', 'Bank Statement (3 months)', 'Tax Certificate'].map((doc, index) => (
                    <label key={index} className="block border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-[#D4AF37] cursor-pointer transition-colors">
                      <div className="flex items-center justify-center gap-3">
                        <Upload className="w-5 h-5 text-[#D4AF37]" />
                        <span className="text-gray-700 font-medium">{doc}</span>
                      </div>
                      <input type="file" className="hidden" />
                    </label>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex gap-4 pt-8 border-t border-gray-200">
            <Button
              type="button"
              onClick={onPrev}
              disabled={currentStep === 0}
              variant="outline"
              className="flex-1 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 disabled:opacity-50"
            >
              Previous
            </Button>
            {currentStep < steps.length - 2 ? (
              <Button
                type="button"
                onClick={onNext}
                size="lg"
                className="flex-1 bg-[#D4AF37] hover:bg-[#c99a2e] text-[#0F2D52] font-semibold flex items-center justify-center gap-2"
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </Button>
            ) : (
              <Button
                type="submit"
                size="lg"
                className="flex-1 bg-[#16A34A] hover:bg-[#15803d] text-white font-semibold"
              >
                Submit Application
              </Button>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
}