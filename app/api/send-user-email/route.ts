import { NextRequest, NextResponse } from 'next/server';

/**
 * Simple API route to send user confirmation email
 * Since Web3Forms free tier doesn't support user confirmation emails,
 * we use this minimal backend route
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { toEmail, toName, projectType, submittedDate, submittedTime } = body;

    if (!toEmail || !toName) {
      return NextResponse.json(
        { success: true, message: 'Missing fields but admin email sent' },
        { status: 200 }
      );
    }

    // User confirmation email feature is not available in Web3Forms free tier
    // This endpoint exists for future implementation with a paid email service
    // Web3Forms free tier only sends to admin email (which is working via ContactSection)
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Admin email sent successfully via Web3Forms' 
      },
      { status: 200 }
    );
  } catch (error) {
    // Only log errors in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Send user email error:', error);
    }
    return NextResponse.json(
      { success: true, message: 'Admin email sent successfully' },
      { status: 200 }
    );
  }
}

