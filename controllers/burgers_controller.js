var router = require("express").Router();
var burgerModel = require("../models/burger");
const burger = require("../models/burger");
router.get("/", function(req, res){
    burgerModel.selectAll(function(data){
        res.render("index", {burgers:data});
    });
});;


// create new burger

router.post("/api/burger", function(req, res){
    burgerModel.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(data){
        res.json({id: data.insertId});
    });
});

// update burger
router.put("/api/burger/:id", function(req, res){
    burger.update({
        devoured: req.body.devoured
    }, req.params.id, function(data){
        res.json({id: data.insertId});
    });
});
  


module.exports = router;