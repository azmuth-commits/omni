import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, institution, instType } = body;

    // Validate required fields
    if (!name || !email || !institution) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get Gmail credentials from environment variables
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    // Demo mode: Log to console if credentials not configured
    if (!gmailUser || !gmailAppPassword) {
      console.log('📧 Demo Mode - Form submission (no email sent):');
      console.log('Contact form submission:', {
        name,
        email,
        institution,
        instType,
        timestamp: new Date().toISOString()
      });
      console.log('💡 To enable real emails, configure GMAIL_USER and GMAIL_APP_PASSWORD in .env.local');

      return NextResponse.json(
        { success: true, message: 'Contact form submitted successfully (demo mode)' },
        { status: 200 }
      );
    }

    // Create Nodemailer transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    // Create email content
    const emailContent = `
New Sales Inquiry from Omni Cat Website

Contact Information:
- Name: ${name}
- Email: ${email}
- Institution: ${institution}
- Institution Type: ${instType}

Submitted: ${new Date().toLocaleString()}
    `;

    // Send email
    await transporter.sendMail({
      from: gmailUser,
      to: gmailUser, // Send to yourself
      subject: `New Sales Inquiry: ${name} from ${institution}`,
      text: emailContent,
      html: `
        <h2>New Sales Inquiry from Omni Cat Website</h2>
        <h3>Contact Information:</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Institution:</strong> ${institution}</li>
          <li><strong>Institution Type:</strong> ${instType}</li>
        </ul>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    console.log('✅ Email sent successfully for:', { name, email, institution });

    return NextResponse.json(
      { success: true, message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}