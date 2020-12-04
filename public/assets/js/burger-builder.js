



// // Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newDevoured");
  
      var newDevouredState = {
        devoured: newDevoured
      };
  

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("burger is devoured", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {

      event.preventDefault();
  
      var newBurgerList = {
        name: $("#ca").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurgerList
      }).then(
        function() {
          console.log("created new burger list");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  });
  