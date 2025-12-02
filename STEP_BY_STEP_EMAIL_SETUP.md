# 📧 Step-by-Step Email Setup Guide

This guide will walk you through setting up email notifications for the franchise enquiry form.

## 🎯 Goal
When someone submits the franchise enquiry form, send an email with PDF attachment to **vasanthb.gap@gmail.com**.

---

## 🚀 Method 1: Using Formspree (EASIEST - 5 minutes)

### Step 1: Create Formspree Account
1. Open your browser
2. Go to: **https://formspree.io/**
3. Click **"Get Started"** or **"Sign Up"**
4. Sign up with:
   - Your email address
   - Password
   - OR use Google/GitHub to sign up faster
5. Verify your email if prompted

### Step 2: Create a Form
1. After logging in, you'll see your dashboard
2. Click the **"New Form"** button (usually big blue button)
3. Fill in:
   - **Form Name:** `Potatowala Franchise Enquiry`
   - **Email to receive submissions:** `vasanthb.gap@gmail.com`
4. Click **"Create Form"**

### Step 3: Get Your Form ID
1. After creating the form, you'll see a page with form details
2. Look for **Form ID** or **Endpoint URL**
   - It looks like: `xeqwjzqk` or `mrgvwzbn`
   - OR in URL: `https://formspree.io/f/xeqwjzqk`
3. **Copy the Form ID** (the part after `/f/`)

### Step 4: Add Form ID to Your Project
1. Open your project folder in VS Code or any text editor
2. Look for a file named `.env` in the root folder
   - If it doesn't exist, create it
3. Open `.env` file
4. Add this line:
   ```
   VITE_FORMSPREE_ID=xeqwjzqk
   ```
   (Replace `xeqwjzqk` with your actual Form ID from Step 3)
5. **Save the file** (Ctrl+S)

### Step 5: Restart Your Development Server
1. In your terminal, stop the server:
   - Press `Ctrl+C` (in the terminal where `npm run dev` is running)
2. Start it again:
   ```bash
   npm run dev
   ```
3. Wait for it to start (you'll see "Local: http://localhost:5173")

### Step 6: Test It!
1. Open your browser
2. Go to: **http://localhost:5173/franchise-enquiry**
3. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Phone: 1234567890
   - Location: Test Location
   - Message: This is a test message
4. Click **"Submit Enquiry"**
5. Open browser console (Press **F12** → **Console** tab)
6. Look for: `✓ Email sent via Formspree to vasanthb.gap@gmail.com`
7. Check email: **vasanthb.gap@gmail.com**
   - Check inbox
   - Check spam/junk folder
   - Wait 1-2 minutes

### ✅ Success!
If you see the success message and receive email, you're done!

---

## 🔧 Method 2: Using Supabase Edge Function + Resend (More Features - PDF Attachment)

### Prerequisites
- Resend account (free)
- Supabase project linked

### Step 1: Get Resend API Key

#### 1.1 Sign Up for Resend
1. Go to: **https://resend.com/**
2. Click **"Get Started"** or **"Sign Up"**
3. Sign up with email or Google/GitHub
4. Verify your email if needed

#### 1.2 Create API Key
1. After logging in, go to: **https://resend.com/api-keys**
2. Click **"Create API Key"** button
3. Fill in:
   - **Name:** `potatowala-franchise`
   - **Permissions:** Select **"Sending access"**
4. Click **"Add"** or **"Create"**
5. **⚠️ IMPORTANT:** Copy the API key immediately!
   - It looks like: `re_123456789abcdefghijklmnop`
   - You won't be able to see it again
   - Save it somewhere safe (Notepad, password manager)

### Step 2: Install Supabase CLI (If Not Already Installed)

#### 2.1 Check if You Have Supabase CLI
Open terminal/PowerShell and run:
```bash
npx supabase --version
```
If it shows a version number, skip to Step 3.

#### 2.2 Install Using npx (No Installation Needed)
You can use `npx` prefix for all commands - no installation needed!

### Step 3: Link Your Supabase Project

#### 3.1 Get Your Project Reference ID
1. Go to: **https://supabase.com/dashboard**
2. Click on your project (or select it)
3. Go to **Settings** → **General**
4. Find **"Reference ID"**
5. **Copy the Reference ID** (looks like: `qmoticehyqeglmejllzr`)

#### 3.2 Link the Project
1. Open terminal/PowerShell
2. Navigate to your project folder:
   ```bash
   cd C:\Users\Hp\Desktop\pptatowala2025\potatowala
   ```
3. Link the project:
   ```bash
   npx supabase link --project-ref qmoticehyqeglmejllzr
   ```
   (Replace `qmoticehyqeglmejllzr` with your actual Reference ID)
4. Enter your database password when prompted
5. You should see: "Finished supabase link"

### Step 4: Set Resend API Key as Secret

1. In the same terminal, run:
   ```bash
   npx supabase secrets set RESEND_API_KEY=re_YOUR_API_KEY_HERE
   ```
   (Replace `re_YOUR_API_KEY_HERE` with the API key from Step 1.2)

2. You should see: "Finished supabase secrets set"

3. **Verify it's set:**
   ```bash
   npx supabase secrets list
   ```
   You should see `RESEND_API_KEY` in the list

### Step 5: Deploy the Edge Function

1. Make sure you're in the project folder:
   ```bash
   cd C:\Users\Hp\Desktop\pptatowala2025\potatowala
   ```

2. Deploy the function:
   ```bash
   npx supabase functions deploy send-franchise-email
   ```

3. Wait for deployment (takes 30-60 seconds)

4. You should see:
   ```
   Deploying function send-franchise-email...
   Function deployed successfully!
   ```

### Step 6: Test the Email Function

1. Make sure your dev server is running:
   ```bash
   npm run dev
   ```

2. Open browser: **http://localhost:5173/franchise-enquiry**

3. Fill out the form and submit

4. Open browser console (Press **F12** → **Console** tab)

5. Look for:
   ```
   ✓ Email sent via Supabase Edge Function to vasanthb.gap@gmail.com
   Email ID: abc123...
   ```

6. Check email: **vasanthb.gap@gmail.com**
   - Check inbox
   - Check spam folder
   - PDF should be attached!

### Step 7: View Function Logs (If Needed)

If emails aren't working, check logs:
```bash
npx supabase functions logs send-franchise-email
```

---

## 🔍 Troubleshooting

### Problem: "Function not found"
**Solution:**
- Run: `npx supabase functions deploy send-franchise-email`
- Make sure you're in the correct project folder

### Problem: "API key invalid" or "Unauthorized"
**Solution:**
- Check Resend API key is correct
- Run: `npx supabase secrets set RESEND_API_KEY=your_key_again`
- Redeploy: `npx supabase functions deploy send-franchise-email`

### Problem: Email not received
**Check:**
1. Browser console shows success message?
2. Check spam/junk folder
3. Wait 1-2 minutes
4. Check Resend dashboard: https://resend.com/emails

### Problem: "Not logged in"
**Solution:**
```bash
npx supabase login
```
Follow the prompts to log in

---

## ✅ Success Checklist

After setup, verify:

- [ ] Browser console shows: `✓ Email sent...`
- [ ] Email received at vasanthb.gap@gmail.com
- [ ] PDF attachment included (if using edge function)
- [ ] Email not in spam folder
- [ ] All form fields are in the email

---

## 📝 Quick Command Reference

```bash
# Link Supabase project
npx supabase link --project-ref qmoticehyqeglmejllzr

# Set API key
npx supabase secrets set RESEND_API_KEY=re_your_key

# Deploy function
npx supabase functions deploy send-franchise-email

# Check logs
npx supabase functions logs send-franchise-email

# List secrets
npx supabase secrets list
```

---

## 🎯 Recommendation

**For fastest setup:** Use **Method 1 (Formspree)** - takes 5 minutes, no deployment needed.

**For PDF attachments:** Use **Method 2 (Supabase + Resend)** - takes 15-20 minutes but includes PDF.

---

## Need Help?

- Check browser console for specific error messages
- See `EMAIL_TROUBLESHOOTING.md` for detailed troubleshooting
- Check `CHECK_EMAIL_STATUS.md` for quick diagnostics

