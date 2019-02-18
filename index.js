
let body = document.getElementById("root");
let space = document.createElement("div");
const pieces = document.createElement("input");
const addbutto = document.createElement("button");
const subbutto = document.createElement("button");

body.appendChild(space).setAttribute("class", "container-fluid");
body.appendChild(addbutto).setAttribute("id", "taken");
addbutto.innerText = "Start";



addbutto.addEventListener("click", couta = ()=>{


    body.appendChild(space);
    body.appendChild(pieces).setAttribute( "id", "clickbox");
    body.appendChild(subbutto).setAttribute("id", "subbox");
    subbutto.innerText = "Submit";


    });












