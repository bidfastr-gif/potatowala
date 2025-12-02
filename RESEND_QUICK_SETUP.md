# 🚀 Quick Setup: Supabase Edge Function with Resend

## Quick Steps Summary

### 1️⃣ Get Resend API Key (2 minutes)
1. Go to https://resend.com/ and sign up (free)
2. Go to https://resend.com/api-keys
3. Click "Create API Key"
4. Name it: `potatowala-franchise`
5. **Copy the API key** (starts with `re_`)

### 2️⃣ Install Supabase CLI (Windows)

**Option A: Using Scoop (Recommended)**
```powershell
# First install Scoop (if not installed):
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex

# Then install Supabase:
scoop bucket add supabase https://github.com/supabase/scoop-bucket.git
scoop install supabase
```

**Option B: Using npx (No installation needed)**
```powershell
# Use npx prefix for all commands
npx supabase --version
```

**Option C: Download binary from GitHub**
1. Go to: https://github.com/supabase/cli/releases/latest
2. Download `supabase_X.X.X_windows_amd64.zip`
3. Extract and add to PATH

**See `INSTALL_SUPABASE_CLI_WINDOWS.md` for detailed instructions**

### 3️⃣ Link Your Supabase Project
```bash
# Get your project ref ID from: https://supabase.com/dashboard
supabase link --project-ref qmoticehyqeglmejllzr
```

### 4️⃣ Set the API Key Secret
```bash
supabase secrets set RESEND_API_KEY=re_YOUR_API_KEY_HERE
```
Replace `re_YOUR_API_KEY_HERE` with the key from step 1.

### 5️⃣ Deploy the Edge Function
```bash
supabase functions deploy send-franchise-email
```

### 6️⃣ Test It!
1. Run your dev server: `npm run dev`
2. Go to: http://localhost:5173/franchise-enquiry
3. Fill and submit the form
4. Check: vasanthb.gap@gmail.com (check spam folder too)

---

## That's It! 🎉

Your edge function is already created at:
`supabase/functions/send-franchise-email/index.ts`

Just follow the steps above and emails will be sent automatically!

---

## Troubleshooting

**"Function not found"**
→ Run: `supabase functions deploy send-franchise-email`

**"API key invalid"**
→ Double-check you copied the full key from Resend dashboard

**"Not logged in"**
→ Run: `supabase login`

**Emails not received**
→ Check spam folder, wait 1-2 minutes, verify email in Resend dashboard

---

## See Full Guide
For detailed instructions, see: `RESEND_SETUP_GUIDE.md`

