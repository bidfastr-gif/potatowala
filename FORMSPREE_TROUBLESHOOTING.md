# 🔍 Formspree Email Troubleshooting Guide

## Problem: Email not received despite Formspree setup

### Step 1: Verify Formspree Configuration ✅

1. **Check your Formspree account:**
   - Go to: https://formspree.io/forms
   - Find your form: "Potatowala Franchise"
   - Click on it
   - Verify the email address is: `vasanthb.gap@gmail.com`

2. **Check Formspree Form ID:**
   - In your form settings, you should see the Form ID
   - It should look like: `mqaorqvy`
   - The full URL will be: `https://formspree.io/f/mqaorqvy`

### Step 2: Fix .env File 📝

Your `.env` file currently has:
```
VITE_FORMSPREE_ID=https://formspree.io/f/mqaorqvy
```

**Option A: Keep the full URL** (code will extract ID automatically)
- Keep as is - the code now extracts the ID automatically

**Option B: Use just the ID** (recommended)
- Change to:
```
VITE_FORMSPREE_ID=mqaorqvy
```

### Step 3: Restart Dev Server 🔄

After changing `.env`:
1. Stop your dev server (Ctrl+C in terminal)
2. Start again: `npm run dev`
3. **IMPORTANT:** Close and reopen your browser to clear cache

### Step 4: Test the Form 🧪

1. Open: http://localhost:5173/franchise-enquiry
2. Fill out the form with test data
3. **Open Browser Console** (Press F12)
4. Click Submit
5. Look for these messages in console:

**✅ Success messages:**
```
✓ Extracted Formspree ID from URL: mqaorqvy
📧 Attempting to send via Formspree...
   Form ID: mqaorqvy
   URL: https://formspree.io/f/mqaorqvy
   Response status: 200
✓✓✓ Email sent via Formspree to vasanthb.gap@gmail.com ✓✓✓
```

**❌ Error messages to watch for:**
- `❌ Formspree error response:` - Check the error details
- `Could not extract Formspree ID` - Form ID format issue
- `Response status: 422` - Validation error (check form fields)
- `Response status: 403` - Form is locked or rate-limited
- `Response status: 429` - Too many requests (free tier limit)

### Step 5: Check Formspree Dashboard 📊

1. Go to: https://formspree.io/forms
2. Click on "Potatowala Franchise" form
3. Check the "Submissions" tab
4. **You should see your test submission here!**
5. If you see the submission but no email:
   - Check your spam folder
   - Verify email address in form settings
   - Check if email is verified in Formspree

### Step 6: Common Issues & Solutions 🔧

#### Issue 1: Form ID not extracted
**Error:** `❌ Could not extract Formspree ID from URL`
**Solution:** 
- Make sure your `.env` has either:
  - Full URL: `VITE_FORMSPREE_ID=https://formspree.io/f/mqaorqvy`
  - Or just ID: `VITE_FORMSPREE_ID=mqaorqvy`

#### Issue 2: 422 Validation Error
**Error:** `Response status: 422`
**Solution:**
- Formspree might be rejecting some fields
- Check console for specific field errors
- Make sure all required fields in Formspree match your form

#### Issue 3: 403 Forbidden
**Error:** `Response status: 403`
**Solution:**
- Form might be locked/disabled in Formspree
- Go to form settings and check if it's active
- Free tier has limits - check if you've exceeded them

#### Issue 4: Submission received but no email
**Symptom:** Form shows success, submission appears in Formspree, but no email received
**Solutions:**
1. **Check spam folder** in vasanthb.gap@gmail.com
2. **Verify email address** in Formspree form settings
3. **Check Formspree email logs:**
   - Go to form settings
   - Check "Email Settings"
   - See if emails are being sent
4. **Test email delivery:**
   - In Formspree, click "Test Email"
   - Check if test email arrives

#### Issue 5: Rate Limiting
**Error:** `Response status: 429`
**Solution:**
- Formspree free tier has rate limits
- Wait a few minutes and try again
- Or upgrade to paid plan

### Step 7: Manual Test via Formspree Website 🧪

1. Go to your form page: https://formspree.io/f/mqaorqvy
2. Fill out the form directly on Formspree website
3. Submit it
4. Check if email is received
5. If email works here but not from your site:
   - There might be a CORS issue
   - Check browser console for network errors
   - Verify the form ID is correct

### Step 8: Enable Formspree Email Notifications 📧

1. Go to: https://formspree.io/forms
2. Click on "Potatowala Franchise"
3. Go to "Settings" → "Email"
4. Make sure:
   - ✅ Email notifications are enabled
   - ✅ Email address is: `vasanthb.gap@gmail.com`
   - ✅ "Send email notification" is ON

### Step 9: Check Browser Console Logs 📋

After submitting the form, copy all console logs and check:

1. **Look for Formspree logs:**
   - Should see: `📧 Attempting to send via Formspree...`
   - Should see: `Response status: 200`
   - Should see: `✓✓✓ Email sent via Formspree...`

2. **Look for errors:**
   - Network errors (red in console)
   - CORS errors
   - 422/403/429 errors

3. **Copy the exact error message** and share it for further troubleshooting

### Step 10: Verify Email Delivery 🔍

1. **Check Formspree dashboard:**
   - Go to form → Submissions
   - See if submission was received
   - Check if email was sent (some plans show this)

2. **Check Gmail:**
   - Check inbox for: `vasanthb.gap@gmail.com`
   - Check spam folder
   - Check "All Mail" folder
   - Search for: "Franchise Enquiry" or "Formspree"

3. **Check email filters:**
   - Make sure no filters are blocking Formspree emails
   - Whitelist: `noreply@formspree.io` or `hello@formspree.io`

---

## 🆘 Still Not Working?

If emails still aren't being received:

1. **Check the exact console error** when submitting the form
2. **Verify Formspree form is active** (not paused/disabled)
3. **Check Formspree account limits** (free tier restrictions)
4. **Try a different email service:**
   - EmailJS (see EMAIL_SETUP_INSTRUCTIONS.md)
   - Supabase + Resend (see RESEND_QUICK_SETUP.md)

---

## 📞 Quick Checklist

- [ ] Formspree form created with email: `vasanthb.gap@gmail.com`
- [ ] Form ID copied correctly (should be like: `mqaorqvy`)
- [ ] `.env` file has `VITE_FORMSPREE_ID` set correctly
- [ ] Dev server restarted after changing `.env`
- [ ] Browser cache cleared (close and reopen browser)
- [ ] Form submission shows in Formspree dashboard
- [ ] Checked spam folder in Gmail
- [ ] Email notifications enabled in Formspree form settings
- [ ] Browser console shows success messages
- [ ] No error messages in browser console

---

**Need more help?** Share the exact console error message and I'll help troubleshoot!
