function isPrimeNumber(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const number = 13;
const isPrime = isPrimeNumber(number);
console.log(isPrime); // Output: true
