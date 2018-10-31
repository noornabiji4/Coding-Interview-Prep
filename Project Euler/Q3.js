function largestPrimeFactor(number) {
    // Good luck!
  let prime = 2;
  let max = 1;
  while (prime <= number){
    if (number % prime == 0) {
      max = prime;
      number = number/prime;
    }
    else prime++; 
  }
  return max;
}
largestPrimeFactor(13195);
