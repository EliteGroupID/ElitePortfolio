import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  // Check if Resend API key is configured
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service not configured. Please add RESEND_API_KEY to environment variables." },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, company, service, budget, message } = body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.RESEND_TO_EMAIL || "hello@elitetech.dev",
      subject: `New Project Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ffffff; background: #2a6cff; padding: 20px; margin: 0;">
            New Project Inquiry
          </h2>
          <div style="padding: 24px; background: #0a0a0a; color: #ffffff;">
            <p style="margin: 0 0 16px 0;">
              <strong>Name:</strong> ${name}
            </p>
            <p style="margin: 0 0 16px 0;">
              <strong>Email:</strong> <a href="mailto:${email}" style="color: #2a6cff;">${email}</a>
            </p>
            ${company ? `<p style="margin: 0 0 16px 0;"><strong>Company:</strong> ${company}</p>` : ""}
            <p style="margin: 0 0 16px 0;">
              <strong>Service:</strong> ${service}
            </p>
            ${budget ? `<p style="margin: 0 0 16px 0;"><strong>Budget:</strong> ${budget}</p>` : ""}
            <div style="margin: 16px 0; padding: 16px; background: #1a1a1a; border-radius: 8px;">
              <p style="margin: 0 0 8px 0;"><strong>Message:</strong></p>
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <p style="padding: 16px; margin: 0; text-align: center; color: #666; font-size: 12px;">
            Sent from ElitePortfolio Contact Form
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
