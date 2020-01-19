
var cards = [

{	rank: "queen",
 	suit: "hearts",
 	cardImage: "images/queen-of-hearts.png"
},

{ 
	rank: "queen",
 	suit: "diamonds",
 	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
 	suit: "hearts",
 	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
 	suit: "diamonds",
 	cardImage: "images/king-of-hearts.png"
}
];

var cardsInPlay = [];

//          ***** CHECK FOR MATCH FUNCTION *****

function checkForMatch(){
	if(cardsInPlay.length == 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
  		alert("You found a match!");
		} else {
   		 alert("Sorry, try again.");
		}
	}
}

//         ***** FLIP CARD FUNCTION *****

function flipCard(){
	const cardID = this.getAttribute('data-id')
	cardsInPlay.push(cards[cardID].rank);
	this.setAttribute('src', cards[cardID].cardImage);
	checkForMatch();
	console.log("User flipped " + cards[cardID].rank);
	console.log("User flipped " + cards[cardID].suit);
	console.log("User flipped " + cards[cardID].cardImage);
}

//         ***** GAME BOARD FUNCTION *****

function createBoard () {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
};

createBoard();

