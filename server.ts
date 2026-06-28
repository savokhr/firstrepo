import express from "express";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Helper to get SMTP Transporter with fallback
function getSMTPTransporter() {
  let host = process.env.SMTP_HOST || "mail.walterbeinsteinproperty.com";
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    console.warn("SMTP credentials are not fully configured in the environment variables. Mails will be logged to console instead.");
    return null;
  }

  // SYSTEMATIC FIX FOR CPANEL EMAIL MISMATCHES:
  // For cPanel hosting, the SMTP host should align with the email domain.
  // We dynamically verify and correct the SMTP host if there is a discrepancy 
  // between the user's email domain and the configured SMTP host domain (e.g. 'beinstein' vs 'bernstein').
  if (user.includes("@")) {
    const userDomain = user.split("@")[1].trim().toLowerCase();
    const hostClean = host.replace(/^mail\./i, "").trim().toLowerCase();

    if (hostClean !== userDomain && (userDomain.includes("bernstein") || userDomain.includes("beinstein"))) {
      const originalHost = host;
      host = `mail.${userDomain}`;
      console.log(`Systematic Fix: SMTP_HOST overridden from '${originalHost}' to '${host}' to match cPanel SMTP user domain '${userDomain}'`);
    }
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    connectionTimeout: 8000, // 8s connection timeout for Vercel Serverless
    greetingTimeout: 8000,   // 8s greeting timeout
    socketTimeout: 10000,     // 10s socket timeout
    tls: {
      // Do not fail on invalid certs for hosting servers
      rejectUnauthorized: false
    }
  });
}

// API endpoint for Booking Inquiries
app.post("/api/inquiry", async (req, res) => {
  const { name, email, property, checkIn, checkOut, notes, referenceId } = req.body;

  if (!name || !email || !property || !checkIn || !checkOut) {
    return res.status(400).json({ error: "Missing required booking details." });
  }

  const trackingId = referenceId || `WBP-${Math.floor(100000 + Math.random() * 900000)}`;
  const transporter = getSMTPTransporter();

  const textContent = `
    New Booking Inquiry Received
    ---------------------------------------------
    Reference ID: ${trackingId}
    Guest Name: ${name}
    Email Address: ${email}
    Selected Property: ${property}
    Check-In Date: ${checkIn}
    Check-Out Date: ${checkOut}
    Special Notes: ${notes || "None provided"}
    Date Received: ${new Date().toLocaleString()}
    ---------------------------------------------
    Please review this booking against the private estate schedule.
  `;

  const htmlContent = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #fcfbf7;">
      <h2 style="color: #1c2d27; border-bottom: 2px solid #a3b899; padding-bottom: 10px;">New Booking Inquiry Received</h2>
      <p><strong>Reference ID:</strong> <span style="font-family: monospace; font-weight: bold; background-color: #f0ede4; padding: 2px 6px; border-radius: 4px;">${trackingId}</span></p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
        <tr style="background-color: #f7f5ef;">
          <td style="padding: 10px; font-weight: bold; width: 35%;">Guest Name</td>
          <td style="padding: 10px;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold;">Email Coordinate</td>
          <td style="padding: 10px;"><a href="mailto:${email}" style="color: #2c4c38; text-decoration: none;">${email}</a></td>
        </tr>
        <tr style="background-color: #f7f5ef;">
          <td style="padding: 10px; font-weight: bold;">Property</td>
          <td style="padding: 10px; font-weight: bold; color: #2c4c38;">${property}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold;">Check-In Date</td>
          <td style="padding: 10px;">${checkIn}</td>
        </tr>
        <tr style="background-color: #f7f5ef;">
          <td style="padding: 10px; font-weight: bold;">Check-Out Date</td>
          <td style="padding: 10px;">${checkOut}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold;">Notes / Requests</td>
          <td style="padding: 10px; font-style: italic;">${notes || "None"}</td>
        </tr>
      </table>
      <div style="margin-top: 25px; padding-top: 15px; border-t: 1px solid #e2e8f0; font-size: 11px; color: #718096; text-align: center;">
        Sent via Walter Beinstein Property Booking Registrar Office
      </div>
    </div>
  `;

  try {
    const fromName = process.env.SMTP_FROM_NAME || "Walter Beinstein Property Support";
    const fromEmail = process.env.SMTP_USER || "support@walterbernsteinproperty.com";
    const notificationEmail = process.env.NOTIFICATION_EMAIL || "support@walterbernsteinproperty.com";

    if (transporter) {
      await transporter.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: notificationEmail,
        replyTo: email,
        subject: `[New Inquiry] ${property} Booking - ${name}`,
        text: textContent,
        html: htmlContent
      });
      console.log(`Booking email sent successfully for ${trackingId}`);
    } else {
      console.log("MOCK SMTP EMAIL SEND (Inquiry):", textContent);
    }

    return res.status(200).json({ success: true, referenceId: trackingId });
  } catch (error: any) {
    console.error("Error sending booking email:", error);
    return res.status(500).json({ error: "Failed to transmit reservation details. Please try again." });
  }
});

// API endpoint for Direct Contacts
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, reason, message } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "Name, email, and phone coordinates are required." });
  }

  const transporter = getSMTPTransporter();
  const textContent = `
    New Direct Desk Inquiry Received
    ---------------------------------------------
    Client Name: ${name}
    Email Coordinate: ${email}
    Direct Phone: ${phone}
    Inquiry Reason: ${reason || "General Desk Inquiry"}
    Message: ${message || "No message provided"}
    Date Received: ${new Date().toLocaleString()}
    ---------------------------------------------
    Please initiate direct callback procedures.
  `;

  const htmlContent = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #fcfbf7;">
      <h2 style="color: #1c2d27; border-bottom: 2px solid #a3b899; padding-bottom: 10px;">New Executive Desk Inquiry</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
        <tr style="background-color: #f7f5ef;">
          <td style="padding: 10px; font-weight: bold; width: 35%;">Client Name</td>
          <td style="padding: 10px;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold;">Email Coordinate</td>
          <td style="padding: 10px;"><a href="mailto:${email}" style="color: #2c4c38; text-decoration: none;">${email}</a></td>
        </tr>
        <tr style="background-color: #f7f5ef;">
          <td style="padding: 10px; font-weight: bold;">Direct Phone</td>
          <td style="padding: 10px;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold;">Reason for Contact</td>
          <td style="padding: 10px; font-weight: bold; color: #2c4c38;">${reason || "General Desk Inquiry"}</td>
        </tr>
        <tr style="background-color: #f7f5ef;">
          <td style="padding: 10px; font-weight: bold;">Message Detail</td>
          <td style="padding: 10px; font-style: italic;">${message || "No message provided."}</td>
        </tr>
      </table>
      <div style="margin-top: 25px; padding-top: 15px; border-t: 1px solid #e2e8f0; font-size: 11px; color: #718096; text-align: center;">
        Sent via Walter Beinstein Property Executive Desk Hotline
      </div>
    </div>
  `;

  try {
    const fromName = process.env.SMTP_FROM_NAME || "Walter Beinstein Property Support";
    const fromEmail = process.env.SMTP_USER || "support@walterbernsteinproperty.com";
    const notificationEmail = process.env.NOTIFICATION_EMAIL || "support@walterbernsteinproperty.com";

    if (transporter) {
      await transporter.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: notificationEmail,
        replyTo: email,
        subject: `[Executive Desk] ${reason || "Direct Desk"} - ${name}`,
        text: textContent,
        html: htmlContent
      });
      console.log(`Direct contact email sent successfully for ${name}`);
    } else {
      console.log("MOCK SMTP EMAIL SEND (Contact):", textContent);
    }

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("Error sending contact email:", error);
    return res.status(500).json({ error: "Failed to transmit message. Please try again." });
  }
});

// Setup Vite Dev Server / Static files handler
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

// Only start the server if we are NOT in a serverless environment (like Vercel)
if (!process.env.VERCEL) {
  startServer();
}

export default app;
