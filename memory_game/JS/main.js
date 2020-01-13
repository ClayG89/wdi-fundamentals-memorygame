const cards = ["queen","queen","king","king"];
let cardsInPlay = [0, 1, 2, 3];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[2]) { 
			console.log("You found a match!");
}

	else
		{
			console.log("Sorry, try again.");
		}
};

		function flipCard(cardId) {
			console.log("User flipped " + cards[cardId])
if (cardsInPlay.length === 2) 

checkForMatch();

		cardsInPlay.push(cards[cardId]);
		
	};

flipCard([0]);
flipCard([2]);
checkForMatch();


