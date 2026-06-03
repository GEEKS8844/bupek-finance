'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function SuccessStories() {
  const testimonials = [
    {
      name: 'John Mwangi',
      business: 'Agricultural Export Business',
      image: '👨‍🌾',
      achievement: 'Grew revenue by 150%',
      story:
        'BUPEK Finance provided the capital I needed to expand my farming operations. With flexible repayment terms and excellent support, scaling up was seamless.',
      rating: 5,
    },
    {
      name: 'Sarah Kamau',
      business: 'Fashion & Retail',
      image: '👩‍💼',
      achievement: 'Opened 3 New Stores',
      story:
        'The fast approval process and competitive rates allowed me to expand my retail business across the city. Best financial decision I made.',
      rating: 5,
    },
    {
      name: 'David Kipchoge',
      business: 'Manufacturing & Logistics',
      image: '👨‍💼',
      achievement: 'Doubled Production Capacity',
      story:
        'Asset financing from BUPEK helped me purchase new equipment. Transparent process, great customer service, and achievable results.',
      rating: 5,
    },
    {
      name: 'Grace Ochieng',
      business: 'Food & Beverage Startup',
      image: '👩‍🍳',
      achievement: 'From Startup to 50 Employees',
      story:
        'Started with an emergency loan and built a thriving business. BUPEK believed in me when others didn\'t. Highly recommend!',
      rating: 5,
    },
  ];

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
            Client Testimonials
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F2D52] mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real entrepreneurs and business owners sharing their growth journey with BUPEK Finance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              nextEl: '.swiper-button-next-testimonial',
              prevEl: '.swiper-button-prev-testimonial',
            }}
            pagination={{
              el: '.swiper-pagination-testimonial',
              clickable: true,
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-8 h-full border border-gray-100 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-4xl mb-2">{testimonial.image}</p>
                      <h3 className="text-lg font-bold text-[#0F2D52]">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.business}
                      </p>
                    </div>
                  </div>

                  {/* Achievement Badge */}
                  <div className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    {testimonial.achievement}
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]"
                      />
                    ))}
                  </div>

                  {/* Story */}
                  <p className="text-gray-600 leading-relaxed">
                    "{testimonial.story}"
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button className="swiper-button-prev-testimonial w-10 h-10 bg-[#D4AF37] hover:bg-[#c99a2e] text-white rounded-full flex items-center justify-center transition-colors" />
            <div className="swiper-pagination-testimonial flex gap-2" />
            <button className="swiper-button-next-testimonial w-10 h-10 bg-[#D4AF37] hover:bg-[#c99a2e] text-white rounded-full flex items-center justify-center transition-colors" />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        :global(.swiper-pagination-testimonial) {
          position: relative;
          bottom: auto;
        }
        :global(.swiper-pagination-testimonial .swiper-pagination-bullet) {
          background-color: #d4af37;
          opacity: 0.5;
        }
        :global(.swiper-pagination-testimonial .swiper-pagination-bullet-active) {
          background-color: #d4af37;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}