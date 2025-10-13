// const nodemailer = require("nodemailer");
// const RegistrationTemplate=require("../templates/RegistrationTemplate.js")
// // Create a test account or replace with real credentials.
// const transporter = nodemailer.createTransport({
//     service: "smtp@gmail.com",
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD,
//     }
// });


// async function EmailSender(userName, email,otp, subject) {
//     try {
//         await transporter.sendMail({
//             from: process.env.EMAIL||"jagmohanrai@gmail.com",
//             to: email,
//             subject: subject,
//             html: RegistrationTemplate(userName,otp),
//           //  text:`below otp: ${otp} used for reset the password`

//         });
//     }
//     catch (error) {
//         console.log("getting an error while sending the email", error)
//     }

// }


// module.exports = EmailSender;
// utils/EmailSender.js


// const nodemailer = require("nodemailer");
// const RegistrationTemplate = require("../templates/RegistrationTemplate.js");

// // Gmail SMTP setup
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD, // Use Gmail App Password, not normal password
//   },
// });

// async function EmailSender(userName, email, otp, subject) {
//   try {
//     const mailOptions = {
//       from: `"YourApp Support" <${process.env.EMAIL}>`,
//       to: email,
//       subject,
//       html: RegistrationTemplate(userName, otp),
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log("✅ Email sent successfully:", info.response);
//   } catch (error) {
//     console.error("❌ Error sending email:", error.message);
//     throw new Error("Email sending failed");
//   }
// }

// module.exports = EmailSender;

// utils/EmailSender.js
const nodemailer = require("nodemailer");
const RegistrationTemplate = require("../templates/RegistrationTemplate.js");

// transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD, // should be App Password, not regular Gmail password
  },
});

async function EmailSender(userName, email, otp, subject) {
  try {
    const mailOptions = {
      from: `"YourApp Support" <${process.env.EMAIL}>`,
      to: email,
      subject,
      html: RegistrationTemplate(userName, otp),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.response);
    return info;
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
    throw new Error("Email sending failed");
  }
}

module.exports = EmailSender;
