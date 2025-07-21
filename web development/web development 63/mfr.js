// MFR stands for map filter and reduce..

let arr = [34,53,9,11,18,72,85];

// let newArr = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2);
// }

// console.log(newArr);

// Insted of doing this do this --->

// let newArr = arr.map((e)=>{
//     return e**2;
// })

// console.log(newArr);

// const greaterThanTwenty = (e)=>{
//     if(e>20)
//         return true;
//     return false;
// }
// console.log(arr.filter(greaterThanTwenty));
let arr2 = [5,6,12,15];

const redu = (a,b)=>{
    return a+b;
}
console.log(arr2.reduce(redu));