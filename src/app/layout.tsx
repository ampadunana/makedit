import type { Metadata } from "next";
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
      { url: '/favicon-256x256.png?v=2', sizes: '256x256', type: 'image/png' },
      { url: '/favicon-512x512.png?v=2', sizes: '512x512', type: 'image/png' },
      { url: '/favicon-1024x1024.png?v=2', sizes: '1024x1024', type: 'image/png' },
      { url: '/favicon-2048x2048.png?v=2', sizes: '2048x2048', type: 'image/png' },
      { url: '/favicon.ico?v=2', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '2048x2048', type: 'image/png' }
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' }
    ]
  },
  manifest: '/site.webmanifest',
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
