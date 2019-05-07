function loot(){
  let rand = Math.floor(Math.random() * 10)+ 1;
  let lootTable = ["potion","gold coins","potion",
                  "gold coins","potion","gold coins",
                  "potion","gold coins", "potion","gold coins"];

  if(lootTable[rand] === "potion"){
    player.potionCount++;
    console.log("The enemy dropped a potion! You now have " + player.potionCount + " health potions!");
  } else if(lootTable[rand] === "gold coins"){
    player.gold += 25;
    console.log("The enemy dropped 25 gold coins! You now have " + player.gold + " coins!");
  }
}
