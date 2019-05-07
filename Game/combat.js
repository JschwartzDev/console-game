function combat(){
  let rand = Math.floor(Math.random() * 10);
  let enemy = enemyList[rand];
  console.log("An " + enemy.name + " has appeared!");

  function choose(){
    console.log("1: attack");
    console.log("2: drink potion");
    console.log("3: run away!");
    let input = prompt("Type the corresponding number to chose");

    switch(input){
      case "1":
        let playerDmg = player.combat();
        let enemyDmg = enemy.attack;
        enemy.health -= playerDmg;
        player.health -= enemyDmg;
        if(enemy.health <= 0){
          console.log("You have killed the " + enemy.name + "!");
          loot();
          break;
        } else if(player.health <= 0){
          console.log("You have died!");
          break;
        } else {
          console.clear();
          console.log("You strike the " + enemy.name + " for " + playerDmg + " the " + enemy.name + " now has " + enemy.health + " health!");
          console.log("You have been struck for " + enemyDmg + " you now have " + player.health);
          choose();
        }
      break;
      case "2":
        if(player.potionCount >= 1){
          player.health += player.potHealAmount;
          player.potionCount--;
          console.log("You are now at " + player.health);
          choose();
        } else {
          console.log("You don't have any more potions!");
          choose();
        }

      break;
      case "3":
        console.clear();
        console.log("You run for your life!");
        main();
      break;
    }
  }
  while(enemy.health >= 1){
    choose();
  }

  combat();
}
