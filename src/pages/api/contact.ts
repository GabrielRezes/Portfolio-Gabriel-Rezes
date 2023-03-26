import nodemailer from 'nodemailer';
import sendgridTransport from 'nodemailer-sendgrid-transport';
import { NextApiRequest, NextApiResponse } from 'next';

const email = process.env.EMAILADDRESS;

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY
    }
  })
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, senderEmail, message } = req.body;

    if (!name.trim() || !senderEmail.trim() || !message.trim()) {
      return res.status(403).send('');
    }

    const contentMessage = {
      from: email,
      to: email,
      subject: `Nova mensagem de contato - ${name}`,
      html: `<p> <b>Email:</b>  ${senderEmail} <br /> <b>Mensagem:</b> ${message}</p>`,
      replyTo: senderEmail
    };

    await transporter.sendEmail(contentMessage);
    return res.send(200);
  } catch (err) {
    return res.json({
      error: true,
      message: err.message
    });
  }
};
