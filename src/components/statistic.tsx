'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

interface StatisticProps {
  value: number;
  label: string;
  suffix?: string;
  index?: number;
}

export function Statistic({ value, label, suffix = '', index = 0 }: StatisticProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        <CountUp end={value} duration={2.5} suffix={suffix} />
      </div>
      <p className="text-slate-600 dark:text-slate-400 font-medium">
        {label}
      </p>
    </motion.div>
  );
}
