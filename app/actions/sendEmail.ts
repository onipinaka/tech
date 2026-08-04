'use server';

import nodemailer from 'nodemailer';

export async function sendEmailAction(formData: FormData, sourceFormName: string = 'Website Form') {
  const SMTP_EMAIL = process.env.SMTP_EMAIL;
  const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
  const TO_EMAIL = process.env.TO_EMAIL || SMTP_EMAIL;

  if (!SMTP_EMAIL || !SMTP_PASSWORD) {
    console.error('Missing SMTP credentials in environment variables.');
    return { success: false, message: 'Server configuration error. Please contact the administrator.' };
  }

  // Extract all fields from FormData
  const fields: Record<string, string> = {};
  formData.forEach((value, key) => {
    // skip system fields added by frameworks if any
    if (key.startsWith('$ACTION_ID_')) return;
    fields[key] = value.toString();
  });

  // Build HTML email for Admin
  let adminHtmlContent = `<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">`;
  adminHtmlContent += `<h2 style="color: #2563EB; border-bottom: 2px solid #2563EB; padding-bottom: 10px;">New submission from ${sourceFormName}</h2>`;
  adminHtmlContent += `<table style="width:100%; border-collapse: collapse; margin-top: 20px;">`;
  
  for (const [key, value] of Object.entries(fields)) {
    const formattedKey = key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase());

    adminHtmlContent += `
      <tr>
        <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: 600; width: 35%; background-color: #f9fafb;">${formattedKey}</td>
        <td style="padding: 12px; border: 1px solid #e5e7eb; word-break: break-word;">${value || '-'}</td>
      </tr>
    `;
  }
  adminHtmlContent += `</table>`;
  adminHtmlContent += `<p style="margin-top: 30px; font-size: 12px; color: #6b7280;">This email was sent securely via your website.</p>`;
  adminHtmlContent += `</div>`;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
      },
    });

    // 1. Send the admin notification
    const adminMailPromise = transporter.sendMail({
      from: `"Raion Technologies" <${SMTP_EMAIL}>`,
      to: TO_EMAIL,
      subject: `New Lead: ${sourceFormName}`,
      html: adminHtmlContent,
      replyTo: fields.email || SMTP_EMAIL, 
    });

    // 2. Send an auto-reply to the user if they provided an email address
    const userEmail = fields.email;
    let userMailPromise = Promise.resolve(); // Default empty promise

    if (userEmail && userEmail.includes('@')) {
      const autoReplyHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
          <h2 style="color: #2563EB;">Thank You for Connecting!</h2>
          <p>Hi ${fields.name || fields.fullName || 'there'},</p>
          <p>Thank you for reaching out to <strong>Raion Technologies</strong>. We have received your request and our team will get back to you shortly.</p>
          <p>If you have any urgent queries, feel free to contact us directly using the details below:</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e2e8f0;">
            <p style="margin: 0 0 10px 0;"><strong>Phone:</strong> +91 96237 89414</p>
            <p style="margin: 0;"><strong>Address:</strong> Raion Technologies Service Center, Pune, Maharashtra, India</p>
          </div>
          
          <p>Best Regards,<br/><strong>The Raion Technologies Team</strong></p>
        </div>
      `;

      userMailPromise = transporter.sendMail({
        from: `"Raion Technologies Support" <${SMTP_EMAIL}>`,
        to: userEmail,
        subject: `We've received your request - Raion Technologies`,
        html: autoReplyHtml,
      });
    }

    // Run both email requests concurrently to cut down waiting time
    await Promise.all([adminMailPromise, userMailPromise]);

    return { success: true, message: 'Your request has been successfully submitted! We will contact you soon.' };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, message: 'Failed to send email. Please try again later.' };
  }
}
