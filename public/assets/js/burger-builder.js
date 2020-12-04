
$(function() {
    $(".devour-burger").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newDevoured");

        var newDevouredList = {
            devoured: newDevoured
        };


        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredList
        }).then(
            function () {
                console.log("burger is devoured", newDevoured);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurgerList = {
            name: $("#new").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurgerList
        }).then(
            function () {
                console.log("created new burger list");
                location.reload();
            }
        );
    });

});
