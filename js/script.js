"use strict"

function Bhanza(hanza, reich, redline, ranger) {
    ranger.classList.remove("visible");
    redline.classList.remove("visible");
    reich.classList.remove("visible");
    hanza.classList.remove("visible");
    hanza.classList.add("visible");
}
function Breich(hanza, reich, redline, ranger) {
    ranger.classList.remove("visible");
    redline.classList.remove("visible");
    hanza.classList.remove("visible");
    reich.classList.remove("visible");
    reich.classList.add("visible");
}
function Bredline(hanza, reich, redline, ranger) {
    ranger.classList.remove("visible");
    hanza.classList.remove("visible");
    reich.classList.remove("visible");
    redline.classList.remove("visible");
    redline.classList.add("visible");
}
function Branger(hanza, reich, redline, ranger) {
    hanza.classList.remove("visible");
    redline.classList.remove("visible");
    reich.classList.remove("visible");
    ranger.classList.remove("visible");
    ranger.classList.add("visible");
}

let bhanza = document.getElementsByClassName("bhanza");
let breich = document.getElementsByClassName("breich");
let bredline = document.getElementsByClassName("bredline");
let branger = document.getElementsByClassName("branger");

bhanza.addEventListener("onclick", function () {
    let hanza = document.getElementsByClassName("hanza");
    let reich = document.getElementsByClassName("reich");
    let redline = document.getElementsByClassName("redline");
    let ranger = document.getElementsByClassName("ranger");

    Bhanza(hanza, reich, redline, ranger);

});

breich.addEventListener("click", function () {
    let hanza = document.getElementsByClassName("hanza");
    let reich = document.getElementsByClassName("reich");
    let redline = document.getElementsByClassName("redline");
    let ranger = document.getElementsByClassName("ranger");

    Breich(hanza, reich, redline, ranger);

});