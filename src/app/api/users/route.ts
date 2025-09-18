import { NextRequest, NextResponse } from 'next/server';
import { User, ApiResponse } from '@/types';

// In a real application, this would connect to a database
// For now, we'll use a simple in-memory store
const users: User[] = [];

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, password } = data;

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json<ApiResponse>({
        success: false,
        error: 'Missing required fields'
      }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return NextResponse.json<ApiResponse>({
        success: false,
        error: 'User already exists with this email'
      }, { status: 409 });
    }

    // Create new user
    const newUser: User = {
      id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name,
      email,
      credits: 5, // Free credits for new users
      subscription: 'free',
      createdAt: new Date()
    };

    users.push(newUser);

    // In a real application, you would:
    // 1. Hash the password
    // 2. Save to database
    // 3. Send verification email
    // 4. Create JWT token

    return NextResponse.json<ApiResponse<User>>({
      success: true,
      data: newUser,
      message: 'User created successfully'
    });

  } catch (error: unknown) {
    console.error('User creation error:', error);
    
    return NextResponse.json<ApiResponse>({
      success: false,
      error: 'Failed to create user'
    }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (email) {
      const user = users.find(user => user.email === email);
      if (!user) {
        return NextResponse.json<ApiResponse>({
          success: false,
          error: 'User not found'
        }, { status: 404 });
      }

      return NextResponse.json<ApiResponse<User>>({
        success: true,
        data: user
      });
    }

    // Return all users (in a real app, this would be paginated and protected)
    return NextResponse.json<ApiResponse<User[]>>({
      success: true,
      data: users
    });

  } catch (error: unknown) {
    console.error('User fetch error:', error);
    
    return NextResponse.json<ApiResponse>({
      success: false,
      error: 'Failed to fetch users'
    }, { status: 500 });
  }
}
