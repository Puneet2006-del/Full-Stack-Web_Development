// let obj = {
//     a: 1,
//     b: "Puneet"
// }

// console.log(obj)


// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; // sets rabbit.[[prototype]] = animal


class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created....")
    }

    eats(){
        console.log("I am eating")
    }

    jump(){
        console.log("I am jumping")
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("Object is created and he is a lion....")
    }
}

let a = new Animal("Bunny");
console.log(a)

let l = new Lion("Shera")
console.log(l)