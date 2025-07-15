import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for demo purposes
// In production, you'd use a database
let subscribers: { email: string; subscribedAt: Date }[] = [];

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingSubscriber = subscribers.find(sub => sub.email === email);
    if (existingSubscriber) {
      return NextResponse.json(
        { message: 'Email is already subscribed to our newsletter' },
        { status: 409 }
      );
    }

    // Add new subscriber
    subscribers.push({
      email,
      subscribedAt: new Date()
    });

    // In a real application, you would:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Integrate with email service (Mailchimp, SendGrid, etc.)

    console.log(`New newsletter subscriber: ${email}`);
    console.log(`Total subscribers: ${subscribers.length}`);

    return NextResponse.json(
      { 
        message: 'Successfully subscribed to newsletter!',
        totalSubscribers: subscribers.length
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Get all subscribers (admin endpoint)
  return NextResponse.json({
    subscribers: subscribers.length,
    data: subscribers.map(sub => ({
      email: sub.email,
      subscribedAt: sub.subscribedAt
    }))
  });
}