# Step-by-Step Guide: Supabase Edge Function with Resend

This guide will help you set up email sending using Supabase Edge Function with Resend API.

## Prerequisites
- Supabase CLI installed
- Supabase project set up
- Resend account (free tier available)

---

## Step 1: Sign Up for Resend

1. Go to **https://resend.com/**
2. Click **"Get Started"** or **"Sign Up"**
3. Sign up with:
   - Email address
   - Password
   - Or use Google/GitHub OAuth
4. Verify your email address if prompted

---

## Step 2: Get Your Resend API Key

1. After logging in, go to **https://resend.com/api-keys**
2. Click **"Create API Key"**
3. Give it a name: `potatowala-franchise-emails`
4. Select permissions: **"Sending access"** (or Full access)
5. Click **"Add"**
6. **IMPORTANT**: Copy the API key immediately (you won't be able to see it again!)
   - It looks like: `re_123456789abcdefghijklmnop`
   - Save it somewhere safe (like a password manager)

---

## Step 3: Set Up Resend Domain (Optional but Recommended)

### Option A: Use Resend's Test Domain (Quick Start)
- You can skip this for now and use `onboarding@resend.dev` as the sender
- This works for testing but emails might go to spam

### Option B: Verify Your Own Domain (Better Deliverability)
1. Go to **https://resend.com/domains**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `potatowala.com`)
4. Add the DNS records Resend provides to your domain registrar
5. Wait for verification (usually 5-10 minutes)

---

## Step 4: Install Supabase CLI (If Not Already Installed)

### Windows:
```powershell
# Using Scoop (recommended)
scoop bucket add supabase https://github.com/supabase/scoop-bucket.git
scoop install supabase

# Or using npm
npm install -g supabase
```

### Mac:
```bash
brew install supabase/tap/supabase
```

### Linux:
```bash
npm install -g supabase
```

### Verify Installation:
```bash
supabase --version
```

---

## Step 5: Link Your Supabase Project

1. Go to your Supabase project dashboard: **https://supabase.com/dashboard**
2. Click on your project
3. Go to **Settings** → **General**
4. Copy your **Project Reference ID**

5. In your terminal, navigate to your project folder:
   ```bash
   cd C:\Users\Hp\Desktop\pptatowala2025\potatowala
   ```

6. Link your project:
   ```bash
   supabase link --project-ref YOUR_PROJECT_REF_ID
   ```
   Replace `YOUR_PROJECT_REF_ID` with the ID you copied

7. It will ask for your database password - enter it when prompted

---

## Step 6: Set Resend API Key as Supabase Secret

1. Open your terminal in the project directory

2. Set the secret:
   ```bash
   supabase secrets set RESEND_API_KEY=re_YOUR_API_KEY_HERE
   ```
   Replace `re_YOUR_API_KEY_HERE` with the actual API key from Step 2

3. Verify the secret is set (optional):
   ```bash
   supabase secrets list
   ```
   You should see `RESEND_API_KEY` in the list

---

## Step 7: Update Edge Function Sender Email

1. Open `supabase/functions/send-franchise-email/index.ts`

2. If you verified your domain, update line 117:
   ```typescript
   from: "Potatowala <noreply@yourdomain.com>", // Replace with your verified domain
   ```

   If using Resend's test domain, keep it as:
   ```typescript
   from: "Potatowala <onboarding@resend.dev>",
   ```

---

## Step 8: Deploy the Edge Function

1. Make sure you're in your project directory:
   ```bash
   cd C:\Users\Hp\Desktop\pptatowala2025\potatowala
   ```

2. Deploy the function:
   ```bash
   supabase functions deploy send-franchise-email
   ```

3. You should see output like:
   ```
   Deploying function send-franchise-email...
   Function deployed successfully!
   ```

---

## Step 9: Test the Email Function

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to your franchise enquiry page: `http://localhost:5173/franchise-enquiry`

3. Fill out the form and submit

4. Check the browser console (F12) for logs:
   - ✓ = Email sent successfully
   - ✗ = Error (check error message)

5. Check your email: **vasanthb.gap@gmail.com**
   - If not received, check spam folder
   - Wait 1-2 minutes for delivery

---

## Step 10: Verify Email is Working

### Option A: Check Resend Dashboard
1. Go to **https://resend.com/emails**
2. You should see sent emails with status

### Option B: Check Browser Console
- Look for: `✓ Email sent via Supabase Edge Function to vasanthb.gap@gmail.com`

### Option C: Check Email Inbox
- Email should arrive at `vasanthb.gap@gmail.com` within 1-2 minutes

---

## Troubleshooting

### Error: "Function not found"
- Make sure you deployed the function: `supabase functions deploy send-franchise-email`
- Check function name matches exactly

### Error: "RESEND_API_KEY not set"
- Run: `supabase secrets set RESEND_API_KEY=your_key`
- Make sure you're using the correct project

### Error: "Unauthorized" or "Invalid API key"
- Check your Resend API key is correct
- Make sure the key has "Sending access" permissions
- Try creating a new API key

### Error: "Domain not verified"
- If using your own domain, wait for DNS verification
- Or use `onboarding@resend.dev` for testing

### Emails going to spam
- Use a verified domain instead of `onboarding@resend.dev`
- Add SPF/DKIM records from Resend
- Mark sender as "Not Spam" in Gmail

### Function deploy fails
- Make sure Supabase CLI is logged in: `supabase login`
- Check you're in the correct project directory
- Verify project link: `supabase projects list`

---

## Quick Command Reference

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link project
supabase link --project-ref YOUR_PROJECT_REF

# Set API key secret
supabase secrets set RESEND_API_KEY=re_your_api_key_here

# List secrets (verify)
supabase secrets list

# Deploy function
supabase functions deploy send-franchise-email

# View function logs
supabase functions logs send-franchise-email
```

---

## Success Checklist

- [ ] Resend account created
- [ ] API key generated and copied
- [ ] Supabase CLI installed
- [ ] Project linked to Supabase
- [ ] API key set as secret
- [ ] Edge function deployed
- [ ] Test form submission works
- [ ] Email received at vasanthb.gap@gmail.com

---

## Next Steps

Once everything works:
1. Monitor email delivery in Resend dashboard
2. Consider verifying your own domain for better deliverability
3. Set up email templates in Resend for better formatting
4. Add email rate limiting if needed

---

## Support

- Resend Docs: https://resend.com/docs
- Supabase Functions: https://supabase.com/docs/guides/functions
- Check function logs: `supabase functions logs send-franchise-email`

