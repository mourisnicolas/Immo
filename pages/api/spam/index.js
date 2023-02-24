import dbConnect from "../../../lib/dbConnect";
import Spam from "../../../models/spam";

export default async function handler(req, res) {
  const { method, body } = req
  await dbConnect();

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
      try {

        let p = await Spam.findOne({ email: body.email });
        if(p) {
          return res.status(201).send("k k");
        }
        
        let spam = new Spam(body);
        await spam.save();

        return res.status(201).send("k k");
      } catch (error) {
        console.log(error)
        return res.status(400).send("Invalid username or password");
      }
    default:
      break;
  }
}
