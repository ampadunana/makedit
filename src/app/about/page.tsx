import Layout from '@/components/Layout';
import Link from 'next/link';

export default function AboutPage() {

  const values = [
    {
      title: 'Simplicity First',
      description: 'We believe powerful tools should be simple to use. No complex interfaces, no overwhelming options.',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Quality Matters',
      description: 'Every image we process meets professional standards. We never compromise on quality.',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Sellers First',
      description: 'We built Makedit specifically for e-commerce sellers. Every feature serves your success.',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

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
                Our Story
              </div>
              
              <h1 className="text-display text-slate-900 mb-8">
                Helping small sellers look{' '}
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  professional
                </span>{' '}
                without expensive studios
              </h1>
              
              <p className="text-body-lg text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                We started Makedit because we saw too many amazing products held back by poor photography. 
                Professional product photos shouldn't require a studio, expensive equipment, or design skills. 
                They should just work.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/login" className="btn-primary">
                  Start Your Journey
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-up">
                <h2 className="text-hero text-slate-900 mb-8">
                  Our mission is simple: 
                  <span className="text-slate-600"> democratize professional product photography</span>
                </h2>
                <p className="text-body-lg text-slate-600 mb-8 leading-relaxed">
                  We believe every seller deserves access to high-quality product photos that convert. 
                  Whether you're just starting out or scaling your business, Makedit gives you the tools 
                  to compete with the biggest brands.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 font-medium">No design experience required</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 font-medium">Works with any product</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 font-medium">Results in 30 seconds</span>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl blur-2xl opacity-20"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center"
                      alt="Our mission in action"
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                        <div className="text-sm font-semibold text-slate-800 mb-1">Before & After</div>
                        <div className="text-xs text-slate-600">Professional results in seconds</div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-hero text-slate-900 mb-6">
                What we stand for
              </h2>
              <p className="text-body-lg text-slate-600 max-w-3xl mx-auto">
                Our values guide everything we do, from product decisions to customer support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={value.title} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-violet-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                    {value.icon}
                  </div>
                  <h3 className="text-heading text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-hero text-slate-900 mb-8">
                Who we are
              </h2>
              <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed">
                <p className="text-xl mb-6">
                  We're a passionate team of designers, engineers, and entrepreneurs who believe that 
                  every seller deserves access to professional-quality product photography.
                </p>
                <p className="mb-6">
                  Our journey began when we noticed that small businesses and individual sellers were 
                  struggling to compete with larger brands due to poor product photography. We saw 
                  talented entrepreneurs with amazing products being held back by technical barriers 
                  and expensive studio costs.
                </p>
                <p className="mb-6">
                  That's why we built Makedit – to democratize professional product photography. 
                  We combine cutting-edge AI technology with deep understanding of e-commerce needs 
                  to create a solution that's both powerful and accessible.
                </p>
                <p>
                  Today, we're proud to help thousands of sellers across Shopify, Amazon, and Etsy 
                  create stunning product images that drive sales and build trust with their customers. 
                  Our mission is simple: make professional product photography accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-hero text-white mb-6">
              Ready to transform your product photos?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Join thousands of sellers who trust Makedit for their product photography needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}