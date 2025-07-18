let set = new Set(["apple", "banana", "cherry", "grape", "kiwi", "lemon"]);
console.log("Набір унікальних фруктів:", set);

let fruit = "banana";
if (set.has(fruit)) {
  console.log(`Набір містить фрукт ${fruit}.`);
} else {
  console.log(`Набір не містить фрукт ${fruit}.`);
}

set.delete("banana");
console.log("Набір після видалення:", set);
