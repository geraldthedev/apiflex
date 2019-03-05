import newConn  from './app.js';
import './index.css';
let body = document.getElementById("root");
let space = document.createElement("div");
const pieces = document.createElement("input");
const addbutto = document.createElement("button");
const subbutto = document.createElement("button");

body.appendChild(space).setAttribute("class", "container-fluid");
body.appendChild(addbutto).setAttribute("id", "taken");
addbutto.innerText = "Start";



addbutto.addEventListener("click", couta = ()=>{
    let newForm = document.createElement("form");

    body.appendChild(space);
    space.appendChild(newForm).setAttribute("id", "newdiv1");

    newForm.appendChild(pieces).setAttribute( "id", "clickbox");
    newForm.appendChild(subbutto).setAttribute("id", "subbox");
    subbutto.innerText = "Submit";
    newForm.setAttribute("method", "post");
    newForm.setAttribute("action", "/app");
    addbutto.style.display = "none";

 subbutto.addEventListener("click", postIt =()=>{


    });
    });












