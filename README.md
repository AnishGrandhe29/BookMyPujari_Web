This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

Your contact form is now set up to send emails in real time when hosted:

- A new API route (`app/api/contact/route.ts`) has been created using Next.js API routes and Nodemailer.
- When a user submits the "Get in Touch" form, you will receive an email with their details.
- The email sending uses environment variables for SMTP configuration and the recipient address, so you can use any SMTP provider (like Gmail, Outlook, or a custom domain).

**What you need to do before deploying:**
1. Add the following environment variables to your `.env.local` file (or your hosting provider's environment settings):

```
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your@email.com
SMTP_PASS=your_email_password
SMTP_FROM=your@email.com
CONTACT_RECEIVER_EMAIL=your@email.com
```
- Adjust the values to match your SMTP provider and the email address where you want to receive messages.

2. Run `npm install` to install the new `nodemailer` dependency.

3. Deploy your site. The contact form will work both locally and in production as long as the environment variables are set.

Let me know if you want help with a specific SMTP provider or want to test locally!
