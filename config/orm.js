var connection = require("./connection");
var orm = {
    selectAll:function(tableName, cbModel){
        connection.query("SELECT * FROM ??", tableName, function(error, data){
            if (error) throw error;
            cbModel(data);
        });
    }
};
module.exports = orm;