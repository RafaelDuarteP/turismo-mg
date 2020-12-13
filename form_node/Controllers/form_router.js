const nodemailer = require('nodemailer');
const SMTP_CONFIG = require("../config/smtp");
var validator = require('../Validators/form_validator');

module.exports = (app) => {

    app.post('/', validator.post, async (req, res) => {
        const transporter = nodemailer.createTransport({
            host: SMTP_CONFIG.host,
            port: SMTP_CONFIG.port,
            secure: false,
            auth: {
              user: SMTP_CONFIG.user,
              pass: SMTP_CONFIG.pass,
            },
            tls: {
              rejectUnauthorized: false,
            },
          });

        const output = `
        <h3>Detalhes de Contato</h3>
        <ul>  
          <li>Name: ${req.body.name}</li>
          <li>Email: ${req.body.email}</li>
        </ul>
        <h2>${req.body.subject}</h2>
        <p>${req.body.message}</p>
        `;

        const mailSent = await transporter.sendMail({
            from: "Turismo MG <turismomg.puc@gmail.com",
            to: ["turismomg.puc@gmail.com", req.body.email],
            subject: 'Recomendaçoes de Turismo Mineiro',
            html: output
          }).catch(err => console.log(err));

        return res.status(203).send('Email enviado com sucesso.');
    });
}