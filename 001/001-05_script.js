class Book {
  #name;
  #author;
  #year;
  constructor(name, author, year) {
    this.#name = name;
    this.#author = author;
    this.#year = year;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get author() {
    return this.#author;
  }

  set author(author) {
    this.#author = author;
  }

  get year() {
    return this.#year;
  }

  set year(year) {
    this.#year = year;
  }

  toConsoleBook() {
    return `Назва книги: ${this.#name}, Автор: ${this.#author}, Рік видання: ${
      this.#year
    }`;
  }
}

let book = new Book("1984", "George Orwell", 1949);
console.log(book.toConsoleBook());
