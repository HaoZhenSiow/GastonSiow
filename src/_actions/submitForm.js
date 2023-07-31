'use server'
import nodemailer from "nodemailer"
require("dotenv").config()
export default async function submitForm(formData) {
  const name = formData.get('name'),
        phone = formData.get('phone'),
        email = formData.get('email'),
        type = formData.get('type'),
        collection = formData.get('collection'),
        message = formData.get('message')

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  })

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `New Lead - ${name}`,
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Property Type: ${type}</p>
           <p>Key Collection Date: ${collection}</p>
           <p>Message: ${message}</p>`
  }

  try {
    await transporter.sendMail(mailOptions)
    return { status: 200 }
  } catch (error) {
    return { status: 400 }
  }
}