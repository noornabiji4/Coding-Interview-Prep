function multiplesOf3and5(number) {
    // Good luck!
   var a=0;
   for (var i=3; i<number; i++){
     if (i%3==0 || i%5==0){
       a += i
     }
  
   }
      return a
  
  }
  
  multiplesOf3and5(1000);