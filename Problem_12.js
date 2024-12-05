// Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation

function myFunction(a, b) {
   if(a.includes(b)) {
    return b + a; // Append b to the beginning if a contains b
  } else {
    return a + b; // Append b to the end if a does not contain b
  };
}


function myFunction(a, b) {
    return a.indexOf(b) === -1 ? a + b : b + a  // here -1 indicates substring is not found in the string 
  }