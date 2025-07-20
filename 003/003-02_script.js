const myModule = (function () {
  // Приватні змінні
  let privateVar1 = 10;
  let privateVar2 = 20;

  // Публічна функція
  function publicFunction() {
    return privateVar1 + privateVar2;
  }

  return {
    publicFunction: publicFunction,
  };
})();

// Використання модуля
console.log(`Сума приватних змінних: ${myModule.publicFunction()}`); // Виведе 30

// Використання приватних змінних
console.log(myModule.privateVar1); // Виведе undefined
