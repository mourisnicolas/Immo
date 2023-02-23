import dbConnect from "../../../lib/dbConnect";
import UserAdmin from "../../../models/user";
import cookie from 'cookie';
import _ from 'lodash';

export default async function handler(req, res) {
  const { method, body } = req
  await dbConnect();

  switch (method) {
    case 'POST':
      try {

        let user = await UserAdmin.findOne({ username: body.username });

       await user.passCheck(body.password);
        const token = user.setToken();

        res.setHeader('Set-Cookie', cookie.serialize("adminnn", token, {
          httpOnly: true,
          secure: process.env.NEXT_PUBLIC_NODE_ENV === "DEV" ? false : true,
          // maxAge: '54000000',
          sameSite: 'strict',
          path: '/'
        }));

        return res.status(201).send(user);
      } catch (error) {
        return res.status(400).send("Invalid username or password");
      }
    default:
      break;
  }
}