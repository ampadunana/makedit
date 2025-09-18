import { NextRequest, NextResponse } from 'next/server';
import { ContactForm, ApiResponse } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const data: ContactForm = await request.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json<ApiResponse>({
        success: false,
        error: 'Missing required fields'
      }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json<ApiResponse>({
        success: false,
        error: 'Invalid email format'
      }, { status: 400 });
    }

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM system
    // 4. Send auto-reply to customer

    // For now, we'll just log the data and return success
    console.log('Contact form submission:', {
      name: data.name,
      email: data.email,
      company: data.company,
      subject: data.subject,
      message: data.message,
      timestamp: new Date().toISOString()
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json<ApiResponse>({
      success: true,
      message: 'Thank you for your message. We will get back to you within 24 hours.'
    });

  } catch (error: unknown) {
    console.error('Contact form error:', error);
    
    return NextResponse.json<ApiResponse>({
      success: false,
      error: 'Failed to process contact form'
    }, { status: 500 });
  }
}
