import { Request, Response } from 'express';
import nodemailer from 'nodemailer'

export const contato = async (req: Request, res: Response) => {
    // Passo 1: Configurar o transporter
    let transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "9e8b4ce341e223",
                pass: "fb7e5c17305dcf"
            }
        });
    // Passo 2 : Configurar a mensagem
    let message = {
        from: 'Anderson Santana <anderson@gmail.com>',
        to: 'suporte@gmail.com',
        // replyTo: '',
        subject: 'Assunto do email',
        html: 'Opa <strong>Anderson</strong> como está?',
        text: 'Opa Anderson, como está'
    }
    // Passo 3: Enviar a mensagem
    let info = await transport.sendMail(message)
    console.log("Info: ", info)

    res.json({success: true});
}
