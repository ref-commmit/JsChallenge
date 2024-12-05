//Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.
function countOccurrences(a, b) {
    let count = 0;
    let position = b.indexOf(a); // Find the first occurrence of 'a' in 'b'
  
    while (position !== -1) {
      count++; // Increment the count for each occurrence
      position = b.indexOf(a, position + 1); // Look for the next occurrence
    }
  
    return count;
  }
