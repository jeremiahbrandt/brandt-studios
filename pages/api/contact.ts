import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_SENDER_ADDRESS,
            pass: process.env.Email_SENDER_PASSWORD
        }
    });

    let time = new Date().toLocaleString()

    let html = `<i>${time}</i><br /><br />`;

    html += `Name: ${req.body.name}<br />`;
    html += `Email: ${req.body.email}<br />`;
    html += `Message: ${req.body.message}<br />`;

    let mailOptions = {
        from: process.env.EMAIL_SENDER_ADDRESS,
        to: process.env.EMAIL_SENDER_ADDRESS,
        subject: "Website Contact Form",
        html: html
    };

    return transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            return 400;
        } else {
            return 200;
        }
    });
}