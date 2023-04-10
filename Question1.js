function addNumberClosure(n) {
  function addNumber(x) {
    return x + n;
  }
  return addNumber;
}
const addFive = addNumberClosure(5);
console.log(addFive(10));  // Output: 15
console.log(addFive(20));  // Output: 25
console.log(addFive(30));  // Output: 35
