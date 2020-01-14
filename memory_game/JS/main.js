const cards = [  {
    rank: "queen",
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
    cardImage: "images/king-of-diamonds.png"
  }
];
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
			console.log("User flipped " + cards[cardId].rank)
			console.log(cards[cardId].cardImage)
			console.log(cards[cardId].suit)
if (cardsInPlay.length === 2) 

checkForMatch();

		cardsInPlay.push(cards[cardId].rank);
		
	};

flipCard([0]);
flipCard([2]);
checkForMatch();


