# Email Subscription System - Setup Guide

## Overview
The email subscription system allows users to subscribe to receive email notifications whenever a new dish is added to the menu.

## What's Been Implemented

### 1. Subscription Form
- Added to the Footer component on all pages
- Users can enter their email to subscribe
- Validates email format and prevents duplicate subscriptions
- Stores subscriptions in the `email_subscriptions` database table

### 2. Database Table
- Table: `email_subscriptions`
- Columns:
  - `id` (uuid, primary key)
  - `email` (text, unique)
  - `subscribed_at` (timestamp)
  - `is_active` (boolean, default: true)
  - `unsubscribed_at` (timestamp, nullable)
  - `created_at` (timestamp)

### 3. Notification Function
- Function: `notifySubscribersAboutNewDish()` in `src/utils/notifySubscribers.ts`
- Sends emails to all active subscribers when a new dish is added

## How to Use

### When Adding a New Dish to the Menu

After adding a new dish to your menu (in `src/pages/Menu.tsx` or wherever you manage dishes), call the notification function:

```typescript
import { notifySubscribersAboutNewDish } from "@/utils/notifySubscribers";

// After adding a new dish
const newDish = {
  name: "Spicy Masala Fries",
  price: "₹190",
  description: "Crispy fries with spicy masala seasoning",
  image: "path/to/image.jpg" // optional
};

// Notify all subscribers
await notifySubscribersAboutNewDish(newDish);
```

### Example: Adding a Dish and Notifying Subscribers

```typescript
// In your admin panel or menu management component
const handleAddNewDish = async (dishData: NewDish) => {
  // 1. Add dish to your menu/database
  // ... your code to add the dish ...
  
  // 2. Notify all subscribers
  const result = await notifySubscribersAboutNewDish(dishData);
  
  if (result.success) {
    console.log(`✓ Notified ${result.count} subscribers about the new dish!`);
  } else {
    console.error("Failed to notify subscribers:", result.error);
  }
};
```

## Email Service Setup

The notification function supports multiple email services (same as franchise enquiry):

### Option 1: Formspree (Recommended - Easiest)
1. Go to https://formspree.io/
2. Create a new form
3. Set recipient email: `potatowalafoods@gmail.com`
4. Copy your Form ID
5. Add to `.env`:
   ```
   VITE_FORMSPREE_ID=your_form_id
   ```

### Option 2: Supabase Edge Function
1. Create a Supabase Edge Function named `send-subscriber-emails`
2. Configure it to send emails using Resend or another email service
3. The function will receive:
   ```json
   {
     "emails": ["email1@example.com", "email2@example.com"],
     "subject": "New Dish Added: ...",
     "dish": { "name": "...", "price": "...", "description": "..." }
   }
   ```

### Option 3: Webhook (Zapier/Make.com)
1. Create a webhook that sends emails
2. Add to `.env`:
   ```
   VITE_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/...
   ```

## Database Migration

Run the migration to create the subscriptions table:

```bash
# If using Supabase CLI
supabase migration up

# Or apply the SQL file directly in Supabase Dashboard
# File: supabase/migrations/20251129000000_create_email_subscriptions.sql
```

## Features

- ✅ Email validation
- ✅ Duplicate prevention
- ✅ Active/inactive subscription status
- ✅ Automatic email notifications
- ✅ Multiple email service support
- ✅ Batch email sending (to avoid rate limits)

## Testing

1. Subscribe with your email using the footer form
2. Add a new dish to the menu
3. Call `notifySubscribersAboutNewDish()` with the dish details
4. Check your email inbox for the notification

## Notes

- The function will attempt to use Formspree first, then Supabase Edge Function, then Webhook
- If no email service is configured, subscriptions will still be saved but emails won't be sent
- Check the browser console for email sending status and errors

