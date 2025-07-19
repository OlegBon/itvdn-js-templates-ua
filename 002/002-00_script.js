function calculateSum(N, callback) {
  let sum = 0; // Ініціалізуємо змінну для суми
  for (let i = 1; i <= N; i++) {
    sum += i;
  }
  callback(sum);
}

// Викликаємо функцію calculateSum з різними значеннями N
calculateSum(5, (result) => {
  console.log("Сума чисел від 1 до 5:", result);
});

calculateSum(10, (result) => {
  console.log("Сума чисел від 1 до 10:", result);
});

calculateSum(20, (result) => {
  console.log("Сума чисел від 1 до 20:", result);
});
