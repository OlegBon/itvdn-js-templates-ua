// Класс, який використовує стратегію сортування
class Sorter {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  sort(data) {
    return this.strategy.sort(data);
  }
}

// Інтерфейс стратегії сортування
class SortStrategy {
  sort(data) {
    throw new Error("Метод 'sort' повинен бути реалізований у підкласах");
  }
}

// Конкретна стратегія сортування у зростаючому порядку
class AscendingSortStrategy extends SortStrategy {
  sort(data) {
    return data.sort((a, b) => a - b);
  }
}

// Конкретна стратегія сортування у спадному порядку
class DescendingSortStrategy extends SortStrategy {
  sort(data) {
    return data.sort((a, b) => b - a);
  }
}

// Приклад використання
const data = [5, 3, 8, 1, 2];
const sorter = new Sorter(new AscendingSortStrategy());
sorter.sort(data); // [1, 2, 3, 5, 8]
console.log(sorter.sort(data));
sorter.setStrategy(new DescendingSortStrategy());
sorter.sort(data); // [8, 5, 3, 2, 1]
console.log(sorter.sort(data));
