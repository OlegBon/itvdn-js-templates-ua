const lybraryModule = (() => {
  // Приватні змінні та методи
  let books = [];

  // Функція для додавання книги
  const addBook = (book) => {
    books.push(book);
  };

  // Функція для видалення книги за ідентифікатором
  const removeBook = (id) => {
    books = books.filter((book) => book.id !== id);
  };

  // Функція для пошуку книг за назвою або автором
  const searchBooks = (query) => {
    return books.filter(
      (book) => book.title.includes(query) || book.author.includes(query)
    );
  };

  // Публічний API модуля
  return {
    addBook,
    removeBook,
    searchBooks,
    getBooks: () => books,
  };
})();

// Приклад використання модуля
// Додавання
console.log("Додавання книг:");
lybraryModule.addBook({ id: 1, title: "1984", author: "George Orwell" });
lybraryModule.addBook({
  id: 2,
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
});
console.log(lybraryModule.getBooks());

// Видалення
console.log("Видалення книги з ID 1:");
lybraryModule.removeBook(1);
console.log(lybraryModule.getBooks());

// Додавання та пошук
console.log("Додавання та пошук книги за назвою 'Gatsby':");
lybraryModule.addBook({
  id: 3,
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
});
console.log(`Книги після додавання:`, lybraryModule.getBooks());
console.log(
  'Пошук книг за назвою "Gatsby":',
  lybraryModule.searchBooks("Gatsby")
);

// Додатковий код для демонстрації роботи модуля
console.log("Додавання ще однієї книги:");
lybraryModule.addBook({
  id: 4,
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
});

console.log(lybraryModule.getBooks());

// Додатковий код для демонстрації пошуку
console.log(
  'Пошук книг за автором "Harper Lee":',
  lybraryModule.searchBooks("Harper Lee")
);
// Додатковий код для демонстрації видалення
console.log("Видалення книги з ID 2:");
lybraryModule.removeBook(2);
// Перевірка результатів після видалення
console.log(`Книги після видалення:`, lybraryModule.getBooks());
