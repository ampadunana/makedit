'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
            Makedit
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-all duration-200 hover:text-blue-600 ${
                pathname === item.href 
                  ? 'text-blue-600' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="/login" 
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Log in
          </Link>
          <Link 
            href="/login" 
            className="btn-primary text-sm px-4 py-2"
          >
            Get started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden p-2 text-slate-700 hover:text-slate-900 transition-colors" 
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md">
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="block py-2 text-slate-700 hover:text-blue-600 font-medium transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <Link 
                href="/login" 
                className="block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Link>
              <Link 
                href="/login" 
                className="btn-primary w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
