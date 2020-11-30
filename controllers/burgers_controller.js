var router = require("express").Router();
var burgerModel = require("../models/burger");
router.get("/", function(req, res){
    burgerModel.selectAll(function(data){
        res.render("index", {burgers:data});
    });
});;
module.exports = router;