// Клас Cafe, який буде використовувати шаблон Singleton для забезпечення єдиного екземпляру кафе
class Cafe {
  constructor() {
    if (Cafe.instance) {
      return Cafe.instance;
    }
    this.menu = [];
    Cafe.instance = this;
  }

  // Метод для додавання напою до меню
  addBeverage(beverage) {
    this.menu.push(beverage);
  }

  // Метод для отримання меню
  getMenu() {
    return this.menu;
  }
}

// Клас Beverage, який буде єдиним класом для опису напоїв у кафе
class Beverage {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Фабрика для створення об'єктів типу Beverage
class BeverageFactory {
  static createBeverage(name, price) {
    return new Beverage(name, price);
  }
}

// Приклад використання
const cafe = new Cafe();
const beverage1 = BeverageFactory.createBeverage("Cappuccino", 5.0);
const beverage2 = BeverageFactory.createBeverage("Latte", 4.5);
cafe.addBeverage(beverage1);
cafe.addBeverage(beverage2);
const menu = cafe.getMenu();
console.log(menu);

// Виведення інформації про напої
menu.forEach((beverage) => {
  console.log(`Напій: ${beverage.name}, ціна: ${beverage.price}`);
});
