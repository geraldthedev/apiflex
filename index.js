let body = document.getElementById("root");
let space = document.createElement("div");
const pieces = document.createElement("input");
const addbutto = document.createElement("button");



couta = () => {
body.appendChild(space);
body.appendChild(addbutto);
space.appendChild(pieces);

addbutto.onclick();
}


couta(body,space,pieces,addbutto);


