'use client';

import { motion } from 'framer-motion';

export function LeadershipTeam() {
  const team = [
    {
      name: 'James Kamau',
      role: 'Chief Executive Officer',
      bio: '20+ years in microfinance and financial inclusion',
      image: '👨‍💼',
    },
    {
      name: 'Dr. Sarah Mwangi',
      role: 'Chief Operations Officer',
      bio: 'Expert in operational excellence and risk management',
      image: '👩‍💼',
    },
    {
      name: 'Kwame Osei',
      role: 'Chief Financial Officer',
      bio: 'Banking industry veteran with 18 years experience',
      image: '👨‍💼',
    },
    {
      name: 'Grace Kipchoge',
      role: 'Head of Customer Relations',
      bio: 'Passionate about customer satisfaction and engagement',
      image: '👩‍💼',
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
            Leadership
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F2D52] mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced professionals committed to your financial success
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl p-8 border border-gray-100 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                {member.image}
              </div>

              <h3 className="text-xl font-bold text-[#0F2D52] mb-2">{member.name}</h3>
              <p className="text-[#D4AF37] font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}