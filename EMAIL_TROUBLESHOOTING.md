# 🔍 Email Troubleshooting Guide

If emails are not being received at `vasanthb.gap@gmail.com`, follow these steps:

## Step 1: Check Browser Console

1. Open your browser console (F12 or Right-click → Inspect → Console)
2. Submit the franchise enquiry form
3. Look for these messages:

### ✅ Success Messages:
- `✓ Email sent via Supabase Edge Function to vasanthb.gap@gmail.com`
- `✓ Email sent via EmailJS to vasanthb.gap@gmail.com`
- `✓ Email sent via Formspree to vasanthb.gap@gmail.com`

### ❌ Error Messages:
- `✗ Supabase Edge Function error:` → Function not deployed or API key missing
- `⚠ Edge function returned but email not confirmed` → Check function logs
- `⚠ Email service not configured` → No email service is set up

## Step 2: Check Which Method Failed

The form tries 4 methods in order:
1. **EmailJS** (if VITE_EMAILJS_* env vars are set)
2. **Supabase Edge Function** (requires deployment + Resend API key)
3. **Formspree** (if VITE_FORMSPREE_ID is set)
4. **Webhook** (if VITE_WEBHOOK_URL is set)

## Step 3: Quick Diagnosis

### Check Edge Function Status

Open terminal and run:
```bash
# Check if function is deployed
npx supabase functions list

# Check function logs
npx supabase functions logs send-franchise-email

# Check if API key is set
npx supabase secrets list
```

### Common Issues:

#### Issue 1: "Function not found" or "404"
**Solution:**
```bash
npx supabase functions deploy send-franchise-email
```

#### Issue 2: "RESEND_API_KEY not set" or "Unauthorized"
**Solution:**
1. Get Resend API key from https://resend.com/api-keys
2. Run: `npx supabase secrets set RESEND_API_KEY=re_your_key_here`
3. Redeploy: `npx supabase functions deploy send-franchise-email`

#### Issue 3: No email service configured at all
**Quick Fix (5 minutes):**
1. Go to https://formspree.io/ (sign up free)
2. Create form → Set email to `vasanthb.gap@gmail.com`
3. Copy Form ID
4. Add to `.env`: `VITE_FORMSPREE_ID=your_form_id`
5. Restart dev server: `npm run dev`
6. Test form submission

## Step 4: Test Email Delivery

### Option A: Check Resend Dashboard
1. Go to https://resend.com/emails
2. You should see sent emails with status

### Option B: Check Spam Folder
- Emails might be in spam/junk folder
- Mark sender as "Not Spam"

### Option C: Wait 1-2 Minutes
- Email delivery can take a few minutes
- Check again after waiting

## Step 5: Verify Setup

Run this checklist:

- [ ] Supabase project is linked: `npx supabase link --project-ref qmoticehyqeglmejllzr`
- [ ] Resend API key is set: `npx supabase secrets list` shows `RESEND_API_KEY`
- [ ] Edge function is deployed: `npx supabase functions list` shows `send-franchise-email`
- [ ] Form submission shows success in browser console
- [ ] No error messages in browser console
- [ ] Checked spam folder

## Quick Test Commands

```bash
# Test if Supabase is linked
npx supabase projects list

# Test if function exists
npx supabase functions list

# View recent logs
npx supabase functions logs send-franchise-email --limit 10

# Test function manually (optional)
curl -X POST https://YOUR_PROJECT.supabase.co/functions/v1/send-franchise-email \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","phone":"1234567890","location":"Test","message":"Test message"}'
```

## Still Not Working?

1. **Check function logs** for detailed error messages
2. **Check Resend dashboard** to see if emails are being sent
3. **Try Formspree** as a quick alternative (5 min setup)
4. **Verify email address** is correct: `vasanthb.gap@gmail.com`

## Need Help?

Check these files:
- `RESEND_QUICK_SETUP.md` - Step-by-step Resend setup
- `EMAIL_SETUP_INSTRUCTIONS.md` - All email setup options
- Browser console for specific error messages

