const express = require("express");
const { getallplaces, getallplacesTesting } = require("../controller/places"); // Keep only this import

const router = express.Router();

router.route("/").get(getallplaces);
router.route("/testing").get(getallplacesTesting);

module.exports = router;
