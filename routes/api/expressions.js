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
  .put(expressionsController.update)
  .delete(expressionsController.remove);

router
  .route("/details/:id")
  .get(expressionsController.findOne);

module.exports = router;
