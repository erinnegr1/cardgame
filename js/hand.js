/**
 * cards: Card[] 
 */
 function Hand(cards = []){
    // Properties
    this.cards = cards;
  
    // Methods
    this.addCard = function(card){
      this.cards.push(card);
    };
  
    this.playCard = function(card){
  
      // Check if the given card is in the hand
      // Check if a given element is in an array
  
      // Find the index of card in this.cards
      const index = this.cards.indexOf(card);
  
      if(index !== -1){  // If the card was found
        
        this.cards.splice(index, 1); // Remove it
  
        return card;
      }else { // If the card is not found
        return null;
      }
    };
  }