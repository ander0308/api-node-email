import { Request, Response } from 'express';
import nodemailer from 'nodemailer'

export const contato = (req: Request, res: Response) => {
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
    // Passo 3: Enviar a mensagem

    res.json({contato: true});
}
