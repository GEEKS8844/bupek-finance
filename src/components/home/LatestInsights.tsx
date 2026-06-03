'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Calendar, User } from 'lucide-react';

export function LatestInsights() {
  const articles = [
    {
      id: 1,
      title: '5 Essential Tips for Securing a Business Loan in 2024',
      excerpt:
        'Learn the key strategies to improve your loan application and increase approval chances with practical tips from our experts.',
      category: 'Financial Education',
      author: 'John Mwangi',
      date: 'June 1, 2024',
      image: '📚',
      featured: true,
    },
    {
      id: 2,
      title: 'How SMEs Can Scale Their Business with Proper Financing',
      excerpt:
        'Discover the role of strategic financing in business growth and how BUPEK Finance supports SME expansion.',
      category: 'Entrepreneurship',
      author: 'Sarah Kipchoge',
      date: 'May 28, 2024',
      image: '📈',
      featured: false,
    },
    {
      id: 3,
      title: 'BUPEK Finance Announces New Agricultural Loan Product',
      excerpt:
        'Expanding our commitment to rural financing with new seasonal loan options for farmers and agricultural enterprises.',
      category: 'Company News',
      author: 'BUPEK Team',
      date: 'May 25, 2024',
      image: '🌾',
      featured: false,
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
    <section className="py-20 lg:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF37] font-semibold uppercase tracking-wider mb-3">
            Knowledge Hub
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F2D52] mb-4">
            Latest News & Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with financial education, entrepreneurship tips, and company updates
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`rounded-2xl overflow-hidden border border-gray-100 hover:border-[#D4AF37] transition-all duration-300 flex flex-col group ${
                article.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Image/Icon Area */}
              <div
                className={`bg-gradient-to-br from-[#D4AF37]/20 to-[#2563EB]/20 flex items-center justify-center overflow-hidden relative group-hover:shadow-lg transition-all ${
                  article.featured ? 'h-80' : 'h-48'
                }`}
              >
                <div className={`text-center ${ article.featured ? 'text-9xl' : 'text-7xl' }`}>
                  {article.image}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content Area */}
              <div className="p-6 lg:p-8 flex flex-col flex-grow bg-white">
                {/* Category Badge */}
                <div className="inline-block w-fit mb-4">
                  <span className="bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`font-bold text-[#0F2D52] mb-3 group-hover:text-[#D4AF37] transition-colors ${
                    article.featured ? 'text-2xl lg:text-3xl' : 'text-lg'
                  }`}
                >
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div
                  className={`flex gap-4 mb-6 pb-6 border-b border-gray-200 ${
                    article.featured ? 'flex-wrap' : ''
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-600">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-600">{article.date}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <Button
                  variant="ghost"
                  className="w-full justify-between text-[#D4AF37] hover:text-[#0F2D52] hover:bg-[#D4AF37]/10"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button
            size="lg"
            className="bg-[#0F2D52] hover:bg-[#1a3f63] text-white"
          >
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}