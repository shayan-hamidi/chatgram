import { Request, Response, Router } from "express";
import { User } from "./userModel";
const jwt = require("jsonwebtoken");

const router = Router();

router.post("/auth", async (req: Request, res: Response) => {
  const user = new User(req.body);
  try {
    await user.save();
    const accessToken = jwt.sign(
      user.toObject(),
      process.env.ACESS_TOKEN_SECRET!
    );
    res.setHeader("Set-Cookie", `user=${accessToken}; Path=/`);
    res.send("user created");
  } catch (err) {
    console.log(err);
  }
});

router.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    console.log(err);
  }
});

router.get("/user", async (req: Request, res: Response) => {
  try {
    const data = await jwt.verify(
      req.headers.authorization!,
      process.env.ACESS_TOKEN_SECRET!
    );
    const user = await User.find({ email: data?.email });
    res.send(user);
  } catch (err) {
    console.log(err);
  }
});

router.get("/messages", async (req: Request, res: Response) => {
  const { sender, reciever } = req.query;
  const user = await User.find({ email: reciever });
  const filteredUser = user[0]?.messages?.filter(
    (message: any) =>
      (message.sender === sender && message.reciever === reciever) ||
      (message.sender === reciever && message.reciever === sender)
  );
  res.send(filteredUser);
});

export default router;
