import { NextRequest, NextResponse } from 'next/server';
import { ApiResponse } from '@/types';

// In a real application, this would connect to a database
// For now, we'll use a simple in-memory store
const userCredits: Record<string, number> = {};

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { userId, action, amount } = data;

    if (!userId || !action || !amount) {
      return NextResponse.json<ApiResponse>({
        success: false,
        error: 'Missing required fields'
      }, { status: 400 });
    }

    // Initialize user credits if they don't exist
    if (!userCredits[userId]) {
      userCredits[userId] = 5; // Free credits for new users
    }

    if (action === 'deduct') {
      if (userCredits[userId] < amount) {
        return NextResponse.json<ApiResponse>({
          success: false,
          error: 'Insufficient credits'
        }, { status: 400 });
      }
      userCredits[userId] -= amount;
    } else if (action === 'add') {
      userCredits[userId] += amount;
    } else {
      return NextResponse.json<ApiResponse>({
        success: false,
        error: 'Invalid action. Use "add" or "deduct"'
      }, { status: 400 });
    }

    return NextResponse.json<ApiResponse<{ credits: number }>>({
      success: true,
      data: { credits: userCredits[userId] },
      message: `Credits ${action === 'add' ? 'added' : 'deducted'} successfully`
    });

  } catch (error: unknown) {
    console.error('Credits management error:', error);
    
    return NextResponse.json<ApiResponse>({
      success: false,
      error: 'Failed to manage credits'
    }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json<ApiResponse>({
        success: false,
        error: 'User ID is required'
      }, { status: 400 });
    }

    // Initialize user credits if they don't exist
    if (!userCredits[userId]) {
      userCredits[userId] = 5; // Free credits for new users
    }

    return NextResponse.json<ApiResponse<{ credits: number }>>({
      success: true,
      data: { credits: userCredits[userId] }
    });

  } catch (error: unknown) {
    console.error('Credits fetch error:', error);
    
    return NextResponse.json<ApiResponse>({
      success: false,
      error: 'Failed to fetch credits'
    }, { status: 500 });
  }
}




