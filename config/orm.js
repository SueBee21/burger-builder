var connection = require("./connection");
var orm = {
    selectAll: function (tableName, cb) {
        connection.query("SELECT * FROM ??", tableName, function (error, data) {
            if (error) throw error;
            cb(data);
        });
    },
    // create burger
    insertOne: function (tableName, name, cb) {
        connection.query('INSERT INTO burgers (burger_name, devoured) VALUES ("?", false);', name, function (error, data) {
            if (error) throw error;
            cb(data);
        });
    },
    // update burger
    updateOne:function(tableName, id, cb) {
        connection.query('UPDATE burgers SET devoured = true WHERE id = ?;', id, function(error, data){
            if (error) throw error;
            cb(data);
        });
    },
};
module.exports = orm;