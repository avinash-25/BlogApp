//! 1) destructure Router from express
//! 2) call the top level function
//! 3) export it

import { Router } from "express";
import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controller/user.controller.js";

let router = Router();

router.post("/add", addUser);
router.get("/all", getUsers);

router.get("/one/:id", getUser); //? ":xyz" ==> params (parameters)

router.patch("/update/:id", updateUser);

router.delete("/delete/:id", deleteUser);

export default router;
