function hello(name) {
    console.log("Hii " + name + " How are you?" ) 
    console.log("Hii " + name + " What is going on here?") 
    console.log("Hii " + name + " Where are you going?" ) 
}
hello("Puneet");

function sum(a, b, c = 15){
    // console.log(a + b);
    return a + b + c
}
result1 = sum(5,8);
result2 = sum(15,18);
result3 = sum(25,38,45);

console.log("The sum of these numbers is:", result1);
console.log("The sum of these numbers is:", result2);
console.log("The sum of these numbers is:", result3);

const func1 = (x)=>{
    console.log("I am an arrow function:",x);
}

func1(55);
func1(39);
func1(41);