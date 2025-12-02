# Send Franchise Email Edge Function

This Supabase Edge Function sends franchise enquiry emails to `vasanthb.gap@gmail.com` using the Resend API.

## Setup Instructions

### 1. Get Resend API Key
- Sign up at https://resend.com/
- Create API key at https://resend.com/api-keys
- Copy the key (starts with `re_`)

### 2. Set Secret in Supabase
```bash
supabase secrets set RESEND_API_KEY=your_resend_api_key_here
```

### 3. Deploy Function
```bash
supabase functions deploy send-franchise-email
```

### 4. Test
- Submit the franchise enquiry form
- Check email at: vasanthb.gap@gmail.com

## Configuration

The function sends emails with:
- **To:** vasanthb.gap@gmail.com (hardcoded in index.ts)
- **From:** Potatowala <onboarding@resend.dev>
- **Subject:** New Franchise Enquiry from [Name]

To use a custom domain, update line 117 in `index.ts`.

## Troubleshooting

View logs:
```bash
supabase functions logs send-franchise-email
```

Check secrets:
```bash
supabase secrets list
```

## Files
- `index.ts` - Main function code
- This README

