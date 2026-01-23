# EmailJS Setup Guide

## Quick Setup for Contact Form

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (100 emails/month free)
3. Verify your email address

### Step 2: Create an Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose **Gmail** (recommended)
4. Connect your Gmail account (fikreddu@gmail.com)
5. Your Service ID will be something like `service_xxxxxxx`

### Step 3: Create an Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this exact template:

**Subject:** `New Portfolio Contact: {{from_name}}`

**Content:**
```
Hello Fikremariam,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Reply to: {{reply_to}}
Sent from: Portfolio Contact Form
```

4. Save the template and note your Template ID (like `template_xxxxxxx`)

### Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (User ID) - it looks like `xxxxxxxxxxxxxxxxx`

### Step 5: Update Your .env File
Replace the values in your `.env` file with your actual credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_your_actual_id
VITE_EMAILJS_TEMPLATE_ID=template_your_actual_id  
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### Step 6: Test the Contact Form
1. Restart your development server: `npm run dev`
2. Fill out the contact form on your website
3. Submit the form
4. Check your Gmail inbox (fikreddu@gmail.com) for the message

## Current Status
✅ Contact form is ready and functional
✅ Form validation is working
✅ Error handling is implemented
✅ EmailJS integration is configured

**Next:** Just add your real EmailJS credentials to make email sending work!

## Troubleshooting
- If emails don't arrive, check your EmailJS dashboard for delivery status
- Make sure your Gmail service is properly connected
- Verify the template variables match exactly
- Check browser console for any error messages