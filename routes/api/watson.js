const router = require("express").Router();
const watson = require("../../controllers/watsonController")

// route "/api/watson/:input"
router.route("/:input")
    .get(watson.sendToWatson)

module.exports = router;