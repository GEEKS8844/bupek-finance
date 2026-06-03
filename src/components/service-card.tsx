'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  index?: number;
}

export function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  features,
  index = 0 
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white dark:bg-slate-800 rounded-xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 hover:border-accent hover:shadow-xl transition-all duration-300 card-hover"
    >
      {/* Icon */}
      <div className="w-12 h-12 bg-gradient-to-br from-primary-navy to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
