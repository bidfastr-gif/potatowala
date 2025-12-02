# PDF Email Feature - Franchise Enquiry Form

## ✅ Implementation Complete

When a user submits the franchise enquiry form, a **PDF document** is automatically generated and attached to the email sent to `vasanthb.gap@gmail.com`.

## What's Included

### PDF Content
The generated PDF includes:
- **Header**: "Franchise Enquiry Form" with Potatowala branding
- **Fields**:
  - Full Name
  - Email Address
  - Phone Number
  - Preferred Location
  - Investment Range (if provided)
  - Additional Details / Message
- **Footer**: Submission timestamp

### PDF Formatting
- Professional design with Potatowala brand colors (#8B4513)
- Clean layout with labeled sections
- Proper text wrapping for long messages
- Timestamp showing when the enquiry was submitted

## How It Works

1. User fills out the franchise enquiry form
2. Form data is sent to Supabase Edge Function
3. Edge Function generates a PDF using `pdf-lib`
4. PDF is converted to base64
5. Email is sent via Resend API with PDF attached
6. Email arrives at `vasanthb.gap@gmail.com` with PDF attachment

## File Structure

```
supabase/functions/send-franchise-email/
├── index.ts          # Main edge function (generates PDF & sends email)
└── README.md         # Setup instructions
```

## Deployment

After setting up Resend API key, deploy the function:

```bash
npx supabase functions deploy send-franchise-email
```

## Testing

1. Go to `/franchise-enquiry` page
2. Fill out the form
3. Submit
4. Check email at `vasanthb.gap@gmail.com`
5. Download and open the PDF attachment

## Technical Details

- **PDF Library**: pdf-lib (via Skypack CDN for Deno compatibility)
- **PDF Format**: Standard PDF 1.4
- **Page Size**: Letter (612x792 points)
- **Fonts**: Helvetica (regular & bold)
- **Colors**: 
  - Primary: #8B4513 (Potatowala brown)
  - Text: Dark gray
  - Background: Light gray

## Notes

- PDF generation happens server-side in the Edge Function
- If PDF generation fails, email is still sent without attachment
- PDF filename includes timestamp: `franchise-enquiry-YYYY-MM-DDTHH-MM.pdf`

