function checkPrime(num) {
  if (num === 0 && num === 1) return false;
    if (num === 2) return true;
    
  for(let i = 2; i < num; i++){
    if(num % i === 0){
      return false
    }
    return true
  }
}


function primaSegiEmpat(wide, high, start){
  let string = "";
  let count = 0;

  for(let i = 0; i < high; i++){
    for(let j = 0; j < wide; j++) {
      do {
        start++
      } while(!checkPrime(start))
        count += start;
        string += `${start}` 
  }
  string += "\n"
}
  string += count;
  return string;
}

console.log(primaSegiEmpat(5, 2, 1))