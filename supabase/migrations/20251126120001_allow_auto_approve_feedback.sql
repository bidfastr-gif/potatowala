-- Drop the existing INSERT policy
DROP POLICY IF EXISTS "Anyone can submit feedback" ON public.feedback;

-- Create a new INSERT policy that allows setting is_approved to true
CREATE POLICY "Anyone can submit feedback" 
ON public.feedback 
FOR INSERT 
TO public
WITH CHECK (true);

-- Grant permission to set is_approved during insert
-- This allows users to auto-approve their own feedback
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

