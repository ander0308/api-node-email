import { Request, Response } from 'express';
import nodemailer from 'nodemailer'

export const contato = (req: Request, res: Response) => {
    // Passo 1: Configurar o transporter
    // Passo 2 : Configurar a mensagem
    // Passo 3: Enviar a mensagem

    res.json({contato: true});
}
