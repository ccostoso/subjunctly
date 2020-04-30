const db = require("../models");

// Defining methods for the expressionsController
module.exports = {
    pullList: function(req, res) {
        var query = {};
        if (req.query.name) {
            query.name = req.query.name;
        }

        db.Expression.findAll({
            where: query,
            attributes: ["name", "type"],
        }).then(function (dbExpression) {
            res.json(dbExpression);
        })
    },
    // GET route for getting all of the expressions
    findAll: function (req, res) {
        var query = {};
        if (req.query.name) {
            query.name = req.query.name;
        }
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Expression
        db.Expression.findAll({
            where: query,
            // include: [db.Expression]
        }).then(function (dbExpression) {
            res.json(dbExpression);
        });
    },
    // Get route for retrieving a single expression
    findById: function (req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Expression
        db.Expression.findOne({
            where: {
                id: req.params.id
            },
            // include: [db.Expression]
        }).then(function (dbExpression) {
            res.json(dbExpression);
        });
    },
    // POST route for saving a new expression
    create: function (req, res) {
        db.Expression.create(req.body).then(function (dbExpression) {
            res.json(dbExpression);
        });
    },
    // PUT route for updating expressions
    update: function (req, res) {
        db.Book
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // DELETE route for deleting expressions
    remove: function (req, res) {
        db.Expression.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbExpression) {
                res.json(dbExpression);
            });
    }
};
