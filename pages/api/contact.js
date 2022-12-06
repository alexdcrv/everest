 require('dotenv').config()

export default function (req, res) {
    return new Promise(resolve => {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        
        port: 465,
        secure:true,
        requireTLS: true,
        auth: {
          user: 'millionpuzzletransportmail@gmail.com',
          pass: process.env.password,
        },
      })
      const mailData = {
        from: 'millionpuzzletransportmail@gmail.com',
        to: 'info@millionpuzzle.ru',
        // to: 'dikarevaleksandr0@gmail.com',
        subject: `Отправитель: ${req.body.username} <${req.body.email}>`,
        text: req.body.message,
       }
       transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })
      res.status(200)
      res.send()
    return resolve()
  })
  }