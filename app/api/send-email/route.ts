import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { to, subject, message } = await req.json()

    if (!to || !subject || !message) {
      return NextResponse.json({ status: 'Gagal', message: 'Semua field harus diisi!', author: 'RzDev' }, { status: 400 })
    }

    // Konfigurasi SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Kirim email
    await transporter.sendMail({
      from: `"Sender Mail - API" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text: message,
    })

    return NextResponse.json({ status: 'Sukses', message: 'Email berhasil dikirim!', author: 'RzDev' }, { status: 200 })

  } catch (error) {
    return NextResponse.json({ status: 'Gagal', message: 'Gagal mengirim email!', author: 'RzDev', error: error.message }, { status: 500 })
  }
}