import Image from 'next/image';

export default function Features() {
  const features = [
    {
      title: 'Clean, distraction-free backgrounds',
      description: 'AI-powered background removal that creates perfect neutral backgrounds. No more cluttered photos or inconsistent lighting.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=center',
      reverse: false,
      icon: (
        <svg className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M9 9h6v6H9z"/>
          <path d="M12 3v6M12 15v6M3 12h6M15 12h6"/>
        </svg>
      ),
    },
    {
      title: 'Consistent catalog style for all products',
      description: 'Maintain a professional, cohesive look across your entire product catalog. Perfect lighting and composition every time.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center',
      reverse: true,
      icon: (
        <svg className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>
        </svg>
      ),
    },
    {
      title: 'Marketplace-ready sizes (Amazon, Shopify, Etsy)',
      description: 'Automatically optimized for each platform\'s requirements. Perfect dimensions, compression, and quality for maximum conversion.',
      image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop&crop=center',
      reverse: false,
      icon: (
        <svg className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M4 4h16v12H4z"/>
          <path d="M2 20h20"/>
          <path d="M8 8h8M8 12h8M8 16h4"/>
        </svg>
      ),
    },
    {
      title: 'API & bulk upload for scaling teams',
      description: 'Integrate with your existing workflow. Upload hundreds of images at once or use our API for automated processing.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center',
      reverse: true,
      icon: (
        <svg className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M4 7h16M4 12h10M4 17h7"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center text-sm font-semibold text-blue-600 bg-blue-100 ring-1 ring-blue-200 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
            Everything you need to create{' '}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              professional product photos
            </span>
          </h2>
          <p className="text-body-lg text-slate-600 max-w-3xl mx-auto">
            From messy backgrounds to marketplace-ready images in seconds. 
            Our AI handles the technical details so you can focus on selling.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                feature.reverse ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`${feature.reverse ? 'lg:col-start-2' : ''} animate-slide-up`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-100 to-violet-100 rounded-2xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div className="text-sm font-semibold text-blue-600 bg-blue-100 rounded-full px-4 py-2">
                    Feature {index + 1}
                  </div>
                </div>
                
                <h3 className="text-heading text-slate-900 mb-6">
                  {feature.title}
                </h3>
                
                <p className="text-body-lg text-slate-600 mb-8 leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature Benefits */}
                <div className="space-y-3">
                  {[
                    'AI-powered processing',
                    '30-second results',
                    'Professional quality',
                    'No design skills needed'
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-600 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={`${feature.reverse ? 'lg:col-start-1' : ''} animate-fade-in`}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={600}
                      height={320}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Overlay Badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        AI Enhanced
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-slate-100 to-slate-200 rounded-3xl p-12">
            <h3 className="text-heading text-slate-900 mb-4">
              Ready to transform your product photos?
            </h3>
            <p className="text-body-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join thousands of sellers who trust Makedit for their product photography needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/login" className="btn-primary">
                Get Started
              </a>
              <a href="/pricing" className="btn-secondary bg-slate-200 border-slate-300 text-slate-700 hover:bg-slate-300">
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
