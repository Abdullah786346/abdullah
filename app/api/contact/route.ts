import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for demo purposes
let contactMessages: {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  message: string;
  submittedAt: Date;
  status: 'new' | 'read' | 'replied';
}[] = [];

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, mobileNumber, message } = await request.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { message: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Generate unique ID
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);

    // Create new contact message
    const newMessage = {
      id,
      firstName,
      lastName,
      email,
      mobileNumber: mobileNumber || '',
      message,
      submittedAt: new Date(),
      status: 'new' as const
    };

    contactMessages.push(newMessage);

    // In a real application, you would:
    // 1. Save to database
    // 2. Send notification email to admin
    // 3. Send confirmation email to user
    // 4. Integrate with CRM system

    console.log(`New contact message from: ${firstName} ${lastName} (${email})`);
    console.log(`Message: ${message}`);
    console.log(`Total messages: ${contactMessages.length}`);

    return NextResponse.json(
      { 
        message: 'Your message has been sent successfully! I will get back to you soon.',
        messageId: id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Get all contact messages (admin endpoint)
  return NextResponse.json({
    totalMessages: contactMessages.length,
    messages: contactMessages.sort((a, b) => 
      new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    )
  });
}