
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

let cardOne = cards[0];
let cardTwo = cards[2];


cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped" + " " + cardsInPlay);


if (cardsInPlay.length === 2) {
	if (cardOne === cardTwo) {
		alert ('You found a match!');
	} else {
		alert ('Sorry, try again');
	}
}