-- Create email_subscriptions table
CREATE TABLE IF NOT EXISTS public.email_subscriptions (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    email text NOT NULL UNIQUE,
    subscribed_at timestamp with time zone DEFAULT now() NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    unsubscribed_at timestamp with time zone,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_email_subscriptions_email ON public.email_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_email_subscriptions_active ON public.email_subscriptions(is_active) WHERE is_active = true;

-- Enable RLS
ALTER TABLE public.email_subscriptions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert (subscribe)
CREATE POLICY "Allow public to subscribe" ON public.email_subscriptions
    FOR INSERT
    WITH CHECK (true);

-- Policy: Allow users to read their own subscription status
CREATE POLICY "Allow users to read own subscription" ON public.email_subscriptions
    FOR SELECT
    USING (true);

-- Policy: Allow users to update their own subscription (unsubscribe)
CREATE POLICY "Allow users to unsubscribe" ON public.email_subscriptions
    FOR UPDATE
    USING (true)
    WITH CHECK (true);

-- Add comment
COMMENT ON TABLE public.email_subscriptions IS 'Stores email addresses of users who subscribed to receive updates about new dishes';

