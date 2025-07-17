import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const formData = await request.text();
  const params = new URLSearchParams(formData);
  const name = params.get('name');
  const email = params.get('email');
  const phone = params.get('phone');
  const city = params.get('city');
  const experience = params.get('experience');
  const languages = params.get('languages');
  const message = params.get('message');

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <bmpoffice24x7@gmail.com>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: email || '',
      subject: `New Priest Partner Application from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCity: ${city}\nExperience: ${experience}\nLanguages: ${languages}\nMessage: ${message}`,
      html: `
        <div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;\">
          <h2 style=\"color: #e65100;\">New Priest Partner Application</h2>
          <table style=\"width: 100%; border-collapse: collapse;\">
            <tr><td style=\"font-weight: bold; padding: 8px 0; width: 120px;\">Name:</td><td style=\"padding: 8px 0;\">${name}</td></tr>
            <tr><td style=\"font-weight: bold; padding: 8px 0;\">Email:</td><td style=\"padding: 8px 0;\">${email}</td></tr>
            <tr><td style=\"font-weight: bold; padding: 8px 0;\">Phone:</td><td style=\"padding: 8px 0;\">${phone}</td></tr>
            <tr><td style=\"font-weight: bold; padding: 8px 0;\">City:</td><td style=\"padding: 8px 0;\">${city}</td></tr>
            <tr><td style=\"font-weight: bold; padding: 8px 0;\">Experience:</td><td style=\"padding: 8px 0;\">${experience} years</td></tr>
            <tr><td style=\"font-weight: bold; padding: 8px 0;\">Languages:</td><td style=\"padding: 8px 0;\">${languages}</td></tr>
            <tr><td style=\"font-weight: bold; padding: 8px 0;\">Message:</td><td style=\"padding: 8px 0; white-space: pre-line;\">${message}</td></tr>
          </table>
        </div>
      `
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
} 