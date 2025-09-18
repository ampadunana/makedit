export default function Testimonials() {
  const testimonials = [
    { 
      name: 'Sarah Chen', 
      role: 'E-commerce Manager', 
      company: 'StyleCo',
      quote: 'Makedit transformed our product photography workflow. What used to take hours now takes minutes, and the quality is consistently professional.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      rating: 5
    },
    { 
      name: 'Marcus Rodriguez', 
      role: 'Founder', 
      company: 'TechGear',
      quote: 'We dropped studio costs by 80% and saw a 40% increase in conversion rates. Makedit pays for itself with the first sale.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5
    },
    { 
      name: 'Emily Watson', 
      role: 'Marketing Director', 
      company: 'Fashion Forward',
      quote: 'The API integration was seamless. We can now process hundreds of product images automatically. Our team loves the consistency.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-sm font-semibold text-blue-700 bg-blue-50 ring-1 ring-blue-200 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Customer Stories
          </div>
          <h2 className="text-hero text-slate-900 mb-6">
            Loved by{' '}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              thousands of sellers
            </span>
          </h2>
          <p className="text-body-lg text-slate-600 max-w-3xl mx-auto">
            See how Makedit is helping e-commerce businesses create professional product photos 
            and increase their conversion rates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-slate-700 text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-4xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">10K+</div>
            <div className="text-slate-600">Happy customers</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">1M+</div>
            <div className="text-slate-600">Images processed</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">40%</div>
            <div className="text-slate-600">Avg. conversion increase</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">30s</div>
            <div className="text-slate-600">Average processing time</div>
          </div>
        </div>
      </div>
    </section>
  );
}
