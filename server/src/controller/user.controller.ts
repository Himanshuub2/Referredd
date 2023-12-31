import { Request, Response } from "express";

class User {
  constructor() {}

  signup(req: Request, res: Response) {
    const { body } = req;
    console.log(body);
  }

  login() {}
}

module.exports = new User();
