var apiRoutes = require("./apiRoutes");
var htmlRoutes = require("./htmlRoutes");
var router = require("express").Router();

router.use("/api", apiRoutes);
router.use("/", htmlRoutes);

module.exports = router;