//Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. Hint: you might want to change the type of the number for the splitting

function myFunction(a) {
  const string = a + '';
  const strings = string.split('');
  return strings.map(digit => Number(digit));

  // a
 // .toString() // Convert the number to a string
 // .split('')  // Split the string into individual characters
 // .map(Number); // Convert each character back into a number

}

const string = a+ ''
strings = split.string('')

