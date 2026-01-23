# EmailJS Setup Guide

## How to Set Up EmailJS for Your Contact Form

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create an Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### Step 3: Create an Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message from {{user_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{user_name}}
Email: {{user_email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save the template and note down your **Template ID**

### Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (also called User ID)

### Step 5: Update Your .env File
1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### Step 6: Restart Your Development Server
After updating the `.env` file, restart your development server:
```bash
npm run dev
```

## Testing
1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox for the message
4. If it doesn't work, check the browser console for error messages

## Troubleshooting
- Make sure your `.env` file is in the project root (same level as `package.json`)
- Ensure there are no spaces around the `=` in your `.env` file
- Verify your EmailJS service is properly configured and active
- Check that your email template variables match the ones used in the code

## Current Status
Right now, the contact form will show a message asking users to contact you directly since EmailJS is not configured. Once you set up EmailJS with the steps above, the form will work automatically.