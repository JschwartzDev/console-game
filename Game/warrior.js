let warriorCreator = new Function("empty",`
  this.name = "Warrior";
  this.rand = Math.floor(Math.random() * 10);
  this.level = 1;
  this.health = 200;
  this.potHealAmount = 50;
  this.potionCount = 3;
  this.gold = 1000;
  this.strength = 18;
  this.inventory = [];
  this.combat = function(){

    let attacks = {
      overPower: Math.floor(Math.random() * 30) + 5,
      cleave: Math.floor(Math.random() * 30) + 5,
      slam: Math.floor(Math.random() * 30) + 5,
      maul: Math.floor(Math.random() * 30) + 5,
      execute: Math.floor(Math.random() * 30) + 5,
      revenge: Math.floor(Math.random() * 30) + 5,
      heroicStrike: Math.floor(Math.random() * 30) + 5,
      throwWeapon: Math.floor(Math.random() * 30) + 5,
      hamstring: Math.floor(Math.random() * 30) + 5,
      blaseFlurry: Math.floor(Math.random() * 30) + 5,
    }

    let keys = [];
    function keyReader(object, array){
      for(let key in object){
        array.push(key);
      }
    }

    keyReader(attacks,keys);
    return attacks[keys[this.rand]];
  }
`);
