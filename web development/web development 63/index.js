// Arrays in JavaScript = In JavaScript arrays are the collection of different date types. arrays are mutable.

let arr = [45,56,78,6,35,87]

arr[0] = 21; // Replace 45 by 21
console.log(arr)
console.log(arr.length);// Return length of array
console.log(typeof(arr)); // Return type of array which is "object" in JavaScript.
console.log(arr[0]) // Prints 0th index

// console.log(arr.toString()) Convert array to string

console.log(arr.join(" and ")) // replace " , " to and 
console.log(arr.pop())// Take out last element and return it 

console.log(arr.push("Puneet")); // Add "Puneet" in last element 
console.log(arr); 

console.log(arr.shift()); // Take out  first element and return it 
console.log(arr)

console.log(arr.unshift("Jack")); // Add "Jack" in first index
console.log(arr)

console.log(delete(arr[4])); // Delete a particular element in array (35).
console.log(arr[4]); // NO value define. 

let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [7,8,9];

console.log(a1.concat(a2,a3)); // Returns a new array and does not change existing arrays.

let a4 = [45,12,65,22,36,97,52] 
// console.log(a4.sort());      Shorting an array

console.log(a4.splice(1,3)); // Take out elements from first second and third index.
console.log(a4);  // Returns Remaining Elements





 