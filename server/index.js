const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = 5001;
const allowedOrigins = [
  "http://localhost:3000",
  "https://aki-company.vercel.app",
  "https://aki-company-nnvv.vercel.app", // Add your backend domain too
  "https://aki-company-git-main-akibzaman.vercel.app", // Common Vercel preview URL pattern
  "https://aki-company-*.vercel.app"// Replace with actual domain
];
// Middleware to parse JSON bodies
app.use(express.json());
const cors = require("cors");

// Manual CORS middleware - handles all requests
// app.use((req, res, next) => {
//     const origin = req.headers.origin;
//   // Allow your React app's origin
//   if (allowedOrigins.includes(origin)) {
//     res.setHeader("Access-Control-Allow-Origin", origin);
//   }  
//   // Allow specific headers
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
  
//   // Allow these methods
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  
//   // Allow credentials if needed
//   res.header("Access-Control-Allow-Credentials", "true");
  
//   // Handle preflight requests (OPTIONS)
//   if (req.method === "OPTIONS") {
//     return res.sendStatus(200);
//   }
  
//   next();
// });


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
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
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

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL_USER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN
  }
});

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `AKI Partnership Inquiry: ${organization}`,
    text: formattedMessage,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Partnership form submitted successfully!" });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ message: "Failed to submit form." });
  }
});



// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("Available endpoints:");
  console.log(`- GET  http://localhost:${PORT}/api/health`);
  console.log(`- POST http://localhost:${PORT}/api/contact`);
});