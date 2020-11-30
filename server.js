var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
var expressHandlebars = require("express-handlebars");
app.engine("handlebars", expressHandlebars({defaultLayout:"main"}));
app.set("view engine", "handlebars");

var burgerController = require("./controllers/burgers_controller.js");
app.use(burgerController);
app.listen(PORT, function(){
    console.log("App is listening on port" + PORT);
});