import express from "express";
import userCtrl from "../controllers/user.controller";
const router = express.Router();

router.get("/user/:id", userCtrl.getUserdata);
router.post("/user/register/", userCtrl.registration);
router.post("/user/login/", userCtrl.login);
router.post("/user/logout/", userCtrl.logout);

export default router;
