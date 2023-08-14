// let x={
//     fn:"eswar",
//     sn:"reddy",
//     fname:function(){
//         console.log(this.fn+" "+this.sn);
//     }
// }

// let x2={
//     fn:"omkar",
//     sn:"reddy",
// }
// x.fname.call(x)

// x.fname.apply(x2)

// let a =x.fname.bind(x2)
// a();

// function test(){
//     let x=10;
//     console.log(x)
// }
// test()
// console.log(x);

// function test(course){
//     let message="learning"
//     function print(){
//         console.log(`${message} ${course}`)
//     }
//     return print;
// }
// let fun=test("react");
// fun();


function isPrime(n) {
    if (n < 2) return false;
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  function generatePrimes(n) {
    var primes = [];
    for (var i = 2; i <= n; i++) {
      if (isPrime(i)) primes.push(i);
    }
    return primes;
  }
  
  console.log(generatePrimes(100));

  var input = document.getElementById("input");
  input.addEventListener("input", function() {
    console.log(input.value);
  });