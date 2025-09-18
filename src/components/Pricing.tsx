'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  // Plan data matches the screenshot labels
  const tiers = [
    {
      name: 'Per Image',
      price: '$0.50',
      yearlyPrice: '$0.45',
      period: 'per image',
      description: 'Perfect for testing or casual sellers',
      features: [
        '3 revisions included',
        'High-res JPG output',
        'Marketplace-ready sizes',
        '30-second processing',
        'Email support',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$35',
      yearlyPrice: '$29',
      period: 'per month',
      description: 'Best for growing businesses',
      features: [
        '100 images per month',
        'Bulk upload (up to 50 at once)',
        'API access & webhooks',
        'Priority processing',
        'Advanced background options',
        'Priority support',
        'Cancel anytime',
      ],
      cta: 'Get Started',
      popular: true,
      savings: 'Save 17%',
    },
    {
      name: 'Custom',
      price: 'Custom',
      yearlyPrice: 'Custom',
      period: 'contact us',
      description: 'Enterprise SLA, white-label, dedicated workspace',
      features: [
        'Unlimited images',
        'Dedicated workspace',
        'White-label solution',
        'SLA & dedicated support',
        'Custom integrations',
        'Team collaboration tools',
        'Custom background options',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const [openFaqs, setOpenFaqs] = useState<number[]>([]);
  const toggleFaq = (index: number) =>
    setOpenFaqs(prev => (prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]));

  const faqs = [
    {
      question: 'How does the free trial work?',
      answer:
        'You can upload your first 3 images completely free. No credit card required. See the quality for yourself before committing to any plan.',
    },
    {
      question: 'What image formats do you support?',
      answer:
        'We support JPG, PNG, and WebP uploads. All images are processed and returned as high-quality JPG files optimized for web use.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer:
        "Yes, you can cancel your subscription at any time. You'll continue to have access to your plan features until the end of your billing period.",
    },
    {
      question: 'Do you offer refunds?',
      answer:
        "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with the results, we'll refund your payment.",
    },
    {
      question: 'How fast is the processing?',
      answer:
        "Most images are processed within 30 seconds. Pro users get priority processing, and bulk uploads are processed in the order they're received.",
    },
    {
      question: 'Can I use the API for my existing workflow?',
      answer:
        'Absolutely! Our API is designed to integrate seamlessly with your existing tools and workflows. We provide comprehensive documentation and SDKs.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers.',
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees! You only pay for what you use. Start with our free trial and upgrade when you’re ready.',
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-violet-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center text-sm font-semibold text-slate-700 bg-slate-100 ring-1 ring-slate-200 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full mr-2"></span>
            Simple Pricing
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Choose your{' '}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              perfect plan
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            Start free, scale as you grow. No hidden fees, no surprises. 
            Cancel anytime.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-6 mb-16">
            <span className={`text-lg font-semibold transition-colors ${!isYearly ? 'text-slate-900' : 'text-slate-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 ${
                isYearly ? 'bg-gradient-to-r from-blue-600 to-violet-600' : 'bg-slate-300'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
                  isYearly ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-semibold transition-colors ${isYearly ? 'text-slate-900' : 'text-slate-400'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg">
                Save up to 17%
              </span>
            )}
          </div>
        </div>

        {/* PRICING CARDS — clean, aligned, like the screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {tiers.map((tier) => (
            <div key={tier.name} className="relative">
              {/* Pro badge centered and aligned */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-6 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg whitespace-nowrap">
                    Best for growing sellers
                  </div>
                </div>
              )}

              <div
                className={[
                  'h-full rounded-2xl border p-8 flex flex-col',
                  tier.popular
                    ? 'border-slate-300 shadow-[0_10px_30px_rgba(0,0,0,0.1)] bg-white ring-2 ring-blue-500/20'
                    : 'border-slate-200 bg-white',
                ].join(' ')}
              >
                {/* Title + Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{tier.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-extrabold text-slate-900">
                      {isYearly ? tier.yearlyPrice : tier.price}
                    </span>
                    {tier.price !== 'Custom' && (
                      <span className="text-slate-500 text-sm leading-6">/{tier.period}</span>
                    )}
                  </div>
                  {isYearly && tier.savings && (
                    <div className="mt-2 text-xs font-medium text-emerald-600">{tier.savings} billed yearly</div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <span
                        className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full ${
                          tier.popular ? 'bg-gradient-to-r from-blue-100 to-violet-100 text-blue-600' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="font-medium">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/login"
                  className={[
                    'w-full inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold transition',
                    tier.popular
                      ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-700 hover:to-violet-700 shadow-lg hover:shadow-xl'
                      : 'border border-slate-300 text-slate-800 hover:bg-slate-50',
                  ].join(' ')}
                >
                  {tier.cta}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* === Compare Plans (unchanged, just column labels match the new plan names) === */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-heading text-slate-900 mb-4">Compare Plans</h3>
            <p className="text-slate-600">See exactly what&apos;s included in each plan</p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Features</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Per Image</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900 bg-slate-50">Pro</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">Custom</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    { feature: 'Images per month', perImage: 'Unlimited', pro: '100', custom: 'Unlimited' },
                    { feature: 'Processing time', perImage: '30 seconds', pro: 'Priority', custom: 'Priority' },
                    { feature: 'Bulk upload', perImage: 'No', pro: 'Up to 50', custom: 'Unlimited' },
                    { feature: 'API access', perImage: 'No', pro: 'Yes', custom: 'Yes' },
                    { feature: 'Webhooks', perImage: 'No', pro: 'Yes', custom: 'Yes' },
                    { feature: 'Support', perImage: 'Email', pro: 'Priority', custom: 'Dedicated' },
                    { feature: 'White-label', perImage: 'No', pro: 'No', custom: 'Yes' },
                    { feature: 'SLA', perImage: 'No', pro: 'No', custom: 'Yes' },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">{row.feature}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 text-center">{row.perImage}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 text-center bg-slate-50">{row.pro}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 text-center">{row.custom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* === FAQ (unchanged) === */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
            <p className="text-xl text-slate-600">Everything you need to know about Makedit</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <h4 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h4>
                  <svg
                    className={`w-6 h-6 text-slate-500 transition-transform duration-300 ${
                      openFaqs.includes(index) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaqs.includes(index) && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* === Bottom CTA (kept) === */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
            </div>

            <div className="relative">
              <h3 className="text-4xl font-bold text-white mb-6">Ready to transform your product photos?</h3>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Join thousands of sellers who trust Makedit for their product photography needs.
              </p>
              <div className="flex justify-center">
                <a href="/contact" className="btn-primary text-lg px-8 py-4">
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
