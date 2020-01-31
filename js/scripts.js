// //business logic
// function Pizza(pSize,pToppings,regPizza) {
//   this.pSize = pSize,
//   this.pToppings = pToppings,
//   this.regPizza = regPizza,
//   this.cost = 0
// }
//
//
//
//   //user logic
// var newOrder = new PizzaOrder();
//
// function displayCost(pizzaOrderToDisplay) {
//   var orderDisplay = $("p#totalCost").val();
//   var orderHtml = "";
//
//
// }
//
//   $(document).ready(function() {
//     $("form").submit(function(event) {
//       event.preventDefault();
//       var pizzaSize = $(".pizza-size").val();
//       var pizzaToppings = $(".toppings").val();
//       var regPizza = $(".regular-pizzas").val();
//       var pizza = new Pizza(size, topping, regular);
//       pizza
//     });
//   });
//




  //business logic
  function Pizza(pSize,pToppings,regPizza) {
    this.pSize = pSize,
    this.pToppings = pToppings,
    this.regPizza = regPizza,
    this.cost = 0
  }

  Pizza.prototype.pizzaCalc = function() {
    var price = addedFees();
    return this.cost
  }

  function checkStartPrice(pizza) {
    if (pizza.pSize === "smallPizza"){
      pizza.cost = 9
    } if (pizza.pSize === "mediumPizza"){
      pizza.cost = 12
    } if (pizza.pSize === "largePizza"){
      pizza.cost = 16
    } if (pizza.regPizza === "classic"){
      pizza.cost = 13
    }
    addedFees(pizza)
  };

  function addedFees(pizza) {
    if (pizza.pSize || pizza.pToppings ||pizza.regPizza === "none"){
      pizza.cost += 0
    } if (pizza.pToppings === "meat"){
      pizza.cost += 4
    } if (pizza.pToppings === "veggie"){
      pizza.cost += 2
    } if (pizza.pToppings === "cheese"){
      pizza.cost += 1
    }



    //user logic

    $(document).ready(function() {
      $("form").submit(function(event) {
        event.preventDefault();
        var pizzaSize = $(".pizza-size").val();
        var pizzaToppings = $(".toppings").val();
        var regPizza = $(".regular-pizzas").val();
        var pizza = new Pizza(size, topping, regular);
        // var fPrice = order.pizzaCalc();
        $("#cost").text(fPrice);
        checkStartPrice(pizza);
      });
    });
