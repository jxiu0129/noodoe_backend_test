import express from "express";
import weather from "./weather.route";
import user from "./user.route";

const router = express.Router();

router.use("/Weather", weather);
router.use("/User", user);

export default router;
