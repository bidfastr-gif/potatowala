# Installing Supabase CLI on Windows

Supabase CLI cannot be installed via `npm install -g`. Use one of these methods instead:

## Method 1: Using Scoop (Recommended for Windows)

### Step 1: Install Scoop (if not already installed)
Open PowerShell as Administrator and run:
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex
```

### Step 2: Add Supabase bucket
```powershell
scoop bucket add supabase https://github.com/supabase/scoop-bucket.git
```

### Step 3: Install Supabase CLI
```powershell
scoop install supabase
```

### Step 4: Verify installation
```powershell
supabase --version
```

---

## Method 2: Download Binary Directly

1. Go to: https://github.com/supabase/cli/releases/latest
2. Download: `supabase_X.X.X_windows_amd64.zip`
3. Extract the ZIP file
4. Add the extracted folder to your PATH, OR
5. Copy `supabase.exe` to a folder already in your PATH (like `C:\Windows\System32`)

---

## Method 3: Using Chocolatey

If you have Chocolatey installed:
```powershell
choco install supabase
```

---

## Method 4: Using npx (No Installation Needed)

You can use Supabase CLI without installing it globally:
```powershell
npx supabase --version
npx supabase link --project-ref qmoticehyqeglmejllzr
npx supabase secrets set RESEND_API_KEY=your_key
npx supabase functions deploy send-franchise-email
```

**Note:** Using `npx` is fine for one-time commands, but you'll need to prefix every command with `npx`.

---

## After Installation

Once installed, continue with the Resend setup:

1. Link your project:
   ```powershell
   supabase link --project-ref qmoticehyqeglmejllzr
   ```

2. Set the API key:
   ```powershell
   supabase secrets set RESEND_API_KEY=re_YOUR_API_KEY
   ```

3. Deploy the function:
   ```powershell
   supabase functions deploy send-franchise-email
   ```

---

## Troubleshooting

**"scoop: command not found"**
→ Install Scoop first (Method 1, Step 1)

**"Permission denied"**
→ Run PowerShell as Administrator

**"supabase: command not found"**
→ Restart your terminal after installation
