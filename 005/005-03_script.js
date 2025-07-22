// Клас Mediator, який буде відповідальний за координацію взаємодії об'єктів
class Mediator {
  constructor() {
    this.colleagues = [];
  }

  addColleague(colleague) {
    this.colleagues.push(colleague);
    colleague.setMediator(this);
  }

  notify(sender, message) {
    for (const colleague of this.colleagues) {
      if (colleague !== sender) {
        colleague.receive(message);
      }
    }
  }
}

// Клас Колега1, який буде спілкуватися через медіатора
class Colleague1 {
  constructor(name) {
    this.name = name;
    this.mediator = null;
  }

  setMediator(mediator) {
    this.mediator = mediator;
  }

  send(message) {
    console.log(`${this.name} відправляє: ${message}`);
    this.mediator.notify(this, message);
  }

  receive(message) {
    console.log(`${this.name} отримує: ${message}`);
  }
}

// Клас Колега2, який буде спілкуватися через медіатора
class Colleague2 {
  constructor(name) {
    this.name = name;
    this.mediator = null;
  }

  setMediator(mediator) {
    this.mediator = mediator;
  }

  send(message) {
    console.log(`${this.name} відправляє: ${message}`);
    this.mediator.notify(this, message);
  }

  receive(message) {
    console.log(`${this.name} отримує: ${message}`);
  }
}

// Класс Колега3, який буде спілкуватися через медіатора
class Colleague3 {
  constructor(name) {
    this.name = name;
    this.mediator = null;
  }

  setMediator(mediator) {
    this.mediator = mediator;
  }

  send(message) {
    console.log(`${this.name} відправляє: ${message}`);
    this.mediator.notify(this, message);
  }

  receive(message) {
    console.log(`${this.name} отримує: ${message}`);
  }
}

// Приклад використання
const mediator = new Mediator();
const colleague1 = new Colleague1("Колега 1");
const colleague2 = new Colleague2("Колега 2");
const colleague3 = new Colleague3("Колега 3");

mediator.addColleague(colleague1);
mediator.addColleague(colleague2);
mediator.addColleague(colleague3);

colleague1.send("Привіт 111!");
colleague2.send("Привіт 222!");
colleague3.send("Привіт 333!");
