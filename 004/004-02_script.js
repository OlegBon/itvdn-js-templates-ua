// Базовий клас для товару, до якого будуть застосовуватися знижки та все інше
class Product {
  constructor(name, description, price, quantity) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.quantity = quantity;
  }

  getName() {
    return this.name;
  }
  getDescription() {
    return this.description;
  }

  getPrice() {
    return this.price;
  }

  getQuantity() {
    return this.quantity;
  }
}

// Декоратор для застосування знижки до товару
class DiscountDecorator {
  constructor(product, discount) {
    this.product = product;
    this.discount = discount;
  }

  getPrice() {
    const originalPrice = this.product.getPrice();
    const discountAmount = (originalPrice * this.discount) / 100;
    return originalPrice - discountAmount;
  }
}

// Приклад використання
const product = new Product(
  "Ноутбук",
  "Потужний ноутбук для роботи та розваг",
  1000,
  5
);
console.log(`Назва товару: ${product.getName()}`);
console.log(`Опис товару: ${product.getDescription()}`);
console.log(`Ціна товару: ${product.getPrice()}`);
console.log(`Кількість товару: ${product.getQuantity()}`);

console.log("\nЗастосування знижки до товару:");

const discount = 10; // Знижка 10%
const discountedProduct = new DiscountDecorator(product, discount);
console.log("Знижка:", discount);
console.log(`Ціна товару зі знижкою: ${discountedProduct.getPrice()}`);
