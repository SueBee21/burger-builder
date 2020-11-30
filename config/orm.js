var connection = require("./connection");
var orm = {
    selectAll:function(tableName, cbModel){
        connection.query("SELECT * FROM ??", tableName, function(error, data){
            cbModel(data);
        });
    }
};
module.exports = orm;