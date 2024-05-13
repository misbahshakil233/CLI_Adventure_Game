import inquirer from 'inquirer';
import chalk from "chalk"

class player{
	name : string;
	fuel : number = 100;

	constructor(name: string){
		this.name = name
	};

//Function//
fuelDecrease(){
	let fuel = this.fuel - 25
	this.fuel = fuel
};

fuelIncrease(){
	this.fuel = 100;
};
};

class opponent {
  name: string;
  fuel: number = 100;

  constructor(name: string) {
    this.name = name;
  };

  //Function//
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  };
};

let Player = await inquirer.prompt(
	{
		name: "name",
		type: "input",
		message: ("please enter your name")
	}
);

let Opponent = await inquirer.prompt(
	[
		{
		name: "select",
		type: "list",
		message:(chalk.bold.whiteBright( "Select your opponent")),
		choices: [
		"1.skeleton",
		"2.zombbie",
		"3.Worrier"]
	}
]
);

let player1 = new player(Player.name);
let opponent1 = new opponent(Opponent.select)

do
{

//SKELETON//
	if (Opponent.select === "skeleton") {

   let ask = await inquirer.prompt([
    {
       name: "option",
       type: "list",
       message:"select your opponent",
       choices: [
						" Attack",
					  "Run for your life",
						" Drink portion"],
        },
      ]);

  if (ask.option === "Attack") {

  let damage = Math.floor(Math.random() * 2);

  if (damage > 0) {

   player1.fuelDecrease();
     console.log(
        chalk.italic.blue
          (`=> you strike the ${player1.name} for ${player1.fuel} damage.`));
     console.log(
       chalk.italic.magenta
          (`=> you strike the ${opponent1.name} for ${opponent1.fuel} damage.`));
        };

 if (player1.fuel <= 0) {
      console.log(chalk.bold.red("=> you are too weak to go on! SORRY!!"));

      process.exit();
 };

  if (damage <= 0) {

   opponent1.fuelDecrease();
     console.log(
       chalk.italic.magenta
        (`=> you strike the ${player1.name} for ${player1.fuel} damage .`));
      console.log(
         chalk.italic.blue
            (`=> you strike the ${opponent1.name} for ${opponent1.fuel} damage.`));

 if (opponent1.fuel <= 0) {
            console.log("you win");

      process.exit();
 };
   };
     };

 if (ask.option === "Run for your life") {
        console.log(
          chalk.bold.magentaBright
					("You loose 🥺 Better luck for next time 🙂"));
      };

 if (ask.option === "Drink portion") {

   player1.fuelIncrease();
     console.log(
       chalk.bold.magentaBright(`> You drink a health potion, healing yourself 🥂, your health is ${player1.fuel}`));

     process.exit();
 }
}
//zommbie
if (Opponent.select === "zombbie") {

    let ask = await inquirer.prompt([
     {
        name: "option",
        type: "list",
        message:"select your opponent",
        choices: [
                         " Attack",
                       "Run for your life",
                         " Drink portion"],
         },
       ]);
 
   if (ask.option === "Attack") {
 
   let damage = Math.floor(Math.random() * 2);
 
   if (damage > 0) {
 
    player1.fuelDecrease();
      console.log(
         chalk.italic.blue
           (`=> you strike the ${player1.name} for ${player1.fuel} damage.`));
      console.log(
        chalk.italic.magenta
           (`=> you strike the ${opponent1.name} for ${opponent1.fuel} damage.`));
         };
 
  if (player1.fuel <= 0) {
       console.log(chalk.bold.red("=> you are too weak to go on! SORRY!!"));
 
       process.exit();
  };
 
   if (damage <= 0) {
 
    opponent1.fuelDecrease();
      console.log(
        chalk.italic.magenta
         (`=> you strike the ${player1.name} for ${player1.fuel} damage .`));
       console.log(
          chalk.italic.blue
             (`=> you strike the ${opponent1.name} for ${opponent1.fuel} damage.`));
 
  if (opponent1.fuel <= 0) {
             console.log("you win");
 
       process.exit();
  };
    };
      };
 
  if (ask.option === "Run for your life") {
         console.log(
           chalk.bold.magentaBright
                     ("You loose 🥺 Better luck for next time 🙂"));
       };
 
  if (ask.option === "Drink portion") {
 
    player1.fuelIncrease();
      console.log(
        chalk.bold.magentaBright(`> You drink a health potion, healing yourself 🥂, your health is ${player1.fuel}`));
 
      process.exit();
  }
 }

 //worrier
 if (Opponent.select === "worrier") {

    let ask = await inquirer.prompt([
     {
        name: "option",
        type: "list",
        message:"select your opponent",
        choices: [
                         " Attack",
                       "Run for your life",
                         " Drink portion"],
         },
       ]);
 
   if (ask.option === "Attack") {
 
   let damage = Math.floor(Math.random() * 2);
 
   if (damage > 0) {
 
    player1.fuelDecrease();
      console.log(
         chalk.italic.blue
           (`=> you strike the ${player1.name} for ${player1.fuel} damage.`));
      console.log(
        chalk.italic.magenta
           (`=> you strike the ${opponent1.name} for ${opponent1.fuel} damage.`));
         };
 
  if (player1.fuel <= 0) {
       console.log(chalk.bold.red("=> you are too weak to go on! SORRY!!"));
 
       process.exit();
  };
 
   if (damage <= 0) {
 
    opponent1.fuelDecrease();
      console.log(
        chalk.italic.magenta
         (`=> you strike the ${player1.name} for ${player1.fuel} damage .`));
       console.log(
          chalk.italic.blue
             (`=> you strike the ${opponent1.name} for ${opponent1.fuel} damage.`));
 
  if (opponent1.fuel <= 0) {
             console.log("you win");
 
       process.exit();
  };
    };
      };
 
  if (ask.option === "Run for your life") {
         console.log(
           chalk.bold.magentaBright
                     ("You loose 🥺 Better luck for next time 🙂"));
       };
 
  if (ask.option === "Drink portion") {
 
    player1.fuelIncrease();
      console.log(
        chalk.bold.magentaBright(`> You drink a health potion, healing yourself 🥂, your health is ${player1.fuel}`));
 
      process.exit();
  }
 }

}
while(true);
