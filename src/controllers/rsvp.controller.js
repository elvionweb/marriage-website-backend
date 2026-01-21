import RSVP from "../models/RSVP.js";
import { sendEmail } from "../utils/sendEmail.js";

export const createRSVP = async (req, res) => {
  try {
    const { name, email, phone, attending, guests } = req.body;

    if (!name || !phone || attending === undefined || !guests) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    // 1️⃣ Save RSVP immediately
    const rsvp = await RSVP.create({
      name,
      email,
      phone,
      attending,
      guests,
    });

    // 2️⃣ Respond immediately
    res.status(201).json({
      success: true,
      message: "RSVP submitted successfully!",
    });

    // 3️⃣ Send email **in background**
    if (email) {
      sendEmail({
        to: email,
        subject: "Wedding RSVP Confirmation 💍",
        html: `
          <p>Hi ${name},</p>
          <p>Thanks for submitting your RSVP! ${
            attending ? "We can't wait to celebrate with you 🎉" : "We understand you can't make it 💖"
          }</p>
          <p>Number of guests: ${guests}</p>
        `,
      });
    }
  } catch (err) {
    console.error("RSVP submission failed:", err.message);
    res.status(500).json({ success: false, message: "Failed to submit RSVP" });
  }
};