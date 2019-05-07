function main(){
  console.log("You have two options currently.");

  function choose(){
    console.log("1: Seek out combat!");
    console.log("2: Go to the Shop!");
    console.log("3: Exit the game...");

    let input = prompt("What will you chose?!");
    let valid = {
      "1": "yes",
      "2": "yes",
      "3": "yes"
    }

    if(input in valid){
      switch(input){
        case "1":
          console.clear();
          combat();
        break;
        case "2":
          console.clear();
          shop();
        break;
        case "3":
          console.clear();
          player = null;
          game();
      }
    } else {
      console.log("Invalid input");
      choose();
    }
  }

  choose();
}
