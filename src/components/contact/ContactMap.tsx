'use client';

import { motion } from 'framer-motion';

export function ContactMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold text-[#0F2D52]">Our Location</h2>

      <div className="rounded-2xl overflow-hidden border-2 border-[#D4AF37]/20 h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5214000000004!2d39.2083!3d-6.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185e427f8b8d5d7d%3A0x1234567890abcdef!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2s!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="bg-[#F8FAFC] rounded-xl p-6">
        <h3 className="font-bold text-[#0F2D52] mb-3">BUPEK Finance Head Office</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Samora Avenue, Plot 123<br />
          Dar es Salaam, Tanzania<br />
          <br />
          <strong>Working Hours:</strong><br />
          Monday - Friday: 8:00 AM - 5:00 PM<br />
          Saturday: 9:00 AM - 1:00 PM<br />
          Sunday: Closed
        </p>
      </div>
    </motion.div>
  );
}