
// process.env.email_password must be included on .env file
module.exports = {
    host: "smtp.gmail.com",
    port: 587,
    user: "turismomg.puc@gmail.com",
    pass: process.env.email_password,
};