var mysql = require("mysql");
var connection = mysql.createConnection(process.env.JAWSDB_URL);
connection.connect(function(error){
    if (error) throw error;
    console.log("connection id", connection.threadId);
})
module.exports = connection;