# 🚀 Easiest Setup - Using npx (No Installation!)

Since Supabase CLI can't be installed via npm, we'll use `npx` instead. This requires NO installation!

## Quick Setup Steps

### Step 1: Get Resend API Key
1. Go to https://resend.com/ and sign up
2. Go to https://resend.com/api-keys
3. Create API key and copy it (starts with `re_`)

### Step 2: Link Your Supabase Project
```powershell
npx supabase link --project-ref qmoticehyqeglmejllzr
```
- Enter your database password when prompted

### Step 3: Set the Resend API Key
```powershell
npx supabase secrets set RESEND_API_KEY=re_YOUR_API_KEY_HERE
```
Replace `re_YOUR_API_KEY_HERE` with your actual API key.

### Step 4: Deploy the Edge Function
```powershell
npx supabase functions deploy send-franchise-email
```

### Step 5: Test It!
1. Start dev server: `npm run dev`
2. Go to: http://localhost:5173/franchise-enquiry
3. Fill out the form and submit
4. Check email: vasanthb.gap@gmail.com

---

## That's It! 🎉

The `npx` prefix means you don't need to install anything. Just prefix all supabase commands with `npx`.

---

## Alternative: Install Supabase CLI Properly

If you want to install it permanently (optional), see: `INSTALL_SUPABASE_CLI_WINDOWS.md`

