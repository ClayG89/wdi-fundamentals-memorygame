const cards = ["queen","queen","king","king"];
let cardsInPlay = [];
let cardOne = cards[0];
cardsInPlay.push('queen');
console.log("User flipped queen")
let cardTwo = cards[2];
cardsInPlay.push('king');
console.log("User flipped king")
if (cardsInPlay.length === 2) {

}
		if (cardsInPlay[0] === cardsInPlay[2]) {
			alert("You found a match!");

}
	else
		if (cardsInPlay[0] !== cardsInPlay[2]) {
			alert("Sorry, try again.");
		};


