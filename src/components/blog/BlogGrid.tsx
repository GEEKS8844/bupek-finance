'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Calendar, User, Bookmark } from 'lucide-react';
import { useState } from 'react';

export function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const articles = [
    {
      id: 1,
      title: '5 Essential Tips for Securing a Business Loan in 2024',
      excerpt: 'Learn the key strategies to improve your loan application and increase approval chances with practical tips from our experts.',
      category: 'Financial Education',
      author: 'John Mwangi',
      date: 'June 1, 2024',
      image: '📚',
      readTime: 5,
    },
    {
      id: 2,
      title: 'How SMEs Can Scale Their Business with Proper Financing',
      excerpt: 'Discover the role of strategic financing in business growth and how BUPEK Finance supports SME expansion.',
      category: 'Entrepreneurship',
      author: 'Sarah Kipchoge',
      date: 'May 28, 2024',
      image: '📈',
      readTime: 7,
    },
    {
      id: 3,
      title: 'BUPEK Finance Announces New Agricultural Loan Product',
      excerpt: 'Expanding our commitment to rural financing with new seasonal loan options for farmers and agricultural enterprises.',
      category: 'Company News',
      author: 'BUPEK Team',
      date: 'May 25, 2024',
      image: '🌾',
      readTime: 4,
    },
    {
      id: 4,
      title: 'Understanding Interest Rates: A Guide for Borrowers',
      excerpt: 'Everything you need to know about how interest rates work and how they affect your loan repayment.',
      category: 'Financial Education',
      author: 'David Kipchoge',
      date: 'May 20, 2024',
      image: '💰',
      readTime: 6,
    },
    {
      id: 5,
      title: 'Success Story: From Startup to 50-Person Team',
      excerpt: 'Read how Grace Ochieng built a thriving business with support from BUPEK Finance and the right financing strategy.',
      category: 'Success Stories',
      author: 'BUPEK Team',
      date: 'May 15, 2024',
      image: '🚀',
      readTime: 5,
    },
    {
      id: 6,
      title: 'Digital Banking: The Future of Microfinance',
      excerpt: 'Explore how technology is transforming the lending landscape and making finance more accessible.',
      category: 'Entrepreneurship',
      author: 'Jane Mwangi',
      date: 'May 10, 2024',
      image: '💻',
      readTime: 8,
    },
  ];

  const categories = ['All', 'Financial Education', 'Entrepreneurship', 'Company News', 'Success Stories'];

  const filteredArticles = selectedCategory && selectedCategory !== 'All'
    ? articles.filter((a) => a.category === selectedCategory)
    : articles;

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
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-[#0F2D52] mb-8">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat === 'All' ? null : cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  (cat === 'All' && !selectedCategory) || selectedCategory === cat
                    ? 'bg-[#D4AF37] text-[#0F2D52]'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              variants={item}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Image Area */}
              <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#2563EB]/20 h-48 flex items-center justify-center group-hover:shadow-lg transition-all">
                <div className="text-7xl">{article.image}</div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="inline-block w-fit mb-4">
                  <span className="bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0F2D52] mb-3 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-4 mb-6 text-xs text-gray-600 border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="w-full justify-between text-[#D4AF37] hover:text-[#0F2D52] hover:bg-[#D4AF37]/10 group/btn"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600">No articles found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}