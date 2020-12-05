
$(function() {
    $(".devour-burger").on("click", function (event) {
        var id = $(this).data("id");

        var newDevouredList = {
            devoured: 1
        };


        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredList
        }).then(
            function () {
                console.log("burger is devoured");
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurgerList = {
            burger_name: $("#new").val().trim(),
            devoured: 0
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
