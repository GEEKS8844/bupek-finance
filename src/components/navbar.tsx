'use client';

import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Loan Products' },
    { href: '/calculator', label: 'Loan Calculator' },
    { href: '/branches', label: 'Branches' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="container-custom flex items-center justify-between h-14 sm:h-16 md:h-20 px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-navy to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg">BF</span>
            </div>
            <span className="hidden sm:inline font-bold text-sm md:text-lg text-primary-navy dark:text-white">
              BUPEK Finance
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs lg:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-navy dark:hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggle />

          {/* Apply Button */}
          <Link
            href="/apply"
            className="hidden md:inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-primary-navy to-accent text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all font-medium text-xs sm:text-sm"
          >
            Apply Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800">
          <div className="px-4 sm:px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-700 dark:text-slate-300 hover:text-primary-navy dark:hover:text-accent transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/apply"
              className="px-6 py-2 bg-gradient-to-r from-primary-navy to-accent text-white rounded-lg hover:shadow-lg transition-all font-medium text-center text-sm"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}