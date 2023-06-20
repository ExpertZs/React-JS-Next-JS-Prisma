function calculateSquareRootOfSumOfSquares(numbers) {
  const sumOfSquares = numbers.reduce((sum, num) => sum + Math.pow(num, 2), 0);
  const squareRoot = Math.sqrt(sumOfSquares);
  return squareRoot;
}

const numbers = [1, 2, 3, 4, 5];
const result = calculateSquareRootOfSumOfSquares(numbers);
console.log(result); // Output: 7.416198487095663

