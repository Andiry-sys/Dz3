let str = prompt("Enter number");
let k = prompt("How many digits to move it?");

console.log(str.slice(k) + str.slice(0, k));