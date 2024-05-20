class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Book extends Product {
  constructor(name, price, author) {
    super(name, price);
    this.author = author;
  }

  getauthor() {
    return this.author;
  }

  setAuthor(author) {
    this.author = author;
  }
}

const book = new Book("The Great Gatsby", 10, "F. Scott Fitzgerald");
console.log(book);
console.log(book.price);

console.log(book instanceof Product);
