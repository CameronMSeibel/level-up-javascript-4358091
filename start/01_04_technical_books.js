class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }
  
  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

// Write your code here
class TechnicalBook extends Book {
  constructor(title, author, isbn, numCopies, edition) {
    super(title, author, isbn, numCopies);
    this.edition = edition;
  }

  getEdition() {
    return `This book's current edition is ${this.edition}`;
  }
}

let playerHandbook = new TechnicalBook("D&D Player Handbook", "Wizards of the Coast", 12345, 420, 5);

console.log(playerHandbook.getEdition());