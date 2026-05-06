// @ts-ignore: Deno runtime import
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

// @ts-ignore: Deno global
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") || "";
const TO_EMAIL = "vasanthb.gap@gmail.com";

interface FranchiseEnquiry {
  name: string;
  email: string;
  phone: string;
  location: string;
  investment?: string;
  message: string;
}

// Function to generate PDF using pdf-lib
async function generatePDF(enquiry: FranchiseEnquiry): Promise<string> {
  try {
    const { PDFDocument, rgb, StandardFonts } = await import(
      // @ts-ignore: Deno/CDN import
      "https://cdn.skypack.dev/pdf-lib@^1.17.1"
    );

    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([612, 792]); // Letter size
    const { width, height } = page.getSize();

    // Define colors
    const primaryColor = rgb(0.545, 0.271, 0.075); // #8B4513
    const textColor = rgb(0.2, 0.2, 0.2);
    const lightGray = rgb(0.95, 0.95, 0.95);

    // Get fonts
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    // Header
    page.drawRectangle({
      x: 0,
      y: height - 100,
      width: width,
      height: 100,
      color: primaryColor,
    });

    page.drawText("Franchise Enquiry Form", {
      x: width / 2 - 120,
      y: height - 50,
      size: 24,
      font: helveticaBoldFont,
      color: rgb(1, 1, 1),
    });

    page.drawText("Potatowala - Premium Loaded Fries", {
      x: width / 2 - 140,
      y: height - 75,
      size: 12,
      font: helveticaFont,
      color: rgb(1, 1, 1),
    });

    // Content section
    let yPosition = height - 140;
    const lineHeight = 30;
    const margin = 50;

    // Helper function to add a field
    const addField = (label: string, value: string) => {
      const valueLines = value.split('\n');
      const boxHeight = Math.max(40, 25 + (valueLines.length * 14));
      
      // Background box
      page.drawRectangle({
        x: margin,
        y: yPosition - boxHeight + 5,
        width: width - 2 * margin,
        height: boxHeight,
        color: lightGray,
      });

      // Label
      page.drawText(label.toUpperCase(), {
        x: margin + 10,
        y: yPosition - 10,
        size: 10,
        font: helveticaBoldFont,
        color: rgb(0.3, 0.3, 0.3),
      });

      // Value (handle multi-line)
      valueLines.forEach((line, index) => {
        // Truncate very long lines (simple approach)
        const maxChars = 60; // Approximate characters per line
        if (line.length > maxChars) {
          // Split into chunks
          for (let i = 0; i < line.length; i += maxChars) {
            const chunk = line.substring(i, i + maxChars);
            page.drawText(chunk, {
              x: margin + 10,
              y: yPosition - 28 - (index * 14) - ((i / maxChars) * 14),
              size: 12,
              font: helveticaFont,
              color: textColor,
            });
          }
        } else {
          page.drawText(line, {
            x: margin + 10,
            y: yPosition - 28 - (index * 14),
            size: 12,
            font: helveticaFont,
            color: textColor,
          });
        }
      });

      yPosition -= (boxHeight + 10);
    };

    // Add fields
    addField("Full Name", enquiry.name);
    addField("Email Address", enquiry.email);
    addField("Phone Number", enquiry.phone);
    addField("Preferred Location", enquiry.location);
    
    if (enquiry.investment) {
      addField("Investment Range", enquiry.investment);
    }

    // Message field (larger, handle wrapping)
    const messageLines = enquiry.message.split('\n');
    const maxMessageHeight = 250;
    const messageBoxHeight = Math.min(maxMessageHeight, 40 + (messageLines.length * 14));
    
    page.drawRectangle({
      x: margin,
      y: yPosition - messageBoxHeight + 5,
      width: width - 2 * margin,
      height: messageBoxHeight,
      color: lightGray,
    });

    page.drawText("ADDITIONAL DETAILS / MESSAGE", {
      x: margin + 10,
      y: yPosition - 10,
      size: 10,
      font: helveticaBoldFont,
      color: rgb(0.3, 0.3, 0.3),
    });

    // Draw message text (handle long lines)
    let lineIndex = 0;
    const maxCharsPerLine = 65; // Approximate characters per line at 11pt font
    
    messageLines.forEach((line) => {
      if (line.length > maxCharsPerLine) {
        // Split long lines into chunks
        for (let i = 0; i < line.length; i += maxCharsPerLine) {
          const chunk = line.substring(i, i + maxCharsPerLine);
          page.drawText(chunk, {
            x: margin + 10,
            y: yPosition - 30 - (lineIndex * 13),
            size: 11,
            font: helveticaFont,
            color: textColor,
          });
          lineIndex++;
        }
      } else {
        page.drawText(line, {
          x: margin + 10,
          y: yPosition - 30 - (lineIndex * 13),
          size: 11,
          font: helveticaFont,
          color: textColor,
        });
        lineIndex++;
      }
    });

    // Footer
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    page.drawText(`Submitted on: ${timestamp}`, {
      x: margin,
      y: 50,
      size: 10,
      font: helveticaFont,
      color: rgb(0.4, 0.4, 0.4),
    });

    page.drawText("This is an automated enquiry form submission from Potatowala website.", {
      x: margin,
      y: 35,
      size: 9,
      font: helveticaFont,
      color: rgb(0.4, 0.4, 0.4),
    });

    // Generate PDF bytes
    const pdfBytes = await pdfDoc.save();

    // Convert to base64
    const base64String = btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(pdfBytes))));
    return base64String;
  } catch (error) {
    console.error("Error generating PDF:", error);
    // Return empty string if PDF generation fails
    return "";
  }
}

serve(async (req: Request) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
      },
    });
  }

  try {
    const enquiry: FranchiseEnquiry = await req.json();

    // Validate required fields
    if (!enquiry.name || !enquiry.email || !enquiry.phone || !enquiry.location || !enquiry.message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Format email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #8B4513; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; padding: 8px; background-color: white; border-left: 3px solid #8B4513; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Franchise Enquiry</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${enquiry.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${enquiry.email}</div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${enquiry.phone}</div>
              </div>
              <div class="field">
                <div class="label">Preferred Location:</div>
                <div class="value">${enquiry.location}</div>
              </div>
              ${enquiry.investment ? `
              <div class="field">
                <div class="label">Investment Range:</div>
                <div class="value">${enquiry.investment}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${enquiry.message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailText = `
New Franchise Enquiry

Name: ${enquiry.name}
Email: ${enquiry.email}
Phone: ${enquiry.phone}
Preferred Location: ${enquiry.location}
${enquiry.investment ? `Investment Range: ${enquiry.investment}\n` : ''}
Message:
${enquiry.message}
    `;

    // Generate PDF
    console.log("Generating PDF for enquiry...");
    const pdfBase64 = await generatePDF(enquiry);
    
    // Generate PDF filename with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
    const pdfFilename = `franchise-enquiry-${timestamp}.pdf`;

    // Prepare email with PDF attachment
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const emailPayload: any = {
      from: "Potatowala <onboarding@resend.dev>", // Update with your verified domain
      to: [TO_EMAIL],
      subject: `New Franchise Enquiry from ${enquiry.name}`,
      html: emailHtml,
      text: emailText,
    };

    // Add PDF attachment if generated successfully
    if (pdfBase64) {
      emailPayload.attachments = [
        {
          filename: pdfFilename,
          content: pdfBase64,
          type: "application/pdf",
          disposition: "attachment",
        },
      ];
      console.log(`PDF generated successfully: ${pdfFilename}`);
    } else {
      console.warn("PDF generation failed, sending email without attachment");
    }

    // Send email using Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailPayload),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error("Resend API error:", errorData);
      
      // Fallback: Return success even if email fails (email service might not be configured)
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "Enquiry received (email notification pending configuration)",
          emailSent: false 
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    const emailData = await emailResponse.json();

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Email sent successfully",
        emailSent: true,
        emailId: emailData.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: (error as Error).message || "Failed to send email" 
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
});

