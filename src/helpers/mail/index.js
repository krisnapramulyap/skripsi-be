const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");
require("dotenv").config();

const sendMail = (data) =>
  new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    transporter.use(
      "compile",
      hbs({
        viewEngine: {
          extName: ".html",
          partialsDir: path.resolve("./src/templates/email"),
          defaultLayout: false,
        },
        viewPath: path.resolve("./src/templates/email"),
        extName: ".html",
      })
    );

    const mailOptions = {
      from: `"Coffee-Brings App" <mailtes260@gmail.com>`,
      to: data.to,
      subject: data.subject,
      template: data.template,
      context: data.data,
    };

    // if (data.attachment) {
    //   if (data.attachment.length > 0) {
    //     mailOptions.attachment = data.attachment;
    //   }
    // }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info.response);
      }
    });
  });

module.exports = sendMail;
