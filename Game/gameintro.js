function intro(){
  console.log("-------------------------------------");
  console.log("-------Welcome to console WoW--------");
  console.log("-------------------------------------");

  console.log("There are 3 classes to chose from");
  console.log("1: Warrior, health - 200, strength - 20");
  console.log("2: Rogue, health - 125, strength - 13");
  console.log("3: Paladin, health - 150, strength - 15");
  console.log("type 1, 2 or 3 to chose the corresponding class");


  function check(){
    let input = prompt("Which class will you chose?");
    let valid = {
      "1": "yes",
      "2": "yes",
      "3":"yes"
    }
    if(input in valid){
      switch(input){
        case "1":
        player = new warriorCreator();
        break;
        case "2":
        player = new rogueCreator();
        break;
        case "3":
        player = new paladinCreator();
        break;
      }
    } else {
      console.log("Not a valid class option");
      check();
    }
  }

  check();

}
