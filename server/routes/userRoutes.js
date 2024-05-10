const router = require("express").Router();
const userCtrl = require("../controllers/user.controller");
const auth = require("../middleware/auth.middleware");

router.route("/user/:id").get(auth, userCtrl.getUserData);
router.route("/user/register/").post(userCtrl.registration);
router.route("/user/login/").post(userCtrl.login);
router.route("/user/logout/").post(userCtrl.logout);

module.exports = router;
