import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'siowhaozhen2020@gmail.com',
      pass: 'mroytgkujlbotyeu'
    }
  })

  const mailOptions = {
    from: 'siowhaozhen2020@gmail.com',
    to: 'siowhaozhen@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email sent from JavaScript using Nodemailer.',
    html: "<b>Hello world?</b>"
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    return NextResponse.json('Email sent', { status: 200 })
  } catch (error) {
    return NextResponse.json(error, { status: 400 })
  }

  // console.log('transporter: ', transporter)
  // transporter.sendMail(mailOptions, function(error, info) {
  //   if (error) {
  //     return NextResponse.json('Error', { status: 400 })
  //   } else {
  //     return NextResponse.json('Email sent', { status: 200 })
  //   }
  // })

  // return NextResponse.json('Email sent', { status: 200 })
}