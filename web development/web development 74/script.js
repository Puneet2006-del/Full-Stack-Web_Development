let btn = document.getElementById("btn");
btn.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b> You were clicked </b>"
})

btn.addEventListener("contextmenu", ()=>{
    alert("Don't hack us by right click")
})

document.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode)
})
