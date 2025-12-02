# How to Fix RLS Error for Feedback Submission

## Problem
When submitting feedback, you're getting an error: "new row violates row-level security policy for table 'feedback'"

This happens because Row Level Security (RLS) is preventing users from setting `is_approved: true` directly during insert.

## Solution

You need to run the SQL migration in your Supabase database. There are two ways to do this:

### Option 1: Using Supabase Dashboard (Easiest)

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy and paste the contents of `supabase/migrations/20251126120000_auto_approve_feedback.sql`
4. Click **Run** to execute the SQL

This will create a database trigger that automatically approves all feedback after insertion.

### Option 2: Using Supabase CLI

If you have Supabase CLI installed:

```bash
supabase db push
```

This will apply all pending migrations.

## What the Migration Does

The migration creates:
1. A function `auto_approve_feedback()` that sets `is_approved = true` after insert
2. A trigger `auto_approve_feedback_trigger` that runs this function automatically

This allows feedback to be auto-approved without violating RLS policies.

## After Running the Migration

Once the migration is applied, feedback submissions will:
1. Be inserted successfully (without RLS error)
2. Be automatically approved by the database trigger
3. Appear immediately in the testimonials page

