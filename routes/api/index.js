const router = require("express").Router();
const expressionRoutes = require("./expressions");

// Expression routes
router.use("/expressions", expressionRoutes);

module.exports = router;
