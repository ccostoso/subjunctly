import 'whatwg-fetch';

export default {
    // Gets all expressions
    getExpressions: function () {
        return fetch('/api/expressions/');
    },
    // Gets the expressions with the given id
    getExpression: function (name) {
        // return axios.get("/api/expressions/" + name);
    },
    // Deletes the expressions with the given id
    deleteExpression: function (id) {
        // return axios.delete("/api/expressions/" + id);
    },
    // Saves a expressions to the database
    saveExpression: function (bookData) {
        // return axios.post("/api/expressions", expressionData);
    }
};
