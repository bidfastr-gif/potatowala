# 🎯 START HERE - Email Setup (Choose One Method)

## ⚡ QUICKEST WAY: Formspree (5 minutes, No PDF attachment)
OR
## 📎 FULL FEATURES: Supabase + Resend (15 minutes, Includes PDF attachment)

---

## 🚀 METHOD 1: Formspree (EASIEST - Recommended to Start)

### ✅ Step 1: Sign Up (2 minutes)
1. Open: https://formspree.io/
2. Click **"Get Started"**
3. Sign up (email or Google/GitHub)
4. Verify email if asked

### ✅ Step 2: Create Form (1 minute)
1. Click **"New Form"** (big blue button)
2. **Form Name:** `Potatowala Franchise`
3. **Email:** `vasanthb.gap@gmail.com`
4. Click **"Create Form"**

### ✅ Step 3: Copy Form ID (30 seconds)
1. You'll see your form page
2. Look for **Form ID** or check URL: `https://formspree.io/f/XXXXXXXX`
3. **Copy the ID** (the X's part)

### ✅ Step 4: Add to .env File (1 minute)
1. Open `.env` file in your project (you already have this file!)
2. Add this line at the end:
   ```
   VITE_FORMSPREE_ID=your_form_id_here
   ```
   (Replace `your_form_id_here` with the ID from Step 3)
3. **Save** (Ctrl+S)

### ✅ Step 5: Restart Server (30 seconds)
1. In terminal, press **Ctrl+C** (to stop server)
2. Run: `npm run dev`
3. Wait for it to start

### ✅ Step 6: Test! (1 minute)
1. Go to: http://localhost:5173/franchise-enquiry
2. Fill form and submit
3. Check console (F12) - should see: `✓ Email sent via Formspree`
4. Check email: vasanthb.gap@gmail.com

**🎉 DONE!** Emails will now work!

---

## 📎 METHOD 2: Supabase + Resend (PDF Attachment Included)

### Part A: Get Resend API Key (5 minutes)

#### Step 1: Sign Up for Resend
1. Go to: https://resend.com/
2. Click **"Get Started"**
3. Sign up (email or Google/GitHub)
4. Verify email

#### Step 2: Create API Key
1. Go to: https://resend.com/api-keys
2. Click **"Create API Key"**
3. **Name:** `potatowala-franchise`
4. **Permissions:** Sending access
5. Click **"Add"**
6. **⚠️ COPY THE KEY NOW!** (looks like: `re_abc123...`)
7. Save it somewhere safe

### Part B: Set Up Supabase (5 minutes)

#### Step 3: Link Supabase Project
Open terminal and run:
```bash
npx supabase link --project-ref qmoticehyqeglmejllzr
```
- Enter database password when asked
- Wait for "Finished supabase link"

#### Step 4: Set API Key Secret
```bash
npx supabase secrets set RESEND_API_KEY=re_YOUR_KEY_HERE
```
(Replace `re_YOUR_KEY_HERE` with the key from Step 2)

#### Step 5: Verify Secret is Set
```bash
npx supabase secrets list
```
Should show `RESEND_API_KEY` in the list

### Part C: Deploy Function (2 minutes)

#### Step 6: Deploy Edge Function
```bash
npx supabase functions deploy send-franchise-email
```
- Wait 30-60 seconds
- Should see "Function deployed successfully!"

### Part D: Test (3 minutes)

#### Step 7: Test Email
1. Make sure dev server is running: `npm run dev`
2. Go to: http://localhost:5173/franchise-enquiry
3. Fill form and submit
4. Check console (F12) - should see: `✓ Email sent via Supabase Edge Function`
5. Check email: vasanthb.gap@gmail.com
6. **PDF should be attached!**

**🎉 DONE!** Emails with PDF attachments will now work!

---

## 🆘 Need Help?

### Check What's Happening:
1. Submit the form
2. Open browser console (F12)
3. Look at the messages:
   - ✅ Green checkmark = Working!
   - ❌ Red X = Error (see error message)
   - ⚠️ Warning = Not configured

### Common Issues:

**"Function not found"**
→ Run: `npx supabase functions deploy send-franchise-email`

**"API key invalid"**
→ Check Resend API key is correct and set

**"Email service not configured"**
→ Choose Method 1 (Formspree) or complete Method 2 setup

---

## 💡 My Recommendation

**Start with Method 1 (Formspree)** - it's the fastest and works immediately!

If you need PDF attachments later, you can switch to Method 2.

---

## 📋 Quick Checklist

**For Formspree:**
- [ ] Signed up at formspree.io
- [ ] Created form with email: vasanthb.gap@gmail.com
- [ ] Copied Form ID
- [ ] Added `VITE_FORMSPREE_ID=xxx` to .env file
- [ ] Restarted dev server
- [ ] Tested form submission

**For Supabase + Resend:**
- [ ] Signed up at resend.com
- [ ] Created API key
- [ ] Linked Supabase project
- [ ] Set RESEND_API_KEY secret
- [ ] Deployed edge function
- [ ] Tested form submission

