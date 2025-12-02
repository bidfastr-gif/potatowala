# 🧪 Test Formspree Email Right Now

## Quick Test Steps

### Step 1: Restart Your Dev Server
1. Stop your dev server (press **Ctrl+C** in terminal)
2. Start it again: `npm run dev`
3. Wait for it to start (you'll see "Local: http://localhost:5173")

### Step 2: Open Browser Console
1. Open your browser
2. Press **F12** to open Developer Tools
3. Click on the **Console** tab
4. Keep it open (you'll see messages here)

### Step 3: Test the Form
1. Go to: http://localhost:5173/franchise-enquiry
2. Fill out the form with test data:
   - Name: Test User
   - Email: test@example.com
   - Phone: 1234567890
   - Location: Test Location
   - Investment: Test Range
   - Message: This is a test submission
3. Click **Submit**

### Step 4: Check Console Messages

**✅ If Formspree is working, you'll see:**
```
✓ Extracted Formspree ID from URL: mqaorqvy
📧 Attempting to send via Formspree (PRIORITY)...
   Form ID: mqaorqvy
   URL: https://formspree.io/f/mqaorqvy
   Response status: 200
   Response data: { next: "...", ok: true }
✓✓✓ Email sent via Formspree to vasanthb.gap@gmail.com ✓✓✓
   Formspree submission ID: ...
```

**❌ If there's an error, you'll see:**
- `Response status: 422` - Validation error
- `Response status: 403` - Form is locked
- `Response status: 429` - Rate limit exceeded
- Network errors - Check your internet connection

### Step 5: Check Formspree Dashboard
1. Go to: https://formspree.io/forms
2. Click on "Potatowala Franchise" form
3. Check the **Submissions** tab
4. **You should see your test submission here!**

### Step 6: Check Email
1. Go to: vasanthb.gap@gmail.com
2. Check **Inbox**
3. Check **Spam folder** (important!)
4. Search for: "Franchise Enquiry" or "Formspree"

---

## 🐛 Common Issues

### Issue: Console shows "Response status: 200" but no email received
**Solutions:**
1. ✅ Check spam folder in Gmail
2. ✅ Verify email in Formspree form settings (should be vasanthb.gap@gmail.com)
3. ✅ Check Formspree dashboard - submission should be visible
4. ✅ Check if email notifications are enabled in Formspree

### Issue: "Could not extract Formspree ID"
**Solution:**
- The code should handle both formats now
- If you still see this error, update `.env` to just have the ID:
  ```
  VITE_FORMSPREE_ID=mqaorqvy
  ```

### Issue: "Response status: 422"
**Solution:**
- Formspree is rejecting some fields
- Check console for specific field errors
- Make sure form is configured correctly in Formspree

### Issue: "Response status: 403"
**Solution:**
- Form might be locked or disabled
- Go to Formspree form settings and check if it's active
- Free tier might have limitations

---

## 📋 What to Share If Still Not Working

Copy and paste these details:

1. **Console messages** (everything after clicking Submit)
2. **Formspree dashboard** - Do you see the submission?
3. **Response status** - What number do you see?
4. **Any error messages** - Copy exact text

---

## ✅ Success Indicators

You'll know it's working when:
- ✅ Console shows "✓✓✓ Email sent via Formspree..."
- ✅ Submission appears in Formspree dashboard
- ✅ Email arrives in vasanthb.gap@gmail.com inbox (or spam)

**Try it now and let me know what you see in the console!**
