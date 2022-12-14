const express = require("express");

const methodOverride = require("method-override");

const router = express.Router();

router.use(methodOverride("_method"));

router.use(express.json());
const reviewCtrl = require("../controllers/reviews");

router.get("/review/add", reviewCtrl.review_create_get);
router.post("/review/add", reviewCtrl.review_create_post);
router.delete("/review/delete", reviewCtrl.review_delete_get);
router.get("/review/edit", reviewCtrl.review_edit_get);
router.put("/review/update", reviewCtrl.review_update_put);

module.exports = router;
