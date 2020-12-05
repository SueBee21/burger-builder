var orm = require("../config/orm");
var burger = {
    selectAll: function(cbController){
        orm.selectAll("burgers", function(data){
            cbController(data);
        });
    },
    insertOne: function(columns, values, cbController) {
        orm.insertOne("burgers", columns, values, function(data){
            cbController(data);
        })
    },
    updateOne: function(columns, values, cbController) {
        orm.updateOne("burgers", columns, values, function(data){
            cbController(data)
        })
    }
};
module.exports = burger;