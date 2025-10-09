import {
    Router
} from "express";

import {
    addUser,
    getUser
} from "../controller/user.controller.js";


const router = Router();

router.post("/add", addUser)

router.get("/all", getUser);



export default router;