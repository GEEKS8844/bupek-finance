'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  index?: number;
}

export function TestimonialCard({ 
  name, 
  role, 
  image, 
  content, 
  rating,
  index = 0 
}: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-800 rounded-xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 card-hover"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Content */}
      <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base mb-6 leading-relaxed">
        "{content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white">
            {name}
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
