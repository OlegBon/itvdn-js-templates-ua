let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Масив чисел:", numberArray);

// Додавання
let sum = 0;
numberArray.forEach((number) => {
  if (number % 2 === 0) {
    sum += number;
  }
});
console.log(`Сума парних чисел: ${sum}`);

// Віднімання
let difference = 0;
numberArray.forEach((number) => {
  if (number % 2 !== 0) {
    difference -= number;
  }
});
console.log(`Різниця непарних чисел: ${difference}`);

// Множення
let max = 0,
  min = numberArray[0];

numberArray.forEach((number) => {
  if (number > max) {
    max = number;
  }
  if (number < min) {
    min = number;
  }
});

console.log(`Множення max і min: ${max} * ${min} = ${max * min}`);

// Ділення
let max2 = 0,
  min2 = numberArray[0];

numberArray.forEach((number) => {
  if (number > max2) {
    max2 = number;
  }
  if (number < min2) {
    min2 = number;
  }
});

console.log(`Ділення max і min: ${max2} / ${min2} = ${max2 / min2}`);
