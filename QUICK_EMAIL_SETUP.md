# Quick Email Setup - Franchise Enquiry Form

The form is currently NOT sending emails because no email service is configured. Choose ONE of these options:

## 🚀 QUICKEST SOLUTION: Use Formspree (5 minutes)

1. Go to https://formspree.io/ and sign up (free)
2. Create a new form
3. Set the email to: `vasanthb.gap@gmail.com`
4. Copy your Form ID (looks like: `xeqwjzqk`)
5. Add to `.env` file:
   ```
   VITE_FORMSPREE_ID=xeqwjzqk
   ```

Then I'll update the code to use Formspree.

## OR Option 2: Use EmailJS (10 minutes)

1. Go to https://www.emailjs.com/ and sign up
2. Create Email Service (connect Gmail/Outlook)
3. Create Email Template with variables: `{{name}}`, `{{email}}`, `{{phone}}`, `{{location}}`, `{{investment}}`, `{{message}}`
4. Set default "To Email" to: `vasanthb.gap@gmail.com`
5. Get Service ID, Template ID, and Public Key
6. Add to `.env`:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## OR Option 3: Use Supabase Edge Function with Resend

1. Sign up at https://resend.com/
2. Get API key
3. Run: `supabase secrets set RESEND_API_KEY=your_key`
4. Deploy: `supabase functions deploy send-franchise-email`

## OR Option 4: Use a Webhook (Zapier/Make.com)

1. Create a Zapier/Make.com webhook that sends emails
2. Add webhook URL to `.env`:
   ```
   VITE_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/...
   ```

---

**Which option do you want to use? I recommend Formspree for the quickest setup.**

