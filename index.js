 /*for ([initialization]; [condition]; [iteration]) {
    [loop body]
  }

for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  debugger;
}

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];
function wrapGrifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGrifts(gifts);

*/
const peopleToThank = ["Guadalupe", "Ollie", "Aki"]
const peopleThanked = []
function writeCards(peopleToThank) {
    for (let i =0; i < peopleToThank.length; i++) {
        peopleThanked.push(`Thank you, ${peopleToThank[i]}, for the wonderful surprise gift!`) 
    }
    return peopleThanked
}
function countDown(number) {
    console.log(number)
    while ( number > 0 ) {    
    number--
    console.log(number)
    }
}
