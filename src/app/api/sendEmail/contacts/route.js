import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Parse JSON body (since your form uses fetch/axios with JSON, not formData)
    const data = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      projectType,
      message,
    } = data;

    // Compose the email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Project Type:</strong> ${projectType}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `;

    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "guptaniraj915@gmail.com",
        pass: "mane zitk tvqb vyok", // Gmail App Password
      },
    });

    const mailOptions = {
      from: `"Contact Form" <${email}>`,
      to: "guptaniraj915@gmail.com", // Change to your desired recipient
      subject: "New Contact Form Submission",
      html: emailContent,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Failed to send email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email." }), { status: 500 });
  }
}