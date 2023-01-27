function fibonacci(number) {
  if (number <= 1) return number;
   return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(9))
console.log(fibonacci(10))
console.log(fibonacci(12))