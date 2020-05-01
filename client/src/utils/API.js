import 'whatwg-fetch';

export default {
    // Gets all expressions
    getExpressions: function (search) {
        return fetch('/api/expressions/' + search)
            // .then(response => response.json())
            // .then(data => console.log(data));
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
