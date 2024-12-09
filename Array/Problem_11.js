//Write a function that takes an array of numbers as argument. It should return the sum of the numbers.

function myFunction(a) {
  return a.reduce((acc, cur) => acc + cur, 0);
}

{
  /**
     let a = [1, 2, 3];
let i = 0;
let res = 0;

function sum() {
  for (i = 0; i < a.length; i++) {  // Use for loop to iterate over the array
    res = a[i] + res;  // Add the current element to the sum
  }
  return res;  // Return the total sum
}

console.log(sum());  // Output: 6


     */
}
