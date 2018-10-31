function fiboEvenSum(n) {
    // You can do it!
    let first = 1
    let second = 2
    let sum = 2
    let Num; 
    if (n <= 1) return sum; 
    for (let i = 2; i <= n; i++){ 
      Num = first + second;    
      first = second;
      second = Num;
      if (Num%2 == 0) sum+=Num;  
    }
    return sum;
  }
  fiboEvenSum(10);