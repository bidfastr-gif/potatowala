# Franchise Enquiry Email Setup

The franchise enquiry form automatically sends emails to **vasanthb.gap@gmail.com** when a user submits the form.

## Setup Options

### Option 1: Using EmailJS (Recommended - Easiest Setup)

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Create an Email Service (Gmail, Outlook, etc.)
3. Create an Email Template with these variables:
   - `{{to_email}}` (set default to: vasanthb.gap@gmail.com)
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{location}}`
   - `{{investment}}`
   - `{{message}}`
   - `{{subject}}`
4. Get your Service ID, Template ID, and Public Key from EmailJS dashboard
5. Add these to your `.env` file:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### Option 2: Using Supabase Edge Function with Resend

1. Sign up for [Resend](https://resend.com/) (free tier available)
2. Get your Resend API Key
3. Add it to Supabase secrets:
   ```bash
   supabase secrets set RESEND_API_KEY=your_resend_api_key
   ```
4. Deploy the edge function:
   ```bash
   supabase functions deploy send-franchise-email
   ```

The edge function is already created at: `supabase/functions/send-franchise-email/index.ts`

## Current Implementation

The form will:
1. Save the enquiry to the database (if `franchise_enquiries` table exists)
2. Send an email notification to vasanthb.gap@gmail.com
3. Show a success message to the user

If email service is not configured, the form will still save to the database successfully.

