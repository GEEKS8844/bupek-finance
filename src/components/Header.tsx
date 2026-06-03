'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Products',
      href: '/products',
      submenu: [
        { label: 'All Products', href: '/products' },
        { label: 'Loan Calculator', href: '/calculator' },
        { label: 'Application', href: '/apply' },
      ],
    },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#0F2D52] rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
              B
            </div>
            <span className="font-bold text-[#0F2D52] text-xl hidden sm:inline">BUPEK Finance</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="px-4 py-2 text-[#0F2D52] font-medium hover:text-[#D4AF37] transition-colors flex items-center gap-2"
                >
                  {item.label}
                  {'submenu' in item && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {'submenu' in item && item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-[#F8FAFC] hover:text-[#D4AF37] transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              size="sm"
              variant="outline"
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
            >
              Login
            </Button>
            <Button size="sm" className="bg-[#D4AF37] hover:bg-[#c99a2e] text-[#0F2D52] font-semibold">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <nav className="py-4 space-y-2 border-t border-gray-200">
                {menuItems.map((item) => (
                  <div key={item.label}>
                    <button
                      onClick={() =>
                        'submenu' in item
                          ? setOpenDropdown(
                              openDropdown === item.label ? null : item.label
                            )
                          : setIsOpen(false)
                      }
                      className="w-full text-left px-4 py-2 text-[#0F2D52] font-medium hover:bg-[#F8FAFC] hover:text-[#D4AF37] transition-colors rounded-lg flex items-center justify-between"
                    >
                      {item.label}
                      {'submenu' in item && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </button>

                    {/* Mobile Submenu */}
                    {'submenu' in item &&
                      item.submenu &&
                      openDropdown === item.label && (
                        <div className="bg-gray-50 rounded-lg ml-4 mt-2 space-y-1">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.label}
                              href={subitem.href}
                              onClick={() => setIsOpen(false)}
                              className="block px-4 py-2 text-gray-700 hover:text-[#D4AF37] transition-colors rounded"
                            >
                              {subitem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </nav>

              <div className="py-4 px-4 space-y-2 border-t border-gray-200">
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
                >
                  Login
                </Button>
                <Button
                  size="sm"
                  className="w-full bg-[#D4AF37] hover:bg-[#c99a2e] text-[#0F2D52] font-semibold"
                >
                  Apply Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}