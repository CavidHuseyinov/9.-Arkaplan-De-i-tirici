const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["black", "yellow", "green", "blue", "red"];

button.addEventListener("click", changeBackground);
let sira = 0;

function changeBackground() {
    if(sira == 5) sira = 0;
    const secilenRenk = colors[sira];
    sira++;
    body.style.backgroundColor = secilenRenk;
}