import nodemailer from 'nodemailer';

export default async (req, res) => {

  try {
    const { name, email, subject, message } = req.body;

    // Create a nodemailer transporter (you'll need to configure this)
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // e.g., Gmail
      auth: {
        user: 'amperecraft@gmail.com',
        pass: 'yhrn mphs pljq arnt',
      },
    });

    // Define email data
    const mailOptions = {
      from: email,
      to: 'amperecraft@gmail.com', // Replace with the recipient's email
      subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error sending email' });
  }
};
