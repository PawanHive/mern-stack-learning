
function outer() {
  console.log("outer runs")
  let b = 10; 
  function inner() {
    var a = 20;
    console.log(a + b);
  }
  return inner;
}

const fn = outer();
fn();


console.log(fn)
console.log(fn())
console.log(outer())

inner();

