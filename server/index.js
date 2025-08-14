const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
const cors = require("cors");

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://aki-company.vercel.app",
  "https://aki-company-nnvv.vercel.app",
  "https://akirecycling.com/"
];

// Middleware to parse JSON bodies
app.use(express.json());

const corsOptions = {
  origin: allowedOrigins,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

// Test endpoint to verify server is working
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Contact endpoint
app.post("/api/contact", async (req, res) => {
  console.log("Contact request received:", req.body);

  const { name, email, subject, message } = req.body;

  // Validate all required fields
  if (!name || !email || !subject || !message) {
    console.log("Missing required field(s)");
    return res.status(400).json({ 
      error: "All fields are required",
      received: { name, email, subject, message }
    });
  }

  // Email configuration
  const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 465,
    secure: true,
    auth: {
      user: 'apikey',
      pass: process.env.SENDGRID_API_KEY
    }
  });

  transporter.verify(function(error, success) {
    if (error) {
      console.log('SMTP connection error:', error);
    } else {
      console.log('Server is ready to take our messages');
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Use your email as sender
    to: process.env.EMAIL_USER,   // Send to yourself
    replyTo: email,              // Allow reply to sender
    subject: `New Contact: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to send email",
      error: error.message 
    });
  }
});


// Partnership Inquiry
app.post("/api/partnership", async (req, res) => {
  const { fullName, email, phone, organization, industry, website, address, partnershipType, volume, goals, message } = req.body;

  if (!fullName || !email || !organization) {
    return res.status(400).json({ message: "Please fill in all required fields." });
  }

  const formattedMessage = `
New Partnership Inquiry from AKI Website:

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Organization: ${organization}
Industry: ${industry}
Website: ${website}
Address: ${address}
Partnership Type: ${partnershipType}
Battery Volume: ${volume}
Sustainability Goals: ${goals}
Message: ${message}
`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `AKI Partnership Inquiry: ${organization}`,
    text: formattedMessage,
    replyTo: email,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Organization:</strong> ${organization}</p>
      <p><strong>Industry:</strong> ${industry}</p>
      <p><strong>Website:</strong> ${website}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Partnership Type:</strong> ${partnershipType}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `
  };

  const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    auth: {
      user: 'apikey',
      pass: process.env.SENDGRID_API_KEY
    }
  });

  try {
    await transporter.sendMail(mailOptions);
    console.log("Partnership email sent to:", mailOptions.to);
    res.status(200).json({ message: "Partnership form submitted successfully!" });
  } catch (err) {
    console.error("Email send failed:", {
      error: err.message,
      mailOptions: {
        from: mailOptions.from,
        to: mailOptions.to,
        subject: mailOptions.subject
      }
    });
    res.status(500).json({ 
      message: "Failed to submit form",
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});

// IMPORTANT: Export the app for Vercel
module.exports = app;