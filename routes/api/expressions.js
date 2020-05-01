const router = require("express").Router();
const expressionsController = require("../../controllers/expressionsController");

// Matches with "/api/expressions"
router.route("/")
  // .get(expressionsController.findAll)
  .post(expressionsController.create);
  
// Matches with "/api/expressions/:id"
router
  .route("/:id")
  .get(expressionsController.findWhere)
  .get(expressionsController.findById)
  .put(expressionsController.update)
  .delete(expressionsController.remove);

module.exports = router;
