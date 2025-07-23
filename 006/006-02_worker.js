// Обробка повідомлення від основного потоку
function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function findPrimesInRange(start, end) {
  const primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
}

self.onmessage = function (event) {
  const { start, end } = event.data;
  const primes = findPrimesInRange(start, end);
  self.postMessage(primes);
};
