// Класс Iterator, який буде мати методи для перевірки наявності наступного елемента та отримання його значення
class Iterator {
  constructor(collection) {
    this.collection = collection;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.collection.length;
  }

  next() {
    if (this.hasNext()) {
      return this.collection[this.index++];
    }
    throw new Error("No more elements in the collection");
  }
}

// Класи для різних типів колекцій (наприклад, масив, список) і реалізовані в них метод для отримання ітератора
class ArrayCollection {
  constructor(array) {
    this.array = array;
  }

  getIterator() {
    return new Iterator(this.array);
  }
}

class ListCollection {
  constructor(list) {
    this.list = list;
  }

  getIterator() {
    return new Iterator(this.list);
  }
}

// Класс для object
class ObjectCollection {
  constructor(object) {
    this.object = Object.values(object);
  }

  getIterator() {
    return new Iterator(this.object);
  }
}

// Приклад використання ітератора для послідовного перегляду елементів у колекції
const arrayCollection = new ArrayCollection([1, 2, 3, 4, 5]);
const arrayIterator = arrayCollection.getIterator();

console.log("Iterating through ArrayCollection:");
while (arrayIterator.hasNext()) {
  console.log(arrayIterator.next());
}

const listCollection = new ListCollection(["a", "b", "c", "d"]);
const listIterator = listCollection.getIterator();

console.log("\nIterating through ListCollection:");
while (listIterator.hasNext()) {
  console.log(listIterator.next());
}

const objectCollection = new ObjectCollection({
  key1: "value1",
  key2: "value2",
  key3: "value3",
});
const objectIterator = objectCollection.getIterator();

console.log("\nIterating through ObjectCollection:");
while (objectIterator.hasNext()) {
  console.log(objectIterator.next());
}
