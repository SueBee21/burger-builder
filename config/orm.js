var connection = require("./connection");
var orm = {
    selectAll: function (tableName, cb) {
        connection.query("SELECT * FROM ??", tableName, function (error, data) {
            if (error) throw error;
            cb(data);
        });
    },
    // create burger
    insertOne: function (tableName, columns, values, cb) {
        connection.query('INSERT INTO ?? (??, ??) VALUES (?, ?);', [tableName, columns[0], columns[1], values[0], values[1] ], function (error, data) {
            if (error) throw error;
            cb(data);
        });
    },
    // update burger
    updateOne:function(tableName, columns, values, cb) {
        connection.query('UPDATE ?? SET ?? = ? WHERE ?? = ?;', [tableName, columns[0], values[0], columns[1], values[1]], function(error, data){
            if (error) throw error;
            cb(data);
        });
    },
};
module.exports = orm;