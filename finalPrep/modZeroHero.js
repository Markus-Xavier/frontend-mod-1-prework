// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings

var heroName = 'Rat Man';
var specialAbility = 'Rat Attack';

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = 'I ' + heroName + ' AM the rodent!'
var catchPhrase = `Now that's a ${specialAbility}!`

// Declare two variables - power AND energy - set to integers

var power = 9001;
var energy = 2;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = power * 500;
var fullEnergy = energy + 150;

// Declare two variables - isHuman and identityConcealed - assigned to booleans

var isHuman = false;
var identityConcealed = true;


// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ['Citrus', 'The Slithery Snake', 'The Rat Trap']
var sideKicks = ['Cat Man', 'Mouse Girl', 'Cheese Wheel'];

// Print the first sidekick to your console
console.log(sideKicks[0]);

// Print the last archEnemy to the console
console.log(archEnemies[archEnemies.length - 1]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push('Farmer Joe');
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
sideKicks.shift();
// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sideKicks);
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day 
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

var assessSituation = function(dangerLevel, saveTheDay, badExcuse) {
    dangerLevel = dangerLevel;
    saveTheDay = saveTheDay;
    badExcuse = badExcuse;

    if(dangerLevel > 50){
        console.log(badExcuse);
    } else if (dangerLevel <= 50 && dangerLevel > 10){
        console.log(saveTheDay);
    } else {
        console.log('Meh. Hard pass.');
    }
}


//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
assessSituation(99, announcement, excuse) //> Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
assessSituation(21, announcement, excuse) //> should print - 'Never fear, the Courageous Curly Bracket is here!'
assessSituation(3, announcement, excuse) //> should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster = {
    name: 'Horse Man',
    smell: 'Stinky',
    weight: 100,
    citiesDestroyed: ['London', 'Chicago'],
    luckyNumbers: [7,3,8],
    address: {
        number: 1337,
        street: 'Spooky Lane',
        state: 'Washington',
        zip: 15376
    }
};


// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name 
//   - superpower
//   - age 
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50 

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

class SuperHero {
    constructor(name, superPower, age){
        this.name = name;
        this.superPower = superPower;
        this.age = age;
        this.archEnemies = 'The Syntax Error';
        this.powerLevel = 100;
        this.energyLevel = 50;
    }

}

// - Create 2 instances of your SuperHero class

var theProgramer = new SuperHero('The Programer', 'Patience', 24);
var genericHero = new SuperHero('Cool Guy', 'Super Strength', 30);


// Reflection
// What parts were most difficult about this exerise?
//Remembering the basic class skeleton. 
// What parts felt most comfortable to you?
// Everything in this exercise felt comfortable to me!
// What skills do you need to continue to practice before starting Mod 1?
// Practice naming stuff to ensure I am being descriptive enough!
