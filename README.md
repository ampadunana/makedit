# Makedit - Professional Background Replacement for E-commerce

A modern, minimalistic website for AI-powered background replacement service designed for e-commerce sellers. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

### Frontend
- **Modern, Minimalistic Design** - Clean, professional UI inspired by top SaaS companies
- **Responsive Layout** - Works perfectly on desktop, tablet, and mobile devices
- **Component-Based Architecture** - Reusable components for maintainability
- **Multiple Pages** - Home, Pricing, About, Contact, and Login pages
- **Interactive Elements** - Smooth animations and hover effects
- **Accessibility** - Proper semantic HTML and ARIA labels

### Backend
- **API Routes** - Separate endpoints for different functionalities
- **Type Safety** - Full TypeScript support throughout
- **Error Handling** - Comprehensive error handling and validation
- **Contact Form** - Working contact form with backend processing
- **User Management** - User registration and authentication system
- **Credits System** - Credit management for pay-per-use model

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── chat/          # Chat API
│   │   ├── contact/       # Contact form API
│   │   ├── credits/       # Credits management API
│   │   ├── generate/      # Image generation API
│   │   └── users/         # User management API
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── login/             # Login page
│   ├── pricing/           # Pricing page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Layout.tsx         # Main layout wrapper
│   ├── Navbar.tsx         # Navigation component
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Features section
│   ├── Pricing.tsx        # Pricing section
│   ├── Testimonials.tsx   # Testimonials section
│   └── Footer.tsx         # Footer component
├── lib/                   # Utility functions
├── types/                 # TypeScript type definitions
│   └── index.ts          # Main type definitions
└── globals.css           # Global styles
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Tailwind
- **Icons**: Heroicons and custom SVG icons
- **Fonts**: Geist Sans and Geist Mono
- **AI Integration**: Google Gemini API

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6) to Purple (#8B5CF6) gradients
- **Secondary**: Gray scale for text and backgrounds
- **Accent**: Green for success states, Red for errors
- **Background**: White with subtle gradients

### Typography
- **Headings**: Bold, large sizes for hierarchy
- **Body**: Clean, readable font sizes
- **Links**: Blue with hover states

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Multiple variants (primary, secondary, outline)
- **Forms**: Clean inputs with focus states
- **Navigation**: Sticky header with mobile menu

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd makedit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server**
```bash
npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages

### Home Page (`/`)
- Hero section with value proposition
- Features showcase
- Pricing overview
- Customer testimonials

### Pricing Page (`/pricing`)
- Detailed pricing plans
- Feature comparisons
- FAQ section

### About Page (`/about`)
- Company mission and vision
- Team information
- Company values

### Contact Page (`/contact`)
- Contact form with validation
- Contact information
- Multiple contact methods

### Login Page (`/login`)
- User authentication
- Social login options
- Registration form

## 🔌 API Endpoints

### Image Generation
- `POST /api/generate` - Generate AI-processed images
- `POST /api/chat` - Chat with AI about images

### User Management
- `POST /api/users` - Create new user
- `GET /api/users` - Get user information

### Credits System
- `POST /api/credits` - Manage user credits
- `GET /api/credits` - Get credit balance

### Contact
- `POST /api/contact` - Submit contact form

## 🎯 Key Features

### For E-commerce Sellers
- **Pay-per-image pricing** - Only pay for what you use
- **Multiple background styles** - Studio, gradient, outdoor, minimal
- **High-resolution output** - Professional quality results
- **Fast processing** - Results in seconds
- **Easy integration** - Simple API and webhooks

### For Developers
- **Type-safe API** - Full TypeScript support
- **Modular architecture** - Easy to extend and maintain
- **Error handling** - Comprehensive error management
- **Responsive design** - Mobile-first approach
- **Performance optimized** - Fast loading times

## 🔧 Customization

### Adding New Pages
1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Import and use the `Layout` component

### Adding New Components
1. Create a new file in `src/components/`
2. Export as default component
3. Import and use in pages

### Styling
- Modify `src/app/globals.css` for global styles
- Use Tailwind classes for component styling
- Customize colors in `tailwind.config.js`

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for speed
- **Bundle Size**: Optimized with code splitting
- **Images**: Optimized with Next.js Image component

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy automatically

### Other Platforms
- **Netlify**: Compatible with static export
- **AWS**: Use Amplify or custom setup
- **DigitalOcean**: App Platform compatible

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, email hello@makedit.com or visit our help center.

---

**Makedit** - Transform your product photos with AI-powered background replacement. Perfect for Shopify, Amazon, Etsy sellers.