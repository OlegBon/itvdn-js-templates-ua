// Створіть клас NotificationSystem, який буде відповідальний за керування сповіщеннями в системі.
// Використовуйте шаблон Observer для підписки на сповіщення від різних джерел і повідомлення підписаних користувачів про ці сповіщення.
class NotificationSystem {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
  }

  notify(message) {
    this.subscribers.forEach((subscriber) => subscriber.update(message));
  }
}

// Реалізуйте два класи EmailService та SMSService, які будуть відправляти сповіщення на електронну пошту та за допомогою SMS відповідно.
// Переконайтеся, що вони реалізують інтерфейс або абстрактний клас, який має метод для відправки сповіщення.
class EmailService {
  constructor(email) {
    this.email = email;
  }

  update(message) {
    console.log(`Email sent to ${this.email}: ${message}`);
  }
}

class SMSService {
  constructor(phone) {
    this.phone = phone;
  }

  update(message) {
    console.log(`SMS sent to ${this.phone}: ${message}`);
  }
}

// Створіть декілька користувачів, які підпишуться на отримання сповіщень через електронну пошту або SMS.
const notificationSystem = new NotificationSystem();
const emailService = new EmailService("OY2kD@example.com");
const smsService = new SMSService("1234567890");

notificationSystem.subscribe(emailService);
notificationSystem.subscribe(smsService);

// Спробуйте відправити сповіщення та переконайтеся, що вони успішно отримані користувачами через обрані ними канали зв'язку.
notificationSystem.notify("New product available!");
notificationSystem.notify("Special discount for today!");
