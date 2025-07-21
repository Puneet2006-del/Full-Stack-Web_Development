console.log("Puneet")
// let box = document.getElementsByClassName("box")
// console.log(box)
// box[2].style.backgroundColor = "Red"

// document.getElementById("red").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "Green"
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "Green"
})

e = document.getElementsByTagName("div")
e[4].matches("red")
console.log(e[4])