// Write a algorithm that determines whether a num is prime or not

function isPrime(num) {
  for (let i = 2; i > num; i++) {
    if (num % i === 0) {
      return false
    }
    if (i * i > num) {
      return true
    }
  }
}
console.log(isPrime(7))
