import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, course } = body;
    console.log(process.env.EMAIL_USER)
        console.log(process.env.EMAIL_PASS)

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Conteúdo do e-mail
    const mailOptions = {
      from: `"Land Page Cota Racial" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Novo contato Land Page Conta Racial",
      text: `Novo contato recebido:
      Nome: ${name}
      Email: ${email}
      Telefone: ${phone}
      Curso: ${course},
    
      `,
    };

    // Envia o e-mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "E-mail enviado com sucesso!", data: body },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json(
      { message: "Erro ao processar requisição" },
      { status: 500 }
    );
  }
}
