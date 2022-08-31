function Deck(ranks, suits, cards = []) {
    // Properties
    this.ranks = ranks; // This is an array of ranks
    this.suits = suits; // This is an array of suits
    this.cards = cards; // This is an array of cards
  
    // Methods
    this.generateCards = function () {
      // Populate this.cards with a filled deck of cards
      for (const rank of this.ranks) {
        for (const suit of this.suits) {
          const card = new Card(rank, suit);
          this.cards.push(card);
        } 
      }
    };
  
    // Pulled from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    function shuffle(array) {
      let currentIndex = array.length,
        randomIndex;
  
      // While there remain elements to shuffle.
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
  
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }
  
      return array;
    }
  
    // Shuffle the cards using the function from Stack Overflow
    this.shuffleCards = function () {
      shuffle(this.cards);
    };
  
    // Get the last card in my array and return it (pop)
    this.draw = function () {
      return this.cards.pop();
    };
  
    this.dealHands = function (numHands, cardsPerHand) {
      const hands = []; // Create a new array of hands
  
      // For each number of hands
      for (let i = 0; i < numHands; i++) {
        // Create a new hand
        const hand = new Hand();
  
        // Add some cards to the hand
        for (let j = 0; j < cardsPerHand; j++) {
          const card = this.draw();
          hand.addCard(card);
        }
  
        hands.push(hand); // Save the new hand in hands
      }
      return hands; // Return the array of all the filled-in hands
    };
  
    // Do this when a deck is first made
    this.generateCards();
    this.shuffleCards();
  }
  
  /////////
  /*
  const c = d.draw();
  if (!!c){ // If c exists (is NOT null or NOT undefined)
  
  }
  */