# ⚠️ Email Not Working - Setup Instructions

The franchise enquiry form is **not sending emails** because no email service is configured yet.

## 🚀 QUICKEST SOLUTION: Formspree (5 minutes, FREE)

### Step 1: Sign up
1. Go to https://formspree.io/
2. Click "Sign Up" (free account works)
3. Verify your email

### Step 2: Create a form
1. Click "New Form"
2. Form Name: "Franchise Enquiries"
3. Email to receive submissions: `vasanthb.gap@gmail.com`
4. Click "Create Form"

### Step 3: Get your Form ID
- After creating the form, you'll see a Form ID (looks like: `xeqwjzqk` or `mrgvwzbn`)
- Copy this ID

### Step 4: Add to your project
1. Create or edit `.env` file in your project root
2. Add this line:
   ```
   VITE_FORMSPREE_ID=your_form_id_here
   ```
   Replace `your_form_id_here` with the Form ID you copied

### Step 5: Restart your dev server
- Stop your dev server (Ctrl+C)
- Run `npm run dev` again
- Test the form - emails should now be sent to vasanthb.gap@gmail.com!

---

## Alternative: EmailJS Setup (10 minutes)

1. Sign up at https://www.emailjs.com/
2. Create Email Service (Gmail/Outlook)
3. Create Email Template with these variables:
   - `{{name}}`
   - `{{email}}`
   - `{{phone}}`
   - `{{location}}`
   - `{{investment}}`
   - `{{message}}`
4. In template, set "To Email" = `vasanthb.gap@gmail.com`
5. Get Service ID, Template ID, and Public Key
6. Add to `.env`:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

---

## Check Console for Errors

Open browser console (F12) and look for:
- ✓ Green checkmarks = Email sent successfully
- ✗ Red X marks = Email failed (check error message)
- ⚠ Warning = No email service configured

The form will still save to database even if email fails, but you won't receive email notifications until a service is configured.

