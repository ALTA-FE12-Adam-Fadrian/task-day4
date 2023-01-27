function primeX(number) {
    let indexArray = number - 1
    let arrayPrime = []
    for (let i = 2; arrayPrime.length <= number + 1; i++) {
      let flag = 0;
      
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          flag = 1;
          break;
        }
      }
  
      
      if (i > 1 && flag == 0) {
        arrayPrime.push(i)
      }
    }
    
    console.log(arrayPrime[indexArray]);
  }
  
  
    console.log(primeX(1))  // 2
    console.log(primeX(5)) // 11
    console.log(primeX(10))  // 29
    console.log(primeX(15))  // 47
    console.log(primeX(20)) // 71
    console.log(primeX(30))
    