const SingletonTaskManager = (function () {
  let instance;

  function createInstance() {
    const tasks = [];

    return {
      addTask: function (task) {
        tasks.push(task);
      },
      getTasks: function () {
        return tasks;
      },
      removeTask: function (task) {
        const index = tasks.indexOf(task);
        if (index > -1) {
          tasks.splice(index, 1);
        }
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Приклад використання
const taskManager = SingletonTaskManager.getInstance();
taskManager.addTask("Завдання 1");
taskManager.addTask("Завдання 2");
console.log(taskManager.getTasks()); // Виведе: ["Завдання 1", "Завдання 2"]
taskManager.removeTask("Завдання 1");
console.log(taskManager.getTasks()); // Виведе: ["Завдання 2"]

// Спробуємо створити ще один екземпляр
const anotherTaskManager = SingletonTaskManager.getInstance();
anotherTaskManager.addTask("Завдання 3");
console.log(anotherTaskManager.getTasks()); // Виведе: ["Завдання 2", "Завдання 3"]
