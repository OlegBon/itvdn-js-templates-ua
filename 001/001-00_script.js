class Rectangle {
  #width;
  #height;
  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  get width() {
    return this.#width;
  }

  get height() {
    return this.#height;
  }

  set width(width) {
    this.#width = width;
  }

  set height(height) {
    this.#height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

let rectangle = new Rectangle(5, 3);
rectangle.width = 7;
rectangle.height = 4;
console.log(
  `Прямокутник з шириною ${rectangle.width} і висотою ${rectangle.height}:`
);
console.log(`Площа прямокутника: ${rectangle.calculateArea()}`);
console.log(`Периметр прямокутника: ${rectangle.calculatePerimeter()}`);
