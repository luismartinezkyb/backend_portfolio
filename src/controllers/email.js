const nodemailer = require('nodemailer');

const sendEmail = async (req, res) =>{
    const { name, email, message} = req.body;
    const EMAIL_PASSWORD= process.env.EMAIL_PASSWORD;
    const EMAIL_USER= process.env.EMAIL_USER;
    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: EMAIL_USER, // generated ethereal user
          pass: EMAIL_PASSWORD , // generated ethereal password
        },
    });
    var mailOptions = {
        from: '"New Job Request👻👻👻👻" <luismartinezjpg@gmail.com>', // sender address
        to: "luisramonmartinezarredondo08@gmail.com", // list of receivers
        subject: "Te acaba de enviar un mensaje desde tu portafolio ✔", // Subject line
        html: `
        <h1>Hi Luis! Someone is looking for you</h1>
        <h4>Name: ${name}</h4>
        <h4>Email: ${email}</h4>
        <p>MESSAGE: ${message}</p>

        `, // html body
    }

    try {

        transporter.sendMail(mailOptions, (e, info) =>{
            if (e) {
                res.status(409).json({message:e.message})
            }
            else {
                
                res.status(201).json({message:'success'});
            }
        });
        
    } catch(e) {
        // console.log(e);
        
        res.status(409).json({error:e})
    }
}

module.exports = {sendEmail};