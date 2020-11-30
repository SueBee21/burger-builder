var router = require("express").Router();
var burgerModel = require("../models/burger");
router.get("/", function(req, res){
    burgerModel.selectAll(function(data){
        res.render("index", {burgers:data});
    });
});;


// create new burger


module.exports = router;