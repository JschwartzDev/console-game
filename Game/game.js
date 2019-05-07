let input = prompt("READ ALL STEPS BEFORE EXECUTING ANY:\nBefore entering anything into this prompt:\npress ctrl+shift+i to open console\nOnce console is open: cancel this prompt and press ctrl+shift+r\nThis prompt will come up again, now type 'run' to run the game.");

function game(){
  let player = null;
  intro();
  main();
}

if(input === "run"){
    game();
}
