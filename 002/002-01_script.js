function multiplyByTwo(x, callback) {
  const result = x * 2;
  callback(result);
}

console.log("multiplyByTwo(5, (result) => console.log(result))");
multiplyByTwo(5, (result) => console.log(result));
console.log("--------------------");
console.log("multiplyByTwo(10, (result) => console.log(result))");
multiplyByTwo(10, (result) => console.log(result));
