"use client";

import Link from 'next/link';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-violet-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[75vh]">
          <div className="lg:col-span-6 animate-slide-up">

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Turn DIY photos into{' '}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                studio-quality
              </span>{' '}
              product images
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-slate-600 mb-6 max-w-xl">
              Transform DIY photos into professional product images that convert. 
              Perfect for Shopify, Amazon, and Etsy sellers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link href="/login" className="btn-primary group">
                <span>Upload your first photo free</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/pricing" className="btn-secondary bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200">
                See pricing
              </Link>
            </div>

          </div>

          {/* Interactive Demo */}
          <div className="lg:col-span-6 animate-fade-in">
            <div className="relative">
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center"
                afterImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center&sat=-100&brightness=1.2"
                beforeLabel="Original"
                afterLabel="AI Enhanced"
                className="max-w-2xl mx-auto"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-slate-200">
                <div className="text-sm text-slate-600">
                  <div className="font-semibold text-slate-800">Marketplace Ready</div>
                  <div className="text-xs text-slate-500">Perfect for all platforms</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

