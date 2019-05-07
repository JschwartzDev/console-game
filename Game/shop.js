function shop(){
  console.log("Welcome to the shop, traveler!");
  console.log("We have a couple good items in for you to look at.");

  function choose(){
    console.log("1: potions - 40g/ea");
    console.log("2: rusty sword - 200g");
    console.log("3: chain mail - 500g");
    console.log("4: leave shop");

    let input = prompt("Looking to buy?");

    switch(input){
      case "1":
        if(player.gold >= 40){
          player.potionCount++;
          console.log("Done deal!");
          console.log("You now have " + player.potionCount + " potions.");
          choose();
        } else {
          console.log("Sorry, you don't have enough gold.");
          choose();
        }
      break;
      case "2":
        if(player.gold >= 200){
          player.inventory.push("rusty sword");
          player.strength += 20;
          console.log("I suppose I can part with it.");
          console.log("You have succesfully purchased a 'rusty sword'!");
          choose();
        } else {
          console.log("Sorry, you don't have enough gold.");
          choose();
        }
      break;
      case "3":
        if(player.gold >= 500){
          player.inventory.push("chain mail");
          player.health += 300;
          console.log("Big spender, eh?");
          console.log("You have succesfully purchased 'chain mail'!")
          choose();
        } else {
          console.log("Sorry, you don't have enough gold.");
          choose();
        }
      break;
      case "4":
        console.clear();
        console.log("Come back soon!");
        main();
      break;
    }
  }

  choose();
}
