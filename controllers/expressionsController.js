const db = require("../models");
const { Op } = require("sequelize");

// Defining methods for the expressionsController
module.exports = {
    // GET route for getting all of the expressions with given parameters
    findWhere: function (req, res) {
        // const query = req.params.id.toLowerCase().split(" ").map(string => `%${string}%`)
        // const mappedQuery = query.map(str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
        const query = `%${req.params.id.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}%`
        console.log("!!!!!!!!!!!");
        console.log("QUERY", query);
        console.log("!!!!!!!!!!!");
        if (req.params.id) {
            db.Expression.findAll({
                where: {
                    plain_name: {
                        [Op.like]: query
                        // {
                        //     [Op.any]: mappedQuery
                        // }
                    }
                },
                attributes: ["name", "type", "source_html", "id"],
                limit: 10
            }, 
            {}
            ).then(function (dbExpression) {
                res.json(dbExpression);
            })
        }
    },
    // Get route for retrieving a single expression
    findOne: function (req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Expression
        db.Expression.findOne({
            where: {
                source_html: req.params.id
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
