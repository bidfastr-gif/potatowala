import { supabase } from "@/integrations/supabase/client";

interface NewDish {
  name: string;
  price?: string;
  description?: string;
  image?: string;
}

/**
 * Sends email notifications to all active subscribers when a new dish is added
 * @param dish - The new dish information
 */
export async function notifySubscribersAboutNewDish(dish: NewDish) {
  try {
    // Get all active subscribers
    const { data: subscribers, error: fetchError } = await supabase
      .from("email_subscriptions" as any)
      .select("email")
      .eq("is_active", true);

    if (fetchError) {
      console.error("Error fetching subscribers:", fetchError);
      return { success: false, error: fetchError };
    }

    if (!subscribers || subscribers.length === 0) {
      console.log("No active subscribers to notify");
      return { success: true, count: 0 };
    }

    const subscriberEmails = subscribers.map((s: any) => s.email);
    console.log(`Notifying ${subscriberEmails.length} subscribers about new dish: ${dish.name}`);

    // Try to send emails using available email services
    let emailSent = false;
    let emailError = null;

    // Method 1: Try Formspree
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
    if (formspreeId) {
      try {
        let formId = formspreeId;
        if (formId.includes("formspree.io/f/")) {
          const match = formId.match(/formspree\.io\/f\/([a-zA-Z0-9]+)/);
          if (match) {
            formId = match[1];
          }
        }

        // Send to each subscriber (Formspree has rate limits, so we'll send in batches)
        const batchSize = 10;
        for (let i = 0; i < subscriberEmails.length; i += batchSize) {
          const batch = subscriberEmails.slice(i, i + batchSize);
          
          for (const email of batch) {
            const formData = new FormData();
            formData.append("email", email);
            formData.append("subject", `New Dish Added: ${dish.name} at Potatowala!`);
            formData.append("dish_name", dish.name);
            formData.append("dish_price", dish.price || "Check menu for price");
            formData.append("dish_description", dish.description || "");
            formData.append("message", `We're excited to announce our new dish: ${dish.name}!${dish.description ? ` ${dish.description}` : ''}${dish.price ? ` Price: ${dish.price}` : ''} Visit our menu to try it out!`);

            await fetch(`https://formspree.io/f/${formId}`, {
              method: "POST",
              body: formData,
              headers: { "Accept": "application/json" },
            });
          }

          // Small delay between batches to avoid rate limiting
          if (i + batchSize < subscriberEmails.length) {
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        }

        emailSent = true;
        console.log(`✓ Emails sent via Formspree to ${subscriberEmails.length} subscribers`);
      } catch (formspreeError) {
        emailError = formspreeError;
        console.error("✗ Formspree error:", formspreeError);
      }
    }

    // Method 2: Try Supabase Edge Function
    if (!emailSent) {
      try {
        const { data: emailData, error: edgeError } = await supabase.functions.invoke('send-subscriber-emails', {
          body: {
            emails: subscriberEmails,
            subject: `New Dish Added: ${dish.name} at Potatowala!`,
            dish: dish,
          },
        });

        if (edgeError) {
          throw edgeError;
        }

        if (emailData?.emailsSent) {
          emailSent = true;
          console.log(`✓ Emails sent via Supabase Edge Function to ${emailData.emailsSent} subscribers`);
        }
      } catch (edgeError: any) {
        emailError = edgeError;
        console.error("✗ Supabase Edge Function error:", edgeError?.message || edgeError);
      }
    }

    // Method 3: Try Webhook
    if (!emailSent) {
      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;
      if (webhookUrl) {
        try {
          await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              type: "new_dish_notification",
              emails: subscriberEmails,
              subject: `New Dish Added: ${dish.name} at Potatowala!`,
              dish: dish,
            }),
          });
          emailSent = true;
          console.log(`✓ Webhook called to notify ${subscriberEmails.length} subscribers`);
        } catch (webhookError) {
          emailError = webhookError;
          console.error("✗ Webhook error:", webhookError);
        }
      }
    }

    if (!emailSent) {
      console.warn("⚠ No email service configured. Subscribers were not notified.");
      console.warn("Configure one of: VITE_FORMSPREE_ID, Supabase Edge Function, or VITE_WEBHOOK_URL");
    }

    return {
      success: emailSent,
      count: subscriberEmails.length,
      error: emailError,
    };
  } catch (error) {
    console.error("Error notifying subscribers:", error);
    return { success: false, error };
  }
}

