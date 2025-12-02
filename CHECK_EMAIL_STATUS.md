# 🔍 Check Email Status - Quick Guide

## Immediate Steps:

1. **Submit the form** at `/franchise-enquiry`
2. **Open Browser Console** (Press F12, go to Console tab)
3. **Look for these messages:**

---

## ✅ If you see this:
```
✓ Email sent via Supabase Edge Function to vasanthb.gap@gmail.com
```
→ **Email was sent!** Check:
- Your inbox (vasanthb.gap@gmail.com)
- Spam/Junk folder
- Wait 1-2 minutes for delivery

---

## ❌ If you see this:
```
✗ Supabase Edge Function error: Function not found
```
→ **Function not deployed**
**Fix:** Run:
```bash
npx supabase functions deploy send-franchise-email
```

---

## ❌ If you see this:
```
✗ Supabase Edge Function error: RESEND_API_KEY not set
OR
✗ Unauthorized
```
→ **API key not configured**
**Fix:** 
1. Get Resend API key from https://resend.com/api-keys
2. Run: `npx supabase secrets set RESEND_API_KEY=your_key`
3. Redeploy: `npx supabase functions deploy send-franchise-email`

---

## ⚠️ If you see this:
```
⚠ Email service not configured
```
→ **No email service set up yet**

**QUICKEST FIX (5 minutes):**
1. Go to https://formspree.io/ (sign up free)
2. Create form → Email: `vasanthb.gap@gmail.com`
3. Copy Form ID
4. Add to `.env`: `VITE_FORMSPREE_ID=your_form_id`
5. Restart server: `npm run dev`

---

## Need More Help?

See: `EMAIL_TROUBLESHOOTING.md` for detailed troubleshooting

