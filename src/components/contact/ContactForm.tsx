'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { CheckCircle } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    console.log('Form data:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#16A34A] rounded-2xl p-12 text-center text-white"
      >
        <CheckCircle className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
        <p className="text-green-100">
          Thank you for contacting us. Our team will respond within 24 hours.
        </p>
      </motion.div>
    );
  }

  const fields: Array<{
    name: keyof ContactFormData;
    label: string;
    type: string;
    placeholder: string;
  }> = [
    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
    { name: 'phone', label: 'Phone', type: 'tel', placeholder: '+255 7XX XXX XXX' },
    { name: 'subject', label: 'Subject', type: 'text', placeholder: 'How can we help?' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold text-[#0F2D52]">Send us a Message</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-semibold text-[#0F2D52] mb-2">
              {field.label}
            </label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              {...register(field.name)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
            {errors[field.name] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[field.name]?.message}
              </p>
            )}
          </div>
        ))}

        <div>
          <label className="block text-sm font-semibold text-[#0F2D52] mb-2">
            Message
          </label>
          <textarea
            placeholder="Tell us more..."
            {...register('message')}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-[#D4AF37] hover:bg-[#c99a2e] text-[#0F2D52] font-semibold"
        >
          Send Message
        </Button>
      </form>
    </motion.div>
  );
}