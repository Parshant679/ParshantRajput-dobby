import express from "express";
import userCtrl from "../controllers/user.controller";
import auth from "../middleware/auth.middleware";
const router = express.Router();

router.route("/user/:id").get(auth, userCtrl.getUserdata);
router.route("/user/register/").post(userCtrl.registration);
router.route("/user/login/").post(userCtrl.login);
router.route("/user/logout/").post(userCtrl.logout);

export default router;
