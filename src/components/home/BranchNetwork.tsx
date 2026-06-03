'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function BranchNetwork() {
  const branches = [
    {
      name: 'Head Office - Dar es Salaam',
      address: 'Samora Avenue, Dar es Salaam',
      phone: '+255 22 2 123 456',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
      type: 'Main Office',
    },
    {
      name: 'Arusha Branch',
      address: 'Independence Street, Arusha',
      phone: '+255 27 2 502 456',
      hours: 'Mon-Fri: 8:00 AM - 4:30 PM',
      type: 'Branch',
    },
    {
      name: 'Mbeya Branch',
      address: 'Lumumba Street, Mbeya',
      phone: '+255 25 2 600 789',
      hours: 'Mon-Fri: 8:00 AM - 4:30 PM',
      type: 'Branch',
    },
    {
      name: 'Dodoma Branch',
      address: 'Sokoine Drive, Dodoma',
      phone: '+255 26 2 323 234',
      hours: 'Mon-Fri: 8:00 AM - 4:30 PM',
      type: 'Branch',
    },
    {
      name: 'Mwanza Branch',
      address: 'Jangwani Road, Mwanza',
      phone: '+255 28 2 500 567',
      hours: 'Mon-Fri: 8:00 AM - 4:30 PM',
      type: 'Branch',
    },
    {
      name: 'Iringa Branch',
      address: 'Uhuru Avenue, Iringa',
      phone: '+255 26 2 700 890',
      hours: 'Mon-Fri: 8:00 AM - 4:30 PM',
      type: 'Branch',
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
            Network & Accessibility
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F2D52] mb-4">
            Find Us Across Tanzania
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conveniently located branches ready to serve you
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 group"
            >
              {/* Branch Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-semibold">
                  {branch.type}
                </span>
                <div className="w-3 h-3 bg-[#16A34A] rounded-full group-hover:animate-pulse" />
              </div>

              {/* Branch Name */}
              <h3 className="text-lg font-bold text-[#0F2D52] mb-4 group-hover:text-[#D4AF37] transition-colors">
                {branch.name}
              </h3>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm">{branch.address}</p>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm">{branch.phone}</p>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm">{branch.hours}</p>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-4 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
              >
                Get Directions
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/20 bg-gray-100 h-96"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4056.6419444444436!2d39.2083!3d-6.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185e427f8b8d5d7d%3A0x1234567890abcdef!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}