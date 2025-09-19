import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Makedit - Turn DIY photos into studio-quality product images",
  description: "Transform messy backgrounds into clean, conversion-ready product shots for Shopify, Amazon, and Etsy. AI-powered photo editing in seconds.",
  icons: {
    icon: [
      { url: '/favicon-16x16.png?v=3', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png?v=3', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png?v=3', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-64x64.png?v=3', sizes: '64x64', type: 'image/png' },
      { url: '/favicon-128x128.png?v=3', sizes: '128x128', type: 'image/png' },
      { url: '/favicon-256x256.png?v=3', sizes: '256x256', type: 'image/png' },
      { url: '/favicon-512x512.png?v=3', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico?v=3', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=3', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code-here',
  },
  alternates: {
    canonical: 'https://makedit.online',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://makedit.online',
    siteName: 'Makedit',
    title: 'Makedit - Turn DIY photos into studio-quality product images',
    description: 'Transform messy backgrounds into clean, conversion-ready product shots for Shopify, Amazon, and Etsy. AI-powered photo editing in seconds.',
    images: [
      {
        url: 'https://makedit.online/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Makedit - AI Product Photo Enhancement',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Makedit - Turn DIY photos into studio-quality product images',
    description: 'Transform messy backgrounds into clean, conversion-ready product shots for Shopify, Amazon, and Etsy. AI-powered photo editing in seconds.',
    images: ['https://makedit.online/twitter-image.png'],
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#2563eb',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
