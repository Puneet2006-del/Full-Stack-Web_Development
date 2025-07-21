document.querySelector(".box")
<div class=​"box">​Here is a Box​</div>​
document.querySelector(".box").innerHTML
'Here is a Box'
document.querySelector(".container").innerHTML
'\n        <div class="box">Here is a Box</div>\n    '
document.querySelector(".box").outerHTML
'<div class="box">Here is a Box</div>'
document.querySelector(".box").tagName
'DIV'
document.querySelector(".box").nodeName
'DIV'
document.querySelector(".box").textContent
'Here is a Box'
document.querySelector(".box").hidden
false
document.querySelector(".box").hidden = true
true
document.querySelector(".box").hasAttribute("style")
false
document.querySelector(".box").attributes
NamedNodeMap {0: class, 1: hidden, class: class, hidden: hidden, length: 2}