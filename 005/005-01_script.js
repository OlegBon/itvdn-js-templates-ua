// Класс Cart, який відображає кошик покупок
// та реалізує патерн Observer для сповіщення підписників про зміни в кошику
class Cart {
  constructor() {
    this.observers = [];
  }

  addItem(item) {
    this.items = this.items || [];
    this.items.push(item);
    this.notifyObservers();
  }

  removeItem(item) {
    this.items = this.items.filter((i) => i !== item);
    this.notifyObservers();
  }

  getItems() {
    return this.items || [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  notifyObservers() {
    this.observers.forEach((observer) => observer.update(this));
  }
}

// Клас Observer, який підписується на зміни в кошику
// і отримує сповіщення про зміни
class Observer {
  constructor(name) {
    this.name = name;
  }

  update(cart) {
    console.log(`${this.name} received an update: ${cart.getItems()}`);
  }
}

// Приклад використання
const cart = new Cart();
const observer1 = new Observer("User1");
const observer2 = new Observer("User2");

cart.subscribe(observer1);
cart.subscribe(observer2);

cart.addItem("Item 1");
cart.addItem("Item 2");
cart.removeItem("Item 1");
