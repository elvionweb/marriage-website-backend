# 💍 Marriage Website Backend API

A production-ready backend API for a marriage / wedding website.  
This backend handles **RSVP submissions**, **love notes**, **email notifications**, and **MongoDB data storage** using **Node.js, Express, MongoDB, and Nodemailer**.

---

## 🚀 Features

### 📩 RSVP Management
- Save RSVP data securely to MongoDB
- Optional guest email confirmation
- Fast API response (email sent asynchronously)
- Input validation and error handling

### 💌 Love Notes
- Guests can submit love messages
- Messages stored in MongoDB
- Public endpoint returns **approved notes only**
- Message length and content validation

### 📧 Email Notifications
- Confirmation emails via Nodemailer
- Gmail SMTP supported
- Non-blocking email delivery
- Secure environment-based credentials

### ⚡ Production-Ready Architecture
- Clean and scalable folder structure
- Environment variable configuration
- CORS enabled for frontend integration
- Centralized MongoDB connection handling

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **Nodemailer**
- **dotenv**
- **Zod**
- **CORS**

---

## 📁 Project Structure

```txt
src/
├── app.js
├── server.js
├── config/
│   └── db.js
├── controllers/
│   ├── note.controller.js
│   └── rsvp.controller.js
├── models/
│   ├── LoveNote.js
│   └── RSVP.js
├── routes/
│   ├── note.routes.js
│   └── rsvp.routes.js
└── utils/
    └── sendEmail.js
```