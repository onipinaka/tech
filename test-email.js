const nodemailer = require('nodemailer');

async function testEmail() {
  console.log("Testing with email:", process.env.SMTP_EMAIL);
  console.log("Password length:", process.env.SMTP_PASSWORD ? process.env.SMTP_PASSWORD.length : 0);
  
  if (!process.env.SMTP_EMAIL) {
    console.log("No SMTP_EMAIL found in .env.local");
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
    // Adding a timeout so it doesn't hang forever
    connectionTimeout: 5000,
    greetingTimeout: 5000,
    socketTimeout: 5000,
  });

  try {
    console.log("Attempting to send email...");
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: process.env.TO_EMAIL || process.env.SMTP_EMAIL,
      subject: "Test Email from Node.js",
      text: "If you get this, nodemailer is working."
    });
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Failed to send email:", error.message);
  }
}

testEmail();
