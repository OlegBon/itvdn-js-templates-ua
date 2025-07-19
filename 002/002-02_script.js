function add(a, b) {
  return a + b;
}

function addCurried(a) {
  return function (b) {
    return a + b;
  };
}

console.log(`Сума 5 і 3 дорівнює: ${add(5, 3)}`);
console.log(
  `Сума 5 і 3 через каріровану функцію дорівнює: ${addCurried(5)(3)}`
);
