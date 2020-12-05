var router = require("express").Router();
var burger = require("../models/burger");
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        res.render("index", { burgers: data });
    });
});;

router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function (data) {
        res.json({ id: data.insertId });
    });
});

// update burger
router.put("/api/burgers/:id", function (req, res) {
    burger.updateOne([
        "devoured", "id"
    ], [
        req.body.devoured, req.params.id
    ], function (data) {
        res.json({ id: data.insertId });
    });
});

module.exports = router;