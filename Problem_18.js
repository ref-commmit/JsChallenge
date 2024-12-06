//Write a function that takes a number (a) as argument. Round a to the 2nd digit after the decimal point. Return the rounded number

function myFunction(a) {
  return Math.round(a*100)/100;
  //return Number(a.toFixed(2));
}
