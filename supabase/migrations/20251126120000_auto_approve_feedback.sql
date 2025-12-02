-- Solution 1: Create a trigger to auto-approve feedback (Recommended)
-- This runs with SECURITY DEFINER privileges to bypass RLS restrictions

CREATE OR REPLACE FUNCTION auto_approve_feedback()
RETURNS TRIGGER AS $$
BEGIN
  -- Auto-approve all feedback immediately after insertion
  -- This runs with elevated privileges to bypass RLS
  UPDATE public.feedback
  SET is_approved = true
  WHERE id = NEW.id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a trigger that runs after insert to auto-approve
DROP TRIGGER IF EXISTS auto_approve_feedback_trigger ON public.feedback;

CREATE TRIGGER auto_approve_feedback_trigger
  AFTER INSERT ON public.feedback
  FOR EACH ROW
  EXECUTE FUNCTION auto_approve_feedback();
