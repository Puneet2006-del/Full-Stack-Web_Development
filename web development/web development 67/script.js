console.log("Hello World")
// document.body
// Hello World
// document.body.childNodes
// NodeList(5) [text, div.container, text, script, text]
// document.body.childNodes[1]
// <div class=​"container">​…​</div>​
// document.body.childNodes[1].childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
// let cont = document.body.childNodes[1]
// undefined
// cont
// <div class=​"container">​…​</div>​
// cont.firstChild
// #text
// cont.lastchild
// undefined
// cont.lastChild
// #textassignedSlot: nullbaseURI: "http://127.0.0.1:3000/index.html"childNodes: NodeList []data: "\n    "firstChild: nullisConnected: truelastChild: nulllength: 5nextElementSibling: nullnextSibling: nullnodeName: "#text"nodeType: 3nodeValue: "\n    "ownerDocument: documentparentElement: div.containerparentNode: div.containerpreviousElementSibling: div.boxpreviousSibling: div.boxtextContent: "\n    "wholeText: "\n    "[[Prototype]]: Text
// cont.firstElementChild
// <div class=​"box">​Box1​</div>​
// cont.lastElementChild
// <div class=​"box">​Box5​</div>​
// cont.lastElementChild.style.backgroundColor = "blue";
// 'blue'

// document.body.firstElementChild
// <div class=​"container">​…​</div>​
// document.body.firstElementChild.childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
// document.body.firstElementChild.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
// document.body.firstElementChild.children[0]
// <div class=​"box">​Box1​</div>​
// document.body.firstElementChild.children[1]

// <div class=​"box">​Box2​</div>​
// document.body.firstElementChild.children[2]

// <div class=​"box">​Box3​</div>​

// document.body.firstElementChild.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
// document.body.firstElementChild.children[0]
// <div class=​"box">​Box1​</div>​
// document.body.firstElementChild.children[2].nextElementSibling
// <div class=​"box">​Box4​</div>​
// document.body.firstElementChild.children[2].previousElementSibling
// <div class=​"box">​Box2​</div>​
