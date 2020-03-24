"use strict"


// Apparition initiale des Factions

document.getElementById("hanza").style.display = "block";
document.getElementById("reich").style.display = "none";
document.getElementById("redline").style.display = "none";
document.getElementById("ranger").style.display = "none";


// Fonctions des boutons de choix factions

function bhanza() {
    document.getElementById("hanza").style.display = "block";
    document.getElementById("reich").style.display = "none";
    document.getElementById("redline").style.display = "none";
    document.getElementById("ranger").style.display = "none";
}

function breich() {
    document.getElementById("hanza").style.display = "none";
    document.getElementById("reich").style.display = "block";
    document.getElementById("redline").style.display = "none";
    document.getElementById("ranger").style.display = "none";
}

function bredline() {
    document.getElementById("hanza").style.display = "none";
    document.getElementById("reich").style.display = "none";
    document.getElementById("redline").style.display = "block";
    document.getElementById("ranger").style.display = "none";
}

function branger() {
    document.getElementById("hanza").style.display = "none";
    document.getElementById("reich").style.display = "none";
    document.getElementById("redline").style.display = "none";
    document.getElementById("ranger").style.display = "block";
}