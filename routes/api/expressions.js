const router = require("express").Router();
const expressionssController = require("../../controllers/expressionsController");

// Matches with "/api/books"
router.route("/")
  .get(expressionssController.findAll)
  .post(expressionssController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(expressionssController.findById)
  .put(expressionssController.update)
  .delete(expressionssController.remove);

module.exports = router;
