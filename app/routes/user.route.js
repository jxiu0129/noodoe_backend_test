import express from "express";
import user from "../controllers/user.controller";

const router = express.Router();

router.route("/Register").get(user.register);
router.route("/Login").get(user.login);

export default router;
