'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      title: 'Email Support',
      description: 'Get help with your account, billing, or technical issues',
      contact: 'support@makedit.com',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Sales Inquiries',
      description: 'Questions about pricing, enterprise plans, or partnerships',
      contact: 'sales@makedit.com',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
    {
      title: 'Technical Support',
      description: 'API documentation, integrations, and technical questions',
      contact: 'tech@makedit.com',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const faqs = [
    {
      question: 'How quickly do you respond?',
      answer: 'We respond to all inquiries within 24 hours. For urgent technical issues, we have priority support available for Pro and Custom plan users.'
    },
    {
      question: 'Do you offer phone support?',
      answer: 'Yes! Phone support is available for Pro and Custom plan users. You can schedule a call directly from your dashboard.'
    },
    {
      question: 'Can I speak with someone about enterprise features?',
      answer: 'Absolutely! Our sales team is happy to discuss custom solutions, white-label options, and enterprise features. Contact us at sales@makedit.com.'
    },
    {
      question: 'Do you have a developer community?',
      answer: 'Yes! We have an active developer community on Discord where you can get help with API integrations, share tips, and connect with other developers.'
    }
  ];

  if (isSubmitted) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Message sent!</h1>
            <p className="text-slate-600 mb-8">
              Thanks for reaching out. We'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary">
                Back to Home
              </Link>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="btn-secondary"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center text-sm font-semibold text-blue-700 bg-blue-50 ring-1 ring-blue-200 rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                We're here to help
              </div>
              
              <h1 className="text-display text-slate-900 mb-8">
                Get in touch with our{' '}
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  friendly team
                </span>
              </h1>
              
              <p className="text-body-lg text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Have questions about Makedit? Need help with your account? Want to discuss enterprise features? 
                We're here to help and we respond within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-hero text-slate-900 mb-6">
                Choose how you'd like to reach us
              </h2>
              <p className="text-body-lg text-slate-600 max-w-3xl mx-auto">
                We offer multiple ways to get in touch, so you can choose what works best for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <div key={method.title} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-violet-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                    {method.icon}
                  </div>
                  <h3 className="text-heading text-slate-900 mb-4">{method.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{method.description}</p>
                  <a 
                    href={`mailto:${method.contact}`}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    {method.contact}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-hero text-slate-900 mb-6">
                Send us a message
              </h2>
              <p className="text-body-lg text-slate-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="sales">Sales Question</option>
                      <option value="billing">Billing Issue</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary px-8 py-4 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending...
                      </div>
                    ) : (
                      <span className="flex items-center justify-center">
                        Send Message
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-hero text-slate-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-body-lg text-slate-600">
                Quick answers to common questions about our support and services.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-hero text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Join thousands of sellers who trust Makedit for their product photography needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="btn-primary">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}