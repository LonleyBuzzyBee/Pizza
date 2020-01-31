//business logic









//user logic
$(document).ready(function() {
  $("#ticket").hide();
  $("form").submit(function(event) {
    event.preventDefault();
    var p-size = $(".pizza-size").val();
    var p-toppings = $(".toppings").val();
    var r-pizza = $(".regular-pizzas").val();
    var pizza = new Pizza(size, topping, regular);
  });
});
