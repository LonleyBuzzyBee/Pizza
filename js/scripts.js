

  //business logic
  function Pizza(pSize,mTopping,vTopping,cheeseTopping) {
    this.pSize = pSize,
    this.mTopping = mTopping,
    this.vTopping = vTopping,
    this.cheeseTopping = cheeseTopping,
    this.cost = 0
  }

  Pizza.prototype.startCost = function() {
      if (this.pSize === "smallPizza"){
        this.cost = 9
      } if (this.pSize === "mediumPizza"){
        this.cost = 12
      } if (this.pSize === "largePizza"){
        this.cost = 16
  }
}
  Pizza.prototype.addMeat = function() {
    if (this.mTopping === "meat1"){
      this.cost += 2
    } if (this.mTopping === "meat2"){
      this.cost += 1
    } if (this.mTopping === "meat3"){
      this.cost += 3
  }
}
  Pizza.prototype.addVeggie = function() {
    if (this.vTopping === "veggie1"){
      this.cost += 3
    } if (this.vTopping === "veggie2"){
      this.cost += 2
    } if (this.vTopping === "veggie3"){
      this.cost += 1
  }
}
  Pizza.prototype.addCheese = function() {
    if (this.cheeseTopping=== "cheese1"){
      this.cost += 1
    } if (this.cheeseTopping === "cheese2"){
      this.cost += 2
    } if (this.vTopping === "cheese3"){
      this.cost += 2
  }
}
// Pizza.prototype.addTotals = function() {
//   var addedTotal = this.pSize +



function printTotal(pizza) {
    console.log(pizza);
    $("#cost").text();
    $("#totalCost").html();
}


    //user logic

    $(document).ready(function() {
      $("form").submit(function(event) {
        event.preventDefault();
        var pizzaSize = $(".pizza-size").val();
        var meatTopping = $("meat-topping").val();
        var vegetableTopping = $("vegetable-topping").val();
        var cheeses = $("cheese").val();
        var pizza = new Pizza(pizzaSize, meatTopping, vegetableTopping, cheeses);
        pizza.startCost();
        pizza.addMeat();
        pizza.addVeggie();
        pizza.addCheese();
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
