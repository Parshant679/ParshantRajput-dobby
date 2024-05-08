import express from "express";

const router = express.Router();

function testimageRoute() {}

// uploading image
router.post("/image/", testimageRoute);
//  retrive image
router.get("/image/", testimageRoute);
// delete image
router.delete("/image/", testimageRoute);

export default router;
