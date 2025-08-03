const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

// 1. Updated CORS Configuration
const allowedOrigins = [
  "http://localhost:3000",
  "https://aki-company.vercel.app",
  "https://aki-company-nnvv.vercel.app",
  "https://aki-company-*.vercel.app"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.some(allowed => origin.match(new RegExp(allowed.replace('*', '.*'))))) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: false
};

app.use(cors(corsOptions));
app.use(express.json());

// 2. Explicit OPTIONS handler for preflight requests
app.options("*", cors(corsOptions));

// 3. Health Check Endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

// 4. Contact Endpoint (updated)
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
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

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// 5. Catch-all route
app.get("*", (req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// 6. Export for Vercel
module.exports = app;

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

// const transporter = nodemailer.createTransport({
//   host: 'smtp.sendgrid.net',
//   port: 587,
//   auth: {
//     user: 'apikey', // Literally this string
//     pass: process.env.SENDGRID_API_KEY
//   }
// });

  const mailOptions = {
    from: process.env.EMAIL_USER || 'noreply@yourdomain.com',
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
      <p><strong>Battery Volume:</strong> ${volume}</p>
      <p><strong>Sustainability Goals:</strong> ${goals}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `
  };

// const mailOptions = {
//   from: process.env.EMAIL_USER,   
//   to: process.env.EMAIL_USER,       
//   subject: `AKI Partnership Inquiry: ${organization}`,
//   text: formattedMessage,
//   replyTo: email                   
// };

  // try {
  //   await transporter.sendMail(mailOptions);
  //   res.status(200).json({ message: "Partnership form submitted successfully!" });
  // } catch (err) {
  //   console.error("Email send error:", err);
  //   res.status(500).json({ message: "Failed to submit form." });
  // }
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



// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("Available endpoints:");
  console.log(`- GET  http://localhost:${PORT}/api/health`);
  console.log(`- POST http://localhost:${PORT}/api/contact`);
});