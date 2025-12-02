# 🧪 Test Email Setup - Step by Step

Follow these steps to verify your email setup is working:

## Method 1: Check Current Status

### Step 1: Open Browser Console
1. Open your app: `http://localhost:5173/franchise-enquiry`
2. Press **F12** to open Developer Tools
3. Go to **Console** tab

### Step 2: Submit Test Form
1. Fill out the franchise enquiry form
2. Submit it
3. **Watch the console** - you'll see one of these:

#### ✅ Working:
```
✓ Email sent via Supabase Edge Function to vasanthb.gap@gmail.com
Email ID: abc123...
```

#### ❌ Not Working:
```
✗ Supabase Edge Function error: Function not found
OR
⚠ Email service not configured
```

## Method 2: Quick Setup Test (Formspree - 5 minutes)

This is the **fastest way** to get emails working:

1. Go to **https://formspree.io/** and sign up (free)
2. Click **"New Form"**
3. Set form name: "Potatowala Franchise"
4. Set email: `vasanthb.gap@gmail.com`
5. Click **"Create"**
6. Copy the **Form ID** (looks like: `xeqwjzqk`)
7. Create `.env` file in project root:
   ```
   VITE_FORMSPREE_ID=xeqwjzqk
   ```
   (Replace `xeqwjzqk` with your actual Form ID)
8. Restart dev server:
   ```bash
   npm run dev
   ```
9. Test form submission
10. Check email!

## Method 3: Check Edge Function (If Using Resend)

### Check if function is deployed:
```bash
npx supabase functions list
```
Should show: `send-franchise-email`

### Check if API key is set:
```bash
npx supabase secrets list
```
Should show: `RESEND_API_KEY`

### View function logs:
```bash
npx supabase functions logs send-franchise-email
```
Look for errors or success messages

## Common Error Messages & Fixes

### Error: "Function not found"
**Fix:**
```bash
npx supabase link --project-ref qmoticehyqeglmejllzr
npx supabase functions deploy send-franchise-email
```

### Error: "Unauthorized" or "Invalid API key"
**Fix:**
1. Get Resend API key from https://resend.com/api-keys
2. Run:
```bash
npx supabase secrets set RESEND_API_KEY=re_your_api_key_here
```
3. Redeploy:
```bash
npx supabase functions deploy send-franchise-email
```

### Error: "Edge function returned but email not confirmed"
**Fix:**
- Check Resend dashboard: https://resend.com/emails
- Verify API key has correct permissions
- Check spam folder

## Quick Test Checklist

- [ ] Browser console shows success message
- [ ] Email received at vasanthb.gap@gmail.com
- [ ] PDF attachment is included (if using edge function)
- [ ] Email not in spam folder
- [ ] Checked Resend dashboard (if using Resend)

## Still Not Working?

1. **Check browser console** for specific error
2. **Use Formspree** as quick alternative (takes 5 minutes)
3. **Check spam folder** - emails might be filtered
4. **Wait 1-2 minutes** - delivery can be delayed

