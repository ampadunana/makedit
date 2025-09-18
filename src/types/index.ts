export interface User {
  id: string;
  email: string;
  name: string;
  credits: number;
  subscription?: 'free' | 'pro' | 'enterprise';
  createdAt: Date;
}

export interface ProcessedImage {
  id: string;
  original: string;
  processed: string;
  backgroundStyle: string;
  timestamp: Date;
  userId?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  credits: number;
  features: string[];
  popular?: boolean;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  message: string;
  subject: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
