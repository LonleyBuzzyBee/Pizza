

  //business logic
  function Pizza(pSize,mTopping,vTopping,cheeseTopping) {
    this.pSize = pSize,
    this.mTopping = mTopping,
    this.vTopping = vTopping,
    this.cheeseTopping = cheeseTopping,
    this.cost = 0
  }

  Pizza.prototype.startCost = function() {
      if (pizza.pSize === "smallPizza"){
        pizza.cost = 9
      } if (pizza.pSize === "mediumPizza"){
        pizza.cost = 12
      } if (pizza.pSize === "largePizza"){
        pizza.cost = 16
  }
}
  Pizza.prototype.addMeat = function() {
    if (pizza.mTopping === "meat1"){
      pizza.cost += 2
    } if (pizza.mTopping === "meat2"){
      pizza.cost += 1
    } if (pizza.mTopping === "meat3"){
      pizza.cost += 3
  }
}
  Pizza.prototype.addVeggie = function() {
    if (pizza.vTopping === "veggie1"){
      pizza.cost += 3
    } if (pizza.vTopping === "veggie2"){
      pizza.cost += 2
    } if (pizza.vTopping === "veggie3"){
      pizza.cost += 1
  }
}
  Pizza.prototype.addCheese = function() {
    if (pizza.cheeseTopping=== "cheese1"){
      pizza.cost += 1
    } if (pizza.cheeseTopping === "cheese2"){
      pizza.cost += 2
    } if (pizza.vTopping === "cheese3"){
      pizza.cost += 2
  }
}
Pizza.prototype.addTotals = function() {
  var
}


// function printTotal() {
// var pizzaF = Pizza();
//     $("#cost").text();
//     $("#totalCost").html(pizzaF.cost);
// }


    //user logic

    $(document).ready(function() {
      $("form").submit(function(event) {
        event.preventDefault();
        var pizzaSize = $(".pizza-size").val();
        var meatTopping = $("meat-topping").val();
        var vegetableTopping = $("vegetable-topping").val();
        var cheeses = $("cheese").val();
        var pizza = new Pizza(pizzaSize, meatTopping, vegetableTopping, cheeses);
        // $("#cost").text();
        printTotal(pizza);
        // printTotal(piz;
      });
    });

    // no bueno


    // function checkStartPrice(pizza) {
    //   if (pizza.pSize === "smallPizza"){
    //     pizza.cost = 9
    //   } if (pizza.pSize === "mediumPizza"){
    //     pizza.cost = 12
    //   } if (pizza.pSize === "largePizza"){
    //     pizza.cost = 16
    //   } if (pizza.regPizza === "classic"){
    //     pizza.cost = 13
    //   }
    //   addedFees(pizza)
    // };
    //
    // function addedFees(pizza) {
    //   if (pizza.pSize || pizza.pToppings ||pizza.regPizza === "none"){
    //     pizza.cost += 0
    //   } if (pizza.pToppings === "meat"){
    //     pizza.cost += 4
    //   } if (pizza.pToppings === "veggie"){
    //     pizza.cost += 2
    //   } if (pizza.pToppings === "cheese"){
    //     pizza.cost += 1
    //   }
    //
