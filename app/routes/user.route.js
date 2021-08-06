import express from "express";
import user from "../controllers/user.controller";

const router = express.Router();

router.route("/Register").post(user.register);
router.route("/Login").post(user.login);

export default router;
