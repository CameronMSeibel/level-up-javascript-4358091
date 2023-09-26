/**
 * Book availability exercise
 * Class tracks title, author, isbn, numCopies
 */

class Book {

  constructor(title, author, isbn, numCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies;
  }

  getAvailability() {
    if(this.numCopies === 0) {
      return "out of stock";
    }
    if(this.numCopies < 10) {
      return "low stock";
    }
    return "in stock";
  }

  restock(numCopies = 5) {
    if(numCopies < 0) return;
    this.numCopies += numCopies;
  }

  sell(numSold = 1) {
    if(numSold < 0) return;
    this.numCopies -= numSold;
    if(this.numCopies < 0) this.numCopies = 0;
  }
}
