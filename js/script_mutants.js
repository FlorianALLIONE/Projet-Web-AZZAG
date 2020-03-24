// Apparition initiale des Mutants

document.getElementById("nosalis").style.display = "block";
document.getElementById("hurleurs").style.display = "none";
document.getElementById("demons").style.display = "none";
document.getElementById("libraire").style.display = "none";
document.getElementById("sombre").style.display = "none";


// Fonctions des boutons choix Mutants

function bnosalis() {
    document.getElementById("nosalis").style.display = "block";
    document.getElementById("hurleurs").style.display = "none";
    document.getElementById("demons").style.display = "none";
    document.getElementById("libraire").style.display = "none";
    document.getElementById("sombre").style.display = "none";
}

function bhurleurs() {
    document.getElementById("nosalis").style.display = "none";
    document.getElementById("hurleurs").style.display = "block";
    document.getElementById("demons").style.display = "none";
    document.getElementById("libraire").style.display = "none";
    document.getElementById("sombre").style.display = "none";
}

function bdemons() {
    document.getElementById("nosalis").style.display = "none";
    document.getElementById("hurleurs").style.display = "none";
    document.getElementById("demons").style.display = "block";
    document.getElementById("libraire").style.display = "none";
    document.getElementById("sombre").style.display = "none";
}

function blibraire() {
    document.getElementById("nosalis").style.display = "none";
    document.getElementById("hurleurs").style.display = "none";
    document.getElementById("demons").style.display = "none";
    document.getElementById("libraire").style.display = "block";
    document.getElementById("sombre").style.display = "none";
}

function bsombre() {
    document.getElementById("nosalis").style.display = "none";
    document.getElementById("hurleurs").style.display = "none";
    document.getElementById("demons").style.display = "none";
    document.getElementById("libraire").style.display = "none";
    document.getElementById("sombre").style.display = "block";
}